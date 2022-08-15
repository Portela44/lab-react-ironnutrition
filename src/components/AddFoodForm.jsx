import React, {useState} from 'react'
import { Divider, Input } from 'antd';

export default function AddFoodForm(props) {
    const { newFood } = props;
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [image, setImage] = useState("");
    const [servings, setServings] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        const food = {
            name: name,
            calories: parseInt(calories),
            image: image,
            servings: parseInt(servings)
        };
        newFood(food);
        setName("");
        setCalories("");
        setImage("");
        setServings("");
    };
    return (
        <form onSubmit={handleForm} className="foodForm">
            <Divider>Add Food Entry</Divider>
            <label>Name</label>
            <Input value={name} type="text" onChange={(e) => {setName(e.target.value)}} />
            <label>Calories</label>
            <Input value={calories} type="text" onChange={(e) => {setCalories(e.target.value)}} />
            <label>Image</label>
            <Input value={image} type="text" onChange={(e) => {setImage(e.target.value)}} />
            <label>Servings</label>
            <Input value={servings} type="text" onChange={(e) => {setServings(e.target.value)}} />
            <button type="submit">Create</button>
        </form>
    )
}
