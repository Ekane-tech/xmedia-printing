import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a className="whatsapp" href="https://wa.me/237699893120" target="_blank" rel="noreferrer" aria-label="Chat with Xmedia on WhatsApp">
      <MessageCircle size={22} />
    </a>
  );
}
