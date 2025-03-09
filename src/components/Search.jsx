import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      {searchTerm}
      <div className="">
        <img src="search.png" alt="search" />
        <input
          type="text"
          placeholder="Search through thounsands of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
