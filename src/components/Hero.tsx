import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-restaurant.jpg";
import { getReservationMailto } from "@/lib/emailTemplates";

const Hero = () => {
  const emailAddress = "hello@savoryhaven.com";
  const subject = "Table Reservation at Savory Haven";
  const body = `Hello Savory Haven,%0D%0A
I would like to make a reservation.%0D%0A%0D%0A
Name: [Your Name]%0D%0A
Date: [Preferred Date]%0D%0A
Time: [Preferred Time]%0D%0A
Number of Guests: [Number of People]%0D%0A%0D%0A
Thank you!`;

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
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
          <Link to="/menu">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              View Menu
            </Button>
          </Link>

          {/* Reserve Table via Email */}
          <Button
            asChild
            size="lg"
            className="text-lg px-8 bg-primary hover:bg-primary/90"
          >
            <a href={getReservationMailto()}>Reserve Table</a>
          </Button>
        </div>

        {/* Opening Hours */}
        <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
          <Clock className="w-5 h-5" />
          <span className="font-medium">Open Daily: 11:00 AM - 10:00 PM</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
