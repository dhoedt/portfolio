# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website showcasing IT projects and hobbies (music, photography).
Built with Eleventy (11ty), a static site generator.

**Current Status:** Active development - Timeline resume homepage implemented with dark theme.

## Current Implementation

### Homepage
- Vertical timeline-based resume layout
- Mobile-responsive with single-column centered layout

### Design System

**Typography:**
- Body: Inter (Regular 400, Medium 500, Bold 700)
- Code/Tech: JetBrains Mono (Regular 400, Medium 500, Bold 700)
- All sizing in rem units (per architecture guidelines)

**Styling Architecture:**
- Modular Less files: `_variables.less`, `_fonts.less`, `_timeline.less`
- Mobile-first responsive (breakpoint at 768px)
- Dark theme throughout

## TODOs

At the very beginning of a session, print the TODOs and ask if any unchecked TODO should be a goal.

- [ ] add MCP servers
  - [ ] https://context7.com/
  - [ ] https://github.com/microsoft/playwright-mcp

## Technical Stack

- **Static Site Generator:** Eleventy (11ty)
- **Template Engine:** Nunjucks
- **CSS Preprocessor:** Less
- **Package Manager:** npm
- **Deployment:** VPS (likely DigitalOcean)

## Implemented Features

✅ Mobile-responsive navigation with hamburger menu
✅ Self-hosted web fonts (woff2)
✅ Less preprocessing pipeline
✅ Responsive typography scaling

## Planned Features (Not Yet Implemented)

- [ ] Separate projects showcase page (with filtering)
- [ ] Photography portfolio section
- [ ] Music production portfolio section
- [ ] Contact form
- [ ] About page (separate from resume)
- [ ] SEO optimization
- [ ] Image optimization
- [ ] Analytics integration

## Directory Structure

```
portfolio/
├── src/
│   ├── _includes/          # Nunjucks layouts and partials
│   │   ├── layouts/        # Base layouts
│   │   ├── partials/       # Reusable components (head, footer)
│   │   └── components/     # UI components (navigation)
│   ├── _data/              # Global data files (JSON)
│   │   ├── site.json       # Site metadata
│   │   └── resume.json     # Resume timeline data
│   └── index.njk           # Homepage (timeline resume)
├── public/                 # Static assets
│   ├── css/                # Compiled CSS output
│   ├── js/                 # JavaScript files
│   ├── fonts/              # Self-hosted fonts (woff2)
│   └── images/             # Image assets
├── styles/                 # Less source files
│   ├── _variables.less     # Design tokens
│   ├── _fonts.less         # Font declarations
│   ├── _timeline.less      # Timeline component styles
│   └── main.less           # Main stylesheet
├── _site/                  # Build output (gitignored)
└── .eleventy.js            # Eleventy configuration
```

## Development Commands

- `npm run dev` - Development server with watch mode
- `npm run build` - Production build
- `npm run clean` - Clean build artifacts

## Design Philosophy

- **Minimal dependencies** - Keep the stack lean
- **Performance first** - Fast loading, efficient builds
- **Progressive enhancement** - Start simple, enhance gradually
- **Responsive design** - Mobile-friendly from the start

## Browser Support

Modern browsers only (last 2 versions): Chrome, Firefox, Safari, Edge

## Architecture Guidelines

### CSS

#### Rule 1: Use rem units
Avoid using pixels (`px`) as much as possible in CSS files, use `rem` instead whenever possible.

#### Rule 2: Minimal classes
Avoid adding superfluous classes when an HTML element can be directly targeted by its selector.

Example of what to avoid:
```css
// Footer
.site-footer {
  background-color: #f8f9fa;
  padding: 2rem 0;
  text-align: center;
  color: #666;
  margin-top: 4rem;
}
```

Instead, use `<footer>` and its corresponding selector - no class needed:
```css
footer {
  background-color: #112240;
  padding: 2rem 0;
  text-align: center;
  color: #8892b0;
}
```
