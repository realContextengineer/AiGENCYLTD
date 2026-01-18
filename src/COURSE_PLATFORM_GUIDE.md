# 🎓 Course Platform Strategy Guide

Should you build a custom backend or use external platforms? Here's everything you need to decide.

---

## 🤔 The Big Question

**Build Custom Backend vs External Platform**

| Approach | Time | Cost | Control | Best For |
|----------|------|------|---------|----------|
| **Custom Backend** | 2-4 weeks | Free-£20/mo | 100% | Unique features, brand control |
| **External Platform** | 1-2 days | £29-79/mo | 60% | Quick launch, proven UX |
| **Hybrid** | 1 week | £20-40/mo | 80% | Best of both |

---

## 📊 Decision Framework

### Choose CUSTOM BACKEND if:
- ✅ You want unique gamification (like your AI Health Check)
- ✅ Full brand control matters
- ✅ You're comfortable with code
- ✅ You want to own all data
- ✅ You plan to heavily customize
- ✅ Budget is tight (free tier options)

### Choose EXTERNAL PLATFORM if:
- ✅ You want to launch ASAP (days not weeks)
- ✅ You prefer proven, tested UX
- ✅ You want video hosting included
- ✅ You need payment processing ready
- ✅ You want mobile apps included
- ✅ Support/updates handled for you

### Choose HYBRID if:
- ✅ You want quick launch + future flexibility
- ✅ Course content on platform, marketing on your site
- ✅ Best user experience for students
- ✅ Professional appearance without heavy dev

---

## 🏗️ Option 1: Custom Backend (Recommended for You)

### Why This Fits AIGENCY.LIMITED

You already have:
- ✅ Gamified AI Health Check (proves you can build engaging UX)
- ✅ Beautiful brutalist design system
- ✅ Developer-friendly setup
- ✅ Supabase knowledge (from contact forms)

**You can build something unique that matches your brand.**

### Architecture

```
Your Site (aigency.limited)
├── Public Pages (marketing) - Already built ✅
├── Course Catalog - List of courses
├── Login/Signup - Supabase Auth
└── Student Dashboard
    ├── My Courses
    ├── Course Player (videos + materials)
    ├── Progress Tracking
    ├── Certificates
    └── Skill Trees (like Health Check!)
```

### Tech Stack

**Already Have:**
- React + TypeScript ✅
- Tailwind CSS ✅
- Supabase (for backend) ✅
- Motion (for animations) ✅

**Need to Add:**
- Video hosting (Vimeo or Mux)
- Payment processing (Stripe)
- PDF viewer
- Progress tracking

### Database Schema

```sql
-- Users (Supabase Auth handles this)

-- Courses
CREATE TABLE courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  thumbnail_url TEXT,
  difficulty TEXT,
  duration_hours INTEGER,
  is_published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Course Modules
CREATE TABLE modules (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  course_id UUID REFERENCES courses(id),
  title TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Lessons
CREATE TABLE lessons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  module_id UUID REFERENCES modules(id),
  title TEXT NOT NULL,
  content TEXT, -- Markdown or rich text
  video_url TEXT,
  duration_minutes INTEGER,
  order_index INTEGER NOT NULL,
  is_free BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Student Progress
CREATE TABLE student_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  lesson_id UUID REFERENCES lessons(id),
  completed BOOLEAN DEFAULT false,
  last_position INTEGER, -- Video timestamp
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, lesson_id)
);

-- Enrollments
CREATE TABLE enrollments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  course_id UUID REFERENCES courses(id),
  enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE,
  payment_status TEXT DEFAULT 'pending',
  stripe_payment_id TEXT,
  UNIQUE(user_id, course_id)
);

-- Certificates
CREATE TABLE certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  course_id UUID REFERENCES courses(id),
  issued_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  certificate_url TEXT,
  UNIQUE(user_id, course_id)
);
```

### Features You Can Build

**Phase 1 (MVP - 2 weeks):**
- [ ] Course catalog page
- [ ] Course detail page
- [ ] Simple auth (email/password)
- [ ] Video player (embed Vimeo)
- [ ] Progress tracking
- [ ] Basic payment (Stripe Checkout)

**Phase 2 (Enhanced - 1 week):**
- [ ] Student dashboard
- [ ] Module/lesson navigation
- [ ] Downloadable resources
- [ ] Quiz system
- [ ] Certificate generation

**Phase 3 (Gamified - 1 week):**
- [ ] Skill trees (like Health Check)
- [ ] Achievements/badges
- [ ] Progress animations
- [ ] Leaderboards (if group courses)
- [ ] Completion animations

### Video Hosting Options

**Vimeo Pro (£15/mo)**
- ✅ 5TB/year storage
- ✅ No Vimeo branding
- ✅ Privacy controls
- ✅ Embed player
- ✅ Analytics included

**Mux (Pay as you go)**
- ✅ £0.005 per minute streamed
- ✅ High quality
- ✅ Better analytics
- ✅ API-first
- ❌ More complex setup

