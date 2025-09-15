// src/pages/Landing.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  // You can replace the background image with local file: /public/landing.jpg or src/assets/...
  const bgUrl = "https://via.placeholder.com/1200x500.png?text=Green+Plants+Background";

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "70vh",
      backgroundImage: `url(${bgUrl})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: 8,
      color: "#fff",
      padding: 40,
    }}>
      <div style={{ background: "rgba(0,0,0,0.35)", padding: 24, borderRadius: 8, maxWidth: 700 }}>
        <h2 style={{ color: "#fff", marginTop: 0 }}>GreenLeaf Plant Shop</h2>
        <p>
          We help you pick easy-care houseplants that purify your home, improve air
          quality, and bring calm vibes to your room. Whether you're new to plants
          or a proud plant parent, we have something for you.
        </p>

        <Link to="/products">
          <button style={{
            padding: "10px 16px",
            background: "#2b6cb0",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            cursor: "pointer",
            marginTop: 8
          }}>
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
}
