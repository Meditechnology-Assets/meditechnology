import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Users } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Clock, label: "Years Experience", value: "20+" },
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Shield, label: "Uptime", value: "99.9%" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sky rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse-soft" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Trusted Healthcare IT Partner Since 2002
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            The Right IT Support{" "}
            <span className="text-sky">When You Need It.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Specialised IT services, network management, and fitouts for the healthcare sector and beyond. Serving Australian practices since 2002.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg" className="group">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="lg">
              View Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-6 h-6 text-sky mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
