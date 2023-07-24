import React from "react";
import Card from "../components/Card";

const Favorites = ({ items, onAddToFavorite }) => {
  return (
    <div className="d-flex justify-center flex-wrap">
      {items.map((item) => (
        <Card
          key={item.id}
          liked={true}
          onFavorite={onAddToFavorite}
          {...item}
        />
      ))}
    </div>
  );
};
export default Favorites;
