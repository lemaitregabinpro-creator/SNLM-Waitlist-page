# 🚀 Guide de Démarrage Rapide

## Installation et Lancement

### 1. Installer les dépendances
```bash
npm install
```

### 2. Lancer le serveur de développement
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

### 3. Build de production
```bash
npm run build
```

Les fichiers optimisés seront dans le dossier `dist/`

## 📦 Structure des Composants

### Composants UI (`src/components/ui/`)
Composants réutilisables de base :
- **Button.vue** : Bouton avec variantes (primary/secondary)
- **FadeInSection.vue** : Animation au scroll
- **AnimatedCounter.vue** : Compteur animé
- **RangeSlider.vue** : Slider pour le calculateur ROI
- **TypewriterEffect.vue** : Effet machine à écrire
- **FaqItem.vue** : Item FAQ avec accordéon
- **TerminalBackground.vue** : Arrière-plan terminal animé
- **ChatSimulation.vue** : Simulation de chat

### Sections (`src/components/sections/`)
Sections principales de la landing page :
- **NavBar.vue** : Navigation avec menu mobile
- **HeroSection.vue** : Section hero principale
- **SocialProof.vue** : Bande de technologies
- **ExpertiseSection.vue** : Pourquoi choisir Local First
- **LeadMagnet.vue** : Formulaire de téléchargement
- **ServicesGrid.vue** : Grille de services
- **RoiCalculator.vue** : Calculateur ROI interactif
- **PricingCard.vue** : Carte de tarification
- **PricingSection.vue** : Section tarification complète
- **FaqSection.vue** : Questions fréquentes
- **AboutSection.vue** : Section à propos
- **ContactSection.vue** : Section contact
- **Footer.vue** : Pied de page

### Composables (`src/composables/`)
Logique réutilisable :
- **useScrollAnimation.js** : Détection de visibilité au scroll
- **useScroll.js** : Détection du scroll de la page

## 🔧 Configuration

### Vite (`vite.config.js`)
- Alias `@` pointant vers `./src`
- Build optimisé avec code splitting
- Output: `dist/`

### Tailwind CSS (`tailwind.config.js`)
- Animations personnalisées (scroll, fadeIn)
- Couleurs personnalisées (slate, cyan)
- Configuration complète pour le design system

### Cloudflare Pages
Voir `cloudflare-pages.md` pour les instructions de déploiement.

## 🎨 Personnalisation

### Modifier les couleurs
Éditez `tailwind.config.js` dans la section `theme.extend.colors`

### Modifier les animations
Les animations CSS sont définies dans `tailwind.config.js` (keyframes)

### Ajouter une nouvelle section
1. Créez un nouveau composant dans `src/components/sections/`
2. Importez-le dans `App.vue`
3. Ajoutez-le dans le template

## 📝 Notes Importantes

- Tous les composants utilisent la Composition API (`<script setup>`)
- Les icônes proviennent de `lucide-vue-next`
- Le style utilise Tailwind CSS avec des classes utilitaires
- Les animations au scroll utilisent IntersectionObserver
- Le calculateur ROI est entièrement réactif avec Vue

## 🐛 Dépannage

### Erreur "Cannot find module"
Vérifiez que vous avez bien installé les dépendances : `npm install`

### Les animations ne fonctionnent pas
Vérifiez que Tailwind CSS est bien configuré dans `tailwind.config.js`

### Le build échoue
Vérifiez la version de Node.js (18 ou supérieur recommandé)

## 📚 Ressources

- [Documentation Vue.js 3](https://vuejs.org/)
- [Documentation Vite](https://vitejs.dev/)
- [Documentation Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
