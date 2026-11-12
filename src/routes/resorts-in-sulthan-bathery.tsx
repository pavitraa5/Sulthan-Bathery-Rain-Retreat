import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ArrowRight, Binoculars, Coffee, Heart, PawPrint, Sun, Trees, Users, Wheat } from "lucide-react";

import heroAerial from "@/assets/raindrops/hero-aerial.jpg.asset.json";
import couple from "@/assets/raindrops/couple-veranda.jpg.asset.json";
import pets from "@/assets/raindrops/pets.jpg.asset.json";
import ghat from "@/assets/raindrops/wayanad-ghat.jpg.asset.json";
import cottageForest from "@/assets/raindrops/cottage-forest.jpg.asset.json";
import plantationCottage from "@/assets/raindrops/plantation-cottage.jpg.asset.json";
import luxuryVilla from "@/assets/raindrops/luxury-villa.jpg.asset.json";
import poolVilla from "@/assets/raindrops/pool-villa.jpg.asset.json";
import jacuzziVilla from "@/assets/raindrops/jacuzzi-villa.jpg.asset.json";
import poolVillaWide from "@/assets/raindrops/pool-villa-wide.jpg.asset.json";
import cottageNight from "@/assets/raindrops/cottage-night.jpg.asset.json";
import familyDining from "@/assets/raindrops/family-dining.jpg.asset.json";
import keralaMeals from "@/assets/raindrops/kerala-meals.jpg.asset.json";
import paddyCycling from "@/assets/raindrops/paddy-cycling.jpg.asset.json";
import evenings from "@/assets/raindrops/evenings.jpg.asset.json";
import edakkal from "@/assets/raindrops/edakkal.jpg.asset.json";
import phantomRock from "@/assets/raindrops/phantom-rock.jpg.asset.json";
import muthanga from "@/assets/raindrops/muthanga.jpg.asset.json";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/raindrops/SiteHeader";
import { SiteFooter } from "@/components/raindrops/SiteFooter";
import { FloatingContact } from "@/components/raindrops/FloatingContact";
import { WhatsAppIcon } from "@/components/raindrops/icons";
import { cn } from "@/lib/utils";
import { contact, cottageLinks } from "@/lib/raindrops";

const TITLE = "Resorts in Sulthan Bathery | Peaceful Plantation Stay – Raindrops Resorts";
const DESCRIPTION =
  "Looking for resorts in Sulthan Bathery? Raindrops Resorts offers 13 independent cottages in a coffee plantation overlooking paddy fields at Vayal Nadu, Wayanad. Pet-friendly, Kerala-style meals.";

const faqs = [
  {
    q: "What should I look for when choosing Resorts in Sulthan Bathery?",
    a: "Consider the accommodation, location, privacy, food options and experiences offered. Choose a property that suits your travel plans and provides a comfortable environment.",
  },
  {
    q: "Is this plantation resort suitable for family holidays?",
    a: "Yes. Its independent cottages and open outdoor spaces make it suitable for families looking for a peaceful Wayanad getaway.",
  },
  {
    q: "Is the resort pet-friendly?",
    a: "Yes. The property is pet-friendly, making it a suitable option for travellers who wish to holiday with their pets.",
  },
  {
    q: "What makes this property different from other Sulthan Bathery resorts?",
    a: "It offers just 13 independent cottages within a coffee plantation overlooking paddy fields. Its boutique atmosphere, pet-friendly setting and nature-based experiences create a distinctive stay.",
  },
  {
    q: "What activities can guests enjoy during their stay?",
    a: "Guests can enjoy plantation walks, birdwatching, paddy field views and relaxed outdoor time.",
  },
  {
    q: "Is this a good resort near Sulthan Bathery for couples?",
    a: "Yes. Its independent cottages and peaceful plantation surroundings make it a lovely choice for couples seeking a relaxing getaway.",
  },
];

export const Route = createFileRoute("/resorts-in-sulthan-bathery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "https://www.raindropsresorts.com/resorts-in-sulthan-bathery" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: SulthanBatheryPage,
});

/* ---------- small building blocks ---------- */

function SectionLabel({ children, center }: { children: ReactNode; center?: boolean }) {
  return (
    <div className={cn("mb-5 flex flex-col gap-3", center && "items-center text-center")}>
      <span className="eyebrow">{children}</span>
      <span className="rule" />
    </div>
  );
}

