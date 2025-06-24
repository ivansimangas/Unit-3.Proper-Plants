import Plant from "./Plant";

export default function PlantList({ plants, addToCart }) {
  return (
    <div className="plant-grid">
      {plants.map((plant) => (
        <Plant key={plant.id} plant={plant} addToCart={addToCart} />
      ))}
    </div>
  );
}
