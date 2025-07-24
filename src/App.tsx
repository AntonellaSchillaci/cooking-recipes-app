import { Outlet } from 'react-router-dom';
import './App.scss';
import { FavoritesProvider } from './context/FavoritesProvider';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <FavoritesProvider>
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
    </FavoritesProvider>
  );
}

export default App;
