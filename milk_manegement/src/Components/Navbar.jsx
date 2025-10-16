import React, { useState } from "react";
import "../StyleSection/NavBar.css";

const Navbar = ({ onCategoryClick, onCitySelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [selectedCities, setSelectedCities] = useState([]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleCityDropdown = () => setIsCityDropdownOpen(!isCityDropdownOpen);

  const categories = ["Milk", "Ghee", "Curd", "Sweet", "Butter"];
  const cities = ["Delhi NCR", "Mumbai", "Bangalore", "Chennai", "Kolkata"];

  const handleCityClick = (city) => {
    setSelectedCities((prev) =>
      prev.includes(city)
        ? prev.filter((c) => c !== city)
        : [...prev, city]
    );
    if (onCitySelect) onCitySelect(city);
  };

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="nav-left">
        <div className="logo">🥛</div>
        <div className="location">
          <span onClick={toggleCityDropdown} className="location-text">
            {selectedCities.length > 0 ? selectedCities.join(", ") : "Select City"}{" "}
            <span className="arrow">&#9662;</span>
          </span>
          {isCityDropdownOpen && (
            <ul className="dropdown-menu">
              {cities.map((city) => (
                <li key={city}>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedCities.includes(city)}
                      onChange={() => handleCityClick(city)}
                    />
                    {city}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Company Name */}
      <div className="nav-brand">
        <a href="/" className="brand-link">
          WHITE <span>CRAFT</span>
        </a>
      </div>

      {/* Center Links */}
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li className="dropdown">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              toggleDropdown();
            }}
          >
            Products <span className="arrow">&#9662;</span>
          </a>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      if (onCategoryClick) onCategoryClick(cat);
                    }}
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
        <li><a href="#">Reviews</a></li>
        <li><a href="#">Our Farms</a></li>
        <li><a href="#">About Us</a></li>
      </ul>

      {/* Right Section */}
      <div className="nav-right">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1170/1170576.png"
          alt="Cart"
          className="cart-icon"
        />
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
