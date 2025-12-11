# UzoFin React App

Modern React application for UzoFin - AI-Powered Banking & Payment Solutions.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```
Visit: http://localhost:5174/

### Production Build
```bash
npm run build
npm run preview
```

## 📦 Deployment

### Deploy to GitHub Pages

#### Option 1: Automatic (GitHub Actions) - Recommended
1. Push code to GitHub
2. Enable GitHub Pages in Settings → Pages
3. Select "GitHub Actions" as source
4. Done! Auto-deploys on every push

#### Option 2: Manual Deployment
```bash
# Windows
deploy.bat

# Linux/Mac
chmod +x deploy.sh
./deploy.sh

# Or directly
npm run deploy
```

**Important**: Update `base` in `vite.config.js` with your repo name:
```javascript
base: '/your-repo-name/'
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 🛠️ Tech Stack

- ⚛️ React 19.2.0
- ⚡ Vite 7.2.4
- 🎨 Bootstrap 5.3.2
- 🦉 Owl Carousel
- 🎠 Swiper
- 📦 Custom Hooks

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, Breadcrumb
│   ├── sections/        # Page sections
│   └── ui/              # Reusable UI components
├── hooks/               # Custom React hooks
│   ├── useScriptLoader.js
│   └── useCarousel.js
├── App.jsx              # Main app component
├── main.jsx             # Entry point
└── index.css            # Global styles
```

## 🎯 Features

- ✅ Responsive design
- ✅ SEO optimized
- ✅ Accessibility compliant (WCAG 2.1)
- ✅ Performance optimized
- ✅ Component-based architecture
- ✅ Custom hooks for reusability
- ✅ Bootstrap integration
- ✅ Carousel support (Owl & Swiper)
- ✅ GitHub Pages ready

## 📚 Documentation

- [OPTIMIZATION.md](./OPTIMIZATION.md) - Code optimization details
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete deployment guide

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint

## 🌐 Live Demo

After deployment: `https://yourusername.github.io/html-task/`

Replace `yourusername` with your GitHub username and `html-task` with your repository name.

## 📝 License

Copyright © 2025 UzoFin. All rights reserved.
