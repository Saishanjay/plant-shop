// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTotalCount } from "../features/cart/cartSlice";

export default function Header() {
  const totalCount = useSelector(selectTotalCount);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 24px",
        borderBottom: "1px solid #eee",
        background: "#fff",
      }}
    >
      <div>
        <Link to="/" style={{ textDecoration: "none", color: "#2b6cb0" }}>
          <h1 style={{ margin: 0 }}>GreenLeaf Plant Shop</h1>
        </Link>
      </div>

      <nav style={{ display: "flex", gap: 16, alignItems: "center" }}>
        <Link to="/products">Products</Link>
        <Link to="/cart" style={{ position: "relative", display: "inline-flex", alignItems: "center" }}>
          {/* simple cart icon */}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.45c-.16.29-.25.62-.25.96 0 1.1.9 2 2 2h9v-2h-9l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49-1.74-1.03L17.42 12H9.14L7 4z"/>
          </svg>
          <span
            style={{
              display: "inline-block",
              minWidth: 18,
              padding: "2px 6px",
              borderRadius: 12,
              background: "#2b6cb0",
              color: "white",
              fontSize: 12,
              marginLeft: 8,
            }}
            aria-live="polite"
          >
            {totalCount}
          </span>
        </Link>
      </nav>
    </header>
  );
}
