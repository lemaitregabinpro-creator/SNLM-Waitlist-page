# SmartUnityIA Landing Page

Landing page moderne développée avec Vue.js 3 (Composition API), Tailwind CSS et Vite.

## 🚀 Démarrage rapide

### Installation des dépendances
```bash
npm install
```

### Développement
```bash
npm run dev
```

### Build de production
```bash
npm run build
```

Le dossier `dist` contiendra les fichiers optimisés pour la production.

## 📁 Structure du projet

```
├── src/
│   ├── assets/          # Images, polices, etc.
│   ├── components/      # Composants Vue réutilisables
│   │   ├── ui/         # Composants UI de base
│   │   └── sections/   # Sections de la landing page
│   ├── composables/     # Composables Vue (hooks)
│   ├── App.vue         # Composant principal
│   └── main.js         # Point d'entrée
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## 🌐 Déploiement Cloudflare Pages

1. Connectez votre dépôt Git à Cloudflare Pages
2. Configuration du build :
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node version**: 18 ou supérieur

Le déploiement se fera automatiquement à chaque push sur la branche principale.

## 🛠️ Technologies utilisées

- **Vue.js 3** avec Composition API (`<script setup>`)
- **Vite** pour le build et le dev server
- **Tailwind CSS** pour le styling
- **Lucide Vue Next** pour les icônes
