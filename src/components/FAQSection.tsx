"use client";
import type { FC } from 'react';
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Why use ValidationFlow instead of just sending a message, email, or posting on social media?",
    answer: `💣 1. Because doing everything manually gets messy.

When you message people one by one:
- You talk to one person on WhatsApp, another via email, someone else on Slack.
- You lose track of who replied and who didn’t.
- You take notes by hand. You forget to follow up.
- You have to explain your idea over and over again.
- You have no clear view of who said yes, no, or nothing.

✅ ValidationFlow gives you a single, clean link.
Share it anywhere. Track visits, validations, rejections, and email signups — all in one place.

🧠 2. Because people aren’t always honest face-to-face.

When you ask for feedback directly:
- Friends say “it’s cool” just to be nice.
- People avoid saying no.
- Some ghost you. Some lie.
- You never really know what they think.

✅ With ValidationFlow, feedback is anonymous and pressure-free.
You get honest answers: yes, no, neutral — and emails if they’re interested.

⏳ 3. Because you want to test 10 ideas fast — not build 10 websites.

You don’t want to:
- Build a landing page for every idea.
- Spend 2 hours on Figma or Notion.
- Record videos or code a site just to test a concept.

✅ ValidationFlow lets you present an idea in under 5 minutes.
It’s a lightweight idea page + feedback system + analytics + email capture — no code needed.

🛠 4. Because it’s built *for* freelancers, devs, and indie hackers.

- No account required.
- No product needed.
- No polished design necessary.

✅ Save time.
✅ Get real answers.
✅ Move faster on what works.

🔍 5. Because a clean link builds more trust than a random DM.

When you send a plain message with your idea:
- People hesitate.
- They don’t get the full picture.
- It looks sketchy or unprofessional.
- It gets ignored.

✅ With a link like:
https://validationflow.com/req/design-tool-x-vs-canva

People say:
"Oh, this looks serious."
"It’s easy to read."
"I can reply fast, or even say no — no pressure."
"I’ll drop my email if I like it."

🎯 ValidationFlow helps you know *which ideas are worth building*, without wasting time, code, or energy.`
  },
  {
    question: "Do validators need an account?",
    answer: "No. Anyone can validate without signing up.",
  },
  {
    question: "Can I see who validated?",
    answer: "Yes. We log the name/email and timestamp of every response.",
  },
  {
    question: "Is it secure?",
    answer: "Yes. Each link is protected by a unique, non-guessable token.",
  },
  {
    question: "Who can use ValidationFlow?",
    answer: "Freelancers, product teams, agencies — anyone who needs quick validation.",
  },
  {
    question: "Can I see validation history?",
    answer: "Yes. You get full traceability per link.",
  },
  {
    question: "Can I delete a link after sending it?",
    answer: "Yes. You can disable a link at any time from your dashboard.",
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
