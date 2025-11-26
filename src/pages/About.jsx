import React from 'react';

export default function About() {
  return (
    <main className="container">
      <section className="about-section">
        <h1 className="about-title">À Propos</h1>

        <div className="about-content">
          <div className="about-text">
            <h2>Notre Histoire</h2>
            <p>
              Bienvenue chez Smiler. Nous créons des produits au style néon, modernes
              et pensés pour les amateurs d'esthétique audacieuse.
            </p>

            <h2>Notre Mission</h2>
            <p>
              Offrir une expérience utilisateur exceptionnelle et des produits
              de qualité avec un design distinctif.
            </p>

            <h2>Nos Valeurs</h2>
            <ul className="values-list">
              <li>Innovation</li>
              <li>Qualité</li>
              <li>Design</li>
              <li>Engagement client</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

