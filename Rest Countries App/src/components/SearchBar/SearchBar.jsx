import "./SearchBar.css";
import SearchIcon from "../../assets/images/search.svg";

const SearchBar = ({ query, onQueryChange }) => {
    return (
        <div className="search-bar">
            <img className="search-icon" src={SearchIcon} alt="Search Icon" />
            <input
                className="search-input"
                type="text"
                value={query}
                onChange={(event) => onQueryChange(event.target.value)}
                placeholder="Search for a country..."
            />
        </div>
    );
};

export default SearchBar;
