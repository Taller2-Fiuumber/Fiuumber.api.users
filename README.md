# 22C2-Fiuumber

# Heroku app

[Link](https://fiuumber-api-users.herokuapp.com/docs/ "Link a heroku")

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
➜  Fiuumber.api.users : docker exec -it fiuumberapiusers_web sh

/app # npm run dev

```
