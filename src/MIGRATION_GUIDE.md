# 🔄 Single-Page to Multi-Page Migration Guide

Quick guide for installing dependencies and testing your new multi-page site.

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Dependencies

```bash
npm install react-router-dom
```

That's it! Only one new dependency needed.

---

### Step 2: Test Locally

```bash
npm run dev
```

Open your browser to `http://localhost:5173` (or whatever port Vite uses)

---

### Step 3: Click Around

**Test these links:**
- Click "Home" - Should show Hero, services, testimonials
- Click "About" - Should show About, Stats, Testimonials
- Click "Services" - Should show services, workflow
- Click "Courses" - Should show course tiers, Health Check
- Click "Portfolio" - Should show "Coming Soon" placeholder
- Click "Insights" - Should show blog section
- Click "Contact" - Should show contact form, FAQ
- Click footer link to "Privacy Policy" - Should show Legal page

**What to check:**
- [ ] Navigation works smoothly
- [ ] Pages load instantly
- [ ] Styling looks identical
- [ ] All animations work
- [ ] Mobile menu slides in
- [ ] Theme toggle works
- [ ] Cookie popup appears
- [ ] Chat widget works

---

## 📱 Test on Mobile

Open dev tools, toggle device emulation (Cmd/Ctrl + Shift + M)

**Test:**
- [ ] Mobile menu button appears
- [ ] Menu slides in from right
- [ ] All pages responsive
- [ ] Touch interactions work
- [ ] All content readable

---

## 🌐 Deploy to Production

### Netlify

**Important:** Add redirect rule for client-side routing

**Option A: `_redirects` file**

Create `/public/_redirects`:
```
/*    /index.html   200
```

**Option B: `netlify.toml`**

Create `/netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Then deploy as normal:
```bash
npm run build
netlify deploy --prod
```

---

### Vercel

Vercel handles this automatically! Just deploy:

```bash
npm run build
vercel --prod
```

---

### Other Hosts

Make sure your server:
1. Serves `index.html` for all routes
2. Doesn't return 404 for `/about`, `/services`, etc.

**Apache:** Add to `.htaccess`:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Nginx:** Add to config:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

---

## ✅ Verification Checklist

After deploying, test on production URL:

**URLs work:**
- [ ] `yoursite.com/` loads
- [ ] `yoursite.com/about` loads (not 404)
- [ ] `yoursite.com/services` loads
- [ ] `yoursite.com/courses` loads
- [ ] `yoursite.com/contact` loads

**Navigation works:**
- [ ] Click all nav links
- [ ] Browser back/forward buttons work
- [ ] Page refreshes keep you on same page

**Features work:**
- [ ] Contact form submits
- [ ] Newsletter signup works
- [ ] Analytics tracking works
- [ ] Chat widget appears
- [ ] Cookie consent appears

**SEO ready:**
- [ ] View page source - content visible
- [ ] Share links - correct page loads
- [ ] Google can crawl (test in Search Console)

---

## 🔄 Rollback Plan

If something goes wrong, you can easily revert:

### Option 1: Git Revert
```bash
git log
# Find commit before multi-page
git revert <commit-hash>
```

### Option 2: Keep Both Versions

**Current:** Multi-page in `/App.tsx`

**To restore single-page:**
1. Rename `App.tsx` to `AppMultiPage.tsx`
2. Create new `App.tsx` with old single-page code
3. Deploy

You can switch between them anytime!

---

## 🐛 Common Issues

### Issue: "Module not found: react-router-dom"
**Fix:** 
```bash
npm install react-router-dom
```

### Issue: 404 on page refresh
**Fix:** Add redirect rule (see Deploy section above)

### Issue: Blank page on deploy
**Fix:** 
- Check browser console for errors
- Verify build completed successfully
- Check all imports are correct

### Issue: Navigation doesn't work
**Fix:**
- Clear browser cache
- Hard refresh (Cmd/Ctrl + Shift + R)
- Check BrowserRouter is wrapping app

### Issue: Styles look different
**Fix:**
- All styles should be identical
- Check `globals.css` is imported
- Verify all components imported correctly

---

## 📊 Before vs After

### Old (Single-Page)
```
URL: yoursite.com
All content on one page
Scroll to navigate
URLs use #hash (yoursite.com/#about)
One page load
```

### New (Multi-Page)
```
URLs: 
- yoursite.com/
- yoursite.com/about
- yoursite.com/services
- etc.

Each section on separate page
Click to navigate
Clean URLs (yoursite.com/about)
Instant page changes
```

---

## 🎯 What to Update (Optional)

### 1. SEO Tags (Recommended)

Update `SEOHead.tsx` to use dynamic titles per page:

```tsx
// Example for dynamic SEO
import { useLocation } from 'react-router-dom';

export function SEOHead() {
  const location = useLocation();
  
  const titles = {
    '/': 'AIGENCY.LIMITED - AI Services Bournemouth',
    '/about': 'About - AIGENCY.LIMITED',
    '/services': 'AI Services - AIGENCY.LIMITED',
    // etc.
  };
  
  const title = titles[location.pathname] || 'AIGENCY.LIMITED';
  
  return (
    <Helmet>
      <title>{title}</title>
      {/* Other tags */}
    </Helmet>
  );
}
```

### 2. Analytics Events

Track page views per route:

```tsx
// In AppContent component
const location = useLocation();

useEffect(() => {
  if ((window as any).trackEvent) {
    (window as any).trackEvent('page_view', {
      page: location.pathname
    });
  }
}, [location]);
```

### 3. Portfolio Content

Replace placeholder in `/pages/PortfolioPage.tsx`:

```tsx
// Add your projects
const projects = [
  {
    title: "AI Automation for Local Business",
    image: "/project1.jpg",
    description: "..."
  },
  // etc.
];
```

---

## 📈 Benefits You Now Have

### SEO
- ✅ Each page can rank separately
- ✅ Clean URLs for sharing
- ✅ Better content organization
- ✅ More pages to index

### User Experience
- ✅ Clearer navigation
- ✅ Direct links to sections
- ✅ Shareable page URLs
- ✅ Browser history works

### Analytics
- ✅ Track page-specific metrics
- ✅ See which pages convert
- ✅ Understand user flow
- ✅ Optimize per page

### Development
- ✅ Easier to maintain
- ✅ Add pages easily
- ✅ Update pages independently
- ✅ Better code organization

---

## ⏱️ Timeline

**Immediate (Today):**
- Install dependencies (2 mins)
- Test locally (5 mins)
- Deploy (10 mins)
- **Total: ~20 minutes**

**This Week:**
- Update SEO tags per page
- Add content to Portfolio
- Test analytics
- Share new URLs

**This Month:**
- Monitor page performance
- Optimize based on data
- Add more pages as needed
- Build out Portfolio

---

## 🎉 You're Done!

Your site is now a professional multi-page website with:
- Clean URLs
- Better SEO
- Same beautiful design
- All features working
- Ready to scale

**Next:** Read `MULTIPAGE_IMPLEMENTATION.md` for full details!

---

**Questions?** Check `TROUBLESHOOTING.md` or the comprehensive guide.

Good luck! 🚀
