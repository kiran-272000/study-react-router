import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  console.log(params.productid);
  return (
    <>
      <div>ProductDetails</div>
      <p>{params.productid}</p>
    </>
  );
};

export default ProductDetails;
