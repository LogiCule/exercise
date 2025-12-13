import React from "react";
import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 mt-20 bg-secondary">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gold mb-4">ELITE FIT</h3>
            <p className="text-foreground/60 font-light leading-relaxed">
              Your professional fitness companion for discovering and mastering exercises with expert guidance.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="/" className="text-foreground/60 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#exercises" className="text-foreground/60 hover:text-gold transition-colors">Exercises</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-gold transition-colors">About</a></li>
              <li><a href="#" className="text-foreground/60 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 uppercase tracking-wider text-sm">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-foreground/60">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@elitefit.com</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/60">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/60">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">New York, NY</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground/50 text-sm flex items-center gap-2">
            Made with <Heart className="h-4 w-4 text-gold fill-gold" /> by LogiCule
          </p>
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} ELITE FIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
