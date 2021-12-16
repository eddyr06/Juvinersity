import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, createUser } from "../../actions/userAct";
import { useHistory } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

const CreateUser = ({ currentId, setCurrentId, ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.users);
  const [userInfo, setUserInfo] = useState({
    name: user.name,
    email: user.email,
  });

  //finding and matching the ID with the article we are going to edit
  const profile = useSelector((state) =>
    state.users.find((a) => a._id === rest.match.params.id)
  );

  //useEffect to edit the article
  useEffect(() => {
    if (profile) setUserInfo(profile);
  }, [profile]);

  // console.log("this is profile", profile);
  console.log("this is userInfo", userInfo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profile?._id) {
      dispatch(updateUser(profile?._id, setUserInfo));
    } else {
      dispatch(createUser(userInfo));
    }
    clear();
    history.push("/User");
  };

  const clear = () => {
    // setarticle._id(null);
    setUserInfo({
      firstName: user.fname,
      lastName: user.lname,
      email: user.email,
    });
  };

  return (
    <Container className="faq-form">
      <Form onSubmit={handleSubmit}>
        <Form.Text className="fs-2 fw-bold text-white ">
          {profile?._id ? "Edit" : "Create"} Your Profile
        </Form.Text>
        <Form.Group className="mb-3">
          <Form.Label className="mt-3">Name:</Form.Label>
          <Form.Control
            type="text"
            id="title"
            name="title"
            value={userInfo?.name}
            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
          />
        </Form.Group>
        {/* <Form.Group className="mb-5">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            id="description"
            name="description"
            value={userInfo?.lname}
            onChange={(e) =>
              setUserInfo({ ...userInfo, lname: e.target.value })
            }
          />
        </Form.Group> */}
        <Form.Group className="mb-5">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            id="email"
            name="email"
            value={userInfo?.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
          />
        </Form.Group>
        <Button
          variant="outline-secondary"
          size="lg"
          className="ms-1"
          type="submit"
          active
        >
          Submit
        </Button>
        <Button
          variant="outline-secondary"
          size="lg"
          className="ms-4"
          onClick={clear}
        >
          Clear
        </Button>
        <Button
          variant="outline-secondary"
          size="lg"
          className="ms-4"
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
      </Form>
    </Container>
  );
};

export default CreateUser;
