import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Progress } from "./ui/progress";
import { Input } from "./ui/input";
import { Sparkles, User, Building2, Lightbulb, Zap, Heart, Download } from "lucide-react";

// 15 questions organized into 5 sections
const questionSections = [
  {
    title: "Comfort & Curiosity",
    questions: [
      "I feel comfortable using AI tools like ChatGPT in daily life or work.",
      "I'm more curious than anxious about how AI could change my role or business.",
      "When new tools appear, I like experimenting with them rather than avoiding them.",
    ],
  },
  {
    title: "Usage & Integration",
    questions: [
      "I already use AI tools to save time — for writing, emails, or planning tasks.",
      "I understand what AI can and can't do — its strengths and limitations.",
      "My habits or workflows could easily include AI if someone showed me how.",
    ],
  },
  {
    title: "Ethics & Awareness",
    questions: [
      "I know how to protect privacy when using AI tools (no sensitive data, safe habits).",
      "I always review and edit AI output before I use it publicly or professionally.",
      "I believe AI can be used responsibly and ethically in my line of work.",
    ],
  },
  {
    title: "Creativity & Adaptability",
    questions: [
      "AI helps me brainstorm new ideas or see creative angles I'd missed.",
      "I'm open to learning new digital systems if it saves time or improves results.",
      "I'd love to build or train my own AI assistant to handle simple tasks.",
    ],
  },
  {
    title: "Emotional Readiness & Reflection",
    questions: [
      "When tech frustrates me, I can usually calm down and try again.",
      "I see AI as a tool that amplifies my human skills — not as a threat.",
      "I feel ready to help others or lead projects that use AI responsibly.",
    ],
  },
];

// Flatten questions for easier iteration
const allQuestions = questionSections.flatMap((section) => section.questions);

type ViewState = "welcome" | "questions" | "results" | "email-capture";

