import { AlertCircle, Search, Users, Globe } from "lucide-react";

export function ProblemsSection() {
  const problems = [
    {
      icon: Users,
      title: "Falta de clientes novos",
      description: "Seu negócio depende apenas de indicações e não consegue atrair novos clientes consistentemente."
    },
    {
      icon: Search,
      title: "Negócio não aparece nas buscas",
      description: "Quando alguém procura pelo seu serviço no Google, seus concorrentes aparecem primeiro."
    },
    {
      icon: AlertCircle,
      title: "Redes sociais paradas ou sem profissionalismo",
      description: "Instagram e Facebook abandonados ou com posts que não geram engajamento nem vendas."
    },
    {
      icon: Globe,
      title: "Site antigo ou inexistente",
      description: "Não tem site ou possui um site desatualizado que não transmite confiança aos clientes."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Problemas que todo dono de negócio local enfrenta
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Se você se identifica com pelo menos um desses problemas, 
            a Azaphe tem a solução completa para o seu negócio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div key={index} className="bg-card rounded-lg p-8 border shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-azaphe p-3 rounded-lg shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}