import React from "react";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO, XYZ Corp",
    message: "Amazing service! Highly recommend working with them.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    position: "Founder, ABC Ltd.",
    message: "They delivered exactly what I needed, and on time!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Mike Johnson",
    position: "CTO, TechStart",
    message: "Great experience! Their work exceeded my expectations.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-950 p-6 rounded-lg shadow-lg max-w-sm"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <p className="text-lg italic">"{testimonial.message}"</p>
              <h4 className="text-xl font-semibold mt-4">{testimonial.name}</h4>
              <p className="text-sm text-gray-400">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
