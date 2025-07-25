import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.tsx';
import Recipe from './pages/Recipe/Recipe.tsx';
import Favorites from './pages/Favorites/Favorite.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);