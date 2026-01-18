import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How much does AI integration cost in Bournemouth?",
    answer: "Our pricing starts from £49 for basic AI setup and consultation. Most Bournemouth businesses choose our Growth package (£249-£749) which includes custom automation, training, and 3 months support. We offer flexible payment plans and guarantee ROI or your money back.",
  },
  {
    question: "Do I need technical skills to use AI for my business?",
    answer: "Not at all. We work with plumbers, café owners, therapists, and designers across Dorset—most with zero technical experience. We set everything up for you and provide simple, jargon-free training that anyone can follow.",
  },
  {
    question: "Is AI safe for my customer data? (GDPR)",
    answer: "Yes. We only recommend GDPR-compliant AI tools and configure everything to UK data protection standards. Your customer data stays secure, and we'll show you exactly how everything works so you're always in control.",
  },
  {
    question: "How long does AI implementation take?",
    answer: "Most Bournemouth businesses are up and running within 1-2 weeks. Simple setups (like ChatGPT for quotes) can be done in a single session. Complex automations take 2-4 weeks including training and testing.",
  },
  {
    question: "Can you visit my business in person?",
    answer: "Yes! We're based in Bournemouth and offer in-person consultations across Poole, Christchurch, and Dorset. Many clients prefer face-to-face training, especially for team setups. Remote support is also available.",
  },
  {
    question: "What if AI doesn't work for my business?",
    answer: "If you don't see measurable time or cost savings within 3 months, we'll refund your investment. We've helped 50+ Dorset businesses and have never had to do this—AI works when implemented properly.",
  },
  {
    question: "Do you offer ongoing support after setup?",
    answer: "Yes. All packages include support (1-3 months depending on tier), and you can add monthly support plans afterwards. We're local, so you can always reach us quickly when you need help.",
  },
  {
    question: "What makes AIGENCY different from other AI consultants?",
    answer: "We're Bournemouth-based, trauma-informed, and human-centred. We don't just drop tools and leave—we train you, support you, and ensure AI amplifies your work rather than replacing the human touch that makes your business special.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{ background: "#2da8ff" }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{ background: "#4dff88" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 tracking-wide" style={{ letterSpacing: "0.1em" }}>
            Frequently Asked Questions
          </h2>
          <p className="opacity-80 text-lg">
            Clear answers to common questions about our approach and offerings.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-blue p-10 rounded-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border/30 pb-4"
              >
                <AccordionTrigger className="text-left hover:no-underline group">
                  <span className="pr-4 leading-relaxed group-hover:opacity-80 transition-opacity">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="opacity-80 leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Schema markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
