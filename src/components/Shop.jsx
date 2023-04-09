import React from "react";
import { useLoaderData } from "react-router-dom";

const Shop = () => {
  const productData = useLoaderData();
  console.log(productData);
  return (
    <div>
      {productData.map((product) => (
        <p key={product.id}>{product.name}</p>
      ))}
      <h1>Name: </h1>
    </div>
  );
};

export default Shop;
