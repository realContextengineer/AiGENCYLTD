# 🗺️ Component Architecture Map

Visual guide to how everything fits together.

---

## 🏗️ App Structure

```
<ErrorBoundary>                           ← Wraps everything (crash protection)
  └── <div className="min-h-screen">
       ├── <SEOHead />                    ← Meta tags, Open Graph
       ├── <Analytics />                  ← 🆕 Google Analytics / Plausible
       ├── <SkipToContent />              ← Accessibility
       ├── <ScrollProgress />             ← Top progress bar
       ├── <AnnouncementBanner />         ← 🆕 Site-wide notifications
       ├── <Navigation />                 ← Desktop menu
       ├── <MobileMenu />                 ← Mobile slide-in menu
       │
       ├── <main id="main-content">       ← Main content area
       │    ├── <Hero />                  ← Landing section
       │    ├── <SocialProofBadges />     ← 🆕 Trust signals
       │    ├── <WhatWeOffer />           ← Services overview
       │    ├── <Stats />                 ← Animated numbers
       │    ├── <About />                 ← Company story
       │    ├── <Services />              ← Detailed services
       │    ├── <Courses />               ← Training catalog
       │    ├── <Testimonials />          ← Client stories
       │    ├── <AIHealthCheck />         ← Gamified assessment
       │    ├── <Insights />              ← Blog section
       │    ├── <FAQ />                   ← Questions
       │    ├── <Newsletter />            ← Email signup
       │    └── <Contact />               ← Form + Calendly
       │         └── <CalendlyWidget />   ← 🆕 Booking widget
       │
       ├── <FooterConversionBanner />     ← Last-chance CTA
       ├── <TrustAuthority />             ← Footer trust section
       ├── <Footer />                     ← Site links
       ├── <BackToTop />                  ← Scroll to top button
       ├── <LiveChat />                   ← 🆕 Floating chat widget
       ├── <ExitIntentPopup />            ← 🆕 Lead magnet popup
       ├── <CookieConsent />              ← 🆕 GDPR banner
       └── <Toaster />                    ← Toast notifications
```

🆕 = New component added in this implementation

---

## 📦 Component Categories

### 1. Layout & Navigation (Always Visible)
```
Navigation (Desktop)
├── Logo
├── Menu Links (Home, About, Services, etc.)
├── CTA Button
└── Theme Toggle

MobileMenu (Mobile)
├── Slide-in Panel
├── Menu Links
└── Close Button

ScrollProgress
└── Progress Bar (top of viewport)
```

---

### 2. Content Sections (Scroll Order)
```
Hero
├── Main Heading
├── Subheading
├── CTA Buttons
└── Background Effects

SocialProofBadges 🆕
├── GDPR Compliant Badge
├── Dorset Based Badge
├── 50+ Clients Badge
└── Local Expertise Badge

WhatWeOffer
├── Section Title
└── 3 Service Cards

Stats
├── 50+ Clients
├── 100% Satisfaction
├── 24/7 Support
└── 5★ Rating

About
├── Company Story
├── Mission Statement
└── Values

Services
├── Service Cards (6)
│   ├── Icon
│   ├── Title
│   ├── Description
│   └── CTA

Courses
├── Course Cards (3)
│   ├── Title
│   ├── Description
│   ├── Price
│   └── Book Button

Testimonials
├── Sophie M. (Poole)
└── Mark L. (Bournemouth)

AIHealthCheck
├── Question Flow
├── Progress Indicator
├── Results Page
└── Skill Tree Animation

Insights (Blog)
├── Article Cards (3)
│   ├── Image
│   ├── Title
│   ├── Excerpt
│   └── Read More

FAQ
├── Accordion Items (6-8)
│   ├── Question
│   └── Answer (expand/collapse)

Newsletter
├── Email Input
├── Subscribe Button
└── Success Message

Contact
├── Contact Form
│   ├── Name Input
│   ├── Email Input
│   ├── Profession Input
│   ├── Message Textarea
│   └── Submit Button
└── CalendlyWidget 🆕
    ├── CTA Button
    └── Consultation Details
```

---

### 3. Footer Elements
```
FooterConversionBanner
├── Heading
├── Description
└── CTA Buttons

TrustAuthority
├── Trust Badges
└── Certifications

Footer
├── Logo
├── Quick Links
├── Contact Info
└── Copyright
```

---

### 4. Floating/Fixed Elements
```
BackToTop
└── Scroll to Top Button (bottom-right)

LiveChat 🆕 (bottom-right)
├── Chat Button
│   ├── Message Icon
│   └── Notification Badge
└── Chat Window (when open)
    ├── Header
    ├── Messages Area
    └── Input Field
```

---

