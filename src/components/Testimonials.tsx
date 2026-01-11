import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Practice Manager",
      practice: "Northside Medical Centre",
      quote: "Meditechnology transformed our IT infrastructure. Their understanding of healthcare compliance is exceptional, and their response times are unmatched.",
      rating: 5,
    },
    {
      name: "James Wong",
      role: "Operations Director",
      practice: "Allied Health Partners",
      quote: "The team's response time is incredible. Any issue we have is resolved within hours, not days. They truly understand the urgency of healthcare IT.",
      rating: 5,
    },
    {
      name: "Dr. Rebecca Chen",
      role: "General Practitioner",
      practice: "Coastal Family Practice",
      quote: "From our initial fitout to ongoing support, Meditechnology has been our trusted IT partner for over 8 years. Couldn't recommend them more highly.",
      rating: 5,
    },
    {
      name: "Michael Torres",
      role: "IT Coordinator",
      practice: "Regional Health Network",
      quote: "Their cloud migration saved us significant costs while improving our data security and accessibility. The transition was seamless.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-6">
            Trusted by Healthcare Professionals
          </h2>
          <p className="text-lg text-muted-foreground">
            See what our clients say about working with Meditechnology for their IT needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-lg text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-sky flex items-center justify-center text-white font-display font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.practice}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3 px-6 py-3 bg-muted rounded-full">
            <span className="text-2xl font-display font-bold text-primary">500+</span>
            <span className="text-muted-foreground">Practices Served</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-muted rounded-full">
            <span className="text-2xl font-display font-bold text-primary">20+</span>
            <span className="text-muted-foreground">Years of Experience</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-muted rounded-full">
            <span className="text-2xl font-display font-bold text-primary">99.9%</span>
            <span className="text-muted-foreground">Client Retention</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
