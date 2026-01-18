import { useParams, Link, useNavigate } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookmarkPlus, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { SEOHead } from "../components/SEOHead";
import { useEffect } from "react";
import { motion } from "motion/react";

// Category-specific color system (same as BlogPage)
const categoryColors: Record<string, { glass: string; text: string; glow: string }> = {
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

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4">Post Not Found</h1>
          <p className="opacity-70 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (
      p.category === post.category || 
      p.tags.some(tag => post.tags.includes(tag))
    ))
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share failed', err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <SEOHead
        title={`${post.title} | AIGENCY Blog`}
        description={post.excerpt}
        keywords={`${post.tags.join(", ")}, AI Bournemouth, AI Dorset, ${post.category}`}
        ogImage={post.image}
        url={`https://aigency.limited/blog/${post.slug}`}
      />
      
      <div className="min-h-screen pt-24 pb-20">
        {/* Breadcrumb */}
      <div className="px-6 mb-8">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-sm opacity-70">
            <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:opacity-100 transition-opacity">Blog</Link>
            <span>/</span>
            <span className="opacity-50">{post.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Image with Tinted Glass Overlay */}
      <div className="px-6 mb-12">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[21/9] overflow-hidden" style={{ borderRadius: "16px" }}>
            {/* Background Image */}
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            
            {/* Dark gradient overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)",
              }}
            />

            {/* Base glass layer */}
            <div 
              className="absolute inset-0"
              style={{
                background: "rgba(10,10,15,0.4)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                boxShadow: "inset 0 0 25px rgba(0,0,0,0.4)",
              }}
            />

            {/* Category-specific tinted glass (subtle) */}
            {(() => {
              const colors = categoryColors[post.category] || categoryColors["AI"];
              return (
                <div 
                  className="absolute inset-0"
                  style={{
                    background: colors.glass.replace(/0\.\d+\)/, "0.15)"),
                    borderRadius: "16px",
                  }}
                />
              );
            })()}
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {(() => {
                const colors = categoryColors[post.category] || categoryColors["AI"];
                return (
                  <Badge 
                    className="text-sm px-4 py-1.5"
                    style={{ 
                      background: colors.glass,
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: colors.text,
                      backdropFilter: "blur(8px)",
                      fontWeight: 600,
                    }}
                  >
                    {post.category}
                  </Badge>
                );
              })()}
              
              <div className="flex items-center gap-2 text-sm opacity-70">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>

              <div className="flex items-center gap-2 text-sm opacity-70">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>

            <h1 className="mb-6 tracking-tight" style={{ letterSpacing: "-0.02em" }}>
              {post.title}
            </h1>

            <p className="text-xl opacity-80 mb-8">
              {post.excerpt}
            </p>

            {/* Author & Actions */}
            <div className="flex items-center justify-between pb-8 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-12 h-12 rounded-full border-2 border-white/10"
                />
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm opacity-60">AIGENCY Team</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleShare}
                  className="rounded-full border-white/10"
                  title="Share article"
                >
                  <Share2 className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-white/10"
                  title="Bookmark"
                >
                  <BookmarkPlus className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none mb-12"
            style={{
              lineHeight: "1.8",
            }}
          >
            {post.content.split('\n').map((paragraph, index) => {
              // Handle headings
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 
                    key={index} 
                    className="mt-12 mb-6 tracking-tight"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 
                    key={index} 
                    className="mt-8 mb-4"
                  >
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              
              // Handle bold text
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="mb-4">
                    <strong>{paragraph.replace(/\*\*/g, '')}</strong>
                  </p>
                );
              }

              // Handle list items
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="ml-6 mb-2 opacity-80">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }

              if (paragraph.match(/^\d+\. /)) {
                return (
                  <li key={index} className="ml-6 mb-2 opacity-80">
                    {paragraph.replace(/^\d+\. /, '')}
                  </li>
                );
              }

              // Regular paragraphs
              if (paragraph.trim()) {
                return (
                  <p key={index} className="mb-6 opacity-80">
                    {paragraph}
                  </p>
                );
              }

              return null;
            })}
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 flex-wrap mb-12 pb-12 border-b border-white/10">
            <Tag className="w-5 h-5 opacity-60" />
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="glass border-white/10 hover:border-white/20 transition-colors cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* CTA */}
          <div 
            className="glass border-2 rounded-2xl p-8 mb-16 text-center"
            style={{
              borderColor: "var(--spectral-green)",
              background: "rgba(77, 255, 136, 0.03)",
            }}
          >
            <h3 className="mb-3">Ready to Get Started?</h3>
            <p className="opacity-80 mb-6 max-w-2xl mx-auto">
              Let's discuss how AI can transform your business. Book a free consultation with our team.
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

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2 className="mb-8 tracking-tight">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => {
                  const colors = categoryColors[relatedPost.category] || categoryColors["AI"];
                  
                  return (
                    <motion.div
                      key={relatedPost.id}
                      className="relative"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Universal background gradient */}
                      <div 
                        className="absolute inset-0 rounded-2xl -z-10"
                        style={{
                          background: "linear-gradient(180deg, rgba(10,10,15,0) 0%, rgba(40,20,70,0.35) 100%)",
                        }}
                      />
                      
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        className="group block overflow-hidden transition-all duration-500"
                        onClick={() => window.scrollTo(0, 0)}
                        style={{
                          borderRadius: "16px",
                        }}
                      >
                        {/* Image with Tinted Glass Overlay */}
                        <div 
                          className="relative aspect-video overflow-hidden"
                          style={{
                            borderRadius: "16px 16px 0 0",
                          }}
                        >
                          {/* Background Image */}
                          <div className="absolute inset-0">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
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

                          {/* Category Badge */}
                          <div className="absolute top-3 left-3">
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
                              {relatedPost.category}
                            </Badge>
                          </div>

                          {/* Title on Image */}
                          <div className="absolute bottom-3 left-3 right-3">
                            <h4 
                              className="line-clamp-2 group-hover:translate-y-[-2px] transition-transform duration-500"
                              style={{
                                color: "#F9F9F9",
                                fontWeight: 600,
                                textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                              }}
                            >
                              {relatedPost.title}
                            </h4>
                          </div>
                        </div>
                        
                        {/* Bottom Info Card */}
                        <div 
                          className="p-4 transition-all duration-500"
                          style={{
                            background: "rgba(10, 10, 15, 0.9)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderTop: "none",
                            borderRadius: "0 0 16px 16px",
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <span 
                              className="text-xs"
                              style={{
                                color: colors.text,
                                opacity: 0.85,
                              }}
                            >
                              {relatedPost.readTime}
                            </span>
                            <motion.div
                              className="w-7 h-7 rounded-lg flex items-center justify-center"
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
            </div>
          )}

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Button
              variant="outline"
              onClick={() => navigate('/blog')}
              className="border-white/20"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Articles
            </Button>
          </div>
        </div>
      </article>
    </div>
    </>
  );
}
