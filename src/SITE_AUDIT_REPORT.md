# 🔍 AIGENCY.LIMITED Site Audit Report

**Date:** October 2025  
**Scope:** Complete content and messaging review  
**Question:** Does it make sense? Where's the bloat?

---

## 🚨 MAJOR ISSUES FOUND

### 1. **CONFUSING POSITIONING** ⚠️⚠️⚠️

**Problem:** The site is schizophrenic about who you are and who you serve.

**Evidence:**
- WhatWeOffer: "therapeutic practice", "trauma-sensitive technology"
- Services: "AI for therapists" language
- About: "hold space for others" (therapy language)
- Hero: "real people and small businesses" (general)
- Footer SEO: "local trades, creatives, small companies" (general)

**The Confusion:**
- Are you for therapists? OR general small businesses?
- Current text mixes both = UNCLEAR VALUE PROP

**Impact:** Visitors don't know if this is for them. Bounce rate likely high.

---

### 2. **MISSING SERVICE** ⚠️⚠️

**Problem:** You offer DESIGN (web, apps, agents, video, media) but it's NOT mentioned anywhere!

**Current Services Listed:**
1. AI Setup & Agent Deployment
2. Training & Coaching  
3. Workflow Design

**Missing:**
4. **DESIGN SERVICES** ← This is a major revenue stream!

**Impact:** Losing clients who need design work. No link to Portfolio.

---

### 3. **REDUNDANT COMPONENTS** ⚠️

**Bloat Found:**

**WhatWeOffer.tsx vs Services.tsx**
- Both show 3 cards
- WhatWeOffer: Training, Consultancy, Community
- Services: Setup, Training, Workflow
- **They overlap but say different things = CONFUSING**

**Recommendation:** Pick ONE or merge them. Don't show two similar grids.

**Features.tsx**
- Not used anywhere (checked all pages)
- DELETE or integrate

---

### 4. **CONTENT INCONSISTENCY** ⚠️

**"Community" Service**
- Mentioned in WhatWeOffer: "reflective network"
- Never explained anywhere else
- No community features visible on site
- **Sounds aspirational, not real**

**Therapeutic Language**
- "hold space", "trauma-sensitive", "therapeutic practice"
- Doesn't match your actual target (trades, small biz)
- Old positioning not updated

---

### 5. **NAVIGATION ISSUES** ⚠️

**Portfolio vs Design**
- Nav says "Portfolio"
- You want to call it "Design"  
- Current Portfolio page = empty placeholder
- **Doesn't reflect your design services**

---

## ✅ WHAT'S WORKING WELL

### Strong Points:
1. **Visual Design** - Brutalist aesthetic is cohesive and memorable
2. **Courses Section** - Clear tiers, good pricing structure
3. **Contact/Lead Capture** - Multiple conversion points
4. **Local SEO** - Good Bournemouth/Dorset targeting
5. **Technical Implementation** - Clean code, responsive, performant

---

## 📋 RECOMMENDATIONS

### CRITICAL (Do These First)

**1. Fix Positioning - Pick Your Audience**

**Option A: General Small Business (RECOMMENDED)**
- Remove all therapy/therapeutic language
- Focus: "AI for small businesses, trades, freelancers in Dorset"
- Services: Setup, Training, Workflow, **Design**

**Option B: Therapists Only**
- Keep therapeutic language
- But you said you're pivoting away from this
- Not recommended based on your context

**2. Add Design Services**

Update Services to 4 cards:
1. **AI Setup & Integration**
2. **Design (Web, Apps, Agents, Media)**  ← NEW
3. **Training & Courses**
4. **Consultancy & Workflow**

**3. Merge WhatWeOffer + Services**

Current: Two similar sections confuse visitors

**Solution:** 
- Keep Services.tsx (more detailed)
- Delete or repurpose WhatWeOffer
- OR: Make WhatWeOffer the quick overview, Services the deep dive

---

### HIGH PRIORITY

**4. Rename Portfolio → Design**
- Update navigation
- Build out Design page with galleries:
  - Web Design
  - App Design  
  - Agent Design
  - Media/Video
- Emphasize "designed using AI"

**5. Remove "Community" Service**
- Not developed yet
- Confuses value prop
- Add back when it's real

**6. Consistent Language**
- Remove: "therapeutic", "hold space", "trauma-sensitive"
- Use: "practical", "small business", "local", "hands-on"
- Target: Trades, freelancers, small teams

---

### MEDIUM PRIORITY

**7. Simplify Hero**
- Currently 3 paragraphs = too long
- Reduce to: Headline + 1 clear paragraph + CTAs

**8. Delete Features.tsx**
- Not used
- Bloat in codebase

**9. Update About Section**
- Current: Too focused on therapists
- New: Your story, why Dorset, why AI + design

---

## 📊 CONTENT ARCHITECTURE

### Current (Messy)
```
Home
  - Hero (general)
  - Social Proof
  - WhatWeOffer (therapy-focused)
  - Testimonials
  - Newsletter

Services
  - Services cards (therapy language)
  - Stats
  
About
  - About (therapy-focused)
  - Stats
  - Testimonials
```

### Recommended (Clear)
```
Home
  - Hero (clear positioning: small biz AI + design)
  - Social Proof
  - 4 Service Cards (Setup, Design, Training, Consulting)
  - Testimonials
  - Newsletter

Services  
  - Deep dive into all 4 services
  - Process/workflow
  - Stats
  
About
  - Your story
  - Why Dorset
  - Team/expertise
  - Values

Design (was Portfolio)
  - Web gallery
  - App gallery
  - Agent gallery  
  - Media gallery
  - "Designed using AI" messaging
```

