// Mock-Daten der aktuellen Rabbit-Cars Camper/Wohnmobile (Stand: Scrape von
// autoscout24.ch/de/s/seller-63793, Kategorie "Wohnmobile", 09.08.2026).
// Später wird dieses Modul durch einen echten Fetch ersetzt (AS24 Händler-Feed / Listing API).

import type { Vehicle } from "./vehicles";

const BASE = "https://www.autoscout24.ch/de/hci/v2/2428/detail";
const IMG = (path: string) => `https://listing-images.autoscout24.ch/listing/${path}?w=1920`;

const rawCampers: Omit<Vehicle, "category">[] = [
  {
    id: "20658231",
    name: "Fiat Affinity Camper Van",
    highlights: "Truma Heizung · Elekt. Hebebett für mehr Platz im Kofferraum · L-förmige Küche · LED Scheinwerfer · Navi",
    price: "CHF 79'900.–",
    firstRegistration: "04.2024",
    fuel: "Diesel",
    km: "23'000 km",
    power: "180 PS (132 kW)",
    transmission: "Automat",
    image: IMG("231/20658231/2146155080.jpeg"),
    detailUrl: `${BASE}/20658231`,
  },
];

export const campers: Vehicle[] = rawCampers.map((v) => ({ ...v, category: "camper" }));
