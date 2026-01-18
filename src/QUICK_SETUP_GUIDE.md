# ⚡ Quick Setup Guide - Get Everything Live in 30 Minutes

This guide will get your new features up and running FAST. Follow in order.

---

## 🎯 Step 1: Analytics (5 minutes)

### Option A: Google Analytics (Free)
1. Go to [analytics.google.com](https://analytics.google.com)
2. Create account → Add property → Get measurement ID (looks like `G-XXXXXXXXXX`)
3. Open `/components/Analytics.tsx`
4. Find line 14, uncomment the Google Analytics section
5. Replace `G-XXXXXXXXXX` with your real ID
6. Save and deploy

### Option B: Plausible (Privacy-focused)
1. Go to [plausible.io](https://plausible.io) 
2. Sign up (€9/month after trial)
3. Add your domain `aigency.limited`
4. Open `/components/Analytics.tsx`
5. Find line 28, uncomment the Plausible section
6. Change `data-domain` to your actual domain
7. Save and deploy

**Test it works:**
- Visit your site
- Check Analytics dashboard (wait 5-10 mins)
- Should see your visit logged

---

## 📅 Step 2: Calendly (10 minutes)

1. **Sign up** at [calendly.com](https://calendly.com) (free plan works fine)

2. **Create event:**
   - Event name: "15-Minute AI Consultation"
   - Duration: 15 minutes
   - Location: Phone call or Zoom
   - Description: "Quick chat about how AI can help your Bournemouth/Poole business"

3. **Get your link:**
   - Will look like: `https://calendly.com/yourusername/consultation`
   - Copy it!

4. **Update your site:**
   - Open `/components/CalendlyWidget.tsx`
   - Line 28: Replace `YOUR_CALENDLY_USERNAME` with your actual username
   - Save

5. **Add widget script (optional):**
   The component auto-loads it, but if you want faster loading, add to your HTML `<head>`:
   ```html
   <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
   ```

**Test it works:**
- Go to Contact section
- Click "Book Free Consultation"
- Should open Calendly popup
- Try booking a test appointment

**Pro tip:** Set up email reminders so people don't forget!

---

## 💬 Step 3: Live Chat (10 minutes)

### Recommended: Tawk.to (Free Forever)

1. **Sign up** at [tawk.to](https://tawk.to)

2. **Add property:**
   - Property name: AIGENCY.LIMITED
   - Website URL: your domain

3. **Get widget code:**
   - Dashboard → Administration → Channels → Chat Widget
   - Copy the code snippet

4. **Replace demo chat:**
   
   **Easy way:** Just paste Tawk.to script in your HTML `<head>` and hide the demo chat:
   - Open `/App.tsx`
   - Comment out line with `<LiveChat />` (put `{/* <LiveChat /> */}`)
   - Add Tawk.to script to your HTML
   
   **OR keep the demo** for now and switch to real chat later!

5. **Customize:**
   - Change widget color to `#a02dff` (your purple)
   - Set your availability hours
   - Add canned responses for common questions

**Test it works:**
- Widget should appear bottom right
- Try sending a test message
- Reply from Tawk.to dashboard

**Other options:**
- **Crisp** (crisp.chat) - £25/month, nice middle ground
- **Intercom** (intercom.com) - £59/month, full-featured
- **Drift** (drift.com) - Sales-focused, pricier

---

## 📄 Step 4: Lead Magnet PDF (Varies)

You need to create "AI Starter Guide for Dorset Businesses" PDF.

### Quick Content Ideas:
1. **Page 1:** What is AI? (Plain English)
2. **Page 2:** 5 Ways Dorset Businesses Use AI
3. **Page 3:** Quick Win #1 - ChatGPT for customer emails
4. **Page 4:** Quick Win #2 - AI scheduling tools
5. **Page 5:** Quick Win #3 - Automated social posts
6. **Page 6:** When to get help (CTA to book consultation)

### Tools to Create It:
- **Canva** (easiest) - Use a report template
- **Google Docs** → Export as PDF
- **Microsoft Word** → Save as PDF
- **Figma** → Export PDF

### Where to Host It:
- **Your server** - Upload to `/public/ai-starter-guide.pdf`
- **Google Drive** - Share as public link
- **Gumroad** - Free tier, tracks downloads

### Connect to Site:
1. Open `/components/ExitIntentPopup.tsx`
2. Find `handleDownload` function (line 53)
3. Replace the alert with:
   ```javascript
   const link = document.createElement('a');
   link.href = '/ai-starter-guide.pdf'; // or your hosted URL
   link.download = 'AI-Starter-Guide-Dorset-Businesses.pdf';
   link.click();
   ```

**Test it works:**
- Move mouse to close browser tab (triggers popup)
- Click download button
- PDF should download

---

## 🍪 Step 5: Cookie Consent (Already Done!)

Your cookie consent is already live and working. No setup needed! 🎉

**Behavior:**
- Shows after 2 seconds on first visit
- Stores choice in localStorage
- Respects user privacy
- GDPR/PECR compliant

**Want to customize the text?**
Edit `/components/CookieConsent.tsx` line 73-77.

---

## ✅ Final Checklist

Before you go live, test everything:

- [ ] Analytics tracking (visit site, check dashboard)
- [ ] Calendly booking (click button, try to book)
- [ ] Live chat (send test message)
- [ ] Exit popup (move mouse to close tab)
- [ ] PDF download (click download in popup)
- [ ] Cookie consent (clear localStorage, refresh)
- [ ] Mobile experience (test on phone)
- [ ] Contact form (send test message)
- [ ] All links work
- [ ] No console errors

---

## 🎨 Customization Options

### Change Colors
All components use your color scheme:
- Purple: `#a02dff`
- Cyan: `#00d9ff`
- Green: `#00ff94`
- Red: `#ff3737`

To change, just edit the `style={{ color: "..." }}` in each component.

### Change Text
Everything uses natural UK English and mentions Bournemouth/Poole/Dorset. Feel free to edit any text!

### Change Timing
- **Cookie consent delay:** Line 16 in `CookieConsent.tsx` (currently 2000ms = 2 seconds)
- **Chat greeting delay:** Line 15 in `LiveChat.tsx` (currently 10000ms = 10 seconds)
- **Exit popup sensitivity:** Already optimized, but tweak in `ExitIntentPopup.tsx`

---

## 📊 What Gets Tracked Automatically

Once analytics is set up, these events auto-track:

| Event | What It Means |
|-------|---------------|
| `cookie_consent_accepted` | User accepted cookies |
| `cookie_consent_declined` | User declined cookies |
| `calendly_popup_opened` | User clicked book consultation |
| `chat_opened` | User opened chat widget |
| `chat_message_sent` | User sent a chat message |
| `exit_intent_triggered` | Exit popup shown |
| `lead_magnet_downloaded` | PDF downloaded |
| `error_boundary_triggered` | Site error caught (hopefully never!) |

Check your analytics dashboard to see these events roll in! 📈

---

## 🚨 Troubleshooting

### "Calendly is not defined" error
The script hasn't loaded yet. Either:
1. Add the script tag to your HTML head
2. Wait a second before clicking (script loads async)

### Chat widget not showing
Using Tawk.to script? Make sure you:
1. Commented out `<LiveChat />` in App.tsx
2. Added Tawk.to script to HTML head
3. Widget is enabled in Tawk.to dashboard

### Exit popup not triggering
1. Only works on desktop (mouse detection)
2. Only shows once per session
3. Clear sessionStorage: `sessionStorage.clear()` in console

### Analytics not tracking
1. Wait 24-48 hours for data
2. Check ad blockers aren't blocking
3. Verify tracking ID is correct
4. Check browser console for errors

---

## 💡 Pro Tips

1. **Respond to chats fast** - Within 5 mins is ideal
2. **Keep Calendly simple** - 15 mins is perfect
3. **Update lead magnet** - Keep it fresh with new tips
4. **Check analytics weekly** - Learn what's working
5. **A/B test your CTAs** - Try different button text
6. **Follow up emails** - Don't let leads go cold
7. **Local SEO** - Mention Bournemouth/Poole everywhere
8. **Collect testimonials** - After every happy client

---

## 🎉 You're Done!

Your AIGENCY.LIMITED site is now a conversion machine:

✅ **Tracking** - Know exactly what's working
✅ **Booking** - Easy consultation scheduling  
✅ **Engagement** - Live chat keeps visitors around
✅ **Lead Capture** - Exit popup saves abandoning visitors
✅ **Trust** - Social proof badges build credibility
✅ **Compliant** - GDPR-ready cookie consent

**Now go get those Dorset businesses using AI!** 🚀

---

Need help? Got questions? Just shout! 💜
