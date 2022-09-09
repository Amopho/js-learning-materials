import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  //   instead of ancor react offers us from react dom -link
  return (
    <nav>
      {/* where my link will take me /- meaning root-route "I am here, on the surface" */}
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/product">
        <li>Product</li>
      </Link>
      <Link>
        <li to="/about">About</li>
      </Link>
    </nav>
  );
};
