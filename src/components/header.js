import React from "react";
import { Link } from "react-router-dom";
import me from "../data/images/me.png";

const Header = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="masthead">
      <Link to="/">
        <h1 className="site-title">Rehearsal Notice</h1>
      </Link>
      <div className="nav-links">
        {pages.map(({ name, path }) => (
          <Link to={path}>
            <li className="nav-item">{name}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
