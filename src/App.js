import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const filteredItems = items.filter((el) =>
    el.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  React.useEffect(() => {
    axios
      .get(`https://64b9016b79b7c9def6c06a47.mockapi.io/items`)
      .then((response) => setItems(response.data));
    axios
      .get(`https://64b9016b79b7c9def6c06a47.mockapi.io/cart`)
      .then((response) => setCartItems(response.data));
  }, []);
  console.log(items);

  const onAddToCart = (obj) => {
    if (items.find(({ id }) => id === obj.id)) {
      axios.delete(
        `https://64b9016b79b7c9def6c06a47.mockapi.io/cart/${obj.id}`
      );
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    }
    axios.post(`https://64b9016b79b7c9def6c06a47.mockapi.io/cart`, obj);
    setCartItems((prev) => [...prev, obj]);
  };
  const onRemoveItem = (id) => {
    axios.delete(`https://64b9016b79b7c9def6c06a47.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onAddToFavorite = (obj) => {
    if (favorites.find(({ id }) => id === obj.id)) {
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    }
    setFavorites((prev) => [...prev, obj]);
  };

  const [isClickedCart, setIsClickedCart] = React.useState(false);
  const handleCart = () => setIsClickedCart(true);
  const handleClose = () => setIsClickedCart(false);

  return (
    <div className="wrapper clear">
      {isClickedCart && (
        <Drawer
          items={cartItems}
          handleClose={handleClose}
          setCartItems={setCartItems}
          onRemove={onRemoveItem}
        />
      )}
      <Header handleCart={handleCart} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              filteredItems={filteredItems}
              searchValue={searchValue}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              setSearchValue={setSearchValue}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