function BookButtons({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Button asChild variant="whatsapp" className="h-11 px-4">
        <a href={contact.whatsapp} target="_blank" rel="noreferrer">
          Chat Now <WhatsAppIcon className="size-4" />
        </a>
      </Button>
      <Button asChild variant="brand" className="h-11 px-4">
        <a href={contact.booking} target="_blank" rel="noreferrer">
          Book Your Stay
        </a>
      </Button>
    </div>
  );
}

/* ---------- page ---------- */

function SulthanBatheryPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Intro />
        <DiscoverAndWayanad />
        <Accommodation />
        <WhyChoose />
        <Activities />
        <IdealFor />
        <Attractions />
        <PlanYourStay />
        <Faq />
      </main>
      <SiteFooter />
      <FloatingContact />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      <img
        src={heroAerial.url}
        alt="Aerial view of Raindrops Resorts cottages amid coffee plantation and paddy fields near Sulthan Bathery"
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 mx-auto max-w-4xl px-5 pt-24 text-center text-primary-foreground animate-rise">
        <p className="mb-5 text-xs uppercase tracking-[0.4em] text-sand">Wayanad · Kerala</p>
        <h1 className="text-4xl uppercase leading-tight tracking-[0.12em] md:text-6xl">
          Resorts in Sulthan Bathery
        </h1>
        <p className="mt-3 font-script text-4xl md:text-5xl">a peaceful plantation stay</p>
        <BookButtons className="mt-10 justify-center" />
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-10 lg:grid-cols-2">
        <div>
          <h2 className="heading-display text-3xl md:text-[2.6rem]">
            Experience a Peaceful Plantation Stay in Wayanad
          </h2>
          <span className="rule my-7" />
          <div className="prose-body space-y-4">
            <p>
              Planning a relaxing getaway to Wayanad? Finding the right accommodation can make all the
              difference to your holiday. Whether you are travelling with family, spending quality time with
              your partner, or exploring nature with your pets, choosing a peaceful stay surrounded by greenery
              can make your experience more memorable.
            </p>
            <p>
              When searching for <strong className="text-primary">Resorts in Sulthan Bathery</strong>, travellers
              often look for comfortable accommodation, scenic surroundings, good food and opportunities to unwind
              away from busy tourist areas. A plantation stay near Sulthan Bathery offers a refreshing way to
              experience Wayanad, with independent cottages, coffee plantation greenery and beautiful paddy field
              views.
            </p>
            <p>
              Located in the peaceful plantation landscape of Vayal Nadu, Raindrops Resorts brings together
              nature, privacy and Kerala-style hospitality for a relaxing Wayanad getaway.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 border border-primary">
            <div className="border-r border-primary p-5 text-center">
              <p className="font-display text-4xl text-primary">13 +</p>
              <p className="mt-1 text-muted-foreground">Private Cottages</p>
            </div>
            <div className="p-5 text-center">
              <p className="font-display text-4xl text-primary">4</p>
              <p className="mt-1 text-muted-foreground">Stay Options</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img
            src={couple.url}
            alt="Guest relaxing on a cottage veranda at Raindrops Resorts"
            loading="lazy"
            className="aspect-[3/4] w-full object-cover shadow-soft"
          />
          <img
            src={pets.url}
            alt="Pet-friendly resort near Sulthan Bathery – dogs by the pool"
            loading="lazy"
            className="mt-12 aspect-[3/4] w-full object-cover object-[70%_center] shadow-soft"
          />
        </div>
      </div>
    </section>
  );
}

function SplitRow({
  label,
  title,
  image,
  alt,
  reverse,
  children,
}: {
  label: string;
  title: string;
  image: string;
  alt: string;
  reverse?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className={cn("aspect-[4/3] w-full object-cover shadow-soft", reverse && "lg:order-2")}
      />
      <div>
        <SectionLabel>{label}</SectionLabel>
        <h2 className="heading-display mb-6 text-3xl md:text-4xl">{title}</h2>
        <div className="prose-body space-y-4">{children}</div>
      </div>
    </div>
  );
}

