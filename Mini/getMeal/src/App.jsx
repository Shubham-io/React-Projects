import { useState, useEffect } from "react";

function App() {
  const [meals, setMeals] = useState([]);
  const URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data.meals);
        setMeals(data.meals);
      } catch (error) {
        console.log("Error: ", error);
      }
    };

    fetchMeals();
  }, []);

  return (
    <>
      <h1 className="title">Meals</h1>
      <div className="container">
        {meals ? (
          <ul>
            {meals.map((meal) => (
              <li key={meal.idMeal}>
                <h2 className="mealName">{meal.strMeal}</h2>
                <img src={meal.strMealThumb} alt={meal.strMeal} width="250px" />
              </li>
            ))}
          </ul>
        ) : (
          <p>No meal found</p>
        )}
      </div>
    </>
  );
}

export default App;
