// src/pages/Products.jsx
import React from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  // group products by category
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div>
      <h2>Our Plants</h2>
      {categories.map((cat) => (
        <section key={cat} style={{ marginBottom: 28 }}>
          <h3>{cat}</h3>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {products
              .filter((p) => p.category === cat)
              .map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
