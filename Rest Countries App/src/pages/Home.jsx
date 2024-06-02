import { useEffect, useLayoutEffect, useState } from "react";
import "../styles.css";
import ThemeBar from "../components/ThemeBar/ThemeBar";
import SearchBar from "../components/SearchBar/SearchBar";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import CountryCard from "../components/CountryCard/CountryCard";
import { Link } from "react-router-dom";
import localCountriesData from "../assets/countries.json";

const Home = () => {
    const [query, setQuery] = useState("");
    const [countries, setCountries] = useState([]);
    const [filterOption, setFilterOption] = useState("All");
    const [themeMode, setThemeMode] = useState(() => {
        const storedTheme = localStorage.getItem("themeMode");
        return storedTheme ? storedTheme : "light-theme";
    });

    const sortCountries = (a, b) => {
        const countryNameA = a.name.common.toUpperCase(); // ignore upper and lowercase
        const countryNameB = b.name.common.toUpperCase(); // ignore upper and lowercase
        if (countryNameA < countryNameB) {
            return -1;
        }
        if (countryNameA > countryNameB) {
            return 1;
        }

        // names must be equal
        return 0;
    };

    let filteredCountries =
        filterOption === "All"
            ? countries
            : countries
                  .filter((country) => country.region === filterOption)
                  .sort(sortCountries);

    filteredCountries = filteredCountries
        .filter((country) =>
            country.name.common.toLowerCase().includes(query.toLowerCase())
        )
        .sort(sortCountries);

    useEffect(() => {
        localStorage.setItem("themeMode", themeMode);
    }, [themeMode]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                // The REST API is failing sometimes resulting in an error.
                // In order to fix this, I have opted to use the json file locally
                // const result = await fetch(
                //     "https://restcountries.com/v3.1/all"
                // );
                // const data = await result.json();
                // setCountries(data);
                setCountries(localCountriesData);
            } catch (err) {
                console.log(err);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className={`App ${themeMode}`}>
            <ThemeBar themeMode={themeMode} setThemeMode={setThemeMode} />
            <div className="menu-options">
                <SearchBar query={query} onQueryChange={setQuery} />
                <FilterMenu
                    filterOption={filterOption}
                    onFilterChange={setFilterOption}
                />
            </div>
            <div className="countries-container">
                {filteredCountries.map((country) => {
                    return (
                        <Link
                            style={{ textDecoration: "none" }}
                            key={country.cca3}
                            to={`/details/${country.cca3}`}
                            state={{ countries: countries }}
                        >
                            <CountryCard country={country} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
