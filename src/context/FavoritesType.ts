export type FavoriteMeal = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  };
  
  export type FavoritesContextType = {
    favorites: FavoriteMeal[];
    addFavorite: (meal: FavoriteMeal) => void;
    removeFavorite: (idMeal: string) => void;
  };
  