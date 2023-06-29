import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <span>Made with ❤️ by JonnieDev</span>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {pizzaData && (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to chose from. All from
            our stone oven, all organic, cohlesterol free and all delicious.
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizzaInfo) => {
              return (
                <Pizza
                  key={pizzaInfo.name}
                  name={pizzaInfo.name}
                  photo={pizzaInfo.photoName}
                  ingredients={pizzaInfo.ingredients}
                  price={pizzaInfo.price}
                  soldOut={pizzaInfo.soldOut}
                />
              );
            })}
          </ul>
        </>
      )}
    </main>
  );
}

function Pizza({ name, photo, ingredients, price, soldOut }) {
  const pizzaStatus = !soldOut ? `$${price}` : "SOLD OUT";
  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={photo} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{pizzaStatus}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHr = 8;
  const closeHr = 20;
  const isOpen = hour >= openHr && hour <= closeHr;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>We are open until {closeHr}:00</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We are cooking! We are happy to welcome you back in{" "}
          {Math.abs(hour - openHr)}hrs...
        </p>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
