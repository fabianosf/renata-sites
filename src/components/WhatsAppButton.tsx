import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

const WhatsAppButton = () => {
  const message = encodeURIComponent(siteConfig.whatsappMessages.default);

  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-elevated hover:scale-110 transition-smooth animate-pulse-glow group"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-smooth" />
    </a>
  );
};

export default WhatsAppButton;
