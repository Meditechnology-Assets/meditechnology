import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Server, 
  Shield, 
  Clock, 
  HeadphonesIcon, 
  RefreshCw, 
  FileCheck 
} from "lucide-react";

const ITManagementPage = () => {
  const features = [
    {
      icon: HeadphonesIcon,
      title: "24/7 Support",
      description: "Round-the-clock monitoring and support to ensure your systems are always running smoothly and issues are resolved before they impact your practice.",
    },
    {
      icon: Shield,
      title: "Proactive Maintenance",
      description: "Regular system health checks, updates, and preventive maintenance to keep your infrastructure secure and performing at its best.",
    },
    {
      icon: RefreshCw,
      title: "Office 365 Migration",
      description: "Seamless migration to Microsoft 365, including email setup, data transfer, and staff training for a smooth transition.",
    },
    {
      icon: Server,
      title: "Network Management",
      description: "Complete network infrastructure management including routers, switches, firewalls, and wireless access points.",
    },
    {
      icon: Clock,
      title: "Rapid Response",
      description: "Fast response times with guaranteed SLAs, ensuring minimal downtime and maximum productivity for your practice.",
    },
    {
      icon: FileCheck,
      title: "Backup & Recovery",
      description: "Comprehensive backup solutions with regular testing and documented recovery procedures to protect your critical data.",
    },
  ];

  const benefits = [
    "Reduce IT downtime by up to 90% with proactive monitoring",
    "Fixed monthly costs with no surprise bills",
    "Healthcare compliance expertise built into every solution",
    "Direct access to qualified IT professionals, not call centres",
    "Regular reporting and strategic IT planning",
    "Vendor management and coordination on your behalf",
  ];

  const process = [
    {
      step: 1,
      title: "Assessment",
      description: "We audit your current IT infrastructure to understand your needs and identify areas for improvement.",
    },
    {
      step: 2,
      title: "Planning",
      description: "We develop a tailored IT management plan that aligns with your practice goals and budget.",
    },
    {
      step: 3,
      title: "Implementation",
      description: "Our team deploys monitoring tools and optimises your systems with minimal disruption.",
    },
    {
      step: 4,
      title: "Ongoing Support",
      description: "Continuous monitoring, maintenance, and support to keep your practice running smoothly.",
    },
  ];

  return (
    <ServicePageLayout
      title="IT & Network Management"
      subtitle="Managed IT Services"
      description="Comprehensive IT support and network management designed specifically for healthcare practices. Let us handle your technology so you can focus on patient care."
      icon={Server}
      features={features}
      benefits={benefits}
      process={process}
    />
  );
};

export default ITManagementPage;
