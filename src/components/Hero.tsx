import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import logoBranding from "../assets/logo_branding.png";
import heroImage from "../assets/hero_bg.png";

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1A1F2C] to-[#2C3E50] overflow-hidden">
      <div className="absolute top-4 left-4 w-56 h-20 bg-white/90 rounded-lg p-2 shadow-lg flex items-center justify-center overflow-hidden">
        <img
          src={logoBranding}
          alt="Vulcanizare Ciuson Logo"
          className="max-w-full max-h-full object-contain"
        />
      </div>

      <div className="absolute right-0 top-0 w-full h-full opacity-10">
        <img
          src={heroImage}
          alt="Service Auto Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto mt-28 sm:mt-16">
        <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 text-white drop-shadow-lg">
          Service Vulcanizare
          <br />
          Timișoara
        </h1>
        <p className="font-montserrat text-xl md:text-2xl text-center mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Servicii profesionale de vulcanizare și întreținere anvelope,
          <span className="block mt-2 text-orange-400 font-semibold">
            disponibile 24/7
          </span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-6 transform hover:scale-105 transition-transform duration-200 shadow-lg"
            onClick={() => (window.location.href = "tel:+40761627184")}
          >
            <Phone className="mr-2 h-6 w-6" />
            Sună Acum
          </Button>
          <p className="text-white/80 text-lg font-montserrat">
            Rezolvăm orice problemă cu anvelopele tale!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