**YouTube Unlisted (Free)**
- ✅ Free forever
- ✅ Reliable
- ❌ YouTube branding
- ❌ Less professional
- ❌ Limited privacy

**Recommendation: Vimeo Pro** - Best balance of quality, price, and professionalism.

### Payment Integration

**Stripe (Easiest)**
```typescript
// Install
npm install @stripe/stripe-js

// Create checkout session
const handlePurchase = async (courseId: string, price: number) => {
  const response = await fetch('/api/create-checkout', {
    method: 'POST',
    body: JSON.stringify({ courseId, price })
  });
  
  const { sessionId } = await response.json();
  
  // Redirect to Stripe Checkout
  const stripe = await loadStripe('pk_live_...');
  await stripe.redirectToCheckout({ sessionId });
};
```

### Cost Estimate (Custom Backend)

| Service | Cost | Purpose |
|---------|------|---------|
| Supabase | Free-£20/mo | Database, auth, storage |
| Vimeo Pro | £15/mo | Video hosting |
| Stripe | 2.9% + 30p | Payment processing |
| Netlify | Free | Hosting (already using) |
| **Total** | **£15-35/mo** | Plus Stripe fees |

---

## 🛠️ Option 2: External Platforms

### A. Teachable (£29-119/mo)

**Pros:**
- ✅ Everything included (hosting, payment, emails)
- ✅ Proven course player
- ✅ Mobile app ready
- ✅ Built-in marketing tools
- ✅ Launch in 1-2 days
- ✅ Student management

**Cons:**
- ❌ Monthly fee
- ❌ Transaction fees (5% on basic plan)
- ❌ Limited customization
- ❌ Teachable branding (basic plan)
- ❌ Doesn't match your aesthetic

**Good for:** Quick launch, traditional courses

### B. Kajabi (£119-319/mo)

**Pros:**
- ✅ All-in-one (courses, marketing, email)
- ✅ Beautiful templates
- ✅ No transaction fees
- ✅ Email marketing included
- ✅ Automation built-in

**Cons:**
- ❌ Expensive
- ❌ Overkill for starting out
- ❌ Learning curve

**Good for:** Established businesses, comprehensive needs

### C. Podia (£29-79/mo)

**Pros:**
- ✅ Clean, simple interface
- ✅ No transaction fees
- ✅ Downloads + memberships
- ✅ Email marketing included
- ✅ Affordable

**Cons:**
- ❌ Less customization
- ❌ Basic analytics
- ❌ Doesn't match your brand

**Good for:** Simple courses, quick launch

### D. Thinkific (Free-£79/mo)

**Pros:**
- ✅ Free plan available!
- ✅ Unlimited courses/students
- ✅ Custom branding
- ✅ Good course builder

**Cons:**
- ❌ Transaction fees on free plan (10%)
- ❌ Limited features on free tier
- ❌ Separate from your site

**Good for:** Testing, starting out

---

## 🎯 Option 3: HYBRID (Best of Both)

### Strategy: Marketing Site + Embedded Platform

**Your Site (aigency.limited):**
- Course catalog
- Marketing pages
- Blog (AI Insights)
- Lead capture
- Your beautiful design ✅

**External Platform:**
- Course player
- Video hosting
- Payment processing
- Student management
- Progress tracking

### How It Works

1. **Student Journey:**
   - Browse courses on your site
   - Click "Enrol Now"
   - Seamless redirect to Thinkific/Teachable
   - Access course content there
   - Return to your site for more courses

2. **Implementation:**
```typescript
// On your course page
<Button onClick={() => {
  // Track in analytics
  window.trackEvent('course_enrol_clicked', { 
    course: 'AI Fundamentals' 
  });
  
  // Redirect to external platform
  window.location.href = 'https://aigency.thinkific.com/courses/ai-fundamentals';
}}>
  Enrol Now - £97
</Button>
```

3. **Branding:**
   - Use Thinkific custom domain: `learn.aigency.limited`
   - Match colors and fonts
   - Add your logo
   - Hide platform branding (paid plans)

### Cost: £29-79/mo

**Pros:**
- ✅ Quick launch (1-2 days)
- ✅ Keep your beautiful site
- ✅ Proven course UX
- ✅ Payment handling done
- ✅ Can migrate to custom later

**Cons:**
- ❌ Monthly cost
- ❌ Two separate systems
- ❌ Less integrated

---

## 💡 Recommendation for AIGENCY.LIMITED

### Start Hybrid, Move to Custom

**Phase 1 (Month 1-3): Hybrid Approach**
- Use Thinkific free plan or Podia £29/mo
- Create 1-2 courses
- Market through your site
- Validate demand
- Learn what students need

**Phase 2 (Month 4-6): Build Custom**
- You know what works now
- Build custom course platform
- Migrate students over
- Add unique features (skill trees!)
- Full brand control

