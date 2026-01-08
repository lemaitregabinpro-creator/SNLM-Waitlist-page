# Migration React → Vue.js 3

## 📋 Résumé de la Migration

Cette landing page a été migrée de React vers Vue.js 3 avec Composition API (`<script setup>`), Tailwind CSS et Vite.

## 🔄 Correspondances React → Vue

### Hooks React → Composables Vue

| React | Vue 3 |
|-------|-------|
| `useState` | `ref()` ou `reactive()` |
| `useEffect` | `onMounted()`, `watch()`, `onUnmounted()` |
| `useRef` | `ref()` |
| Custom hooks | Composables (dans `/src/composables/`) |

### Composants

| React | Vue 3 |
|-------|-------|
| `function Component()` | `<script setup>` |
| `props` | `defineProps()` |
| `{children}` | `<slot />` |
| `onClick` | `@click` |
| `className` | `:class` ou `class` |

### Icônes

- **React** : `lucide-react`
- **Vue** : `lucide-vue-next`

## 📁 Structure du Projet

```
landing-page/
├── src/
│   ├── assets/              # Images, polices, etc.
│   ├── components/
│   │   ├── ui/              # Composants UI réutilisables
│   │   │   ├── Button.vue
│   │   │   ├── FadeInSection.vue
│   │   │   ├── AnimatedCounter.vue
│   │   │   ├── RangeSlider.vue
│   │   │   ├── TypewriterEffect.vue
│   │   │   ├── FaqItem.vue
│   │   │   ├── TerminalBackground.vue
│   │   │   └── ChatSimulation.vue
│   │   └── sections/        # Sections de la landing page
│   │       ├── NavBar.vue
│   │       ├── HeroSection.vue
│   │       ├── SocialProof.vue
│   │       ├── ExpertiseSection.vue
│   │       ├── LeadMagnet.vue
│   │       ├── ServicesGrid.vue
│   │       ├── RoiCalculator.vue
│   │       ├── PricingCard.vue
│   │       ├── PricingSection.vue
│   │       ├── FaqSection.vue
│   │       ├── AboutSection.vue
│   │       ├── ContactSection.vue
│   │       └── Footer.vue
│   ├── composables/         # Composables Vue (équivalents hooks)
│   │   ├── useScrollAnimation.js
│   │   └── useScroll.js
│   ├── App.vue              # Composant principal
│   ├── main.js              # Point d'entrée
│   └── style.css            # Styles globaux (Tailwind)
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Démarrage

### Installation
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

## ✨ Fonctionnalités Migrées

### ✅ Composants UI
- [x] Button (avec animations hover)
- [x] FadeInSection (animation au scroll)
- [x] AnimatedCounter (compteur animé)
- [x] RangeSlider (slider pour ROI calculator)
- [x] TypewriterEffect (effet machine à écrire)
- [x] FaqItem (accordéon FAQ)
- [x] TerminalBackground (arrière-plan animé)
- [x] ChatSimulation (simulation de chat)

### ✅ Sections
- [x] NavBar (navigation responsive)
- [x] HeroSection (section hero avec typewriter)
- [x] SocialProof (bande de technologies)
- [x] ExpertiseSection (pourquoi Local First)
- [x] LeadMagnet (formulaire de téléchargement)
- [x] ServicesGrid (grille de services)
- [x] RoiCalculator (calculateur ROI interactif)
- [x] PricingSection (cartes de tarification)
- [x] FaqSection (questions fréquentes)
- [x] AboutSection (section à propos)
- [x] ContactSection (section contact)
- [x] Footer

### ✅ Animations
- [x] IntersectionObserver pour les animations au scroll
- [x] Animations CSS (fade-in, scroll, pulse)
- [x] Transitions Vue.js
- [x] Typewriter effect
- [x] Compteur animé

## 🔧 Configuration

### Vite
- Alias `@` configuré pour `./src`
- Build optimisé avec code splitting
- Output: `dist/`

### Tailwind CSS
- Configuration complète avec animations personnalisées
- Couleurs personnalisées (slate, cyan)
- Animations keyframes (scroll, fadeIn)

### Cloudflare Pages
- Configuration prête pour déploiement
- Build command: `npm run build`
- Output directory: `dist`

## 📝 Notes Techniques

1. **Composition API** : Tous les composants utilisent `<script setup>` pour une syntaxe plus concise
2. **Réactivité** : Utilisation de `ref()` pour les valeurs primitives et `reactive()` pour les objets (si nécessaire)
3. **Lifecycle** : `onMounted()` et `onUnmounted()` pour gérer les effets de bord
4. **Props** : Utilisation de `defineProps()` avec validation TypeScript-like
5. **Events** : Utilisation de `defineEmits()` pour les événements personnalisés
6. **Computed** : Utilisation de `computed()` pour les valeurs dérivées (ex: dans RoiCalculator)

## 🐛 Corrections Apportées

- Correction de l'import `computed` dans `AnimatedCounter.vue`
- Utilisation de `kebab-case` pour les props dans les templates Vue
- Gestion correcte du cleanup dans les composables (IntersectionObserver, timers)
- Adaptation des animations CSS pour Vue

## 🎯 Prochaines Étapes (Optionnel)

- [ ] Ajouter des tests unitaires (Vitest)
- [ ] Optimiser les images (lazy loading)
- [ ] Ajouter un système de routing si nécessaire
- [ ] Implémenter le formulaire de lead magnet avec backend
- [ ] Ajouter analytics (Plausible, Google Analytics, etc.)
