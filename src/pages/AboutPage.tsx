import { Leaf, Heart, Award, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import aboutHero from "@/assets/about-hero.jpg";
import chefImage from "@/assets/chef-portrait.jpg";
import chefTeam from "@/assets/team/chef.jpg";
import manager from "@/assets/team/manager.jpg";
import sommelier from "@/assets/team/sommelier.jpg";

const AboutPage = () => {
  const team = [
    {
      name: "Maria Rodriguez",
      title: "Head Chef & Owner",
      bio: "With over 20 years of culinary experience, Maria brings her grandmother's traditional recipes to life with a modern twist.",
      image: chefTeam,
    },
    {
      name: "James Mitchell",
      title: "Restaurant Manager",
      bio: "James ensures every guest has an exceptional dining experience, overseeing service with warmth and professionalism.",
      image: manager,
    },
    {
      name: "Sophie Chen",
      title: "Sommelier",
      bio: "Sophie curates our wine selection, pairing the perfect wines with our seasonal menu offerings.",
      image: sommelier,
    },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "We source ingredients from local farms, supporting our community and reducing our environmental impact.",
    },
    {
      icon: Heart,
      title: "Passion",
      description:
        "Every dish is crafted with love and attention to detail, honoring culinary traditions while embracing innovation.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in food quality, service, and ambiance to exceed your expectations.",
    },
    {
      icon: Users,
      title: "Community",
      description:
        "We're more than a restaurant – we're a gathering place where memories are made and friendships flourish.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHero
        title="About Us"
        subtitle="Our passion for food and community drives everything we do"
        backgroundImage={aboutHero}
      />

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Savory Haven opened its doors in 2009 with a simple yet profound
                mission: to bring authentic, farm-fresh cuisine to our
                community. What started as a small family restaurant has grown
                into a beloved neighborhood destination, known for our
                commitment to quality and warm hospitality.
              </p>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Our founder and head chef, Maria Rodriguez, grew up in her
                grandmother's kitchen, learning the secrets of traditional
                cooking that have been passed down through generations. She
                combines these time-honored techniques with modern culinary
                innovation to create dishes that are both familiar and exciting.
              </p>
              <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                Today, Savory Haven continues to evolve while staying true to
                our roots. We work closely with local farmers and artisans,
                ensuring that every ingredient meets our exacting standards. Our
                menu changes with the seasons, celebrating the best that each
                time of year has to offer.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                More than just a place to eat, Savory Haven is where the
                community comes together – to celebrate milestones, enjoy
                everyday moments, and create lasting memories over exceptional
                food.
              </p>
            </div>

            <div className="relative animate-fade-in">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={chefImage}
                  alt="Chef in kitchen"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-display font-bold">15+</p>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The passionate people behind your dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="hover-lift overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">
                    {member.title}
                  </p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
