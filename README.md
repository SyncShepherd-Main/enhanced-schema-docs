# Enhanced Schema Plugin - Documentation Website

This is the complete source code and built files for the Enhanced Schema Plugin documentation website.

## What's Included

- **client/** - React source code (TypeScript + Tailwind CSS)
- **dist/** - Pre-built production files (ready to deploy)
- **server/** - Placeholder server configuration
- **shared/** - Shared types and constants
- **package.json** - Dependencies and scripts
- **vite.config.ts** - Build configuration
- **tsconfig.json** - TypeScript configuration

## Quick Start

### Option 1: Use Pre-Built Files (Recommended for Deployment)

The `dist/` folder contains production-ready files. You can:

1. Upload the entire `dist/` folder to your web hosting
2. Set your web server to serve `dist/index.html` as the entry point
3. Configure your server to handle client-side routing (all routes should serve `index.html`)

### Option 2: Develop Locally

If you want to modify the website:

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

## Project Structure

```
client/
├── public/          # Static assets (images, downloads)
├── src/
│   ├── pages/       # Page components
│   ├── components/  # Reusable UI components
│   ├── App.tsx      # Main app with routing
│   ├── main.tsx     # React entry point
│   └── index.css    # Global styles
dist/               # Production build output
package.json        # Dependencies
vite.config.ts      # Build tool configuration
```

## Pages Included

- **Home** - Overview and quick links
- **Features** - Detailed feature showcase
- **Installation** - Step-by-step setup guide
- **Comparison** - Feature comparison with SchemaWriter.ai

## Deployment Options

### Static Hosting (Netlify, Vercel, GitHub Pages)
1. Upload the `dist/` folder
2. Set build command: `pnpm run build`
3. Set publish directory: `dist`

### Traditional Web Server (Apache, Nginx)
1. Upload `dist/` contents to your web root
2. Configure server to serve `index.html` for all routes

### Docker
```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY dist/ .
RUN npm install -g serve
CMD ["serve", "-s", ".", "-l", "3000"]
```

## Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Component library
- **Vite** - Build tool
- **Wouter** - Client-side routing

## Customization

### Change Colors
Edit `client/src/index.css` to modify CSS variables:
```css
@layer base {
  :root {
    --primary: 220 90% 56%;
    --secondary: 240 10% 3.9%;
    /* ... more variables ... */
  }
}
```

### Add New Pages
1. Create a new file in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Run `pnpm run build` to rebuild

### Update Content
Edit the pages in `client/src/pages/` to update content.

## Building for Production

```bash
pnpm run build
```

This creates an optimized `dist/` folder with:
- Minified JavaScript
- Optimized CSS
- Compressed assets
- Source maps for debugging

## Environment Variables

No environment variables are required for this static site. It's completely self-contained.

## Support

For issues or questions about the Enhanced Schema Plugin itself, refer to the plugin documentation at the website.

## License

This website is part of the Enhanced Schema Plugin project.

---

**Built with:** React + TypeScript + Tailwind CSS + Vite  
**Last Updated:** January 2025
