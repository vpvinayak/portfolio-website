# Vinayak Patel - Cyber-Nexus Holographic Portfolio OS

A unique, sci-fi futuristic developer portfolio website built for **Vinayak Patel** (Software Engineer & CSE Undergrad @ AITR Indore). Features a dark holographic aesthetic, Web Audio API sound synthesis, reactive particle canvas background, CLI shell terminal emulator, project vault with custom preview graphics, skills matrix, timeline logs, and contact transmission relay.

---

## 🚀 Live Demo & Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: Custom Vanilla CSS3 (Glassmorphism, Neon Glows, CRT Overlay, CSS Variables)
- **Icons & Visuals**: Lucide React, Custom SVG Icons, HTML5 2D Canvas API
- **Audio Engine**: Pure Web Audio API (`AudioContext`) sound synthesis with mute control
- **Interactivity**: Built-in CLI command terminal + Canvas Confetti
- **Deployment Platform**: [Vercel](https://vercel.com/) (Pre-configured with `vercel.json` SPA rewrites)

---

## 🌐 How to Deploy on Vercel

Deploying your portfolio to Vercel is 100% free and takes less than 2 minutes.

### Method A: Deploy via GitHub (Recommended)
1. Initialize a git repository and push your project to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Vinayak Patel Cyber Portfolio"
   git branch -M main
   git remote add origin https://github.com/vpvinayak/portfolio-website.git
   git push -u origin main
   ```
2. Go to [Vercel.com](https://vercel.com/) and sign in with your GitHub account.
3. Click **"Add New..."** -> **"Project"**.
4. Select your **`portfolio-website`** repository from the list.
5. Vercel will automatically detect **Vite** and prefill:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Click **Deploy**. Vercel will build your site and give you a free live URL (e.g., `https://vinayak-patel-portfolio.vercel.app`)!

---

### Method B: Deploy via Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command in the project directory:
   ```bash
   vercel
   ```
3. Follow the CLI prompts to deploy directly from your terminal!

---

## 💻 Local Development Setup

To run the application locally on your computer:

1. Clone or navigate to the workspace directory:
   ```bash
   cd "c:\VINU\Portfolio website"
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Start the local dev server:
   ```bash
   npm run dev
   ```
4. Open the displayed URL (typically `http://localhost:5173`) in your browser.

---

## 📁 How to Update Resume & Profile Details

All personal profile data, projects, skills, certifications, awards, and CLI commands live in a single centralized configuration file:

```
src/data/portfolioData.js
```

You can edit `src/data/portfolioData.js` anytime to add new projects, update your CGPA, modify skills, or change contact links.
