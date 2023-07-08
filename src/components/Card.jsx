import React from "react";

const Card = () => {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <img width={133} height={112} src="/img/sneakers/1.jpg" alt="sneaker" />
      <h5>Чоловічі кросівки Nike Blazer Mid Suede</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна:</span>
          <b>5 999 ₴</b>
        </div>
        <button className="button">
          <img src="/img/plus.svg" width={11} height={11} alt="plus" />
        </button>
      </div>
    </div>
  );
};
export default Card;
