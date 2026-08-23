import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a className="whatsapp" href="https://wa.me/237682435366" target="_blank" rel="noreferrer" aria-label="Chat with Xmedia on WhatsApp">
      <MessageCircle size={22} />
    </a>
  );
}
