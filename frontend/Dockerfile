FROM node:22 as build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build -- --configuration production

FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Copiar configuração personalizada do nginx
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

# Remover arquivos padrão do nginx
RUN rm -rf ./*

# Copiar arquivos compilados da aplicação
COPY --from=build /app/dist/*/browser/ .

# Expor porta 80
EXPOSE 80

# Iniciar o nginx
CMD ["nginx", "-g", "daemon off;"]
