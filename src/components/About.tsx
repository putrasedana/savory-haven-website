import { Leaf, Heart, Award } from "lucide-react";
import chefImage from "@/assets/chef-portrait.jpg";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "Farm-to-Table",
      description: "Locally sourced organic ingredients",
    },
    {
      icon: Heart,
      title: "Family Recipes",
      description: "Time-honored culinary traditions",
    },
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized for culinary excellence",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
              <img
                src={chefImage}
                alt="Chef portrait"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
              <p className="text-4xl font-display font-bold">15+</p>
              <p className="text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Story
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Founded in 2009, Savory Haven began with a simple mission: to bring
              the authentic flavors of farm-fresh cuisine to our community. Our
              Chef, Maria Rodriguez, combines her grandmother's traditional
              recipes with modern culinary techniques to create unforgettable
              dining experiences.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Every dish tells a story, crafted with passion and the finest
              locally-sourced ingredients. We believe that great food brings
              people together, creating memories that last a lifetime.
            </p>

            {/* Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
