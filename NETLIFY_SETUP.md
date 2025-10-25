# 🚀 Netlify Setup Instructions for Portfolio V2

## ⚠️ Important

You now have **TWO** portfolio websites in this repository:
- **Original** (root folder) - Yellow/Orange theme
- **Portfolio V2** (portfolio-v2 folder) - Dark theme with glassmorphism

To deploy the **new dark theme portfolio**, you need to update Netlify settings.

---

## 📝 Step-by-Step Instructions

### 1. Login to Netlify
Go to [https://app.netlify.com](https://app.netlify.com) and login

### 2. Select Your Site
Click on your portfolio site from the dashboard

### 3. Go to Site Settings
Click on **"Site settings"** button (top right area)

### 4. Navigate to Build Settings
- In the left sidebar, click **"Build & deploy"**
- Then click **"Build settings"**

### 5. Update Build Settings

Click **"Edit settings"** button and change:

**Before (Old Site):**
```
Base directory: (empty or /)
Build command: npm run build
Publish directory: dist
```

**After (New Portfolio V2):**
```
Base directory: portfolio-v2
Build command: npm run build
Publish directory: portfolio-v2/dist
```

### 6. Save Changes
Click **"Save"** button

### 7. Trigger New Deploy

**Option A: Manual Deploy**
- Go to **"Deploys"** tab
- Click **"Trigger deploy"** → **"Deploy site"**

**Option B: Git Push**
- Any new push to your branch will automatically deploy

---

## 🎨 What You'll See

After deployment, your site will have:
- ✅ **Dark theme** with purple/violet gradients
- ✅ **Glassmorphism** frosted glass cards
- ✅ **Neon borders** (cyan/purple/pink)
- ✅ **3D Particles** animated background
- ✅ **Same content** about Vitalii Berbeha
- ✅ **Same languages** (EN/NO/UA)

---

## 🔄 Switching Back to Old Site

If you want to go back to the yellow/orange theme:

1. Go to **Build settings**
2. Change:
   ```
   Base directory: (leave empty)
   Publish directory: dist
   ```
3. Save and redeploy

---

## 🌐 Environment Variables

If you're using Supabase for contact form, add these variables:

1. Go to **"Site settings"** → **"Environment variables"**
2. Add:
   ```
   VITE_SUPABASE_URL = your_supabase_project_url
   VITE_SUPABASE_ANON_KEY = your_supabase_anon_key
   ```
3. Save and redeploy

---

## ✅ Verification Checklist

After deployment, check:
- [ ] Site loads with dark theme
- [ ] All 6 cards are visible (About, Projects, Services, Skills, Testimonials, Contact)
- [ ] Particles animation works
- [ ] Language switcher works (NO/EN/UA)
- [ ] Cards open with snake animation
- [ ] Contact form works
- [ ] Responsive on mobile

---

## 🆘 Troubleshooting

**Problem: Site shows "Page not found"**
- Solution: Check that `Base directory` is exactly `portfolio-v2`

**Problem: Build fails**
- Solution: Check that `Publish directory` is `portfolio-v2/dist`

**Problem: Old site still showing**
- Solution: Clear deploy cache and trigger new deploy

**Problem: Particles not showing**
- Solution: Normal - some browsers may not support WebGL, CSS fallback will show

---

## 📞 Need Help?

If you have issues:
1. Check Netlify deploy logs for errors
2. Ensure all files are pushed to GitHub
3. Try clearing cache and redeploying

---

## 🎯 Quick Reference

**New Site Location:** `portfolio-v2/`
**Old Site Location:** root `/`

**To Deploy Portfolio V2:**
- Base directory: `portfolio-v2`
- Publish directory: `portfolio-v2/dist`

**To Deploy Original:**
- Base directory: (empty)
- Publish directory: `dist`

---

Made with ❤️ by Claude Code
