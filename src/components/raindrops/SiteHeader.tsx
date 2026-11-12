import { useEffect, useState } from "react";
import { Mail, Phone, Menu } from "lucide-react";

import logo from "@/assets/raindrops/logo.svg.asset.json";
import logoWhite from "@/assets/raindrops/logo-white.svg.asset.json";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { SITE, contact, cottageLinks, quickLinks } from "@/lib/raindrops";
import { WhatsAppIcon } from "./icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-colors duration-500",
        scrolled ? "bg-background shadow-soft" : "bg-brand-deep/40 backdrop-blur-[2px]",
      )}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-5 md:h-[122px] md:px-10">
        <div
          className={cn(
            "hidden items-center gap-5 text-[0.85rem] lg:flex",
            scrolled ? "text-primary" : "text-primary-foreground",
          )}
        >
          <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:underline">
            <Mail className="size-3.5" /> {contact.email}
          </a>
          <a href={contact.phoneHref} className="flex items-center gap-2 hover:underline">
            <Phone className="size-3.5" /> {contact.phoneDisplay}
          </a>
        </div>
        <div className="lg:hidden" />

        <a href={SITE} aria-label="Raindrops Resorts home" className="justify-self-center">
          <img
            src={scrolled ? logo.url : logoWhite.url}
            alt="Raindrops – A Luxury Boutique Resort"
            className="h-14 w-auto md:h-[92px]"
          />
        </a>

        <div className="flex items-center justify-end gap-3 md:gap-6">
          <Button asChild variant="whatsapp" className="hidden h-11 px-3 md:inline-flex">
            <a href={contact.whatsapp} target="_blank" rel="noreferrer">
              Chat Now <WhatsAppIcon className="size-4" />
            </a>
          </Button>
          <Button asChild variant="brand" className="hidden h-11 px-3 sm:inline-flex">
            <a href={contact.booking} target="_blank" rel="noreferrer">
              Book Your Stay
            </a>
          </Button>
          <Sheet>
            <SheetTrigger
              className={cn(
                "flex items-center gap-2 text-[0.95rem]",
                scrolled ? "text-primary" : "text-primary-foreground",
              )}
            >
              <span className="hidden sm:inline">Menu</span>
              <Menu className="size-7" strokeWidth={1.4} />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 overflow-y-auto border-none bg-primary p-10 text-primary-foreground">
              <SheetTitle className="mb-8 font-display text-2xl font-normal tracking-wider text-primary-foreground">
                Raindrops
              </SheetTitle>
              <nav className="flex flex-col gap-4">
                <a href={SITE} className="text-lg hover:text-sand">Home</a>
                {quickLinks.map((l) => (
                  <a key={l.href} href={l.href} className="text-lg hover:text-sand">
                    {l.label}
                  </a>
                ))}
                <p className="mt-6 font-display text-lg tracking-wider text-sand">Our Cottages</p>
                {cottageLinks.map((l) => (
                  <a key={l.href} href={l.href} className="text-footer-foreground hover:text-sand">
                    {l.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
