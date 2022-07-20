import React from "react";
// import logo_pic from "./logo"
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
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
            <a href="##">Log in</a>
          </h2>
          <button>Sign up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;