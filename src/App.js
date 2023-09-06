import axios from "axios";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(true);
  const filteredItems = items.filter((el) =>
    el.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [cartResponse, favoritesResponse, itemsResponse] =
          await Promise.all([
            axios.get(`https://64b9016b79b7c9def6c06a47.mockapi.io/cart`),
            axios.get(`https://64c688f90a25021fde91bd9e.mockapi.io/favorites`),
            axios.get(`https://64b9016b79b7c9def6c06a47.mockapi.io/items`),
          ]);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
        setIsLoading(false);
      } catch (error) {
        console.log("Помилка при запиті даних");
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find(
        ({ parentId }) => Number(parentId) === Number(obj.id)
      );
      if (findItem) {
        await axios.delete(
          `https://64b9016b79b7c9def6c06a47.mockapi.io/cart/${findItem.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.parentId) !== Number(obj.id))
        );
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post(
          `https://64b9016b79b7c9def6c06a47.mockapi.io/cart`,
          obj
        );
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      console.error(error);
      alert("Помилка при додаванні даних в корзину");
    }
  };
  const onRemoveItem = (id) => {
    try {
      axios.delete(`https://64b9016b79b7c9def6c06a47.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error(error);
      alert("Помилка при видаленні з корзини");
    }
  };
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find(({ id }) => Number(id) === Number(obj.id))) {
        axios.delete(
          `https://64c688f90a25021fde91bd9e.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          `https://64c688f90a25021fde91bd9e.mockapi.io/favorites`,
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      console.error(error);
      alert("Не вдалося добавити до улюблених");
    }
  };
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  const [isClickedCart, setIsClickedCart] = React.useState(false);
  const handleCart = () => setIsClickedCart(true);
  const handleClose = () => setIsClickedCart(false);

  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        handleClose,
        isLoading,
        searchValue,
        onAddToCart,
        onAddToFavorite,
        filteredItems,
        setSearchValue,
        onRemoveItem,
      }}
    >
      <div className="wrapper clear">
        {isClickedCart && <Drawer />}
        <Header handleCart={handleCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
