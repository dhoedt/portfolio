# Portfolio Website - Technical Specifications

## Overview
Personal portfolio website built with 11ty static site generator.

## Technology Stack
- **Static Site Generator:** Eleventy (11ty)
- **Template Engine:** Nunjucks
- **CSS Preprocessor:** Less
- **Package Manager:** npm
- **Hosting:** on a VPS (likely DigitalOcean)

## Project Structure
```
portfolio/
├── src/
│   ├── _includes/          # Nunjucks layouts and partials
│   ├── _data/              # Global data files (JSON/JS)
│   ├── projects/           # Project pages (Markdown)
│   ├── pages/              # Static pages (About, etc.)
│   └── index.njk           # Homepage
├── public/                 # Static assets (images, fonts, etc.)
│   ├── css/                # Compiled CSS output
│   ├── js/                 # JavaScript files
│   └── images/             # Image assets
├── styles/                 # Less source files
├── _site/                  # Build output (gitignored)
├── .eleventy.js            # Eleventy configuration
├── package.json
└── .gitignore
```

## Content Structure

### Sections
1. **Homepage** - Introduction and overview
2. **Projects Showcase** - Projects either IT ot hobbies related (music, photography)
3. **About/Resume** - Bio, skills, experience

### Content Management
- Projects: Markdown files with frontmatter in `src/projects/`
- Static pages: Markdown/Nunjucks files in `src/pages/`
- Data: JSON/YAML files in `src/_data/` for structured content

## Build Configuration

### CSS Processing
- Less preprocessor compiles during 11ty build process
- Source files in `styles/` directory
- Output to `public/css/`

### Build Commands
- `npm run dev` - Development server with watch mode
- `npm run build` - Production build

## Features (Initial Scope)
- Responsive design
- Projects showcase with filtering/categorization
- About/Resume page
- Clean, minimal design
- Mobile-friendly navigation

## Out of Scope (Initial Version)
- Contact form
- Dark mode
- SEO optimization
- Image optimization
- Blog functionality
- Analytics
- RSS feed

## Browser Support
- Modern browsers (last 2 versions)
- Chrome, Firefox, Safari, Edge

## Notes
- Keep dependencies minimal
- Focus on performance and simplicity
- Progressive enhancement approach
