import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import Favorites from "./components/Favorites";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searched, setSearched] = useState(false);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  async function searchRecipes() {
    if (search.trim() === "") return;

    setLoading(true);
    setError("");
    setSearched(true);

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      if (!response.ok) throw new Error("Request failed");

      const data = await response.json();
      setRecipes(data.meals || []);
    } catch {
      setError("Something went wrong. Please try again.");
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  }

  function toggleFavorite(meal) {
    const alreadySaved = favorites.find((f) => f.idMeal === meal.idMeal);

    if (alreadySaved) {
      setFavorites(favorites.filter((f) => f.idMeal !== meal.idMeal));
    } else {
      setFavorites([...favorites, meal]);
    }
  }

  return (
    <div className="app">
      <h1>🍲 Recipe Finder</h1>

      <SearchBar search={search} setSearch={setSearch} onSearch={searchRecipes} />

      {loading && <p className="message">Loading recipes...</p>}
      {error && <p className="message error">{error}</p>}
      {!loading && !error && searched && recipes.length === 0 && (
        <p className="message">No recipes found.</p>
      )}

      <div className="recipe-grid">
        {recipes.map((meal) => (
          <RecipeCard
            key={meal.idMeal}
            meal={meal}
            isFavorite={favorites.some((f) => f.idMeal === meal.idMeal)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>

      <Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;