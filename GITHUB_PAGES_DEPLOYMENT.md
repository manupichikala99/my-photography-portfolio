# GitHub Pages Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Sign in to your account (@manupichikala99)
3. Click the "+" button in the top right corner → "New repository"
4. Repository name: `my-photography-portfolio`
5. Description: "My photography portfolio website"
6. Select "Public"
7. Click "Create repository"

## Step 2: Initialize Git and Push Code

Open a new terminal and run these commands in your project folder:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit with a message
git commit -m "Initial commit - Photography Portfolio"

# Add remote repository (replace with your actual repo URL)
git remote add origin https://github.com/manupichikala99/my-photography-portfolio.git

# Push to GitHub
git push -u origin main
```

You'll need to enter your GitHub username and password (or personal access token).

## Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. In the left sidebar, click "Pages"
4. Under "Build and deployment":
   - Source: Select "Deploy from a branch"
   - Branch: Select "gh-pages" / "(root)" or "main" / "docs folder"
   - Click "Save"
5. Wait 1-2 minutes for deployment

## Step 4: Install gh-pages for Automated Deployment

To make future deployments easier, let's install gh-pages:

```bash
npm install --save gh-pages
```

Then update your `package.json` by adding these scripts:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
}
```

Also add this to `package.json` (at the top level, not in scripts):

```json
"homepage": "https://manupichikala99.github.io/my-photography-portfolio"
```

## Step 5: Deploy

Run this command to deploy:

```bash
npm run deploy
```

## Your Portfolio URL

Once deployed, your portfolio will be available at:
**https://manupichikala99.github.io/my-photography-portfolio/**

## Updating Your Portfolio

To make changes and deploy:

```bash
# Make your changes to the code
git add .
git commit -m "Your update message"
git push origin main
npm run deploy
```

## Need Help?

If you encounter issues:
- Check GitHub Pages status in repository Settings
- Ensure your repository is public
- Verify the gh-pages branch was created

