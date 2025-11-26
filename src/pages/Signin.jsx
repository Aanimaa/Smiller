import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    // Ici tu peux appeler ton API d'authentification. Pour l'instant on simule réussite.
    navigate('/');
  }

  return (
    <main className="container center">
      <section className="auth-card">
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ton@exemple.com" />
          </label>
          <label>
            Mot de passe
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </label>
          {error && <div className="form-error">{error}</div>}
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button type="submit" className="btn">Se connecter</button>
            <button type="button" className="btn ghost" onClick={() => navigate('/signup')}>Créer un compte</button>
          </div>
        </form>
      </section>
    </main>
  );
}

