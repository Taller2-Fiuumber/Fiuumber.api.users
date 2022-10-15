# syntax=docker/dockerfile:1

FROM node:18-alpine3.15 as builder

RUN mkdir /app
WORKDIR /app
COPY . /app

CMD ["sh ./scripts/start-app.sh "]
