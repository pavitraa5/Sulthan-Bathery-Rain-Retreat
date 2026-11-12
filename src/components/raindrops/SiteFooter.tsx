import { Facebook, Instagram } from "lucide-react";

import logoWhite from "@/assets/raindrops/logo-white.svg.asset.json";
import { SITE, contact, cottageLinks, packageLinks, quickLinks } from "@/lib/raindrops";
import { TripadvisorIcon, WhatsAppIcon } from "./icons";

const socials = [
  { label: "Facebook", href: contact.facebook, Icon: Facebook },
  { label: "Tripadvisor", href: contact.tripadvisor, Icon: TripadvisorIcon },
  { label: "Instagram", href: contact.instagram, Icon: Instagram },
  { label: "WhatsApp", href: contact.whatsapp, Icon: WhatsAppIcon },
];

function LinkColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-6 text-xl tracking-wider text-sand">{title}</h3>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-footer-foreground transition-colors hover:text-primary-foreground">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-footer-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:px-10 lg:grid-cols-[1.4fr_0.7fr_1fr_0.9fr]">
        <div className="space-y-5">
          <img src={logoWhite.url} alt="Raindrops Resorts" className="h-20 w-auto opacity-90" />
          <p><strong className="text-primary-foreground">Location:</strong> {contact.address}</p>
          <p>
            <strong className="text-primary-foreground">Phone:</strong> {contact.landline} / {contact.mobile}
          </p>
          <p>
            <strong className="text-primary-foreground">Email:</strong>{" "}
            <a href={`mailto:${contact.email}`} className="hover:text-primary-foreground">{contact.email}</a>
          </p>
          <div className="flex gap-3 pt-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-12 items-center justify-center rounded-full border border-footer-foreground/60 transition-colors hover:bg-primary-foreground hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
        <LinkColumn title="Quick Links" links={quickLinks} />
        <LinkColumn title="Our Cottages" links={cottageLinks} />
        <LinkColumn title="Our Packages" links={packageLinks} />
      </div>
      <div className="mx-auto max-w-6xl border-t border-footer-foreground/40 px-5 py-5 text-center text-xs md:px-10">
        © Raindrops Resorts Pvt Ltd {new Date().getFullYear()}. All rights reserved. |{" "}
        <a href={`${SITE}/privacy-policy`} className="hover:text-primary-foreground">Privacy Policy</a>
      </div>
    </footer>
  );
}
