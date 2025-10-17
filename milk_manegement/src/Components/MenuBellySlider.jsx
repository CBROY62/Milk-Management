import React, { useState } from "react";
import { products } from "../data/menuData";
import "../StyleSection/MenuFilter.css";

const MenuFilter = () => {
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFilter = (category) => {
    setActiveCategory(category);
    setFilteredProducts(
      category === "All"
        ? products
        : products.filter((p) => p.category === category)
    );
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

      {/* Product Grid */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            {/* Top Labels */}
            <div className="card-labels">
              {product.tag && <span className="tag">{product.tag}</span>}
              {product.discount && (
                <span className="discount">{product.discount}% Off</span>
              )}
            </div>

            {/* Product Image */}
            <img src={product.img} alt={product.name} className="product-img" />

            {/* Details */}
            <h3 className="product-name">{product.name}</h3>
            <p className="product-size">{product.size}</p>
            <p className="in-stock">In Stock</p>

            {/* Price Section */}
            <div className="price-section">
              <span className="new-price">₹{product.price}</span>
              <span className="old-price">₹{product.oldPrice}</span>
            </div>

            {/* Add Button */}
            <button className="add-btn">Add</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuFilter;
