import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      rating: 5,
      text: "Absolutely phenomenal! The herb-crusted salmon was perfectly cooked, and the ambiance is unmatched. This is our go-to spot for special occasions.",
      date: "2 weeks ago",
    },
    {
      name: "James Cooper",
      rating: 5,
      text: "Farm-to-table done right! You can taste the freshness in every bite. The chef's attention to detail and the friendly service make this place truly special.",
      date: "3 weeks ago",
    },
    {
      name: "Emily Zhang",
      rating: 5,
      text: "An unforgettable dining experience. The wild mushroom risotto was divine, and the chocolate lava cake is to die for. Can't wait to return!",
      date: "1 month ago",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our valued guests
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift animate-fade-in">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
