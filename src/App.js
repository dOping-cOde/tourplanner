import React from "react";
import data from "./data";
import { useState } from "react";
import Tours from './components/Tours'
const App = () => {
  
  const [tours, setTours] = useState(data);


  function removeTour (id){
    const newTour = tours.filter(tour=>id !== tour.id);
    setTours(newTour);
  }

  if(tours.length===0){
    return (
      <div>
        <p>No Tours Left</p>
        <button onClick={()=> setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (<div>
        <Tours tours = {tours} removeTour={removeTour}></Tours>
  </div>)
};

export default App;
