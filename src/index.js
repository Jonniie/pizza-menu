import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";
import "./index.css";

function App() {
  console.log(pizzaData[0]);
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
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
      <div className="pizzas">
        {pizzaData.map((pizzaInfo) => {
          return (
            <Pizza
              name={pizzaInfo.name}
              photo={pizzaInfo.photoName}
              ingredients={pizzaInfo.ingredients}
              price={pizzaInfo.price}
            />
          );
        })}
      </div>
    </main>
  );
}

function Pizza({ name, photo, ingredients, price }) {
  return (
    <div className="">
      <img src={photo} alt={name} />
      <h3>{name}</h3>
      <p>{ingredients}</p>
      <p>{price}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      {new Date().toLocaleDateString()}. We are currently open!
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
