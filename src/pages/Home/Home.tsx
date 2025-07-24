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
  const [searchTerm, setSearchTerm] = useState('');

  const fetchMeals = (query: string) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []);
      })
      .catch((err) => console.error('Errore nella fetch:', err));
  };

  useEffect(() => {
    fetchMeals('');
  }, []);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchMeals(searchTerm);
  };

  return (
    <div className="home">
      <div className="title-container">
        <h1 className="title">Benvenuti in Cooking Recipes App! 🍝</h1>
        <p className="sub-title">Scopri piatti gustosi e lasciati ispirare!</p>
      </div>

      <form className="search-form" onSubmit={handleSearch}>
        <input className="search-input"
          type="text"
          placeholder="Cerca una ricetta..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn" type="submit">🔍 Cerca</button>
      </form>

      <div className="recipe-list">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <RecipeCard
              key={meal.idMeal}
              id={meal.idMeal}
              title={meal.strMeal}
              image={meal.strMealThumb}
            />
          ))
        ) : (
          <p>Nessuna ricetta trovata 😢</p>
        )}
      </div>
    </div>
  );
}

export default Home;
