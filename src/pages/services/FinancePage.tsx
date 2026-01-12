import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Calculator, 
  CreditCard, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Building2 
} from "lucide-react";

const FinancePage = () => {
  const features = [
    {
      icon: CreditCard,
      title: "Equipment Leasing",
      description: "Lease servers, workstations, and networking equipment with flexible terms tailored to your practice's budget.",
    },
    {
      icon: Building2,
      title: "Fitout Financing",
      description: "Spread the cost of complete medical fitouts including cabling, racks, and infrastructure over manageable payments.",
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      description: "Choose from 12, 24, 36, or 60-month payment plans to match your cash flow requirements.",
    },
    {
      icon: FileText,
      title: "Quick Approval",
      description: "Streamlined application process with fast approvals, so you can get your IT infrastructure up and running quickly.",
    },
    {
      icon: Calculator,
      title: "Tax Benefits",
      description: "Leasing can provide tax advantages for your practice. Consult your accountant about potential deductions.",
    },
    {
      icon: CheckCircle2,
      title: "Upgrade Options",
      description: "Built-in upgrade paths let you refresh your technology at the end of your lease term.",
    },
  ];

  const benefits = [
    "Preserve working capital for other practice needs",
    "Predictable monthly payments for easier budgeting",
    "Access to latest technology without large upfront costs",
    "Potential tax benefits through leasing",
    "Simplified procurement process",
    "End-of-lease upgrade flexibility",
  ];

  const process = [
    {
      step: 1,
      title: "Consultation",
      description: "We assess your IT needs and discuss the equipment and services required for your practice.",
    },
    {
      step: 2,
      title: "Quote & Options",
      description: "Receive a detailed quote with multiple financing options and terms to choose from.",
    },
    {
      step: 3,
      title: "Application",
      description: "Simple application process with quick credit decisions, typically within 24-48 hours.",
    },
    {
      step: 4,
      title: "Deployment",
      description: "Once approved, we proceed with equipment delivery, installation, and configuration.",
    },
  ];

  return (
    <ServicePageLayout
      title="IT Finance"
      subtitle="Leasing & Funding"
      description="Flexible leasing and finance options for IT hardware, servers, and complete medical fitouts. Spread the cost of your technology investment with tailored payment plans."
      icon={Calculator}
      features={features}
      benefits={benefits}
      process={process}
    />
  );
};

export default FinancePage;
