import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PRODUCTS from '../data/products'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function ProductPage(){
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useContext(CartContext)

  const pid = Number(id)
  const product = PRODUCTS.find(p => p.id === pid)

  if(!product){
    return (
      <div className="container" style={{padding:'4rem 0'}}>
        <h2>Produit introuvable</h2>
        <p>Le produit demandé n'existe pas.</p>
        <button className="btn" onClick={() => navigate(-1)}>Retour</button>
      </div>
    )
  }

  return (
    <main style={{padding:'3rem 0'}}>
      <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'2rem',alignItems:'start'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <img src={product.image} alt={product.title} style={{maxWidth:'100%',borderRadius:12}} />
        </div>

        <div>
          <h1 style={{marginBottom:12}}>{product.title}</h1>
          <p className="text-muted" style={{marginBottom:16}}>{product.desc}</p>
          <div style={{fontSize:24,fontWeight:800,marginBottom:18}}>{product.price}</div>
          <div style={{display:'flex',gap:12}}>
            <button className="btn" onClick={() => addToCart(product)}>Ajouter au panier</button>
            <button className="btn ghost" onClick={() => navigate(-1)} style={{background:'transparent',border:'1px solid rgba(255,255,255,0.06)'}}>Retour</button>
          </div>

          <section style={{marginTop:28}}>
            <h3>Détails</h3>
            <p className="product-desc">Caractéristiques : {product.desc} — Matières de qualité, finitions soignées.</p>
          </section>
        </div>
      </div>
    </main>
  )
}

