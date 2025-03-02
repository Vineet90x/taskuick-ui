import React from "react";

const CTA: React.FC = () => {
  return (
    <section className=" text-white py-16 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Grow Your Business?
        </h2>
        <p className="text-lg mb-6">
          Let’s build something amazing together! Get in touch today.
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-gray-200 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CTA;