function DiscoverAndWayanad() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl space-y-20 px-5 md:px-10">
        <SplitRow
          label="Sulthan Bathery"
          title="Discover the Natural Beauty Around Sulthan Bathery"
          image={ghat.url}
          alt="Lush green hills and winding roads of Wayanad near Sulthan Bathery"
        >
          <p>
            Sulthan Bathery is a popular destination in Wayanad, known for its coffee plantations, scenic
            countryside, wildlife and historical attractions. Its natural surroundings make it a wonderful choice
            for travellers looking to escape busy city life and enjoy a refreshing holiday.
          </p>
          <p>
            Travellers comparing Sulthan Bathery resorts often consider the property's location and the
            experiences available nearby. Staying amidst the coffee plantations and paddy fields of Vayal Nadu
            offers an opportunity to enjoy the quieter side of Wayanad while exploring the attractions around
            Sulthan Bathery.
          </p>
        </SplitRow>
        <SplitRow
          reverse
          label="About Wayanad"
          title="Plantations, Wildlife & Countryside"
          image={cottageForest.url}
          alt="Raindrops cottage surrounded by plantation greenery in Wayanad"
        >
          <p>
            Wayanad is a beautiful destination in Kerala, known for its lush greenery, coffee and spice
            plantations, wildlife and scenic countryside. From exploring nature trails to discovering local
            culture, the region offers plenty of experiences for travellers seeking a refreshing break.
          </p>
          <p>
            Sulthan Bathery is one of Wayanad's popular towns, offering access to several attractions, historical
            landmarks and natural landscapes. Its relaxed surroundings make it an appealing destination for family
            holidays and nature getaways.
          </p>
          <p>
            For travellers looking for a resort in Sulthan Bathery, Wayanad offers more than sightseeing, with
            plantation stays and peaceful countryside experiences adding to the holiday.
          </p>
        </SplitRow>
      </div>
    </section>
  );
}

const stays = [
  {
    title: "Premium Plantation",
    sub: "Cottage",
    text: "Enjoy a cosy cottage stay surrounded by lush coffee plantation greenery.",
    image: plantationCottage.url,
  },
  {
    title: "Paddy View",
    sub: "Luxury Villa",
    text: "Wake up to scenic paddy field views in a spacious, comfortable villa.",
    image: luxuryVilla.url,
  },
  {
    title: "Paddy View",
    sub: "Pool Villa",
    text: "A relaxing villa stay with the luxury of a private pool overlooking the paddy fields.",
    image: poolVilla.url,
  },
  {
    title: "Lilly",
    sub: "Jacuzzi Villa",
    text: "Unwind in a private villa with a Jacuzzi, ideal for a peaceful and special getaway.",
    image: jacuzziVilla.url,
  },
];

function Accommodation() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionLabel center>Raindrops Cottages</SectionLabel>
          <h2 className="heading-display text-3xl md:text-4xl">Accommodation at Raindrops Resorts</h2>
          <p className="prose-body mt-5">
            Looking for comfortable Resorts in Sulthan Bathery? Choose from four thoughtfully designed
            accommodation options, each offering a different way to enjoy Wayanad's peaceful plantation
            surroundings.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 md:gap-x-16 md:gap-y-10">
          {stays.map((s, i) => (
            <a
              key={s.sub}
              href={cottageLinks[i]?.href}
              className="group relative block aspect-[4/3] overflow-hidden"
            >
              <img
                src={s.image}
                alt={`${s.title} ${s.sub} – resort in Sulthan Bathery`}
                loading="lazy"
                className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-image-fade" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-center text-primary-foreground md:p-8">
                <h3 className="text-3xl tracking-wider md:text-4xl">{s.title}</h3>
                <p className="font-display tracking-widest">{s.sub}</p>
                <p className="mx-auto mt-3 max-w-sm text-sm opacity-90">{s.text}</p>
              </div>
            </a>
          ))}
        </div>
        <p className="prose-body mx-auto mt-12 max-w-3xl text-center">
          With a boutique collection of just <strong className="text-primary">13 cottages</strong>, this property
          offers an intimate stay experience for couples, families and travellers looking for peaceful resorts
          near Sulthan Bathery.
        </p>
      </div>
    </section>
  );
}

