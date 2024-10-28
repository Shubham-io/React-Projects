import React from "react";
import "./Search.css";

const Search = ({ searchInput, search }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        className="search"
        placeholder="Search for a movie..."
        onChange={searchInput}
        onKeyDown={search}
      />
    </div>
  );
};

export default Search;
