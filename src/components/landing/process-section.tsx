import { Calendar, Search, FileCheck, TrendingUp } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Calendar,
      title: "Agende uma conversa",
      description: "Fale com nossa equipe para entender suas necessidades e objetivos do negócio"
    },
    {
      number: "02", 
      icon: Search,
      title: "A Azaphe analisa seu negócio",
      description: "Fazemos um diagnóstico completo da sua presença online e identificamos oportunidades"
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Você assina o contrato",
      description: "Aprovando nossa proposta, iniciamos o trabalho imediatamente com total transparência"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Resultados em 30 dias",
      description: "Em apenas 30 dias, sua presença online já começa a trazer novos clientes e ligações"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Como funciona o processo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples e transparente para transformar 
            seu negócio em uma máquina de atrair clientes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="text-center relative">
                  {/* Connection line for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 z-0" />
                  )}
                  
                  <div className="relative">
                    <div className="bg-gradient-azaphe text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-azaphe">
                      {step.number}
                    </div>
                    
                    <div className="bg-background border-4 border-primary/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto -mt-12 mb-6 relative z-10">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-card border-2 border-primary/20 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              O primeiro passo é uma conversa simples para entender seu negócio. 
              Sem compromisso, sem pressão.
            </p>
            <div className="text-sm text-muted-foreground">
              ⏰ Consulta gratuita de 30 minutos • 📞 Via chamada de vídeo ou telefone
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}