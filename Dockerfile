# Étape 1 : Construction de l'application avec Node
FROM node:18-alpine AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json (ou yarn.lock)
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application avec Vite
RUN npm run build

# Étape 2 : Serveur web avec Apache
FROM httpd:2.4-alpine

# Copier les fichiers de configuration Apache si nécessaire
# COPY ./apache-config.conf /usr/local/apache2/conf/httpd.conf

COPY --from=builder /app/dist /usr/local/apache2/htdocs
EXPOSE 80
