import ServicePageLayout from "@/components/ServicePageLayout";
import { 
  Shield, 
  Lock, 
  Eye, 
  FileCheck, 
  AlertTriangle, 
  Database 
} from "lucide-react";

const SecurityPage = () => {
  const features = [
    {
      icon: Shield,
      title: "Endpoint Protection",
      description: "Trend Micro enterprise security protecting all devices from malware, ransomware, and emerging threats.",
    },
    {
      icon: Database,
      title: "Backup Solutions",
      description: "Comprehensive onsite and offsite backup solutions with encrypted storage and regular testing.",
    },
    {
      icon: Lock,
      title: "Data Encryption",
      description: "End-to-end encryption for data at rest and in transit, meeting healthcare privacy requirements.",
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 security monitoring and threat detection to identify and respond to incidents in real-time.",
    },
    {
      icon: FileCheck,
      title: "Compliance Audits",
      description: "Regular security assessments and compliance audits to ensure you meet healthcare industry standards.",
    },
    {
      icon: AlertTriangle,
      title: "Incident Response",
      description: "Rapid incident response services with documented procedures to minimise impact and recovery time.",
    },
  ];

  const benefits = [
    "Protection against ransomware and data breaches",
    "Healthcare compliance expertise (Privacy Act, RACGP standards)",
    "Regular security awareness training for staff",
    "Documented security policies and procedures",
    "Rapid data recovery in case of incidents",
    "Peace of mind with continuous monitoring",
  ];

  const process = [
    {
      step: 1,
      title: "Security Audit",
      description: "Comprehensive assessment of your current security posture and identification of vulnerabilities.",
    },
    {
      step: 2,
      title: "Strategy Development",
      description: "We create a tailored security plan addressing your specific risks and compliance requirements.",
    },
    {
      step: 3,
      title: "Implementation",
      description: "Deployment of security solutions with minimal disruption to your daily operations.",
    },
    {
      step: 4,
      title: "Continuous Protection",
      description: "Ongoing monitoring, updates, and regular security reviews to maintain your defence.",
    },
  ];

  return (
    <ServicePageLayout
      title="IT Security"
      subtitle="Security Solutions"
      description="Comprehensive cybersecurity solutions protecting your practice from threats while ensuring compliance with healthcare privacy regulations."
      icon={Shield}
      features={features}
      benefits={benefits}
      process={process}
    />
  );
};

export default SecurityPage;
