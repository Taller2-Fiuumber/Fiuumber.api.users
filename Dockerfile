# syntax=docker/dockerfile:1

FROM node:18 as builder

RUN mkdir /app
WORKDIR /app
COPY . /app

RUN chown -R appuser:appuser /app
USER appuser

CMD ["/scripts/start-app.sh"]
