import { MessageCircle } from "lucide-react";
import { Button } from "./button";
interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
  variant?: "fixed" | "inline";
}
export function WhatsAppButton({
  phoneNumber,
  message = "Olá! Gostaria de saber mais sobre os serviços da Azaphe.",
  className = "",
  variant = "inline"
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };
  if (variant === "fixed") {
    return <div className="fixed bottom-6 right-6 z-50">
        <Button onClick={handleClick} size="w-[3rem]" className={`bg-gradient-azaphe hover:shadow-glow transition-all duration-300 rounded-full p-4 ${className}`}>
          <MessageCircle className="w-[2rem] h-[2rem]" />
        </Button>
      </div>;
  }
  return;
}