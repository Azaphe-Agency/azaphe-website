import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { Clock, Shield, Trophy } from "lucide-react";
export function CtaSection() {
  return <section className="py-20 bg-gradient-to-br from-primary via-primary to-accent text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Nossa equipe especializada está pronta para criar a estratégia digital perfeita 
            para o seu negócio. <br className="hidden md:block" />
            <strong>Fale conosco e descubra como podemos ajudar.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-2">Entrega Garantida</div>
              <div className="text-sm opacity-90">Máximo 90 dias ou seu dinheiro de volta</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-2">Sem Riscos</div>
              <div className="text-sm opacity-90">Contrato claro, sem letras miúdas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Trophy className="w-8 h-8 mx-auto mb-3" />
              <div className="font-semibold mb-2">Especialistas</div>
              <div className="text-sm opacity-90">+5 anos ajudando brasileiros no Brasil e exterior</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/20">
            <div className="text-2xl md:text-3xl font-bold mb-4">Solução Completa</div>
            <div className="text-xl mb-4 opacity-90">Website • Google My Business • Branding • Social Media</div>
            <div className="text-sm opacity-75">
              Estratégia personalizada para dominar o mercado local
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 transition-all duration-300 text-lg px-12 py-6 shadow-lg hover:shadow-xl">Fale com nossos consultores</Button>
            <WhatsAppButton phoneNumber="5511999999999" message="Olá! Vi a landing page da Azaphe e quero saber mais sobre os serviços para meu negócio." className="bg-white/10 hover:bg-white/20 border-white text-white text-lg px-12 py-6" />
          </div>

          <div className="mt-8 text-sm opacity-75">
            Seus dados estão seguros • Resposta em até 2 horas • Atendimento em português
          </div>
        </div>
      </div>
    </section>;
}