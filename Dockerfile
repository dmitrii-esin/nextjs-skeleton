# Stage 1: Building the code
FROM node:lts-alpine@sha256:5edad160011cc8cfb69d990e9ae1cb2681c0f280178241d58eba05b5bfc34047 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ENV NODE_ENV production
RUN npm run build
RUN npm ci --only=production
# Stage 2: And then copy over node_modules, etc from that stage to the smaller base image
FROM node:lts-slim@sha256:f07d995a6b0bb73e3bd8fa42ba328dd0481f4f0a4c0c39008c05d91602bba6f1 as production
USER node
ARG PORT
WORKDIR /app
# COPY package.json next.config.js .env* ./
COPY --chown=node:node --from=builder /app/public ./public
COPY --chown=node:node --from=builder /app/.next ./.next
COPY --chown=node:node --from=builder /app/node_modules ./node_modules
EXPOSE $PORT
CMD ["node_modules/.bin/next", "start"]
