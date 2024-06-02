import "./CountryCard.css";

const CountryCard = ({ country }) => {
    return (
        <div className="country-card-container">
            <img
                className="img-country-flag"
                src={country.flags.png}
                alt="Country Flag"
            />
            <div className="country-info-container">
                <h3 className="country-name">{country.name.common}</h3>
                <p className="country-population">
                    Population:{" "}
                    <span className="country-info-span">
                        {country.population.toLocaleString()}
                    </span>
                </p>
                <p className="country-region">
                    Region:{" "}
                    <span className="country-info-span"> {country.region}</span>
                </p>
                <p className="country-capital">
                    Capital:{" "}
                    <span className="country-info-span">{country.capital}</span>
                </p>
            </div>
        </div>
    );
};

export default CountryCard;
