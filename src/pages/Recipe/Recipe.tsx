import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import "./styles.scss";

type Meal = {
    idMeal: string;
    strMeal: string;
    strInstructions: string;
    strMealThumb: string;
    strCategory: string;
    strArea: string;
};

function Recipe() {
    const { id } = useParams();
    const [meal, setMeal] = useState<Meal | null>(null);
    const navigate = useNavigate();
    const ingredients: string[] = [];

  
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals[0]);
        })
        .catch((err) => console.error('Errore nella fetch:', err));
    }, [id]);
  
    if (!meal) return <Loader />;

    const mealData = meal as Record<string, string>;

    for (let i = 1; i <= 20; i++) {
        const ingredient = mealData[`strIngredient${i}`];
        const measure = mealData[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== '') {
            ingredients.push(`${ingredient} - ${measure}`);
        }
    }
  
    return (
      <div className="recipe-detail">
        <div className="back-container">
            <button className="back-button" onClick={() => navigate('/')}>
                ⬅️ Back to Recipes
            </button>
        </div>
        <h2 className="recipe-title">{meal.strMeal}</h2>
        <img className="recipe-img" src={meal.strMealThumb} alt={meal.strMeal} />
        <p className="recipe-sub-section"><strong className="recipes-strong">Categoria:</strong> {meal.strCategory}</p>
        <p className="recipe-sub-section"><strong className="recipes-strong">Cucina:</strong> {meal.strArea}</p>
        <h3 className="recipe-title-instructions">Ingredienti</h3>
        <ul className="list">
        {ingredients.map((item, index) => (
            <li className="list-element" key={index}>{item}</li>
        ))}
        </ul>
        <h3 className="recipe-title-instructions">Istruzioni</h3>
        <p className="recipe-sub-section">{meal.strInstructions}</p>
      </div>
    );
  }
  
  export default Recipe;