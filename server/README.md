### `server/README.md`

```markdown
# Backend - Traiter les Fichiers CSV

Ce dossier contient le code backend de l'application, construit avec **Express** et **Node.js**. Il reçoit un fichier CSV via une requête HTTP POST, le parse, effectue les transformations nécessaires, puis génère un fichier ZIP contenant les données traitées et le renvoie au frontend.

## Fonctionnalités

- Réception et parsing du fichier CSV envoyé par le frontend.
- Traitement des données et création d'un fichier ZIP contenant les données traitées.
- Envoi du fichier ZIP généré au frontend pour le téléchargement.

## Prérequis

Avant de commencer, vous devez avoir installé les outils suivants sur votre machine :

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/fr/)

## Installation

1. Allez dans le dossier `server` de votre projet.

   cd ../server
   pnpm install
   npm start
```