### 5. Overlay/Modal Components
```
MobileMenu
├── Backdrop
└── Slide-in Panel

ExitIntentPopup 🆕
├── Backdrop (dark overlay)
└── Modal
    ├── Icon
    ├── Heading
    ├── Benefits List
    ├── Download Button
    └── Close Button

CookieConsent 🆕
└── Banner (bottom)
    ├── Cookie Icon
    ├── Message
    ├── Accept Button
    └── Decline Button

AnnouncementBanner 🆕
└── Banner (top, below nav)
    ├── Icon
    ├── Message
    ├── CTA Button
    └── Dismiss Button
```

---

### 6. Utility/Infrastructure Components
```
ErrorBoundary 🆕
└── Wraps entire app
    ├── Normal render (when no error)
    └── Error UI (when error caught)
        ├── Error Icon
        ├── Error Message
        ├── Refresh Button
        └── Support Link

Analytics 🆕
└── Invisible (no UI)
    ├── Loads tracking scripts
    └── Provides window.trackEvent()

SEOHead
└── Invisible (no UI)
    ├── Meta tags
    ├── Open Graph
    └── Structured data

SkipToContent
└── Invisible until keyboard focus
    └── Skip link

PageLoader
└── Shows during initial load
    ├── Logo
    └── Loading animation
```

---

### 7. Reusable UI Components (Shadcn)
```
/components/ui/
├── button.tsx
├── input.tsx
├── textarea.tsx
├── label.tsx
├── card.tsx
├── badge.tsx
├── accordion.tsx
├── dialog.tsx
├── sheet.tsx
├── skeleton.tsx
└── [30+ more]
```

---

## 🎨 Styled Component Variants

### Glass Effects
```
.glass                  ← Standard glassmorphism
.glass-strong           ← More opaque
.glass-purple           ← Purple tint
.glass-cyan             ← Cyan tint
.glass-green            ← Green tint
.glass-red              ← Red tint
```

### Shadows
```
.brutalist-shadow       ← Standard 2px shadow
.brutalist-shadow-lg    ← Larger shadow
```

### Borders
```
border-2 border-border              ← Standard
border-2 border-purple-500          ← Purple accent
border-2 border-cyan-500            ← Cyan accent
```

---

## 🔄 State Management

### App.tsx State
```javascript
const [isDark, setIsDark] = useState(true);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [isLoading, setIsLoading] = useState(true);
```

### Component-Level State

**Analytics**
- No state (just loads scripts)

**CookieConsent**
- `showBanner` (boolean)

**LiveChat**
- `isOpen` (boolean)
- `hasNewMessage` (boolean)
- `messages` (array)
- `inputValue` (string)

**ExitIntentPopup**
- `showPopup` (boolean)
- `hasShown` (boolean)

