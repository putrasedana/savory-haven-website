import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import ReservationModal from "@/components/ReservationModal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import contactHero from "@/assets/contact-hero.jpg";

const ContactPage = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you shortly.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openingHours = [
    { day: "Monday - Thursday", hours: "11:00 AM - 10:00 PM" },
    { day: "Friday - Saturday", hours: "11:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "11:00 AM - 9:00 PM" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation onReserveClick={() => setIsReservationOpen(true)} />
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you"
        backgroundImage={contactHero}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="font-display text-3xl font-bold mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2">
                      Preferred Date
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium mb-2">
                      Number of Guests
                    </label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="2"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your reservation or any special requests..."
                    rows={5}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-display text-3xl font-bold mb-6">
                Get in Touch
              </h2>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Address</h3>
                        <p className="text-muted-foreground">
                          350 5th Avenue
                          <br />
                          New York, NY 10118
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
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
                            <span className="text-muted-foreground">
                              {schedule.day}
                            </span>
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

      {/* Map Section */}
      <section className="py-0">
        <div className="w-full h-[500px]">
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
      </section>

      <Footer />
      <ReservationModal open={isReservationOpen} onOpenChange={setIsReservationOpen} />
    </div>
  );
};

export default ContactPage;
