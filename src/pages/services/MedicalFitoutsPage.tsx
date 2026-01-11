import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Building2, 
  Cable, 
  Server, 
  Monitor, 
  Wifi, 
  CheckCircle2 
} from "lucide-react";

const MedicalFitoutsPage = () => {
  const features = [
    {
      icon: Cable,
      title: "Structured Cabling",
      description: "Professional data and voice cabling installations designed for medical environments with future expansion in mind.",
    },
    {
      icon: Server,
      title: "Server Room Setup",
      description: "Complete server room design and installation including racks, power, cooling, and cable management.",
    },
    {
      icon: Monitor,
      title: "Workstation Deployment",
      description: "Installation and configuration of reception, consultation, and treatment room workstations.",
    },
    {
      icon: Wifi,
      title: "Network Infrastructure",
      description: "Enterprise-grade networking equipment installation including routers, switches, and wireless access points.",
    },
    {
      icon: Building2,
      title: "New Practice Builds",
      description: "End-to-end IT fitout services for new medical centres, working with builders and other trades.",
    },
    {
      icon: CheckCircle2,
      title: "Practice Relocations",
      description: "Seamless IT relocation services ensuring minimal downtime when moving to a new premises.",
    },
  ];

  const benefits = [
    "Single point of contact for all IT fitout needs",
    "Experience with major practice management software",
    "Coordination with builders, electricians, and other trades",
    "Compliance with healthcare IT best practices",
    "Future-proof infrastructure design",
    "Project management from planning to handover",
  ];

  const process = [
    {
      step: 1,
      title: "Site Survey",
      description: "We visit your site to understand the layout and develop a comprehensive IT infrastructure plan.",
    },
    {
      step: 2,
      title: "Design & Quote",
      description: "Detailed design documentation and transparent pricing for all equipment and installation.",
    },
    {
      step: 3,
      title: "Installation",
      description: "Professional installation coordinated with other trades to meet your project timeline.",
    },
    {
      step: 4,
      title: "Commissioning",
      description: "Full system testing, documentation, and staff training before handover.",
    },
  ];

  return (
    <ServicePageLayout
      title="Medical Fitouts"
      subtitle="Commercial Fitouts"
      description="Complete IT infrastructure fitout services for new medical practices, renovations, and relocations. We handle everything from cabling to configuration."
      icon={Building2}
      features={features}
      benefits={benefits}
      process={process}
    />
  );
};

export default MedicalFitoutsPage;
