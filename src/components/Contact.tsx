
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white to-gray-100">
      {/* Background pattern with thin lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="contact-lines" width="100" height="100" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="100" y2="0" stroke="#333" strokeWidth="0.5" strokeDasharray="10,10" />
            <line x1="0" y1="50" x2="100" y2="50" stroke="#333" strokeWidth="0.5" />
            <line x1="0" y1="100" x2="100" y2="100" stroke="#333" strokeWidth="0.5" strokeDasharray="10,10" />
            <line x1="0" y1="0" x2="0" y2="100" stroke="#333" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="100" stroke="#333" strokeWidth="0.5" strokeDasharray="10,10" />
            <line x1="100" y1="0" x2="100" y2="100" stroke="#333" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#contact-lines)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-4xl font-bold text-center mb-12 font-playfair">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="transition-all hover:shadow-lg hover:translate-y-[-5px] border-t-2 border-orange-500">
            <CardHeader className="flex flex-col items-center">
              <Phone className="h-10 w-10 text-orange-500" />
              <CardTitle className="mt-4 font-montserrat">Telefon</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <a href="tel:+40761627184" className="text-orange-500 hover:text-orange-600 font-medium text-lg">
                +40 761 627 184
              </a>
            </CardContent>
          </Card>
          
          <Card className="transition-all hover:shadow-lg hover:translate-y-[-5px] border-t-2 border-orange-500">
            <CardHeader className="flex flex-col items-center">
              <Mail className="h-10 w-10 text-orange-500" />
              <CardTitle className="mt-4 font-montserrat">Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <a href="mailto:contact@vulcanizare.ro" className="text-orange-500 hover:text-orange-600 font-medium text-lg">
                contact@vulcanizare.ro
              </a>
            </CardContent>
          </Card>
          
          <Card className="transition-all hover:shadow-lg hover:translate-y-[-5px] border-t-2 border-orange-500">
            <CardHeader className="flex flex-col items-center">
              <MapPin className="h-10 w-10 text-orange-500" />
              <CardTitle className="mt-4 font-montserrat">Adresă</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <a 
                href="https://www.google.com/maps/search/timisoara+km9+700" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 font-medium text-lg"
              >
                Timișoara km9+700
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
