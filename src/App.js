import React, {useState} from 'react';
import './App.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFood] = useState(foodsJson);
  const [shown, setShown] = useState(true);

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

  const handleShown = () => {
    setShown(prev => !prev);
  }

  return (
    <div className="App">
      <h1>Food List</h1>
      {shown && <AddFoodForm newFood={handleNewFood}/>}
      <button className="hideForm" onClick={() => handleShown()}>{shown? "Hide Form":"Add New Food"}</button><br/>
      <input type="text" placeholder="Search" onChange={handleSearch}/>
      <div className="foodList">
        {foods.map(food => {
          return <FoodBox key={food.name} food={food} handleDelete={handleDelete}/>
        })}
      </div>
      {foods.length===0 && <img className="noFood" src="https://media1.giphy.com/media/cIDyoK8vQ4YFMvJk7m/giphy.gif" alt="no food to be shown"/>}
    </div>
  );
}

export default App;