const reasons = [
  {
    title: "A Beautiful Coffee Plantation Setting",
    text: "Set within a coffee plantation overlooking paddy fields, the property offers a peaceful escape surrounded by greenery. Guests can enjoy the scenic Vayal Nadu landscape and experience the quieter side of Wayanad.",
    image: poolVillaWide.url,
  },
  {
    title: "An Exclusive Stay with Just 13 Cottages",
    text: "Unlike large hotel properties, the resort features just 13 independent cottages, creating an intimate and uncrowded atmosphere — a relaxed alternative for couples, families and small groups.",
    image: cottageNight.url,
  },
  {
    title: "Open Spaces for Families and Pets",
    text: "Open outdoor spaces allow children to enjoy time outdoors while families relax together. The property is also pet-friendly, so your furry companions can come along too.",
    image: familyDining.url,
  },
  {
    title: "Kerala-Style Comfort Meals",
    text: "Enjoy Kerala-style comfort meals during your stay. Regional flavours and warm hospitality add to the experience, making your plantation getaway even more enjoyable.",
    image: keralaMeals.url,
  },
];

function WhyChoose() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionLabel center>Why Raindrops</SectionLabel>
          <h2 className="heading-display text-3xl md:text-4xl">
            Why Choose Raindrops Resorts When Exploring Resorts in Sulthan Bathery?
          </h2>
          <p className="prose-body mt-5">
            Choosing a resort in Sulthan Bathery is about more than finding a place to stay. It is about enjoying
            privacy, comfort and memorable experiences. A boutique plantation setting offers a refreshing
            alternative to crowded hotel properties.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <article key={r.title} className="bg-background shadow-soft">
              <img src={r.image} alt={r.title} loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <p className="font-display text-3xl text-sand">0{i + 1}</p>
                <h3 className="mt-2 text-xl leading-snug tracking-wide text-primary">{r.title}</h3>
                <p className="prose-body mt-3 text-sm">{r.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const activities = [
  { Icon: Coffee, title: "Plantation Walks", text: "Explore the coffee plantation and enjoy the surrounding greenery." },
  { Icon: Binoculars, title: "Birdwatching", text: "Observe birds in their natural plantation environment." },
  { Icon: Wheat, title: "Paddy Field Views", text: "Take in the beautiful countryside landscapes of Vayal Nadu." },
  { Icon: Sun, title: "Outdoor Relaxation", text: "Spend quality time with loved ones and peaceful moments amidst nature." },
];

function Activities() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <img src={paddyCycling.url} alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-brand-deep/75" />
      <div className="relative mx-auto max-w-6xl px-5 text-primary-foreground md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="font-script text-4xl text-sand md:text-5xl">moments that stay with you</p>
          <h2 className="mt-2 text-3xl tracking-wider md:text-4xl">Activities & Experiences at the Resort</h2>
          <p className="mt-5 leading-relaxed opacity-90">
            A holiday in Wayanad is best enjoyed at a relaxed pace. Guests can spend time appreciating the natural
            surroundings through simple outdoor experiences.
          </p>
        </div>
        <div className="grid gap-px bg-primary-foreground/25 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map(({ Icon, title, text }) => (
            <div key={title} className="bg-brand-deep/60 p-8 text-center backdrop-blur-sm">
              <Icon className="mx-auto size-9 text-sand" strokeWidth={1.3} />
              <h3 className="mt-5 text-xl tracking-wider">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed opacity-85">{text}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-relaxed opacity-85">
          These experiences make this a distinctive option for travellers comparing resorts in Sulthan Bathery,
          Wayanad, and looking for something beyond conventional accommodation.
        </p>
      </div>
    </section>
  );
}

const travellers = [
  { Icon: Heart, title: "Couples", text: "Enjoy privacy, independent cottages and peaceful plantation surroundings." },
  { Icon: Users, title: "Families", text: "Make the most of comfortable accommodation and open outdoor spaces." },
  { Icon: PawPrint, title: "Pet Parents", text: "Bring your pets along and enjoy a holiday together." },
  { Icon: Trees, title: "Nature Lovers", text: "Experience plantation walks, birdwatching and scenic paddy field views." },
];

