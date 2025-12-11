# 🔧 Troubleshoot 404 Error - Quick Guide

## ⚡ Quick Checks (Do These First!)

### 1. Are you using the correct URL?
**Correct URL (with trailing slash):**
```
https://suryanarayanatangella.github.io/uzofin-react/
```

**Try these variations:**
- https://suryanarayanatangella.github.io/uzofin-react/
- https://suryanarayanatangella.github.io/uzofin-react/index.html

### 2. Did you wait 2-3 minutes?
First deployment takes time. Wait and refresh.

### 3. Clear browser cache
Press: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

### 4. Try incognito/private window
This bypasses cache completely.

---

## 🔍 Check GitHub Pages Settings

### Step 1: Verify Pages is Enabled
1. Go to: https://github.com/Suryanarayanatangella/uzofin-react/settings/pages
2. Check what's shown under "Build and deployment"

### Step 2: Choose Deployment Method

#### Option A: GitHub Actions (Recommended)
**Settings should show:**
- Source: **GitHub Actions**

**Then check:**
1. Go to: https://github.com/Suryanarayanatangella/uzofin-react/actions
2. Look for "Deploy to GitHub Pages" workflow
3. Check if it has a green checkmark ✅
4. If red ❌, click it to see errors

**If no workflows appear:**
- The `.github/workflows/deploy.yml` file might not be in the main branch
- Push the workflow file:
  ```bash
  git add .github/workflows/deploy.yml
  git commit -m "Add GitHub Actions workflow"
  git push origin main
  ```

#### Option B: gh-pages Branch
**Settings should show:**
- Source: **Deploy from a branch**
- Branch: **gh-pages** / (root)

**Then deploy:**
```bash
cd react-app
npm run deploy
```

---

## 🚨 Common Issues & Fixes

### Issue 1: "There isn't a GitHub Pages site here"

**Cause:** Pages not enabled or wrong source

**Fix:**
1. Go to Settings → Pages
2. Under "Source", select:
   - **GitHub Actions** (recommended)
   - OR **gh-pages** branch
3. Save and wait 2 minutes

### Issue 2: Workflow Failed (Red X)

**Check the error:**
1. Go to: https://github.com/Suryanarayanatangella/uzofin-react/actions
2. Click the failed workflow
3. Click "build" or "deploy" job
4. Read the error message

**Common errors:**

**Error: "npm ci" failed**
```bash
# Fix: Regenerate package-lock.json
cd react-app
rm package-lock.json
npm install
git add package-lock.json
git commit -m "Update package-lock.json"
git push origin main
```

**Error: Permission denied**
- Go to Settings → Actions → General
- Scroll to "Workflow permissions"
- Select "Read and write permissions"
- Save

### Issue 3: 404 on Correct URL

**Cause:** Files not deployed correctly

**Fix: Redeploy manually**
```bash
cd react-app

# Clean and rebuild
rm -rf dist
npm run build

# Deploy
npm run deploy
```

**Then enable gh-pages:**
1. Settings → Pages
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / (root)
4. Save

### Issue 4: Blank Page (Not 404)

**Cause:** Wrong base path

**Check vite.config.js:**
```javascript
base: '/uzofin-react/', // Must match repo name EXACTLY
```

**If repo name is different, update it:**
```javascript
base: '/your-actual-repo-name/',
```

Then rebuild and redeploy:
```bash
npm run build
npm run deploy
```

---

## 🔨 Nuclear Option: Start Fresh

If nothing works, try this:

### Method 1: Force Redeploy

```bash
cd react-app

# Clean everything
rm -rf dist node_modules package-lock.json

# Reinstall
npm install

# Build
npm run build

# Force deploy
npx gh-pages -d dist --force
```

### Method 2: Switch to GitHub Actions

```bash
# Delete gh-pages branch (if exists)
git push origin --delete gh-pages

# Commit and push
git add .
git commit -m "Switch to GitHub Actions" --allow-empty
git push origin main
```

Then:
1. Settings → Pages
2. Source: **GitHub Actions**
3. Wait 2-3 minutes

---

## 📊 Diagnostic Commands

Run these to check your setup:

```bash
# Check current directory
pwd

# Check if in react-app folder
ls package.json

# Check vite config
cat vite.config.js | grep base

# Check if workflow exists
ls .github/workflows/deploy.yml

# Build locally
npm run build

# Preview locally
npm run preview
# Visit: http://localhost:4173/uzofin-react/
```

---

## 🆘 Still Not Working?

### Collect This Information:

1. **What URL are you trying?**
   - Copy-paste the exact URL

2. **What do you see?**
   - GitHub's 404 page?
   - Blank page?
   - Something else?

3. **GitHub Pages Settings:**
   - What's selected under "Source"?
   - Screenshot if possible

4. **Actions Status:**
   - Any workflows in Actions tab?
   - Green checkmark or red X?
   - Link to workflow run

5. **Browser Console:**
   - Press F12
   - Go to Console tab
   - Any errors (red text)?
   - Screenshot if possible

### Alternative: Use Vercel (5 minutes)

If GitHub Pages is problematic, try Vercel:

1. Go to: https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import `uzofin-react` repository
5. Framework: **Vite**
6. Root Directory: **react-app**
7. Click "Deploy"
8. Done! Get instant URL

---

## ✅ Success Checklist

Once working, verify:
- [ ] URL loads: https://suryanarayanatangella.github.io/uzofin-react/
- [ ] All images display
- [ ] Navigation works
- [ ] Carousels function
- [ ] No console errors (F12)

---

## 📞 Need More Help?

Run the diagnostic script:
```bash
cd react-app
diagnose.bat
```

Or read the detailed guide:
- `FIX_404_ERROR.md` - Complete troubleshooting guide
