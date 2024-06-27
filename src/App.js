import BrandSelector from "./components/BrandSelector";
import ModelSelector from "./components/ModelSelector";
import ReviewsList from "./components/ReviewsList";
import SelectorVehicleType from "./components/SelectorVehicleType";
import React, { useState } from 'react'

function App() {
  const [typeVehicle, setTypeVehicle] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [reviews, setReviews] = useState([]);

  return (
    <div>
      <h1>Consulta de valores de veículo</h1>

      <SelectorVehicleType  setTypeVehicle={setTypeVehicle} />
      {typeVehicle && <BrandSelector typeVehicle={typeVehicle} setBrand={setBrand} />}
      {brand && <ModelSelector typeVehicle={typeVehicle} brand={brand} setModel={setModel} setReviews={setReviews}  />}
      {reviews.length > 0 && <ReviewsList reviews={reviews} /> }

    </div>
  );
}

export default App;
