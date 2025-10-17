import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";

const Index = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onReserveClick={() => setIsReservationOpen(true)} />
      <Hero onReserveClick={() => setIsReservationOpen(true)} />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Location />
      <Footer />
      <ReservationModal open={isReservationOpen} onOpenChange={setIsReservationOpen} />
    </div>
  );
};

export default Index;
