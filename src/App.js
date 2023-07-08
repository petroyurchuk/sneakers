import Card from "./components/Card";

function App() {
  return (
    <div className="wrapper clear">
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="d-flex justify-between mb-30">
            Кошик{" "}
            <img className="cu-p" src="/img/btn-remove.svg" alt="remove" />
          </h2>

          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{
                  backgroundImage: "url(/img/sneakers/1.jpg)",
                }}
                className="cartItemImg "
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Чоловічі кросівки Nike Air Max 270</p>
                <b> 4 599 ₴</b>
              </div>
              <img
                className="remove-btn"
                src="/img/btn-remove.svg"
                alt="remove"
              />
            </div>
          </div>
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Total:</span>
                <div></div>
                <b>4 499 ₴</b>
              </li>
              <li>
                <span>Tax 5%: </span>
                <div></div>
                <b>254.50 ₴</b>
              </li>
            </ul>
            <button className="greenButton">
              Оформити замовлення <img src="/img/arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <header className="d-flex justify-between align-center p-40">
        <div className="headerLeft d-flex align-center">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="/img/logo.png"
            alt="logo"
          />
          <div>
            <h3 className="text-uppercase">Sneakers</h3>
            <p className="opacity-5">Магазин найкращих кросівок</p>
          </div>
        </div>

        <ul className="headerRight d-flex">
          <li className="mr-30">
            <img
              className="mr-10"
              src="/img/cart.svg"
              width={18}
              height={18}
              alt="cart"
            />
            <span>500 ₴</span>
          </li>
          <li>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 10C0 4.579 4.579 0 10 0C15.421 0 20 4.579 20 10C20 13.19 18.408 16.078 16 17.924V18H15.898C14.23 19.245 12.187 20 10 20C7.813 20 5.77 19.245 4.102 18H4V17.924C1.592 16.078 0 13.189 0 10ZM7.12347 15.236C6.59154 15.6639 6.22136 16.2604 6.074 16.927C7.242 17.604 8.584 18 10 18C11.416 18 12.758 17.604 13.926 16.927C13.7785 16.2605 13.4082 15.6641 12.8764 15.2362C12.3445 14.8083 11.6827 14.5744 11 14.573H9C8.3173 14.5742 7.6554 14.808 7.12347 15.236ZM13.7677 13.4117C14.5877 13.9574 15.2286 14.7329 15.61 15.641C17.077 14.182 18 12.176 18 10C18 5.663 14.337 2 10 2C5.663 2 2 5.663 2 10C2 12.176 2.923 14.182 4.39 15.641C4.77144 14.7329 5.41227 13.9574 6.23227 13.4117C7.05227 12.866 8.01501 12.5742 9 12.573H11C11.985 12.5742 12.9477 12.866 13.7677 13.4117ZM6 8C6 5.72 7.72 4 10 4C12.28 4 14 5.72 14 8C14 10.28 12.28 12 10 12C7.72 12 6 10.28 6 8ZM8 8C8 9.178 8.822 10 10 10C11.178 10 12 9.178 12 8C12 6.822 11.178 6 10 6C8.822 6 8 6.822 8 8Z"
                fill="#9B9B9B"
              />
            </svg>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="">Всі кросівки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
