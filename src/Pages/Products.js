import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <React.Fragment>
      <h1>Products Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">Book</Link>
        </li>
        <li>
          <Link to="/products/p2">Pen</Link>
        </li>
        <li>
          <Link to="/products/p3">Note</Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Products;
