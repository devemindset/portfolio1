# Use the official Node.js 23-alpine base image
FROM node:23-alpine AS base

# Install system dependencies
RUN apk add --no-cache libc6-compat git

# Setup pnpm environment
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable && corepack prepare pnpm@9.15.1 --activate

WORKDIR /app

# Copy dependency files
COPY package.json pnpm-lock.yaml ./

# Install production dependencies only
RUN pnpm install --frozen-lockfile --production

# Build stage
FROM base AS builder
WORKDIR /app

# Copy all source files
COPY . .

# Install all dependencies (production + dev)
RUN pnpm install --frozen-lockfile

# Build the Next.js application
RUN pnpm build

# Production runner
FROM base AS runner

# Set environment variables
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Copy built application files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Expose port and run the application
EXPOSE 3000
CMD ["pnpm", "start"]