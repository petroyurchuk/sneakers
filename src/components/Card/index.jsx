import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";
const Card = ({ id, title, price, imageUrl, liked = false, isLoading }) => {
  const [isLiked, setIsLiked] = React.useState(liked);
  const { isItemAdded, onAddToCart, onAddToFavorite } =
    React.useContext(AppContext);
  const obj = { id, parentId: id, title, imageUrl, price };
  const handleLike = () => {
    onAddToFavorite(obj);
    setIsLiked(!isLiked);
  };
  const handleAdd = () => {
    onAddToCart(obj);
  };
  return (
    <div className={styles.card}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onAddToFavorite && (
            <div className={styles.favorite} onClick={handleLike}>
              <img
                src={`/img/${isLiked ? "liked" : "unliked"}.svg`}
                alt="unliked"
              />
            </div>
          )}

          <img width="100%" height={135} src={imageUrl} alt="sneaker" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Ціна:</span>
              <b>{price} ₴</b>
            </div>
            {onAddToCart && (
              <img
                onClick={handleAdd}
                className="cu-p"
                src={`/img/${isItemAdded(id) ? "btn-checked" : "plus"}.svg`}
                alt="plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default Card;
