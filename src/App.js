import axios from "axios";
import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const filteredItems = items.filter((el) =>
    el.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const valueRef = React.useRef(null);
  React.useEffect(() => {
    axios
      .get(`https://64b9016b79b7c9def6c06a47.mockapi.io/items`)
      .then((response) => setItems(response.data));
    axios
      .get(`https://64b9016b79b7c9def6c06a47.mockapi.io/cart`)
      .then((response) => setCartItems(response.data));
  }, []);

  const handleClearInput = () => {
    setSearchValue("");
    valueRef.current.focus();
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const onAddToCart = (obj) => {
    axios.post(`https://64b9016b79b7c9def6c06a47.mockapi.io/cart`, obj);

    setCartItems((prevState) => {
      const isObjectInCart = prevState.some((item) => item.price === obj.price);
      if (isObjectInCart) {
        return prevState.filter((el) => el.price !== obj.price);
      }
      return [...prevState, obj];
    });
  };
  const onRemoveItem = (id) => {
    axios.delete(`https://64b9016b79b7c9def6c06a47.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const onAddToFavorite = (obj) => {
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
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">
            {searchValue ? `Пошук по ${searchValue}` : "Всі кросівки"}
          </h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input
              ref={valueRef}
              onChange={(event) => onChangeSearchInput(event)}
              value={searchValue}
              placeholder="Search..."
            />
            {searchValue && (
              <img
                className="clear cu-p"
                src="/img/btn-remove.svg"
                alt="clear"
                onClick={handleClearInput}
              />
            )}
          </div>
        </div>
        <div className="d-flex justify-center flex-wrap">
          {filteredItems.map(({ title, imageUrl, price }, index) => (
            <Card
              key={index}
              imageUrl={imageUrl}
              title={title}
              price={price}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onAddToFavorite(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
