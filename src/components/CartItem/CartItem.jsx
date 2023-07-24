import React from "react";

const CartItem = ({ id, price, imageUrl, title, onRemove }) => {
  return (
    <div className="cartItem d-flex align-center mb-20">
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        className="cartItemImg"
      ></div>
      <div className="mr-20 flex">
        <p className="mb-5">{title}</p>
        <b> {price} ₴</b>
      </div>
      <img
        onClick={() => onRemove(id)}
        className="remove-btn"
        src="/img/btn-remove.svg"
        alt="remove"
      />
    </div>
  );
};
export default CartItem;
