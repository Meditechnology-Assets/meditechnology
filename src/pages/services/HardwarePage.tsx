import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Monitor, 
  Server, 
  Printer, 
  Wrench, 
  Package, 
  RefreshCw 
} from "lucide-react";

const HardwarePage = () => {
  const features = [
    {
      icon: Server,
      title: "Server Solutions",
      description: "Enterprise-grade Lenovo servers configured specifically for healthcare applications, ensuring reliability and performance.",
    },
    {
      icon: Monitor,
      title: "Workstations & PCs",
      description: "Lenovo desktops and laptops selected for healthcare environments, pre-configured and ready for immediate deployment.",
    },
    {
      icon: Printer,
      title: "Printing Solutions",
      description: "Kyocera multifunction printers and document management systems designed for high-volume medical practice needs.",
    },
    {
      icon: Wrench,
      title: "Installation & Setup",
      description: "Professional installation and configuration services ensuring all hardware integrates seamlessly with your existing systems.",
    },
    {
      icon: Package,
      title: "Procurement Services",
      description: "Leveraging our partner relationships to provide competitive pricing on all hardware purchases.",
    },
    {
      icon: RefreshCw,
      title: "Lifecycle Management",
      description: "Complete hardware lifecycle management from procurement through secure disposal and data destruction.",
    },
  ];

  const benefits = [
    "Partner pricing from Lenovo and Kyocera",
    "Pre-configured systems ready for healthcare applications",
    "Single point of contact for all hardware needs",
    "Warranty management and vendor coordination",
    "Secure data destruction and equipment disposal",
    "Flexible leasing and financing options available",
  ];

  const process = [
    {
      step: 1,
      title: "Consultation",
      description: "We assess your hardware needs and recommend solutions that match your workflow and budget.",
    },
    {
      step: 2,
      title: "Procurement",
      description: "We source the best hardware at competitive prices through our partner network.",
    },
    {
      step: 3,
      title: "Configuration",
      description: "All hardware is pre-configured with your applications and security settings before delivery.",
    },
    {
      step: 4,
      title: "Deployment",
      description: "Professional on-site installation with staff training and documentation.",
    },
  ];

  return (
    <ServicePageLayout
      title="IT Hardware"
      subtitle="Hardware Solutions"
      description="Quality IT hardware from trusted partners like Lenovo and Kyocera, professionally configured and installed to power your healthcare practice."
      icon={Monitor}
      features={features}
      benefits={benefits}
      process={process}
    />
  );
};

export default HardwarePage;
