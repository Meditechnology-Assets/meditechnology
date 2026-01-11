import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Cloud, 
  Monitor, 
  Lock, 
  Zap, 
  Globe, 
  Database 
} from "lucide-react";

const CloudServicesPage = () => {
  const features = [
    {
      icon: Monitor,
      title: "Virtual Desktops",
      description: "Secure virtual desktop infrastructure allowing your staff to work from anywhere with full access to practice applications.",
    },
    {
      icon: Database,
      title: "Cloud Hosting",
      description: "Reliable Azure and AWS hosting solutions with Australian data centres to ensure data sovereignty and low latency.",
    },
    {
      icon: Lock,
      title: "Secure Remote Access",
      description: "Enterprise-grade VPN and remote access solutions that keep your data safe while enabling flexible work arrangements.",
    },
    {
      icon: Zap,
      title: "Cloud Migration",
      description: "Expert migration services to move your on-premises systems to the cloud with minimal disruption to operations.",
    },
    {
      icon: Globe,
      title: "Multi-Site Connectivity",
      description: "Connect multiple practice locations seamlessly with secure cloud networking and shared resources.",
    },
    {
      icon: Cloud,
      title: "Disaster Recovery",
      description: "Cloud-based backup and disaster recovery solutions ensuring business continuity in any situation.",
    },
  ];

  const benefits = [
    "Reduce hardware costs by up to 40% with cloud infrastructure",
    "Enable secure remote work for all staff members",
    "Automatic scaling to handle peak periods",
    "Australian data centres for data sovereignty compliance",
    "99.9% uptime guarantee with enterprise SLAs",
    "Pay-as-you-go pricing with predictable monthly costs",
  ];

  const process = [
    {
      step: 1,
      title: "Discovery",
      description: "We analyse your current infrastructure and identify the best cloud strategy for your practice.",
    },
    {
      step: 2,
      title: "Design",
      description: "Our architects design a secure, compliant cloud solution tailored to healthcare requirements.",
    },
    {
      step: 3,
      title: "Migration",
      description: "We migrate your systems with careful planning to ensure zero data loss and minimal downtime.",
    },
    {
      step: 4,
      title: "Optimisation",
      description: "Ongoing monitoring and optimisation to maximise performance and minimise costs.",
    },
  ];

  return (
    <ServicePageLayout
      title="Cloud Services"
      subtitle="Cloud Solutions"
      description="Modern cloud infrastructure and virtualisation solutions that give your practice the flexibility, security, and scalability it needs to thrive."
      icon={Cloud}
      features={features}
      benefits={benefits}
      process={process}
    />
  );
};

export default CloudServicesPage;
