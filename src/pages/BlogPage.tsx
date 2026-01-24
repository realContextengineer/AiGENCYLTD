import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts, categories } from "../data/blogPosts";
import { Search, Calendar, Clock, Tag, ArrowRight, Sparkles, BookOpen } from "lucide-react";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { SEOHead } from "../components/SEOHead";
import { motion } from "motion/react";

// Category-specific color system
const categoryColors = {
  "AI": {
    glass: "rgba(115, 185, 255, 0.35)",
    text: "#7BC9FF",
    glow: "rgba(115, 185, 255, 0.4)",
  },
  "Human in the Loop": {
    glass: "rgba(180, 255, 210, 0.35)",
    text: "#9DFFBE",
    glow: "rgba(180, 255, 210, 0.4)",
  },
  "Psychology": {
    glass: "rgba(255, 160, 180, 0.4)",
    text: "#FFA3B3",
    glow: "rgba(255, 160, 180, 0.5)",
  },
  "Trauma & Recovery": {
    glass: "rgba(255, 120, 150, 0.45)",
    text: "#FF7D9A",
    glow: "rgba(255, 120, 150, 0.5)",
  },
  "Philosophy": {
    glass: "rgba(180, 150, 255, 0.4)",
    text: "#C5A7FF",
    glow: "rgba(180, 150, 255, 0.5)",
  },
  "Design": {
    glass: "rgba(255, 220, 160, 0.4)",
    text: "#FFD98F",
    glow: "rgba(255, 220, 160, 0.5)",
  },
  "Tools": {
    glass: "rgba(120, 255, 220, 0.35)",
    text: "#88FFE0",
    glow: "rgba(120, 255, 220, 0.4)",
  },
  "Case Studies": {
    glass: "rgba(255, 190, 130, 0.35)",
    text: "#FFC693",
    glow: "rgba(255, 190, 130, 0.4)",
  },
  "Business": {
    glass: "rgba(110, 255, 190, 0.35)",
    text: "#84FFBE",
    glow: "rgba(110, 255, 190, 0.4)",
  },
  "Education": {
    glass: "rgba(120, 180, 255, 0.35)",
    text: "#8EB8FF",
    glow: "rgba(120, 180, 255, 0.4)",
  },
  "Local": {
    glass: "rgba(255, 230, 170, 0.35)",
    text: "#FFE599",
    glow: "rgba(255, 230, 170, 0.4)",
  },
};

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredPosts = blogPosts.filter(post => post.featured);
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const recentPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 5);

  return (
    <>
      <SEOHead
        title="AI Blog Bournemouth | Web Apps, Agents & Design Insights | Poole Dorset AI Tips"
        description="AI web design, agents & apps blog for Bournemouth businesses. Free AI tools, ChatGPT guides, automation tips for Poole & Dorset SMEs. Real case studies from local companies."
        keywords="AI blog Bournemouth, AI web design tips Poole, AI agents guide Dorset, free AI tools for small business, ChatGPT tutorials Bournemouth, AI automation case studies Dorset, AI for Bournemouth businesses, web app development blog Poole, AI marketing Christchurch, AI insights Dorset, Bournemouth AI meet-up, Dorset AI community, AI business tips BCP"
        url="https://www.aigency.ltd/blog"
      />
      
      <div className="min-h-screen pt-24 pb-20">
        {/* Cinematic Hero Section */}
        <section className="relative min-h-[85vh] flex items-center justify-center px-6 pt-20 pb-32 overflow-hidden mb-20">
          {/* Radial gradient background with motion */}
          <div className="absolute inset-0 opacity-30">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(ellipse at 20% 30%, rgba(139, 140, 255, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(0, 240, 160, 0.2) 0%, transparent 50%)",
                  "radial-gradient(ellipse at 60% 50%, rgba(0, 240, 160, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 30% 80%, rgba(139, 140, 255, 0.2) 0%, transparent 50%)",
                  "radial-gradient(ellipse at 80% 20%, rgba(139, 140, 255, 0.2) 0%, transparent 50%), radial-gradient(ellipse at 20% 60%, rgba(0, 240, 160, 0.25) 0%, transparent 50%)",
                  "radial-gradient(ellipse at 20% 30%, rgba(139, 140, 255, 0.25) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(0, 240, 160, 0.2) 0%, transparent 50%)",
                ],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Particle noise */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(60)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-0.5 h-0.5 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: i % 2 === 0 ? "#8B8CFF" : "#00F0A0",
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.1, 0.5, 0.1],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-10 relative z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Floating Book Icon */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="relative"
                animate={{
                  y: [0, -15, 0],
                  rotateY: [0, 5, 0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Aura pulse behind icon */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(130, 255, 220, 0.4) 0%, transparent 70%)",
                    filter: "blur(30px)",
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Icon container */}
                <div
                  className="relative w-32 h-32 rounded-3xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(139, 140, 255, 0.15), rgba(0, 240, 160, 0.15))",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 0 60px rgba(130, 255, 220, 0.4), inset 0 0 20px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  {/* Book icon with gradient */}
                  <svg 
                    className="w-16 h-16"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="bookGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#8B8CFF" />
                        <stop offset="100%" stopColor="#00F0A0" />
                      </linearGradient>
                    </defs>
                    {/* Open book shape */}
                    <path 
                      d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20M4 19.5V6.5A2.5 2.5 0 0 1 6.5 4H20v13M20 17v5" 
                      stroke="url(#bookGradient)" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                    <path 
                      d="M12 4v13M12 17v5" 
                      stroke="url(#bookGradient)" 
                      strokeWidth="2" 
                      strokeLinecap="round"
                    />
                    {/* Pages lines */}
                    <path 
                      d="M8 8h2M8 11h2M8 14h2" 
                      stroke="url(#bookGradient)" 
                      strokeWidth="1.5" 
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                    <path 
                      d="M14 8h2M14 11h2M14 14h2" 
                      stroke="url(#bookGradient)" 
                      strokeWidth="1.5" 
                      strokeLinecap="round"
                      opacity="0.6"
                    />
                  </svg>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: "linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%)",
                    }}
                    animate={{
                      x: [-100, 200],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      repeatDelay: 1,
                    }}
                  />
                </div>

                {/* Orbiting particles */}
                {[0, 120, 240].map((angle, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full"
                    style={{
                      background: i === 0 ? "#8B8CFF" : i === 1 ? "#00F0A0" : "#7BC9FF",
                      boxShadow: `0 0 10px ${i === 0 ? "#8B8CFF" : i === 1 ? "#00F0A0" : "#7BC9FF"}`,
                    }}
                    animate={{
                      x: [
                        Math.cos((angle * Math.PI) / 180) * 80,
                        Math.cos(((angle + 360) * Math.PI) / 180) * 80,
                      ],
                      y: [
                        Math.sin((angle * Math.PI) / 180) * 80,
                        Math.sin(((angle + 360) * Math.PI) / 180) * 80,
                      ],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Headline */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 
                className="tracking-tight"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, #C5A7FF 0%, #88FFE0 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                AI Insights & Local Stories
              </h1>
              
              <p 
                className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Human stories, real experiments, and practical lessons from Dorset's AI frontier.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 justify-center pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button
                size="lg"
                onClick={() => document.getElementById('blog-grid')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: "linear-gradient(135deg, #8B8CFF 0%, #00F0A0 100%)",
                  color: "#0A0812",
                  fontWeight: 600,
                }}
              >
                Browse Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20"
                  style={{
                    backdropFilter: "blur(10px)",
                    background: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  Submit a Story
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              className="max-w-xl mx-auto relative pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
              <Input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 glass border-white/10 text-base"
                style={{
                  backdropFilter: "blur(20px)",
                  background: "rgba(10, 10, 15, 0.6)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Wave divider at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
            <svg
              className="absolute bottom-0 w-full h-full"
              viewBox="0 0 1440 100"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(40, 20, 70, 0.3)" />
                  <stop offset="100%" stopColor="rgba(5, 5, 5, 0)" />
                </linearGradient>
              </defs>
              <path
                d="M0,20 Q360,60 720,40 T1440,20 L1440,100 L0,100 Z"
                fill="url(#waveGradient)"
              />
            </svg>
          </div>
        </section>

      {/* Featured Posts */}
      {!searchQuery && selectedCategory === "All" && (
        <section id="blog-grid" className="px-6 mb-20 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <motion.div 
                className="w-1 h-8 rounded-full"
                style={{ 
                  background: "linear-gradient(180deg, #8B8CFF 0%, #00F0A0 100%)",
                }}
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(139, 140, 255, 0.5)",
                    "0 0 20px rgba(0, 240, 160, 0.5)",
                    "0 0 10px rgba(139, 140, 255, 0.5)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <h2 className="tracking-tight">Featured Articles</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {featuredPosts.map((post, idx) => {
                const colors = categoryColors[post.category] || categoryColors["AI"];
                
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="relative"
                  >
                    {/* Universal background gradient */}
                    <div 
                      className="absolute inset-0 rounded-2xl -z-10"
                      style={{
                        background: "linear-gradient(180deg, rgba(10,10,15,0) 0%, rgba(40,20,70,0.35) 100%)",
                      }}
                    />
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group block overflow-hidden transition-all duration-500"
                      style={{
                        borderRadius: "16px",
                      }}
                    >
                      {/* Image Container with Tinted Glass Overlay */}
                      <div 
                        className="relative aspect-video overflow-hidden transition-all duration-500 group-hover:-translate-y-0.5"
                        style={{
                          borderRadius: "16px",
                        }}
                      >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                        </div>

                        {/* Dark gradient overlay (top to bottom) */}
                        <div 
                          className="absolute inset-0"
                          style={{
                            background: "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.45) 100%)",
                          }}
                        />

                        {/* Base glass layer */}
                        <div 
                          className="absolute inset-0 transition-all duration-500"
                          style={{
                            background: "rgba(10,10,15,0.65)",
                            backdropFilter: "blur(20px)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: "16px",
                            boxShadow: "inset 0 0 25px rgba(0,0,0,0.6)",
                          }}
                        />

                        {/* Category-specific tinted glass */}
                        <div 
                          className="absolute inset-0 transition-all duration-500"
                          style={{
                            background: colors.glass,
                            borderRadius: "16px",
                          }}
                        />

                        {/* Hover brightness boost */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                          style={{
                            background: colors.glass.replace(/0\.\d+\)/, (match) => {
                              const opacity = parseFloat(match.replace(/[()]/g, ""));
                              return `${Math.min(opacity + 0.1, 0.9)})`;
                            }),
                            borderRadius: "16px",
                          }}
                        />

                        {/* Content on Image */}
                        <div className="absolute inset-0 flex flex-col justify-between p-6">
                          {/* Top: Category & Read Time */}
                          <div className="flex items-start justify-between">
                            <Badge 
                              className="text-xs px-3 py-1.5 transition-all duration-300"
                              style={{ 
                                background: colors.glass,
                                border: "1px solid rgba(255,255,255,0.15)",
                                color: colors.text,
                                backdropFilter: "blur(8px)",
                                textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                                fontWeight: 600,
                              }}
                            >
                              {post.category}
                            </Badge>
                            <span 
                              className="text-xs px-3 py-1.5 rounded-lg"
                              style={{
                                background: "rgba(10,10,15,0.5)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                color: colors.text,
                                opacity: 0.85,
                                backdropFilter: "blur(8px)",
                                textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                              }}
                            >
                              {post.readTime}
                            </span>
                          </div>

                          {/* Bottom: Title & Meta */}
                          <div>
                            <h3 
                              className="mb-3 group-hover:translate-y-[-2px] transition-transform duration-500"
                              style={{
                                color: "#F9F9F9",
                                fontWeight: 600,
                                textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                              }}
                            >
                              {post.title}
                            </h3>

                            {/* Excerpt */}
                            <p 
                              className="text-sm mb-4 line-clamp-2 hidden md:block"
                              style={{
                                color: colors.text,
                                opacity: 0.85,
                                textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                              }}
                            >
                              {post.excerpt}
                            </p>

                            {/* Author & Date */}
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <img
                                  src={post.author.avatar}
                                  alt={post.author.name}
                                  className="w-8 h-8 rounded-full"
                                  style={{
                                    border: `2px solid ${colors.text}40`,
                                  }}
                                />
                                <div>
                                  <p 
                                    className="text-sm"
                                    style={{ 
                                      color: "#F9F9F9",
                                      fontWeight: 600,
                                      textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                                    }}
                                  >
                                    {post.author.name}
                                  </p>
                                  <p 
                                    className="text-xs"
                                    style={{ 
                                      color: colors.text,
                                      opacity: 0.85,
                                      textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                                    }}
                                  >
                                    {post.date}
                                  </p>
                                </div>
                              </div>

                              <motion.div
                                className="w-10 h-10 rounded-lg flex items-center justify-center"
                                style={{
                                  background: "rgba(10,10,15,0.5)",
                                  border: "1px solid rgba(255,255,255,0.1)",
                                  backdropFilter: "blur(8px)",
                                }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <ArrowRight 
                                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                                  style={{ color: colors.text }}
                                />
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        {/* Hover outer glow */}
                        <div 
                          className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                          style={{
                            background: `radial-gradient(circle at center, ${colors.glow}, transparent 70%)`,
                            filter: "blur(24px)",
                            borderRadius: "20px",
                          }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Categories */}
              <div className="glass border border-white/10 rounded-2xl p-6">
                <h3 className="mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5" style={{ color: "var(--spectral-green)" }} />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                        selectedCategory === category
                          ? "glass border border-white/20"
                          : "hover:bg-white/5"
                      }`}
                      style={{
                        background: selectedCategory === category 
                          ? "rgba(77, 255, 136, 0.05)" 
                          : "transparent",
                        borderColor: selectedCategory === category 
                          ? "var(--spectral-green)" 
                          : "transparent",
                      }}
                    >
                      {category}
                      <span className="ml-2 text-xs opacity-60">
                        ({category === "All" 
                          ? blogPosts.length 
                          : blogPosts.filter(p => p.category === category).length})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="glass border border-white/10 rounded-2xl p-6">
                <h3 className="mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5" style={{ color: "var(--spectral-blue)" }} />
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.slug}`}
                      className="block group"
                    >
                      <p className="text-sm mb-1 group-hover:opacity-70 transition-opacity">
                        {post.title}
                      </p>
                      <div className="flex items-center gap-2 text-xs opacity-60">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Newsletter CTA */}
              <div 
                className="glass border-2 rounded-2xl p-6 text-center"
                style={{
                  borderColor: "var(--spectral-violet)",
                  background: "rgba(160, 45, 255, 0.05)",
                }}
              >
                <Sparkles className="w-10 h-10 mx-auto mb-3" style={{ color: "var(--spectral-violet)" }} />
                <h3 className="mb-2">Stay Updated</h3>
                <p className="text-sm opacity-80 mb-4">
                  Get weekly AI insights delivered to your inbox
                </p>
                <Link to="/contact">
                  <Button 
                    className="w-full"
                    style={{
                      background: "var(--spectral-violet)",
                      color: "var(--background)",
                    }}
                  >
                    Subscribe
                  </Button>
                </Link>
              </div>
            </aside>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="tracking-tight">
                  {selectedCategory === "All" ? "All Articles" : selectedCategory}
                </h2>
                <p className="opacity-60">
                  {filteredPosts.length} {filteredPosts.length === 1 ? "article" : "articles"}
                </p>
              </div>

              {filteredPosts.length === 0 ? (
                <div className="text-center py-20 glass border border-white/10 rounded-2xl">
                  <Search className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <h3 className="mb-2">No articles found</h3>
                  <p className="opacity-60">Try adjusting your search or filters</p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All");
                    }}
                    className="mt-6"
                  >
                    Clear Filters
                  </Button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPosts.map((post, idx) => {
                    const colors = categoryColors[post.category] || categoryColors["AI"];
                    
                    return (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        className="relative"
                      >
                        {/* Universal background gradient */}
                        <div 
                          className="absolute inset-0 rounded-2xl -z-10"
                          style={{
                            background: "linear-gradient(180deg, rgba(10,10,15,0) 0%, rgba(40,20,70,0.35) 100%)",
                          }}
                        />
                        
                        <Link
                          to={`/blog/${post.slug}`}
                          className="group block overflow-hidden transition-all duration-500"
                          style={{
                            borderRadius: "16px",
                          }}
                        >
                          {/* Image Container with Tinted Glass */}
                          <div 
                            className="relative aspect-video overflow-hidden transition-all duration-500 group-hover:-translate-y-0.5"
                            style={{
                              borderRadius: "16px 16px 0 0",
                            }}
                          >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                            </div>

                            {/* Dark gradient overlay */}
                            <div 
                              className="absolute inset-0"
                              style={{
                                background: "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.45) 100%)",
                              }}
                            />

                            {/* Base glass layer */}
                            <div 
                              className="absolute inset-0 transition-all duration-500"
                              style={{
                                background: "rgba(10,10,15,0.65)",
                                backdropFilter: "blur(20px)",
                                border: "1px solid rgba(255,255,255,0.08)",
                                borderRadius: "16px 16px 0 0",
                                boxShadow: "inset 0 0 25px rgba(0,0,0,0.6)",
                              }}
                            />

                            {/* Category-specific tinted glass */}
                            <div 
                              className="absolute inset-0 transition-all duration-500"
                              style={{
                                background: colors.glass,
                                borderRadius: "16px 16px 0 0",
                              }}
                            />

                            {/* Hover brightness boost */}
                            <div 
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                              style={{
                                background: colors.glass.replace(/0\.\d+\)/, (match) => {
                                  const opacity = parseFloat(match.replace(/[()]/g, ""));
                                  return `${Math.min(opacity + 0.1, 0.9)})`;
                                }),
                                borderRadius: "16px 16px 0 0",
                              }}
                            />

                            {/* Category & Read Time */}
                            <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                              <Badge 
                                className="text-xs px-3 py-1.5"
                                style={{ 
                                  background: colors.glass,
                                  border: "1px solid rgba(255,255,255,0.15)",
                                  color: colors.text,
                                  backdropFilter: "blur(8px)",
                                  textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                                  fontWeight: 600,
                                }}
                              >
                                {post.category}
                              </Badge>
                              <span 
                                className="text-xs px-3 py-1.5 rounded-lg"
                                style={{
                                  background: "rgba(10,10,15,0.5)",
                                  border: "1px solid rgba(255,255,255,0.1)",
                                  color: colors.text,
                                  opacity: 0.85,
                                  backdropFilter: "blur(8px)",
                                  textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                                }}
                              >
                                {post.readTime}
                              </span>
                            </div>

                            {/* Title on Image */}
                            <div className="absolute bottom-4 left-4 right-4">
                              <h3 
                                className="group-hover:translate-y-[-2px] transition-transform duration-500"
                                style={{
                                  color: "#F9F9F9",
                                  fontWeight: 600,
                                  textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                                }}
                              >
                                {post.title}
                              </h3>
                            </div>
                          </div>
                          
                          {/* Bottom Content Card */}
                          <div 
                            className="p-5 transition-all duration-500"
                            style={{
                              background: "rgba(10, 10, 15, 0.9)",
                              border: "1px solid rgba(255,255,255,0.08)",
                              borderTop: "none",
                              borderRadius: "0 0 16px 16px",
                            }}
                          >
                            <p 
                              className="mb-4 text-sm line-clamp-2"
                              style={{
                                color: colors.text,
                                opacity: 0.85,
                                textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                              }}
                            >
                              {post.excerpt}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                              {post.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs px-2 py-1 rounded-md transition-colors duration-300"
                                  style={{
                                    background: "rgba(255, 255, 255, 0.03)",
                                    border: "1px solid rgba(255, 255, 255, 0.08)",
                                    color: colors.text,
                                    opacity: 0.7,
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                              <div className="flex items-center gap-2">
                                <Calendar 
                                  className="w-4 h-4" 
                                  style={{ color: colors.text, opacity: 0.6 }}
                                />
                                <span 
                                  className="text-xs"
                                  style={{ color: colors.text, opacity: 0.85 }}
                                >
                                  {post.date}
                                </span>
                              </div>

                              <motion.div
                                className="w-8 h-8 rounded-lg flex items-center justify-center"
                                style={{
                                  background: "rgba(10,10,15,0.5)",
                                  border: "1px solid rgba(255,255,255,0.1)",
                                }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <ArrowRight 
                                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                                  style={{ color: colors.text }}
                                />
                              </motion.div>
                            </div>
                          </div>

                          {/* Hover outer glow */}
                          <div 
                            className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                            style={{
                              background: `radial-gradient(circle at center, ${colors.glow}, transparent 70%)`,
                              filter: "blur(24px)",
                              borderRadius: "20px",
                            }}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 mt-20">
        <div className="max-w-4xl mx-auto glass border-2 rounded-3xl p-12 text-center"
          style={{
            borderColor: "var(--spectral-green)",
            background: "rgba(77, 255, 136, 0.03)",
          }}
        >
          <h2 className="mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl opacity-80 mb-8">
            Book a free consultation and discover how AI can help your Bournemouth business thrive
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/ai-health-check">
              <Button
                size="lg"
                style={{
                  background: "var(--spectral-green)",
                  color: "var(--background)",
                }}
              >
                Take AI Health Check
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
