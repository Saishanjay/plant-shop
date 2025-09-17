import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalItems } from '../slices/cartSlice'

export default function Header() {
  const totalItems = useSelector(selectTotalItems)
  const loc = useLocation()

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="logo">PlantVerse</Link>
        <nav className="nav">
          <Link to="/products" aria-current={loc.pathname === '/products' ? 'page' : undefined}>Products</Link>
          <Link to="/cart" className="cart-link" aria-label="Cart">
            <span className="cart-emoji">🛒</span>
            <span className="cart-count">{totalItems}</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
