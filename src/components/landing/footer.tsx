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
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary group transition-colors">
                <svg className="w-[1.15rem] h-[1.15rem] fill-[#64758b] group-hover:fill-[#ff299f]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                  <path d="M13.6 2.32A7.851 7.851 0 0 0 8 0a7.94 7.94 0 0 0-6.88 11.89L0 16l4.2-1.1a7.93 7.93 0 0 0 3.79 1 8 8 0 0 0 8-7.93 8 8 0 0 0-2.39-5.65ZM8 14.53a6.58 6.58 0 0 1-3.36-.92l-.24-.15-2.49.66.66-2.43-.16-.25a6.6 6.6 0 0 1 10.25-8.17 6.65 6.65 0 0 1 2 4.66A6.66 6.66 0 0 1 8 14.53Zm3.61-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.06-.32-.1-.45.1a9.004 9.004 0 0 1-.63.77c-.11.14-.23.15-.43 0a5.33 5.33 0 0 1-2.69-2.35c-.21-.35.2-.33.58-1.08a.38.38 0 0 0 0-.35c0-.1-.45-1.08-.61-1.47-.16-.39-.32-.33-.45-.34h-.39a.71.71 0 0 0-.53.25A2.19 2.19 0 0 0 4 6.17a3.82 3.82 0 0 0 .81 2.05 8.89 8.89 0 0 0 3.39 3 3.85 3.85 0 0 0 2.38.5 1.999 1.999 0 0 0 1.33-.94 1.62 1.62 0 0 0 .12-.94c-.09-.1-.22-.15-.42-.25Z"/>
                </svg>
              </a>
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