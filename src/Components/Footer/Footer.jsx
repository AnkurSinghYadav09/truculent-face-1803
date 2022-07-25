import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul className={styles.uii}>
      <li><a href="##"><img src="footerimg.png" alt=""></img></a></li>
        <li>
          <a href="##">Campany</a>
          <ul className={styles.sul} >
            <li>About</li>
            <li>Contact</li>
          </ul>
        </li>
        <li>
          <a href="##">Product</a>
          <ul className={styles.sul} >
            <li>Tour</li>
            <li>Pricing</li>
            <li>Request a Demo</li>
            <li>Customer</li>
            <li>API & Docs</li>
            <li>Status</li>
          </ul>
        </li>
        <li>
          <a > Solutions</a>
          <ul className={styles.sul} >
            <li>Time Tracking </li>
            <li>Project Budgeting </li>
            <li>Visual Planning</li>
            <li>Expenses</li>
            <li>Reporting </li>
            <li>Invoicing</li>
            <li>Time Card Calculator </li>
            <li>Weekly Timesheet template</li>
            <li>Invoice Generator</li>
          </ul>
        </li>
        <li>
          <a>Integration</a>
          <ul className={styles.sul} >
            <li>Asana </li>
            <li>Base Camp </li>
            <li>Trello </li>
            <li>Jira</li>
            <li>Github </li>
            <li>ClickUp</li>
            <li>Monday </li>
            <li>Todoist</li>
            <li>Gitlab</li>
            <li>All</li>
          </ul>
        </li>
        <li>
          <a>Learn</a>
          <ul className={styles.sul} >
            <li>Resource</li>
            <li>Help Center</li>
            <li>Blog</li>
            <li>Products Updates</li>
            <li>Timesheet app </li>
            <li>Time clock app</li>
            <li>Attendence tracker </li>
            <li>Work hours tracker</li>
            <li>Employee time tracking</li>
          </ul>
        </li>
        <li>
          <a>Download</a>
          <ul className={styles.sul} >
            <li>Browser extension </li>
            <li>Chrome time tracking extension</li>
            <li>Time tracking with screenshots</li>
            <li>
              iPhone app <button>Beta</button>{" "}
            </li>
          </ul>
        </li>
        
      </ul>
      <div className={styles.lower} >
        <div><label>© 2022 Everhour Terms | Privacy | Cookies | Sitemap</label></div>
        <div><img src="socialApps.png" alt=""></img></div>
      </div>
    </div>
  );
};

export default Footer;
