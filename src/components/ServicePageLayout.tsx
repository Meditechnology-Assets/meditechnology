import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: Feature[];
  benefits: string[];
  process: ProcessStep[];
  children?: ReactNode;
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  benefits,
  process,
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-primary-foreground/60 mb-8">
            <Link to="/" className="hover:text-primary-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/#services" className="hover:text-primary-foreground transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary-foreground">{title}</span>
          </nav>

          <div className="flex items-start gap-6 max-w-4xl">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8 text-sky" />
            </div>
            <div>
              <span className="text-sky font-medium mb-2 block">{subtitle}</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6">
                {title}
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-navy mb-4">
              Key Features
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive solutions tailored to your healthcare IT needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-navy mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-soft-blue">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-navy mb-6">
                Why Choose Meditechnology?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We bring over 20 years of healthcare IT expertise to every project, ensuring your practice runs smoothly and securely.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-teal" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="font-display text-2xl text-navy mb-4">Ready to Get Started?</h3>
              <p className="text-muted-foreground mb-6">
                Contact us today for a free consultation and learn how we can support your practice.
              </p>
              <div className="space-y-4">
                <Button className="w-full group" size="lg">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <a
                  href="tel:1300608099"
                  className="flex items-center justify-center gap-2 text-primary font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  1300 60 80 99
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl text-navy mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A straightforward approach to delivering exceptional IT solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="relative">
                <div className="bg-card rounded-2xl p-8 shadow-card h-full">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display text-xl font-bold mb-6">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl text-navy mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get in touch with our team today and discover how Meditechnology can support your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Get a Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
