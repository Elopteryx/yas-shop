import React from "react";

const SearchBar: React.FunctionComponent<{}> = () => {
    return (
        <div className="App-search">
            <input type="text" placeholder="Search..."/>
        </div>
    );
};

export default SearchBar;