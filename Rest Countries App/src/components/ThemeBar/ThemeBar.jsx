import moonIcon from "../../assets/images/moon.svg";
import "./ThemeBar.css";

const ThemeBar = ({ themeMode, setThemeMode }) => {
    const handleThemeChange = () => {
        themeMode === "light-theme"
            ? setThemeMode("dark-theme")
            : setThemeMode("light-theme");
    };

    return (
        <div className="theme-bar">
            <h1 className="theme-bar-header">Where in the world?</h1>
            <div className="theme-option" onClick={handleThemeChange}>
                <img className="img-moon" src={moonIcon} alt="Moon Icon" />
                <p className="dark-mode-text">Dark Mode</p>
            </div>
        </div>
    );
};

export default ThemeBar;
