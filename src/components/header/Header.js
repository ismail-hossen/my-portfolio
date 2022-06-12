import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Header.css";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link className={match && "active"} to={to} {...props}>
      {children}
    </Link>
  );
}

const Header = () => {
  return (
    <header>
      <div className="header-area">
        <div className="brand-area">
          <Link to="/">Logo</Link>
        </div>
        <ul className="route-list">
          <li>
            <CustomLink to="/projects">Projects</CustomLink>
          </li>
          <li>
            <CustomLink to="/blog">Blog</CustomLink>
          </li>
          <li>
            <CustomLink to="/contact">Contact</CustomLink>
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
