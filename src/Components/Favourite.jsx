function Favorites({ favorites, onToggleFavorite }) {
  return (  // saved list , and remove from list
    <div className="favorites">
      <h2>❤️ My Favourites</h2>

      {
      favorites.length === 0 && <p>No favourites yet.</p>//check if empty
      } 
 
      {favorites.map((meal) => (  //a map to arrange meals in rows
        <div key={meal.idMeal} className="fav-item"> 
          <span>{meal.strMeal}</span>
          <button onClick={() => onToggleFavorite(meal)}>Remove</button> 
        </div>
      ))}
    </div>
  );
}

export default Favorites;