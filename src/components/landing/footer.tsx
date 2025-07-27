import { Instagram, Mail, Shield, FileText } from "lucide-react";
import azapheLogo from "@/assets/azaphe-logo.svg";
export function Footer() {
  return <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img src={azapheLogo} alt="Azaphe" className="h-8 mb-4" />
            <p className="text-muted-foreground mb-4 max-w-md">Agência digital especializada em aumentar a visibilidade de negócios locais no Brasil e no exterior.</p>
            <div className="flex gap-4">
              <a href="https://instagram.com/azaphe.agency" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:agency@azaphe.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>


          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="/termos-privacidade" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <FileText className="w-4 h-4" />
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/termos-privacidade" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Shield className="w-4 h-4" />
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © 2024 Azaphe. Todos os direitos reservados.
            </div>
            
            {/* Security badges */}
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>Pagamento Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                <span>Contrato Garantido</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-muted/30 rounded-lg text-xs text-muted-foreground">
          <p>
            Os resultados podem variar dependendo do mercado, concorrência e tipo de negócio. 
            A Azaphe se compromete a entregar todos os serviços listados no prazo acordado com total transparência.
          </p>
        </div>
      </div>
    </footer>;
}