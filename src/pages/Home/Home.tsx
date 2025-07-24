import { useEffect, useState } from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import './styles.scss';

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

function Home() {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals);
      })
      .catch((err) => console.error('Errore nella fetch:', err));
  }, []);

  return (
    <div className="home">
        <div className="title-container">
            <h1 className="title">Benvenuti in Cooking Recipes App!🍝</h1>
            <p className="sub-title">Scopri piatti gustosi e lasciati ispirare!</p>
        </div>
        <div className="recipe-list">
            {meals.map((meal) => (
            <RecipeCard
                key={meal.idMeal}
                id={meal.idMeal}
                title={meal.strMeal}
                image={meal.strMealThumb}
            />
            ))}
        </div>
    </div>
  );
}

export default Home;
