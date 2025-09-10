# Base
FROM node:20-bookworm-slim AS base
WORKDIR /app
RUN apt-get update && apt-get install -y openssl netcat-openbsd ca-certificates && rm -rf /var/lib/apt/lists/*

# Dev
FROM base AS dev
COPY package*.json ./
RUN npm install --ignore-scripts
COPY . .
RUN chmod +x docker-entrypoint.sh
CMD ["npm","run","dev"]
ENTRYPOINT ["./docker-entrypoint.sh"]