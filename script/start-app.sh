#! /bin/bash

npm install

npx prisma generate --schema=src/infraestructure/prisma/schema.prisma

npx prisma migrate deploy --schema=src/infraestructure/prisma/schema.prisma

npm build
