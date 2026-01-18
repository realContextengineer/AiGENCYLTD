# 🔧 Troubleshooting Guide

Common issues and how to fix them.

---

## 📊 Analytics Not Working

### Symptoms
- No data showing in dashboard
- `window.trackEvent` undefined
- Console errors about gtag/plausible

### Solutions

**1. Check Configuration**
```javascript
// Open browser console and check:
console.log(window.gtag);        // Should show function (Google Analytics)
console.log(window.plausible);   // Should show function (Plausible)
console.log(window.trackEvent);  // Should show function (custom helper)
```

**2. Verify Tracking ID**
- Open `/components/Analytics.tsx`
- Check your GA ID format: `G-XXXXXXXXXX` (not `UA-` old format)
- Verify Plausible domain matches your site

**3. Check Ad Blockers**
- Many ad blockers block analytics
- Test in incognito mode
- Try a different browser

**4. Wait for Data**
- Google Analytics can take 24-48 hours
- Real-time view should show immediately
- Plausible shows data within minutes

**5. Check Script Loading**
```javascript
// In browser console:
const scripts = Array.from(document.scripts).map(s => s.src);
console.log(scripts);
// Should see googletagmanager or plausible URL
```

---

## 📅 Calendly Not Opening

### Symptoms
- Button clicks but nothing happens
- Console error: "Calendly is not defined"
- Popup doesn't appear

### Solutions

**1. Check Calendly Username**
- Open `/components/CalendlyWidget.tsx` line 28
- Verify format: `https://calendly.com/yourusername/event-name`
- Test link directly in browser

**2. Verify Script Loaded**
```javascript
// In browser console:
console.log(window.Calendly);
// Should show object with methods
```

**3. Add Script to HTML**
If auto-loading isn't working, add manually to HTML `<head>`:
```html
<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
```

**4. Check Popup Blockers**
- Browser may be blocking popup
- Check for popup blocker icon in address bar
- Allow popups for your site

**5. Try Direct Link**
If all else fails, temporarily use direct link:
```javascript
// In CalendlyWidget.tsx, replace function with:
const openCalendlyPopup = () => {
  window.open(calendlyUrl, "_blank");
};
```

---

## 💬 Live Chat Not Showing

### Symptoms
- No chat widget visible
- Widget shows but doesn't work
- Console errors

### Solutions

**1. Check Component is Rendered**
- Open `/App.tsx`
- Verify line 106: `<LiveChat />` is present
- Not commented out

**2. Check Z-Index**
- Chat widget has `z-40`
- Make sure nothing overlaps it
- Check with browser DevTools

**3. Clear localStorage**
```javascript
// In browser console:
localStorage.clear();
// Then refresh page
```

**4. Check Mobile Viewport**
- Widget should show on mobile
- Bottom-right corner
- Try different screen sizes

**5. If Using Tawk.to**
If you replaced with Tawk.to:
- Verify script in HTML `<head>`
- Check widget enabled in dashboard
- Try refreshing Tawk.to dashboard

---

## 🚪 Exit Popup Not Triggering

### Symptoms
- Moving mouse to close tab does nothing
- Popup never shows
- Already dismissed and want to test again

### Solutions

**1. Desktop Only**
- Exit intent only works on desktop
- Requires mouse movement detection
- Won't work on mobile/touch devices

**2. Clear Session Storage**
```javascript
// In browser console:
sessionStorage.clear();
// Then refresh and try again
```

**3. Test Correctly**
- Move mouse slowly towards top of browser
- Aim for browser chrome area (not webpage top)
- As if you're going to click close tab button

**4. Check Configuration**
- Open `/components/ExitIntentPopup.tsx`
- Line 10: Check `enabled` is not set to false

**5. Console Check**
```javascript
// See if shown this session:
console.log(sessionStorage.getItem("exit-popup-shown"));
// null = not shown yet
// "true" = already shown
```

---

## 🍪 Cookie Banner Not Appearing

### Symptoms
- Cookie consent never shows
- Already dismissed and want to test

### Solutions

**1. Clear localStorage**
```javascript
// In browser console:
localStorage.removeItem("aigency-cookie-consent");
// Then refresh
```

