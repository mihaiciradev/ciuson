
import { Metadata } from "@/components/Metadata";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <>
      <Metadata 
        title="Service Vulcanizare Timișoara | Vulcanizare Mobilă 24/7"
        description="Service profesionist de vulcanizare în Timișoara. Oferim servicii de vulcanizare mobilă, reparații anvelope la cald și spălătorie auto. Disponibili 24/7."
      />
      <main className="min-h-screen bg-white relative">
        {/* Background pattern for the entire page */}
        <div className="fixed inset-0 pointer-events-none opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="lines" width="20" height="20" patternUnits="userSpaceOnUse">
              <line x1="0" y1="20" x2="20" y2="20" stroke="#333" strokeWidth="0.5" />
              <line x1="20" y1="0" x2="20" y2="20" stroke="#333" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#lines)" />
          </svg>
        </div>
        
        <Hero />
        <Services />
        <div className="max-w-7xl mx-auto px-4 py-16 relative bg-white">
          <h2 className="text-3xl font-bold text-center mb-8 font-playfair">Locație</h2>
          <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1657.2293288530313!2d21.173449356760127!3d45.688635937590405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1745482995247!5m2!1sen!2sro" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="PascaWheels Location"
            ></iframe>
          </div>
        </div>
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-6 relative">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 PascaWheels Service Vulcanizare. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
