import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div
      className="landing"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=1600&auto=format&fit=crop&q=60)',
      }}
    >
      <div className="overlay">
        <div className="container landing-inner">
          <h1 className="company-name">PlantVerse</h1>
          <p className="company-desc">
            PlantVerse is an online shop for houseplants — discover, add to cart, and manage your
            green friends easily. We focus on healthy plants, sustainable packaging, and helpful
            plant-care tips.
          </p>
          <Link to="/products" className="btn primary">Get Started</Link>
        </div>
      </div>
    </div>
  )
}
