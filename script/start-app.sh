#! /bin/bash

npx prisma generate --schema=src/infraestructure/prisma/schema.prisma

npx prisma migrate deploy --schema=src/infraestructure/prisma/schema.prisma

npm run start
