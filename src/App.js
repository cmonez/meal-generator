import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import IngredientBox from './components/IngredientBox';

const App = () => {
  const [meals, setMeals] = useState(
    new Array(10).fill(0).map((ea) => 'mealURL')
  );

  const mealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';

  useEffect(async () => {
    Promise.all(new Array(10).fill(mealUrl).map((ea) => axios.get(ea))).then(
      (results) => {
        const mealData = results.map((meal) => meal.data.meals[0]);
        console.log(mealData);
        setMeals(mealData);
      }
    );
  }, [meals]);
  return (
    <div className="App">
      <header className="App-header"></header>
      <h2>Hungry?</h2>
      <IngredientBox />
    </div>
  );
};

export default App;
