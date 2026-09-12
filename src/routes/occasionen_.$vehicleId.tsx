import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Gauge, Fuel, Zap, Cog, Calendar, ExternalLink, Phone, ArrowLeft } from "lucide-react";
import logo from "@/assets/rabbit-cars-logo.png";
import { vehicles, CATEGORY_ANCHOR } from "@/data/vehicles";
import { campers } from "@/data/campers";
import { motorcycles } from "@/data/motorcycles";
import { VehicleGallery } from "@/components/VehicleGallery";

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
  const highlightPills = vehicle.highlights.split("·").map((h) => h.trim()).filter(Boolean);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
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
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-24 max-w-6xl mx-auto px-6">
        <Link
          to="/occasionen"
          hash={CATEGORY_ANCHOR[vehicle.category]}
          className="mb-4 text-sm font-medium text-muted-foreground hover:text-accent transition-colors inline-flex items-center gap-2"
        >
          <ArrowLeft className="size-4" /> Zurück zur Übersicht
        </Link>

        <VehicleGallery images={gallery} alt={vehicle.name} />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-10 lg:order-1">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-medium leading-[1.05]">{vehicle.name}</h1>
            </div>

            {highlightPills.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {highlightPills.map((h) => (
                  <span
                    key={h}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-panel ring-1 ring-border text-muted-foreground"
                  >
                    {h}
                  </span>
                ))}
              </div>
            )}

            {vehicle.description && (
              <div>
                <h2 className="font-display text-xl font-medium mb-4">Fahrzeugbeschreibung</h2>
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">{vehicle.description}</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:order-2">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="text-3xl font-display">{vehicle.price}</div>

              <div className="grid grid-cols-2 gap-4 p-6 rounded-xl bg-panel ring-1 ring-border">
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="size-4 text-accent shrink-0" /> {vehicle.firstRegistration}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Gauge className="size-4 text-accent shrink-0" /> {vehicle.km}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Fuel className="size-4 text-accent shrink-0" /> {vehicle.fuel}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="size-4 text-accent shrink-0" /> {vehicle.power}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Cog className="size-4 text-accent shrink-0" /> {vehicle.transmission}
                </div>
                {vehicle.consumption && (
                  <div className="flex items-center gap-2 text-sm col-span-2">
                    <Calendar className="size-4 text-accent shrink-0" /> Verbrauch: {vehicle.consumption}
                  </div>
                )}
                {vehicle.range && (
                  <div className="flex items-center gap-2 text-sm col-span-2">
                    <Calendar className="size-4 text-accent shrink-0" /> Reichweite: {vehicle.range}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:+41793006060"
                  className="bg-primary text-primary-foreground text-sm font-medium py-3 px-5 flex items-center justify-center gap-2 rounded-sm hover:bg-accent transition-colors"
                >
                  <Phone className="size-4" /> Termin vereinbaren
                </a>
                <a
                  href={vehicle.detailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground text-sm py-3 px-5 border border-border rounded-sm hover:bg-panel transition-colors inline-flex items-center justify-center gap-2"
                >
                  Original-Inserat auf AutoScout24 <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
