#!/bin/bash

# Build the project
npm run build

# Create a temporary branch for deployment
git checkout -b temp-deploy

# Copy built files to root
cp -r dist/* .

# Add all files
git add .

# Commit deployment
git commit -m "Deploy to main branch"

# Push to main branch
git push origin temp-deploy:main

# Clean up
git checkout main
git branch -D temp-deploy

echo "Deployment complete!" 