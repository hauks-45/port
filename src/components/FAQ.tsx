import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "I specialize in building high-performance digital products, ranging from visual identity and UI/UX design to full-stack development. My focus is on creating cohesive, beautiful, and functional experiences that drive growth."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Timelines vary depending on project complexity. A standard landing page might take 2-3 weeks, while a more complex platform could take 6-10 weeks. I prioritize quality and precision in every stage of the build."
  },
  {
    question: "Do you work with startups and small businesses?",
    answer: "Absolutely. I love working with founders and early-stage companies to define their digital presence. I offer scalable solutions that grow alongside your business."
  },
  {
    question: "How do we get started?",
    answer: "It starts with a conversation. We'll discuss your goals, challenges, and vision. From there, I'll provide a tailored proposal and project roadmap to get things moving."
  },
  {
    question: "Can you help with post-launch updates?",
    answer: "Yes, I offer maintenance and support packages to ensure your website or application stays secure, updated, and optimized for performance after the initial rollout."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-bg py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-12 xl:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Support</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-body text-text-primary mb-8 leading-tight">
              Commonly asked <br />
              <span className="font-display italic">questions</span>
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed max-w-md">
              Finding answers shouldn't be a project of its own. Here are some of the most frequent questions I receive from clients.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-12 xl:col-span-7 space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`group cursor-pointer overflow-hidden rounded-3xl border transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] ${
                    openIndex === index 
                      ? 'bg-surface border-white/10' 
                      : 'bg-transparent border-stroke hover:border-white/5'
                  }`}
                >
                  <div className="p-6 md:p-10 flex items-center justify-between gap-6">
                    <h3 className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-300 ${
                      openIndex === index ? 'text-text-primary' : 'text-text-primary/80 group-hover:text-text-primary'
                    }`}>
                      {faq.question}
                    </h3>
                    <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center transition-all duration-500 ease-[0.25, 0.1, 0.25, 1] ${
                      openIndex === index 
                        ? 'bg-text-primary text-bg border-text-primary rotate-45' 
                        : 'bg-transparent text-muted border-stroke group-hover:border-white/20'
                    }`}>
                      <Plus className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <div className="px-6 pb-8 md:px-10 md:pb-10 pt-0">
                          <div className="w-full h-px bg-stroke mb-8" />
                          <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
