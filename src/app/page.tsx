import CTA from "./cta";
import FAQ from "./faq";
import Footer from "./footer";
import Hero from "./hero";
import Navbar from "./navbar";
import Testimonials from "./testimonials";
import WorkSection from "./worksection";
import Services from "./services"; // ✅ Import Services
import Stepper from "./stepper";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />

      {/* Work Section */}
      <div id="work">
        <WorkSection />
      </div>

      {/* Services Section */}
      <div id="services">
        <Services />
      </div>

      <div id="stepper">
        <Stepper/>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <Testimonials />
      </div>

      {/* Call to Action */}
      <div id="cta">
        <CTA />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
