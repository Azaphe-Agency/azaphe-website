import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function TermsPrivacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao início
              </Button>
            </Link>
            <h1 className="text-3xl font-bold mb-2">Termos de Uso e Política de Privacidade</h1>
            <p className="text-muted-foreground">Última atualização: Janeiro de 2024</p>
          </div>

          <div className="grid gap-8">
            {/* Termos de Uso */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Termos de Uso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <section>
                  <h3 className="text-lg font-semibold mb-3">1. Definições</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A Azaphe é uma agência digital especializada em serviços de marketing digital para negócios de brasileiros 
                    no Brasil e no exterior. Estes termos regem a prestação de nossos serviços.
                  </p>
                </section>

                <Separator />

                <section>
                  <h3 className="text-lg font-semibold mb-3">2. Serviços Oferecidos</h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Nossos pacotes incluem:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Criação de website profissional responsivo</li>
                    <li>Configuração completa do Google Meu Negócio</li>
                    <li>Acompanhamento e otimização contínua</li>
                    <li>Design de identidade visual profissional</li>
                    <li>Gestão estratégica de redes sociais</li>
                    <li>Hospedagem e domínio personalizado</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h3 className="text-lg font-semibold mb-3">3. Condições de Pagamento</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Os valores são acordados conforme o escopo do projeto e devem ser pagos conforme as condições 
                    estabelecidas no contrato. O pagamento é processado através de meios seguros.
                  </p>
                </section>

                <Separator />

                <section>
                  <h3 className="text-lg font-semibold mb-3">4. Prazos de Entrega</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Os prazos de entrega são definidos conforme o escopo de cada projeto e serão acordados 
                    no contrato após confirmação do pagamento e recebimento de todos os materiais necessários do cliente.
                  </p>
                </section>

                <Separator />

                <section>
                  <h3 className="text-lg font-semibold mb-3">5. Garantias</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Oferecemos garantia de satisfação. Caso o cliente não esteja satisfeito com os resultados, 
                    faremos ajustes sem custo adicional por até 30 dias após a entrega.
                  </p>
                </section>

                <Separator />

                <section>
                  <h3 className="text-lg font-semibold mb-3">6. Responsabilidades do Cliente</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Fornecer todas as informações e materiais necessários</li>
                    <li>Responder às solicitações em tempo hábil</li>
                    <li>Manter os dados de acesso seguros</li>
                    <li>Cumprir com as leis locais aplicáveis</li>
                  </ul>
                </section>
              </CardContent>
            </Card>

            {/* Política de Privacidade */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Política de Privacidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <section>
                  <h3 className="text-lg font-semibold mb-3">1. Coleta de Informações</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Coletamos apenas as informações necessárias para a prestação de nossos serviços, incluindo:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Nome e informações de contato</li>
                    <li>Informações sobre o negócio</li>
                    <li>Dados necessários para criação de conteúdo</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h3 className="text-lg font-semibold mb-3">2. Uso das Informações</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizamos suas informações exclusivamente para:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1 text-muted-foreground">
                    <li>Prestação dos serviços contratados</li>
                    <li>Comunicação sobre o projeto</li>
                    <li>Suporte técnico</li>
                    <li>Melhorias em nossos serviços</li>
                  </ul>
                </section>

                <Separator />

                <section>
                  <h3 className="text-lg font-semibold mb-3">3. Proteção de Dados</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementamos medidas de segurança adequadas para proteger suas informações contra 
                    acesso não autorizado, alteração, divulgação ou destruição.
                  </p>
                </section>

                <Separator />

                <section>
                  <h3 className="text-lg font-semibold mb-3">4. Compartilhamento de Informações</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                    exceto quando necessário para a prestação dos serviços ou exigido por lei.
                  </p>
                </section>

                <Separator />

                <section>
                  <h3 className="text-lg font-semibold mb-3">5. Seus Direitos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. 
                    Para exercer esses direitos, entre em contato conosco através do email agency@azaphe.com.
                  </p>
                </section>

                <Separator />

                <section>
                  <h3 className="text-lg font-semibold mb-3">6. Cookies</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nosso site pode usar cookies para melhorar sua experiência. Você pode desabilitar 
                    os cookies em seu navegador, mas isso pode afetar a funcionalidade do site.
                  </p>
                </section>

                <Separator />

                <section>
                  <h3 className="text-lg font-semibold mb-3">7. Contato</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Para dúvidas sobre estes termos ou nossa política de privacidade, 
                    entre em contato através do email: agency@azaphe.com
                  </p>
                </section>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
