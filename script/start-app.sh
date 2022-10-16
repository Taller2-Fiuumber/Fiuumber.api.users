#! /bin/bash

npx prisma generate --schema=src/infraestructure/prisma/schema.prisma

npm run build

npm run start
