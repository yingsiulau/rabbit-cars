import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Gauge, Fuel, Zap, Cog, Phone } from "lucide-react";
import logo from "@/assets/rabbit-cars-logo.png";
import { vehicles, type Vehicle } from "@/data/vehicles";
import { campers } from "@/data/campers";
import { motorcycles } from "@/data/motorcycles";

export const Route = createFileRoute("/occasionen")({
  component: OccasionenPage,
  head: () => ({
    meta: [
      { title: "Occasionen · Rabbit-Cars Gümligen" },
      {
        name: "description",
        content: `Aktueller Occasionspark von Rabbit-Cars in Gümligen – ${vehicles.length} Autos, ${campers.length} Camper und ${motorcycles.length} Motorräder: Porsche, BMW, Mercedes, Audi, Lamborghini, Ducati, Harley-Davidson und mehr.`,
      },
    ],
  }),
});

function VehicleCard({ v }: { v: Vehicle }) {
  return (
    <Link
      to="/occasionen/$vehicleId"
      params={{ vehicleId: v.id }}
      className="group bg-panel ring-1 ring-border rounded-lg overflow-hidden flex flex-col hover:ring-accent/40 transition-all"
    >
      <div className="aspect-[4/3] overflow-hidden bg-background">
        <img
          src={v.image}
          alt={v.name}
          loading="lazy"
          width={1200}
          height={900}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6 space-y-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between items-start gap-4">
            <h2 className="font-display font-medium text-lg leading-tight">{v.name}</h2>
            <span className="text-muted-foreground text-xs whitespace-nowrap pt-1">{v.firstRegistration}</span>
          </div>
          <p className="text-muted-foreground text-xs mt-2 line-clamp-2">{v.highlights}</p>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[11px] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Gauge className="size-3.5" />{v.km}</span>
          <span className="inline-flex items-center gap-1.5"><Fuel className="size-3.5" />{v.fuel}</span>
          <span className="inline-flex items-center gap-1.5"><Zap className="size-3.5" />{v.power}</span>
          <span className="inline-flex items-center gap-1.5"><Cog className="size-3.5" />{v.transmission}</span>
          {v.consumption && (
            <span className="col-span-2 text-muted-foreground/70">Verbrauch: {v.consumption}</span>
          )}
          {v.range && (
            <span className="col-span-2 text-muted-foreground/70">Reichweite: {v.range}</span>
          )}
        </div>

        <div className="pt-4 mt-auto flex justify-between items-center border-t border-border">
          <span className="text-lg font-display">{v.price}</span>
          <span className="text-xs text-accent uppercase tracking-widest inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Details <ArrowRight className="size-3" />
          </span>
        </div>
      </div>
    </Link>
  );
}

function OccasionenPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <Link to="/" className="block h-6 sm:h-7 shrink-0">
            <img
              src={logo}
              alt="Rabbit-Cars"
              className="h-full w-auto brightness-0 invert"
              width={600}
              height={120}
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" hash="kontakt" className="hidden sm:inline text-sm font-medium hover:text-accent transition-colors">
              Kontakt
            </Link>
            <a
              href="tel:+41793006060"
              className="inline-flex text-sm font-medium bg-primary text-primary-foreground py-2 px-4 rounded-sm ring-1 ring-primary hover:bg-accent hover:ring-accent active:scale-[0.98] transition-all duration-200 items-center gap-2"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Termin</span>
            </a>
            <Link to="/" className="text-sm font-medium hover:text-accent transition-colors inline-flex items-center gap-2">
              <ArrowLeft className="size-4" /> <span className="hidden sm:inline">Zurück</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-8 max-w-7xl mx-auto px-6">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-4">
          Occasionspark · {vehicles.length} Autos · {campers.length} Camper · {motorcycles.length} Motorräder
        </span>
        <h1 className="font-display text-5xl sm:text-6xl font-medium leading-[1.05]">
          Unser aktueller <em className="not-italic text-muted-foreground">Bestand</em>.
        </h1>
        <p className="text-muted-foreground max-w-[52ch] mt-6">
          Alle Fahrzeuge werden persönlich beraten und sorgfältig geprüft.
        </p>
      </header>

      {/* Quick-Nav zwischen den Kategorien */}
      <div className="sticky top-16 z-40 bg-background/90 backdrop-blur-xl border-y border-border">
        <div className="max-w-7xl mx-auto px-6 flex gap-6 text-sm font-medium overflow-x-auto">
          <a href="#autos" className="py-4 whitespace-nowrap hover:text-accent transition-colors">Autos · {vehicles.length}</a>
          <a href="#camper" className="py-4 whitespace-nowrap hover:text-accent transition-colors">Camper & Vans · {campers.length}</a>
          <a href="#motorraeder" className="py-4 whitespace-nowrap hover:text-accent transition-colors">Motorräder · {motorcycles.length}</a>
        </div>
      </div>

      {/*
        Stopgap: static cards from data/vehicles.ts + data/campers.ts +
        data/motorcycles.ts (checked 09.08.2026 against the live
        AS24/MotoScout24 seller pages — still matches). The live AS24 HCI
        widget (see components/AutoScout24Listings.tsx) is domain-locked to
        rabbit-cars.ch and stays blank on the github.io preview — swap back
        to that once the rabbit-cars.ch DNS cutover to GitHub Pages is live.
      */}
      <section id="autos" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-32">
        <h2 className="font-display text-2xl font-medium mb-6">Autos · {vehicles.length}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <VehicleCard key={v.id} v={v} />
          ))}
        </div>
      </section>

      <section id="camper" className="max-w-7xl mx-auto px-6 py-16 scroll-mt-32">
        <h2 className="font-display text-2xl font-medium mb-6">Camper & Vans · {campers.length}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campers.map((v) => (
            <VehicleCard key={v.id} v={v} />
          ))}
        </div>
      </section>

      <section id="motorraeder" className="max-w-7xl mx-auto px-6 py-16 pb-24 scroll-mt-32">
        <h2 className="font-display text-2xl font-medium mb-6">Motorräder · {motorcycles.length}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {motorcycles.map((v) => (
            <VehicleCard key={v.id} v={v} />
          ))}
        </div>

        <p className="mt-16 text-xs text-muted-foreground text-center max-w-[60ch] mx-auto">
          Angaben ohne Gewähr · Preise in CHF.
        </p>
      </section>
    </div>
  );
}
