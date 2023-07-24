import React from "react";
import styles from "./Card.module.scss";

const Card = ({ title, price, imageUrl, onPlus, onFavorite }) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isAdded, setIsAdded] = React.useState(false);
  const handleLike = () => {
    onFavorite({ title, price, imageUrl });
    setIsLiked(!isLiked);
  };
  const handleAdd = () => {
    onPlus({ title, price, imageUrl });
    setIsAdded(!isAdded);
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

        <img
          onClick={handleAdd}
          className="cu-p"
          src={`/img/${isAdded ? "btn-checked" : "plus"}.svg`}
          alt="plus"
        />
      </div>
    </div>
  );
};
export default Card;
