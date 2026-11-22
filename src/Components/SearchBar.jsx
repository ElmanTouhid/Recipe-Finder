function SearchBar({ search, setSearch, onSearch }) {
  return (
    <div className="search-bar"> 
      <input
        type="text"
        placeholder="Search a recipe, e.g. chicken"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;