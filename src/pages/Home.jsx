import React from "react";
import Card from "../components/Card";
const Home = ({
  searchValue,
  onAddToCart,
  onAddToFavorite,
  filteredItems,
  setSearchValue,
}) => {
  const valueRef = React.useRef(null);
  const handleClearInput = () => {
    setSearchValue("");
    valueRef.current.focus();
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
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
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            onPlus={(obj) => onAddToCart(obj)}
            onFavorite={(obj) => onAddToFavorite(obj)}
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
