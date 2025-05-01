
import { Button } from "@/components/ui/button";
import { PartyPopper } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-kenya-red to-kenya-black py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-24 h-24 bg-kenya-green rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-kenya-red rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-kenya-white rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block animate-float">
            <PartyPopper className="w-16 h-16 mx-auto text-kenya-white mb-4" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-kenya-white mb-6">
            Kenya Labor Day
            <span className="block text-kenya-green">Celebration 2025</span>
          </h1>
          
          <p className="text-xl text-kenya-white/80 mb-8">
            Join us in celebrating the strength and resilience of Kenya's workforce on this special day of recognition and unity.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-kenya-green hover:bg-kenya-green/90 text-white">
              View Schedule
            </Button>
            <Button size="lg" variant="outline" className="border-kenya-white text-kenya-green hover:bg-kenya-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-kenya-black to-transparent"></div>
    </section>
  );
};

export default Hero;
