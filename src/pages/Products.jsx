import React from 'react'
import plants from '../data/plants'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartItems } from '../slices/cartSlice'

export default function Products() {
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  // Group categories
  const categories = Array.from(new Set(plants.map((p) => p.category)))

  return (
    <div className="container products-page">
      <h1>Plants</h1>
      {categories.map((category) => (
        <section key={category} className="category-section">
          <h2>{category}</h2>
          <div className="product-grid">
            {plants
              .filter((p) => p.category === category)
              .map((product) => {
                const added = !!cartItems[product.id]
                return (
                  <div key={product.id} className="product-card">
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p className="price">₹{product.price.toFixed(2)}</p>
                    <button
                      className="btn"
                      disabled={added}
                      onClick={() => dispatch(addToCart(product))}
                    >
                      {added ? 'Added' : 'Add to Cart'}
                    </button>
                  </div>
                )
              })}
          </div>
        </section>
      ))}
    </div>
  )
}
