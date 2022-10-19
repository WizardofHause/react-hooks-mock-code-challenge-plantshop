import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({ search, plants, setPlants }) {

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then((plants) => setPlants(plants))
  }, []);

  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(search.toLowerCase()))

  const handleDeletePlant = (id) => {
      const newPlantArray = plants.filter(plant => plant.id !== id)
      setPlants(newPlantArray)
    }

  const plantCard = filteredPlants.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        plant={plant}
        onDeletePlant={handleDeletePlant}
      />
    )
  })

  return (
    <ul className="cards">{plantCard}</ul>
  );
}

export default PlantList;
