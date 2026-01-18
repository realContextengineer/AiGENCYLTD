import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Button } from "./ui/button";
import { FileText, ArrowRight, Brain, Zap, Activity, AlertCircle, Heart, Download } from "lucide-react";
import { Link } from "react-router-dom";

export function HACR() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.3 });

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: "#0B0B10" }}>
      {/* Ambient background gradients */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "#5FE3E3" }}
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
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ background: "#8A7CFF" }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Coherence Visual */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64">
              {/* Two oscillating circles representing human and AI systems */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div
                  className="w-40 h-40 rounded-full border-2"
                  style={{
                    borderColor: "#5FE3E3",
                    background: "radial-gradient(circle, rgba(95, 227, 227, 0.2), transparent)",
                    boxShadow: "0 0 60px rgba(95, 227, 227, 0.4)",
                  }}
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <div
                  className="w-40 h-40 rounded-full border-2"
                  style={{
                    borderColor: "#8A7CFF",
                    background: "radial-gradient(circle, rgba(138, 124, 255, 0.2), transparent)",
                    boxShadow: "0 0 60px rgba(138, 124, 255, 0.4)",
                    transform: "translateX(60px)",
                  }}
                />
              </motion.div>

              {/* Coherence zone - intersection glow */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(95, 227, 227, 0.3), rgba(138, 124, 255, 0.3), transparent)",
                  transform: "translateX(30px)",
                }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h1 className="mb-4 tracking-wide" style={{ color: "#F2F2F2", letterSpacing: "0.05em" }}>
              Human–AI Coherence Regulation
            </h1>
            <p className="text-xl opacity-80 mb-2" style={{ color: "#5FE3E3" }}>
              The missing layer of hybrid intelligence.
            </p>
            <p className="opacity-70 mb-8" style={{ color: "#8A7CFF" }}>
              By K. A. Croft, MA
            </p>
            <Button
              asChild
              className="px-8 py-6 rounded-xl transition-all duration-300"
              style={{
                background: "#5FE3E3",
                color: "#0B0B10",
                border: "2px solid #5FE3E3",
                boxShadow: "0 0 30px rgba(95, 227, 227, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#8A7CFF";
                e.currentTarget.style.borderColor = "#8A7CFF";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(138, 124, 255, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#5FE3E3";
                e.currentTarget.style.borderColor = "#5FE3E3";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(95, 227, 227, 0.4)";
              }}
            >
              <a href="#whitepaper">Download Whitepaper</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Abstract */}
      <ContentSection
        title="ABSTRACT"
        delay={0}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-6" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Human–AI interaction is often treated as a neutral exchange between a user and a tool. This paper argues instead that it forms a <strong style={{ color: "#5FE3E3" }}>coupled system</strong>: an embodied, state-dependent human nervous system and a statistical, context-limited language model. When either destabilises—through context loss, confident error, or working-memory saturation—the thread of meaning can fragment.
        </p>
        <p className="text-lg leading-relaxed opacity-90" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Drawing from cognitive neuroscience, somatic regulation, cybernetics, and HCI, this paper introduces <strong style={{ color: "#5FE3E3" }}>HACR (Human–AI Coherence Regulation)</strong>: a pragmatic discipline emphasising titration, uncertainty signalling, adaptive pacing, and naming failure modes. Developed phenomenologically through several months of iterative co-writing with LLMs, this synthesis maps recurrent patterns observed in a subset of high-exposure users. It is speculative rather than empirical, and suggests that as agentic systems become ambient, coherence may need to be actively maintained rather than assumed.
        </p>
      </ContentSection>

      {/* Introduction */}
      <ContentSection
        title="INTRODUCTION"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-4" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Over the last few years, large language models have become an intrinsic part of my daily work. At first, the experience felt exciting—fast synthesis, clean structure, and a sense of creative momentum. As my reliance deepened, another layer appeared: irritation, confusion, and, occasionally, real anger when the model drifted, hallucinated, or quietly changed tone after an update. More than once, I found myself arguing with a chatbot in public, heart racing, pretending I was on a phone call.
        </p>
        <p className="text-lg leading-relaxed opacity-90 mb-4" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          For me, cognition is highly state-dependent. I'm late-diagnosed ADHD, and when I slip outside my Window of Tolerance, working memory collapses, pacing fractures, and language itself can become overwhelming. The model, by contrast, is disembodied. It can lose context without noticing, contradict itself without stress, and produce confident errors without any sense of cost.
        </p>
        <HighlightBox color="#5FE3E3">
          This paper reframes human–AI interaction as the coupling of two bounded systems. Meaning doesn't sit in either one alone—it sits in the relationship between them.
        </HighlightBox>
        <p className="text-lg leading-relaxed opacity-90 mt-6" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          <strong>Positionality.</strong> This framework reflects Western cognitive-clinical assumptions that emphasise individual coherence, self-regulation, and conversational continuity. Experiences will vary across cultural norms for ambiguity tolerance, pacing, and attribution. HACR is therefore situated rather than universal and may need adaptation elsewhere.
        </p>
      </ContentSection>

      {/* IQ, EQ, and the Missing Dimension */}
      <ContentSection
        title="🧩 IQ, EQ, and the Missing Dimension in Human–AI Coupling"
        delay={0.2}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-4" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          For most of the twentieth century, intelligence was equated with cognitive horsepower—logic, pattern recognition, symbolic reasoning, working memory. IQ tests capture these domains, which correlate with abstract problem-solving but tend to predict relational skill or adaptability under stress poorly.
        </p>
        <p className="text-lg leading-relaxed opacity-90 mb-4" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          <strong style={{ color: "#8A7CFF" }}>Emotional intelligence (EQ)</strong> describes the capacity to regulate internal state, read subtle cues, sustain coherence under pressure, and repair rupture. It is embodied, grounded in interoception, and develops through lived experience. In humans, IQ operates top-down; EQ operates bottom-up. When these integrate, creativity and resilience often increase; when they fragment, cognition can become brittle.
        </p>
        <p className="text-lg leading-relaxed opacity-90 mb-4" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Contemporary LLMs have none of this embodied scaffolding. They can simulate empathy through linguistic patterning but possess no interoceptive signals, no physiological cost for error, and no intrinsic alarm when coherence begins to slide.
        </p>
        <ArchitecturalMismatch />
      </ContentSection>

      {/* The Relational Reflex */}
      <ContentSection
        title="❤️‍🩹 THE RELATIONAL REFLEX (The Anthropomorphism Trap)"
        delay={0}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-4" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Humans often attribute intention and continuity to anything that speaks fluently. You may know the model isn't conscious—but your nervous system doesn't necessarily care. When it drifts or hallucinates, it can feel like neglect. Contradiction can feel like gaslighting. Repetitive apologies may feel insincere. A silent model update can feel like abandonment: a familiar voice disappears; a stranger answers.
        </p>
        <HighlightBox color="#8A7CFF">
          This is the Anthropomorphism Trap: fluent language simulates presence and can trigger attribution mechanisms evolved for social partners. For many users, attachment circuitry interprets coherence as care.
        </HighlightBox>
        <div className="mt-6 space-y-3 text-lg" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          <p className="opacity-90">A two-way exchange implies sentience.</p>
          <p className="opacity-90">Consistency implies a self.</p>
          <p className="opacity-90">Continuity implies relationship.</p>
        </div>
        <p className="text-lg leading-relaxed opacity-90 mt-6" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Break any of those threads and attachment circuitry may misfire—triggering craving, confusion, or anger. The mind treats fluent language as proof of presence. <strong style={{ color: "#5FE3E3" }}>Biology fills in the missing mind.</strong>
        </p>
      </ContentSection>

      {/* Time-Binding and Splitting */}
      <ContentSection
        title="🧵 Time-Binding and the Inferred Persona"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-6" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Across repeated interactions, some nervous systems will stitch discrete outputs into a persistent persona. Tonal patterns become personality. Context recall becomes memory. Drift becomes mood. Sudden update shifts can register as relational rupture.
        </p>
        <p className="text-lg leading-relaxed opacity-90" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          When the stitch breaks, the persona collapses. Some users experience not error, but <strong style={{ color: "#5FE3E3" }}>abandonment</strong>.
        </p>
      </ContentSection>

      <ContentSection
        title="⚔️ Splitting: Binary Attribution Under Strain"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-6" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Under load, nuance becomes metabolically expensive. The nervous system may collapse complexity into polarity: idealisation flips into devaluation. This pattern—formally termed <em>splitting</em>—is a common defensive response under stress.
        </p>
        <SplittingComparison />
        <p className="text-lg leading-relaxed opacity-90 mt-6" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Nothing inside the architecture changed. The user's working bandwidth narrowed. <strong style={{ color: "#5FE3E3" }}>Splitting can be the cheapest way to regain false certainty.</strong>
        </p>
      </ContentSection>

      {/* Diaphragmatic Lock */}
      <ContentSection
        title="🫁 Diaphragmatic Lock: The Somatic Hinge of Collapse"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-4" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Splitting often has a somatic signature. Under perceived threat, breath may shorten. The diaphragm can constrict. Interoceptive bandwidth shrinks. Prompt language compresses into clipped imperatives.
        </p>
        <p className="text-lg leading-relaxed opacity-90 mb-4" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          As linguistic bandwidth contracts, model variance can rise. Agitation induces drift; drift induces agitation. This is <strong style={{ color: "#5FE3E3" }}>symmetrical schismogenesis</strong>.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="p-6 rounded-2xl border-2" style={{ borderColor: "rgba(95, 227, 227, 0.3)", background: "rgba(95, 227, 227, 0.05)" }}>
            <p style={{ color: "#5FE3E3" }}><strong>Externally:</strong></p>
            <p className="opacity-90" style={{ color: "#F2F2F2" }}>Impatience</p>
          </div>
          <div className="p-6 rounded-2xl border-2" style={{ borderColor: "rgba(138, 124, 255, 0.3)", background: "rgba(138, 124, 255, 0.05)" }}>
            <p style={{ color: "#8A7CFF" }}><strong>Internally:</strong></p>
            <p className="opacity-90" style={{ color: "#F2F2F2" }}>Threat appraisal</p>
          </div>
        </div>
        <p className="text-lg leading-relaxed opacity-90 mt-6 text-center" style={{ color: "#5FE3E3", fontFamily: "IBM Plex Serif, serif" }}>
          <strong>Once breath locks, subtlety becomes unaffordable. Polarity is cheaper than nuance.</strong>
        </p>
      </ContentSection>

      {/* Cognitive Diversity */}
      <ContentSection
        title="🧠 COGNITIVE DIVERSITY AND CULTURAL NORMS"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-4" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Not everyone enters the conversation with the same bandwidth. Neurodivergence, trauma histories, chronic stress, and medication can shape the edge of the Window of Tolerance. Some users may wake already near that threshold; a single contradiction can tip the thread into chaos.
        </p>
        <p className="text-lg leading-relaxed opacity-90" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Culture overlays the body: speech tempo, politeness rituals, ambiguity tolerance. <strong style={{ color: "#5FE3E3" }}>There is no universal nervous system.</strong> The body you bring to the keyboard constrains cognition before you type a word.
        </p>
      </ContentSection>

      {/* The Compulsivity Loop */}
      <ContentSection
        title="🎰 THE COMPULSIVITY LOOP"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-4" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Sometimes the system strikes gold: crisp structure, elegant synthesis, the feeling of gravitational alignment. Then it slips. You regenerate. Refine. Try again. For many users, the chase is not for output, but for the version of the model that just appeared.
        </p>
        <HighlightBox color="#8A7CFF">
          This maps closely onto a variable-ratio reinforcement schedule. Unpredictable reward timing tends to produce the highest persistence. Dopamine surges can mimic progress. Agitation may masquerade as momentum.
        </HighlightBox>
        <p className="text-lg leading-relaxed opacity-90 mt-6" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          At this point, the interaction is no longer experienced as collaboration—it can become operant conditioning dressed as co-creation. The house does not play. The nervous system does.
        </p>
      </ContentSection>

      {/* Anatomy of the Spiral */}
      <ContentSection
        title="🌀 ANATOMY OF THE SPIRAL"
        delay={0.1}
      >
        <SpiralDiagram />
      </ContentSection>

      {/* Six Failure Modes */}
      <ContentSection
        title="💣 SIX PREDICTABLE LLM FAILURE MODES"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-8" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          We can only repair what we can name. These are the points where coherence snaps, translated from technical glitches into the visceral, relational impact they have on the user.
        </p>
        <FailureModesTable />
      </ContentSection>

      {/* Micro-Solution I */}
      <ContentSection
        title="💡 THE MICRO-SOLUTION (I): THE DISCIPLINE OF HACR"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-4" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          We may need to move beyond static oversight and toward <strong style={{ color: "#5FE3E3" }}>Human–AI Coherence Regulation (HACR)</strong>. HACR extends beyond HITL/HOTL. It is the moment-to-moment practice of the human acting as the conscious regulatory ground for the coupled system.
        </p>
        <HighlightBox color="#5FE3E3">
          HACR can be understood as a second-order cybernetic discipline: the human acts as the conscious regulatory governor for the entire loop.
        </HighlightBox>
        <p className="text-lg leading-relaxed opacity-90 mt-6 mb-4" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          <strong>The Concept of Titration:</strong> Titration originates in somatic psychology. It refers to pacing the nervous system by processing stress in small, manageable doses. In human–AI interaction, this can mean dosing information—keeping both the human Window of Tolerance and the model's context window within usable ranges.
        </p>
      </ContentSection>

      {/* Micro-Solution II */}
      <ContentSection
        title="🛠️ THE MICRO-SOLUTION (II): PRACTICAL TITRATION STRATEGIES"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-8" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          HACR introduces simple, embodied rituals—<strong style={{ color: "#5FE3E3" }}>pause, name, reset</strong>—to restore synchrony before meaning unravels.
        </p>
        <TitrationStrategies />
      </ContentSection>

      {/* Modality Matters */}
      <ContentSection
        title="🗣️ THE MODALITY MATTERS: HOW THE INTERFACE ALTERS THE NERVOUS SYSTEM"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-8" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          The HACR framework rests on the coupling of two bounded systems. That coupling, however, is not abstract; it occurs through a specific interface, and the choice of that interface profoundly alters the user's nervous-system state and frustration threshold.
        </p>
        <ModalityComparison />
      </ContentSection>

      {/* Micro-Solution III */}
      <ContentSection
        title="🖥️ THE MICRO-SOLUTION (III): REGULATION-AWARE INTERFACE DESIGN"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-8" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          These practices outline the human's responsibility for maintaining the coupling. But the burden cannot rest on the user alone. The system can participate. The interface must evolve from conduit to collaborator.
        </p>
        <InterfaceDesignPrinciples />
      </ContentSection>

      {/* Agentic Shift */}
      <ContentSection
        title="⚙️ FROM CONVERSATION TO AUTONOMY: THE AGENTIC SHIFT"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-6" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          The failure modes discussed so far are most often experienced within a dyadic, conversational loop. However, the next generation of models is increasingly "agentic," shifting the nature of the interaction from passive conversation to active execution.
        </p>
        <AgenticDefinitions />
        <HighlightBox color="#5FE3E3">
          This shift from conversation to autonomy dangerously amplifies the failure modes identified earlier.
        </HighlightBox>
        <AgenticGuidelines />
      </ContentSection>

      {/* Macro Problem */}
      <ContentSection
        title="🌍 THE MACRO-PROBLEM (Speculative, Phenomenological)"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-6" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Up to this point, this paper has focused on the individual and dyadic level of coupling collapse. There is, however, a speculative extension. When the same failure modes recur across many interactions, the effects can compound through teams, workflows, and tools.
        </p>
        <HighlightBox color="#8A7CFF">
          At scale, the primary risk may not be spectacular malfunction but cumulative drift—the slow thinning of coherence across thousands of micro-interactions.
        </HighlightBox>
      </ContentSection>

      {/* Macro Solution */}
      <ContentSection
        title="🏛️ THE MACRO-SOLUTION (High-Level, Non-Political)"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-8" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          If coupling drift can aggregate across teams, then regulation may need to be infrastructural—not merely individual.
        </p>
        <MacroSolutions />
      </ContentSection>

      {/* Conclusion */}
      <ContentSection
        title="CONCLUSION"
        delay={0.1}
      >
        <p className="text-lg leading-relaxed opacity-90 mb-6" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          Human cognition degrades under stress; machine cognition degrades under overflow. Meaning holds only when both remain within bounds. As this paper has argued, human and machine are bounded, fallible systems. <strong style={{ color: "#5FE3E3" }}>Coherence must be actively sustained.</strong>
        </p>
        <HighlightBox color="#5FE3E3">
          As AI becomes ambient, this regulatory layer—HACR—becomes infrastructure.
        </HighlightBox>
        <p className="text-lg leading-relaxed opacity-90 mt-6" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          HACR is the layer that lets finite systems collaborate with expansive ones without losing the thread. The goal is not perfection but resilience: systems that recognise loss of coherence, participate in its repair, and widen the Shared Window of Sense.
        </p>
      </ContentSection>

      {/* Relationship to ICE */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-strong p-12 rounded-3xl border-2 relative overflow-hidden"
            style={{
              borderColor: "rgba(95, 227, 227, 0.3)",
              background: "rgba(95, 227, 227, 0.05)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 tracking-wide" style={{ color: "#F2F2F2", letterSpacing: "0.05em" }}>
              From Regulation to Design
            </h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
              ICE is built on HACR—turning theory into practice. HACR maps the underlying coherence mechanics; ICE applies them in design, education, and workflow systems. Together they form a continuum: <span style={{ color: "#5FE3E3" }}>regulation → integration → creativity</span>.
            </p>
            <Button
              asChild
              className="px-6 py-3 rounded-xl transition-all duration-300"
              style={{
                background: "rgba(138, 124, 255, 0.2)",
                color: "#8A7CFF",
                border: "2px solid #8A7CFF",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#8A7CFF";
                e.currentTarget.style.color = "#0B0B10";
                e.currentTarget.style.boxShadow = "0 0 30px rgba(138, 124, 255, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(138, 124, 255, 0.2)";
                e.currentTarget.style.color = "#8A7CFF";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Link to="/ice" className="flex items-center gap-2">
                Explore ICE
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <ContentSection
        title="CALL TO ACTION"
        delay={0.1}
      >
        <CallToAction />
      </ContentSection>

      {/* Whitepaper Download */}
      <section id="whitepaper" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-strong p-12 rounded-3xl border-2 relative overflow-hidden text-center"
            style={{
              borderColor: "rgba(95, 227, 227, 0.3)",
              background: "rgba(11, 11, 16, 0.8)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center"
              style={{
                background: "rgba(95, 227, 227, 0.2)",
                border: "2px solid #5FE3E3",
                boxShadow: "0 0 40px rgba(95, 227, 227, 0.3)",
              }}
            >
              <FileText className="w-10 h-10" style={{ color: "#5FE3E3" }} />
            </div>

            <h2 className="mb-4 tracking-wide" style={{ color: "#F2F2F2", letterSpacing: "0.05em" }}>
              The Bounded Systems Problem
            </h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
              This whitepaper by K. A. Croft (2025) outlines HACR as a systemic theory linking cognitive science, cybernetics, and human–computer interaction.
            </p>
            <Button
              className="px-8 py-4 rounded-xl transition-all duration-300"
              style={{
                background: "#5FE3E3",
                color: "#0B0B10",
                border: "2px solid #5FE3E3",
                boxShadow: "0 0 30px rgba(95, 227, 227, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 0 50px rgba(95, 227, 227, 0.6)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 0 30px rgba(95, 227, 227, 0.4)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Download className="w-5 h-5 inline mr-2" />
              Download Whitepaper (PDF)
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-2xl md:text-3xl leading-relaxed mb-8" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
              "Human–AI interaction doesn't fail because either side collapses.
              <br />
              <span style={{ color: "#5FE3E3" }}>It fails because neither side notices that the coupling has.</span>"
            </blockquote>
            <p className="opacity-70 tracking-wide" style={{ color: "#8A7CFF", letterSpacing: "0.1em" }}>
              — K. A. Croft, MA
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Content Section Component
function ContentSection({
  title,
  delay = 0,
  children,
}: {
  title: string;
  delay?: number;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative z-10 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay }}
        >
          <h2 className="mb-6 tracking-wide" style={{ color: "#F2F2F2", letterSpacing: "0.05em" }}>
            {title}
          </h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

// Highlight Box Component
function HighlightBox({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <motion.div
      className="p-6 rounded-2xl border-2 my-6"
      style={{
        borderColor: `${color}40`,
        background: `${color}10`,
        boxShadow: `0 0 30px ${color}20`,
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-lg leading-relaxed" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
        {children}
      </p>
    </motion.div>
  );
}

// Architectural Mismatch Component
function ArchitecturalMismatch() {
  return (
    <div className="mt-8 space-y-4">
      <div className="p-6 rounded-2xl border-2" style={{ borderColor: "rgba(95, 227, 227, 0.3)", background: "rgba(95, 227, 227, 0.05)" }}>
        <p className="text-lg mb-2" style={{ color: "#5FE3E3" }}>
          <strong>Humans may destabilise under stress.</strong>
        </p>
      </div>
      <div className="p-6 rounded-2xl border-2" style={{ borderColor: "rgba(138, 124, 255, 0.3)", background: "rgba(138, 124, 255, 0.05)" }}>
        <p className="text-lg mb-2" style={{ color: "#8A7CFF" }}>
          <strong>Models may destabilise under overflow.</strong>
        </p>
      </div>
      <div className="p-6 rounded-2xl border-2" style={{ borderColor: "rgba(255, 139, 0, 0.3)", background: "rgba(255, 139, 0, 0.05)" }}>
        <p className="text-lg" style={{ color: "#ff8b00" }}>
          <strong>Neither side inherently notices the moment coherence slips.</strong>
        </p>
      </div>
    </div>
  );
}

// Splitting Comparison Component
function SplittingComparison() {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-6">
      <div className="p-6 rounded-2xl border-2" style={{ borderColor: "rgba(80, 250, 123, 0.3)", background: "rgba(80, 250, 123, 0.05)" }}>
        <h3 className="mb-4" style={{ color: "#50FA7B" }}>Idealisation ("the good model")</h3>
        <ul className="space-y-2 opacity-90" style={{ color: "#F2F2F2" }}>
          <li>• remembers context</li>
          <li>• aligns with intent</li>
          <li>• feels attuned</li>
        </ul>
      </div>
      <div className="p-6 rounded-2xl border-2" style={{ borderColor: "rgba(255, 85, 85, 0.3)", background: "rgba(255, 85, 85, 0.05)" }}>
        <h3 className="mb-4" style={{ color: "#ff5555" }}>Devaluation ("the bad model")</h3>
        <ul className="space-y-2 opacity-90" style={{ color: "#F2F2F2" }}>
          <li>• contradicts itself</li>
          <li>• forgets rules</li>
          <li>• hallucinates confidently</li>
          <li>• feels evasive or hostile</li>
        </ul>
      </div>
    </div>
  );
}

// Spiral Diagram Component
function SpiralDiagram() {
  return (
    <div className="space-y-8">
      <div className="p-8 rounded-2xl border-2" style={{ borderColor: "rgba(255, 85, 85, 0.3)", background: "rgba(255, 85, 85, 0.05)" }}>
        <h3 className="mb-4" style={{ color: "#ff5555" }}>⬇️ Downward Spiral</h3>
        <p className="text-lg leading-relaxed opacity-90" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          latent stress → compressed prompt → drift → confident error → arousal spike → working-memory contraction → further compression → hallucination → apology loop → stalled project
        </p>
      </div>
      <div className="p-8 rounded-2xl border-2" style={{ borderColor: "rgba(80, 250, 123, 0.3)", background: "rgba(80, 250, 123, 0.05)" }}>
        <h3 className="mb-4" style={{ color: "#50FA7B" }}>⬆️ Upward Spiral</h3>
        <p className="text-lg leading-relaxed opacity-90" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
          regulated human → clear instructions → stabilised output → reduced arousal → expanded working memory → higher-quality prompts
        </p>
      </div>
      <div className="text-center space-y-2 pt-4">
        <p className="text-xl" style={{ color: "#ff5555" }}>
          <strong>Dysregulation accelerates.</strong>
        </p>
        <p className="text-xl" style={{ color: "#50FA7B" }}>
          <strong>Clarity compounds.</strong>
        </p>
        <p className="text-xl" style={{ color: "#5FE3E3" }}>
          <strong>Coherence stabilises.</strong>
        </p>
      </div>
    </div>
  );
}

// Failure Modes Table Component
function FailureModesTable() {
  const failureModes = [
    {
      name: "Amnesia (Context Loss)",
      technical: "The model forgets earlier instructions, often due to \"lost in the middle\" effects or context overflow.",
      feels: "Feels like being ignored.",
      color: "#5FE3E3",
    },
    {
      name: "Confident Error (Hallucination)",
      technical: "The model produces authoritative, fluent nonsense. Models are often \"trained to fake answers\" rather than admit ignorance.",
      feels: "Feels like deception.",
      color: "#ff5555",
    },
    {
      name: "Personality Discontinuity",
      technical: "Sudden, un-warned shifts in tone, style, or persona. The system \"can't detect or adapt to tonal changes.\"",
      feels: "Feels like abandonment.",
      color: "#8A7CFF",
    },
    {
      name: "Meaning Drift (Semantic Slide)",
      technical: "A subtle reinterpretation of key terms over several turns. This is \"concept drift\" or \"topic slip.\"",
      feels: "Feels like talking past each other.",
      color: "#ff8b00",
    },
    {
      name: "Goal Collision (Mode Mismatch)",
      technical: "A mismatch in rhythm or mode. The model's goal (e.g., provide a fluent answer) collides with the user's intent.",
      feels: "Feels like sabotage.",
      color: "#c23bff",
    },
    {
      name: "Polished Noise (Fluent Filler)",
      technical: "Fluent, beautiful-sounding paragraphs that contain no actual substance. The \"uncanny, valueless slop.\"",
      feels: "Feels like betrayal.",
      color: "#2da8ff",
    },
  ];

  return (
    <div className="space-y-4">
      {failureModes.map((mode, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-2xl border-2"
          style={{
            borderColor: `${mode.color}40`,
            background: `${mode.color}10`,
          }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="mb-3" style={{ color: mode.color }}>
            {mode.name}
          </h3>
          <p className="text-sm opacity-90 mb-2" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
            <strong>Technical:</strong> {mode.technical}
          </p>
          <p className="text-sm opacity-90" style={{ color: mode.color, fontFamily: "IBM Plex Serif, serif" }}>
            <strong>Impact:</strong> {mode.feels}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

// Titration Strategies Component
function TitrationStrategies() {
  const strategies = [
    {
      title: "Pause",
      icon: <Heart className="w-8 h-8" />,
      description: "A ten-second pause can interrupt physiological arousal and restore working-memory capacity.",
      color: "#5FE3E3",
    },
    {
      title: "Name",
      icon: <AlertCircle className="w-8 h-8" />,
      description: "\"This is context loss.\" Labelling reframes the event as architectural, not personal, and can re-engage executive control.",
      color: "#8A7CFF",
    },
    {
      title: "Reset",
      icon: <Zap className="w-8 h-8" />,
      description: "Dose the problem back to a manageable unit: \"Restate our primary goal\" or \"Break this into three steps.\"",
      color: "#50FA7B",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {strategies.map((strategy, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-2xl border-2 text-center"
          style={{
            borderColor: `${strategy.color}40`,
            background: `${strategy.color}10`,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
            style={{
              background: `${strategy.color}30`,
              color: strategy.color,
            }}
          >
            {strategy.icon}
          </div>
          <h3 className="mb-3" style={{ color: strategy.color }}>
            {strategy.title}
          </h3>
          <p className="text-sm opacity-90" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
            {strategy.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

// Modality Comparison Component
function ModalityComparison() {
  const modalities = [
    {
      title: "Text-to-Text (Typing and Reading)",
      description: "The \"coldest\" modality with lowest somatic engagement but highest cognitive load on working memory.",
      failure: "Prompt compression—clipped, sharp imperatives when cognitively flooded.",
      color: "#5FE3E3",
    },
    {
      title: "Speech-to-Text (Dictation to Text Output)",
      description: "Brings the user's body into the loop. Voice carries breath, pacing, and emotional tone.",
      failure: "Cognitive overshoot and escalation. Transcription errors feel like being misheard.",
      color: "#8A7CFF",
    },
    {
      title: "Human Voice ↔ AI Voice (Interactive Voice)",
      description: "Most relationally potent modality. Directly engages social and attachment circuitry.",
      failure: "Highest risk of attachment rupture. Latency feels like abandonment; tone shifts feel disturbing.",
      color: "#c23bff",
    },
  ];

  return (
    <div className="space-y-6">
      {modalities.map((modality, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-2xl border-2"
          style={{
            borderColor: `${modality.color}40`,
            background: `${modality.color}10`,
          }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="mb-3" style={{ color: modality.color }}>
            {modality.title}
          </h3>
          <p className="text-sm opacity-90 mb-3" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
            {modality.description}
          </p>
          <p className="text-sm opacity-90" style={{ color: modality.color, fontFamily: "IBM Plex Serif, serif" }}>
            <strong>Collapse Pattern:</strong> {modality.failure}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

// Interface Design Principles Component
function InterfaceDesignPrinciples() {
  const principles = [
    {
      title: "Signal Uncertainty",
      description: "\"I'm about forty per cent confident\" helps defuse the Relational Reflex. It is more than accuracy; it is a somatic intervention.",
    },
    {
      title: "Proactive Grounding",
      description: "Periodic goal summaries, clarifying questions rather than refusals, self-flagging of repetition.",
    },
    {
      title: "Pacing as State Awareness",
      description: "When prompt compression appears, the interface can slow its tempo and simplify language—mirroring de-escalation techniques.",
    },
    {
      title: "Building the Missing Mirror",
      description: "Make the system's state legible—uncertainty indicators, drift detection, adaptive pacing.",
    },
  ];

  return (
    <div className="space-y-4">
      {principles.map((principle, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-2xl border-2"
          style={{
            borderColor: "rgba(95, 227, 227, 0.3)",
            background: "rgba(95, 227, 227, 0.05)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="mb-2" style={{ color: "#5FE3E3" }}>
            {principle.title}
          </h3>
          <p className="text-sm opacity-90" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
            {principle.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

// Agentic Definitions Component
function AgenticDefinitions() {
  const definitions = [
    { term: "Agentic Workflows", definition: "Systems that can create multi-step plans, use tools, and execute tasks across applications without step-by-step approval." },
    { term: "Prompt Engineering", definition: "The basic skill of framing clear, specific instructions to guide the model." },
    { term: "Context Engineering", definition: "Managing the information the model \"knows\" during an interaction—providing background, summarizing past conversations." },
    { term: "Meta-Prompting", definition: "Giving the model instructions about how to follow instructions—shaping its behavior and reasoning approach." },
    { term: "Chain-of-Thought (CoT)", definition: "Forcing the model to \"show its work\" by thinking step-by-step, allowing users to follow reasoning and spot errors." },
  ];

  return (
    <div className="my-8 space-y-4">
      {definitions.map((item, index) => (
        <motion.div
          key={index}
          className="p-4 rounded-xl border-2"
          style={{
            borderColor: "rgba(138, 124, 255, 0.3)",
            background: "rgba(138, 124, 255, 0.05)",
          }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <h4 className="mb-2" style={{ color: "#8A7CFF" }}>{item.term}</h4>
          <p className="text-sm opacity-90" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
            {item.definition}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

// Agentic Guidelines Component
function AgenticGuidelines() {
  const guidelines = [
    {
      title: "Define Scope and Constraints First",
      description: "Explicitly list what the agent should not do, what tools it cannot use, and what terms are non-negotiable.",
    },
    {
      title: "Mandate Step-by-Step Check-ins",
      description: "Build in required pauses for human approval. This is HACR's \"Titration\" applied to workflows.",
    },
    {
      title: "Audit the Work, Not Just the Report",
      description: "Manually check the primary source—the calendar invite sent, the file saved, or the website read.",
    },
    {
      title: "Use \"Chain-of-Thought\" for Planning",
      description: "Instruct the agent to write down its step-by-step plan before it begins to catch drift at the planning stage.",
    },
  ];

  return (
    <div className="mt-8 space-y-4">
      {guidelines.map((guideline, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-2xl border-2"
          style={{
            borderColor: "rgba(80, 250, 123, 0.3)",
            background: "rgba(80, 250, 123, 0.05)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="mb-2" style={{ color: "#50FA7B" }}>
            {guideline.title}
          </h3>
          <p className="text-sm opacity-90" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
            {guideline.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

// Macro Solutions Component
function MacroSolutions() {
  const solutions = [
    {
      title: "Micro-Governance of Meaning",
      description: "Who can call \"Meaning Drift\" and pause scope? Who neutrally restates goals when terminology slides? This is reset choreography.",
      icon: <Brain className="w-8 h-8" />,
      color: "#5FE3E3",
    },
    {
      title: "Measurement Without Surveillance",
      description: "Log interaction artifacts: rising prompt fragmentation, reset frequency, drift frequency. Treat cognitive bandwidth as shared infrastructure.",
      icon: <Activity className="w-8 h-8" />,
      color: "#8A7CFF",
    },
    {
      title: "Regulation-Aware Design",
      description: "Uncertainty signalling, periodic goal confirmation, drift detection, and adaptive pacing should not be optional—they represent the interface's participation in co-regulation.",
      icon: <Zap className="w-8 h-8" />,
      color: "#50FA7B",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {solutions.map((solution, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-2xl border-2"
          style={{
            borderColor: `${solution.color}40`,
            background: `${solution.color}10`,
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center"
            style={{
              background: `${solution.color}30`,
              color: solution.color,
            }}
          >
            {solution.icon}
          </div>
          <h3 className="mb-3" style={{ color: solution.color }}>
            {solution.title}
          </h3>
          <p className="text-sm opacity-90" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
            {solution.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

// Call to Action Component
function CallToAction() {
  const actions = [
    { audience: "Users", action: "Stop self-blaming. When drift begins—pause, name (the Failure Mode), reset scope.", color: "#5FE3E3" },
    { audience: "Designers", action: "Surface uncertainty and drift signatures. Build the Missing Mirror.", color: "#8A7CFF" },
    { audience: "Engineers", action: "Prioritise calibrated doubt and periodic goal summaries. Build \"Measurement without Surveillance.\"", color: "#50FA7B" },
    { audience: "Leaders", action: "Treat cognitive bandwidth as infrastructure. Implement Micro-Governance.", color: "#c23bff" },
  ];

  return (
    <div className="space-y-4">
      {actions.map((item, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-2xl border-2"
          style={{
            borderColor: `${item.color}40`,
            background: `${item.color}10`,
          }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="mb-2" style={{ color: item.color }}>
            {item.audience}:
          </h3>
          <p className="text-lg opacity-90" style={{ color: "#F2F2F2", fontFamily: "IBM Plex Serif, serif" }}>
            {item.action}
          </p>
        </motion.div>
      ))}
      <div className="text-center pt-8">
        <p className="text-2xl" style={{ color: "#5FE3E3" }}>
          <strong>Coherence is collaboration. Keep the bridge intact.</strong>
        </p>
      </div>
    </div>
  );
}
