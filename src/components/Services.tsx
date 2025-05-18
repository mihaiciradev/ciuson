
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, CarFront, Truck, WrenchIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    title: "Vulcanizare",
    description: "Servicii complete de vulcanizare pentru toate tipurile de vehicule",
    icon: <CarFront className="h-10 w-10 text-orange-500" />,
    longDescription: "De la bicicletă până la tractor, noi le facem pe toate! Serviciul nostru de vulcanizare oferă soluții profesionale pentru orice tip de vehicul. Folosim tehnologie de ultimă generație și materiale premium pentru a asigura siguranța și longevitatea anvelopelor dumneavoastră.",
  },
  {
    title: "Vulcanizare Mobilă",
    description: "Servicii de vulcanizare la locația dumneavoastră, disponibile 24/7",
    icon: <Truck className="h-10 w-10 text-orange-500" />,
    longDescription: "Serviciul nostru mobil vine la dumneavoastră oriunde în Timișoara și împrejurimi, 24/7! Fie că sunteți blocat pe marginea drumului sau preferați confortul locației proprii, echipa noastră vine echipată cu toate sculele necesare pentru a rezolva orice problemă cu anvelopele.",
  },
  {
    title: "Reparatii anvelope la cald",
    description: "Reparăm anvelope de orice dimensiuni",
    icon: <WrenchIcon className="h-10 w-10 text-orange-500" />,
    longDescription: "Specializați în repararea anvelopelor de orice dimensiune - de la autoturisme până la camioane și utilaje agricole! Reparăm anvelope pentru tractoare și alte utilaje grele, oferind soluții durabile și profesionale pentru a prelungi viața anvelopelor dumneavoastră.",
  },
  {
    title: "Spălătorie Auto",
    description: "Servicii complete de spălătorie și curățare auto",
    icon: <Car className="h-10 w-10 text-orange-500" />,
    longDescription: "Servicii complete de spălătorie auto, incluzând curățare interior, polish, ceruire și tratamente ceramice. Folosim detergenți premium și tehnologii moderne pentru a asigura că vehiculul dumneavoastră strălucește ca nou. Oferim pachete personalizate pentru toate tipurile de vehicule.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    setSelectedService(null);
  }, [isMobile]);

  const handleServiceInteraction = (index: number) => {
    if (isMobile) {
      setSelectedService(selectedService === index ? null : index);
    }
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-100">
      <h2 className="font-playfair text-4xl font-bold text-center mb-12">Serviciile Noastre</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="hover:shadow-lg transition-all hover:translate-y-[-5px] border-t-2 border-orange-500 cursor-pointer"
            onMouseEnter={() => !isMobile && setSelectedService(index)}
            onMouseLeave={() => !isMobile && setSelectedService(null)}
            onClick={() => handleServiceInteraction(index)}
          >
            <CardHeader className="flex flex-col items-center">
              {service.icon}
              <CardTitle className="mt-4 text-xl text-center font-montserrat">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center text-gray-600 font-montserrat">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className={`
        mt-8 transition-all duration-500 ease-in-out overflow-hidden
        ${selectedService !== null ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        {selectedService !== null && (
          <Card className="bg-white/95 backdrop-blur-sm shadow-xl border-t-4 border-orange-500 max-w-4xl mx-auto">
            <CardContent className="p-6">
              <p className="text-lg font-montserrat leading-relaxed text-gray-700">
                {services[selectedService].longDescription}
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
};

export default Services;
