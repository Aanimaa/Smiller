import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);
    const { user, logout } = useContext(AuthContext);

    return (
        <header className="site-header">
            <div className="container header-inner">
                {/* Left: logo */}
                <div className="header-left">
                    <div
                      className="brand"
                      role="button"
                      tabIndex={0}
                      onClick={() => navigate('/')}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/'); }}
                      style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                    >
                        <img
                            src="/images/Smiler.png"
                            alt="logo"
                            className="header-logo"
                        />
                    </div>
                </div>

                {/* Center: brand text (centered by CSS) */}
                <div className="header-center">
                    <div
                      className="brand-text"
                      role="button"
                      tabIndex={0}
                      onClick={() => navigate('/')}
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate('/'); }}
                      style={{ cursor: 'pointer' }}
                    >
                        <strong>S҉M҉I҉L҉E҉R҉</strong>
                    </div>
                </div>

                {/* Right: cart / auth */}
                <nav className="site-nav">
                    {user ? (
                      // Affiché quand connecté
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
                        <button className="btn ghost" onClick={() => { logout(); navigate('/'); }}>Déconnexion</button>
                      </div>
                    ) : (
                      // Liens de connexion/inscription quand non connecté
                      <>
                      <a
                          href="/signin"
                          onClick={(e) => { e.preventDefault(); navigate('/signin'); }}
                          style={{ marginRight: 12, textDecoration: 'none', color: 'inherit' }}
                      >
                          Connexion
                      </a>
                      <a
                          href="/signup"
                          onClick={(e) => { e.preventDefault(); navigate('/signup'); }}
                          style={{ marginRight: 12, textDecoration: 'none', color: 'inherit' }}
                      >
                          Inscription
                      </a>
                      </>
                    )}

                    {/* Lien vers la page À Propos */}
                    <a
                        href="/about"
                        onClick={(e) => { e.preventDefault(); navigate('/about'); }}
                        style={{ marginRight: 12, textDecoration: 'none', color: 'inherit' }}
                    >
                        À Propos
                    </a>
                     <button
                         aria-label="Voir le panier"
                         onClick={() => navigate('/cart')}
                         style={{ marginLeft: 16, display: 'inline-flex', alignItems: 'center', gap: 8 }}
                         className="btn ghost"
                     >
                        {/* Icône panier simple en SVG inline */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                            <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="10" cy="20" r="1" fill="currentColor" />
                            <circle cx="18" cy="20" r="1" fill="currentColor" />
                        </svg>
                        <span>Panier</span>
                        {/* compteur si items présents */}
                        {cartItems.length > 0 && (
                            <span style={{ marginLeft: 6, background: 'rgba(255,255,255,0.06)', padding: '2px 6px', borderRadius: 8, fontSize: 12 }}>{cartItems.reduce((acc, it) => acc + (it.qty || 1), 0)}</span>
                        )}
                    </button>
                </nav>
            </div>
        </header>
    );
}