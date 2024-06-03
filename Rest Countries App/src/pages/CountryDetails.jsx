import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import arrowLongLeft from "../assets/images/arrow-long-left.svg";

import ThemeBar from "../components/ThemeBar/ThemeBar";

const CountryDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { cca3 } = useParams();

    const countries = state.countries;

    const selectedCountry = countries.filter(
        (country) => country.cca3 === cca3
    )[0];

    const handleBackClick = () => {
        navigate(-1);
    };

    const getCountryNameFromCCA3 = (cca3) => {
        const country = countries.filter((country) => country.cca3 === cca3);
        return country[0] ? country[0].name.common : "";
    };

    const [themeMode, setThemeMode] = useState(() => {
        const storedTheme = localStorage.getItem("themeMode");
        return storedTheme ? storedTheme : "light-theme";
    });

    useEffect(() => {
        localStorage.setItem("themeMode", themeMode);
    }, [themeMode]);

    return (
        <div className={`App ${themeMode}`}>
            <ThemeBar themeMode={themeMode} setThemeMode={setThemeMode} />
            <button className="back-button" onClick={() => handleBackClick()}>
                <img src={arrowLongLeft} className="back-icon" />
                Back
            </button>
            <div className="country-details-container">
                <img
                    className="country-detail-flag"
                    src={selectedCountry.flags.png}
                    alt="Country Flag"
                />
                <div className="country-data-container">
                    <div className="country-detail-container">
                        <h1 className="country-detail-header">
                            {selectedCountry.name.common}
                        </h1>

                        <p>
                            Native Name:{" "}
                            <span className="country-detail-span">
                                {selectedCountry.name?.nativeName
                                    ? Object.values(
                                          selectedCountry.name.nativeName
                                      ).pop().common
                                    : ""}
                            </span>
                        </p>
                        <p>
                            Population:{" "}
                            <span className="country-detail-span">
                                {selectedCountry.population.toLocaleString()}
                            </span>
                        </p>
                        <p>
                            Region:{" "}
                            <span className="country-detail-span">
                                {selectedCountry.region}
                            </span>
                        </p>
                        <p>
                            Sub Region:{" "}
                            <span className="country-detail-span">
                                {selectedCountry.subregion}
                            </span>
                        </p>
                        <p>
                            Capital:{" "}
                            <span className="country-detail-span">
                                {selectedCountry.capital}
                            </span>
                        </p>
                    </div>
                    <div className="domain-detail-container">
                        <p>
                            Top Level Domain:{" "}
                            <span className="country-detail-span">
                                {selectedCountry.tld.toString()}
                            </span>
                        </p>
                        <p>
                            Currencies:{" "}
                            <span className="country-detail-span">
                                {selectedCountry?.currencies
                                    ? Object.values(
                                          selectedCountry.currencies
                                      )[0].name.toString()
                                    : ""}
                            </span>
                        </p>
                        <p>
                            Languages:{" "}
                            <span className="country-detail-span">
                                {selectedCountry?.languages
                                    ? Object.values(
                                          selectedCountry.languages
                                      ).join(", ")
                                    : ""}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="border-countries-container">
                <span style={{ fontWeight: "600" }}>Border Countries:</span>{" "}
                {selectedCountry?.borders?.map((borderCountryCCA3) => {
                    return (
                        borderCountryCCA3 && (
                            <Link
                                style={{
                                    textDecoration: "none",
                                }}
                                key={borderCountryCCA3}
                                to={`/details/${borderCountryCCA3}`}
                                state={{ countries: countries }}
                            >
                                <button className="border-countries-btn">
                                    {getCountryNameFromCCA3(borderCountryCCA3)}
                                </button>
                            </Link>
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default CountryDetails;
