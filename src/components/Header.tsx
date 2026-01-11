import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Always show scrolled style on non-home pages
  const showScrolledStyle = isScrolled || !isHomePage;

  const services = [
    { label: "IT & Network Management", href: "/services/it-management" },
    { label: "Cloud Services", href: "/services/cloud-services" },
    { label: "IT Hardware", href: "/services/hardware" },
    { label: "IT Security", href: "/services/security" },
    { label: "Medical Fitouts", href: "/services/medical-fitouts" },
    { label: "VoIP Telephony", href: "/services/voip" },
  ];

  const getNavHref = (hash: string) => {
    return isHomePage ? hash : `/${hash}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showScrolledStyle
          ? "bg-card/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">M</span>
            </div>
            <span className={`font-display font-bold text-xl transition-colors ${
              showScrolledStyle ? "text-navy" : "text-primary-foreground"
            }`}>
              Meditechnology
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-primary ${
                showScrolledStyle ? "text-foreground" : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              Home
            </Link>
            <a
              href={getNavHref("#about")}
              className={`font-medium transition-colors hover:text-primary ${
                showScrolledStyle ? "text-foreground" : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              About Us
            </a>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-medium transition-colors hover:text-primary ${
                  showScrolledStyle ? "text-foreground" : "text-primary-foreground/90 hover:text-primary-foreground"
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 pt-2 w-64 animate-fade-in">
                  <div className="bg-card rounded-xl shadow-card-hover p-2 border border-border">
                    <a
                      href={getNavHref("#services")}
                      className="block px-4 py-2 text-sm font-semibold text-primary hover:bg-muted rounded-lg transition-colors"
                    >
                      View All Services
                    </a>
                    <hr className="my-2 border-border" />
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href={getNavHref("#partners")}
              className={`font-medium transition-colors hover:text-primary ${
                showScrolledStyle ? "text-foreground" : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              Partners
            </a>
            <a
              href={getNavHref("#contact")}
              className={`font-medium transition-colors hover:text-primary ${
                showScrolledStyle ? "text-foreground" : "text-primary-foreground/90 hover:text-primary-foreground"
              }`}
            >
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:1300608099"
              className={`flex items-center gap-2 font-semibold transition-colors ${
                showScrolledStyle ? "text-navy" : "text-primary-foreground"
              }`}
            >
              <Phone className="w-5 h-5" />
              <span>1300 60 80 99</span>
            </a>
            <Button variant="nav" size="default">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${showScrolledStyle ? "text-navy" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${showScrolledStyle ? "text-navy" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card rounded-xl shadow-card-hover p-6 mb-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <a
                href={getNavHref("#about")}
                className="font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </a>
              
              {/* Mobile Services Submenu */}
              <div>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-primary/20">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        to={service.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href={getNavHref("#partners")}
                className="font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Partners
              </a>
              <a
                href={getNavHref("#contact")}
                className="font-medium text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              
              <hr className="border-border my-2" />
              <a
                href="tel:1300608099"
                className="flex items-center gap-2 font-semibold text-navy py-2"
              >
                <Phone className="w-5 h-5" />
                <span>1300 60 80 99</span>
              </a>
              <Button variant="default" className="w-full mt-2">
                Get a Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
