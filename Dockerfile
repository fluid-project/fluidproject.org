FROM node:12.18.0-alpine AS builder

WORKDIR /app

RUN apk add --no-cache python make git g++

COPY package.json Gruntfile.js ./

RUN npm install && $(npm bin)/grunt

COPY . ./

# The echo command is necessary to work around a bug in docpad 6.79.4
RUN echo | $(npm bin)/docpad generate --env static --silent 


FROM nginx:1.18.0-alpine

COPY --from=builder /app/out /usr/share/nginx/html
