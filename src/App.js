import axios from "axios";
import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`https://64b9016b79b7c9def6c06a47.mockapi.io/items`)
      .then((response) => setItems(response.data));
  }, []);

  const [isClickedCart, setIsClickedCart] = React.useState(false);
  const handleCart = () => setIsClickedCart(true);
  const handleClose = () => setIsClickedCart(false);

  return (
    <div className="wrapper clear">
      {isClickedCart && <Drawer handleClose={handleClose} />}
      <Header handleCart={handleCart} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Всі кросівки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex justify-center flex-wrap">
          {items.map(({ title, imageUrl, price }, index) => (
            <Card key={index} imageUrl={imageUrl} title={title} price={price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
