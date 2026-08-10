// Mock-Daten der aktuellen Rabbit-Cars Motorräder (Stand: Scrape von
// motoscout24.ch/de/s/seller-63793, 31.07.2026).
// Später wird dieses Modul durch einen echten Fetch ersetzt (AS24 Händler-Feed / Listing API).

import type { Vehicle } from "./vehicles";

const BASE = "https://www.motoscout24.ch/de/d";
const IMG = (path: string) => `https://listing-images.motoscout24.ch/listing/${path}?w=1920`;

const rawMotorcycles: Omit<Vehicle, "category">[] = [
  {
    id: "20520463",
    name: "BMW M 1000 R Competition Full Carbon",
    highlights: "Voll Carbon · SC Project Auspuff · Spezial Kupplungsgehäuse · 1. Hand · Service immer bei BMW",
    price: "CHF 24'900.–",
    firstRegistration: "09.2023",
    fuel: "Benzin",
    km: "18'000 km",
    power: "209 PS (154 kW)",
    transmission: "Schaltgetriebe manuell",
    image: IMG("463/20520463/1797517439.jpeg"),
    detailUrl: `${BASE}/bmw-m-1000-r-competition-full-carbon-20520463`,
  },
  {
    id: "12265610",
    name: "Ducati Streetfighter V4 S Supreme Edition",
    highlights: "Supreme Edition · Nr. 166/250 · Heckumbau · Spezial Blinker vorne + hinten",
    price: "CHF 44'900.–",
    firstRegistration: "Neufahrzeug",
    fuel: "Benzin",
    km: "2 km",
    power: "208 PS (153 kW)",
    transmission: "Schaltgetriebe manuell",
    image: IMG("610/12265610/1387389193.jpeg"),
    detailUrl: `${BASE}/ducati-streetfighter-v4-s-supreme-edition-12265610`,
  },
  {
    id: "11967082",
    name: "Ducati XDiavel Nera",
    highlights: "Neuzustand · Einzelstück · Nera Edition Nr. 374/500 · Komplettumbau · ZARD Auspuffanlage",
    price: "CHF 24'900.–",
    firstRegistration: "08.2023",
    fuel: "Benzin",
    km: "2'500 km",
    power: "160 PS (118 kW)",
    transmission: "Schaltgetriebe manuell",
    image: IMG("82/11967082/1933951161.jpg"),
    detailUrl: `${BASE}/ducati-xdiavel-nera-11967082`,
  },
  {
    id: "20520504",
    name: "Ducati Streetfighter V2",
    highlights: "Carbon Felgen · Diverse Carbon Applikationen · QD Komplettauspuffanlage · Kurzheck",
    price: "CHF 26'900.–",
    firstRegistration: "03.2024",
    fuel: "Benzin",
    km: "7'200 km",
    power: "152 PS (112 kW)",
    transmission: "Schaltgetriebe manuell",
    image: IMG("504/20520504/643795038.jpeg"),
    detailUrl: `${BASE}/ducati-streetfighter-v2-20520504`,
  },
  {
    id: "12632297",
    name: "Harley-Davidson FLSS Softail Bündnerbike Custom",
    highlights: "Alles geprüft · Bündnerbike · Komplettumbau · 300er Reifen · Brembo Bremsen",
    price: "CHF 79'900.–",
    firstRegistration: "08.2017",
    fuel: "Benzin",
    km: "2'500 km",
    power: "92 PS (68 kW)",
    transmission: "Schaltgetriebe manuell",
    image: IMG("297/12632297/1376986824.jpeg"),
    detailUrl: `${BASE}/harley-davidson-flss-softail-bundnerbike-custom-12632297`,
  },
  {
    id: "12265647",
    name: "Harley-Davidson FLSTFBS Fat Boy CVO Custom",
    highlights: "Custom Dragster Umbau · CVO 110 Screaming Eagle · Komplett Auspuffanlage · Heckumbau",
    price: "CHF 22'900.–",
    firstRegistration: "03.2016",
    fuel: "Benzin",
    km: "4'500 km",
    power: "92 PS (68 kW)",
    transmission: "Schaltgetriebe manuell",
    image: IMG("647/12265647/1527298562.jpeg"),
    detailUrl: `${BASE}/harley-davidson-flstfbs-fat-boy-cvo-custom-12265647`,
  },
];

export const motorcycles: Vehicle[] = rawMotorcycles.map((v) => ({ ...v, category: "moto" }));
