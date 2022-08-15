import React from 'react'
import { Card, Col, Button } from 'antd';

export default function FoodBox(props) {
    const {food: {name, calories, image, servings}, handleDelete} = props;
    return (
        <Col>
          <Card
            title={name}
            style={{ width: 230, height: 300, margin: 10 }}
          >
            <img src={image} height={60} alt="food" />
            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>
            <p>
              <b>Total Calories: {calories * servings} </b> kcal
            </p>
            <Button onClick={() => handleDelete(name)} type="primary"> Delete </Button>
          </Card>
        </Col>
      );
}