**2. Wait 2 Seconds**
- Banner has intentional delay
- Appears 2 seconds after page load
- Be patient!

**3. Check First Visit**
- Only shows if no consent stored
- Check localStorage in DevTools
- Clear all site data to test

**4. Check Component Active**
- Open `/App.tsx` line 108
- Verify `<CookieConsent />` present

---

## 📝 Contact Form Not Submitting

### Symptoms
- Submit button disabled
- Validation errors
- Form doesn't clear after submit

### Solutions

**1. Check Required Fields**
- Name: Must not be empty
- Email: Must be valid format (user@domain.com)
- Message: Must be at least 10 characters

**2. Check Console for Errors**
- Open browser DevTools
- Go to Console tab
- Look for red errors

**3. Test in Stages**
```javascript
// In Contact.tsx, add console.log:
const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("Form submitted!", formData); // Add this
  // ... rest of code
```

**4. Backend Not Connected**
- Form currently uses mock submission (setTimeout)
- For real submission, connect to your backend/email service
- See `/components/Contact.tsx` line 56

---

## 🎮 AI Health Check Issues

### Symptoms
- Questions don't advance
- Results page doesn't show
- Skill tree doesn't animate

### Solutions

**1. Check State Updates**
- Open browser DevTools
- React DevTools extension helps
- Check `currentQuestion` state

**2. Answer Required**
- Must select an answer before advancing
- Next button disabled until answer selected

**3. Clear Component State**
- Refresh page to reset
- Or add reset button

**4. Check Scores**
```javascript
// In browser console while on results page:
// Should see score object in React DevTools
```

---

## 🖼️ Images Not Loading

### Symptoms
- Broken image icons
- Blank spaces where images should be
- OptimizedImage fallback showing

### Solutions

**1. Check Image Path**
```tsx
// Correct:
<OptimizedImage src="/path/to/image.jpg" alt="Description" />

// Wrong:
<OptimizedImage src="path/to/image.jpg" alt="Description" />
```

**2. Using Unsplash?**
- Check internet connection
- Unsplash may be down
- Try different image search term

**3. Check Public Folder**
- Images should be in `/public` folder
- Access as `/image.jpg` not `/public/image.jpg`

**4. Check Image Format**
- JPG, PNG, WebP supported
- SVG should be imported as component
- Avoid unusual formats

---

## 📱 Mobile Menu Not Opening

### Symptoms
- Hamburger icon clicks but nothing happens
- Menu appears but can't close
- Menu off-screen

### Solutions

**1. Check State**
```javascript
// In App.tsx, check:
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// Should toggle true/false
```

**2. Check Z-Index**
- Mobile menu uses `z-50`
- Should be above everything
- Check in DevTools

**3. Check Viewport**
- Menu only shows on mobile (<768px)
- Try resizing browser
- Or use DevTools device emulation

**4. Check Motion Import**
```javascript
// Verify import at top of MobileMenu.tsx:
import { motion, AnimatePresence } from "motion/react";
```

---

## ⚡ Performance Issues

### Symptoms
- Slow page load
- Laggy animations
- High memory usage

### Solutions

**1. Optimize Images**
- Use WebP format
- Compress large images
- Lazy load with OptimizedImage component

**2. Check Console**
- Look for warnings about performance
- Check for memory leaks
- Use React DevTools Profiler

**3. Reduce Motion**
- If user has `prefers-reduced-motion`
- Animations should be minimal
- Check system settings

**4. Clear Cache**
```bash
# Clear build cache:
rm -rf node_modules/.cache
rm -rf .next
npm run build
```

**5. Check Bundle Size**
- Large dependencies can slow site
- Use bundle analyzer
- Consider lazy loading heavy components

---

## 🎨 Styling Issues

### Symptoms
- Colors wrong
- Layout broken
- Responsive not working

### Solutions

**1. Check Tailwind Classes**
```tsx
// Make sure classes aren't purged
// If custom class not working, add to safelist
```

**2. Check globals.css**
- Open `/styles/globals.css`
- Verify CSS variables loaded
- Check for typos

