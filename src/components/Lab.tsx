import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Download, 
  Sparkles, 
  Users, 
  Calendar, 
  FileText, 
  Lightbulb, 
  Bot,
  Heart,
  Award,
  Crown,
  CheckCircle2,
  ArrowRight,
  Wrench,
  GraduationCap,
  HandshakeIcon,
  Search,
  Filter,
  ShoppingBag,
  Zap,
  BookOpen,
  Layers,
  Code,
  FlaskConical,
  ChevronLeft,
  ChevronRight,
  Star,
  Lock,
  Info,
  TrendingDown,
  Linkedin,
  Twitter,
  Github
} from "lucide-react";
import { Input } from "./ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

// Marketplace item type
type MarketplaceItem = {
  id: string;
  icon: any;
  emoji?: string;
  title: string;
  description: string;
  category: string;
  label: "Free" | "Pro" | "Professional" | "Coming Soon";
  labelColor: string;
  buttonText: string;
  featured?: boolean;
  onAction?: () => void;
  link?: string;
};

export function Lab() {
  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      <HeroSection />
      <MarketplaceSection />
      <FeaturedCarousel />
      <MembershipTiersSection />
      <ResourceLibrary />
      <FooterCTA />
    </div>
  );
}

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Parallax effect
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[85vh] flex items-center justify-center px-6 pt-32 pb-32 overflow-hidden"
    >
      {/* Aurora wave background */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, transparent 0%, rgba(155, 92, 255, 0.3) 30%, rgba(80, 250, 123, 0.2) 60%, transparent 100%)",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "0% 100%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Animated circuits/particles background */}
      <motion.div className="absolute inset-0 opacity-15" style={{ y: useTransform(scrollY, [0, 500], [0, 100]) }}>
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? "#9B5CFF" : i % 3 === 1 ? "#50FA7B" : "#2da8ff",
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
        
        {/* Circuit lines */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-px"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${10 + i * 12}%`,
              width: "100px",
              background: "linear-gradient(90deg, transparent, #9B5CFF50, transparent)",
            }}
            animate={{
              x: [-100, window.innerWidth],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "linear",
            }}
          />
        ))}
      </motion.div>

      {/* Gradient orbs with parallax */}
      <motion.div className="absolute inset-0 pointer-events-none opacity-25" style={{ y: useTransform(scrollY, [0, 500], [0, -50]) }}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "#9B5CFF" }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "#50FA7B" }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.15, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto text-center space-y-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8 }}
      >
        {/* Icon with pulse */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div
              className="w-28 h-28 rounded-3xl flex items-center justify-center relative"
              style={{
                background: "linear-gradient(135deg, rgba(155, 92, 255, 0.2), rgba(80, 250, 123, 0.2))",
                boxShadow: "0 8px 40px rgba(155, 92, 255, 0.4)",
              }}
            >
              <FlaskConical className="w-14 h-14" style={{ color: "#9B5CFF" }} />
            </div>
            {/* Pulsing rings */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2"
              style={{ borderColor: "#9B5CFF" }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          </div>
        </motion.div>

        <motion.h1
          className="tracking-wide"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            letterSpacing: "0.02em",
            lineHeight: "1.2",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Welcome to{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #9B5CFF 0%, #50FA7B 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            The Lab
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Where AI Meets Human Insight
        </motion.p>

        <motion.p
          className="text-lg opacity-80 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          A living marketplace of tools and experiments built to keep humans in the loop.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a href="#marketplace" className="w-full sm:w-auto">
            <Button
              className="px-10 py-7 rounded-xl transition-all duration-300 w-full inline-flex items-center gap-3"
              style={{
                background: "linear-gradient(135deg, #9B5CFF 0%, #50FA7B 100%)",
                border: "none",
                color: "#000",
                boxShadow: "0 8px 40px rgba(155, 92, 255, 0.5)",
              }}
            >
              <ShoppingBag className="w-5 h-5" />
              Browse Marketplace
            </Button>
          </a>

          <Link to="/contact" className="w-full sm:w-auto">
            <Button
              className="px-10 py-7 rounded-xl glass border-2 transition-all duration-300 w-full"
              style={{
                borderColor: "#50FA7B",
                color: "#50FA7B",
              }}
              variant="outline"
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#50FA7B";
                e.currentTarget.style.color = "#000";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(80, 250, 123, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#50FA7B";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Join Free
            </Button>
          </Link>
        </motion.div>

        {/* Stats line */}
        <motion.div
          className="pt-8 flex items-center justify-center gap-4 text-sm opacity-70"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4" style={{ color: "#50FA7B" }} />
            10+ Free Resources
          </span>
          <span className="opacity-50">•</span>
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4" style={{ color: "#9B5CFF" }} />
            3 Membership Levels
          </span>
          <span className="opacity-50">•</span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4" style={{ color: "#2da8ff" }} />
            Always Evolving
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function MarketplaceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filters = [
    { name: "All", icon: Layers },
    { name: "Tools", icon: Wrench },
    { name: "Guides", icon: BookOpen },
    { name: "Templates", icon: FileText },
    { name: "Courses", icon: GraduationCap },
    { name: "Apps", icon: Bot },
    { name: "Experiments", icon: FlaskConical },
  ];

  // Download handlers
  const handleAdversariesDownload = () => {
    const content = `16 AI Adversaries and How to Beat Them\n\nFree Prompt Hacks for Better Conversations with AI\n\nDeveloped by Karl Croft, MA — AiGENCY Dorset | Co-authored with Flicker (GPT-5)\n\n[Full content from previous implementation]`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'AiGENCY_16_AI_Adversaries_FREE.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleWhitepaperDownload = () => {
    const content = `The AiGENCY ICE Whitepaper\n\nIntegrative Context Engineering for Human–AI Collaboration\n\n[Full content from previous implementation]`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'AiGENCY_ICE_Whitepaper.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Marketplace items
  const marketplaceItems: MarketplaceItem[] = [
    {
      id: "1",
      icon: Brain,
      emoji: "🧠",
      title: "16 AI Adversaries Guide",
      description: "Combat the most common AI frustrations with ready-to-use prompt hacks",
      category: "Guides",
      label: "Free",
      labelColor: "#50FA7B",
      buttonText: "Download Free",
      featured: true,
      onAction: handleAdversariesDownload,
    },
    {
      id: "2",
      icon: FileText,
      emoji: "📄",
      title: "ICE Whitepaper",
      description: "Complete framework for human-AI collaboration and context engineering",
      category: "Guides",
      label: "Free",
      labelColor: "#50FA7B",
      buttonText: "Download Free",
      featured: true,
      onAction: handleWhitepaperDownload,
    },
    {
      id: "3",
      icon: Heart,
      emoji: "❤️",
      title: "AI Health Check",
      description: "Assess your AI readiness and get personalized recommendations",
      category: "Tools",
      label: "Free",
      labelColor: "#50FA7B",
      buttonText: "Start Check",
      link: "/ai-health-check",
    },
    {
      id: "4",
      icon: Layers,
      emoji: "🗂️",
      title: "PromptiDumpti System",
      description: "Notion-based reflective prompting system for smarter AI conversations",
      category: "Templates",
      label: "Pro",
      labelColor: "#9B5CFF",
      buttonText: "Learn More",
      link: "/contact",
    },
    {
      id: "5",
      icon: GraduationCap,
      emoji: "🎓",
      title: "CTRL-ALT-DELETE Course",
      description: "Master emotional regulation and context design for AI workflows",
      category: "Courses",
      label: "Pro",
      labelColor: "#9B5CFF",
      buttonText: "Enroll Now",
      link: "/courses",
    },
    {
      id: "6",
      icon: Bot,
      emoji: "🤖",
      title: "Custom AI Agent Builder",
      description: "Design your bespoke ICE-trained agent with personality and ethics",
      category: "Apps",
      label: "Professional",
      labelColor: "#2da8ff",
      buttonText: "Get Started",
      link: "/contact",
      featured: true,
    },
    {
      id: "7",
      icon: Wrench,
      emoji: "🛠️",
      title: "Prompt Engineering Toolkit",
      description: "Essential templates and frameworks for everyday AI tasks",
      category: "Tools",
      label: "Free",
      labelColor: "#50FA7B",
      buttonText: "Download",
      link: "#",
    },
    {
      id: "8",
      icon: Sparkles,
      emoji: "✨",
      title: "Trauma-Informed Design Pack",
      description: "Color palettes, tone guides, and principles for safe digital spaces",
      category: "Templates",
      label: "Pro",
      labelColor: "#9B5CFF",
      buttonText: "View Pack",
      link: "/contact",
    },
    {
      id: "9",
      icon: Lightbulb,
      emoji: "💡",
      title: "Meta-Prompting Workshop",
      description: "Learn to think about your thinking before you prompt",
      category: "Courses",
      label: "Pro",
      labelColor: "#9B5CFF",
      buttonText: "Join Workshop",
      link: "/courses",
    },
    {
      id: "10",
      icon: Code,
      emoji: "⚡",
      title: "API Integration Templates",
      description: "Pre-built workflows for connecting AI to your existing tools",
      category: "Apps",
      label: "Professional",
      labelColor: "#2da8ff",
      buttonText: "Explore",
      link: "/contact",
    },
    {
      id: "11",
      icon: BookOpen,
      emoji: "📖",
      title: "ICE Workbook",
      description: "Complete guide to applying ICE principles in your digital life",
      category: "Guides",
      label: "Free",
      labelColor: "#50FA7B",
      buttonText: "Download",
      link: "#",
    },
    {
      id: "12",
      icon: FlaskConical,
      emoji: "🧪",
      title: "Experimental Agents Lab",
      description: "Test cutting-edge AI behaviors and share feedback with the community",
      category: "Experiments",
      label: "Coming Soon",
      labelColor: "#ff8b00",
      buttonText: "Join Waitlist",
      link: "/contact",
    },
    {
      id: "13",
      icon: Brain,
      emoji: "🧬",
      title: "HACR Framework",
      description: "Our foundational research on Human-AI Coherence Regulation",
      category: "Guides",
      label: "Free",
      labelColor: "#50FA7B",
      buttonText: "Read Framework",
      link: "/hacr",
      featured: true,
    },
  ];

  const filteredItems = marketplaceItems.filter((item) => {
    const matchesFilter = activeFilter === "All" || item.category === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Tooltip content for labels
  const labelTooltips = {
    Free: "Instant access, no payment required",
    Pro: "Included with Practitioner membership",
    Professional: "Requires Professional membership or custom setup",
    "Coming Soon": "In development, join waitlist for early access",
  };

  return (
    <section id="marketplace" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ background: "#9B5CFF" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4" style={{ letterSpacing: "0.02em" }}>
            AI Marketplace
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Browse tools, guides, templates, and experiments designed for humans working with AI.
          </p>
        </motion.div>

        {/* Search Bar + Sort */}
        <motion.div
          className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative flex-1">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50"
            />
            <Input
              type="text"
              placeholder="Search tools, guides, courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 rounded-xl glass border-2 text-lg w-full"
              style={{
                borderColor: "rgba(155, 92, 255, 0.3)",
                background: "rgba(10, 10, 15, 0.6)",
              }}
            />
          </div>
          
          {/* Sort dropdown */}
          <div className="relative sm:w-64">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-6 rounded-xl glass border-2 text-lg appearance-none cursor-pointer"
              style={{
                borderColor: "rgba(155, 92, 255, 0.3)",
                background: "rgba(10, 10, 15, 0.6)",
              }}
            >
              <option value="featured">Sort by: Featured</option>
              <option value="popular">Most Downloaded</option>
              <option value="latest">Latest</option>
              <option value="free">Free Only</option>
            </select>
            <TrendingDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50 pointer-events-none" />
          </div>
        </motion.div>

        {/* Filter Tabs with Icons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filters.map((filter, idx) => {
            const FilterIcon = filter.icon;
            return (
              <Button
                key={filter.name}
                onClick={() => setActiveFilter(filter.name)}
                className="px-6 py-3 rounded-xl transition-all duration-300 inline-flex items-center gap-2"
                style={{
                  background:
                    activeFilter === filter.name
                      ? "linear-gradient(135deg, #9B5CFF 0%, #50FA7B 100%)"
                      : "rgba(155, 92, 255, 0.1)",
                  border: activeFilter === filter.name ? "none" : "1px solid rgba(155, 92, 255, 0.3)",
                  color: activeFilter === filter.name ? "#000" : "#fff",
                  boxShadow:
                    activeFilter === filter.name ? "0 4px 20px rgba(155, 92, 255, 0.4)" : "none",
                }}
              >
                <FilterIcon className="w-4 h-4" />
                {filter.name}
              </Button>
            );
          })}
        </motion.div>

        {/* Marketplace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => {
            const Icon = item.icon;
            const isLocked = item.label === "Coming Soon";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="glass rounded-2xl p-6 group hover:scale-105 transition-all duration-500 relative overflow-hidden"
                style={{
                  border: item.featured
                    ? "2px solid rgba(155, 92, 255, 0.5)"
                    : "1px solid rgba(155, 92, 255, 0.2)",
                }}
                whileHover={{
                  boxShadow: `0 8px 40px ${item.labelColor}40`,
                }}
              >
                {/* Featured star */}
                {item.featured && (
                  <div className="absolute top-3 right-3">
                    <Star className="w-5 h-5 fill-current" style={{ color: "#ff8b00" }} />
                  </div>
                )}

                {/* Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl transition-all duration-500"
                    style={{
                      background: `${item.labelColor}20`,
                    }}
                  >
                    {item.emoji || <Icon className="w-8 h-8" style={{ color: item.labelColor }} />}
                  </div>

                  {/* Label badge with tooltip */}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div
                          className="px-3 py-1 rounded-full text-xs tracking-wider flex items-center gap-1 cursor-help"
                          style={{
                            background: `${item.labelColor}20`,
                            color: item.labelColor,
                            border: `1px solid ${item.labelColor}50`,
                          }}
                        >
                          {isLocked && <Lock className="w-3 h-3" />}
                          {item.label}
                          <Info className="w-3 h-3 opacity-60" />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent
                        className="glass border"
                        style={{
                          borderColor: `${item.labelColor}50`,
                          background: "rgba(10, 10, 15, 0.95)",
                        }}
                      >
                        <p className="text-sm">{labelTooltips[item.label]}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                {/* Content */}
                <h3 className="mb-2" style={{ letterSpacing: "0.02em" }}>
                  {item.title}
                </h3>
                <p className="opacity-80 leading-relaxed text-sm mb-6">{item.description}</p>

                {/* Button */}
                {item.link ? (
                  <Link to={item.link}>
                    <Button
                      className="w-full rounded-lg transition-all duration-300"
                      style={{
                        background: `${item.labelColor}15`,
                        border: `1px solid ${item.labelColor}`,
                        color: item.labelColor,
                      }}
                      disabled={isLocked}
                      onMouseEnter={(e) => {
                        if (!isLocked) {
                          e.currentTarget.style.backgroundColor = item.labelColor;
                          e.currentTarget.style.color = "#000";
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isLocked) {
                          e.currentTarget.style.backgroundColor = `${item.labelColor}15`;
                          e.currentTarget.style.color = item.labelColor;
                        }
                      }}
                    >
                      {item.buttonText}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    onClick={item.onAction}
                    className="w-full rounded-lg transition-all duration-300"
                    style={{
                      background: `${item.labelColor}15`,
                      border: `1px solid ${item.labelColor}`,
                      color: item.labelColor,
                    }}
                    disabled={isLocked}
                    onMouseEnter={(e) => {
                      if (!isLocked) {
                        e.currentTarget.style.backgroundColor = item.labelColor;
                        e.currentTarget.style.color = "#000";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isLocked) {
                        e.currentTarget.style.backgroundColor = `${item.labelColor}15`;
                        e.currentTarget.style.color = item.labelColor;
                      }
                    }}
                  >
                    {item.buttonText}
                  </Button>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* No results */}
        {filteredItems.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg opacity-70">No items found matching your search.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function FeaturedCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const featured = [
    {
      title: "PromptiDumpti",
      subtitle: "Reflective Prompting System",
      description: "A Notion-based framework that helps you regulate, reflect, and refine before you prompt.",
      color: "#9B5CFF",
      icon: Layers,
      status: "Beta",
    },
    {
      title: "CTRL-ALT-DELETE",
      subtitle: "Emotional Regulation Course",
      description: "Learn to pause, ground, and reframe when AI conversations go sideways.",
      color: "#50FA7B",
      icon: GraduationCap,
      status: "In Development",
    },
    {
      title: "Prompty Recovery Kit",
      subtitle: "Emergency Response Tools",
      description: "Quick fixes for when AI breaks down, hallucinates, or loses context mid-conversation.",
      color: "#2da8ff",
      icon: Wrench,
      status: "Coming Soon",
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featured.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featured.length) % featured.length);
  };

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{ background: "#50FA7B" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4" style={{ letterSpacing: "0.02em" }}>
            Live from The Lab
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Featured projects and experiments currently in development.
          </p>
        </motion.div>

        {/* Horizontal Scroll Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {featured.map((item, idx) => {
                const Icon = item.icon;
                const statusColors: Record<string, string> = {
                  Beta: "#50FA7B",
                  "In Development": "#9B5CFF",
                  "Coming Soon": "#ff8b00",
                };

                return (
                  <motion.div
                    key={idx}
                    className="glass rounded-3xl p-8 relative overflow-hidden snap-center flex-shrink-0"
                    style={{
                      width: "clamp(320px, 90vw, 450px)",
                      border: `2px solid ${item.color}30`,
                    }}
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                  >
                    {/* Looping gradient pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${item.color}15 0%, transparent 70%)`,
                      }}
                      animate={{
                        opacity: [0.2, 0.5, 0.2],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <div className="relative z-10">
                      {/* Icon + Status */}
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="w-20 h-20 rounded-2xl flex items-center justify-center"
                          style={{
                            background: `${item.color}20`,
                            boxShadow: `0 8px 32px ${item.color}30`,
                          }}
                        >
                          <Icon className="w-10 h-10" style={{ color: item.color }} />
                        </div>

                        {/* Status badge */}
                        <div
                          className="px-3 py-1 rounded-full text-xs tracking-wider"
                          style={{
                            background: `${statusColors[item.status]}20`,
                            color: statusColors[item.status],
                            border: `1px solid ${statusColors[item.status]}50`,
                          }}
                        >
                          {item.status}
                        </div>
                      </div>

                      {/* Content */}
                      <p className="text-sm opacity-70 mb-2 tracking-wider">{item.subtitle}</p>
                      <h3 className="mb-4" style={{ color: item.color, letterSpacing: "0.02em" }}>
                        {item.title}
                      </h3>
                      <p className="opacity-90 leading-relaxed">{item.description}</p>

                      {/* CTA */}
                      <Link to="/contact">
                        <Button
                          className="w-full mt-6 rounded-xl transition-all duration-300"
                          style={{
                            background: `${item.color}15`,
                            border: `1px solid ${item.color}`,
                            color: item.color,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = item.color;
                            e.currentTarget.style.color = "#000";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = `${item.color}15`;
                            e.currentTarget.style.color = item.color;
                          }}
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                onClick={() => scroll('left')}
                className="w-12 h-12 rounded-full glass transition-all duration-300"
                style={{
                  border: "1px solid rgba(155, 92, 255, 0.5)",
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <Button
                onClick={() => scroll('right')}
                className="w-12 h-12 rounded-full glass transition-all duration-300"
                style={{
                  border: "1px solid rgba(155, 92, 255, 0.5)",
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MembershipTiersSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredTier, setHoveredTier] = useState<number | null>(null);

  const tiers = [
    {
      icon: Sparkles,
      name: "Starter",
      tagline: "Start simple.",
      price: "Free",
      color: "#50FA7B",
      emoji: "🟢",
      features: [
        "Free ICE prompt templates and creative tools",
        "The AI Health Check tool",
        "Starter version of the PromptiDumpti Notion system",
        "Monthly newsletter: Human in the Loop Digest",
      ],
      cta: "Join Free",
      ctaLink: "/contact",
    },
    {
      icon: Award,
      name: "Practitioner",
      tagline: "Collaborate with your trained assistant.",
      price: "£29.99",
      period: "/month",
      color: "#9B5CFF",
      emoji: "🟣",
      featured: true,
      features: [
        "Full ICE library and video lessons",
        "Access to our AiGENCY-trained shared assistant",
        "Drifts less, asks reflective questions",
        "Keeps you in the loop",
        "Understands tone, regulation, and trauma-informed communication",
        "Access to the ICE community workspace",
        "Discounts on consultations and new tools",
      ],
      cta: "Upgrade to Practitioner",
      ctaLink: "/contact",
    },
    {
      icon: Crown,
      name: "Professional",
      tagline: "Design your custom agent.",
      price: "£99",
      period: "/month",
      color: "#2da8ff",
      emoji: "🔷",
      features: [
        "Custom ICE-trained AI Agent for your business",
        "45-minute onboarding consultation",
        "Branded personality and tone",
        "Workflow design + human-in-the-loop review",
        "Priority support & quarterly optimisation review",
        "Optional £499 setup for bespoke automation",
      ],
      cta: "Get Your Custom Agent",
      ctaLink: "/contact",
    },
  ];

  return (
    <section id="membership-tiers" ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: "#9B5CFF" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4" style={{ letterSpacing: "0.02em" }}>
            Choose Your Path
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            One Philosophy — Keep the Human in the Loop.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier, idx) => {
            const Icon = tier.icon;
            const isPractitioner = tier.featured;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                onMouseEnter={() => setHoveredTier(idx)}
                onMouseLeave={() => setHoveredTier(null)}
                className={`glass p-8 rounded-3xl transition-all duration-500 relative overflow-hidden ${
                  isPractitioner ? "lg:scale-105 lg:shadow-2xl" : ""
                }`}
                style={
                  isPractitioner
                    ? {
                        borderColor: `${tier.color}50`,
                        border: "2px solid",
                      }
                    : {}
                }
                whileHover={{
                  scale: isPractitioner ? 1.08 : 1.05,
                  y: -8,
                }}
              >
                {/* Ambient glow on hover */}
                {hoveredTier === idx && (
                  <motion.div
                    className="absolute -inset-4 rounded-3xl blur-2xl -z-10"
                    style={{ background: tier.color }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
                {/* Featured glow */}
                {isPractitioner && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `radial-gradient(circle at 50% 50%, ${tier.color}15 0%, transparent 70%)`,
                    }}
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}

                {/* Most Popular badge */}
                {isPractitioner && (
                  <div
                    className="absolute top-0 right-0 px-4 py-2 rounded-bl-2xl text-sm"
                    style={{
                      backgroundColor: `${tier.color}20`,
                      color: tier.color,
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="relative z-10">
                  {/* Emoji + Name */}
                  <div className="mb-3">
                    <span className="text-3xl mr-3">{tier.emoji}</span>
                    <h3 className="inline" style={{ color: tier.color, letterSpacing: "0.02em" }}>
                      {tier.name}
                    </h3>
                  </div>

                  {/* Tagline */}
                  <p className="mb-6 opacity-80 italic leading-relaxed">{tier.tagline}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-4xl" style={{ color: tier.color }}>
                      {tier.price}
                    </span>
                    {tier.period && <span className="text-lg opacity-70">{tier.period}</span>}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-5 h-5 mt-0.5 flex-shrink-0"
                          style={{ color: tier.color }}
                        />
                        <span className="opacity-90 leading-relaxed text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to={tier.ctaLink}>
                    <Button
                      className="w-full px-6 py-4 rounded-xl transition-all duration-300"
                      style={{
                        background: isPractitioner ? tier.color : `${tier.color}15`,
                        border: `2px solid ${tier.color}`,
                        color: isPractitioner ? "#000" : tier.color,
                        boxShadow: isPractitioner ? `0 8px 32px ${tier.color}40` : "none",
                      }}
                      onMouseEnter={(e) => {
                        if (!isPractitioner) {
                          e.currentTarget.style.backgroundColor = tier.color;
                          e.currentTarget.style.color = "#000";
                        }
                        e.currentTarget.style.boxShadow = `0 8px 32px ${tier.color}60`;
                      }}
                      onMouseLeave={(e) => {
                        if (!isPractitioner) {
                          e.currentTarget.style.backgroundColor = `${tier.color}15`;
                          e.currentTarget.style.color = tier.color;
                        }
                        e.currentTarget.style.boxShadow = isPractitioner
                          ? `0 8px 32px ${tier.color}40`
                          : "none";
                      }}
                    >
                      {tier.cta}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ResourceLibrary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");

  const resources = [
    {
      title: "16 AI Adversaries Guide",
      type: "PDF",
      topic: "Prompting",
      price: "Free",
      link: "#",
    },
    {
      title: "ICE Whitepaper",
      type: "PDF",
      topic: "Framework",
      price: "Free",
      link: "#",
    },
    {
      title: "AI Health Check",
      type: "Tool",
      topic: "Assessment",
      price: "Free",
      link: "/ai-health-check",
    },
    {
      title: "PromptiDumpti Template",
      type: "Notion",
      topic: "Template",
      price: "Pro",
      link: "/contact",
    },
    {
      title: "Meta-Prompting Guide",
      type: "PDF",
      topic: "Prompting",
      price: "Free",
      link: "#",
    },
    {
      title: "Trauma-Informed Design Pack",
      type: "PDF",
      topic: "Design",
      price: "Pro",
      link: "/contact",
    },
  ];

  const types = ["All", "PDF", "Tool", "Notion"];

  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      searchQuery === "" ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.topic.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === "All" || resource.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{ background: "#2da8ff" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4" style={{ letterSpacing: "0.02em" }}>
            Resource Library
          </h2>
          <p className="text-lg opacity-80 max-w-2xl mx-auto">
            Quick access to all guides, tools, and templates.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          className="mb-8 flex flex-col md:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-50" />
            <Input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-3 rounded-xl glass border"
              style={{
                borderColor: "rgba(45, 168, 255, 0.3)",
                background: "rgba(10, 10, 15, 0.6)",
              }}
            />
          </div>

          {/* Type Filter */}
          <div className="flex gap-2">
            {types.map((type) => (
              <Button
                key={type}
                onClick={() => setFilterType(type)}
                className="px-4 py-3 rounded-xl transition-all duration-300"
                style={{
                  background:
                    filterType === type ? "#2da8ff" : "rgba(45, 168, 255, 0.1)",
                  border: filterType === type ? "none" : "1px solid rgba(45, 168, 255, 0.3)",
                  color: filterType === type ? "#000" : "#fff",
                }}
              >
                {type}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Resources List */}
        <motion.div
          className="glass rounded-2xl p-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {filteredResources.map((resource, idx) => (
            <motion.div
              key={idx}
              className="py-4 flex items-center justify-between gap-4 hover:bg-white/5 transition-all duration-300 px-4 rounded-lg border-b border-white/5 last:border-0"
              style={{
                background: idx % 2 === 0 ? "rgba(255, 255, 255, 0.02)" : "transparent",
              }}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="flex-1">
                <h4 className="mb-1">{resource.title}</h4>
                <div className="flex gap-3 text-sm opacity-70">
                  <span>{resource.type}</span>
                  <span>•</span>
                  <span>{resource.topic}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className="px-3 py-1 rounded-full text-xs"
                  style={{
                    background:
                      resource.price === "Free" ? "rgba(80, 250, 123, 0.2)" : "rgba(155, 92, 255, 0.2)",
                    color: resource.price === "Free" ? "#50FA7B" : "#9B5CFF",
                    border:
                      resource.price === "Free"
                        ? "1px solid rgba(80, 250, 123, 0.3)"
                        : "1px solid rgba(155, 92, 255, 0.3)",
                  }}
                >
                  {resource.price}
                </span>

                <Link to={resource.link}>
                  <Button
                    size="sm"
                    className="rounded-lg transition-all duration-300"
                    style={{
                      background: "rgba(45, 168, 255, 0.15)",
                      border: "1px solid #2da8ff",
                      color: "#2da8ff",
                    }}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Get
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="#marketplace">
            <Button
              className="px-8 py-4 rounded-xl glass border-2 transition-all duration-300"
              style={{
                borderColor: "#2da8ff",
                color: "#2da8ff",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2da8ff";
                e.currentTarget.style.color = "#000";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(45, 168, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#2da8ff";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <ArrowRight className="w-4 h-4 mr-2" />
              View All in Marketplace
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FooterCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(155, 92, 255, 0.3) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="glass p-12 md:p-16 rounded-3xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-8 rounded-2xl flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, rgba(155, 92, 255, 0.2), rgba(80, 250, 123, 0.2))",
              boxShadow: "0 8px 32px rgba(155, 92, 255, 0.4)",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Zap className="w-10 h-10" style={{ color: "#9B5CFF" }} />
          </motion.div>

          <motion.div
            className="mb-6 relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 style={{ letterSpacing: "0.02em" }}>
              The Lab is Always Evolving
            </h2>
            {/* Animated heartbeat underline */}
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-0.5 rounded-full"
              style={{
                background: "linear-gradient(90deg, #9B5CFF, #50FA7B, #2da8ff)",
              }}
              animate={{
                scaleX: [1, 1.05, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          <motion.p
            className="text-lg md:text-xl leading-relaxed opacity-90 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Join the newsletter for new tools, experiments, and insights from the edge of human-AI
            collaboration.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                className="px-10 py-7 rounded-xl transition-all duration-300 text-lg w-full"
                style={{
                  background: "linear-gradient(135deg, #50FA7B 0%, #2da8ff 100%)",
                  border: "none",
                  color: "#000",
                  boxShadow: "0 8px 32px rgba(80, 250, 123, 0.4)",
                }}
              >
                Join Newsletter
              </Button>
            </Link>

            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                className="px-10 py-7 rounded-xl glass border-2 transition-all duration-300 text-lg w-full"
                style={{
                  borderColor: "#9B5CFF",
                  color: "#9B5CFF",
                }}
                variant="outline"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#9B5CFF";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.boxShadow = "0 0 30px rgba(155, 92, 255, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#9B5CFF";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Book Consultation
              </Button>
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center justify-center gap-6 mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="https://www.linkedin.com/company/aigency-limited"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
            >
              <motion.div
                className="w-10 h-10 rounded-full glass flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(155, 92, 255, 0.5)",
                }}
              >
                <Linkedin className="w-5 h-5" style={{ color: "#9B5CFF" }} />
              </motion.div>
            </a>

            <a
              href="https://twitter.com/aigency"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
            >
              <motion.div
                className="w-10 h-10 rounded-full glass flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(80, 250, 123, 0.5)",
                }}
              >
                <Twitter className="w-5 h-5" style={{ color: "#50FA7B" }} />
              </motion.div>
            </a>

            <a
              href="https://github.com/aigency"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300"
            >
              <motion.div
                className="w-10 h-10 rounded-full glass flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(45, 168, 255, 0.5)",
                }}
              >
                <Github className="w-5 h-5" style={{ color: "#2da8ff" }} />
              </motion.div>
            </a>
          </motion.div>

          {/* Legal Line */}
          <motion.p
            className="text-sm opacity-50 mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.5 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Designed with care in Dorset • © 2025 AiGENCY
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
