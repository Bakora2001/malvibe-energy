import { MessageCircle } from "lucide-react";

export default function WhatsAppFab() {
  const phone = "254796744640";
  const text = encodeURIComponent("Hello Malvibe Energy, I'd like to enquire about your services.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${text}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/40 transition-transform group-hover:scale-110">
        <MessageCircle className="h-7 w-7" />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-ink/90 px-3 py-1.5 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
        Chat on WhatsApp
      </span>
    </a>
  );
}
