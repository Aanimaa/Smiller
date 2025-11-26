# Smiller — Site vitrine (React + Vite)

Petite template React + Vite pour un site vitrine léger, personnalisable et prêt à déployer.

## Highlights
- Structure simple et claire.
- Auth basique (inscription / connexion) avec affichage du pseudo.
- Styles modulaires, facile à personnaliser (couleurs, boutons, footer).

## Démarrage rapide
1. Installer les dépendances : `npm install`
2. Lancer le serveur de dev : `npm run dev`
3. Build pour production : `npm run build`

## Structure du projet
mon-site-vitrine/  
├── `public/`  
├── `src/`  
├── `package.json`  
└── `vite.config.js`

Ajoute tes images dans `public/images/` (logo.png, hero.jpg) et `src/assets/images/` (profil.jpg).

## Fonctionnalités
- Page principale / landing
- Composants : header, footer, hero, about, cards
- Auth : inscription (demande du pseudo), connexion, déconnexion
- Affichage du pseudo dans le header lorsque connecté

## Notes d'implémentation (rapide) — correspond aux demandes
- Centrer le texte du footer : ajouter dans ton CSS
    - `.footer { text-align: center; }`
- Inscription → rediriger vers connexion après création :
    - Dans le handler d'inscription : `navigate('/login')`
- Connexion → rediriger vers la page principale et marquer connecté :
    - Après authentification : stocker le user (contexte ou localStorage) puis `navigate('/')`
- Demander le pseudo à l'inscription et afficher le pseudo :
    - Formulaire d'inscription : ajout de l'input `name="pseudo"`
    - Lors de la création du user, sauvegarder `pseudo` et utiliser `user.pseudo` dans le header à la place de l'email
- Changer la couleur du bouton About :
    - Utilise une variable CSS `--accent` et applique `.btn-about { background: var(--accent); }`
- Bouton déconnexion sans couleur :
    - Classe exemple : `.btn-logout { background: transparent; border: none; color: inherit; cursor: pointer; }`

Exemples courts (pseudo-code) :
- Redirection après signup/login : `if (success) navigate('/login')` ou `navigate('/')`
- Affichage du nom : `<span>{user?.pseudo ?? user?.email}</span>`

## Conventions & conseils
- Centraliser les couleurs dans `:root` (variables CSS) pour faciliter le thème.
- Utiliser un context React pour l'auth (`AuthContext`) afin d'avoir `user` accessible globalement.
- Garder les composants petits et testables.

## Contribution
- Fork → branche feature → PR
- Respecter le formatage (Prettier / ESLint si présents)

## Licence
MIT — personnalise si besoin.
