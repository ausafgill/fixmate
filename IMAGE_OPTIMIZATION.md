# Image Optimization Guide

## Current Optimizations Implemented

### 1. Next.js Image Optimization
- **AVIF & WebP formats**: Automatically served when supported by browser
- **Responsive images**: Different sizes for different screen sizes
- **Lazy loading**: Images load only when needed (except priority images)
- **Blur placeholders**: Better perceived performance

### 2. Image Configuration
- Quality: 85% for gallery thumbnails, 90% for lightbox, 75% for backgrounds
- Priority loading: Hero background and lightbox images
- Proper sizing: Responsive `sizes` attribute for optimal loading

### 3. Performance Tips

#### For Production:
1. **Pre-optimize images before upload**:
   - Use tools like [Squoosh](https://squoosh.app/) or [ImageOptim](https://imageoptim.com/)
   - Target file sizes: < 500KB for gallery images, < 200KB for thumbnails
   - Recommended dimensions:
     - Gallery thumbnails: 800x800px
     - Gallery full: 1920x1080px
     - Hero background: 1920x1080px

2. **Use Sharp for better optimization** (already installed):
   - Sharp is automatically used by Next.js for image optimization
   - Provides better compression than default

3. **Consider CDN**:
   - Use services like Cloudinary, Imgix, or Next.js Image Optimization API
   - Update `next.config.mjs` with remote image domains if using external CDN

#### Current Image Sizes:
Some images are currently 10-24MB which is too large. Consider:
- Compressing existing images
- Using WebP format
- Resizing to appropriate dimensions

### 4. Best Practices

✅ **Do:**
- Use Next.js `Image` component (already implemented)
- Set appropriate `sizes` attribute
- Use `loading="lazy"` for below-fold images
- Use `priority` for above-fold images
- Add blur placeholders

❌ **Don't:**
- Upload images > 2MB without optimization
- Use `<img>` tag instead of Next.js `Image`
- Forget to set `alt` attributes
- Load full-size images for thumbnails

### 5. Quick Optimization Commands

```bash
# Sharp is automatically used by Next.js if available
# For manual installation (requires Node 18+):
npm install sharp

# Use online tools to compress images before adding to public/assets/images/
# Recommended: https://squoosh.app/
# Or use: https://tinypng.com/ or https://imageoptim.com/
```

### 6. Monitoring

Check image performance:
- Use Chrome DevTools Network tab
- Check Lighthouse scores
- Monitor Core Web Vitals (LCP - Largest Contentful Paint)
