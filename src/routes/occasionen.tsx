import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import logo from "@/assets/rabbit-cars-logo.png";
import { AutoScout24Listings } from "@/components/AutoScout24Listings";

export const Route = createFileRoute("/occasionen")({
  component: OccasionenPage,
  head: () => ({
    meta: [
      { title: "Occasionen · Rabbit-Cars Gümligen" },
      {
        name: "description",
        content: "Aktueller Occasionspark von Rabbit-Cars in Gümligen – geprüfte Fahrzeuge: Porsche, BMW, Mercedes, Audi, Lamborghini und mehr.",
      },
    ],
  }),
});

function OccasionenPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="block h-6 sm:h-7">
            <img
              src={logo}
              alt="Rabbit-Cars"
              className="h-full w-auto brightness-0 invert"
              width={600}
              height={120}
            />
          </Link>
          <Link to="/" className="text-sm font-medium hover:text-accent transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="size-4" /> Zurück
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="pt-32 pb-12 max-w-7xl mx-auto px-6">
        <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-4">
          Occasionspark
        </span>
        <h1 className="font-display text-5xl sm:text-6xl font-medium leading-[1.05]">
          Unser aktueller <em className="not-italic text-muted-foreground">Bestand</em>.
        </h1>
        <p className="text-muted-foreground max-w-[52ch] mt-6">
          Alle Fahrzeuge werden persönlich beraten und sorgfältig geprüft.
        </p>
      </header>

      {/* Live AS24 listings */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="rounded-xl bg-white p-4 sm:p-6 ring-1 ring-border">
          <AutoScout24Listings configId="2428" />
        </div>

        <p className="mt-8 text-xs text-muted-foreground text-center max-w-[60ch] mx-auto">
          Angaben ohne Gewähr · Preise in CHF · Live-Daten von AutoScout24.
        </p>
      </section>
    </div>
  );
}
