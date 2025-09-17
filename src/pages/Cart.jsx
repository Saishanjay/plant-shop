import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCartItems,
  selectTotalItems,
  selectTotalCost,
  increase,
  decrease,
  removeItem,
} from '../slices/cartSlice'
import { Link } from 'react-router-dom'

export default function Cart() {
  const dispatch = useDispatch()
  const itemsMap = useSelector(selectCartItems)
  const items = Object.values(itemsMap)
  const totalItems = useSelector(selectTotalItems)
  const totalCost = useSelector(selectTotalCost)

  return (
    <div className="container cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-summary">
        <p>Total plants: <strong>{totalItems}</strong></p>
        <p>Total cost: <strong>₹{totalCost.toFixed(2)}</strong></p>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/products" className="btn">Continue Shopping</Link>
        </div>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Plant</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map(({ product, quantity }) => (
                <tr key={product.id}>
                  <td className="plant-cell">
                    <img src={product.image} alt={product.name} />
                    <span>{product.name}</span>
                  </td>
                  <td>₹{product.price.toFixed(2)}</td>
                  <td>
                    <div className="qty-controls">
                      <button className="btn small" onClick={() => dispatch(decrease(product.id))}>-</button>
                      <span className="qty">{quantity}</span>
                      <button className="btn small" onClick={() => dispatch(increase(product.id))}>+</button>
                    </div>
                  </td>
                  <td>₹{(product.price * quantity).toFixed(2)}</td>
                  <td>
                    <button className="btn danger" onClick={() => dispatch(removeItem(product.id))}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-actions">
            <button className="btn primary" onClick={() => alert('Checkout: Coming Soon!')}>Checkout</button>
            <Link to="/products" className="btn">Continue Shopping</Link>
          </div>
        </>
      )}
    </div>
  )
}
