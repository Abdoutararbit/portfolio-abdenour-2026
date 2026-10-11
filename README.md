# Portfolio d'Abdenour Tararbit (Angular)

Site portfolio en Angular 20 : composants autonomes (standalone), signaux, détection de changements OnPush,
thème clair/sombre, animations au défilement, logos des technologies intégrés (aucune bibliothèque d'icônes externe).

## Lancer le projet

Prérequis : Node.js 20.19 ou plus récent (ou 22.12+), et npm.

```bash
npm install
npm start          # http://localhost:4200
```

## Mettre à jour le contenu

Tout le contenu est dans **`src/app/data/portfolio.data.ts`** : profil, projets, compétences, parcours,
formation et certifications. Modifiez ce fichier : le site se met à jour tout seul.

- **Photo** : copiez votre image dans le dossier `public/` (par exemple `public/photo.jpg`), puis dans
  `portfolio.data.ts` écrivez `photo: 'photo.jpg'`.
- **Nouvelle technologie** : ajoutez une ligne dans `src/app/data/tech-icons.ts` (logo de marque ou icône générique).
- **Couleurs et typographie** : variables CSS au début de `src/styles.scss`.

## Générer le site pour la mise en ligne

```bash
npm run build
```

Le site est créé dans `dist/portfolio-angular/browser/`. Copiez ce dossier sur n'importe quel hébergement statique.

**GitHub Pages** (le site sera à l'adresse `https://votre-nom.github.io/nom-du-depot/`) :

```bash
npx ng build --base-href /nom-du-depot/
```

puis publiez le contenu de `dist/portfolio-angular/browser/` (par exemple avec `npx angular-cli-ghpages --dir=dist/portfolio-angular/browser`).

## Structure

```
src/
  index.html                 polices, sprite d'icônes (logos + icônes d'interface)
  styles.scss                styles globaux
  app/
    app.ts / app.html        page principale
    data/                    contenu (portfolio.data.ts) et correspondance technologie → logo
    core/                    services : thème, défilement, messages de confirmation
    shared/                  icône, pastille de technologie, directive d'apparition au défilement
    sections/                en-tête, accueil, projets, compétences, parcours, formation, certifications, contact
```
