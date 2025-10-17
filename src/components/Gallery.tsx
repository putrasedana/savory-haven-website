import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Gallery = () => {
  const images = [
    { src: gallery1, alt: "Gourmet pasta dish" },
    { src: gallery2, alt: "Wood-fired pizza" },
    { src: gallery3, alt: "Fresh salad bowl" },
    { src: gallery4, alt: "Chocolate lava cake" },
    { src: gallery5, alt: "Restaurant ambiance" },
    { src: gallery6, alt: "Coffee and pastries" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null;

  // keyboard navigation for modal
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowLeft") {
        setSelectedIndex((i) =>
          i === null ? null : (i - 1 + images.length) % images.length
        );
      } else if (e.key === "ArrowRight") {
        setSelectedIndex((i) => (i === null ? null : (i + 1) % images.length));
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, images.length]);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into the culinary artistry and warm atmosphere that
            defines Savory Haven
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg hover-lift animate-fade-in cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      <Dialog
        open={selectedIndex !== null}
        onOpenChange={() => setSelectedIndex(null)}
      >
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 w-fit translate-x-[-50%] translate-y-[-50%] p-0 overflow-hidden rounded-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
            <DialogPrimitive.Close className="absolute left-[50%] top-0 -translate-x-1/2 z-50 rounded-full w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors focus:outline-none focus-visible:ring-0">
              <X className="h-4 w-4 text-white" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>

            {selectedImage && (
              <div className="relative pt-10">
                {/* Prev button */}
                <button
                  onClick={() =>
                    setSelectedIndex((i) =>
                      i === null
                        ? null
                        : (i - 1 + images.length) % images.length
                    )
                  }
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-50 rounded-full w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white focus:outline-none focus-visible:ring-0"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-[85vw] max-h-[85vh] h-auto w-auto object-contain rounded-lg"
                />

                {/* Next button */}
                <button
                  onClick={() =>
                    setSelectedIndex((i) =>
                      i === null ? null : (i + 1) % images.length
                    )
                  }
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-50 rounded-full w-10 h-10 flex items-center justify-center bg-black/40 hover:bg-black/60 text-white focus:outline-none focus-visible:ring-0"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </Dialog>
    </section>
  );
};

export default Gallery;
