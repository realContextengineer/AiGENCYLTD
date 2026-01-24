import { SEOHead } from "../components/SEOHead";
import { Brain, CheckCircle, Shield, Users, FileText, Lock } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function NeuroInclusivePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <>
      <SEOHead
        title="AI Apps for Autism & ADHD Support Dorset | Neurodivergent AI Tools Bournemouth | AiGENCY"
        description="AI tools for autism & ADHD support in Bournemouth, Poole & Dorset. Free AI planners for dyslexic adults, text-to-speech software, AI note-taking aids for neurodivergent students. Suitable for councils, schools & care providers."
        keywords="AI apps for autism support Dorset, AI tool for ADHD students Bournemouth, text-to-speech software neurodiversity Poole, AI note-taking aid Christchurch, free AI planner for dyslexic adults Dorset, neurodivergent AI tools, ADHD AI support, autism-aware AI Bournemouth, AI for special needs Dorset, accessible AI Poole, cognitive support tools, AI for care providers Bournemouth, AI for councils Dorset, safeguarding AI Christchurch"
        url="https://www.aigency.ltd/neuro-inclusive"
      />

      <div className="min-h-screen py-24 px-6" ref={ref}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-6">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #ff6b6b40, #ff6b6b20)",
                  boxShadow: "0 8px 24px #ff6b6b40",
                }}
              >
                <Brain className="w-10 h-10" style={{ color: "#ff6b6b" }} />
              </div>
            </div>
            <h1 className="mb-6">Neuro-Inclusive AI & Safeguarded Systems</h1>
            <p className="text-xl opacity-80 leading-relaxed">
              AI systems designed to operate safely and responsibly in real-world environments involving autistic and neurodivergent individuals.
            </p>
          </motion.div>

          {/* Overview */}
          <motion.section
            className="mb-12 glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="mb-4">Overview</h2>
            <p className="opacity-85 leading-relaxed mb-4">
              AIGENCY LTD provides neuro-inclusive artificial intelligence systems designed to operate safely and responsibly in real-world environments involving autistic and neurodivergent individuals.
            </p>
            <p className="opacity-85 leading-relaxed">
              Our work focuses on reducing cognitive load, improving operational reliability, and supporting independence while maintaining appropriate human oversight.
            </p>
          </motion.section>

          {/* Director Background */}
          <motion.section
            className="mb-12 glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mb-4">Director Background & Expertise</h2>
            <p className="opacity-85 leading-relaxed mb-4">
              AIGENCY LTD is led by its director, Karl, who has over 25 years' experience across IT systems, design, and applied psychology.
            </p>

            <div className="mb-4">
              <h3 className="text-lg font-medium mb-3" style={{ color: "#ff6b6b" }}>Academic Background</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                  <span className="opacity-85">Undergraduate degree in <strong>Applied Psychology and Computing</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                  <span className="opacity-85">Postgraduate qualification in <strong>Film Narrative and Sound Design</strong></span>
                </li>
              </ul>
            </div>

            <p className="opacity-85 leading-relaxed mb-4">
              This postgraduate training provides formal expertise in sensory experience, attention management, pacing, and structured communication. These skills directly inform the design of AI systems that are calm, predictable, and suitable for neurodivergent users.
            </p>

            <p className="opacity-85 leading-relaxed">
              The director is <strong>neurodivergent</strong>, providing lived insight into executive function challenges, cognitive overload, and the practical realities of navigating complex systems.
            </p>
          </motion.section>

          {/* Autism & Neurodiversity Capability */}
          <motion.section
            className="mb-12 glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="mb-4">Autism & Neurodiversity Capability</h2>
            <p className="opacity-85 leading-relaxed mb-4">
              AIGENCY LTD is formalising its work in autism and neurodiversity-adjacent contexts.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">The director is neurodivergent</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">A <strong>Level 2 Certificate in Working with Autism</strong> is being undertaken</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85"><strong>DBS clearance</strong> is held where required</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Work is aligned with UK safeguarding expectations</span>
              </li>
            </ul>

            <p className="opacity-85 leading-relaxed mt-4">
              This supports suitability for work involving autistic adults, neurodivergent employees, and care-adjacent environments.
            </p>
          </motion.section>

          {/* Scope of Services */}
          <motion.section
            className="mb-12 glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="mb-4">Scope of Services</h2>
            <p className="opacity-85 leading-relaxed mb-4">
              AIGENCY LTD does not provide therapy, diagnosis, or clinical services.
            </p>

            <p className="opacity-85 leading-relaxed mb-4">
              We design <strong>operational AI systems</strong>, including:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">AI-supported planning and task-management systems</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">"Second Brain" systems supporting memory, prioritisation, and communication</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Safeguarded AI tools for documentation, reporting, and compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Human-in-the-loop AI systems suitable for regulated environments</span>
              </li>
            </ul>
          </motion.section>

          {/* Neuro-Inclusive Design Principles */}
          <motion.section
            className="mb-12 glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="mb-4">Neuro-Inclusive Design Principles</h2>
            <p className="opacity-85 leading-relaxed mb-4">
              All systems are designed with:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Clear and predictable structure</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Reduced sensory and cognitive load</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Explicit task boundaries</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Support for executive function</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Avoidance of unnecessary complexity</span>
              </li>
            </ul>

            <p className="opacity-85 leading-relaxed mt-4">
              Neuro-inclusive design is treated as a baseline requirement, not an add-on.
            </p>
          </motion.section>

          {/* Safeguarding & Ethics */}
          <motion.section
            className="mb-12 glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6" style={{ color: "#ff6b6b" }} />
              <h2 className="mb-0">Safeguarding & Ethics</h2>
            </div>
            <p className="opacity-85 leading-relaxed mb-4">
              Safeguarding is integral to all relevant work.
            </p>

            <p className="opacity-85 leading-relaxed mb-4">
              Principles include:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Human-in-the-loop design as standard</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">No autonomous decision-making where harm is possible</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Clear escalation and responsibility pathways</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Transparent system behaviour</span>
              </li>
            </ul>
          </motion.section>

          {/* Data Protection */}
          <motion.section
            className="mb-12 glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6" style={{ color: "#ff6b6b" }} />
              <h2 className="mb-0">Data Protection</h2>
            </div>
            <p className="opacity-85 leading-relaxed mb-4">
              All work aligns with:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">UK GDPR</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">ICO guidance on AI and data protection</span>
              </li>
            </ul>

            <p className="opacity-85 leading-relaxed mt-4">
              Including data minimisation, purpose limitation, and transparency.
            </p>
          </motion.section>

          {/* Suitable Organisations */}
          <motion.section
            className="mb-12 glass p-8 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6" style={{ color: "#ff6b6b" }} />
              <h2 className="mb-0">Suitable Organisations</h2>
            </div>
            <p className="opacity-85 leading-relaxed mb-4">
              This work is suitable for:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Councils and local authorities</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Social care and supported employment providers</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Charities and funded programmes</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ff6b6b" }} />
                <span className="opacity-85">Employers supporting neurodivergent staff</span>
              </li>
            </ul>
          </motion.section>

          {/* Contact */}
          <motion.section
            className="glass p-8 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #ff6b6b20, #ff6b6b10)",
              border: "2px solid #ff6b6b40",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <h2 className="mb-4">Contact</h2>
            <p className="opacity-85 leading-relaxed mb-6">
              AIGENCY LTD welcomes exploratory discussions regarding safe, ethical, neuro-inclusive AI systems.
            </p>
            <a href="/contact">
              <button
                className="px-8 py-4 rounded-xl glass border-2 transition-all duration-300 font-medium"
                style={{
                  borderColor: "#ff6b6b",
                  boxShadow: "0 0 15px #ff6b6b30",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 25px #ff6b6b50";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 0 15px #ff6b6b30";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                Get in Touch
              </button>
            </a>
          </motion.section>
        </div>
      </div>
    </>
  );
}
