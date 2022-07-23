import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <Link to="/about">About</Link>

      <div style={{ height: "100px" }}></div>
      <div className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src="/logo/logo_pic.jpg" alt="" />
          <Link to="/">
            <h1>Everhour</h1>
          </Link>
        </div>
        {/* 2nd part */}
        <div className="menu-link">
          <ul>
            <li>
              <Link to="tour">Tour</Link>
            </li>
            <li>
              <a href="##">Integration</a>
            </li>
            <li>
              <Link to="customers">customers</Link>
            </li>
            <li>
              <Link to="pricing">Pricing</Link>
            </li>
            <li>
              <Link to="demo">Demo</Link>
            </li>
          </ul>
        </div>

        {/* 3rd part */}
        <div className="nav-login-signup">
          <h2>
          <Link to='/login'>Login</Link> 
            
          </h2>
          <Button
            bg={"#56BB70"}
            color="white"
            size="sm"
            fontSize="13px"
            fontWeight="400"
            padding="5px 32px"
            borderRadius={"3px"}
            _hover={{ bg: "#56BB70", color: "white", boxShadow: "dark-lg" }}
          >
            <Link to='/signup'>Sign up</Link> 
            
          </Button>
          {/* <button></button> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
