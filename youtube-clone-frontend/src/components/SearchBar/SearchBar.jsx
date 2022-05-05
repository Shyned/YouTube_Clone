import React, { useState } from "react";
const SearchBar = props => {
  const [search, setSearch] = useState("");

  function onChange(e) {
    let newValue = e.target.value;
    setSearch(newValue);
    console.log(newValue);
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newSearch = {
      search: search,
    };
    console.log(newSearch);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
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
