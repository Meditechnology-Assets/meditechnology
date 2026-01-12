import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MedicalFitoutsFeature from "@/components/MedicalFitoutsFeature";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import RemoteSupport from "@/components/RemoteSupport";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <MedicalFitoutsFeature />
        <About />
        <Testimonials />
        <Partners />
        <RemoteSupport />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
