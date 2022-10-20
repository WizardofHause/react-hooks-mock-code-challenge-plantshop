import React from "react";

function NewPlantForm({plantData, setPlantData, handleSubmit}) {

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input id="plant-name" type="text" name="name" placeholder="Plant name" value={plantData.name} onChange={(e) => setPlantData({ ...plantData, name: e.target.value })} />
        <input id="plant-image" type="text" name="image" placeholder="Image URL" value={plantData.image} onChange={(e) => setPlantData({ ...plantData, image: e.target.value })} />
        <input id="plant-number" type="number" name="price" step="0.01" placeholder="Price" value={plantData.price} onChange={(e) => setPlantData({ ...plantData, price: e.target.value })} />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;