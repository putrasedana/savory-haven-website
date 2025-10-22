import { useState } from "react";
import { Instagram } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import galleryHero from "@/assets/gallery-hero.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import shortRibs from "@/assets/menu/short-ribs.jpg";
import salmonImg from "@/assets/menu/salmon.jpg";
import ribeye from "@/assets/menu/ribeye.jpg";
import risotto from "@/assets/menu/risotto.jpg";

const GalleryPage = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHero
        title="Gallery"
        subtitle="A visual journey through our culinary creations and warm ambiance"
        backgroundImage={galleryHero}
      />

      {/* Main Gallery */}
      <Gallery />

      {/* Instagram Feed Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Instagram className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Follow Us on Instagram
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Stay updated with our daily specials, seasonal dishes, and
              behind-the-scenes moments
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
            >
              <Instagram />
              @savoryhaven
            </a>
          </div>

          {/* Instagram Grid Placeholder */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              gallery1,
              gallery2,
              gallery3,
              gallery4,
              shortRibs,
              salmonImg,
              ribeye,
              risotto,
            ].map((src, idx) => (
              <div
                key={idx}
                className="aspect-square rounded-lg overflow-hidden hover:opacity-80 transition-opacity "
              >
                <img
                  src={src}
                  alt={`insta-${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
