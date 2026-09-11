import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Gauge, Fuel, Zap, Cog, Calendar, ExternalLink, Phone } from "lucide-react";
import logo from "@/assets/rabbit-cars-logo.png";
import { vehicles, CATEGORY_ANCHOR } from "@/data/vehicles";
import { campers } from "@/data/campers";
import { motorcycles } from "@/data/motorcycles";

export const Route = createFileRoute("/occasionen_/$vehicleId")({
  component: VehicleDetailPage,
  loader: ({ params }) => {
    const vehicle = [...vehicles, ...campers, ...motorcycles].find((v) => v.id === params.vehicleId);
    if (!vehicle) throw notFound();
    return vehicle;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} · Rabbit-Cars Gümligen` },
          { name: "description", content: `${loaderData.name} – ${loaderData.price}, ${loaderData.km}, ${loaderData.fuel}. ${loaderData.highlights}` },
        ]
      : [],
  }),
});

function VehicleDetailPage() {
  const vehicle = Route.useLoaderData();
  const gallery = [vehicle.image, ...(vehicle.images ?? [])];
  const [activeImage, setActiveImage] = useState(vehicle.image);

  return (
    <div className="bg-background text-foreground min-h-screen">
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
            <Link
              to="/occasionen"
              hash={CATEGORY_ANCHOR[vehicle.category]}
              className="text-sm font-medium hover:text-accent transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="size-4" /> Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-border bg-panel">
              <img
                src={activeImage}
                alt={vehicle.name}
                width={1200}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            {gallery.length > 1 && (
              <div className="mt-3 grid grid-cols-5 gap-2">
                {gallery.map((src, i) => (
                  <button
                    key={src + i}
                    type="button"
                    onClick={() => setActiveImage(src)}
                    className={`aspect-square overflow-hidden rounded-md ring-1 transition-all ${
                      activeImage === src ? "ring-accent ring-2" : "ring-border hover:ring-accent/40"
                    }`}
                  >
                    <img src={src} alt="" width={200} height={200} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground block mb-3">
                Erstzulassung {vehicle.firstRegistration}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]">{vehicle.name}</h1>
              <p className="text-muted-foreground mt-4">{vehicle.highlights}</p>
            </div>

            <div className="text-3xl font-display">{vehicle.price}</div>

            <div className="grid grid-cols-2 gap-4 p-6 rounded-xl bg-panel ring-1 ring-border">
              <div className="flex items-center gap-2 text-sm">
                <Gauge className="size-4 text-accent" /> {vehicle.km}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Fuel className="size-4 text-accent" /> {vehicle.fuel}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Zap className="size-4 text-accent" /> {vehicle.power}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Cog className="size-4 text-accent" /> {vehicle.transmission}
              </div>
              {vehicle.consumption && (
                <div className="flex items-center gap-2 text-sm col-span-2">
                  <Calendar className="size-4 text-accent" /> Verbrauch: {vehicle.consumption}
                </div>
              )}
              {vehicle.range && (
                <div className="flex items-center gap-2 text-sm col-span-2">
                  <Calendar className="size-4 text-accent" /> Reichweite: {vehicle.range}
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="tel:+41793006060"
                className="bg-primary text-primary-foreground text-sm font-medium py-3 px-5 flex items-center gap-2 rounded-sm hover:bg-accent transition-colors"
              >
                <Phone className="size-4" /> Termin vereinbaren
              </a>
              <a
                href={vehicle.detailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm py-3 px-5 border border-border rounded-sm hover:bg-panel transition-colors inline-flex items-center gap-2"
              >
                Original-Inserat auf AutoScout24 <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>
        </div>

        {vehicle.description && (
          <div className="mt-16 max-w-3xl">
            <h2 className="font-display text-2xl font-medium mb-4">Fahrzeugbeschreibung</h2>
            <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{vehicle.description}</p>
          </div>
        )}
      </section>
    </div>
  );
}
