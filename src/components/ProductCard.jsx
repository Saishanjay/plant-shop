// src/components/ProductCard.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartItemsArray } from "../features/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItemsArray);
  const inCart = cartItems.some((it) => it.id === product.id);

  const handleAdd = () => {
    dispatch(addItem(product));
  };

  return (
    <div style={{
      border: "1px solid #eee",
      borderRadius: 8,
      padding: 12,
      width: 240,
      textAlign: "center"
    }}>
      <img src={product.img} alt={product.name} style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 6 }} />
      <h3 style={{ margin: "8px 0 4px" }}>{product.name}</h3>
      <p style={{ margin: 0, color: "#555" }}>${product.price.toFixed(2)}</p>

      <button
        onClick={handleAdd}
        disabled={inCart}
        style={{
          marginTop: 12,
          padding: "8px 12px",
          background: inCart ? "#aaa" : "#2b6cb0",
          color: "#fff",
          border: "none",
          borderRadius: 6,
          cursor: inCart ? "not-allowed" : "pointer"
        }}
      >
        {inCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}
