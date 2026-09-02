# =========================================================
# Stage 1 — build da aplicação com Node
# =========================================================
FROM node:20-alpine AS builder

WORKDIR /app

# Copia apenas os manifests primeiro (cache de camadas)
COPY package.json package-lock.json* ./

# Instala dependências (npm ci exige lockfile; usa npm install como fallback)
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copia o resto do código e gera o build
COPY . .
RUN npm run build

# =========================================================
# Stage 2 — serve o build com nginx (imagem final pequena)
# =========================================================
FROM nginx:1.27-alpine AS runner

# Remove a config default do nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia nossa config customizada
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia o build do stage anterior para a pasta padrão do nginx
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

# Healthcheck simples
HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
