import React, {useState} from "react";
import PlantCard from "./PlantCard";

function NewPlantForm() {

  const [plantData, setPlantData] = useState({
    plantName: "",
    plantImage: "",
    plantPrice: ""
  })

  function handleSubmit(e) {
    e.preventDefault();
    console.log(plantData)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input id="plant-name" type="text" name="name" placeholder="Plant name" value={plantData.plantName} onChange={(e) => setPlantData({...plantData, plantName: e.target.value})}/>
        <input id="plant-image" type="text" name="image" placeholder="Image URL" value={plantData.plantImage} onChange={(e) => setPlantData({...plantData, plantImage: e.target.value})}/>
        <input id="plant-number" type="number" name="price" step="0.01" placeholder="Price" value={plantData.plantPrice} onChange={(e) => setPlantData({...plantData, plantPrice: e.target.value})}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