**Phase 3 (Month 7+): Enhance**
- Gamification
- AI-powered recommendations
- Unique Dorset/Bournemouth features
- Community features

### Why This Works

1. **Validate first** - Don't build if no one buys
2. **Learn fast** - See what students actually use
3. **Keep momentum** - Launch courses ASAP
4. **Build better** - Know exactly what to build
5. **Save money** - Don't pay platform fees forever

---

## 🏗️ Building Custom: Step-by-Step

If you decide to build custom from day one:

### Week 1: Setup & Auth
- [ ] Set up Supabase tables
- [ ] Add authentication (email/password)
- [ ] Create login/signup pages
- [ ] Build basic dashboard

### Week 2: Course Content
- [ ] Create course catalog page
- [ ] Build course detail page
- [ ] Add module/lesson structure
- [ ] Implement video player (Vimeo embed)

### Week 3: Progress & Payment
- [ ] Progress tracking
- [ ] Stripe integration
- [ ] Enrollment system
- [ ] Access control

### Week 4: Polish & Launch
- [ ] Certificate generation
- [ ] Email notifications
- [ ] Mobile optimization
- [ ] Testing
- [ ] Launch! 🚀

### Components You'll Need

**1. Course Catalog**
```typescript
// /components/CourseCatalog.tsx
export function CourseCatalog() {
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    loadCourses();
  }, []);
  
  const loadCourses = async () => {
    const { data } = await supabase
      .from('courses')
      .select('*')
      .eq('is_published', true);
    setCourses(data);
  };
  
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
```

**2. Video Player**
```typescript
// /components/VideoPlayer.tsx
export function VideoPlayer({ videoUrl, onProgress }: VideoPlayerProps) {
  return (
    <div className="aspect-video glass-strong rounded-2xl overflow-hidden">
      <iframe
        src={videoUrl}
        allow="autoplay; fullscreen"
        className="w-full h-full"
        onTimeUpdate={handleProgress}
      />
    </div>
  );
}
```

**3. Progress Tracker**
```typescript
// Track lesson completion
const markComplete = async (lessonId: string) => {
  await supabase
    .from('student_progress')
    .upsert({
      user_id: user.id,
      lesson_id: lessonId,
      completed: true,
      completed_at: new Date().toISOString()
    });
  
  // Trigger celebration animation!
  celebrateCompletion();
};
```

---

## 📊 Feature Comparison

| Feature | Custom | Teachable | Thinkific | Hybrid |
|---------|--------|-----------|-----------|--------|
| **Launch Time** | 2-4 weeks | 1-2 days | 1-2 days | 1-2 days |
| **Monthly Cost** | £15-35 | £29-119 | £0-79 | £29-79 |
| **Transaction Fees** | 2.9% (Stripe) | 5-0% | 10-0% | 5-0% |
| **Brand Control** | 100% | 60% | 70% | 80% |
| **Custom Features** | ✅ Yes | ❌ No | ❌ Limited | ⚠️ Later |
| **Mobile App** | Build it | ✅ Included | ✅ Included | ✅ Included |
| **Support** | You! | ✅ Yes | ✅ Yes | ✅ Yes |
| **Scalability** | ✅ Unlimited | ✅ Good | ✅ Good | ✅ Good |

---

## ✅ Final Recommendation

**For AIGENCY.LIMITED, I recommend:**

### Option: Start Hybrid → Migrate to Custom

**Immediate (This Week):**
1. Sign up for Thinkific (free plan)
2. Create your first course
3. Link from your site
4. Start selling
5. Validate demand

**Short-term (3-6 months):**
1. Build custom platform
2. Add unique features:
   - Skill trees (like Health Check)
   - Dorset-specific content
   - Gamified progress
   - Your brutalist design
3. Migrate students
4. Cancel Thinkific

**Why:**
- ✅ Launch fast (this week!)
- ✅ Learn what works
- ✅ Generate revenue immediately
- ✅ Build exactly what you need later
- ✅ Keep full control long-term

**Total Cost:**
- **Months 1-3:** £0-29/mo (Thinkific)
- **Month 4+:** £15-35/mo (Custom backend)
- **Savings:** No platform fees forever

---

## 🚀 Action Plan

**Today:**
- [ ] Decide: Custom, Platform, or Hybrid
- [ ] Read this guide again
- [ ] Consider your timeline

**This Week:**
- [ ] Set up chosen platform
- [ ] Create first course outline
- [ ] Film/prepare first lesson
- [ ] Test payment flow

**This Month:**
- [ ] Launch first course
- [ ] Market to Bournemouth/Poole businesses
- [ ] Gather feedback
- [ ] Iterate

**Long-term:**
- [ ] Expand course catalog
- [ ] Add advanced features
- [ ] Build community
- [ ] Scale!

---

Need help deciding? Consider:
- **Speed to market:** Hybrid
- **Budget:** Custom
- **Simplicity:** Platform
- **Uniqueness:** Custom
- **Best overall:** Hybrid → Custom

Good luck! 🎓🚀
