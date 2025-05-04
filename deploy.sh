#!/bin/bash

# Exit on error
set -e

# Build the project
npm run build

# Navigate to the dist directory
cd dist

# Initialize git repository
git init

# Add all files to git
git add -A

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Create and switch to gh-pages branch
git branch -M gh-pages

# Add the remote repository (change this to your actual repo URL)
git remote add origin https://github.com/Ashutoshp-dev/samajhai.git gh-pages

# Force push the changes to the gh-pages branch
git push -f origin gh-pages

# Go back to the root folder
cd ..