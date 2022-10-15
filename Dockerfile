# syntax=docker/dockerfile:1

FROM node:18-alpine3.15 as builder

ARG database_url
ENV DATABASE_URL=$database_url

RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm install

RUN npx prisma migrate deploy --schema=src/infraestructure/prisma/schema.prisma

RUN npm run build


CMD ["npm", "start"]
