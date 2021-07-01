// SearchResults Component
import React from "react";

const SearchResults = ({ cities, showData }) => {
  if (cities.length !== 0) {
    return (
      <div className="search-results">
        {cities.results.map((city) => (
          <div className="search-option" onClick={() => showData(city.id)}>{city.name}</div>
        ))}
      </div>
    );
  } else {
    return <></>;
  }
};

export default SearchResults;
