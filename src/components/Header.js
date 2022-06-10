import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-area">
        <div className="brand-area">
          <a href="/">Logo</a>
        </div>
        <ul className="route-list">
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li className="resume">
            <a href="https://drive.google.com/file/d/11lJoJW8qh6PTPfh1qu84VVfqApgz5Kvm/view?usp=drivesdk">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
