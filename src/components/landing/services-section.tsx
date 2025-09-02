import { Globe, MapPin, Palette, Instagram, Server, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
export function ServicesSection() {
  const services = [{
    icon: Globe,
    title: "Desenvolvimento de Websites",
    description: "Sites profissionais responsivos, otimizados para conversão e adaptados ao mercado local. Focamos em usabilidade e performance para atrair e converter clientes."
  }, {
    icon: MapPin,
    title: "Otimização Google My Business",
    description: "Estratégia completa de SEO local para garantir que seu negócio apareça quando clientes procuram seus serviços na região. Inclui otimização de perfil, reviews e listagens."
  }, {
    icon: Palette,
    title: "Identidade Visual e Branding",
    description: "Criação ou redesign de marca que transmite confiança e profissionalismo, adaptada para o mercado internacional e cultura local."
  }, {
    icon: Instagram,
    title: "Social Media Estratégico",
    description: "Gestão profissional das redes sociais com conteúdo estratégico, engajamento qualificado e campanhas direcionadas para seu público-alvo local."
  }, {
    icon: Server,
    title: "Infraestrutura Digital Completa",
    description: "Hospedagem premium, domínio personalizado, configuração de emails profissionais e toda infraestrutura técnica necessária para seu sucesso online."
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Nossos Serviços Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desenvolvemos soluções digitais completas para brasileiros que querem 
            se destacar no mercado local. Cada projeto é personalizado para suas necessidades específicas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-8">Nossos serviços incluem:</h3>
            {services.map((service, index) => {
            const IconComponent = service.icon;
            return <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-lg border">
                  <div className="bg-gradient-azaphe p-3 rounded-lg shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>;
          })}
          </div>

          {/* About Card */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-azaphe p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-6">Nossa História</h3>
              
              <div className="space-y-4 text-sm leading-relaxed opacity-90">
                <p>
                  A Azaphe nasceu da experiência real de brasileiros que enfrentaram os desafios 
                  de empreender tanto no Brasil quanto no exterior. Entendemos as dificuldades únicas de estabelecer 
                  e fazer crescer um negócio em qualquer mercado.
                </p>
                <p>
                  Com mais de 3 anos no mercado, nossa equipe especializada já ajudou centenas 
                  de brasileiros no Brasil, EUA e Portugal a transformarem seus negócios em 
                  referências locais.
                </p>
                
              </div>

              <div className="mt-8 space-y-4">
                <a href="https://api.whatsapp.com/send/?phone=551148632240&text=Olá%21+Eu+quero+saber+mais+sobre+os+serviços+para+meu+negócio.&type=phone_number&app_absent=0" target="_blank">
                  <Button size="lg" className="w-full bg-white text-primary hover:bg-white/90 transition-colors text-lg py-6">Fale com nossos consultores</Button>
                </a>
                <WhatsAppButton phoneNumber="5511999999999" className="w-full bg-white/10 hover:bg-white/20 border-white text-white text-lg py-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}
