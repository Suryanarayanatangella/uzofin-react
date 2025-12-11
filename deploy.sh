#!/bin/bash

# GitHub Pages Deployment Script for React App
# Usage: ./deploy.sh

echo "🚀 Starting deployment to GitHub Pages..."

# Check if we're in the react-app directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the react-app directory."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build successful!"

# Deploy to GitHub Pages
echo "📤 Deploying to GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your site will be available at: https://yourusername.github.io/html-task/"
    echo "⏳ It may take a few minutes for changes to appear."
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi
