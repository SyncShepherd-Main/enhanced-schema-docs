# Deployment Guide

Complete guide to deploying the Enhanced Schema Plugin documentation website to various hosting platforms.

## Table of Contents

1. [GitHub Pages](#github-pages)
2. [Netlify](#netlify)
3. [Vercel](#vercel)
4. [Cloudflare Pages](#cloudflare-pages)
5. [Traditional Web Server](#traditional-web-server)
6. [Docker](#docker)
7. [AWS S3 + CloudFront](#aws-s3--cloudfront)

---

## GitHub Pages

**Already deployed at:** https://syncshepherd-main.github.io/enhanced-schema-docs/

### Manual Setup

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Copy to docs folder**
   ```bash
   cp -r dist/public docs
   ```

3. **Commit and push**
   ```bash
   git add docs
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

4. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` or `master`
   - Folder: `/docs`
   - Save

### Using GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install --legacy-peer-deps

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
```

---

## Netlify

### Option 1: Drag and Drop

1. Build locally: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag `dist/public` folder to Netlify

### Option 2: Connect Git Repository

1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git"
3. Connect to GitHub and select repository
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/public`
   - **Base directory:** (leave empty)
5. Click "Deploy site"

### Netlify Configuration File

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

---

## Vercel

### Option 1: CLI Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd dist/public
vercel
```

### Option 2: Git Integration

1. Go to [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `npm install --legacy-peer-deps`
4. Deploy

### Vercel Configuration File

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "installCommand": "npm install --legacy-peer-deps",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## Cloudflare Pages

### Using Git Integration

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub repository
3. Configure:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist/public`
   - **Root directory:** (leave empty)
4. Deploy

### Using Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Build
npm run build

# Deploy
wrangler pages deploy dist/public --project-name=enhanced-schema-docs
```

---

## Traditional Web Server

### Apache

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Upload files**
   - Upload contents of `dist/public/` to your web root (e.g., `/var/www/html/`)

3. **Configure .htaccess**

   Create `.htaccess` in web root:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /

     # Don't rewrite files or directories
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d

     # Rewrite everything else to index.html
     RewriteRule ^ index.html [L]
   </IfModule>

   # Security headers
   <IfModule mod_headers.c>
     Header set X-Content-Type-Options "nosniff"
     Header set X-Frame-Options "SAMEORIGIN"
     Header set X-XSS-Protection "1; mode=block"
   </IfModule>

   # Compression
   <IfModule mod_deflate.c>
     AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
   </IfModule>
   ```

### Nginx

1. **Build and upload**
   ```bash
   npm run build
   scp -r dist/public/* user@server:/var/www/html/
   ```

2. **Configure Nginx**

   Create `/etc/nginx/sites-available/enhanced-schema-docs`:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/html;
       index index.html;

       # Gzip compression
       gzip on;
       gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

       # Security headers
       add_header X-Frame-Options "SAMEORIGIN" always;
       add_header X-Content-Type-Options "nosniff" always;
       add_header X-XSS-Protection "1; mode=block" always;

       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }

       # Single page app routing
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

3. **Enable and restart**
   ```bash
   sudo ln -s /etc/nginx/sites-available/enhanced-schema-docs /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```

---

## Docker

### Dockerfile

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/public /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### nginx.conf for Docker

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Docker Compose

Create `docker-compose.yml`:

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:80"
    restart: unless-stopped
```

### Build and Run

```bash
# Build image
docker build -t enhanced-schema-docs .

# Run container
docker run -d -p 3000:80 enhanced-schema-docs

# Or use docker-compose
docker-compose up -d
```

---

## AWS S3 + CloudFront

### 1. Build the Site

```bash
npm run build
```

### 2. Create S3 Bucket

```bash
aws s3 mb s3://enhanced-schema-docs
```

### 3. Configure for Static Hosting

```bash
aws s3 website s3://enhanced-schema-docs \
  --index-document index.html \
  --error-document index.html
```

### 4. Upload Files

```bash
aws s3 sync dist/public/ s3://enhanced-schema-docs --delete
```

### 5. Set Bucket Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::enhanced-schema-docs/*"
    }
  ]
}
```

Apply policy:
```bash
aws s3api put-bucket-policy \
  --bucket enhanced-schema-docs \
  --policy file://bucket-policy.json
```

### 6. Create CloudFront Distribution

```bash
aws cloudfront create-distribution \
  --origin-domain-name enhanced-schema-docs.s3.amazonaws.com \
  --default-root-object index.html
```

---

## Custom Domain Setup

### GitHub Pages

1. Add `CNAME` file to `docs/` folder:
   ```
   docs.yoursite.com
   ```

2. Configure DNS:
   ```
   CNAME docs 185.199.108.153
   CNAME docs 185.199.109.153
   CNAME docs 185.199.110.153
   CNAME docs 185.199.111.153
   ```

3. Enable HTTPS in GitHub Pages settings

### Netlify/Vercel/Cloudflare

1. Go to domain settings
2. Add your custom domain
3. Follow DNS configuration instructions
4. SSL is automatic

---

## Environment-Specific Builds

### Production

```bash
NODE_ENV=production npm run build
```

### Staging

```bash
NODE_ENV=staging npm run build
```

---

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify navigation works
- [ ] Check download links function
- [ ] Test on mobile devices
- [ ] Verify SSL certificate (HTTPS)
- [ ] Test page load speed
- [ ] Check browser console for errors
- [ ] Verify hash routing works (#/features, etc.)

---

## Continuous Deployment

### GitHub Actions Example

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install and Build
        run: |
          npm install --legacy-peer-deps
          npm run build

      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2
        with:
          publish-dir: './dist/public'
          production-deploy: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## Monitoring and Analytics

### Add Google Analytics

Edit `.env`:
```env
VITE_ANALYTICS_ENDPOINT=https://analytics.google.com/g/collect
VITE_ANALYTICS_WEBSITE_ID=G-XXXXXXXXXX
```

### Performance Monitoring

Consider adding:
- **Sentry** for error tracking
- **Lighthouse CI** for performance monitoring
- **Web Vitals** tracking

---

## Rollback Procedures

### GitHub Pages
```bash
git revert HEAD
git push
```

### Netlify/Vercel
Use the dashboard to rollback to a previous deployment.

### Docker
```bash
docker pull enhanced-schema-docs:previous-tag
docker-compose up -d
```

---

## Support

- **Live Site:** https://syncshepherd-main.github.io/enhanced-schema-docs/
- **Repository:** https://github.com/SyncShepherd-Main/enhanced-schema-docs
- **Issues:** https://github.com/SyncShepherd-Main/enhanced-schema-docs/issues
