# Installation Guide

Complete guide to setting up and running the Enhanced Schema Plugin documentation website.

## Prerequisites

- **Node.js** 18.x or higher
- **npm** or **pnpm** package manager
- **Git** (optional, for version control)

## Quick Start

### Option 1: Use Pre-Built Files (Fastest)

The repository includes pre-built files in the `docs/` and `dist/public/` directories.

1. **Download the repository**
   ```bash
   git clone https://github.com/SyncShepherd-Main/enhanced-schema-docs.git
   cd enhanced-schema-docs
   ```

2. **Serve the built files**
   ```bash
   cd docs
   npx http-server -p 3000
   ```

3. **Open in browser**
   - Navigate to: `http://localhost:3000`

### Option 2: Build from Source

If you want to modify the website or rebuild it:

1. **Clone the repository**
   ```bash
   git clone https://github.com/SyncShepherd-Main/enhanced-schema-docs.git
   cd enhanced-schema-docs
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

   The site will be available at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   # or
   pnpm run build
   ```

   Built files will be in `dist/public/`

## Development Environment Setup

### Install Node.js

**Windows:**
- Download from [nodejs.org](https://nodejs.org/)
- Use the LTS (Long Term Support) version
- The installer includes npm

**macOS:**
```bash
# Using Homebrew
brew install node

# Or download from nodejs.org
```

**Linux:**
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Fedora
sudo dnf install nodejs
```

### Install pnpm (Optional but Recommended)

```bash
npm install -g pnpm
```

## Project Structure

```
enhanced-schema-docs/
├── client/              # React source code
│   ├── public/         # Static assets
│   │   ├── enhanced-schema-plugin.zip
│   │   ├── enhanced-schema-plugin-v2.zip
│   │   └── FEATURE_COMPARISON.md
│   └── src/
│       ├── pages/      # Page components
│       ├── components/ # Reusable components
│       ├── contexts/   # React contexts
│       ├── lib/        # Utilities
│       ├── App.tsx     # Main application
│       └── main.tsx    # Entry point
├── dist/               # Production build output
│   └── public/         # Built website files
├── docs/               # GitHub Pages deployment
├── server/             # Server configuration (optional)
├── shared/             # Shared types
├── package.json        # Dependencies
├── vite.config.ts      # Build configuration
├── tsconfig.json       # TypeScript config
├── tailwind.config.ts  # Tailwind CSS config
└── README.md           # Main documentation
```

## Configuration

### Environment Variables

Create a `.env` file in the root directory (optional):

```env
# App branding
VITE_APP_LOGO=https://files.manuscdn.com/user_upload_by_module/web_dev_logo/119188138/qJhqXahsrLaGmJKS.png
VITE_APP_TITLE=Enhanced Schema Plugin - Documentation & Download

# Analytics (optional)
VITE_ANALYTICS_ENDPOINT=
VITE_ANALYTICS_WEBSITE_ID=
```

### Vite Configuration

The `vite.config.ts` file contains build settings:

```typescript
export default defineConfig({
  plugins: [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()],
  base: './',  // Use relative paths for assets
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
});
```

### Routing Configuration

The site uses hash-based routing to work with static hosting:

- Home: `index.html#/`
- Features: `index.html#/features`
- Installation: `index.html#/installation`
- Comparison: `index.html#/comparison`

## Development Workflow

### 1. Make Changes

Edit files in `client/src/`:
- Pages: `client/src/pages/`
- Components: `client/src/components/`
- Styles: `client/src/index.css`

### 2. Test Locally

```bash
npm run dev
```

Visit `http://localhost:3000` to see changes in real-time.

### 3. Build for Production

```bash
npm run build
```

### 4. Test Production Build

```bash
cd dist/public
npx http-server -p 3000
```

### 5. Deploy

See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment options.

## Troubleshooting

### "Cannot find module" errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

### Port 3000 already in use

```bash
# Use a different port
npm run dev -- --port 3001
```

### Build fails with memory error

```bash
# Increase Node.js memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Blank page in production

This usually means CORS issues with `file://` protocol.

**Solution:** Always serve the built files through an HTTP server:
```bash
cd dist/public
npx http-server -p 3000
```

Do NOT open `index.html` directly in the browser.

### CSS not loading

Make sure `vite.config.ts` has `base: './'` to use relative paths.

## Common Commands

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npm run type-check
```

## IDE Setup

### VS Code Recommended Extensions

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Tailwind CSS IntelliSense** - CSS class suggestions
- **TypeScript Vue Plugin** - TypeScript support
- **Error Lens** - Inline error display

### VS Code Settings

Create `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Next Steps

- Read [README.md](README.md) for project overview
- See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment options
- Check [FEATURE_COMPARISON.md](client/public/FEATURE_COMPARISON.md) for plugin details
- Visit the live site: https://syncshepherd-main.github.io/enhanced-schema-docs/

## Support

For issues with the website code:
- Open an issue on [GitHub](https://github.com/SyncShepherd-Main/enhanced-schema-docs/issues)

For plugin support:
- Visit the website for plugin documentation
