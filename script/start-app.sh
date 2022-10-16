#! /bin/bash

npx prisma db push --schema=src/infraestructure/prisma/schema.prisma

npm run build

npm run start
