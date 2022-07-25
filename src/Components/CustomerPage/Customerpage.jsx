import React from "react";
import { Blog } from "../LandingPage/Blog/Blog";
import  Boxes from "../LandingPage/Boxes/Boxes";
import styles from "./CustomerPage.module.css";

const Customerpage = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.center}
        src="/logo/Customer-heading.png"
        alt=""
      ></img>
      <br/>
      <img className={styles.center} src="/logo/Customer1.png" alt=""></img>
      <img
        className={styles.center}
        src="/logo/Inkedcustomer2.0.jpg"
        alt=""
      ></img>
      <br/>
      <br/>
      <img
        className={styles.center}
        src="/logo/Inkedcustomer3.jpg"
        alt=""
      ></img>
      <Boxes/>
      <Blog/>
    </div>
  );
};

export default Customerpage;
