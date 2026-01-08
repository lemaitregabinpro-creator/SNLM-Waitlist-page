# Configuration Cloudflare Pages

## Déploiement via l'interface Cloudflare Pages

### Étapes de configuration

1. **Connecter votre dépôt Git**
   - Allez sur [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Sélectionnez "Pages" dans le menu
   - Cliquez sur "Create a project"
   - Connectez votre dépôt GitHub/GitLab/Bitbucket

2. **Configuration du build**
   - **Framework preset**: None (ou Vite si disponible)
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (ou laissez vide)
   - **Node version**: 18 ou supérieur

3. **Variables d'environnement** (si nécessaire)
   - Ajoutez vos variables d'environnement dans les paramètres du projet
   - Exemple : `NODE_ENV=production`

4. **Déploiement**
   - Cloudflare Pages détectera automatiquement les changements
   - Chaque push sur la branche principale déclenchera un nouveau déploiement
   - Les previews seront créées pour chaque Pull Request

## Déploiement via Wrangler CLI (optionnel)

Si vous préférez utiliser la CLI :

```bash
# Installation de Wrangler
npm install -g wrangler

# Authentification
wrangler login

# Déploiement
npm run build
wrangler pages deploy dist
```

## Configuration du domaine personnalisé

1. Dans les paramètres du projet Cloudflare Pages
2. Allez dans "Custom domains"
3. Ajoutez votre domaine
4. Suivez les instructions pour configurer les DNS

## Notes importantes

- Le dossier `dist` contient les fichiers statiques générés par Vite
- Les routes SPA sont gérées automatiquement par Cloudflare Pages
- Les assets sont servis avec un CDN global pour de meilleures performances
- Le cache est géré automatiquement par Cloudflare
