import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

const Favorites = () => {
  const { favorites } = React.useContext(AppContext);

  return (
    <div className="d-flex justify-center flex-wrap">
      {favorites.map((item) => (
        <Card key={item.id} liked={true} {...item} />
      ))}
    </div>
  );
};
export default Favorites;
