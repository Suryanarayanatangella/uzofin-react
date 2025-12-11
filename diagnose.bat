@echo off
echo ========================================
echo GitHub Pages Diagnostic Tool
echo ========================================
echo.

echo Checking configuration...
echo.

echo [1] Checking vite.config.js base path...
findstr "base:" vite.config.js
echo.

echo [2] Checking if dist folder exists...
if exist "dist" (
    echo ✓ dist folder exists
    dir dist /b
) else (
    echo ✗ dist folder NOT found - Run: npm run build
)
echo.

echo [3] Checking if workflow file exists...
if exist ".github\workflows\deploy.yml" (
    echo ✓ GitHub Actions workflow exists
) else (
    echo ✗ Workflow file NOT found
)
echo.

echo [4] Checking package.json scripts...
findstr "deploy" package.json
echo.

echo [5] Repository Information...
echo Repository: https://github.com/Suryanarayanatangella/uzofin-react
echo Expected URL: https://suryanarayanatangella.github.io/uzofin-react/
echo.

echo ========================================
echo Next Steps:
echo ========================================
echo 1. Visit: https://github.com/Suryanarayanatangella/uzofin-react/settings/pages
echo 2. Check Source is set to "GitHub Actions"
echo 3. Visit: https://github.com/Suryanarayanatangella/uzofin-react/actions
echo 4. Verify latest workflow has green checkmark
echo 5. Wait 2-3 minutes after deployment
echo 6. Clear browser cache (Ctrl+Shift+R)
echo 7. Try: https://suryanarayanatangella.github.io/uzofin-react/
echo.

echo ========================================
echo Quick Fixes:
echo ========================================
echo A. Rebuild: npm run build
echo B. Redeploy: npm run deploy
echo C. Check Actions: https://github.com/Suryanarayanatangella/uzofin-react/actions
echo.

pause
