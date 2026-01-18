# 🔧 Supabase & Netlify Integration Guide

Complete guide to deploying AIGENCY.LIMITED with backend functionality.

---

## 📊 Quick Decision Matrix

| Need | Solution | Why |
|------|----------|-----|
| **Contact form storage** | Supabase | Free, real-time, easy |
| **Newsletter signups** | Supabase | Better than email services |
| **Analytics** | Already integrated | Google Analytics/Plausible |
| **Hosting** | Netlify | Free, fast, auto-deploy |
| **Course materials** | See below ⬇️ | Depends on complexity |

---

## 🚀 Part 1: Netlify Deployment (Free)

### Why Netlify?
- ✅ Free hosting
- ✅ Automatic deployments from Git
- ✅ CDN included
- ✅ HTTPS by default
- ✅ Easy custom domains
- ✅ Serverless functions support

### Step-by-Step Setup

**1. Prepare Your Code**
```bash
# Make sure everything builds locally first
npm run build

# Should complete without errors
```

**2. Sign Up for Netlify**
- Go to [netlify.com](https://netlify.com)
- Sign up with GitHub (easiest)

**3. Deploy**

**Option A: Drag & Drop (Quick Test)**
1. Run `npm run build`
2. Drag the `dist` or `build` folder to Netlify
3. Site goes live instantly!

**Option B: Git Integration (Recommended)**
1. Push your code to GitHub
2. In Netlify: "New site from Git"
3. Choose your repo
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist` (or `build`)
5. Click "Deploy"

**4. Custom Domain**
1. Go to "Domain settings"
2. Add custom domain: `aigency.limited`
3. Follow DNS instructions
4. SSL auto-enabled ✅

**5. Environment Variables**
If you add Supabase:
1. Go to "Site settings" → "Environment variables"
2. Add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

---

## 🗄️ Part 2: Supabase Backend (Free Tier)

### Why Supabase?
- ✅ Free tier: 500MB database, 2GB bandwidth
- ✅ Real-time capabilities
- ✅ Built-in authentication
- ✅ SQL database (PostgreSQL)
- ✅ Auto-generated APIs
- ✅ Dashboard included

### What You Should Store in Supabase

**Recommended:**
1. **Contact form submissions** ✅
2. **Newsletter subscribers** ✅
3. **AI Health Check results** ✅
4. **Blog posts** ✅
5. **User accounts** (if needed)

**Not Recommended:**
- Large files (use Cloudflare R2 or AWS S3)
- Real-time chat messages (use dedicated chat service)

### Step-by-Step Setup

**1. Create Supabase Project**
- Go to [supabase.com](https://supabase.com)
- Create account
- "New Project"
- Choose region (London for UK)
- Set strong database password
- Wait ~2 minutes for setup

**2. Create Database Tables**

Go to SQL Editor and run:

```sql
-- Contact Form Submissions
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  profession TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  notes TEXT
);

-- Newsletter Subscribers
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'active',
  source TEXT
);

-- AI Health Check Results
CREATE TABLE health_check_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  email TEXT,
  score INTEGER NOT NULL,
  answers JSONB NOT NULL,
  recommendations TEXT[]
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE health_check_results ENABLE ROW LEVEL SECURITY;

-- Allow INSERT from anyone (anon key)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can submit health check"
  ON health_check_results FOR INSERT
  TO anon
  WITH CHECK (true);
```

**3. Get API Keys**
- Go to "Project Settings" → "API"
- Copy:
  - **Project URL** (like `https://xxxxx.supabase.co`)
  - **Anon/Public Key** (safe to use in frontend)

**4. Install Supabase Client**
```bash
npm install @supabase/supabase-js
```

**5. Create Supabase Client**

Create `/lib/supabase.ts`:
```typescript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

**6. Create `.env.local`**
```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

**7. Update Contact Form**

Edit `/components/Contact.tsx`:
```typescript
import { supabase } from '../lib/supabase';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!validateForm()) {
    toast.error("Please fix the errors in the form");
    return;
  }

  setIsSubmitting(true);

  try {
    // Save to Supabase
    const { error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          profession: formData.profession,
          message: formData.message
        }
      ]);

    if (error) throw error;

    toast.success("Message sent! We'll get back to you soon.", {
      description: "Thank you for your interest in AIGENCY.LIMITED",
    });
    
    setFormData({ name: "", email: "", profession: "", message: "" });
    setErrors({});
    
    // Track in analytics
    if ((window as any).trackEvent) {
      (window as any).trackEvent("contact_form_submitted");
    }
  } catch (error) {
    console.error('Error:', error);
    toast.error("Something went wrong. Please try again or email us directly.");
  } finally {
    setIsSubmitting(false);
  }
};
```

**8. Update Newsletter**

Edit `/components/Newsletter.tsx` similarly:
```typescript
const { error } = await supabase
  .from('newsletter_subscribers')
  .insert([{ email: emailValue, source: 'website' }]);
```

