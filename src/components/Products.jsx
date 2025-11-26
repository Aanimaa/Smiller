import React from 'react'
import ProductCard from './ProductCard'

const PRODUCTS = [
  { id: 1, title: 'T-shirt Neon', desc: 'Coton premium • Coupe classique', price: '35€', image: '/images/shirt1.svg' },
  { id: 2, title: 'T-shirt Slim', desc: 'Matière stretch • Coupe slim', price: '38€', image: '/images/shirt2.svg' },
  { id: 3, title: 'Hoodie Oversize', desc: 'Capuche, poches kangourou', price: '65€', image: '/images/shirt3.svg' },
  { id: 4, title: 'Bomber Smiler', desc: 'Léger, doublure satinée', price: '85€', image: '' },
  { id: 5, title: 'Casquette Neon', desc: 'Broderie Smiler', price: '22€', image: '' },
  { id: 6, title: 'Jogger', desc: 'Confort & style', price: '49€', image: '' },
]

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

