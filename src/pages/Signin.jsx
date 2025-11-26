import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Signin() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [identifier, setIdentifier] = useState(''); // pseudo ou email
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    if (!identifier || !password) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    try {
      const raw = localStorage.getItem('smiler_registered')
      const users = raw ? JSON.parse(raw) : []
      const found = users.find(u => u.email === identifier || u.username === identifier)
      if (!found) {
        setError('Utilisateur non trouvé.');
        return;
      }
      if (found.password !== password) {
        setError('Mot de passe incorrect.');
        return;
      }
      // Ne pas stocker le mot de passe dans le contexte
      const safeUser = { username: found.username, email: found.email }
      login(safeUser)
      navigate('/')
    } catch (e) {
      setError('Erreur lors de la connexion.');
    }
  }

  return (
    <main className="container center">
      <section className="auth-card">
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit} className="auth-form">
          <label>
            Pseudo ou Email
            <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} placeholder="pseudo ou ton@exemple.com" />
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
