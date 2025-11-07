# Site Vitrine Next.js

Site vitrine avec diaporama d'images, créé avec Next.js (App Router) et Tailwind CSS.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Structure

- `/app` - Pages et layout
- `/components` - Composants React
- `/lib` - Utilitaires côté serveur
- `/public/images` - Images du diaporama
- `/public/fonts` - Polices custom (AddingtonCF en format .ttf)

## Notes

- Placez vos images dans `/public/images` (formats: .jpg, .jpeg, .png, .webp)
- Les polices custom doivent être placées dans `/public/fonts/` (format .ttf)
- L'image OpenGraph doit être placée dans `/public/og.jpg`

## Fonctionnalités

- **Diaporama automatique** : avance toutes les 5 secondes
- **Navigation manuelle** : clic gauche/droite pour naviguer
- **Ordre aléatoire** : les images sont mélangées à chaque chargement
- **Responsive** : adapté mobile et desktop
- **Desktop no-scroll** : chaque page fait exactement la hauteur d'écran sur desktop

