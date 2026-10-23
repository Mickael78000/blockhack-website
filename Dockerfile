# syntax=docker/dockerfile:1

# ------------------------------------------------------------------------------
# Image de développement
# ------------------------------------------------------------------------------
FROM node:20-bookworm AS dev

WORKDIR /app

# Installation d'outils utiles pour le dev
RUN apt-get update && apt-get install -y --no-install-recommends \
    bash \
    git \
    curl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Activation de pnpm via corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copie des fichiers de dépendances
COPY package.json pnpm-lock.yaml ./

# Installation des dépendances (dev + prod)
RUN pnpm install --frozen-lockfile

# Copie du reste du code
COPY . .

# Variables d'environnement Next.js
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Exposition du port de dev Next.js
EXPOSE 3000

# Commande par défaut : lance Next.js en mode dev
CMD ["pnpm", "dev"]
