import React from "react";
import { Button } from "@chakra-ui/react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
    <div style={{height:"100px"}}></div>
      <div className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src="/logo/logo_pic.jpg" alt="" />
          <h1>Everhour</h1>
        </div>
        {/* 2nd part */}
        <div className="menu-link">
          <ul>
            <li>
              <a href="##">Tour</a>
            </li>
            <li>
              <a href="##">Integration</a>
              {/* <ul className="dropdown">
                <li>
                  <a href="##">Sub-1</a>
                </li>
                <li>
                  <a href="##">Sub-2</a>
                </li>
                <li>
                  <a href="##">Sub-3</a>
                </li>
              </ul> */}
            </li>
            <li>
              <a href="##">customers</a>
            </li>
            <li>
              <a href="###">Pricing</a>
            </li>
            <li>
              <a href="##">Demo</a>
            </li>
          </ul>
        </div>

        {/* 3rd part */}
        <div className="nav-login-signup">
          <h2>
            {" "}
            <a href="##">Login</a>
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
             Sign up
            </Button>
          {/* <button></button> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
