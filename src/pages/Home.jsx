import React from "react";
import Card from "../components/Card";
import AppContext from "../context";

const Home = () => {
  const { setSearchValue, isLoading, filteredItems, searchValue } =
    React.useContext(AppContext);
  
  const valueRef = React.useRef(null);
  const handleClearInput = () => {
    setSearchValue("");
    valueRef.current.focus();
  };
  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  const renderItems = () => {
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card key={index} isLoading={isLoading} {...item} />
    ));
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
      <div className="d-flex justify-center flex-wrap">{renderItems()}</div>
    </div>
  );
};
export default Home;
