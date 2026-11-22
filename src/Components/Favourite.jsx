function Favorites({ favorites, onToggleFavorite }) {
  return (
    <div className="favorites">
      <h2>❤️ My Favourites</h2>

      {favorites.length === 0 && <p>No favourites yet.</p>}

      {favorites.map((meal) => (
        <div key={meal.idMeal} className="fav-item">
          <span>{meal.strMeal}</span>
          <button onClick={() => onToggleFavorite(meal)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Favorites;