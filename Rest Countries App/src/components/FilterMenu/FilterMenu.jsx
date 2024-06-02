import chevronDown from "../../assets/images/chevron-down.svg";
import "./FilterMenu.css";

const FilterMenu = ({ filterOption, onFilterChange }) => {
    const handleFilterChange = (event) => {
        onFilterChange(event.target.textContent);
    };

    return (
        <div className="filter-menu">
            <div className="filter-menu-btn">
                <p>Filter by Region</p>
                <img
                    className="chevron-icon"
                    src={chevronDown}
                    alt="Chevron Down"
                />
            </div>
            <div className="filter-menu-content">
                <p
                    className={
                        filterOption === "All"
                            ? "menu-item selected"
                            : "menu-item"
                    }
                    onClick={handleFilterChange}
                >
                    All
                </p>
                <p
                    className={
                        filterOption === "Africa"
                            ? "menu-item selected"
                            : "menu-item"
                    }
                    onClick={handleFilterChange}
                >
                    Africa
                </p>
                <p
                    className={
                        filterOption === "Americas"
                            ? "menu-item selected"
                            : "menu-item"
                    }
                    onClick={handleFilterChange}
                >
                    Americas
                </p>
                <p
                    className={
                        filterOption === "Asia"
                            ? "menu-item selected"
                            : "menu-item"
                    }
                    onClick={handleFilterChange}
                >
                    Asia
                </p>
                <p
                    className={
                        filterOption === "Europe"
                            ? "menu-item selected"
                            : "menu-item"
                    }
                    onClick={handleFilterChange}
                >
                    Europe
                </p>
                <p
                    className={
                        filterOption === "Oceania"
                            ? "menu-item selected"
                            : "menu-item"
                    }
                    onClick={handleFilterChange}
                >
                    Oceania
                </p>
            </div>
        </div>
    );
};

export default FilterMenu;
