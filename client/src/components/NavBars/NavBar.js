import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import "./styles.css";
import logo from "../../images/logo-dark.svg";
import { Navbar, Container, Nav, Button } from "react-bootstrap";

const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/");
    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <Navbar sticky="top" className="color-nav" variant="dark">
      <Container className="nav-bars">
        <Navbar.Brand href="/">
          <img className="nav-img" src={logo} alt="logo" fluid />
        </Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link className="text-white" href="/Topics">
            Topics
          </Nav.Link>
          <Nav.Link className="text-white" href="/FAQs">
            FAQs
          </Nav.Link>
        </Nav>
        <Nav className="signin">
          {user ? (
            <>
              {/* <img src={user.result.imageUrl} alt={user.result.name} /> */}
              <Nav.Link href={`/User/${user.result._id}`}>
                <Navbar.Text className="signin-user text-info">
                  {user.result.name}
                </Navbar.Text>
              </Nav.Link>
              <Button variant="outline-light" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <Nav.Link href="/auth">
              <Button variant="outline-secondary">Sign In</Button>
            </Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
