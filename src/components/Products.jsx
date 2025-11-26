import React from 'react'
import ProductCard from './ProductCard'
import PRODUCTS from '../data/products'

export default function Products(){
  return (
    <section id="products" className="products">
      <div className="container">
        <div className="center">
          <h2>Collections</h2>
          <p className="text-muted">Sélection de pièces phares — édition limitée</p>
        </div>

        <div className="products-grid" style={{marginTop:18}}>
          {PRODUCTS.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
