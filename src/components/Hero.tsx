import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import heroImage from "@/assets/hero-restaurant.jpg";

interface HeroProps {
  onReserveClick: () => void;
}

const Hero = ({ onReserveClick }: HeroProps) => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
          Savory Haven
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light">
          Where farm-fresh ingredients meet timeless culinary traditions
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={scrollToMenu}
            size="lg"
            variant="secondary"
            className="text-lg px-8"
          >
            View Menu
          </Button>
          <Button
            onClick={onReserveClick}
            size="lg"
            className="text-lg px-8 bg-primary hover:bg-primary/90"
          >
            Reserve Table
          </Button>
        </div>

        {/* Opening Hours */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
          <Clock className="w-5 h-5" />
          <span className="font-medium">
            Open Daily: 11:00 AM - 10:00 PM
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
