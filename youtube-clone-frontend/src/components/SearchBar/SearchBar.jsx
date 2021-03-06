import React, { useState } from "react";
import"./SearchBar.css"



const SearchBar = props => {
  const [search, setSearch] = useState("");

  function onChange(e) {
    let newValue = e.target.value;
    setSearch(newValue);
   
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newSearch = search
    props.searchKeyWord(newSearch)
  }

  return (
    <form className="search-area" onSubmit={handleSubmit}>
      <div>
        <input
        className="search-input"
          type="search"
          placeholder="Search"
          search={search}
          onChange={onChange}
          aria-label="Search"
        ></input>
        <button className="btn-submit" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
