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
    answer: "Our AI training starts from £40/hour for one-to-one sessions. For custom AI integration and automation projects, we provide tailored quotes based on your specific needs. Most Bournemouth businesses invest between £500-£2000 for complete setup including training and ongoing support. We offer flexible payment plans and provide clear ROI projections upfront.",
  },
  {
    question: "How do I integrate AI into existing software in Dorset?",
    answer: "We help Dorset businesses integrate AI into their current systems using APIs, automation tools like Zapier, and custom solutions. Whether it's connecting AI to your Shopify store, CRM, booking system, or accounting software - we handle the technical setup and train your team to use it confidently.",
  },
  {
    question: "Do you offer AI training for employees in Bournemouth?",
    answer: "Yes! We provide tailored AI training for teams across Bournemouth, Poole, and Dorset. Our sessions cover ChatGPT fundamentals, AI prompt engineering, AI marketing tools, and industry-specific applications. We offer in-person workshops or online training, designed to be practical and neurodivergent-friendly.",
  },
  {
    question: "Can you set up AI tools for my small business in Poole?",
    answer: "Absolutely. We specialise in helping small businesses in Poole and across Dorset adopt AI without the overwhelm. We'll assess your needs, recommend the right tools, set everything up for you, and provide training so you're confident using AI daily. From ChatGPT to custom automation - we handle it all.",
  },
  {
    question: "Is AI safe for my customer data? (GDPR compliant AI Bournemouth)",
    answer: "Yes. We only recommend GDPR-compliant AI tools and configure everything to UK data protection standards. Your customer data stays secure, and we'll show you exactly how everything works so you're always in control. We're experienced in ethical, compliant AI integration for Bournemouth businesses.",
  },
  {
    question: "Do you offer ChatGPT workshops for Dorset small businesses?",
    answer: "Yes! Our ChatGPT workshops are designed specifically for Dorset small businesses. We teach practical applications - from writing quotes and social media posts to customer service and content creation. Workshops can be one-to-one or small groups, in-person in Bournemouth/Poole, or online.",
  },
  {
    question: "Can you help with AI automation for my Bournemouth business?",
    answer: "Definitely. We help Bournemouth businesses automate repetitive tasks like customer follow-ups, appointment reminders, data entry, social media posting, and invoice processing. We use tools like Zapier, Make.com, and custom AI agents to save you hours every week.",
  },
  {
    question: "What makes you different from other AI consultants in Bournemouth?",
    answer: "We're Bournemouth-based, trauma-informed, and human-centred. We don't just drop tools and leave - we train you, support you, and ensure AI amplifies your work rather than replacing the human touch that makes your business special. Plus, we're neurodivergent-led and understand different learning styles.",
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
            AI Consultant FAQs
          </h2>
          <p className="text-xl opacity-80">
            <strong>Bournemouth, Poole & Dorset</strong>
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
