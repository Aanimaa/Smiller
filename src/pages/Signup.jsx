import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!email || !password || !confirm) {
      setError('Veuillez remplir tous les champs.');
      return;
    }
    if (password !== confirm) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    // Ici tu peux appeler ton API pour créer le compte. Pour l'instant on simule réussite.
    navigate('/');
  }

  return (
    <main className="container center">
      <section className="auth-card">
        <h1>Inscription</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Email
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ton@exemple.com" />
          </label>
          <label>
            Mot de passe
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </label>
          <label>
            Confirmer le mot de passe
            <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="••••••••" />
          </label>
          {error && <div className="form-error">{error}</div>}
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button type="submit" className="btn">Créer un compte</button>
            <button type="button" className="btn ghost" onClick={() => navigate('/signin')}>Déjà un compte ?</button>
          </div>
        </form>
      </section>
    </main>
  );
}

