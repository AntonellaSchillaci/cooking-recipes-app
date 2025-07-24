import { useFavorites } from '../../context/useFavorites';
import './styles.scss';

type RecipeCardProps = {
  id: string;
  title: string;
  image: string;
};

function RecipeCard({ id, title, image }: RecipeCardProps) {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.some((fav) => fav.idMeal === id);

  const handleFavorite = () => {
    const meal = {
      idMeal: id,
      strMeal: title,
      strMealThumb: image,
    };

    if (isFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(meal);
    }
  };

  return (
    <div className="recipe-card">
      <img src={image} alt={title} className="recipe-image" />
      <h3 className="recipe-title">{title}</h3>
      <a href={`/recipe/${id}`} className="recipe-link">Scopri di più</a>
      <button onClick={handleFavorite} className="favorite-btn">
        {isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
  );
}

export default RecipeCard;
