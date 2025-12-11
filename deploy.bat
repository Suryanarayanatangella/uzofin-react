@echo off
REM GitHub Pages Deployment Script for React App (Windows)
REM Usage: deploy.bat

echo Starting deployment to GitHub Pages...

REM Check if we're in the react-app directory
if not exist "package.json" (
    echo Error: package.json not found. Please run this script from the react-app directory.
    exit /b 1
)

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

REM Build the project
echo Building the project...
call npm run build

if errorlevel 1 (
    echo Build failed. Please fix the errors and try again.
    exit /b 1
)

echo Build successful!

REM Deploy to GitHub Pages
echo Deploying to GitHub Pages...
call npm run deploy

if errorlevel 0 (
    echo Deployment successful!
    echo Your site will be available at: https://yourusername.github.io/html-task/
    echo It may take a few minutes for changes to appear.
) else (
    echo Deployment failed. Please check the error messages above.
    exit /b 1
)
