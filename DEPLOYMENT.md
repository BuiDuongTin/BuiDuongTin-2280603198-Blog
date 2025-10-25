# 🚀 Deployment Guide

## Overview
This personal programming blog is built with Next.js and configured for static site generation (SSG), making it perfect for deployment on GitHub Pages or Netlify.

## Quick Start

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production
```bash
# Create static export
npm run build

# Files will be generated in the 'out' directory
```

## Deployment Options

### Option 1: GitHub Pages (Recommended)

#### Automatic Deployment (via GitHub Actions)
1. Push your code to the `main` branch
2. Go to your repository Settings → Pages
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. The included workflow (`.github/workflows/deploy.yml`) will automatically:
   - Build the site
   - Deploy to GitHub Pages
5. Your site will be available at: `https://[username].github.io/[repository-name]/`

#### Manual Deployment
```bash
# Build the project
npm run build

# Deploy the 'out' directory to gh-pages branch
cd out
git init
git add -A
git commit -m 'Deploy to GitHub Pages'
git push -f git@github.com:[username]/[repository-name].git main:gh-pages

# Then enable GitHub Pages in repository settings
# Source: gh-pages branch, / (root) folder
```

### Option 2: Netlify

#### Deploy from Git
1. Log in to [Netlify](https://www.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
5. Click "Deploy site"
6. Your site will be deployed with a Netlify URL (e.g., `https://[site-name].netlify.app`)

#### Manual Deployment
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy --prod --dir=out
```

### Option 3: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## Site Structure

### Pages Generated
- `/` - Home page (personal introduction)
- `/blog` - Blog listing page (all 9 posts)
- `/blog/java` - Java category page (5 posts)
- `/blog/javascript` - JavaScript category page (4 posts)
- `/blog/[post-id]` - Individual blog post pages (9 posts)

### Blog Posts
1. Java OOP Basics
2. Java Collections Framework
3. Java Socket Programming
4. Java Multithreading
5. Java HTTP Client
6. JavaScript DOM Manipulation
7. JavaScript Async/Await
8. JavaScript Fetch API
9. JavaScript Event Loop

## Configuration Files

### `next.config.js`
- Configured for static export with `output: 'export'`
- Images set to unoptimized for static hosting

### `tailwind.config.ts`
- Custom color palette with primary blue/cyan gradient
- Configured to scan all app and component files

### `.github/workflows/deploy.yml`
- Automated GitHub Pages deployment
- Triggers on push to main branch
- Uses official GitHub Pages actions

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Development Server Issues
```bash
# Kill any running processes
killall node
npm run dev
```

### Deployment Not Working
1. Ensure GitHub Pages is enabled in repository settings
2. Check that the workflow has proper permissions
3. Verify the `out` directory is being generated correctly
4. Check GitHub Actions tab for build logs

## Customization

### Updating Blog Posts
Edit `lib/blog-data.ts` to add or modify blog posts.

### Changing Styles
- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Inline with Tailwind classes

### Adding New Pages
Create new files in the `app` directory following Next.js App Router conventions.

## Support
For issues or questions:
- 📧 Email: tinbui.koks@gmail.com
- 💻 GitHub: https://github.com/BuiDuongTin

---
© 2025 Bùi Dương Tín - Blog Lập Trình Mạng
