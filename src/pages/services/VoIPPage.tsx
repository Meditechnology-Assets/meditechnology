import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Phone, 
  Smartphone, 
  Users, 
  BarChart3, 
  Headphones, 
  Settings 
} from "lucide-react";

const VoIPPage = () => {
  const features = [
    {
      icon: Phone,
      title: "Nexgen Phone Systems",
      description: "Modern VoIP phone systems with crystal-clear call quality, designed for busy medical practice environments.",
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      description: "Take your practice phone system anywhere with mobile apps that connect to your main number.",
    },
    {
      icon: Users,
      title: "Unified Communications",
      description: "Integrated voice, video, and messaging solutions that keep your team connected wherever they are.",
    },
    {
      icon: BarChart3,
      title: "Call Analytics",
      description: "Detailed call reporting and analytics to help you understand and improve patient communication.",
    },
    {
      icon: Headphones,
      title: "Auto Attendant",
      description: "Professional automated answering with custom greetings and intelligent call routing.",
    },
    {
      icon: Settings,
      title: "Easy Management",
      description: "Simple web-based administration to manage users, call routing, and system settings.",
    },
  ];

  const benefits = [
    "Reduce phone costs by up to 50% compared to traditional systems",
    "Never miss a call with advanced call forwarding",
    "Scale easily as your practice grows",
    "Work from anywhere with mobile apps",
    "Integration with practice management software",
    "24/7 support from our Australian team",
  ];

  const process = [
    {
      step: 1,
      title: "Needs Analysis",
      description: "We assess your communication needs and current phone system to design the right solution.",
    },
    {
      step: 2,
      title: "Solution Design",
      description: "Custom VoIP solution designed for your practice with the features you need.",
    },
    {
      step: 3,
      title: "Installation",
      description: "Professional installation and number porting with minimal disruption to your practice.",
    },
    {
      step: 4,
      title: "Training & Support",
      description: "Comprehensive staff training and ongoing support to maximise your investment.",
    },
  ];

  return (
    <ServicePageLayout
      title="VoIP Telephony"
      subtitle="Phone Systems"
      description="Modern voice-over-internet phone solutions that reduce costs, increase flexibility, and improve patient communication for your practice."
      icon={Phone}
      features={features}
      benefits={benefits}
      process={process}
    />
  );
};

export default VoIPPage;
