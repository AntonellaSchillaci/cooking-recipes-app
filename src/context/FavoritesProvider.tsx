import { useState, type ReactNode } from 'react';
import { FavoritesContext } from './FavoriteContext';
import type { FavoriteMeal } from './FavoritesType';

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<FavoriteMeal[]>([]);

  const addFavorite = (meal: FavoriteMeal) => {
    if (!favorites.find((fav) => fav.idMeal === meal.idMeal)) {
      setFavorites((prev) => [...prev, meal]);
    }
  };

  const removeFavorite = (idMeal: string) => {
    setFavorites((prev) => prev.filter((meal) => meal.idMeal !== idMeal));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
