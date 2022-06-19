import React from "react";
import { Link } from "react-router-dom";
import Account from "../../Assets/account.png";
// import pcbuildicon from "../../Assets/pcbuildicon.png";
import Cart from "../../Assets/cart.png";
import apiService from "../../services/ApiService";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./NavBar.css";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import {
  AccountBox,
  AccountCircleTwoTone,
  LocalMall,
  ShoppingBasket,
  ShoppingCartOutlined,
  ShoppingCart,
  SettingsPhoneTwoTone,
} from "@material-ui/icons";
import { makeStyles, CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginRight: theme.spacing(100),
    marginTop: theme.spacing(2),
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    marginTop: theme.spacing(2),
  },
  link: {
    textDecoration: "none",
    width: "100px",
    color: "white",
    padding: "7px",
    fontSize: "20px",
    fontWeight: "bold",
    marginLeft: theme.spacing(8),
    "&:hover": {
      backgroundColor: "rgb(135, 62, 202)",
      color: "#e0d3ed",
      transition: "0.5s",
      borderRadius: "10px",
    },
  },
  iconLogin: {
    fontSize: 50,
    color: "white",
    marginRight: "20px",
    marginTop: theme.spacing(-3),
    "&:hover": {
      color: "#a839ed",
      cursor: "pointer",
    },
  },
  iconCart: {
    fontSize: 50,
    marginTop: theme.spacing(-4),
    color: "white",
    "&:hover": {
      color: "#a839ed",
    },
  },
}));

const handleProfile = () => {
  window.location.href = "/profile";
};
const handleorders = () => {
  window.location.href = "/myorders";
};

const NavBar = (props) => {
  const classes = useStyles();
  const [count, setCount] = useState("");
  const [show, setShow] = useState(false);

  const getCountData = () => {
    apiService.get("/api/data/carts/length").then((res) => {
      setCount(res.data);
    });
  };
  React.useEffect(getCountData, [props.clicked]);
  const handlelogout = (e) => {
    // localStorage.setItem('token', '');
    localStorage.removeItem("token");
    //removeCookie("cart");
    window.location.href = "/login";
  };

  return (
    <div className="NavBar">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="Navbarnew"
      >
        <Container>
          <Navbar.Brand className="brandlogo" href="#home">
            MoC
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="linkstyle" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="linkstyle" href="/components">
                Components
              </Nav.Link>
              <Nav.Link className="linkstyle" href="/peripherals">
                Peripherals
              </Nav.Link>
              <Nav.Link className="linkstyle" href="/about-us">
                About Us
              </Nav.Link>
            </Nav>
            <Nav>
              {!apiService.isLoggedIn() ? (
                <Nav.Link to="/login">
                  <AccountBox className={classes.iconLogin} />
                </Nav.Link>
              ) : (
                <Popup
                  className="popup-content"
                  trigger={<AccountBox className={classes.iconLogin} />}
                  position="bottom center"
                >
                  <h4 className="editProfile" onClick={handleProfile}>
                    View Profile
                  </h4>
                  <h4 className="editProfile" onClick={handleorders}>
                    My Orders
                  </h4>
                  <h4 className="editProfile" onClick={handlelogout}>
                    Logout
                  </h4>
                </Popup>
              )}

              <Nav.Link eventKey={2} href="/shop-cart">
                <ShoppingCart className={classes.iconCart} />
                <span className="cartCount">{count}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
