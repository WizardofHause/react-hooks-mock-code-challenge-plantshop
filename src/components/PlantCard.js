import React, { useState } from "react";

function PlantCard({ plant, onDeletePlant }) {

  const { id, name, image, price, } = plant

  const [stock, setStock] = useState(true)

  const handleStock = () => {
    setStock(!stock)
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
    .then((response) => response.json())
    .then(() => {
      onDeletePlant(id)
    })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
      <button className="remove" onClick={handleDelete}>Remove Plant</button>
    </li>
  );
}

export default PlantCard;
