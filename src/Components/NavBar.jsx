import React from "react";
import { Link } from "react-router-dom";

const headerArr = [
  { to: "/", text: "Main" },
  { to: "/tablepage", text: "Table" },
];

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-sm bg-info navbar-dark">
      <ul class="navbar-nav">
        {headerArr.map(({ to, text }, i) => (
          <li class="nav-item active">
            <a class="nav-link">
              <Link to={to}>{text}</Link>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
