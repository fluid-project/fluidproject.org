FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

RUN npm run build


FROM nginx:1.18.0-alpine

COPY --from=builder /app/_site /usr/share/nginx/html
