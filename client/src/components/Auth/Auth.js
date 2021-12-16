import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signIn, signUp } from "../../actions/authAct.js";
import "./styles.css";
import signinImage from "../../images/posandrea.jpg";
import logo from "../../images/logo-dark.svg";
import {
  Stack,
  Container,
  Image,
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      //dispatch is an action that comes from redux this actions are located
      //in the actions folder, there is an action created signup in the authAct
      dispatch(signUp(formData, history));
    } else {
      dispatch(signIn(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //toggle to change isSignup Status
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  //google sign in
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
    console.log(res);
  };
  const googleFailure = () => {
    console.log("Try Again");
  };

  return (
    <Container className="pt-2">
      <Row>
        <Col lg={5}>
          <Container>
            <Image src={logo} alt="logo" fluid />
            <Row className="mt-4">
              <Container>
                <Stack direction="horizontal" gap={5} className="my-auto">
                  <Button
                    variant={isSignup ? "outline-secondary" : "outline-info"}
                    onClick={switchMode}
                  >
                    Sign In
                  </Button>
                  <Button
                    variant={isSignup ? "outline-info" : "outline-secondary"}
                    onClick={switchMode}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </Container>
            </Row>
            <Row className="mt-4">
              <Col lg={2}></Col>

              <Col lg={10}>
                <GoogleLogin
                  clientId="390438336361-6aq86nkqqtg2dsvah8s85a70nj2guqct.apps.googleusercontent.com"
                  render={(props) => (
                    <Button
                      variant="outline-success"
                      onClick={props.onClick}
                      disabled={props.disabled}
                    >
                      Sign In with Google
                    </Button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                />
              </Col>
            </Row>

            <Form onSubmit={handleSubmit}>
              {isSignup && (
                <>
                  <Form.Group controlId="fname" className="mt-3 text-white">
                    <Form.Label>First Name*:</Form.Label>
                    <Form.Control
                      type="text"
                      // id="fname"
                      name="fname"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="pt-3 text-white" controlId="lname">
                    <Form.Label>Last Name*: </Form.Label>
                    <Form.Control
                      type="text"
                      // id="lname"
                      name="lname"
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </>
              )}
              <Form.Group className="pt-3 text-white" controlId="email">
                <Form.Label>Email*: </Form.Label>
                <Form.Control
                  type="email"
                  // id="email"
                  name="email"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="pt-3 text-white" controlId="password">
                <Form.Label htmlFor="password">Password*: </Form.Label>
                <Form.Control
                  type="password"
                  // id="password"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>

              {isSignup && (
                <Form.Group
                  className="pt-3 text-white"
                  controlId="confirmPassword"
                >
                  <Form.Label htmlFor="confirmPassword">
                    Confirm Password:{" "}
                  </Form.Label>
                  <Form.Control
                    type="password"
                    // id="confirmPassword"
                    name="confirmPassword"
                    onChange={handleChange}
                  />
                </Form.Group>
              )}
              <Stack className="col-md-3 pt-2 mx-auto">
                <Button
                  className="mt-4"
                  variant={isSignup ? "info" : "info"}
                  type="submit"
                >
                  {isSignup ? " Sign Up" : "Sign In"}
                </Button>
              </Stack>
            </Form>
          </Container>
        </Col>
        <Col lg={7}>
          <Container>
            <Image src={signinImage} fluid alt="sarapos" />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Auth;
