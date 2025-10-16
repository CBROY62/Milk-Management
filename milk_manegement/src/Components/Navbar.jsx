import React, { useState } from "react";
import "../StyleSection/NavBar.css";

const Navbar = ({ onCategoryClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const categories = ["Milk", "Ghee", "Curd", "Sweet", "Butter"];

  return (
    <nav className="navbar">
      {/* Left Section */}
      <div className="nav-left">
        <div className="logo">👀</div>
        <div className="location">
          Delhi NCR <span className="arrow">&#9662;</span>
        </div>
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
