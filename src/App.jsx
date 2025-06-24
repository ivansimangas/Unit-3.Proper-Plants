import { useState } from "react";
import PLANTS from "./data";
import PlantList from "./PlantList";
import Cart from "./Cart";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === plant.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...plant, quantity: 1 }];
    });
  }

  function updateQuantity(plantId, delta) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === plantId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <div className="app">
      <h1>Proper Plants</h1>
      <div className="content">
        <section>
          <h2>Plants</h2>
          <PlantList plants={PLANTS} addToCart={addToCart} />
        </section>
        <section>
          <Cart cart={cart} updateQuantity={updateQuantity} />
        </section>
      </div>
    </div>
  );
}
