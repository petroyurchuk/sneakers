import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 15600,
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 8499,
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 8999,
    imageUrl: "/img/sneakers/4.jpg",
  },
];
function App() {
  const [isClickedCart, setIsClickedCart] = React.useState(false);
  const handleCart = () => {
    setIsClickedCart(true);
  };
  const handleClose = () => {
    setIsClickedCart(false);
  };
  return (
    <div className="wrapper clear">
      <Drawer isClickedCart={isClickedCart} handleClose={handleClose} />
      <Header handleCart={handleCart} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Всі кросівки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex justify-center">
          {arr.map(({ title, imageUrl, price }, index) => (
            <Card key={index} imageUrl={imageUrl} title={title} price={price} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
