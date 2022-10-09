import React from "react";

const ProductCard = (item) => {
  return (
    <div>
      <img src={item?.img} />
      <div>{item?.choice}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>New</div>
    </div>
  );
};

export default ProductCard;
