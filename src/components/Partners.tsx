const MicrosoftLogo = () => (
  <svg viewBox="0 0 23 23" className="w-12 h-12">
    <path fill="#f35325" d="M1 1h10v10H1z"/>
    <path fill="#81bc06" d="M12 1h10v10H12z"/>
    <path fill="#05a6f0" d="M1 12h10v10H1z"/>
    <path fill="#ffba08" d="M12 12h10v10H12z"/>
  </svg>
);

const LenovoLogo = () => (
  <svg viewBox="0 0 200 40" className="w-24 h-8">
    <text x="10" y="30" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#E2231A">lenovo</text>
  </svg>
);

const KyoceraLogo = () => (
  <svg viewBox="0 0 200 40" className="w-24 h-8">
    <text x="10" y="30" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#ED1C24">KYOCERA</text>
  </svg>
);

const TrendMicroLogo = () => (
  <svg viewBox="0 0 50 50" className="w-12 h-12">
    <circle cx="25" cy="25" r="22" fill="#D71920"/>
    <path d="M15 25 L22 32 L35 18" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EatonLogo = () => (
  <svg viewBox="0 0 120 40" className="w-20 h-8">
    <text x="5" y="30" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="bold" fill="#005EB8">EATON</text>
  </svg>
);

const TeamViewerLogo = () => (
  <svg viewBox="0 0 50 50" className="w-12 h-12">
    <rect x="5" y="5" width="40" height="40" rx="8" fill="#0E8EE9"/>
    <circle cx="25" cy="25" r="8" fill="white"/>
    <path d="M17 25 L33 25 M25 17 L25 33" stroke="white" strokeWidth="3"/>
  </svg>
);

const Partners = () => {
  const partners = [
    { name: "Microsoft", Logo: MicrosoftLogo },
    { name: "Lenovo", Logo: LenovoLogo },
    { name: "Kyocera", Logo: KyoceraLogo },
    { name: "Trend Micro", Logo: TrendMicroLogo },
    { name: "Eaton", Logo: EatonLogo },
    { name: "TeamViewer", Logo: TeamViewerLogo },
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
              {/* Logo */}
              <div className="mb-4 grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                <partner.Logo />
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
