import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Savory Haven</h3>
            <p className="text-background/80 mb-4">
              Where farm-fresh ingredients meet timeless culinary traditions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2 rounded-full hover:bg-background/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2 rounded-full hover:bg-background/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-2 rounded-full hover:bg-background/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Menu", path: "/menu" },
                { label: "Gallery", path: "/gallery" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/80 hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-background/80">
              <li>350 5th Avenue</li>
              <li>New York, NY 10118</li>
              <li>
                <a href="tel:+12125551234" className="hover:text-background transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@savoryhaven.com"
                  className="hover:text-background transition-colors"
                >
                  hello@savoryhaven.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-background/80 mb-4">
              Subscribe to get special offers and updates
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; {new Date().getFullYear()} Savory Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
