import React from "react";
import { Link } from "react-router-dom";
import { Activity, Home, Menu } from "lucide-react";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-medium border-b border-white/5">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center">
              <Activity className="h-5 w-5 text-background" />
            </div>
            <span className="text-2xl font-semibold text-gold tracking-tight">
              ELITE FIT
            </span>
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              onClick={scrollToTop}
              className="text-foreground/80 hover:text-gold transition-colors font-medium"
            >
              Home
            </Link>
            <a 
              href="#exercises" 
              className="text-foreground/80 hover:text-gold transition-colors font-medium"
            >
              Exercises
            </a>
          </div>

          {/* Mobile menu */}
          <button className="md:hidden p-2">
            <Menu className="h-6 w-6 text-foreground" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
