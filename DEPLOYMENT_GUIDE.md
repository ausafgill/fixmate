# Step-by-Step Deployment Guide to Vercel

Follow these steps to deploy your FixMate website to Vercel.

## Prerequisites Checklist

- ✅ Next.js project configured
- ✅ All dependencies installed
- ✅ No build errors
- ✅ All assets in place

---

## Step 1: Initialize Git Repository

If you haven't already, initialize a Git repository:

```bash
# Navigate to your project directory
cd /Users/mergestack/Projects/fixmate

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: FixMate website ready for deployment"
```

---

## Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Repository name: `fixmate` (or any name you prefer)
4. Description: "FixMate Dubai - Home Maintenance & Repair Services Website"
5. Set to **Public** (or Private if you prefer)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

---

## Step 3: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Add the remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/fixmate.git

# Rename branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

---

## Step 4: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click **"Sign Up"** or **"Log In"**
   - Sign in with your GitHub account (recommended)

2. **Import Your Project**
   - Click **"Add New..."** → **"Project"**
   - You'll see your GitHub repositories
   - Find and click **"Import"** next to your `fixmate` repository

3. **Configure Project**
   - **Framework Preset**: Vercel will auto-detect "Next.js" ✅
   - **Root Directory**: Leave as `./` (default)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

4. **Environment Variables**
   - You don't need any environment variables for this project
   - Click **"Deploy"** directly

5. **Wait for Deployment**
   - Vercel will:
     - Install dependencies
     - Build your project
     - Deploy to production
   - This takes 1-3 minutes

6. **Get Your Live URL**
   - Once deployed, you'll get a URL like: `https://fixmate.vercel.app`
   - Your site is now live! 🎉

### Option B: Deploy via Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from your project directory)
cd /Users/mergestack/Projects/fixmate
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (select your account)
# - Link to existing project? No
# - Project name? fixmate
# - Directory? ./
# - Override settings? No
```

---

## Step 5: Configure Custom Domain (Optional)

If you want to use `www.fixmate.com`:

1. **In Vercel Dashboard**
   - Go to your project
   - Click **"Settings"** → **"Domains"**
   - Add your domain: `www.fixmate.com`
   - Follow DNS configuration instructions

2. **Update Site URL in Code**
   - Update `siteUrl` in `app/layout.tsx` if needed
   - The sitemap will automatically use the correct domain

---

## Step 6: Verify Deployment

Check these after deployment:

- ✅ Homepage loads correctly
- ✅ All pages work (Services, Gallery, Testimonials, About, Contact)
- ✅ Images load properly
- ✅ Contact form opens WhatsApp correctly
- ✅ Mobile responsive design works
- ✅ No console errors

---

## Step 7: Set Up Automatic Deployments

Vercel automatically:
- ✅ Deploys on every push to `main` branch
- ✅ Creates preview deployments for pull requests
- ✅ Provides deployment URLs for each commit

**To deploy updates:**
```bash
git add .
git commit -m "Your update message"
git push
```

Vercel will automatically rebuild and redeploy! 🚀

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses latest LTS automatically)

### Images Not Loading
- Ensure images are in `/public` directory
- Check image paths in your code
- Verify image file names match exactly

### Environment Variables Needed
- Go to Project Settings → Environment Variables
- Add any required variables
- Redeploy

---

## Quick Reference Commands

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/YOUR_USERNAME/fixmate.git
git push -u origin main

# Deploy updates
git add .
git commit -m "Update message"
git push
```

---

## Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **GitHub Help**: https://docs.github.com

---

**Your site will be live at:** `https://fixmate.vercel.app` (or your custom domain)

Good luck with your deployment! 🚀
