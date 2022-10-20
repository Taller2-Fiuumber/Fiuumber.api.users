# 22C2-Fiuumber

## Developer commands:

Get database and web conatiner running

``` bash
➜  Fiuumber.api.users: docker-compose up -d
```

Look for fiuumberapiusers_web conainter ID

``` bash
➜  Fiuumber.api.users: docker ps
CONTAINER ID   IMAGE                  COMMAND                  CREATED          STATUS             PORTS                      NAMES
edc3fe204ecf   fiuumberapiusers_web   "docker-entrypoint.s…"   40 minutes ago   Up 39 minutes      0.0.0.0:8081->8081/tcp     fiuumberapiusers_web_1
5a5f30041e85   postgres:latest        "docker-entrypoint.s…"   46 minutes ago   Up 44 minutes      0.0.0.0:5432->5432/tcp     fiuumberapiusers_database_1
```

Run shell in container and happy coding!


``` bash
➜  Fiuumber.api.users : docker exec -it edc3fe204ecf sh


/app # npm run build

> back-template@1.0.0 build
> npx tsc

/app # npm run start

> back-template@1.0.0 start
> node dist/index.js

⚡️[server]: Server is running at http://localhost:8081

(happy coding...)

/app # exit

```
