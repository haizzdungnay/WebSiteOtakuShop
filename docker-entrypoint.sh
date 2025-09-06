#!/usr/bin/env bash
set -e

echo "Waiting for MySQL at $DB_HOST:$DB_PORT ..."
until nc -z $DB_HOST $DB_PORT; do
  sleep 1
done
echo "MySQL is up!"

npx prisma generate || true

if [ "$NODE_ENV" = "production" ]; then
  npx prisma migrate deploy
else
  npx prisma db push
fi

if [ "${SEED:-0}" = "1" ]; then
  echo "Seeding database..."
  npm run prisma:seed || true
fi

exec "$@"
