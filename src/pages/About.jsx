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
                Bonjour, je suis Aanima, bienvenue chez Smiler.
                Ce site n'est pas à but commercial, il a été créé
                dans le cadre d'un projet que j'avais en tête
                pour apprendre le développement web, notamment React, JSX et Tailwind.
                Smiler est une marque fictive spécialisée dans la mode, les jeux vidéo et les mangas.
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

