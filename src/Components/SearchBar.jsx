function SearchBar({ search, setSearch, onSearch }) {
  return (
    <div className="search-bar">  
      <input  // box which contains input and button
        type="text"
        placeholder="Search a recipe, e.g. chicken"
        value={search}   //always shows stored values
        onChange={(e) => setSearch(e.target.value)}  //saves new text in search
      />
      <button onClick={onSearch}>Search</button>  
    </div> //button
  );
}

export default SearchBar;