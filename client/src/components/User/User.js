import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser, editUser } from "../../actions/userAct";
import { Container, Card, Button, Row } from "react-bootstrap";

const User = ({ ...rest }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.users[0]);
  const [userInfo, setUserInfo] = useState({
    fname: user?.name,
    lname: user?.name,
    email: user?.email,
  });

  useEffect(() => {
    dispatch(getUser(rest.match.params.id));
    //this sends the id to the userAct.JS
    setUserInfo(user);
  }, [dispatch, rest]);

  const handleEdit = (e) => {
    if (userInfo?._id) {
      dispatch(editUser(user._id, userInfo));
      history.push(`/CreateUser/${user._id}`);
    }
  };

  console.log("this is userInfo", userInfo);
  return (
    <Container>
      <Row>{/* <Button>Create New User</Button> */}</Row>
      <Row>
        <Card.Header className="text-white" as="h5">
          Profile:
        </Card.Header>
        <Card.Body className="text-white">
          <Card.Text>Name: {user?.name}</Card.Text>
          {/* <Card.Text>Last Name: {user?.lname}</Card.Text> */}
          <Card.Text>Email: {user?.email}</Card.Text>
          <Button onClick={handleEdit}>Edit</Button>
        </Card.Body>
      </Row>
    </Container>
  );
};

export default User;
