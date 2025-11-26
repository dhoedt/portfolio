# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website showcasing IT projects and hobbies (music, photography).
Built with Eleventy (11ty), a static site generator.

**Current Status:** Planning phase - project structure defined in `.claude/technical-spec.md` but implementation not yet started.

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

## Planned Architecture

### Directory Structure (from technical-spec.md)
```
portfolio/
├── src/
│   ├── _includes/          # Nunjucks layouts and partials
│   ├── _data/              # Global data files (JSON/JS)
│   ├── projects/           # Project pages (Markdown with frontmatter)
│   ├── pages/              # Static pages (About, Resume)
│   └── index.njk           # Homepage
├── public/                 # Static assets
│   ├── css/                # Compiled CSS output
│   ├── js/                 # JavaScript files
│   └── images/             # Image assets
├── styles/                 # Less source files
├── _site/                  # Build output (gitignored)
└── .eleventy.js            # Eleventy configuration
```

### Content Organization

- **Projects**: Markdown files with frontmatter in `src/projects/` with filtering/categorization
- **Static Pages**: Markdown/Nunjucks files in `src/pages/`
- **Data**: JSON/YAML files in `src/_data/` for structured content

### Build Process

- Less preprocessor compiles during 11ty build
- Source files: `styles/` directory → Output: `public/css/`

## Development Commands (Planned)

When implementation begins:
- `npm run dev` - Development server with watch mode
- `npm run build` - Production build

## Design Philosophy

- **Minimal dependencies** - Keep the stack lean
- **Performance first** - Fast loading, efficient builds
- **Progressive enhancement** - Start simple, enhance gradually
- **Responsive design** - Mobile-friendly from the start

## Initial Scope

**In scope:**
- Responsive design
- Projects showcase with filtering
- About/Resume page
- Clean, minimal aesthetic
- Mobile-friendly navigation

**Out of scope (v1):**
- Contact forms
- Dark mode
- SEO optimization
- Image optimization
- Blog functionality
- Analytics
- RSS feed

## Browser Support

Modern browsers only (last 2 versions): Chrome, Firefox, Safari, Edge

## Architecture guidelines

### CSS

#### Rule 1
Avoid using pixels (`px`) as much as possible in CSS files, use `rem` instead whenever possible

#### Rule 2
Avoid adding superfluous classes when an HTML element can be directly targeted by its selector.

Here's an example of what to avoid:
```CSS
// Footer
.site-footer {
  background-color: #f8f9fa;
  padding: 2rem 0;
  text-align: center;
  color: #666;
  margin-top: 4rem;
}
```

Use `<footer>` and its corresponding selector, no class needed here.