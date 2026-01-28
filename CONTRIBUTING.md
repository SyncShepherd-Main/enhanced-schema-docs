# Contributing to Enhanced Schema Plugin Documentation

Thank you for considering contributing to the Enhanced Schema Plugin documentation website! This document provides guidelines and instructions for contributing.

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [Getting Started](#getting-started)
3. [Development Workflow](#development-workflow)
4. [Coding Standards](#coding-standards)
5. [Commit Guidelines](#commit-guidelines)
6. [Pull Request Process](#pull-request-process)
7. [Areas for Contribution](#areas-for-contribution)

---

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring environment for all contributors, regardless of background or identity.

### Expected Behavior

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what's best for the project
- Show empathy towards other contributors

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Public or private harassment
- Publishing others' private information

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm
- Git
- A GitHub account
- A code editor (VS Code recommended)

### Fork and Clone

1. **Fork the repository** on GitHub
   - Click "Fork" button on https://github.com/SyncShepherd-Main/enhanced-schema-docs

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/enhanced-schema-docs.git
   cd enhanced-schema-docs
   ```

3. **Add upstream remote**
   ```bash
   git remote add upstream https://github.com/SyncShepherd-Main/enhanced-schema-docs.git
   ```

4. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

5. **Start development server**
   ```bash
   npm run dev
   ```

---

## Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `style/` - Code style changes
- `refactor/` - Code refactoring
- `test/` - Adding tests
- `chore/` - Maintenance tasks

### 2. Make Changes

- Edit files in `client/src/`
- Test your changes locally with `npm run dev`
- Ensure the site builds successfully with `npm run build`

### 3. Test Your Changes

```bash
# Run in development mode
npm run dev

# Build for production
npm run build

# Test production build
cd dist/public && npx http-server -p 3000
```

### 4. Commit Changes

```bash
git add .
git commit -m "feat: add new feature description"
```

See [Commit Guidelines](#commit-guidelines) for commit message format.

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create Pull Request

1. Go to your fork on GitHub
2. Click "New Pull Request"
3. Select your branch
4. Fill out the PR template
5. Submit the PR

---

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Define types for all props and functions
- Avoid using `any` type when possible

```typescript
// Good
interface Props {
  title: string;
  count: number;
}

function Component({ title, count }: Props) {
  // ...
}

// Avoid
function Component({ title, count }: any) {
  // ...
}
```

### React Components

- Use functional components with hooks
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks

```typescript
// Good
function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="card">
      {icon}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Less ideal - too much in one component
function FeaturePage() {
  // 200 lines of JSX...
}
```

### CSS/Tailwind

- Use Tailwind CSS utility classes
- Keep custom CSS to a minimum
- Use CSS variables for theming
- Follow mobile-first responsive design

```tsx
// Good
<div className="flex flex-col gap-4 md:flex-row">

// Avoid inline styles
<div style={{ display: 'flex', gap: '16px' }}>
```

### File Organization

```
client/src/
├── components/        # Reusable components
│   ├── ui/           # shadcn/ui components
│   └── layout/       # Layout components
├── pages/            # Page components
├── contexts/         # React contexts
├── hooks/            # Custom hooks
├── lib/              # Utilities
└── types/            # TypeScript types
```

### Naming Conventions

- **Components:** PascalCase (`FeatureCard.tsx`)
- **Utilities:** camelCase (`formatDate.ts`)
- **Constants:** UPPER_SNAKE_CASE (`API_ENDPOINT`)
- **CSS classes:** kebab-case or Tailwind utilities

---

## Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `perf:` Performance improvements
- `test:` Adding or updating tests
- `chore:` Maintenance tasks
- `ci:` CI/CD changes

### Examples

```bash
# Feature
git commit -m "feat(home): add hero section with gradient background"

# Bug fix
git commit -m "fix(navigation): resolve mobile menu not closing"

# Documentation
git commit -m "docs(readme): add installation instructions"

# Breaking change
git commit -m "feat(routing)!: migrate to hash-based routing

BREAKING CHANGE: URLs now use hash routing (#/page) instead of path routing (/page)"
```

---

## Pull Request Process

### Before Submitting

- [ ] Code builds successfully (`npm run build`)
- [ ] No console errors or warnings
- [ ] All pages load and navigate correctly
- [ ] Responsive design works on mobile
- [ ] Code follows style guidelines
- [ ] Commit messages follow conventions
- [ ] Branch is up to date with main

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Style/UI improvement
- [ ] Refactoring
- [ ] Performance improvement

## Screenshots (if applicable)
Before/after screenshots

## Testing
How was this tested?

## Checklist
- [ ] Code builds successfully
- [ ] Tested in multiple browsers
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Documentation updated (if needed)
```

### Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged
4. Your changes will be deployed to production

---

## Areas for Contribution

### High Priority

- [ ] Add more feature examples
- [ ] Improve mobile navigation
- [ ] Add search functionality
- [ ] Enhance accessibility (ARIA labels)
- [ ] Add more documentation pages

### Content Improvements

- [ ] Plugin installation tutorials
- [ ] Video walkthroughs
- [ ] Use case examples
- [ ] FAQ section
- [ ] Troubleshooting guides

### Technical Enhancements

- [ ] Performance optimization
- [ ] Better error handling
- [ ] Loading states
- [ ] Animation improvements
- [ ] SEO improvements

### Design Improvements

- [ ] Dark mode refinements
- [ ] Better typography
- [ ] Improved spacing and layout
- [ ] Icon consistency
- [ ] Better color contrast

### Testing

- [ ] Unit tests for components
- [ ] E2E tests with Playwright
- [ ] Visual regression tests
- [ ] Accessibility testing

---

## Development Tips

### Hot Module Replacement

Vite provides fast HMR. Changes to React components will reflect immediately without full page reload.

### Browser DevTools

Use React DevTools extension to inspect component hierarchy and props.

### Performance

```bash
# Analyze bundle size
npm run build
npx vite-bundle-visualizer
```

### Debugging

Add console logs or use debugger:
```typescript
console.log('Debug:', variableName);
debugger; // Pauses execution in DevTools
```

---

## Style Guide Resources

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Conventional Commits](https://www.conventionalcommits.org/)

---

## Questions or Issues?

- **General questions:** Open a [Discussion](https://github.com/SyncShepherd-Main/enhanced-schema-docs/discussions)
- **Bug reports:** Open an [Issue](https://github.com/SyncShepherd-Main/enhanced-schema-docs/issues)
- **Feature requests:** Open an [Issue](https://github.com/SyncShepherd-Main/enhanced-schema-docs/issues) with "enhancement" label

---

## Recognition

Contributors will be:
- Listed in the repository contributors page
- Acknowledged in release notes for significant contributions
- Eligible for maintainer status with consistent contributions

---

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (GPL v2 or later).

---

Thank you for contributing! 🎉
