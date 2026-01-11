import { 
  Monitor, 
  Cloud, 
  Server, 
  Shield, 
  Building2, 
  Phone,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "IT & Network Management",
      description: "Managed support, system health checks, backups, and Office 365 migration. Keep your practice running smoothly with proactive IT care.",
      features: ["24/7 Monitoring", "Health Checks", "Office 365 Migration"],
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Managed cloud office and virtualisation setup. Access your practice data securely from anywhere with enterprise-grade cloud solutions.",
      features: ["Cloud Migration", "Virtual Desktops", "Secure Access"],
    },
    {
      icon: Server,
      title: "IT Hardware",
      description: "Sales and installation of servers, PCs, and printers. As Lenovo and Kyocera partners, we provide reliable enterprise hardware.",
      features: ["Lenovo Partner", "Kyocera Partner", "Expert Installation"],
    },
    {
      icon: Shield,
      title: "IT Security",
      description: "Trend Micro protection, data recovery, and comprehensive backup solutions. Protect your patient data with industry-leading security.",
      features: ["Trend Micro", "Data Recovery", "Onsite/Cloud Backup"],
    },
    {
      icon: Building2,
      title: "Medical Fitouts",
      description: "Full commercial fitouts for medical centres, including structured cabling, hardware setup, and complete IT infrastructure.",
      features: ["Structured Cabling", "Hardware Setup", "Full Integration"],
    },
    {
      icon: Phone,
      title: "VoIP Telephony",
      description: "Nexgen phone systems and voice-over-internet solutions. Modern communication systems designed for healthcare practices.",
      features: ["Nexgen Systems", "VoIP Solutions", "Unified Communications"],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-soft-blue">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
            Comprehensive IT Solutions for Healthcare
          </h2>
          <p className="text-lg text-muted-foreground">
            From managed IT support to complete medical fitouts, we provide end-to-end technology solutions tailored for the healthcare sector.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