**3. Clear Tailwind Cache**
```bash
# If styles not updating:
npm run build
# Restart dev server
```

**4. Check Dark Mode**
- Site defaults to dark mode
- Light mode toggle available
- Check `isDark` state in App.tsx

---

## 🔐 Error Boundary Triggered

### Symptoms
- See error boundary fallback UI
- "Something went wrong" message
- Page crashes

### Solutions

**1. Check Console**
- Error boundary logs error to console
- Look for red error messages
- Note the component that crashed

**2. Refresh Page**
- Click "Refresh Page" button
- Most errors are temporary

**3. Clear Storage**
```javascript
localStorage.clear();
sessionStorage.clear();
// Then refresh
```

**4. Check for Infinite Loops**
- Especially in useEffect hooks
- Add dependency arrays
- Check for state updates causing re-renders

**5. Contact Support**
- If error persists
- Copy error message from console
- Note what you were doing when it happened

---

## 🌐 Browser Compatibility

### Symptoms
- Works in Chrome but not Safari
- Features missing in Firefox
- Mobile browser issues

### Solutions

**1. Check Browser Version**
- Requires modern browser
- Chrome 90+, Firefox 88+, Safari 14+
- Update browser if old

**2. Safari Specific**
- Safari can be quirky with backdrop-filter
- Check iOS Safari separately
- May need vendor prefixes

**3. Firefox Specific**
- Some CSS features need flags
- Test in Firefox Developer Edition

**4. Mobile Browsers**
- Test in actual mobile browsers
- Desktop responsive mode ≠ mobile browser
- iOS Safari ≠ Chrome iOS

---

## 📊 Deployment Issues

### Symptoms
- Works locally but not in production
- Build fails
- 404 errors after deploy

### Solutions

**1. Check Build Process**
```bash
# Test build locally:
npm run build
# Should complete without errors
```

**2. Environment Variables**
- Make sure any env vars set in hosting platform
- Check API keys added
- Verify URLs correct

**3. Check Asset Paths**
- Images should use `/image.jpg` not relative paths
- Check public folder deployed
- Verify static assets accessible

**4. Check Redirects**
- Single-page app needs redirect rules
- All routes should go to index.html
- Check hosting platform docs

---

## 🆘 Still Stuck?

### Debug Checklist
1. [ ] Check browser console for errors
2. [ ] Try in incognito/private mode
3. [ ] Test in different browser
4. [ ] Clear all cache/storage
5. [ ] Restart dev server
6. [ ] Check file saved
7. [ ] Verify import paths
8. [ ] Check for typos

### Get Help
- Check `/README.md` for basic setup
- Review `/QUICK_SETUP_GUIDE.md` for configuration
- Read `/IMPLEMENTATION_COMPLETE.md` for feature details
- Check GitHub Issues (if public repo)
- Email: hello@aigency.limited

### Useful Commands
```bash
# Restart dev server
npm run dev

# Clear everything and reinstall
rm -rf node_modules
npm install

# Check for outdated packages
npm outdated

# Update all packages (careful!)
npm update

# Build for production
npm run build

# Check for security issues
npm audit
```

---

## 🔍 Debug Tools

### Browser DevTools
- **Console**: Errors and logs
- **Network**: API calls and loading
- **Elements**: Inspect HTML/CSS
- **React DevTools**: Component state
- **Performance**: Speed issues
- **Application**: localStorage, sessionStorage

### Online Tools
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [WebPageTest](https://www.webpagetest.org/)
- [WAVE Accessibility](https://wave.webaim.org/)
- [GTmetrix](https://gtmetrix.com/)

---

## 💡 Prevention Tips

1. **Test in Multiple Browsers** - Always
2. **Check Mobile** - Real devices when possible
3. **Monitor Console** - Watch for warnings
4. **Version Control** - Use Git
5. **Backup Regularly** - Don't lose work
6. **Document Changes** - Know what you changed
7. **Test Before Deploy** - Build locally first
8. **Keep Dependencies Updated** - But carefully

---

**Most issues have simple fixes. Don't panic!** 🚀

If you've tried everything and still stuck, reach out for help.

Good luck! 💜
