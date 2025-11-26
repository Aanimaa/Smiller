import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

export default function Cart(){
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext)

  const total = cartItems.reduce((acc, it) => {
    // remove currency sign and parse number if price is like '35€'
    const num = parseFloat(String(it.price).replace(/[^0-9.,]/g, '').replace(',', '.')) || 0
    return acc + num * (it.qty || 1)
  }, 0)

  return (
    <section className="container" style={{padding:'2rem 0'}}>
      <h2>Panier</h2>

      {cartItems.length === 0 ? (
        <div style={{color:'var(--muted)', marginTop:12}}>Ton panier est vide.</div>
      ) : (
        <div style={{marginTop:12, maxWidth:900}}>
          {cartItems.map((it, idx) => (
            <div key={(it.id ?? it.title) + idx} style={{display:'flex', justifyContent:'space-between', alignItems:'center', padding:'12px 0', borderBottom:'1px solid rgba(255,255,255,0.04)'}}>
              <div>
                <div style={{fontWeight:700}}>{it.title ?? it.name}</div>
                <div style={{color:'var(--muted)'}}>{it.price} × {it.qty || 1}</div>
              </div>

              <div style={{display:'flex', gap:8}}>
                <button onClick={() => addToCart(it)} className="btn" style={{background:'transparent'}}>+</button>
                <button onClick={() => removeFromCart(it.id ?? it.title)} className="btn" style={{background:'transparent'}}>Supprimer</button>
              </div>
            </div>
          ))}

          <div style={{marginTop:18, display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div style={{fontWeight:800}}>Total estimé : {total.toFixed(2)}€</div>
            <div style={{display:'flex', gap:8}}>
              <button onClick={() => clearCart()} className="btn">Vider le panier</button>
              <button onClick={() => alert('Paiement simulé')} className="btn">Passer au paiement</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

