# Frontend - Uploader et Traiter des Fichiers CSV

Ce dossier contient le code frontend de l'application fullstack, construit avec **React** et **TypeScript**. Il permet à l'utilisateur de télécharger un fichier CSV, qui sera ensuite envoyé au backend pour traitement. Le backend génère un fichier ZIP contenant les données traitées, qui est renvoyé au client pour téléchargement.

## Fonctionnalités

- Formulaire de téléchargement de fichier CSV.
- Envoi du fichier CSV au backend via une requête HTTP POST.
- Réception du fichier ZIP traité du backend pour le téléchargement.

## Prérequis

Avant de commencer, vous devez avoir installé les outils suivants sur votre machine :

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/fr/)

## Installation

1. Allez dans le dossier `client` de votre projet.

   ```bash
   cd client
   pnpm install
   pnpm run dev
   ```
