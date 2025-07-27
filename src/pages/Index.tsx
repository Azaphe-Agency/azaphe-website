import { HeroSection } from "@/components/landing/hero-section";
import { ProblemsSection } from "@/components/landing/problems-section";
import { ServicesSection } from "@/components/landing/services-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { ProcessSection } from "@/components/landing/process-section";
import { GuaranteeSection } from "@/components/landing/guarantee-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ProcessSection />
      <GuaranteeSection />
      <CtaSection />
      <Footer />
      
      {/* Fixed WhatsApp Button */}
      <WhatsAppButton 
        phoneNumber="5511999999999"
        message="Olá! Eu quero saber mais sobre os serviços para meu negócio."
        variant="fixed"
      />
    </div>
  );
};

export default Index;