export function AIHealthCheck() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const [viewState, setViewState] = useState<ViewState>("welcome");
  const [userType, setUserType] = useState<"individual" | "business">("individual");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(allQuestions.length).fill(0));
  const [email, setEmail] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    // Ensure an answer was selected
    if (answers[currentQuestion] === 0) {
      return;
    }
    
    if (currentQuestion < allQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Trigger confetti on results
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      setViewState("results");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    const total = answers.reduce((sum, ans) => sum + ans, 0);
    const maxScore = allQuestions.length * 5;
    return Math.round((total / maxScore) * 100);
  };

  const getRecommendation = (score: number) => {
    if (score < 41) {
      return {
        tier: "Explorer",
        title: "You're just starting your AI journey",
        message: "You're just starting your AI journey — curiosity is your advantage. With a few simple tools and our AI Starter Course, you can save hours every week. Let's show you how.",
        color: "#ff8b00",
        course: "Starter",
      };
    } else if (score < 71) {
      return {
        tier: "Builder",
        title: "You're building strong AI habits already",
        message: "You're building strong AI habits already. You understand the basics — now it's time to streamline your workflow, save time, and explore your own personal AI agent with our Practitioner path.",
        color: "#2da8ff",
        course: "Practitioner",
      };
    } else {
      return {
        tier: "Navigator",
        title: "You're leading the wave",
        message: "You're leading the wave. You think strategically and see how AI can empower people and businesses. You're ready for Aigency's Professional Level — advanced tools, automation, and real client integration.",
        color: "#c23bff",
        course: "Professional",
      };
    }
  };

  const resetQuiz = () => {
    setViewState("welcome");
    setCurrentQuestion(0);
    setAnswers(new Array(allQuestions.length).fill(0));
    setEmail("");
    setShowConfetti(false);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }
    
    const score = calculateScore();
    const recommendation = getRecommendation(score);
    
    // In a real implementation, this would send the email and score to your backend
    console.log("AI Health Check Submission:", {
      email,
      score,
      tier: recommendation.tier,
      userType,
      timestamp: new Date().toISOString(),
    });
    
    // Show success message
    alert(`Thank you! Your AI Readiness Report will be sent to ${email} shortly. Check your inbox in the next few minutes.`);
  };

  // WELCOME SCREEN
  if (viewState === "welcome") {
    return (
      <section id="health-check" className="py-24 px-6 relative overflow-hidden" ref={ref}>
        {/* Background gradients */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: "#4dff88" }}
          />
          <div
            className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{ background: "#2da8ff" }}
          />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 tracking-wide" style={{ letterSpacing: "0.1em" }}>
              Your AI Health Check — How Ready Are You?
            </h2>
            <p className="opacity-80 max-w-2xl mx-auto text-lg leading-relaxed">
              Discover your AI confidence level in just three minutes. Whether you're an individual or a small business in Dorset, this quick reflective quiz will show how ready you are to harness AI tools like ChatGPT to work smarter, not harder.
            </p>
          </motion.div>

          <motion.div
            className="glass-green p-8 md:p-12 rounded-3xl group hover:scale-[1.01] transition-all duration-500 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, transparent 0%, rgba(77, 255, 136, 0.1) 50%, transparent 100%)",
                }}
              />
            </div>

            <div className="relative z-10 space-y-8">
              <div className="text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4" style={{ color: "#4dff88" }} />
                <h3 className="mb-4">Choose your path</h3>
                <p className="opacity-80 mb-6">
                  This helps us personalise your experience and recommendations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={() => setUserType("individual")}
                  className="p-6 rounded-xl transition-all duration-300 text-left"
                  style={{
                    background: userType === "individual"
                      ? "linear-gradient(135deg, rgba(77, 255, 136, 0.3), rgba(77, 255, 136, 0.1))"
                      : "rgba(255, 255, 255, 0.05)",
                    border: userType === "individual"
                      ? "2px solid #4dff88"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    boxShadow: userType === "individual"
                      ? "0 4px 20px rgba(77, 255, 136, 0.3)"
                      : "none",
                  }}
                >
                  <User className="w-8 h-8 mb-3" style={{ color: "#4dff88" }} />
                  <h4 className="mb-2">I'm doing this for myself</h4>
                  <p className="opacity-70 text-sm">
                    Freelancer, individual, or exploring AI for personal use
                  </p>
                </button>

                <button
                  onClick={() => setUserType("business")}
                  className="p-6 rounded-xl transition-all duration-300 text-left"
                  style={{
                    background: userType === "business"
                      ? "linear-gradient(135deg, rgba(77, 255, 136, 0.3), rgba(77, 255, 136, 0.1))"
                      : "rgba(255, 255, 255, 0.05)",
                    border: userType === "business"
                      ? "2px solid #4dff88"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    boxShadow: userType === "business"
                      ? "0 4px 20px rgba(77, 255, 136, 0.3)"
                      : "none",
                  }}
                >
                  <Building2 className="w-8 h-8 mb-3" style={{ color: "#4dff88" }} />
                  <h4 className="mb-2">I'm doing this for my business</h4>
                  <p className="opacity-70 text-sm">
                    Small business owner, tradesperson, or team leader
                  </p>
                </button>
              </div>

              <Button
                onClick={() => setViewState("questions")}
                className="w-full py-6 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: "#4dff88",
                  color: "#000",
                  border: "none",
                  boxShadow: "0 4px 20px rgba(77, 255, 136, 0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(77, 255, 136, 0.6)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(77, 255, 136, 0.4)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Start My Check
              </Button>

              <p className="text-center opacity-60 text-sm">
                15 quick questions · 3 minutes · No sign-up required
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // RESULTS SCREEN
  if (viewState === "results") {
    const score = calculateScore();
    const recommendation = getRecommendation(score);

    return (
      <section id="health-check" className="py-24 px-6 relative overflow-hidden">
        {/* Animated confetti effect */}
        <AnimatePresence>
          {showConfetti && (
            <>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: ["#4dff88", "#2da8ff", "#a02dff", "#ff8b00"][i % 4],
                    left: `${Math.random() * 100}%`,
                    top: "20%",
                  }}
                  initial={{ y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    y: [0, -100, 500],
                    opacity: [1, 1, 0],
                    scale: [1, 1.2, 0.5],
                    rotate: [0, 360],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 2 + Math.random(),
                    ease: "easeOut",
                  }}
                />
              ))}
            </>
          )}
        </AnimatePresence>

        {/* Background blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
            style={{ background: recommendation.color }}
          />
        </div>

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl p-12 border-2 transition-all duration-500 relative overflow-hidden group"
            style={{
              background: `linear-gradient(135deg, ${recommendation.color}15, ${recommendation.color}05)`,
              borderColor: recommendation.color,
              boxShadow: `0 0 60px ${recommendation.color}40`,
              backdropFilter: "blur(20px)",
            }}
          >
            {/* Glow pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: `radial-gradient(circle at center, ${recommendation.color}20, transparent)`,
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="relative z-10">
              {/* Skill Tree Animation */}
              <div className="mb-8">
                <div className="flex justify-center items-center gap-8 mb-6">
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                      style={{
                        background: `linear-gradient(135deg, ${recommendation.color}${Math.floor(score * 0.8)}30, ${recommendation.color}10)`,
                        border: `2px solid ${recommendation.color}${Math.floor(score * 0.8)}`,
                        boxShadow: `0 0 ${score * 0.4}px ${recommendation.color}${Math.floor(score * 0.6)}`,
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                    >
                      <Lightbulb className="w-8 h-8" style={{ color: recommendation.color, opacity: score / 100 }} />
                    </motion.div>
                    <span className="text-sm opacity-70">Creativity</span>
                  </motion.div>

                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                      style={{
                        background: `linear-gradient(135deg, ${recommendation.color}${Math.floor(score * 0.8)}30, ${recommendation.color}10)`,
                        border: `2px solid ${recommendation.color}${Math.floor(score * 0.8)}`,
                        boxShadow: `0 0 ${score * 0.4}px ${recommendation.color}${Math.floor(score * 0.6)}`,
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.7,
                      }}
                    >
                      <Zap className="w-8 h-8" style={{ color: recommendation.color, opacity: score / 100 }} />
                    </motion.div>
                    <span className="text-sm opacity-70">Efficiency</span>
                  </motion.div>

                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-2"
                      style={{
                        background: `linear-gradient(135deg, ${recommendation.color}${Math.floor(score * 0.8)}30, ${recommendation.color}10)`,
                        border: `2px solid ${recommendation.color}${Math.floor(score * 0.8)}`,
                        boxShadow: `0 0 ${score * 0.4}px ${recommendation.color}${Math.floor(score * 0.6)}`,
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.9,
                      }}
                    >
                      <Heart className="w-8 h-8" style={{ color: recommendation.color, opacity: score / 100 }} />
                    </motion.div>
                    <span className="text-sm opacity-70">Confidence</span>
                  </motion.div>
                </div>
              </div>

              <h2
                className="text-center mb-4 tracking-wide"
                style={{ letterSpacing: "0.1em" }}
              >
                Your AI Confidence Level
              </h2>
              
              <p className="text-center opacity-80 mb-8">
                {userType === "business" 
                  ? "Your business is more ready than you think."
                  : "You're more ready than you think."}
              </p>

              <div className="text-center mb-8">
                <motion.div
                  className="inline-block text-8xl mb-4"
                  style={{ color: recommendation.color }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                    delay: 0.2,
                  }}
                >
                  {score}%
                </motion.div>
                <div className="text-2xl mb-2" style={{ color: recommendation.color }}>
                  {recommendation.tier} Tier
                </div>
                <div className="opacity-70">{recommendation.title}</div>
              </div>

              <div
                className="p-8 rounded-2xl mb-8 border-2"
                style={{
                  borderColor: recommendation.color,
                  background: `linear-gradient(135deg, ${recommendation.color}20, ${recommendation.color}10)`,
                  backdropFilter: "blur(10px)",
                }}
              >
                <p className="opacity-90 leading-relaxed text-lg">
                  {recommendation.message}
                </p>
              </div>

              {/* Email capture */}
              <div className="mb-8 p-6 rounded-2xl" style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}>
                <h3 className="mb-3 text-center">Would you like a personalised AI Readiness Report?</h3>
                <p className="opacity-80 text-center mb-6 text-sm">
                  Enter your email to receive your score breakdown and get access to Aigency's exclusive Dorset-based workshops.
                </p>
                <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-6 rounded-xl"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  />
                  <Button
                    type="submit"
                    className="px-8 py-6 rounded-xl transition-all duration-300 whitespace-nowrap"
                    style={{
                      backgroundColor: recommendation.color,
                      color: "#000",
                      border: "none",
                    }}
                  >
                    Send My Free Report
                  </Button>
                </form>
              </div>

              {/* PDF Lead Magnet */}
              <div className="mb-8 p-6 rounded-2xl" style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Download className="w-6 h-6" style={{ color: recommendation.color }} />
                  <h3 className="text-center">Download your free PDF</h3>
                </div>
                <p className="opacity-80 text-center mb-6 text-sm">
                  Top 10 Ways to Use ChatGPT in Your Business
                </p>
                <Button
                  className="w-full px-8 py-6 rounded-xl transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${recommendation.color}30, ${recommendation.color}10)`,
                    border: `2px solid ${recommendation.color}`,
                    color: recommendation.color,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = recommendation.color;
                    e.currentTarget.style.color = "#000";
                    e.currentTarget.style.boxShadow = `0 0 20px ${recommendation.color}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `linear-gradient(135deg, ${recommendation.color}30, ${recommendation.color}10)`;
                    e.currentTarget.style.color = recommendation.color;
                    e.currentTarget.style.boxShadow = "none";
                  }}
                  onClick={() => {
                    // Placeholder - would trigger actual PDF download
                    console.log("Download PDF guide");
                    alert("Your free guide will be downloaded shortly. Check your Downloads folder!");
                  }}
                >
                  Download Free Guide
                </Button>
              </div>

              {/* Final CTA */}
              <div className="text-center mb-8">
                <h3 className="mb-4">Gain Your Own AI Agency.</h3>
                <p className="opacity-80 leading-relaxed mb-6">
                  Aigency helps individuals and businesses in Dorset, Bournemouth, Poole, and Christchurch turn curiosity into capability. Whether you're starting or scaling, your AI journey begins here.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={resetQuiz}
                  className="flex-1 py-6 rounded-xl"
                  variant="outline"
                >
                  Retake Assessment
                </Button>
                <Button
                  onClick={() => {
                    const element = document.getElementById("courses");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 py-6 rounded-xl"
                  style={{
                    backgroundColor: "transparent",
                    border: `2px solid ${recommendation.color}`,
                    color: "var(--foreground)",
                  }}
                >
                  Explore Courses
                </Button>
                <Button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1 py-6 rounded-xl"
                  style={{
                    backgroundColor: recommendation.color,
                    color: "#000",
                    border: "none",
                  }}
                >
                  Book a Free 15-Minute Chat
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // QUESTIONS SCREEN
  const progress = ((currentQuestion + 1) / allQuestions.length) * 100;
  const currentSectionIndex = questionSections.findIndex((section) =>
    section.questions.includes(allQuestions[currentQuestion])
  );
  const currentSection = questionSections[currentSectionIndex];

  return (
    <section id="health-check" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Vibrant background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#4dff88" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: "#2da8ff" }}
        />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="opacity-60 text-sm mb-2">Section {currentSectionIndex + 1} of {questionSections.length}</p>
          <h3 className="opacity-80">{currentSection.title}</h3>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            className="glass-green p-8 md:p-12 rounded-3xl group hover:scale-[1.01] transition-all duration-500 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, transparent 0%, rgba(77, 255, 136, 0.1) 50%, transparent 100%)",
                }}
              />
            </div>

            {/* Progress bar with animation */}
            <div className="mb-8 relative z-10">
              <div className="flex justify-between mb-2 opacity-70">
                <span>Question {currentQuestion + 1} of {allQuestions.length}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="relative h-3 rounded-full overflow-hidden" style={{
                background: "rgba(77, 255, 136, 0.2)"
              }}>
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #4dff88, #2da8ff)",
                    boxShadow: "0 0 10px rgba(77, 255, 136, 0.5)",
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>

            <h3 className="mb-8 min-h-[4rem] relative z-10 text-xl leading-relaxed">
              {allQuestions[currentQuestion]}
            </h3>

            <RadioGroup
              value={answers[currentQuestion] !== 0 ? answers[currentQuestion]?.toString() : undefined}
              onValueChange={(value) => handleAnswer(parseInt(value))}
              className="space-y-3 relative z-10"
            >
              {[
                { value: 1, label: "Strongly Disagree" },
                { value: 2, label: "Disagree" },
                { value: 3, label: "Neutral" },
                { value: 4, label: "Agree" },
                { value: 5, label: "Strongly Agree" },
              ].map((option) => (
                <Label
                  key={option.value}
                  htmlFor={`q${currentQuestion}-${option.value}`}
                  className="block cursor-pointer"
                >
                  <motion.div
                    className="flex items-center space-x-3 p-5 rounded-xl transition-all"
                    style={{
                      background: answers[currentQuestion] === option.value
                        ? "linear-gradient(135deg, rgba(77, 255, 136, 0.3), rgba(77, 255, 136, 0.1))"
                        : "rgba(255, 255, 255, 0.05)",
                      border: answers[currentQuestion] === option.value
                        ? "2px solid #4dff88"
                        : "1px solid rgba(255, 255, 255, 0.1)",
                      backdropFilter: "blur(10px)",
                      boxShadow: answers[currentQuestion] === option.value
                        ? "0 4px 20px rgba(77, 255, 136, 0.3)"
                        : "none",
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <RadioGroupItem 
                      value={option.value.toString()} 
                      id={`q${currentQuestion}-${option.value}`}
                    />
                    <span className="flex-1">
                      {option.label}
                    </span>
                    {answers[currentQuestion] === option.value && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      >
                        <Sparkles className="w-5 h-5" style={{ color: "#4dff88" }} />
                      </motion.div>
                    )}
                  </motion.div>
                </Label>
              ))}
            </RadioGroup>

            <div className="flex gap-4 mt-8 relative z-20">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex-1 py-6 rounded-xl"
                variant="outline"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={answers[currentQuestion] === 0}
                className="flex-1 py-6 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: answers[currentQuestion] !== 0 ? "#4dff88" : "var(--muted)",
                  color: answers[currentQuestion] !== 0 ? "#000" : "var(--muted-foreground)",
                  border: "none",
                  boxShadow: answers[currentQuestion] !== 0 ? "0 4px 20px rgba(77, 255, 136, 0.4)" : "none",
                  cursor: answers[currentQuestion] === 0 ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (answers[currentQuestion] !== 0) {
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(77, 255, 136, 0.6)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (answers[currentQuestion] !== 0) {
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(77, 255, 136, 0.4)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                {currentQuestion === allQuestions.length - 1 ? "See My Results 🎉" : "Next →"}
              </Button>
            </div>
            
            {answers[currentQuestion] === 0 && (
              <p className="text-center mt-4 opacity-60 text-sm relative z-10">
                Please select an answer to continue
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
