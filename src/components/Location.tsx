import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  const openingHours = [
    { day: "Monday - Thursday", hours: "11:00 AM - 10:00 PM" },
    { day: "Friday - Saturday", hours: "11:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "11:00 AM - 9:00 PM" },
  ];

  return (
    <section id="location" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Visit Us
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We'd love to welcome you to Savory Haven
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Map Placeholder */}
          <div className="animate-fade-in">
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6173688289135!2d-73.98823492346448!3d40.74844097138741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant Location"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-in">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      350 5th Avenue<br />
                      New York, NY 10118<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a
                      href="tel:+12125551234"
                      className="text-primary hover:underline"
                    >
                      (212) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a
                      href="mailto:hello@savoryhaven.com"
                      className="text-primary hover:underline"
                    >
                      hello@savoryhaven.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-3">Opening Hours</h3>
                    <div className="space-y-2">
                      {openingHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between">
                          <span className="text-muted-foreground">{schedule.day}</span>
                          <span className="font-medium">{schedule.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