---

## 🎯 MESSAGING FRAMEWORK

### Current Problems:
- "Ethical AI for the Human Mind" ← Too abstract
- "therapeutic practice" ← Wrong audience
- "Community" ← Not real yet

### Recommended Messages:

**Headline:**
"AI Setup, Design & Training for Dorset Businesses"

**Subheadline:**
"We help small businesses, trades and freelancers in Bournemouth integrate AI and build beautiful digital products. From ChatGPT setup to custom web design—all powered by AI."

**Services:**
1. **AI Setup & Integration** - Get AI working for your business
2. **Design Services** - Websites, apps, agents, media (designed with AI)
3. **Training & Courses** - Learn to use AI confidently  
4. **Consultancy** - Strategy and workflow optimization

**Tagline:**
"Local AI expertise + world-class design"

---

## 🗑️ WHAT TO DELETE

### Files/Components:
- [ ] `/components/Features.tsx` - Not used
- [ ] Old Navigation components (keep for backup but not needed)
- [ ] AppRouter.tsx (duplicate, already deleted)

### Content to Remove:
- [ ] All "therapeutic" language
- [ ] "Community" service (until it exists)
- [ ] "trauma-sensitive" references
- [ ] "hold space" language
- [ ] Overly abstract positioning

---

## ✏️ WHAT TO UPDATE

### Components Needing Text Changes:
1. **Hero.tsx** - New headline, simplified copy
2. **WhatWeOffer.tsx** - Remove OR update to 4 services
3. **Services.tsx** - Add Design service, remove therapy language
4. **About.tsx** - Remove therapy focus, add design expertise
5. **PortfolioPage.tsx** - Rename to DesignPage, add galleries
6. **NavigationRouter.tsx** - Change "Portfolio" to "Design"
7. **FooterRouter.tsx** - Update nav links

---

## 💡 COMPETITIVE POSITIONING

### What Makes You Different:
1. **Local** - Bournemouth based, serve Dorset
2. **Dual Expertise** - AI + Design (rare combo)
3. **Practical** - Setup + training, not just consulting
4. **Small Biz Focus** - Not enterprise, not individuals only
5. **AI-Powered Design** - Use AI to design faster/better

### This Should Be Front and Center:
"We're the only Dorset agency offering AI integration AND AI-powered design services."

---

## 🎨 DESIGN PAGE STRUCTURE

### Galleries Needed:

**1. Web Design**
- Responsive websites
- Landing pages
- E-commerce
- *All designed using AI tools*

**2. App Design**  
- Mobile apps
- Web apps
- Progressive web apps
- *AI-assisted design process*

**3. Agent Design**
- Custom AI agents
- Chatbots
- Automation tools
- *AI building AI*

**4. Media & Video**
- Brand videos
- Explainer videos
- Social media content
- *AI-generated and edited*

---

## 📈 EXPECTED IMPACT

### If You Implement These Changes:

**Clearer Value Prop** → Higher conversion rate
**Design Services Visible** → New revenue stream
**Removed Bloat** → Faster load, clearer message
**Portfolio → Design** → Better positioning
**Consistent Language** → Professional appearance

**Estimated Conversion Increase:** 20-40%
**Estimated Bounce Rate Decrease:** 15-25%

---

## 🚀 ACTION PLAN

### Phase 1: Critical (Today)
1. Update Services to include Design
2. Change Portfolio → Design in navigation
3. Remove therapy language from Hero, About

### Phase 2: High Priority (This Week)  
1. Build out Design page with galleries
2. Merge or remove WhatWeOffer
3. Update all component text for consistency

### Phase 3: Polish (Next Week)
1. Delete unused components
2. Optimize hero copy
3. Update SEO for new positioning

---

## ✅ DECISION MATRIX

**Keep:**
- ✅ Visual design (brutalist aesthetic)
- ✅ Courses structure (3 tiers)
- ✅ Contact/lead capture
- ✅ Local SEO focus
- ✅ Multi-page structure
- ✅ AI Health Check

**Remove:**
- ❌ Therapy/therapeutic language
- ❌ Community service (for now)
- ❌ Redundant components
- ❌ Abstract positioning

**Add:**
- ➕ Design services (major!)
- ➕ Design page with galleries
- ➕ "AI-powered design" messaging
- ➕ Clearer target audience

**Update:**
- 🔄 Hero messaging
- 🔄 About section
- 🔄 Services section
- 🔄 Navigation labels

---

## 🎯 SUMMARY

### The Honest Truth:

**BLOAT:** Yes, some redundancy (WhatWeOffer vs Services)

**CONFUSION:** Yes, therapy vs. small business mixed messaging

**MISSING:** Design services not mentioned at all!

**SOLUTION:** 
1. Pick audience (small business)
2. Add design service
3. Simplify redundant sections
4. Build Design page
5. Update all copy for consistency

**TIME TO FIX:** ~3-4 hours for critical updates

**RESULT:** Clear, professional site that actually reflects what you do

---

**Bottom Line:** Good bones, needs content alignment. You're offering 4 services but only showing 3. Your best differentiator (AI + Design) is hidden. Fix this and you'll convert way better.

Ready to implement fixes?
