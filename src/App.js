import React, { useState } from 'react';

const App = () => {
  const number = Math.floor(Math.random() * 30);
  let color = ``;

  if( number >= 15) {
    color = 'hot';
  } else {
    color = 'cold';
  }

  const [temperatureValue, setTemperatureValue] = useState(number); 
  const [temperatureColor, setTemperatureColor] = useState(color);

  const increaseTemperature = () => {
    if(temperatureValue === 30) return;
    const newTemperature = temperatureValue + 1;

    if(newTemperature >= 15) {
      setTemperatureColor(`hot`);
    } else {
      setTemperatureColor('cold');
    }
    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    if(temperatureValue === -10) return;
    const newTemperature = temperatureValue - 1;

    if(newTemperature < 15) {
      setTemperatureColor(`cold`);
    } else {
      setTemperatureColor(`hot`);
    }

    setTemperatureValue(newTemperature);
  };
  
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>

    </div>
  )
}

export default App;