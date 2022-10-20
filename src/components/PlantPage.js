import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')
  const [plantData, setPlantData] = useState({
    name: "",
    image: "",
    price: ""
  })

    useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then((plants) => setPlants(plants))
  }, []);

  function handleSubmit() {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(plantData)
    })
      .then(response => response.json())
      .then(plantData => setPlants([...plants, plantData]))
      setPlantData({
        name: "",
        image: "",
        price: ""
      })
  }

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <main>
      <NewPlantForm plantData={plantData} setPlantData={setPlantData} handleSubmit={handleSubmit}/>
      <Search search={search} handleSearch={handleSearch} />
      <PlantList search={search} plants={plants} setPlants={setPlants} />
    </main>
  );
}

export default PlantPage;