# Portfolio V2 - Dark Edition

Modern portfolio website with dark theme, glassmorphism design, and stunning animations.

## 🎨 Design Features

- **Dark Theme**: Deep purple/violet gradient background
- **Glassmorphism**: Frosted glass effects on cards
- **Neon Accents**: Cyan, purple, and pink color scheme
- **3D Particles**: Interactive Three.js background animation
- **Smooth Animations**: Framer Motion powered transitions

## 🚀 Tech Stack

- React 18 + TypeScript
- Vite
- TailwindCSS
- Framer Motion
- Three.js
- Radix UI
- Supabase (for contact form)

## 📦 Installation

```bash
cd portfolio-v2
npm install
npm run dev
```

## 🌐 Deployment to Netlify

### Option 1: New Netlify Site
1. Create a new site on Netlify
2. Connect your GitHub repository
3. Set build settings:
   - Base directory: `portfolio-v2`
   - Build command: `npm run build`
   - Publish directory: `portfolio-v2/dist`

### Option 2: Update Existing Site
1. Go to your Netlify site → Site settings
2. Build & deploy → Build settings
3. Change `Base directory` to `portfolio-v2`
4. Change `Publish directory` to `portfolio-v2/dist`
5. Trigger a new deploy

## 🎯 Features

- ✅ Multilingual (EN/NO/UA)
- ✅ Responsive design
- ✅ Contact form with Supabase
- ✅ 6 portfolio sections
- ✅ Snake expansion animation
- ✅ Interactive particles
- ✅ Glassmorphism UI

## 📝 Environment Variables

Create a `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🎭 Color Scheme

- Primary: Cyan (#06b6d4)
- Secondary: Purple (#a855f7)
- Accent: Pink (#ec4899)
- Background: Gray-900 → Purple-900 → Violet-900

## 📄 License

MIT
