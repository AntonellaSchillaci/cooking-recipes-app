import { createContext } from 'react';
import type { FavoritesContextType } from './FavoritesType';

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
