import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Card from "./components/Card.jsx";
import data from "./data.jsx";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Hero />
        <section className="cards-list">{cards}</section>
      </div>
    </React.Fragment>
  );
}
