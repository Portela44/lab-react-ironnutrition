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
  };

  const handleSearch = (e) => {
    if(e.target.value === "") {
      setFood(foodsJson);
    } else {
      const filtered = foods.filter(food => 
        food.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFood(filtered);
    }
  };

  const handleDelete = (name) => {
    const filtered = foods.filter(food => food.name !== name);
    setFood(filtered);
  };

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm newFood={handleNewFood}/>
      <input type="text" placeholder="Search" onChange={handleSearch}/>
      <div className="foodList">
        {foods.map(food => {
          return <FoodBox key={food.name} food={food} handleDelete={handleDelete}/>
        })}
      </div>
    </div>
  );
}

export default App;
