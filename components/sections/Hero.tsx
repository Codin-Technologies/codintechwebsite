import { Button } from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-16">
      {/* Tech grid background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        
        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="tech-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(var(--primary) / 0.2)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tech-grid)" />
        </svg>
        
        {/* Glowing connection nodes */}
        <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-primary rounded-full shadow-[0_0_20px_6px_hsl(var(--primary)/0.4)] animate-pulse" />
        <div className="absolute top-[25%] right-[20%] w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_4px_hsl(var(--primary)/0.3)] animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[60%] left-[15%] w-2.5 h-2.5 bg-accent rounded-full shadow-[0_0_18px_5px_hsl(var(--accent)/0.4)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[40%] right-[10%] w-3 h-3 bg-primary rounded-full shadow-[0_0_20px_6px_hsl(var(--primary)/0.4)] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[20%] left-[25%] w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_4px_hsl(var(--accent)/0.3)] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-[30%] right-[30%] w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_18px_5px_hsl(var(--primary)/0.35)] animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-[75%] right-[15%] w-2 h-2 bg-accent rounded-full shadow-[0_0_15px_4px_hsl(var(--accent)/0.3)] animate-pulse" style={{ animationDelay: '1.2s' }} />
        
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="15%" x2="20%" y2="25%" stroke="hsl(var(--primary) / 0.15)" strokeWidth="1" />
          <line x1="80%" y1="25%" x2="90%" y2="40%" stroke="hsl(var(--primary) / 0.15)" strokeWidth="1" />
          <line x1="15%" y1="60%" x2="25%" y2="80%" stroke="hsl(var(--accent) / 0.15)" strokeWidth="1" />
          <line x1="70%" y1="70%" x2="85%" y2="75%" stroke="hsl(var(--primary) / 0.15)" strokeWidth="1" />
        </svg>
        
        {/* Floating hexagons */}
        <svg className="absolute top-[20%] right-[25%] w-24 h-24 opacity-20 animate-float" viewBox="0 0 100 100">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-[25%] left-[8%] w-16 h-16 opacity-15 animate-float" style={{ animationDelay: '2s' }} viewBox="0 0 100 100">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="hsl(var(--accent))" strokeWidth="2"/>
        </svg>
        <svg className="absolute top-[50%] right-[5%] w-20 h-20 opacity-10 animate-float" style={{ animationDelay: '1s' }} viewBox="0 0 100 100">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="hsl(var(--primary))" strokeWidth="2"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm text-primary text-sm font-medium mb-6 border border-primary/20">
              ✨ Empowering digital transformation
            </span>
          </div>
          
          <h1 className="animate-fade-up-delay-1 text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6">
            Making Technology{" "}
            <span className="text-gradient">Accessible</span>
            {" "}for Everyone
          </h1>
          
          <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            We bridge the gap between complex technology and real-world impact. 
            Our mission is to make technology accessible, adoptable, and implementable for businesses of all sizes.
          </p>
          
          <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-up-delay-3 mt-16 pt-10 border-t border-border">
            <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
              <div className="text-2xl font-bold text-foreground">Acme Corp</div>
              <div className="text-2xl font-bold text-foreground">Globex</div>
              <div className="text-2xl font-bold text-foreground">Initech</div>
              <div className="text-2xl font-bold text-foreground">Umbrella</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
