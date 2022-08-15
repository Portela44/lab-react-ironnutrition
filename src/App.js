import React, {useState} from 'react';
import './App.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFood] = useState(foodsJson);

  const handleNewFood = (food) => {
    const copy = [...foods]; 
    copy.unshift(food);
    setFood(copy)
  }

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm newFood={handleNewFood}/>
      <div className="foodList">
        {foods.map(food => {
          return <FoodBox key={food.name} food={food}/>
        })}
      </div>
    </div>
  );
}

export default App;