**CalendlyWidget**
- No state (uses Calendly's internal state)

**AnnouncementBanner**
- `isVisible` (boolean)

**Contact**
- `formData` (object)
- `errors` (object)
- `isSubmitting` (boolean)

**AIHealthCheck**
- `currentQuestion` (number)
- `answers` (object)
- `showResults` (boolean)
- `score` (number)

---

## 🎯 Event Flow

### User Actions → Analytics

```
User clicks "Book Consultation"
  ↓
CalendlyWidget opens
  ↓
window.trackEvent("calendly_popup_opened")
  ↓
Analytics (Google/Plausible) logs event
  ↓
Data appears in dashboard
```

### Exit Intent Flow

```
User moves mouse to top of viewport
  ↓
ExitIntentPopup detects mouseleave
  ↓
Wait 100ms
  ↓
Show popup (only if not shown this session)
  ↓
User clicks "Download"
  ↓
window.trackEvent("lead_magnet_downloaded")
  ↓
PDF downloads
  ↓
Popup closes
  ↓
sessionStorage set to prevent re-show
```

### Chat Flow

```
Page loads
  ↓
Wait 10 seconds
  ↓
Show notification badge on chat button
  ↓
User clicks chat button
  ↓
window.trackEvent("chat_opened")
  ↓
Chat window slides in
  ↓
Auto-send welcome message
  ↓
User types and sends message
  ↓
window.trackEvent("chat_message_sent")
  ↓
Bot responds (in demo mode)
```

### Cookie Consent Flow

```
First visit (no stored consent)
  ↓
Wait 2 seconds
  ↓
Show cookie banner
  ↓
User clicks Accept/Decline
  ↓
window.trackEvent("cookie_consent_[accepted/declined]")
  ↓
Store choice in localStorage
  ↓
Hide banner
  ↓
Never show again (until localStorage cleared)
```

---

## 📱 Responsive Breakpoints

```
Mobile:     < 768px
  ├── Mobile menu
  ├── Stacked layouts
  ├── Full-width cards
  └── Bottom sheet chat

Tablet:     768px - 1024px
  ├── Grid layouts (2 cols)
  ├── Larger text
  └── Desktop nav appears

Desktop:    > 1024px
  ├── Grid layouts (3-4 cols)
  ├── Hover effects
  ├── Exit intent popup
  └── Full features
```

---

## 🎨 Color System

```
Primary Brand
├── Purple: #a02dff (buttons, links, accents)
└── Cyan: #00d9ff (secondary accents)

Supporting Colors
├── Green: #00ff94 (success, positive)
└── Red: #ff3737 (errors, alerts)

Base Colors
├── Black: #050505 (backgrounds)
├── White: #ffffff (text)
└── Gray: rgba(255,255,255,0.1-0.9) (glass layers)
```

---

## 🔧 Import Dependencies

### Key Libraries

```javascript
// Animations
import { motion, AnimatePresence, useInView } from "motion/react";

// Icons
import { Icon } from "lucide-react";

// UI Components
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
// ... etc

// Notifications
import { toast } from "sonner@2.0.3";
```

---

## 📊 Data Flow

```
User Interaction
  ↓
Component State Update
  ↓
Re-render (React)
  ↓
Analytics Event (optional)
  ↓
Backend/Service Call (optional)
  ↓
Success/Error Handling
  ↓
Toast Notification (optional)
  ↓
State Update
  ↓
UI Update
```

---

## 🎯 Conversion Funnel Components

```
Entry Points
├── Hero CTA
├── AnnouncementBanner
└── SocialProofBadges

Engagement
├── AIHealthCheck
├── LiveChat
├── Insights (blog)
└── Testimonials

Conversion
├── CalendlyWidget
├── Contact Form
├── Newsletter
└── ExitIntentPopup

Retention
├── Email capture (multiple points)
├── CookieConsent (track returning users)
└── Analytics (measure success)
```

---

## 🔍 Component Hierarchy

```
Depth 0: App.tsx
  │
  ├─ Depth 1: ErrorBoundary
  │   │
  │   ├─ Depth 2: Navigation, Main, Footer
  │   │   │
  │   │   ├─ Depth 3: Hero, Sections, Contact
  │   │   │   │
  │   │   │   └─ Depth 4: CalendlyWidget, Form Inputs
  │   │   │
  │   │   └─ Depth 3: Floating Elements (Chat, Back to Top)
  │   │
  │   └─ Depth 2: Modals (ExitPopup, CookieConsent)
  │
  └─ Depth 1: Utility Components (Analytics, SEOHead)
```

---

## 🎁 Component Features Matrix

| Component | User Facing | Analytics | LocalStorage | SessionStorage | External API |
|-----------|-------------|-----------|--------------|----------------|--------------|
| Analytics | ❌ | ✅ | ❌ | ❌ | ✅ |
| CookieConsent | ✅ | ✅ | ✅ | ❌ | ❌ |
| ErrorBoundary | ⚠️ | ✅ | ❌ | ❌ | ❌ |
| CalendlyWidget | ✅ | ✅ | ❌ | ❌ | ✅ |
| LiveChat | ✅ | ✅ | ✅ | ❌ | ⚠️ |
| ExitIntentPopup | ✅ | ✅ | ❌ | ✅ | ❌ |
| SocialProofBadges | ✅ | ❌ | ❌ | ❌ | ❌ |
| AnnouncementBanner | ✅ | ✅ | ✅ | ❌ | ❌ |
| OptimizedImage | ✅ | ❌ | ❌ | ❌ | ❌ |

Legend:
- ✅ Yes
- ❌ No
- ⚠️ Conditional

---

## 🚀 Load Order & Performance

```
1. HTML Shell                    (0ms)
2. CSS (globals.css)            (50ms)
3. JavaScript Bundle            (100ms)
4. React Hydration              (150ms)
5. Analytics Script             (200ms) - async
6. Calendly Script              (200ms) - async
7. Images (lazy)                (500ms+) - as needed
8. Chat Widget                  (1000ms) - after interaction
```

---

## 💡 Quick Reference

**Need to...**

**Add new section?**
→ Create component in `/components/`
→ Import in `/App.tsx`
→ Add to `<main>` between other sections

**Change colors?**
→ Edit `/styles/globals.css`
→ Update component inline styles

**Track new event?**
→ Call `window.trackEvent("event_name", { data })`

**Add new form?**
→ Use shadcn Input, Button, Label components
→ Follow Contact.tsx pattern

**Modify navigation?**
→ Edit Navigation.tsx and MobileMenu.tsx

**Update meta tags?**
→ Edit SEOHead.tsx

**Change footer?**
→ Edit Footer.tsx

---

**This map shows how everything connects!** 🗺️

Use it as reference when building or debugging.

Built for AIGENCY.LIMITED 💜
