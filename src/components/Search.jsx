import React, { useState } from 'react';

import sparkleVector from "../../assets/vectors/sparkle.svg";

const Search = ({ textareaRef, enableMessages, handleSearch, isMobileScreen, setExitDuration, fixSearchBar, resetSearchBarPosition }) => {

    return (
        <div className="search-container">
          <div className="search">
            <img className="search-icon" src={sparkleVector} draggable="false" alt="sparkle" />
          </div>
        </div>
    );
}

export default Search;