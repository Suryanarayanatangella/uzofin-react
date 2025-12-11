# 🚀 GitHub Pages Setup Guide

## Step-by-Step Instructions

### 1️⃣ Update Configuration

**Edit `vite.config.js`** - Change the base path to match your repository name:

```javascript
base: '/your-actual-repo-name/', // ← CHANGE THIS!
```

Example:
- If your repo is `uzofin-website`, use: `base: '/uzofin-website/'`
- If your repo is `my-react-app`, use: `base: '/my-react-app/'`

### 2️⃣ Initialize Git (if not already done)

```bash
# In the react-app directory
git init
git add .
git commit -m "Initial commit: React app ready for deployment"
```

### 3️⃣ Create GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository (e.g., `html-task`)
3. **Don't** initialize with README, .gitignore, or license
4. Copy the repository URL

### 4️⃣ Push to GitHub

```bash
# Add remote origin
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push code
git branch -M main
git push -u origin main
```

### 5️⃣ Enable GitHub Pages

#### Method A: GitHub Actions (Recommended)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select **GitHub Actions**
4. That's it! The workflow will run automatically

#### Method B: gh-pages Branch

1. Run deployment command:
   ```bash
   npm run deploy
   ```

2. Go to repository **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: gh-pages → / (root)
   - Click **Save**

### 6️⃣ Wait for Deployment

- Check the **Actions** tab to see deployment progress
- First deployment takes 2-3 minutes
- Subsequent deployments are faster

### 7️⃣ Access Your Site

Your site will be live at:
```
https://yourusername.github.io/your-repo-name/
```

Example:
```
https://johndoe.github.io/html-task/
```

## 🔄 Update Your Site

### Automatic Updates (GitHub Actions)
```bash
# Make changes to your code
git add .
git commit -m "Update content"
git push origin main
# GitHub Actions will automatically deploy
```

### Manual Updates
```bash
npm run deploy
```

## ✅ Verification Checklist

After deployment, verify:

- [ ] Site loads without errors
- [ ] All images display correctly
- [ ] Navigation works
- [ ] Carousels function properly
- [ ] Responsive design works on mobile
- [ ] No console errors
- [ ] All links work
- [ ] Forms submit correctly (if any)

## 🐛 Common Issues

### Issue: 404 Error
**Cause**: Wrong base path in `vite.config.js`
**Fix**: Update base path to match your repo name exactly

### Issue: Blank Page
**Cause**: JavaScript errors or wrong base path
**Fix**: 
1. Check browser console for errors
2. Verify base path in `vite.config.js`
3. Clear browser cache

### Issue: Images Not Loading
**Cause**: Incorrect image paths
**Fix**: Ensure all image paths start with `/` (e.g., `/images/logo.svg`)

### Issue: GitHub Actions Failing
**Cause**: Various reasons
**Fix**: 
1. Check Actions tab for error logs
2. Verify `package.json` and `package-lock.json` exist
3. Ensure Node version compatibility

## 📞 Need Help?

1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed guide
2. Review GitHub Actions logs in the Actions tab
3. Check browser console for JavaScript errors
4. Verify all configuration files are correct

## 🎉 Success!

Once deployed, share your site:
- Add the URL to your repository description
- Share on social media
- Add to your portfolio
- Include in your README

---

**Your site URL**: `https://yourusername.github.io/your-repo-name/`

Remember to replace `yourusername` and `your-repo-name` with your actual values!
