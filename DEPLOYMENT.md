# GitHub Pages Deployment Guide

## 🚀 Quick Deploy

### Method 1: Using GitHub Actions (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Add React app"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: **GitHub Actions**
   - The workflow will automatically deploy on every push

3. **Access your site**
   - Your site will be available at: `https://yourusername.github.io/html-task/`
   - Replace `yourusername` with your GitHub username
   - Replace `html-task` with your repository name

### Method 2: Manual Deploy with gh-pages

1. **Install dependencies**
   ```bash
   cd react-app
   npm install
   ```

2. **Update base path in vite.config.js**
   ```javascript
   base: '/your-repo-name/', // Replace with your actual repo name
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to repository **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** → **/ (root)**
   - Click **Save**

5. **Access your site**
   - Wait 1-2 minutes for deployment
   - Visit: `https://yourusername.github.io/your-repo-name/`

## ⚙️ Configuration

### Update Repository Name

In `react-app/vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-actual-repo-name/', // ← Change this
  // ...
})
```

### Custom Domain (Optional)

1. Create `react-app/public/CNAME` file:
   ```
   yourdomain.com
   ```

2. In your domain registrar, add DNS records:
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153

   Type: CNAME
   Host: www
   Value: yourusername.github.io
   ```

3. In GitHub Settings → Pages:
   - Enter your custom domain
   - Enable "Enforce HTTPS"

## 📋 Pre-Deployment Checklist

- [ ] Update `base` path in `vite.config.js`
- [ ] Test build locally: `npm run build && npm run preview`
- [ ] Check all images load correctly
- [ ] Verify all links work
- [ ] Test responsive design
- [ ] Check browser console for errors
- [ ] Verify SEO meta tags
- [ ] Test accessibility features

## 🔧 Build Configuration

### Current Settings (vite.config.js)
```javascript
{
  base: '/html-task/',           // Base URL path
  build: {
    outDir: 'dist',              // Output directory
    assetsDir: 'assets',         // Assets directory
    sourcemap: false,            // No source maps in production
    minify: 'terser',            // Minification
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']  // Separate vendor bundle
        }
      }
    }
  }
}
```

## 🐛 Troubleshooting

### Issue: 404 on page refresh
**Solution**: GitHub Pages doesn't support client-side routing by default. For SPA:
1. Add `404.html` that redirects to `index.html`
2. Or use hash routing instead of browser routing

### Issue: Assets not loading
**Solution**: 
- Check `base` path in `vite.config.js` matches your repo name
- Ensure all asset paths start with `/` (e.g., `/images/logo.svg`)

### Issue: Blank page after deployment
**Solution**:
- Open browser console to check errors
- Verify `base` path is correct
- Check if build completed successfully
- Clear browser cache

### Issue: GitHub Actions failing
**Solution**:
- Check workflow file syntax
- Verify Node version compatibility
- Check if `package-lock.json` exists
- Review Actions logs in GitHub

## 📊 Deployment Status

### GitHub Actions Workflow
- **Trigger**: Push to main branch or manual dispatch
- **Build Time**: ~2-3 minutes
- **Node Version**: 20.x
- **Cache**: npm dependencies cached

### Build Output
```
dist/
├── assets/
│   ├── index-[hash].js      # Main bundle
│   ├── vendor-[hash].js     # React & React-DOM
│   └── index-[hash].css     # Styles
├── css/                     # Bootstrap & custom CSS
├── js/                      # jQuery, Owl, Swiper
├── images/                  # All images
└── index.html              # Entry point
```

## 🔐 Security

### Permissions Required
- **contents: read** - Read repository contents
- **pages: write** - Deploy to GitHub Pages
- **id-token: write** - OIDC token for deployment

### Best Practices
- Don't commit `.env` files
- Use environment variables for sensitive data
- Enable "Enforce HTTPS" in GitHub Pages settings
- Keep dependencies updated

## 📈 Performance

### Optimization Applied
- ✅ Code splitting (vendor bundle separate)
- ✅ Minification with Terser
- ✅ Tree shaking
- ✅ Asset optimization
- ✅ Lazy loading images
- ✅ CSS optimization

### Expected Metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Bundle Size**: ~150-200KB (gzipped)
- **Lighthouse Score**: 90+

## 🔄 Update Deployment

### Update Content
```bash
# Make changes to your code
git add .
git commit -m "Update content"
git push origin main
# GitHub Actions will auto-deploy
```

### Manual Redeploy
```bash
cd react-app
npm run deploy
```

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Custom Domain Setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## 🎯 Next Steps

1. Push code to GitHub
2. Enable GitHub Pages in repository settings
3. Wait for deployment (check Actions tab)
4. Visit your live site!
5. Share the URL: `https://yourusername.github.io/html-task/`

---

**Need Help?** Check the [GitHub Actions logs](https://github.com/yourusername/html-task/actions) for deployment status and errors.
