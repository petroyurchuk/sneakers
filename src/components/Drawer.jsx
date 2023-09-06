import React from "react";
import AppContext from "../context";
import CartItem from "./CartItem/CartItem";
import Info from "./Info";
import axios from "axios";
import { useCart } from "../hooks/useCart";
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const Drawer = () => {
  const { handleClose, cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const { totalPrice } = useCart();
  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://64f3b6dcedfa0459f6c6c775.mockapi.io/ordersSneakers",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        console.log(item);
        await axios.delete(
          "https://64b9016b79b7c9def6c06a47.mockapi.io/cart/" + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert("Помилка при створенні замовлення :(");
    }
    setIsLoading(false);
  };
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
        {cartItems.length > 0 ? (
          <div>
            <div className="items">
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>{totalPrice} ₴</b>
                </li>
                <li>
                  <span>Tax 5%: </span>
                  <div></div>
                  <b>{totalPrice * 0.05} ₴</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформити замовлення
                <img src="/img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Замовлення оформлене!" : "Кошик пустий"}
            description={
              isOrderComplete
                ? `Ваше замовлення #${orderId} скоро буде передане в доставку`
                : "Добавте хочаб  одну пару кросівок, щоб зробити замовлення."
            }
            image={
              isOrderComplete
                ? "/img/complete-order.jpg"
                : "/img/empty-cart.jpg"
            }
          />
        )}
      </div>
    </div>
  );
};
export default Drawer;
