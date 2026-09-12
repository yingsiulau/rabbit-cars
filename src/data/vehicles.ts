// Mock-Daten der aktuellen Rabbit-Cars Occasionen (Stand: Scrape von
// autoscout24.ch/de/s/seller-63793, 11.09.2026).
// Später wird dieses Modul durch einen echten Fetch ersetzt (AS24 Händler-Feed / Listing API).
// Struktur bleibt gleich, damit der Umbau nur diese Datei betrifft.

export type VehicleCategory = "auto" | "camper" | "moto";

// The anchor id each category's section on /occasionen (and the homepage,
// for auto/moto) scrolls to. "auto" has none — it's the first section, so
// the page top already lands there.
export const CATEGORY_ANCHOR: Record<VehicleCategory, string | undefined> = {
  auto: undefined,
  camper: "camper",
  moto: "motorraeder",
};

export type Vehicle = {
  id: string;
  name: string;
  highlights: string;
  description?: string; // Longer free-text "Fahrzeugbeschreibung" from the listing
  price: string;
  firstRegistration: string; // MM.YYYY
  fuel: string;
  km: string;
  power: string;
  transmission: string;
  consumption?: string;
  range?: string;
  image: string;
  images?: string[]; // Additional gallery photos beyond the hero `image`
  detailUrl: string;
  category: VehicleCategory;
};

const BASE = "https://www.autoscout24.ch/de/hci/v2/2428/detail";
const IMG = (path: string) => `https://images.autoscout24.ch/public/listing/${path}?w=1920`;
const IMG2 = (path: string) => `https://listing-images.autoscout24.ch/listing/${path}?w=1920`;

