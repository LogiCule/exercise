import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, TrendingUp, Users } from "lucide-react";

const HeroBanner = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-3xl rounded-full" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Accent line */}
          <div className="w-24 h-0.5 bg-gradient-gold mx-auto mb-8" />
          
          {/* Main heading - improved spacing */}
          <h1 className="mb-8 text-foreground animate-fade-in">
            Transform Your
            <br />
            <span className="text-gold">Fitness Journey</span>
          </h1>

          {/* Subheading - improved line height */}
          <p className="text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Access professional exercise guides with detailed instructions and expert recommendations tailored to your goals
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a href="#exercises">
              <Button 
                size="lg" 
                className="bg-gradient-gold hover:shadow-gold text-background font-semibold px-8 py-6 text-lg rounded-lg transition-all"
              >
                Explore Exercises
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Stats - improved spacing */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center mb-3">
                <Award className="h-8 w-8 text-gold" />
              </div>
              <div className="text-3xl font-bold text-foreground tracking-tight">1300+</div>
              <div className="text-foreground/50 text-sm leading-relaxed">Professional Exercises</div>
            </div>
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="h-8 w-8 text-gold" />
              </div>
              <div className="text-3xl font-bold text-foreground tracking-tight">50+</div>
              <div className="text-foreground/50 text-sm leading-relaxed">Body Part Categories</div>
            </div>
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-gold" />
              </div>
              <div className="text-3xl font-bold text-foreground tracking-tight">Expert</div>
              <div className="text-foreground/50 text-sm leading-relaxed">Guidance & Videos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
