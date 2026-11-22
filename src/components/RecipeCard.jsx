function RecipeCard({ meal, isFavorite, onToggleFavorite }) {
  return (
    <div className="card">
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h3>{meal.strMeal}</h3>
      <p>{meal.strCategory} • {meal.strArea}</p>

      <button onClick={() => onToggleFavorite(meal)}>
        {isFavorite ? "❤️ Remove" : "🤍 Save"}
      </button>
    </div>
  );
}

export default RecipeCard;