const rawVehicles: Omit<Vehicle, "category">[] = [
  {
    id: "20800812",
    name: "BMW X1 xDrive 20d 48V M Sport",
    highlights: "Wunderschöne Farbkombination · Garantie · CH-Fahrzeug · 1. Hand · Nahezu Vollausstattung",
    description: `Wunderschöne Farbkombination
Nahezu Vollausstattung
CH Fahrzeug
Gratis Service
12MONATE Garantie
360GRAD Kamera + Rückfahrkamera
LED Scheinwerfer
M Packet
Harman Kardon Soundsystem
Glas-Schiebedach
Head-Up Display
Keyless Entry + Go
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 37'900.–",
    firstRegistration: "03.2023",
    fuel: "Mild-Hybrid Diesel/Elektro",
    km: "71'000 km",
    power: "149 PS (110 kW)",
    transmission: "Halbautomat",
    consumption: "5 l/100 km",
    image: IMG2("812/20800812/1120428497.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/812/20800812/1727894040.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/812/20800812/1368367849.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/812/20800812/1716763429.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/812/20800812/2050418685.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/812/20800812/148253747.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/812/20800812/84694806.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/812/20800812/1296100810.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20800812`,
  },
  {
    id: "20801939",
    name: "Maserati Ghibli S Q4 3.0 V6 Automatica",
    highlights: "1. Hand · CH-Fahrzeug · Servicegepflegt immer bei Maserati · Frisch ab Service · Garantie",
    description: `Wunderschöner Maserati Ghibli SQ4
Tolle Farbkombination Perlmutweiss Metallic / Rot
Aus Seriöser 1.HAND
Wenig Kilometer
CH-Fahrzeug
Stets bei der Gleichen Maserati Garage Gewartet
Frisch ab Maserati Service
Ab MFK
12MONATE Garantie
Neue Sommerreifen
Inkl. Car-Cover + Batterie Ladegerät
Top Ausstattung wie:
Carbon Applikationen
21" Sport Felgen
Schiebedach
Sitzheizung
Rückfahrkamera
PDC
Navigation / DAB / Bluetooth
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 37'900.–",
    firstRegistration: "05.2014",
    fuel: "Benzin",
    km: "39'000 km",
    power: "411 PS (302 kW)",
    transmission: "Automat",
    consumption: "10.5 l/100 km",
    image: IMG2("939/20801939/1520143139.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/939/20801939/851443439.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/939/20801939/566551134.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/939/20801939/1932392902.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/939/20801939/1268569740.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/939/20801939/2076935919.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/939/20801939/1065740249.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/939/20801939/1404839535.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20801939`,
  },
  {
    id: "20749090",
    name: "Mercedes-Benz E 450 AMG Line 4Matic 9G-Tronic",
    highlights: "Top Ausstattung · 8-fach bereift · Frisch ab MFK · Frisch ab Service · Gratis Service · CH-Fahrzeug",
    description: `Wunderschöner Mercedes-Benz E450 4MATIC
Gepflegter Zustand
Frisch ab MFK
Frisch ab Service
CH Fahrzeug mit Gratis Service bis 100'000KM
8FACH Bereift
12MONATE Garantie
Neue Reifen
Top Ausstattung wie:
AMG Line
Ambiente Beleuchtung
Sitzheizung
Burmester Soundsystem
Glas-Schiebedach
360GRAD Kamera + Rückfahrkamera
LED Scheinwerfer
Head Up Display
Spurhalte Assistent
Totwinkel Assistent
Elekt. Sitze + Memory
Virtual Cockpit
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 39'900.–",
    firstRegistration: "06.2019",
    fuel: "Benzin",
    km: "75'000 km",
    power: "367 PS (270 kW)",
    transmission: "Automat",
    consumption: "10.1 l/100 km",
    image: IMG2("90/20749090/1818956404.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/90/20749090/1153125709.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/90/20749090/1383424211.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/90/20749090/968404780.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/90/20749090/1058318821.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/90/20749090/1849354968.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/90/20749090/129140398.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/90/20749090/1170092555.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20749090`,
  },
  {
    id: "20748960",
    name: "VW Golf 2.0 TDI GTD DSG",
    highlights: "Tolle Ausstattung · Gepflegter Zustand · 12 Monate Garantie · Apple CarPlay · Rückfahrkamera",
    description: `Wunderschöner GTD mit DSG Automatikgetriebe
Sehr Gepflegter Zustand
Frisch ab MFK
12MONATE Garantie
Tolle Ausstattung wie:
Rückfahrkamera
IQ LED Scheinwerfer
Sitzheizung
Lenkradheizung
Abstandsregeltempomat
Apple Carplay
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 22'900.–",
    firstRegistration: "05.2022",
    fuel: "Diesel",
    km: "138'000 km",
    power: "200 PS (147 kW)",
    transmission: "Halbautomat",
    image: IMG2("960/20748960/2083298473.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/960/20748960/798244571.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/960/20748960/1026675963.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/960/20748960/933178948.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/960/20748960/2128003480.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/960/20748960/488133029.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/960/20748960/1948996438.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/960/20748960/1337363232.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20748960`,
  },
  {
    id: "20749056",
    name: "Mercedes-Benz G 500 AMG Line 9G-Tronic",
    highlights: "Emerald Green · Frisch ab MFK · 12 Monate Garantie · Burmester Soundsystem · AMG Line",
    description: `Wunderschöner G500 mit AMG Line
Emerald Green Metallic
Frisch ab MFK
12MONATE Garantie
Tolle Ausstattung wie:
Schiebedach
Burmester Soundsystem
Sitzheizung + Sitzkühlung
360GRAD Kamera + Rückfahrkamera
LED Scheinwerfer
Sitzheizung Hinten
Abstandsregeltempomat
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 89'900.–",
    firstRegistration: "11.2018",
    fuel: "Benzin",
    km: "117'000 km",
    power: "422 PS (310 kW)",
    transmission: "Automat",
    image: IMG2("56/20749056/615285988.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/56/20749056/1733519985.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/56/20749056/1146465162.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/56/20749056/401121156.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/56/20749056/618446851.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/56/20749056/1662079554.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/56/20749056/1183098013.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/56/20749056/1167286194.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20749056`,
  },
  {
    id: "20732126",
    name: "Ferrari 488 GTB 3.9 V8",
    highlights: "Frisch ab MFK · Neue Reifen · Carbon Applikationen · JBL Soundsystem · Alcantara Ausstattung",
    description: `Schöner 488 Gtb mit Dezenter Farbkombination
Frisch ab MFK
Frisch ab Service
Neue Sommerreifen
12MONATE Garantie
Alcantara Leder Ausstattung
Kontrastnähte in Weiss
JBL Soundsystem
Carbon Applikationen
Carbon Lenkrad
Carbon Side Airsplitter
Rückfahrkamera + Frontkamera
Apple Carplay
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 159'900.–",
    firstRegistration: "10.2016",
    fuel: "Benzin",
    km: "69'900 km",
    power: "670 PS (493 kW)",
    transmission: "Halbautomat",
    consumption: "11.4 l/100 km",
    image: IMG2("126/20732126/1878011145.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/126/20732126/1135997214.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/126/20732126/184795392.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/126/20732126/1560214160.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/126/20732126/766651775.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/126/20732126/2064668048.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/126/20732126/353514198.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/126/20732126/616820976.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20732126`,
  },
  {
    id: "20722738",
    name: "Porsche Cayenne Turbo",
    highlights: "Top gepflegt · Nahezu Vollausstattung · 8-fach bereift · Frisch ab Service · Burmester Sound",
    description: `Wunderschöner Porsche Cayenne Turbo
Sehr Gepflegter Zustand
8FACH Bereift mit Komplettfelgen
12MONATE Garantie
Frisch ab Service
Top Ausstattung wie:
Burmester Soundsystem
Glasdach
18WEG Elekt. Sitze + Memory
LED Scheinwerfer
Abstandsregeltempomat
Elekt. Anhängerkupplung
360GRAD Kamera + Rückfahrkamera
Sport Chrono Packet
Sitzheizung + Sitzkühlung
4ZONEN Klimaanlage
Luftfahrwerk
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 48'900.–",
    firstRegistration: "04.2015",
    fuel: "Benzin",
    km: "72'000 km",
    power: "520 PS (382 kW)",
    transmission: "Automat",
    consumption: "11.5 l/100 km",
    image: IMG2("738/20722738/497442583.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/738/20722738/1131893514.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/738/20722738/982613693.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/738/20722738/516426698.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/738/20722738/1988045111.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/738/20722738/260626868.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/738/20722738/2074910458.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/738/20722738/1945040328.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20722738`,
  },
  {
    id: "20619415",
    name: "Porsche Macan Turbo Performance PDK",
    highlights: "2 Jahre Porsche Approved Garantie · Frisch ab Service · 8-fach bereift",
    description: `Wunderschöner Porsche Macan Turbo Performance PDK
Tolle Farbkombination
Bis 5.2028 Porsche Approved Vollgarantie
Sehr Gepflegter Zustand
Seriöser Vorbesitzer
8FACH Bereift mit Porsche Winter Kompletträder
Frisch ab MFK
Frisch ab Porsche Service
Neue Bremsen Vorne + Hinten
Neue Reifen
Nahezu Vollaustattung wie:
Luftfahrwerk
LED Scheinwerfer
360GRAD Kamera + Rückfahrkamera
Abstandsregeltempomat
Sport Auspuffanlage
Glas-Schiebedach
Alcantara Dachhimmel
Carbon Applikationen
Vollleder Ausstattung Bicolor
18 Weg Elekt. Verstellbare Sitze
21" Felgen
Sport Chrono Packet
Bose Soundsystem
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 41'900.–",
    firstRegistration: "01.2017",
    fuel: "Benzin",
    km: "84'000 km",
    power: "440 PS (324 kW)",
    transmission: "Halbautomat",
    consumption: "9.7 l/100 km",
    image: IMG("415/20619415/960173959.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/415/20619415/1484492922.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/415/20619415/938863563.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/415/20619415/565708822.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/415/20619415/1628197342.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/415/20619415/1292444734.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/415/20619415/1904563913.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/415/20619415/1133147217.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20619415`,
  },
  {
    id: "20676398",
    name: "Mercedes-Benz AMG GT 4 53 4Matic+ Speedshift TCT Special Edition",
    highlights: "Special Edition · Facelift · Sehr gepflegt · Frisch ab MFK · Garantie · Frisch ab Mercedes Service",
    description: `Einzigartiger Mercedes-Benz GT4 53AMG Facelift
Wunderschöne Farbkombination
Sehr Gepflegt
Special Edition
Frisch ab MFK + Frisch ab Service
12MONATE Garantie
Nahezu Vollausgestattet mit:
Special Edition Packet
Premium Packet
Burmester Soundsystem
Glas-Schiebedach
Alcantara Dachhimmel
Multibeam LED Scheinwerfer
Sitzheizung + Sitzkühlung
Elekt. Sitze + Memory
360GRAD Kamera + Rückfahrkamera
Matt-Carbon Applikationen
Ambiente Beleuchtung
AMG Ride Control+
21"AMG Felgen
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 74'900.–",
    firstRegistration: "03.2022",
    fuel: "Mild-Hybrid Benzin/Elektro",
    km: "103'000 km",
    power: "435 PS (320 kW)",
    transmission: "Halbautomat",
    image: "https://listing-images.autoscout24.ch/listing/398/20676398/466432289.jpeg?w=1920",
    images: [
      "https://images.autoscout24.ch/public/listing/398/20676398/1128293285.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/398/20676398/1361042441.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/398/20676398/493445207.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/398/20676398/184647691.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/398/20676398/206073418.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/398/20676398/707143367.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/398/20676398/403718148.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20676398`,
  },
  {
    id: "20619260",
    name: "Ford Fiesta 1.0 SCTi Vignale",
    highlights: "Frisch ab MFK · Garantie · Navi · Bluetooth · PDC · 8-fach bereift",
    description: `Gepflegter Ford Fiesta
12MONATE Garantie
Frisch ab MFK
Navigationssystem
Bluetooth
PDC Hinten
Tempomat
8FACH Bereift
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 9'900.–",
    firstRegistration: "09.2018",
    fuel: "Benzin",
    km: "86'000 km",
    power: "100 PS (74 kW)",
    transmission: "Schaltgetriebe",
    consumption: "5 l/100 km",
    image: IMG("260/20619260/186452542.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/260/20619260/1154585408.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/260/20619260/1452603817.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/260/20619260/1554259999.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/260/20619260/1125369915.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/260/20619260/842140007.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/260/20619260/1444436922.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/260/20619260/375694192.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20619260`,
  },
  {
    id: "20619082",
    name: "BMW M850i xDrive Steptronic",
    highlights: "CH-Fahrzeug · Carbon Core Edition · Nahezu Vollausstattung · Garantie",
    description: `Wunderschöner BMW M850i Xdrive
Sehr Gepflegtes Fahrzeug
CH-Fahrzeug
12MONATE Garantie
Gratis Service bis 146000KM Inkl. Flüssigkeiten
8FACH Bereift (Originalfelgen)
H&R Tieferlegung
Nahezu Vollausstattung mit:
Glas Applikationen
Laser Light
Carbon Core Packet
Harman Kardon Soundsystem
Alcantara Dachhimmel
Vollleder Ausstattung
Sitzheizung + Sitzkühlung
Lenkradheizung
Softclose
Head-Up Display
360GRAD Kamera + Rückfahrkamera
Individual Lederausstattung
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 52'900.–",
    firstRegistration: "01.2019",
    fuel: "Benzin",
    km: "76'500 km",
    power: "530 PS (390 kW)",
    transmission: "Automat",
    consumption: "11.3 l/100 km",
    image: IMG("82/20619082/877753731.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/82/20619082/48758679.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/82/20619082/54808223.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/82/20619082/1334086303.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/82/20619082/1041171946.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/82/20619082/1847668148.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/82/20619082/1528785577.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/82/20619082/506078903.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20619082`,
  },
  {
    id: "20604919",
    name: "Porsche Cayman GT4",
    highlights: "Porsche Approved Garantie · PPF Schutzfolie · Martini Design · Schalensitze",
    description: `Wunderschöner Porsche GT4 im Martini Design
Neuwertiger Zustand
(Folierung Kann Entfernt Werden)
Front Inkl. Seiten in PPF Schutzfolie Foliert
Frisch ab MFK
Frisch ab Service (Servicegpflegt bei Porsche)
Porsche Approved Garantie bis 10.2026 (Verlängerbar)
Carbon Schalensitze Inkl. 3PUNKTE Gurte
Überrollkäfig
Sportauspuffanlage
Volllederausstattung
Fahrwerksverstellung
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 82'900.–",
    firstRegistration: "08.2016",
    fuel: "Benzin",
    km: "58'000 km",
    power: "385 PS (283 kW)",
    transmission: "Schaltgetriebe",
    consumption: "10.3 l/100 km",
    image: IMG("919/20604919/926204139.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/919/20604919/1732602185.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/919/20604919/1066986446.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/919/20604919/2039927017.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/919/20604919/180076563.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/919/20604919/140794589.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/919/20604919/1985484554.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/919/20604919/955283841.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20604919`,
  },
  {
    id: "20583360",
    name: "Mercedes-Benz E 220 d Coupé Avantgarde 9G-Tronic",
    highlights: "H&R Tieferlegung · JP Racing Felgen 20\" · Facelift · 8-fach bereift",
    description: `Wunderschöner E220D Facelift Modell
Sehr Gepflegtes Fahrzeug
H&R Tieferlegung (Eingetragen)
JP Racing Felgen 20" (Eingetragen)
8FACH Bereift
Neue Sommerreifen
Frisch ab Mercedes Service
Ambiente Beleuchtung
Rückfahrkamera
LED Scheinwerfer
Glas-Schiebedach
Diamond Grill
Sitzheizung
Virtual Cockpit
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 43'900.–",
    firstRegistration: "10.2020",
    fuel: "Diesel",
    km: "57'000 km",
    power: "194 PS (143 kW)",
    transmission: "Automat",
    image: IMG("360/20583360/706348760.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/360/20583360/2017606194.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/360/20583360/669010697.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/360/20583360/1053051880.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/360/20583360/100106805.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/360/20583360/858292151.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/360/20583360/385874359.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/360/20583360/1133874133.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20583360`,
  },
  {
    id: "20555312",
    name: "Porsche Taycan 4 Cross Turismo",
    highlights: "Garantie · CH-Fahrzeug · Panoramadach · 360°-Kamera · 21\" Felgen",
    description: `Wunderschöner Cross Turismo Taycan 4
CH-Fahrzeug mit Porsche Werksgarantie
4 Zusätzliche Winterreifen
Tolle Ausstattung wie:
21" Felgen
Panoramadach
Sitzheizung Vorne+hinten
Vollleder Ausstattung
Ambientebeleuchtung
Abstandsregeltempomat
360GRAD Kamera + Rückfahrkamera
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 64'900.–",
    firstRegistration: "04.2023",
    fuel: "Elektro",
    km: "38'000 km",
    power: "476 PS (350 kW)",
    transmission: "Automat",
    range: "389 km",
    image: IMG("312/20555312/935917962.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/312/20555312/1981943221.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/312/20555312/259404451.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/312/20555312/1523932959.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/312/20555312/611465120.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/312/20555312/165198901.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/312/20555312/1271097380.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/312/20555312/1587072198.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20555312`,
  },
  {
    id: "20488047",
    name: "Lamborghini Revuelto Verde Citrea",
    highlights: "Verde Citrea · Vor-OPF · Komplett PPF · Nahezu Vollausstattung · Top Spec",
    description: `Wunderschöner Revuelto in Verde Citrea Sonderlackierung
Komplett in PPF Schutzfolie Foliert (bei 0KM)
Vor OPF Modell Inkl. Auspuff Klappensteuerung
Nahezu Vollausstattung
High Assistant
Fully Electric and Heated Seats
Inverted Stitching
Headlamps Package
Rear View Camera
Windscreen Frame of Front Bonnet in Shy Black
Passenger Display
Contrast Color Trim
Floor Mats With Leader Border
Smartphone Interface (Apple Car Play)
Stitching Inverted
Carpets Bicolor
Embroidered Lamborghini Logo on Headrest
Interior Details Carbon Package
Q-Citura on Roof, + Door Panel
Steering Wheel Carbon Package Corsa Tex
Rims Alanero 21/22 Shiny Black
Cupholder on Dashborder
Nero Lucido CCB Brak Calipers
Eninge Frame Inserts on Cofango in Shiny Black
Style Package-High Gloss Black
Verde Citrea

(Professional Pictures by Phpics Photography)

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 508'900.–",
    firstRegistration: "05.2025",
    fuel: "Plug-in Hybrid",
    km: "5'800 km",
    power: "1'015 PS (747 kW)",
    transmission: "Halbautomat",
    image: IMG("47/20488047/1662266596.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/47/20488047/43658829.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/47/20488047/1453178145.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/47/20488047/615358280.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/47/20488047/713581413.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/47/20488047/263868363.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/47/20488047/28221245.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/47/20488047/496841587.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20488047`,
  },
  {
    id: "20367651",
    name: "Chevrolet Corvette 5.7 LT1 Convertible",
    highlights: "Sehr gepflegt · Wenig Kilometer · Neue Reifen · Frisch ab MFK",
    description: `Fahrzeug Wird bei Kauf Frisch Geprüft
Sehr Gepflegtes Fahrzeug
Wenig Kilometer
Automatik Getriebe
Klappscheinwerfer
Neue Reifen
UVM!!!

Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 17'900.–",
    firstRegistration: "04.1993",
    fuel: "Benzin",
    km: "75'000 km",
    power: "282 PS (207 kW)",
    transmission: "Automat",
    image: IMG("651/20367651/303481216.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/651/20367651/271636188.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/651/20367651/1180005951.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/651/20367651/355031426.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/651/20367651/942418422.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/651/20367651/1579629400.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/651/20367651/2067167339.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/651/20367651/659356752.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20367651`,
  },
  {
    id: "20111099",
    name: "Porsche 911 Turbo S Cabriolet PDK",
    highlights: "CH-Fahrzeug · Porsche Garantie · Vossen Felgen · KW Tieferlegung",
    description: `Wunderschöner Porsche Turbo S Cabriolet
CH-Fahrzeug aus Seriöser Hand
2JAHRE Porsche Approved bis 7.2028
Frisch ab Grossem Service
8FACH Bereift mit Spezialfelgen Sommer + Winter
KW Tieferlegungsfedern
Alles Eingetragen
Vossen 20/21" Felgen
Titan Forged 20/21 Felgen
Nahezu Vollausstattung wie:
Keramik Bremsanlage
Luftfahrwerk Vorderachse
Abstandsregeltempomat (ACC)
360GRAD Kamera
Burmester High End Soundsystem
Sitzheizung + Sitzkühlung
Volllederausstattung
Sport Chrono Paket
Sportabgasanlage
UVM!!!

Wird im Kundenauftrag Verkauft

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 199'900.–",
    firstRegistration: "07.2022",
    fuel: "Benzin",
    km: "13'500 km",
    power: "650 PS (478 kW)",
    transmission: "Halbautomat",
    consumption: "12.5 l/100 km",
    image: IMG("99/20111099/434846005.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/99/20111099/1420821015.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/99/20111099/542134660.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/99/20111099/785368224.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/99/20111099/1100470891.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/99/20111099/1591523247.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/99/20111099/677547599.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/99/20111099/160150396.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20111099`,
  },
  {
    id: "12846160",
    name: "Porsche Cayenne Turbo",
    highlights: "Frisch ab MFK & Service · Garantie · 21\" Felgen · Burmester Sound",
    description: `Sehr Gepflegter Porsche Cayenne Turbo
CH-Fahrzeug
Frisch ab MFK + Frisch ab Service
12MONATE Garantie
4 Sommerreifen Zusätzlich
Top Ausstattung wie:
Apple Carplay / Android Auto Nachrüstung
Spezial Heckleuchten
21" Turbo Felgen
Burmester Soundsystem
Alcantara Dachhimmel
Schiebedach
Rückfahrkamera
Elektl. Heckklappe
Elekt. Sitze
Luftfahrwerk
UVM!!!

Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 18'900.–",
    firstRegistration: "09.2010",
    fuel: "Benzin",
    km: "174'000 km",
    power: "500 PS (368 kW)",
    transmission: "Automat",
    consumption: "11.5 l/100 km",
    image: IMG("160/12846160/278466803.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/160/12846160/292816304.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/160/12846160/563964044.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/160/12846160/1751561310.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/160/12846160/166298443.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/160/12846160/353693877.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/160/12846160/1508821242.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/160/12846160/838232053.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/12846160`,
  },
  {
    id: "12834833",
    name: "Ford Mustang Fastback 5.0 V8 GT Automat",
    highlights: "12 Monate Garantie · Frisch ab Service · Neue Reifen · Rückfahrkamera",
    description: `Wunderschöner Ford Mustang 5.0 GT
Frisch ab Service + ab MFK
12MONATE QUALITY1 Garantie
Neue Bremsen Vorne+hinten
Nahezu Neue Reifen
Frontspoiler
Distanzscheiben
Tolle Ausstattung wie:
Rückfahrkamera
Sitzheizung+sitzkühlung
Navigationssystem
Tempomat
Keyless Entry + Go
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 38'900.–",
    firstRegistration: "12.2018",
    fuel: "Benzin",
    km: "76'000 km",
    power: "422 PS (310 kW)",
    transmission: "Automat",
    consumption: "12 l/100 km",
    image: IMG("833/12834833/1912336995.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/833/12834833/776131779.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/833/12834833/793227852.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/833/12834833/906946375.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/833/12834833/816094222.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/833/12834833/769955749.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/833/12834833/1547249321.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/833/12834833/1356329611.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/12834833`,
  },
  {
    id: "12411976",
    name: "Lamborghini Murciélago 6.2 Coupé",
    highlights: "Le Mans Edition · CH-Fahrzeug · Servicehistorie komplett bei Lamborghini",
    description: `Wunderschöner und Seltener Murcielago 6.2 LP580 Le Mans Edition
CH-Fahrzeug mit Kompletter Service Historie Stets bei Lamborghini
Sehr Gepflegt aus Seriösem Vorbesitz
Neue Kupplung / Neue Reifen
Fahrzeug Wird Frisch ab Service bei Lamborghini Verkauft
Originaler Le Mans Edition by Affolter mit:
Work Felgen in Wert von 15'000.- (Eingetragen)
Italcardesign Heckspoiler (Inkl. Rückfahrkamera) (Eingetragen)
Originalfelgen Ebenfalls Vorhanden
Spezial Multimediasystem mit Bluetooth
Liftsystem für Vorderachse (ab Werk)

Eine Absolute Rarität mit Wertzuwachs

Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 229'800.–",
    firstRegistration: "05.2004",
    fuel: "Benzin",
    km: "57'000 km",
    power: "580 PS (426 kW)",
    transmission: "Halbautomat",
    consumption: "21.5 l/100 km",
    image: IMG("976/12411976/387090395.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/976/12411976/1185404203.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/976/12411976/536310184.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/976/12411976/1831079664.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/976/12411976/2013823688.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/976/12411976/325775465.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/976/12411976/1142564762.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/976/12411976/799942754.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/12411976`,
  },
];

export const vehicles: Vehicle[] = rawVehicles.map((v) => ({ ...v, category: "auto" }));
