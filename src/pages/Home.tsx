import { Leaf, Heart, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import salmonImg from "@/assets/menu/salmon.jpg";
import ribeye from "@/assets/menu/ribeye.jpg";
import risotto from "@/assets/menu/risotto.jpg";
import { getReservationMailto } from "@/lib/emailTemplates";

const Home = () => {
  const features = [
    {
      icon: Leaf,
      title: "Fresh Ingredients",
      description: "Locally sourced, organic produce delivered daily",
    },
    {
      icon: Heart,
      title: "Family Recipes",
      description: "Traditional recipes passed down through generations",
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized for culinary excellence since 2009",
    },
  ];

  const featuredDishes = [
    {
      name: "Herb-Crusted Salmon",
      description: "Wild-caught salmon with lemon butter sauce",
      price: "$32",
      image: salmonImg,
    },
    {
      name: "Grilled Ribeye Steak",
      description: "14oz grass-fed ribeye with herb butter",
      price: "$42",
      image: ribeye,
    },
    {
      name: "Wild Mushroom Risotto",
      description: "Arborio rice with truffle oil and parmesan",
      price: "$26",
      image: risotto,
    },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Quality",
      description: "Premium ingredients and expert preparation",
    },
    {
      icon: Heart,
      title: "Atmosphere",
      description: "Warm, inviting dining experience",
    },
    {
      icon: Users,
      title: "Service",
      description: "Attentive, friendly staff",
    },
    {
      icon: Leaf,
      title: "Value",
      description: "Exceptional food at fair prices",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />

      {/* Welcome Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 text-orange-500">
              Welcome to Savory Haven
            </h2>
            <p className="text-foreground/80 text-xl md:text-2xl max-w-4xl mx-auto mb-16 leading-relaxed font-light">
              Where farm-fresh ingredients meet timeless culinary traditions.
              Experience the perfect blend of modern American cuisine with
              international influences, crafted with passion and served with
              warmth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/20 to-accent/20 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-2xl mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <Link to="/about">
            <Button
              size="lg"
              className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Signature Dishes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Taste the difference that quality ingredients and expert
              preparation make
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {featuredDishes.map((dish, index) => (
              <Card key={index} className="hover-lift overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-xl">{dish.name}</h3>
                    <span className="text-primary font-bold text-xl">
                      {dish.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/menu">
              <Button size="lg" variant="default">
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Why Choose Savory Haven
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <Testimonials />

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Experience Savory Haven?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Reserve your table today and discover why we're the neighborhood's
            favorite dining destination
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8">
            <a href={getReservationMailto()}>Make a Reservation</a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
