import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import IngredientBox from './components/IngredientBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: [],
    };
  }

  componentDidMount() {
    const mealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    Promise.all(new Array(10).fill(mealUrl).map((ea) => axios.get(ea))).then(
      (results) => {
        const mealData = results.map((meal) => meal.data.meals[0]);
        this.setState({
          foodItems: mealData,
        });
        console.log(mealData);
      }
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <h2>Hungry?</h2>
        <IngredientBox />
      </div>
    );
  }
}

export default App;