**9. View Submissions**

In Supabase Dashboard:
- Go to "Table Editor"
- Click "contact_submissions"
- See all form submissions in real-time!

---

## 📧 Email Notifications (Optional)

### Option 1: Supabase Edge Functions (Free)
Send email when form submitted:

```typescript
// supabase/functions/send-email/index.ts
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';

serve(async (req) => {
  const { name, email, message } = await req.json();
  
  // Use Resend, SendGrid, or any email service
  // Send notification to hello@aigency.limited
  
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  });
});
```

### Option 2: Netlify Functions
Create `/netlify/functions/send-email.ts`:
```typescript
import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  // Parse form data
  const data = JSON.parse(event.body || '{}');
  
  // Send email using your preferred service
  // (Resend, SendGrid, Postmark, etc.)
  
  return {
    statusCode: 200,
    body: JSON.stringify({ success: true })
  };
};
```

### Option 3: Email Services
Use existing integrations:
- **Formspree** - Dead simple, £0-8/mo
- **Getform** - Easy setup
- **EmailJS** - Free tier available

---

## 🔐 Security Best Practices

**1. Environment Variables**
- ✅ Never commit `.env` files
- ✅ Use Netlify environment variables
- ✅ Rotate keys if exposed

**2. Row Level Security**
- ✅ Already enabled in SQL above
- ✅ Only allow INSERT from public
- ✅ READ/UPDATE/DELETE require auth

**3. Rate Limiting**
Add to Supabase Edge Function:
```typescript
// Check if email submitted recently
const recentSubmissions = await supabase
  .from('contact_submissions')
  .select('created_at')
  .eq('email', email)
  .gte('created_at', new Date(Date.now() - 3600000).toISOString());

if (recentSubmissions.data && recentSubmissions.data.length > 0) {
  return new Response('Too many requests', { status: 429 });
}
```

---

## 💰 Cost Breakdown

### Free Tier (Totally Free)
- **Netlify**: 100GB bandwidth/month, 300 build mins
- **Supabase**: 500MB database, 2GB bandwidth
- **Total**: £0/month

**Good for**: 1,000-5,000 visitors/month

### Paid Tier (If You Grow)
- **Netlify Pro**: £15/mo (better analytics, more bandwidth)
- **Supabase Pro**: £20/mo (8GB database, better support)
- **Total**: £35/month

**Good for**: 50,000+ visitors/month

---

## 🚀 Deployment Checklist

### Pre-Deploy
- [ ] `npm run build` works locally
- [ ] All environment variables listed
- [ ] Supabase tables created
- [ ] RLS policies enabled
- [ ] Contact form tested locally

### Netlify Deploy
- [ ] GitHub repo created
- [ ] Connected to Netlify
- [ ] Build settings configured
- [ ] Environment variables added
- [ ] Deploy successful
- [ ] Custom domain added
- [ ] SSL enabled

### Supabase Setup
- [ ] Project created
- [ ] Database tables created
- [ ] RLS policies enabled
- [ ] API keys copied
- [ ] Added to Netlify env vars
- [ ] Test submission works

### Post-Deploy
- [ ] Test contact form
- [ ] Test newsletter signup
- [ ] Check Supabase dashboard for data
- [ ] Verify email notifications (if setup)
- [ ] Test on mobile
- [ ] Check analytics tracking

---

## 🐛 Common Issues

**Build fails on Netlify**
- Check Node version: Add `.nvmrc` with `18` or `20`
- Check build command matches local
- Look at deploy logs for errors

**Supabase connection fails**
- Check environment variables are set
- Verify URL and key are correct
- Check RLS policies allow INSERT

**Forms submit but no data in Supabase**
- Check browser console for errors
- Verify table names match
- Check RLS policies

---

## 📚 Resources

**Netlify:**
- [Netlify Docs](https://docs.netlify.com)
- [Deploy from Git](https://docs.netlify.com/site-deploys/create-deploys/)

**Supabase:**
- [Supabase Docs](https://supabase.com/docs)
- [JavaScript Client](https://supabase.com/docs/reference/javascript)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

---

## ✅ Recommended Setup for AIGENCY.LIMITED

**Phase 1: Deploy (Today)**
1. Deploy to Netlify (30 mins)
2. Add custom domain
3. Verify site works

**Phase 2: Add Backend (This Week)**
1. Create Supabase project (10 mins)
2. Set up tables (10 mins)
3. Connect contact form (20 mins)
4. Connect newsletter (10 mins)
5. Test everything (15 mins)

**Phase 3: Enhance (Later)**
1. Add email notifications
2. Create admin dashboard (view submissions)
3. Add user authentication (if needed)
4. Implement course backend (see next section)

---

**Total time to deploy with backend: ~2 hours**

You'll have a professional, scalable site that can handle thousands of visitors! 🚀
