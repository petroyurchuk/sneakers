import React from "react";
import styles from "./Card.module.scss";

const Card = ({ title, price, imageUrl }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isAdd, setIsAdd] = React.useState(false);
  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  const handleAdd = () => {
    setIsAdd(!isAdd);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          src={`/img/${isLiked ? "liked" : "unliked"}.svg`}
          alt="unliked"
          onClick={handleLike}
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneaker" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Ціна:</span>
          <b>{price} ₴</b>
        </div>
        <button className="button" onClick={handleAdd}>
          <img
            src={`/img/${isAdd ? "btn-checked" : "plus"}.svg`}
            width={11}
            height={11}
            alt="plus"
          />
        </button>
      </div>
    </div>
  );
};
export default Card;
