import { Phone } from "lucide-react";

import { contact } from "@/lib/raindrops";
import { WhatsAppIcon } from "./icons";

export function FloatingContact() {
  return (
    <>
      <a
        href={contact.enquiry}
        className="fixed right-0 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center rounded-l-md bg-enquiry px-4 py-5 text-sm font-bold leading-6 text-enquiry-foreground shadow-soft md:flex"
      >
        {"ENQUIRY".split("").map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </a>
      <div className="fixed bottom-6 right-5 z-30 flex flex-col gap-3">
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex size-12 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-soft transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="size-6" />
        </a>
        <a
          href={contact.phoneHref}
          aria-label="Call Raindrops Resorts"
          className="flex size-12 items-center justify-center rounded-full border border-primary-foreground bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105"
        >
          <Phone className="size-5 fill-current" />
        </a>
      </div>
    </>
  );
}
