# Favicon Files

This directory contains the favicon files for FixMate Dubai.

## Files

- `favicon.svg` - Main scalable SVG favicon
- `favicon-32x32.svg` - 32x32 SVG version
- `favicon-64x64.svg` - 64x64 SVG version
- `favicon-128x128.svg` - 128x128 SVG version
- `favicon.ico` - Placeholder (needs to be generated from SVG)

## Converting to PNG (if needed)

If you need PNG versions of the favicons, you can convert the SVG files using:

### Using ImageMagick:
```bash
convert favicon-32x32.svg -resize 32x32 favicon-32x32.png
convert favicon-64x64.svg -resize 64x64 favicon-64x64.png
convert favicon-128x128.svg -resize 128x128 favicon-128x128.png
```

### Using online tools:
- https://cloudconvert.com/svg-to-png
- https://convertio.co/svg-png/

### Using Node.js (sharp):
```bash
npm install sharp
node -e "const sharp = require('sharp'); sharp('favicon-32x32.svg').resize(32, 32).png().toFile('favicon-32x32.png')"
```

Note: Modern browsers support SVG favicons, so PNG conversion may not be necessary.
