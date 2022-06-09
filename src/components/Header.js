import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-area">
        <div className="brand-area">
          <a href="/">brand</a>
        </div>
        <ul className="route-list">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li className="resume">
            <a href="/contact">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
