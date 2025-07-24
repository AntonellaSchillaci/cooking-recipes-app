import { useFavorites } from '../../context/useFavorites';
import './favorites.scss';

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="favorites-page">
      <h2 className="favorites-title">I tuoi preferiti</h2>
      {favorites.length === 0 ? (
        <p className="favorites-info">Non hai ancora aggiunto ricette ai preferiti.</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((meal) => (
            <div key={meal.idMeal} className="favorite-card">
              <img className="favorites-img" src={meal.strMealThumb} alt={meal.strMeal} />
              <h3 className="favorites-sub">{meal.strMeal}</h3>
              <button className="favorites-btn" onClick={() => removeFavorite(meal.idMeal)}>Rimuovi 💔</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
