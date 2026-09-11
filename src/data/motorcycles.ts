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
    description: `Eine der Schönsten BMW M1000R Competition in Vollcarbon
Sc Project Auspuffanlage mit Gutachten
Offenes Kupplungsgehäuse
Kurzheck
Spezial Blinker Hinten
Ilmberger Vollcarbon Verkleidung ...`,
    price: "CHF 24'900.–",
    firstRegistration: "09.2023",
    fuel: "Benzin",
    km: "18'000 km",
    power: "209 PS (154 kW)",
    transmission: "Schaltgetriebe manuell",
    image: IMG("463/20520463/1797517439.jpeg"),
    images: [
      "https://listing-images.motoscout24.ch/listing/463/20520463/241226176.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/463/20520463/133769072.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/463/20520463/1915169743.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/463/20520463/759894489.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/463/20520463/709564735.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/463/20520463/490461590.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/463/20520463/1169027982.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/bmw-m-1000-r-competition-full-carbon-20520463`,
  },
  {
    id: "12265610",
    name: "Ducati Streetfighter V4 S Supreme Edition",
    highlights: "Supreme Edition · Nr. 166/250 · Heckumbau · Spezial Blinker vorne + hinten",
    description: `DUCATI Streetfighter V4S Supreme Edition
Nummeriert Limitiert 166/250 Stück Weltweit
Neu / Keine Kilometer
Inkl. Originale Holzkiste von Supreme
Heckumbau / Kurzheck (Original Vorhanden) ...`,
    price: "CHF 44'900.–",
    firstRegistration: "Neufahrzeug",
    fuel: "Benzin",
    km: "2 km",
    power: "208 PS (153 kW)",
    transmission: "Schaltgetriebe manuell",
    image: IMG("610/12265610/1387389193.jpeg"),
    images: [
      "https://listing-images.motoscout24.ch/listing/610/12265610/1540351311.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/610/12265610/1608880026.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/610/12265610/953983391.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/610/12265610/1210746668.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/610/12265610/1278693972.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/610/12265610/1392127864.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/610/12265610/1038115397.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/ducati-streetfighter-v4-s-supreme-edition-12265610`,
  },
  {
    id: "11967082",
    name: "Ducati XDiavel Nera",
    highlights: "Neuzustand · Einzelstück · Nera Edition Nr. 374/500 · Komplettumbau · ZARD Auspuffanlage",
    description: `Eine der Schönsten DUCATI Diavel V2
Nera Edition Nr 374/500 Weltweit
Absoluter Neuzustand mit Viel Zubehör
Einzelstück Komplettumbau
Alle Originalteile Vorhanden
ZARD Komplett-Auspuffanlage ...`,
    price: "CHF 24'900.–",
    firstRegistration: "08.2023",
    fuel: "Benzin",
    km: "2'500 km",
    power: "160 PS (118 kW)",
    transmission: "Schaltgetriebe manuell",
    image: IMG("82/11967082/1933951161.jpg"),
    images: [
      "https://listing-images.motoscout24.ch/listing/82/11967082/43484986.jpg?w=1920",
      "https://listing-images.motoscout24.ch/listing/82/11967082/727636918.jpg?w=1920",
      "https://listing-images.motoscout24.ch/listing/82/11967082/1759152220.jpg?w=1920",
      "https://listing-images.motoscout24.ch/listing/82/11967082/1800355300.jpg?w=1920",
      "https://listing-images.motoscout24.ch/listing/82/11967082/2093968235.jpg?w=1920",
      "https://listing-images.motoscout24.ch/listing/82/11967082/2121373822.jpg?w=1920",
      "https://listing-images.motoscout24.ch/listing/82/11967082/2130118111.jpg?w=1920",
    ],
    detailUrl: `${BASE}/ducati-xdiavel-nera-11967082`,
  },
  {
    id: "20520504",
    name: "Ducati Streetfighter V2",
    highlights: "Carbon Felgen · Diverse Carbon Applikationen · QD Komplettauspuffanlage · Kurzheck",
    description: `Wunderschöne Streetfighter V2 aus 1.HAND
Bis 3.2028 Werksgarantie
QD Komplett-Auspuffanlage (mit Gutachten)
Carbon Felgen (Original Felgen Vorhanden Inkl. Pneu)
Andere Übersetzung + ...`,
    price: "CHF 26'900.–",
    firstRegistration: "03.2024",
    fuel: "Benzin",
    km: "7'200 km",
    power: "152 PS (112 kW)",
    transmission: "Schaltgetriebe manuell",
    image: IMG("504/20520504/643795038.jpeg"),
    images: [
      "https://listing-images.motoscout24.ch/listing/504/20520504/1806612306.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/504/20520504/475336875.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/504/20520504/2017906016.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/504/20520504/1011829580.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/504/20520504/1500708936.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/504/20520504/867881729.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/504/20520504/1885693260.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/ducati-streetfighter-v2-20520504`,
  },
  {
    id: "12632297",
    name: "Harley-Davidson FLSS Softail Bündnerbike Custom",
    highlights: "Alles geprüft · Bündnerbike · Komplettumbau · 300er Reifen · Brembo Bremsen",
    description: `Bündnerbike Komplettumbau
Einer der Schönsten Custombikes der Schweiz
Muss in Echt Gesehen Werden, Unglaublich
Brutaler Sound (Legal!)
Alles Eingetragen und Geprüft
300ER Reifen ...`,
    price: "CHF 79'900.–",
    firstRegistration: "08.2017",
    fuel: "Benzin",
    km: "2'500 km",
    power: "92 PS (68 kW)",
    transmission: "Schaltgetriebe manuell",
    image: IMG("297/12632297/1376986824.jpeg"),
    images: [
      "https://listing-images.motoscout24.ch/listing/297/12632297/442145226.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/297/12632297/896543476.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/297/12632297/1857980701.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/297/12632297/1833721975.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/297/12632297/26587959.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/297/12632297/1331627460.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/297/12632297/190571295.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/harley-davidson-flss-softail-bundnerbike-custom-12632297`,
  },
  {
    id: "12265647",
    name: "Harley-Davidson FLSTFBS Fat Boy CVO Custom",
    highlights: "Custom Dragster Umbau · CVO 110 Screaming Eagle · Komplett Auspuffanlage · Heckumbau",
    description: `Custom Dragster Fat Bobber von Pm American Cycles
Kompletter Umbau Geprüft und Alles Eingetragen
CVO 110 Screaming Eagle
Jekyll & Hyde Katalysator + Hauptschalldämpfer (Klappensteuerung) ...`,
    price: "CHF 22'900.–",
    firstRegistration: "03.2016",
    fuel: "Benzin",
    km: "4'500 km",
    power: "92 PS (68 kW)",
    transmission: "Schaltgetriebe manuell",
    image: IMG("647/12265647/1527298562.jpeg"),
    images: [
      "https://listing-images.motoscout24.ch/listing/647/12265647/5526451.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/647/12265647/815111349.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/647/12265647/1434557601.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/647/12265647/1750323625.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/647/12265647/840222439.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/647/12265647/300077470.jpeg?w=1920",
      "https://listing-images.motoscout24.ch/listing/647/12265647/1275791906.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/harley-davidson-flstfbs-fat-boy-cvo-custom-12265647`,
  },
];

export const motorcycles: Vehicle[] = rawMotorcycles.map((v) => ({ ...v, category: "moto" }));