function IdealFor() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <SectionLabel center>Who It's For</SectionLabel>
          <h2 className="heading-display text-3xl md:text-4xl">An Ideal Stay for Different Types of Travellers</h2>
          <p className="prose-body mt-5">
            Whether you are planning a romantic break, a family vacation or a nature-filled getaway, this
            plantation retreat offers an intimate setting for different travel preferences.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {travellers.map(({ Icon, title, text }) => (
            <div key={title} className="border border-border p-8 text-center transition-colors hover:bg-cream">
              <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Icon className="size-7" strokeWidth={1.4} />
              </span>
              <h3 className="mt-6 text-xl tracking-wider text-primary">{title}</h3>
              <p className="prose-body mt-3 text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const attractions = [
  { name: "Muthanga Wildlife Sanctuary", text: "Explore the region's wildlife and forest surroundings." },
  { name: "Edakkal Caves", text: "Discover prehistoric rock engravings and historical heritage." },
  { name: "Phantom Rock", text: "Visit the distinctive natural rock formation." },
  { name: "Karapuzha Dam", text: "Enjoy scenic countryside views." },
  { name: "Cheengeri Mala", text: "Experience nature and trekking opportunities." },
  { name: "Wayanad Heritage Museum", text: "Explore the cultural history of the region." },
  { name: "Uravu", text: "Discover traditional bamboo crafts and local craftsmanship." },
];

function Attractions() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 md:px-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="grid grid-cols-2 gap-4 self-start lg:sticky lg:top-36">
          <figure className="col-span-2">
            <img src={muthanga.url} alt="Elephants at Muthanga Wildlife Sanctuary" loading="lazy" className="aspect-[16/9] w-full object-cover" />
            <figcaption className="mt-2 text-xs text-muted-foreground">Muthanga Wildlife Sanctuary</figcaption>
          </figure>
          <figure>
            <img src={edakkal.url} alt="Edakkal Caves near Sulthan Bathery" loading="lazy" className="aspect-square w-full object-cover" />
            <figcaption className="mt-2 text-xs text-muted-foreground">Edakkal Caves</figcaption>
          </figure>
          <figure>
            <img src={phantomRock.url} alt="Phantom Rock, Wayanad" loading="lazy" className="aspect-square w-full object-cover" />
            <figcaption className="mt-2 text-xs text-muted-foreground">Phantom Rock</figcaption>
          </figure>
        </div>
        <div>
          <SectionLabel>Explore Nearby</SectionLabel>
          <h2 className="heading-display text-3xl md:text-4xl">Nearby Attractions Around Sulthan Bathery</h2>
          <p className="prose-body mt-5">
            Wayanad offers several attractions for travellers interested in nature, wildlife and history. Guests
            can plan visits to popular destinations such as:
          </p>
          <ol className="mt-8 divide-y divide-border border-y border-border">
            {attractions.map((a, i) => (
              <li key={a.name} className="flex gap-5 py-5">
                <span className="font-display text-2xl text-sand">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-lg tracking-wide text-primary">{a.name}</h3>
                  <p className="prose-body text-sm">{a.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="prose-body mt-8">
            After exploring the attractions around Sulthan Bathery, return to your cottage to relax in peaceful
            plantation surroundings.
          </p>
        </div>
      </div>
    </section>
  );
}

function PlanYourStay() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <img src={evenings.url} alt="" aria-hidden="true" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-primary/85" />
      <div className="relative mx-auto max-w-3xl px-5 text-center text-primary-foreground">
        <p className="font-script text-4xl text-sand md:text-5xl">your Wayanad getaway awaits</p>
        <h2 className="mt-2 text-3xl tracking-wider md:text-4xl">Plan Your Stay at Raindrops Resorts Near Sulthan Bathery</h2>
        <p className="mt-6 leading-relaxed opacity-90">
          Looking for Resorts in Sulthan Bathery that offer privacy, nature and comfort? Raindrops Resorts brings
          together 13 independent cottages, coffee plantation surroundings, beautiful paddy field views and a
          pet-friendly atmosphere.
        </p>
        <p className="mt-4 leading-relaxed opacity-90">
          Enjoy Kerala-style comfort meals, explore the plantation, spend time outdoors and create memorable
          moments with your loved ones.
        </p>
        <BookButtons className="mt-10 justify-center" />
        <a
          href={contact.phoneHref}
          className="mt-6 inline-flex items-center gap-2 text-sm text-sand hover:text-primary-foreground"
        >
          or call {contact.phoneDisplay} <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5 md:px-10">
        <div className="mb-12 text-center">
          <SectionLabel center>FAQs</SectionLabel>
          <h2 className="heading-display text-3xl md:text-4xl">Frequently Asked Questions</h2>
        </div>
        <Accordion type="single" collapsible defaultValue="faq-0" className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-none bg-sand px-6">
              <AccordionTrigger className="py-5 text-left font-display text-lg font-normal tracking-wide text-primary hover:no-underline">
                {i + 1}. {f.q}
              </AccordionTrigger>
              <AccordionContent className="prose-body pb-5 text-[0.95rem]">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
