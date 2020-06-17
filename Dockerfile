FROM node:12.18.0-alpine AS builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . ./

RUN npm run build && $(npm bin)/grunt installFrontEnd


FROM nginx:1.18.0-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
