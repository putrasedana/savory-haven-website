import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import contactHero from "@/assets/contact-hero.jpg";

const ContactPage = () => {
  const openingHours = [
    { day: "Monday - Thursday", hours: "11:00 AM - 10:00 PM" },
    { day: "Friday - Saturday", hours: "11:00 AM - 11:00 PM" },
    { day: "Sunday", hours: "11:00 AM - 9:00 PM" },
  ];

  const whatsappNumber = "6281234567890000000";
  const emailAddress = "hello@savoryhaven15416146514.com";

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you"
        backgroundImage={contactHero}
      />

      {/* Contact Section */}
      <section className="py-16 sm:py-20 bg-background flex-1">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 max-w-6xl mx-auto">
            {/* Contact Options */}
            <div className="animate-fade-in">
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8 text-base sm:text-lg leading-relaxed">
                Whether you’d like to make a reservation, host a special event,
                or just have a question, feel free to contact us directly using
                one of the options below.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hello%20Savory%20Haven,%20I'd%20like%20to%20make%20a%20reservation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 text-base font-medium text-white 
               bg-green-600/90 hover:bg-green-600 rounded-xl transition-all duration-200
               shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  <FaWhatsapp className="w-8 h-8" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Gmail Button */}
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                    emailAddress
                  )}&su=${encodeURIComponent(
                    "Inquiry"
                  )}&body=${encodeURIComponent("Hello Savory Haven,")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 text-base font-medium text-white 
               bg-primary/90 hover:bg-primary rounded-xl transition-all duration-200
               shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <FaEnvelope className="w-7 h-7" />
                  <span>Send Gmail</span>
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                Our Information
              </h2>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    {/* Address */}
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Address</h3>
                        <p className="text-muted-foreground text-sm sm:text-base">
                          350 5th Avenue
                          <br />
                          New York, NY 10118
                          <br />
                          United States
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                        <a
                          href="tel:+12125551234"
                          className="text-primary hover:underline text-sm sm:text-base"
                        >
                          (212) 555-1234
                        </a>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="overflow-hidden">
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <a
                          href={`mailto:${emailAddress}`}
                          className="text-primary hover:underline break-words text-sm sm:text-base"
                        >
                          {emailAddress}
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Opening Hours */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3">
                        Opening Hours
                      </h3>
                      <div className="space-y-2 text-sm sm:text-base">
                        {openingHours.map((schedule, index) => (
                          <div
                            key={index}
                            className="flex justify-between flex-wrap"
                          >
                            <span className="text-muted-foreground">
                              {schedule.day}
                            </span>
                            <span className="font-medium">
                              {schedule.hours}
                            </span>
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
        <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
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
    </div>
  );
};

export default ContactPage;
