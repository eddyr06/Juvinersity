import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser, editUser } from "../../actions/userAct";
import { Container, Card, Button, Row, Col, Stack } from "react-bootstrap";

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

  return (
    <Container className="pt-5">
      {/* <Button>Create New User</Button> */}
      <Row className="mb-3 pt-3">
        <Col lg="10" className="text-white fs-2">
          User Profile
        </Col>
      </Row>
      <Card>
        <Card.Body>
          <Stack gap={2} className="col-md-5 pt-3 fs-6">
            <Row>
              <Col>
                <Card.Text className="fw-bold">Name:</Card.Text>
                <Card.Text>{user?.name}</Card.Text>
              </Col>
            </Row>
          </Stack>

          <Stack gap={2} className="col-md-5 pt-5 fs-6">
            <Row>
              <Col>
                <Card.Text className="fw-bold">Email:</Card.Text>
                <Card.Text>{user?.email}</Card.Text>
              </Col>
            </Row>
          </Stack>
        </Card.Body>
        <Card.Footer>
          <Button
            active
            variant="outline-secondary"
            size="md"
            className="ms-1"
            onClick={handleEdit}
          >
            Edit
          </Button>
          <Button
            variant="outline-secondary"
            size="md"
            className="ms-4"
            onClick={() => history.goBack()}
          >
            Cancel
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default User;
