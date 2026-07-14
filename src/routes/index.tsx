import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Clock, ShieldCheck, Wrench, Handshake, Gauge, Fuel, Calendar, Menu, X } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import catAutos from "@/assets/hero-lambo.jpg.asset.json";
import catCamper from "@/assets/cat-camper.jpg";
import catMoto from "@/assets/cat-moto.jpg";
import logoAsset from "@/assets/rabbit-cars-logo.png.asset.json";
import { vehicles } from "@/data/vehicles";

export const Route = createFileRoute("/")({
  component: Index,
});

const brands = ["PORSCHE", "AUDI", "BMW", "MERCEDES-BENZ", "VW", "FERRARI", "LAND ROVER", "TESLA"];

const featured = vehicles.slice(0, 6);

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="bg-background text-foreground selection:bg-accent/30 selection:text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
          <a href="#top" className="block h-6 sm:h-7 shrink-0" onClick={closeMenu}>
            <img
              src={logoAsset.url}
              alt="Rabbit-Cars"
              className="h-full w-auto brightness-0 invert"
              width={600}
              height={120}
            />
          </a>
          <div className="hidden sm:flex gap-8">
            <a href="#top" className="text-sm font-medium hover:text-accent transition-colors">Home</a>
            <a href="#occasionen" className="text-sm font-medium hover:text-accent transition-colors">Occasionen</a>
            <a href="#warum" className="text-sm font-medium hover:text-accent transition-colors">Über uns</a>
            <a href="#kontakt" className="text-sm font-medium hover:text-accent transition-colors">Kontakt</a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="tel:+41793006060"
              className="hidden sm:inline-flex text-sm font-medium bg-primary text-primary-foreground py-2 px-4 rounded-sm ring-1 ring-primary hover:bg-accent transition-colors items-center gap-2"
            >
              <Phone className="size-3.5" />
              Termin
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Menü schliessen" : "Menü öffnen"}
              aria-expanded={menuOpen}
              className="sm:hidden inline-flex items-center justify-center h-10 w-10 rounded-sm border border-border hover:bg-panel transition-colors"
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          className={`sm:hidden overflow-hidden border-t border-border transition-[max-height] duration-300 ease-out ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-6 py-4 flex flex-col gap-1 bg-background/95">
            <a href="#top" onClick={closeMenu} className="py-3 text-sm font-medium hover:text-accent transition-colors border-b border-border/50">Home</a>
            <a href="#occasionen" onClick={closeMenu} className="py-3 text-sm font-medium hover:text-accent transition-colors border-b border-border/50">Occasionen</a>
            <a href="#warum" onClick={closeMenu} className="py-3 text-sm font-medium hover:text-accent transition-colors border-b border-border/50">Über uns</a>
            <a href="#kontakt" onClick={closeMenu} className="py-3 text-sm font-medium hover:text-accent transition-colors border-b border-border/50">Kontakt</a>
            <a
              href="tel:+41793006060"
              onClick={closeMenu}
              className="mt-3 text-sm font-medium bg-primary text-primary-foreground py-3 px-4 rounded-sm ring-1 ring-primary hover:bg-accent transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="size-3.5" />
              Termin vereinbaren
            </a>
          </div>
        </div>
      </nav>


      {/* Hero */}
      <section id="top" className="relative min-h-[92vh] flex flex-col justify-end pb-24 pt-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Fahrzeug im Showroom von Rabbit-Cars"
            className="w-full h-full object-cover"
            width={1920}
            height={900}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-[46ch] space-y-6 animate-fade-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-accent" />
              Familienbetrieb seit über 40 Jahren
            </span>
            <h1 className="font-display text-5xl sm:text-7xl leading-[1.02] font-medium text-balance">
              Über 40 Jahre <em className="not-italic text-muted-foreground">Familien</em>tradition.
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-[52ch]">
              Ihr zuverlässiger Partner rund um Occasionsfahrzeuge in Gümligen bei Bern. Autos, Camper, Motorräder – persönlich beraten, sorgfältig geprüft.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#occasionen"
                className="bg-primary text-primary-foreground text-sm font-medium py-3 px-5 flex items-center gap-2 rounded-sm hover:bg-accent transition-colors"
              >
                Occasionen ansehen <ArrowRight className="size-4" />
              </a>
              <a
                href="#kontakt"
                className="text-foreground text-sm font-medium py-3 px-5 border border-border rounded-sm hover:bg-panel transition-colors"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand marquee */}
      <div className="py-10 border-y border-border overflow-hidden bg-panel/40">
        <div className="flex animate-marquee gap-16 whitespace-nowrap px-8 w-max">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="text-2xl font-display font-medium text-muted-foreground/40 tracking-tight">
              {b}
            </span>
          ))}
        </div>
      </div>

      {/* Category Bento */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-12 max-w-[50ch]">
          <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-4">Unsere Spezialitäten</span>
          <h2 className="text-4xl font-display font-medium">Von wenig bis viel PS.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a href="#occasionen" className="md:col-span-2 group relative h-96 overflow-hidden rounded-xl ring-1 ring-border">
            <img src={catAutos.url} alt="Autos" loading="lazy" width={1200} height={900} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2">01 — Fahrzeuge</span>
              <h3 className="text-3xl font-display font-medium mb-2">Autos</h3>
              <p className="text-muted-foreground text-sm max-w-[42ch]">
                Fahrzeuge von wenig bis viel PS sind unsere Spezialität. Persönlich ausgesucht, sorgfältig geprüft.
              </p>
            </div>
          </a>

          <div className="grid grid-rows-2 gap-4">
            <a href="#occasionen" className="group relative overflow-hidden rounded-xl ring-1 ring-border">
              <img src={catCamper} alt="Camper und Vans" loading="lazy" width={800} height={450} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">02</span>
                <h3 className="text-xl font-display font-medium">Camper & Vans</h3>
              </div>
            </a>
            <a href="#occasionen" className="group relative overflow-hidden rounded-xl ring-1 ring-border">
              <img src={catMoto} alt="Motorräder" loading="lazy" width={800} height={450} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">03</span>
                <h3 className="text-xl font-display font-medium">Motorräder</h3>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Occasionen */}
      <section id="occasionen" className="py-24 bg-panel/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-wrap gap-6 justify-between items-end">
          <div className="max-w-[46ch]">
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-4">Aktueller Bestand · {vehicles.length} Fahrzeuge</span>
            <h2 className="text-4xl font-display font-medium">Ausgewählte Occasionen</h2>
          </div>
          <Link to="/occasionen" className="text-sm text-accent underline underline-offset-4 inline-flex items-center gap-2">
            Alle {vehicles.length} ansehen <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((v) => (
            <a
              key={v.id}
              href={v.detailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-panel ring-1 ring-border rounded-lg overflow-hidden flex flex-col hover:ring-accent/40 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden bg-background">
                <img src={v.image} alt={v.name} loading="lazy" width={1200} height={900} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <h4 className="font-display font-medium text-lg leading-tight">{v.name}</h4>
                    <span className="text-muted-foreground text-xs whitespace-nowrap pt-1">{v.firstRegistration}</span>
                  </div>
                  <p className="text-muted-foreground text-xs mt-2 line-clamp-2">{v.highlights}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[10px] text-muted-foreground tracking-wider">
                  <span className="inline-flex items-center gap-1"><Gauge className="size-3" />{v.km}</span>
                  <span className="inline-flex items-center gap-1"><Fuel className="size-3" />{v.fuel}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="size-3" />{v.power.split(" ")[0]} PS</span>
                </div>
                <div className="pt-4 mt-auto flex justify-between items-center border-t border-border">
                  <span className="text-lg font-display">{v.price}</span>
                  <span className="text-xs text-accent uppercase tracking-widest inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Details <ArrowRight className="size-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>


      {/* Trust / Warum */}
      <section id="warum" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-4">Warum Rabbit-Cars</span>
            <h2 className="text-4xl font-display font-medium mb-6 max-w-[16ch]">Persönlich. Ehrlich. Seit über 40 Jahren.</h2>
            <p className="text-muted-foreground text-lg max-w-[52ch]">
              Wir beraten Sie gerne und nehmen uns Zeit, ein passendes Fahrzeug aus unserem Occasionspark für Sie zu finden – ohne Verkaufsdruck, mit über vier Jahrzehnten Erfahrung.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, k: "40+", v: "Jahre Familientradition" },
              { icon: Handshake, k: "1'000+", v: "Zufriedene Kunden" },
              { icon: Wrench, k: "100%", v: "Geprüfte Fahrzeuge" },
              { icon: Clock, k: "24h", v: "Rückmeldung garantiert" },
            ].map(({ icon: Icon, k, v }) => (
              <div key={v} className="p-6 rounded-xl bg-panel ring-1 ring-border">
                <Icon className="size-5 text-accent mb-4" />
                <div className="text-3xl font-display font-medium mb-1">{k}</div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest leading-relaxed">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-24 border-t border-border bg-panel/20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-4">Kontakt</span>
              <h2 className="text-4xl font-display font-medium">Besuchen Sie uns in Gümligen.</h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="size-5 text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Adresse</span>
                  <p className="text-lg">Worbstrasse 158<br />3073 Gümligen</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="size-5 text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Telefon</span>
                  <p className="text-lg"><a href="tel:+41793006060" className="hover:text-accent">+41 79 300 60 60</a></p>
                  <p className="text-lg"><a href="tel:+41319518888" className="hover:text-accent">+41 31 951 88 88</a></p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="size-5 text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">E-Mail</span>
                  <p className="text-lg"><a href="mailto:info@rabbit-cars.ch" className="hover:text-accent">info@rabbit-cars.ch</a></p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="size-5 text-accent shrink-0 mt-1" />
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-widest">Öffnungszeiten</span>
                  <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm mt-1">
                    <span className="text-muted-foreground">Mo–Fr</span>
                    <span>07:30–12:00, 13:00–18:00</span>
                    <span className="text-muted-foreground">Samstag</span>
                    <span>09:00–12:30</span>
                    <span className="text-muted-foreground">Sonntag</span>
                    <span className="text-muted-foreground">Geschlossen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] rounded-xl overflow-hidden ring-1 ring-border">
            <iframe
              title="Standort Rabbit-Cars"
              src="https://www.google.com/maps?q=Worbstrasse+158,+3073+G%C3%BCmligen&output=embed"
              className="w-full h-full grayscale contrast-125 opacity-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <img
            src={logoAsset.url}
            alt="Rabbit-Cars"
            className="h-6 w-auto brightness-0 invert opacity-80"
            width={600}
            height={120}
          />
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Rabbit-Cars · Ihr Occasionsspezialist in Gümligen</p>
          <div className="flex gap-6">
            <a href="#kontakt" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">Impressum</a>
            <a href="#kontakt" className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
