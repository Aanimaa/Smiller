import React from 'react'

export default function ProductCard({product}){
  return (
    <article className="product-card">
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
          <button className="btn">Ajouter</button>
        </div>
      </div>
    </article>
  )
}

