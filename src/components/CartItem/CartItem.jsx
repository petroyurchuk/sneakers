import React from "react";
import AppContext from "../../context";

const CartItem = ({ id, price, imageUrl, title }) => {
  const { onRemoveItem } = React.useContext(AppContext);
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
        onClick={() => onRemoveItem(id)}
        className="remove-btn"
        src="/img/btn-remove.svg"
        alt="remove"
      />
    </div>
  );
};
export default CartItem;
