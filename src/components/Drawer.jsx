import React from "react";
import CartItem from "./CartItem/CartItem";
const Drawer = ({ items, handleClose, onRemove }) => {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex justify-between mb-30">
          Кошик{" "}
          <img
            className="cu-p"
            src="/img/btn-remove.svg"
            alt="close"
            onClick={handleClose}
          />
        </h2>
        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map(({ imageUrl, title, price, id }) => (
                <CartItem
                  key={id}
                  title={title}
                  imageUrl={imageUrl}
                  price={price}
                  id={id}
                  onRemove={onRemove}
                />
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>4 499 ₴</b>
                </li>
                <li>
                  <span>Tax 5%: </span>
                  <div></div>
                  <b>254.50 ₴</b>
                </li>
              </ul>
              <button className="greenButton">
                Оформити замовлення <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="Empty"
            />
            <h2>Корзина пустая</h2>
            <p className="opacity-6">
              Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
            </p>
            <button onClick={handleClose} className="greenButton">
              <img src="/img/arrow.svg" alt="Arrow" />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Drawer;
