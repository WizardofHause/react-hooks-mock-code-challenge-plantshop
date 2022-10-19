import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <main>
      <NewPlantForm />
      <Search search={search} handleSearch={handleSearch} />
      <PlantList search={search} />
    </main>
  );
}

export default PlantPage;
