import { Shield, TrendingUp, DollarSign } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nossa Garantia de Satisfação
          </h2>
          <p className="text-lg text-muted-foreground">
            Estamos tão confiantes em nossos resultados que oferecemos garantia total
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">100% Seguro</h3>
            <p className="text-muted-foreground">
              Pagamento seguro e contrato garantido para sua tranquilidade
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Resultados Comprovados</h3>
            <p className="text-muted-foreground">
              Mais de 200 negócios transformados com resultados mensuráveis
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Satisfação Garantida</h3>
            <p className="text-muted-foreground">
              30 dias de suporte pós-entrega sem custos adicionais
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}