#!/bin/sh
set -e

echo "Deploying application ..."

    # Update codebase
    git fetch origin deploy
    git reset --hard origin/deploy
    cp -rf dist/* ~/www/blog

echo "Application deployed!"