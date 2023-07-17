import React from "react";
const Drawer = ({ isClickedCart, handleClose }) => {
  return (
    <>
      {isClickedCart ? (
        <div className="overlay">
          <div className="drawer d-flex flex-column">
            <h2 className="d-flex justify-between mb-30">
              Кошик{" "}
              <img
                className="cu-p"
                src="/img/btn-remove.svg"
                alt="remove"
                onClick={handleClose}
              />
            </h2>

            <div className="items">
              <div className="cartItem d-flex align-center mb-20">
                <div
                  style={{
                    backgroundImage: "url(/img/sneakers/1.jpg)",
                  }}
                  className="cartItemImg"
                ></div>
                <div className="mr-20 flex">
                  <p className="mb-5">Чоловічі кросівки Nike Air Max 270</p>
                  <b> 4 599 ₴</b>
                </div>
                <img
                  className="remove-btn"
                  src="/img/btn-remove.svg"
                  alt="remove"
                />
              </div>
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
                Оформити замовлення <img src="/img/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Drawer;