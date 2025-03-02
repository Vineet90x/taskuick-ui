"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide web development, UI/UX design, and custom software solutions tailored to your business needs.",
  },
  {
    question: "How long does a project take?",
    answer:
      "The timeline varies depending on the project scope, but we always ensure timely delivery with quality results.",
  },
  {
    question: "Do you offer support after project completion?",
    answer:
      "Yes, we provide maintenance and support services to ensure smooth operation of your application.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          FAQ's
        </h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-4 bg-gray-900 shadow-md rounded-md font-semibold focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <p className="p-4 text-gray-500 bg-gray-900 shadow-md rounded-md mt-2">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
