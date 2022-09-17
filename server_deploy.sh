#!/bin/sh
set -e

echo "Deploying application ..."

    # Update codebase
    git fetch origin deploy
    git reset --hard origin/deploy
    sudo cp -rf dist/* /var/www/server.jonatan-teofilus.my.id/

echo "Application deployed!"