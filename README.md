# Fixmate - Handyman Services Website

A modern, responsive website for Fixmate handyman services built with Next.js, TypeScript, and TailwindCSS.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **TailwindCSS** - Utility-first CSS framework
- **ShadCN UI** - Beautiful, accessible component library
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library

## Features

- ✅ Fully responsive design
- ✅ Easy theme customization via CSS variables
- ✅ Modular and reusable components
- ✅ Content separated from components (JSON files)
- ✅ Sticky navigation bar
- ✅ Future-proof structure for backend integration

## Project Structure

```
/app
  /components        - React components
  /services         - Services page
  /gallery          - Gallery page
  /testimonials     - Testimonials page
  /about            - About page
  /contact          - Contact page
  /ui               - ShadCN UI components
  layout.tsx        - Root layout
  globals.css       - Global styles
/content
  services.json     - Services data
  testimonials.json - Testimonials data
  gallery.json      - Gallery data
/public
  /images           - Image assets
  /logo             - Logo files
  /icons            - Icon files
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Theme Colors

Edit the CSS variables in `app/globals.css` to customize the color scheme:

```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96.1%;
  /* ... */
}
```

### Content

Update the JSON files in the `/content` directory to modify:
- Services (`content/services.json`)
- Testimonials (`content/testimonials.json`)
- Gallery items (`content/gallery.json`)

## Building for Production

```bash
npm run build
npm start
```

## Future Enhancements

- Backend booking system integration
- User authentication
- Payment processing
- Admin dashboard
- Email notifications

