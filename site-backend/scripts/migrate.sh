#!/bin/bash

DB_HOST="mariadb"
DB_PORT=3306
MAX_RETRIES=30
RETRY_INTERVAL=3

check_db() {
    echo "Checking if MariaDB is ready..."
    nc -z "$DB_HOST" "$DB_PORT"
    return $?
}

for ((i = 1; i <= MAX_RETRIES; i++)); do
    if check_db; then
    echo "MariaDB is available. Running migrations..."
    npx sequelize-cli db:migrate
    
    echo "Starting the backend application..."
    node /app/app.js
    exit 0

    fi
    echo "Attempt $i: MariaDB is not availble yet. Retrying in $RETRY_INTERVAL seconds..."
    sleep $RETRY_INTERVAL
done

echo "Max retries reached. Unable to connect to MariaDB."
exit 1