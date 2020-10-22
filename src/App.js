import React, { useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import IngredientBox from './components/IngredientBox';
const App = () => {
  useEffect(() => {
    // code to run on component mount
    const mealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    Promise.all(new Array(10).fill(mealUrl).map((ea) => axios.get(ea))).then(
      (results) => {
        console.log(results.map((meal) => meal.data.meals[0]));
      }
    );
  }, []);
  return (
    <div className="App">
      <header className="App-header"></header>
      <h2>Hungry?</h2>
      <IngredientBox />
    </div>
  );
};

export default App;
