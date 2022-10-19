import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({search}) {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then((plants) => setPlants(plants))
  }, []);

  const filteredPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(search.toLowerCase()))

  const plantCard = filteredPlants.map((plant) => {
    return (
      <PlantCard 
        key={plant.id}
        plant={plant}
      />
    )
  })

  return (
    <ul className="cards">{plantCard}</ul>
  );
}

export default PlantList;
