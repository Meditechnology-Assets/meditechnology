import { CheckCircle2, Award, Handshake, HeartPulse } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: HeartPulse,
      title: "Healthcare Specialists",
      description: "Deep understanding of medical practice IT requirements and compliance needs.",
    },
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Serving the Australian healthcare sector since 2002 with proven expertise.",
    },
    {
      icon: Handshake,
      title: "Vendor Integration",
      description: "The vital link between technology vendors and your medical practice.",
    },
  ];

  const benefits = [
    "Cost-effective solutions tailored to your budget",
    "Rapid response times for critical issues",
    "Compliance with healthcare data regulations",
    "Seamless integration with medical software",
    "Proactive maintenance and monitoring",
    "Local Australian-based support team",
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
              About Meditechnology
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
              Your Trusted Medical IT Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Meditechnology has been servicing the medical IT sector since 2002. We are the vital link between vendors and your medical practice, offering integrated solutions at cost-effective prices.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our team understands the unique challenges faced by healthcare providers. From ensuring patient data security to maintaining seamless practice operations, we deliver reliable IT solutions that let you focus on what matters most—patient care.
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Features Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-5 p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}

            {/* Stats Card */}
            <div className="bg-navy rounded-2xl p-8 text-center">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-display font-bold text-primary-foreground mb-1">500+</div>
                  <div className="text-sm text-primary-foreground/70">Practices Served</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary-foreground mb-1">99.9%</div>
                  <div className="text-sm text-primary-foreground/70">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-primary-foreground mb-1">24/7</div>
                  <div className="text-sm text-primary-foreground/70">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
