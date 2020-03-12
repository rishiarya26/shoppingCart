import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <ul className="diffColorUl">
        <li>
          <Link className="active" to="/">
            Products
          </Link>
        </li>
        <li>
          <Link className="active cartButton" to="/cart">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart{" "}
            {props.count()}
          </Link>
        </li>
      </ul>
    </>
  );
}
