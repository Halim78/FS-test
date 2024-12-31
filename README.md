# Mon Application Fullstack - Uploader et Traiter des Fichiers CSV

Cette application fullstack permet aux utilisateurs de télécharger un fichier CSV via le frontend, qui sera ensuite envoyé au backend pour être traité. 
Le backend parse le fichier CSV, effectue les opérations nécessaires, et renvoie le fichier traité sous forme d'un fichier ZIP.

## Architecture du projet

Le projet est organisé comme suit :


### Client (Frontend)

Le frontend est construit avec **React** et **TypeScript**. Il permet à l'utilisateur de sélectionner un fichier CSV, de l'envoyer au serveur via une requête HTTP POST, et de télécharger un fichier ZIP contenant les données traitées.

- Le **frontend** contient un formulaire de téléchargement de fichier.
- Une fois le fichier téléchargé, il est envoyé via une requête HTTP `POST` au serveur pour être traité.

### Server (Backend)

Le backend est un serveur **Express** en **Node.js**. Lorsqu'un fichier CSV est reçu, le backend le parse, effectue des transformations nécessaires, puis génère un fichier ZIP contenant les données traitées. Ce fichier ZIP est renvoyé au client pour téléchargement.

## Prérequis

Avant de commencer, vous devez avoir installé sur votre machine les outils suivants :

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/fr/)

## Installation

1. Clonez ce dépôt sur votre machine locale.

   ```bash
   git clone https://github.com/your-username/mon-repo.git
   cd mon-repo

2. lancer le Front
    ```bash
   cd client
   pnpm install
   pnpm run dev

3. lancer le Back
   ```bash
   cd ../server
   npm install
   npm start
