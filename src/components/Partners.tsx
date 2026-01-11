const Partners = () => {
  const partners = [
    { name: "Microsoft", logo: "M" },
    { name: "Lenovo", logo: "L" },
    { name: "Kyocera", logo: "K" },
    { name: "Trend Micro", logo: "TM" },
    { name: "Eaton UPS", logo: "E" },
    { name: "TeamViewer", logo: "TV" },
  ];

  return (
    <section id="partners" className="py-24 lg:py-32 bg-soft-blue">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Our Partners
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
            Trusted Technology Partners
          </h2>
          <p className="text-lg text-muted-foreground">
            We partner with industry-leading technology providers to deliver the best solutions for your practice.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center aspect-square"
            >
              {/* Placeholder Logo */}
              <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                <span className="text-2xl font-display font-bold text-muted-foreground group-hover:text-primary transition-colors">
                  {partner.logo}
                </span>
              </div>
              <span className="text-sm font-semibold text-foreground text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Want to become a partner? We're always looking to expand our network.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
