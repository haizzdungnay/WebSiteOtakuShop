# ---------- Base (dependencies) ----------
FROM node:20-slim AS base
WORKDIR /app
ENV PNPM_HOME="/pnpm" PATH="$PNPM_HOME:$PATH"
RUN corepack enable && apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# ---------- Dev image ----------
FROM base AS dev
COPY package*.json ./
RUN npm install
COPY . .
# Nếu dùng TypeScript: build runtime sẽ ở ts-node hoặc nodemon
# Gợi ý: đặt script "dev": "nodemon --watch src --exec ts-node src/app.ts"
CMD ["npm","run","dev"]

# ---------- Build (prod) ----------
FROM base AS build
COPY package*.json ./
RUN npm ci
COPY . .
# Nếu dùng TypeScript:
# RUN npm run build
# Prisma: generate client
RUN npx prisma generate

# ---------- Runtime (prod) ----------
FROM node:20-slim AS prod
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/package*.json ./
RUN npm ci --omit=dev
COPY --from=build /app ./
# Nếu đã build TS sang JS: COPY ./dist ./dist
# HEALTHCHECK để compose có thể chờ app sẵn sàng
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:'+ (process.env.PORT||3000) , r=>{if(r.statusCode<500)process.exit(0); else process.exit(1)}).on('error',()=>process.exit(1))"
CMD ["node","src/app.js"]  # hoặc "node","dist/app.js" nếu đã build TS
