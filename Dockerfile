# Étape 1 : Dépendances
FROM node:23-alpine AS deps
RUN apk add --no-cache libc6-compat git

# Setup pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@9.15.1 --activate

WORKDIR /app

# Copier uniquement les fichiers de dépendances
COPY package.json pnpm-lock.yaml* ./

# Installer toutes les dépendances (prod + dev)
RUN pnpm install --frozen-lockfile

# Étape 2 : Build
FROM node:23-alpine AS builder
WORKDIR /app

# Copier node_modules depuis l’étape deps
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json

# Copier le reste du code
COPY . .

# Builder l’app Next.js
RUN pnpm build

# Étape 3 : Runner
FROM node:23-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@9.15.1 --activate

# Installer uniquement les deps de prod
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile --prod

# Copier les fichiers buildés
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["pnpm", "start"]
