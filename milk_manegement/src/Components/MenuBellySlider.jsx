import React, { useState } from "react";
import { products } from "../data/menuData"; // Ensure correct data path
import "../StyleSection/MenuFilter.css";

const MenuFilter = () => {
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === category));
    }
  };

  return (
    <div className="menu-section">
      <h2 className="menu-title">Our Products</h2>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => handleFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="brand">{product.brand}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuFilter;
