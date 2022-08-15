import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

function App() {
  return (
    <div className="App">
      <h1>Food List</h1>
      <div className="foodList">
        {foods.map(food => {
          return <FoodBox food={food}/>
        })}
      </div>
    </div>
  );
}

export default App;
