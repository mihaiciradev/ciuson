
import { Card } from './ui/card';

const Map = () => {
  return (
    <Card className="w-full h-[450px] overflow-hidden">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1657.2293288530313!2d21.173449356760127!3d45.688635937590405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1745482995247!5m2!1sen!2sro" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />
    </Card>
  );
};

export default Map;
