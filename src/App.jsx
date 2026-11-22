import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard"; //brings what our app.jsx needs
import Favorites from "./components/Favorites";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);//memory box
  const [error, setError] = useState("");               //first word = what is stored
  const [searched, setSearched] = useState(false);  // set = how we can change it
  
 
  const [favorites, setFavorites] = useState(       

JSON.parse(localStorage.getItem("favorites")) || [] );
// favorites memory
  useEffect(() => {     
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);    //changes after refresh stay there

  async function searchRecipes() {    //this part runs when we click search   // async = the job will wait for the internet
    if (search.trim() === "") return;     //search box empty then return

    setLoading(true);   //loading show before asking website
    setError("");   //error clear  before asking the website
    setSearched(true);   //remember that the user has searched  before asking the website

    try {  //try to do this
      const response = await fetch(       //ask the website for info
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`  //API link
      );
      if (!response.ok) throw new Error("Request failed");   //error throw  and catch below

      const data = await response.json();    //json converts answer to something JS can read
      setRecipes(data.meals || []);    //list of recipe or empty list
    } catch {
      setError("Something went wrong. Please try again.");     //only works when error is thrown 
      setRecipes([]);
    } finally {
      setLoading(false);
    }
  }

  function toggleFavorite(meal) {   //save or remove favourite  only runs when we click save or remove , toggle means to switch between two states
    const alreadySaved = favorites.find((f) => f.idMeal === meal.idMeal);   //check for simillar recipe   //f is short name for each favorite

    if (alreadySaved) {
      setFavorites(favorites.filter((f) => f.idMeal !== meal.idMeal));  // filters list , keeps everyone except the one clicked
    } else {                                                                                         // != : not equal to
      setFavorites([...favorites, meal]);   //if not simillar , then save it   //new gets added in the end
    }
  }

  return (   //shows everything which is on the page
    <div className="app">
      <h1>🍲 Recipe Finder</h1>

      <SearchBar search={search} setSearch={setSearch} onSearch={searchRecipes} /> 

      {loading && <p className="message">Loading recipes...</p>  //if loading true then show loading  
      }
      {error && <p className="message error">{error}</p>  //if error show error message
      }
      {!loading && !error && searched && recipes.length === 0 && (
        <p className="message">No recipes found.</p>  //no loading , no error , list empty
      )}

      <div className="recipe-grid">
        {recipes.map((meal) => (
          <RecipeCard
            key={meal.idMeal}  //id for recipe
            meal={meal}   // recipe to show
            isFavorite={favorites.some((f) => f.idMeal === meal.idMeal)}  //show saved ones
            onToggleFavorite={toggleFavorite}   //save or remove
          />
        ))}  
      </div>   

      <Favorites favorites={favorites} onToggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App; //connects with main.jsx