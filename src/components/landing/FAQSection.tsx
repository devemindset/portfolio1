"use client";
import type { FC } from 'react';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Why use TimeTallyApp instead of Excel or manual tracking?",
    answer: `💣 1. Because manual tracking wastes your time.

When you track hours manually:
- You forget to log sessions.
- You lose notes or screenshots.
- You spend 2 hours formatting a PDF for your client.
- You feel overwhelmed every time you need to report your work.

✅ With TimeTallyApp, you just log your sessions and click "Generate Report".
Get a beautiful PDF ready to send — in seconds, not hours.

🧠 2. Because ugly reports hurt your credibility.

When your report looks like a spreadsheet from 2005:
- Clients doubt your professionalism.
- You look disorganized, even if you worked hard.
- You spend hours trying to make it “look clean”.

✅ TimeTallyApp gives you premium, branded reports.
Your work looks polished. Your value is clear. No stress.

⏳ 3. Because your time should go into your work — not admin.

You don’t want to:
- Build reports from scratch.
- Chase details at the last minute.
- Waste energy formatting things manually.

✅ TimeTallyApp handles the structure. You focus on your work.

🔗 4. Because you can simply copy a shareable report link.

Want to send your report?
- Copy the link.
- Paste it in an email, Slack, or WhatsApp.
- The client can view it online or download it.

✅ No attachments. No headaches. Just share.

🛠 5. Because it's made *for* freelancers and remote workers.

- Log your sessions in seconds.
- Track by task or project.
- Generate and share professional PDFs.

✅ Save time.  
✅ Look pro.  
✅ Get paid faster.`,
  },
  {
    question: "Do I need an account to create reports?",
    answer: "Yes. Creating reports requires an account so we can store your sessions and generate PDFs.",
  },
  {
    question: "Can I use it without installing anything?",
    answer: "Absolutely. It's a web app — no installation needed.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes. All your sessions and reports are stored securely. You’re always in control.",
  },
  {
    question: "Can I brand the reports with my logo?",
    answer: "Yes. Upload your branding and we’ll apply it to every report automatically.",
  },
  {
    question: "Can I export or download my report?",
    answer: "Yes. You can generate a PDF or copy the link to share it.",
  },
  {
    question: "Who is TimeTallyApp for?",
    answer: "Freelancers, remote developers, designers, consultants — anyone who wants to track and present their work cleanly.",
  },
];


const FAQSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-24 px-6" id="faq">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          FAQ
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-gray-900 font-medium focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <pre className="px-6 pb-4 text-gray-700 text-sm whitespace-pre-wrap">
                  {faq.answer}
                </pre>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
