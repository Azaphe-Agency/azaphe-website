import { Button } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import azapheLogo from "@/assets/azaphe-logo.svg";
export function HeroSection() {
  return <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-gradient-azaphe-subtle">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <img src={azapheLogo} alt="Azaphe - Agência Digital" className="mx-auto mb-8 h-14" />
          
          <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight md:text-6xl">
            Transforme seu negócio em uma{" "}
            <span className="bg-gradient-azaphe bg-clip-text text-transparent">referência local</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">Somos a Azaphe, agência digital com mais de 5 anos de experiência ajudando brasileiros no Brasil e no exterior (EUA, Canadá e Austrália) a dominarem o mercado local através de estratégias digitais personalizadas e eficazes.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-azaphe hover:shadow-azaphe transition-all duration-300 text-lg px-8 py-6">Fale com nossos consultores</Button>
            <WhatsAppButton phoneNumber="5511999999999" className="text-lg px-8 py-6" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border">
              <div className="text-3xl font-bold text-primary mb-2">+500</div>
              <div className="text-muted-foreground">Projetos entregues</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border">
              <div className="text-3xl font-bold text-primary mb-2">5+ anos</div>
              <div className="text-muted-foreground">De experiência no mercado</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border">
              <div className="text-3xl font-bold text-primary mb-2">4 países</div>
              <div className="text-muted-foreground">Brasil, EUA, Canadá e Austrália</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}