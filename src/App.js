import React from 'react';
import './App.css';
import foods from './foods.json';

function App() {
  return (
    <div className="App">
      <h1>Food List</h1>
      {foods.map(food => { 
        return <div key={food.name}>
          <p>{food.name}</p>
          <img src={food.image} width={100} alt={food.name}/>
      </div>
      })}
    </div>
  );
}

export default App;
