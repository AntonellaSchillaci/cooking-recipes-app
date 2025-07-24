import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
  
    useEffect(() => {
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setMeal(data.meals[0]);
        })
        .catch((err) => console.error('Errore nella fetch:', err));
    }, [id]);
  
    if (!meal) return <Loader />;
  
    return (
      <div className="recipe-detail">
        <h2 className="recipe-title">{meal.strMeal}</h2>
        <img className="recipe-img" src={meal.strMealThumb} alt={meal.strMeal} />
        <p className="recipe-sub-section"><strong className="recipes-strong">Categoria:</strong> {meal.strCategory}</p>
        <p className="recipe-sub-section"><strong className="recipes-strong">Cucina:</strong> {meal.strArea}</p>
        <h3 className="recipe-title-instructions">Istruzioni</h3>
        <p className="recipe-sub-section">{meal.strInstructions}</p>
      </div>
    );
  }
  
  export default Recipe;