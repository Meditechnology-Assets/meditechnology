import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cable, Server, Monitor, Wifi, ArrowRight, CheckCircle2 } from "lucide-react";

const MedicalFitoutsFeature = () => {
  const features = [
    {
      icon: Cable,
      title: "Structured Data Cabling",
      description: "Professional Cat6/Cat6a cabling for reliable, high-speed connectivity throughout your practice.",
    },
    {
      icon: Server,
      title: "Server Room Setup",
      description: "Complete rack installation, power management, and cooling solutions for your IT infrastructure.",
    },
    {
      icon: Monitor,
      title: "Workstation Deployment",
      description: "Desk mounting, screen installation, and workstation setup for reception and consulting rooms.",
    },
    {
      icon: Wifi,
      title: "Network Infrastructure",
      description: "Enterprise-grade routers, switches, and wireless access points for comprehensive coverage.",
    },
  ];

  const benefits = [
    "Single point of contact for all IT fitout needs",
    "Experience with major practice management software",
    "Coordination with builders and electricians",
    "Minimal disruption to practice operations",
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground font-semibold text-sm mb-6">
              Specialist Service
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
              Complete Medical Practice Fitouts
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              End-to-end IT infrastructure setup for new clinics, renovations, and practice expansions. We handle everything from cabling to configuration, ensuring your practice is ready to operate from day one.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Link to="/services/medical-fitouts">
              <Button size="lg" className="gap-2">
                Discuss Your Project
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Right - Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalFitoutsFeature;
