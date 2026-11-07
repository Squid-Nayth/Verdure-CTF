# Verdure

Jardinerie de quartier en ligne.  
Projet réalisé dans le cadre du BTS SIO (2e année) — Application web interactive développée en JavaScript Vanilla et DOM pur, avec intégration du design system ThoughtStream.

## Présentation

Verdure est une boutique en ligne dédiée aux plantes d’intérieur, proposant un catalogue dynamique, un système de recherche et filtrage multicritère, un panier interactif, des fiches détaillées et un formulaire de contact validé côté client.

## Fonctionnalités

- **Catalogue dynamique** : Génération des cartes produits à partir du jeu de données JavaScript.
- **Recherche & Filtrage** : Recherche textuelle instantanée cumulable avec un filtre par niveau de difficulté (Facile, Intermédiaire, Expert).
- **Panier d'achat** : Ajout d'articles, calcul en temps réel du total en euros, suppression unitaire d'une ligne et remise à zéro complète.
- **Fiches produits dédiées** : Chargement dynamique des caractéristiques d'une plante selon les paramètres de l'URL (`plante.html?id=...`).
- **Formulaire de contact** : Contrôle des saisies (format email, champs requis), gestion des messages d'erreur et confirmation personnalisée sans rechargement de page.
- **Thème sombre** : Bascule instantanée entre mode clair et mode sombre.

## Architecture

```text
verdure/
├── index.html              # Page d'accueil et boutique
├── plante.html             # Fiche détaillée d'une plante
├── contact.html            # Formulaire de contact
├── css/
│   └── style.css           # Feuille de styles (design system ThoughtStream)
├── js/
│   ├── ctf-config.js       # Configuration de l'équipe (dofus-quatre)
│   ├── plantes.js          # Données sources des plantes
│   ├── commun.js           # Utilitaires partagés et gestion du thème
│   ├── accueil.js          # Catalogue, recherche, filtres et panier
│   ├── fiche.js            # Rendu dynamique de la fiche produit
│   ├── contact.js          # Validation et traitement du formulaire
│   └── ctf.js              # Vérificateur automatique des défis
├── docs/
│   ├── consigne.pdf        # Sujet et consignes du TP
│   └── maquettes/          # Maquettes graphiques de référence
├── FLAGS.md                # Registre des flags validés
└── README.md               # Documentation du projet
```

## Lancement local

Le projet fonctionne sans dépendance externe ni étape de compilation.

### Méthode 1 : Avec Live Server (VS Code)
1. Ouvrez le dossier dans Visual Studio Code.
2. Faites un clic droit sur `index.html` puis sélectionnez **Open with Live Server**.

### Méthode 2 : Avec Python
Dans votre terminal, à la racine du projet :
```bash
python3 -m http.server 8000
```
Accédez ensuite à l'adresse `http://localhost:8000` depuis votre navigateur.

## Technologies

- **HTML5** : Balisage sémantique et accessible
- **CSS3** : Design system ThoughtStream (polices Libre Baskerville et Inter, 0px border-radius, grille et flexbox)
- **JavaScript (ES6+)** : Manipulation native du DOM sans bibliothèque externe
