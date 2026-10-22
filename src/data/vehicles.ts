// Mock-Daten der aktuellen Rabbit-Cars Occasionen (Stand: Scrape von
// autoscout24.ch/de/s/seller-63793, 22.10.2026).
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
    id: "20923459",
    name: "VW T6 Multivan 2.0 TDI Trendline 4Motion DSG Bulli",
    highlights: "Anhängerkupplung · DSG · 4Motion Allrad · Rückfahrkamera · 12 Monate Garantie",
    description: `VW T6 Bulli 4MOTION
Ab Service
12MONATE Garantie
8FACH Bereift
DSG Automatik Getriebe
4MOTION Allrad
DAB+ Radio
Bluetooth
Rückfahrkamera
Anhängerkupplung
PDC
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 32'900.–",
    firstRegistration: "05.2019",
    fuel: "Diesel",
    km: "122'000 km",
    power: "150 PS (110 kW)",
    transmission: "Halbautomatisches Getriebe",
    consumption: "10.8 l/100 km",
    image: IMG("459/20923459/1687770564.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/459/20923459/674439932.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/459/20923459/1627858950.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/459/20923459/36768458.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/459/20923459/2045860561.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/459/20923459/316808466.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/459/20923459/1617542599.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/459/20923459/467433650.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20923459`,
  },
  {
    id: "20923273",
    name: "Jeep Grand Cherokee 6.4 V8 HEMI SRT8 Automatic",
    highlights: "Sehr gepflegt · 8-fach bereift · Garantie · Frisch ab Service · Frisch ab MFK",
    description: `All Black
Sehr Gepflegtes Fahrzeug
Frisch ab Service
Frisch ab MFK
12MONATE Garantie
Spezial Auspuffanlage mit Beiblatt
Trittbretter
Tolle Ausstattung wie:
Glas-Schiebedach
Carbon Applikationen
Sitzheizung + Sitzkühlung
Lenkradheizung
Keyless Entry+go
Rückfahrkamera
Harman Kardon Soundsystem
Alcantara Dachhimmel
Anhängerkupplung
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 32'900.–",
    firstRegistration: "01.2017",
    fuel: "Benzin",
    km: "129'000 km",
    power: "468 PS (344 kW)",
    transmission: "Automat",
    consumption: "13.5 l/100 km",
    image: IMG("273/20923273/606205843.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/273/20923273/790710474.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/273/20923273/1349479004.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/273/20923273/1902825883.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/273/20923273/875561538.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/273/20923273/1753238349.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/273/20923273/1244187646.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/273/20923273/1615773211.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20923273`,
  },
  {
    id: "20922157",
    name: "Audi RS Q3 Sportback quattro S tronic",
    highlights: "Full Black · Vollausstattung · B&O Soundsystem · Abstandsregeltempomat · Schiebedach",
    description: `Wunderschöner Audi RS Q3 Sportback
8FACH Bereift
12MONATE Garantie
Ab MFK + ab Service
Vollausstattung wie:
21" Felgen
B&O Soundsystem
Carbon Applikation
Nappa Leder mit Rautensteppung
Abstandsregeltempomat
Glas-Schiebedach
360GRAD Kamera + Rückfahrkamera
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 36'900.–",
    firstRegistration: "12.2020",
    fuel: "Benzin",
    km: "133'000 km",
    power: "400 PS (294 kW)",
    transmission: "Halbautomatisches Getriebe",
    consumption: "10.3 l/100 km",
    image: IMG("157/20922157/1771580832.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/157/20922157/117520216.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/157/20922157/1739293304.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/157/20922157/14599823.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/157/20922157/1074758572.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/157/20922157/557671334.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/157/20922157/1442906882.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/157/20922157/721578655.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20922157`,
  },
  {
    id: "20922097",
    name: "Audi Q5 40 TDI sport quattro S-tronic",
    highlights: "Tolle Ausstattung · Gepflegter Zustand · 360° Kamera · Glas-Schiebedach · S-Line",
    description: `Wunderschöner Audi Q5 40TDI
Gepflegter Zustand
Ab MFK + ab Service
12MONATE Garantie
Tolle Ausstattung wie:
Nappa Leder mit Rautensteppung
360GRAD Kamera + Rückfahrkamera
S-Line Interieur+exterieur
Panorama-Glasdach
Elekt. Sitze + Memory
Sitzheizung
LED Matrix Scheinwerfer
Totwinkelassistent + Laneassist
Abstandsregeltempomat
Keyless Entry+go
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 28'900.–",
    firstRegistration: "01.2020",
    fuel: "Diesel",
    km: "131'000 km",
    power: "190 PS (140 kW)",
    transmission: "Halbautomatisches Getriebe",
    consumption: "5.4 l/100 km",
    image: IMG("97/20922097/439536409.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/97/20922097/1492837560.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/97/20922097/906064450.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/97/20922097/739384842.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/97/20922097/1620303129.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/97/20922097/184384172.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/97/20922097/508234955.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/97/20922097/714067311.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20922097`,
  },
  {
    id: "20922042",
    name: "Land Rover Range Rover Velar D 300 First Edition Automatic",
    highlights: "Velar D300 First Edition · Distanzscheiben · 22\" Felgen · Vollausstattung · Garantie",
    description: `Wunderschöner Velar D300 First Edition R-Dynamic
12MONATE Garantie
Ab Service + ab MFK
Distanzscheiben (Eingetragen)
Vollausstattung:
Luftfahrwerk
Massage Sitze
Sitzheizung+sitzkühlung
Panoramadach
Rückfahrkamera
22" Felgen
R-Dynamic
Elekt. Sitze
Meridian Soundsystem
Keyless Entry+go
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 27'900.–",
    firstRegistration: "03.2018",
    fuel: "Diesel",
    km: "155'000 km",
    power: "300 PS (221 kW)",
    transmission: "Automat",
    consumption: "6.4 l/100 km",
    image: IMG("42/20922042/1546206875.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/42/20922042/2092870246.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/42/20922042/626142948.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/42/20922042/554601585.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/42/20922042/440798533.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/42/20922042/792159327.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/42/20922042/1745227640.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/42/20922042/1752488497.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20922042`,
  },
  {
    id: "20866980",
    name: "Volvo XC60 T6 AWD Summum Geartronic",
    highlights: "Frisch ab MFK · Ab Service · 8-fach bereift · Neue Reifen · Nahezu Vollausstattung",
    description: `Gepflegtes Fahrzeug
Ab MFK + ab Service
8FACH Bereift
Neue Reifen
Nahezu Vollausstattung wie:
BLIS
Harman Kardon Soundsystem
Lane Assist
Rückfahrkamera
Glasdach
Leder
Sitzheizung
UVM!!!

Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 14'900.–",
    firstRegistration: "06.2016",
    fuel: "Benzin",
    km: "192'000 km",
    power: "306 PS (225 kW)",
    transmission: "Automat",
    consumption: "7.7 l/100 km",
    image: IMG("980/20866980/923986757.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/980/20866980/1463781477.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/980/20866980/1813722161.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/980/20866980/1674925690.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/980/20866980/273536179.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/980/20866980/376775143.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/980/20866980/1553395312.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/980/20866980/1202890584.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20866980`,
  },
  {
    id: "20864046",
    name: "VW Golf R32 4Motion",
    highlights: "Wenig Kilometer · Nahezu Neuzustand · KW Fahrwerk · R8 Schalensitze · DSG Automatik",
    description: `Wunderschöner R32 mit Wenig Kilometer
Nahezu Neuzustand
Ab MFK + ab Service
Servicegepflegt Stets bei VW Vertretung
KW Fahrwerk (Eingetragen)
Spezial Felgen (Eingetragen)
R8 Schalensitze
DSG Automatikgetriebe
Blau/Violet Metallic
Schiebedach
Sitzheizung
Multifunktionslenkrad
Grosses Navi
UVM!!!

Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 29'900.–",
    firstRegistration: "03.2006",
    fuel: "Benzin",
    km: "88'000 km",
    power: "250 PS (184 kW)",
    transmission: "Automat",
    consumption: "9.8 l/100 km",
    image: IMG("46/20864046/678861958.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/46/20864046/761229262.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/46/20864046/1946318872.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/46/20864046/679206467.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/46/20864046/806529818.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/46/20864046/516574316.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/46/20864046/778555730.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/46/20864046/1915065617.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20864046`,
  },
  {
    id: "20820531",
    name: "VW Golf 2.0 TSI R 4Motion DSG",
    highlights: "8-fach bereift · Top gepflegt · Akrapovič Auspuffanlage · Facelift · Garantie",
    description: `Sehr Gepflegter VW Golf R Facelift
8FACH Bereift
AKRAPOVIC Auspuffanlage
12MONATE Garantie
Top Ausstattung wie:
Keyless Entry + Go
Abstandsregeltempomat
LED Scheinwerfer
Carbonleder
DAB+ / Navi / Bluetooth
Sportbremse RS3
Rückfahrkamera
UVM!!!

Leasing/Kredit/Eintausch Möglich
!!!Bei Uns Bezahlen Sie Keinerlei Ablieferungskosten!!!
Wir Sind Momentan auf der Suche nach Geprüften und Gepflegten Fahrzeugen!!!
Irrtümer und Zwischenverkauf Vorbehalten`,
    price: "CHF 23'500.–",
    firstRegistration: "07.2020",
    fuel: "Benzin",
    km: "137'000 km",
    power: "301 PS (221 kW)",
    transmission: "Halbautomatisches Getriebe",
    consumption: "7.2 l/100 km",
    image: IMG("531/20820531/1281094270.jpeg"),
    images: [
      "https://images.autoscout24.ch/public/listing/531/20820531/569062064.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/531/20820531/419675847.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/531/20820531/883329417.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/531/20820531/625634990.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/531/20820531/200686711.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/531/20820531/1275928789.jpeg?w=1920",
      "https://images.autoscout24.ch/public/listing/531/20820531/528413564.jpeg?w=1920",
    ],
    detailUrl: `${BASE}/20820531`,
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
    highlights: "Emerald Green · 22\" Vossen Räder · Frisch ab MFK · 12 Monate Garantie · Burmester Soundsystem · AMG Line",
    description: `Wunderschöner G500 mit AMG Line
Emerald Green Metallic
8FACH mit 22" Vossen Räder
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
    price: "CHF 93'900.–",
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
];

export const vehicles: Vehicle[] = rawVehicles.map((v) => ({ ...v, category: "auto" }));
