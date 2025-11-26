import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({product}){
  const { addToCart } = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <article className="product-card" style={{cursor:'pointer'}} onClick={() => navigate(`/product/${product.id}`)}>
      <div className="product-media">
        {product.image ? <img src={product.image} alt={product.title} style={{maxWidth:'100%',maxHeight:'100%',borderRadius:8}} /> : (
          <div className="placeholder">{product.title}</div>
        )}
      </div>
      <div>
        <div className="product-title">{product.title}</div>
        <div className="product-desc">{product.desc}</div>
        <div className="price-row" style={{marginTop:8}}>
          <div className="price">{product.price}</div>
          <button className="btn" onClick={(e) => { e.stopPropagation(); addToCart(product); }} style={{cursor:'pointer'}}>Ajouter</button>
        </div>
      </div>
    </article>
  )
}
