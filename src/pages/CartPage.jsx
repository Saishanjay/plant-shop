// src/pages/CartPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItemsArray,
  selectTotalCount,
  selectTotalPrice,
  increase,
  decrease,
  removeItem,
  clearCart,
} from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function CartPage() {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItemsArray);
  const totalCount = useSelector(selectTotalCount);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div>
      <h2>Your Shopping Cart</h2>

      <div style={{ marginBottom: 16 }}>
        <strong>Total plants in cart: </strong> {totalCount}
        <br />
        <strong>Total price: </strong> ${totalPrice.toFixed(2)}
      </div>

      {items.length === 0 && (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/products">
            <button>Continue Shopping</button>
          </Link>
        </div>
      )}

      {items.map((it) => (
        <div key={it.id} style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "center", border: "1px solid #eee", padding: 12, borderRadius: 8 }}>
          <img src={it.img} alt={it.name} style={{ width: 100, height: 70, objectFit: "cover", borderRadius: 6 }} />
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: 0 }}>{it.name}</h4>
            <div>Unit price: ${it.price.toFixed(2)}</div>
            <div>Items: {it.quantity}</div>
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => dispatch(increase(it.id))}>+</button>
            <button onClick={() => dispatch(decrease(it.id))}>-</button>
            <button onClick={() => dispatch(removeItem(it.id))}>Delete</button>
          </div>
        </div>
      ))}

      {items.length > 0 && (
        <div style={{ marginTop: 18 }}>
          <button
            onClick={() => alert("Coming Soon — checkout feature not implemented yet.")}
            style={{ marginRight: 10 }}
          >
            Checkout
          </button>

          <Link to="/products">
            <button style={{ marginRight: 10 }}>Continue Shopping</button>
          </Link>

          <button onClick={() => dispatch(clearCart())} style={{ background: "#eee" }}>
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
}
