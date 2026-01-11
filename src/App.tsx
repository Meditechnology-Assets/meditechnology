import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ITManagementPage from "./pages/services/ITManagementPage";
import CloudServicesPage from "./pages/services/CloudServicesPage";
import HardwarePage from "./pages/services/HardwarePage";
import SecurityPage from "./pages/services/SecurityPage";
import MedicalFitoutsPage from "./pages/services/MedicalFitoutsPage";
import VoIPPage from "./pages/services/VoIPPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/it-management" element={<ITManagementPage />} />
          <Route path="/services/cloud-services" element={<CloudServicesPage />} />
          <Route path="/services/hardware" element={<HardwarePage />} />
          <Route path="/services/security" element={<SecurityPage />} />
          <Route path="/services/medical-fitouts" element={<MedicalFitoutsPage />} />
          <Route path="/services/voip" element={<VoIPPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
