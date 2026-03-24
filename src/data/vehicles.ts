export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  category: string;
  image: string;
  specs: {
    motor: string;
    potencia: string;
    transmision: string;
    combustible: string;
    pasajeros: number;
  };
  features: string[];
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    id: "jetour-x70",
    brand: "Jetour",
    model: "X70",
    category: "SUV",
    image: "/modelos/jetour-x70.webp",
    specs: {
      motor: "1.5L Turbo",
      potencia: "156 HP",
      transmision: "CVT / 6MT",
      combustible: "Gasolina",
      pasajeros: 7,
    },
    features: [
      "Pantalla táctil 10.25\"",
      "Cámara 360°",
      "Sensores de estacionamiento",
      "Techo panorámico",
      "Arranque sin llave",
      "Control crucero",
    ],
    description:
      "SUV familiar de 7 plazas que combina espacio, tecnología y precio competitivo. Ideal para familias que buscan versatilidad y confort.",
  },
  {
    id: "jetour-t2",
    brand: "Jetour",
    model: "T2",
    category: "SUV",
    image: "/modelos/jetour-t2.webp",
    specs: {
      motor: "2.0L Turbo",
      potencia: "254 HP",
      transmision: "7DCT",
      combustible: "Gasolina",
      pasajeros: 5,
    },
    features: [
      "Pantalla dual 12.3\"",
      "Sistema ADAS completo",
      "Suspensión adaptativa",
      "Interior cuero Nappa",
      "Sistema audio premium",
      "Tracción 4WD",
    ],
    description:
      "SUV premium con motorización turbo potente y equipamiento de lujo. Diseñado para quienes exigen lo mejor.",
  },
  {
    id: "toyota-hilux",
    brand: "Toyota",
    model: "Hilux MT",
    category: "Pickup",
    image: "/modelos/toyota-hilux-mt.webp",
    specs: {
      motor: "2.8L Turbo Diesel",
      potencia: "204 HP",
      transmision: "6MT",
      combustible: "Diesel",
      pasajeros: 5,
    },
    features: [
      "Toyota Safety Sense",
      "Tracción 4x4",
      "Control de descenso",
      "Diferencial trasero bloqueante",
      "Capacidad de carga 1 ton",
      "Chasis reforzado",
    ],
    description:
      "La pickup más vendida del mundo. Sinónimo de durabilidad y confiabilidad para el trabajo y la aventura.",
  },
  {
    id: "toyota-hilux-at",
    brand: "Toyota",
    model: "Hilux AT",
    category: "Pickup",
    image: "/modelos/toyota-hilux-mt.webp",
    specs: {
      motor: "2.8L Turbo Diesel",
      potencia: "204 HP",
      transmision: "6AT",
      combustible: "Diesel",
      pasajeros: 5,
    },
    features: [
      "Toyota Safety Sense",
      "Transmisión automática 6 velocidades",
      "Tracción 4x4 inteligente",
      "Pantalla multimedia 8\"",
      "Cámara de reversa",
      "Apple CarPlay / Android Auto",
    ],
    description:
      "Versión automática de la legendaria Hilux. Mayor confort de conducción sin sacrificar robustez todoterreno.",
  },
  {
    id: "toyota-lc70",
    brand: "Toyota",
    model: "Land Cruiser 70",
    category: "Utilitario",
    image: "/modelos/toyota-land-cruiser-70.webp",
    specs: {
      motor: "4.0L V6",
      potencia: "228 HP",
      transmision: "5MT",
      combustible: "Gasolina",
      pasajeros: 5,
    },
    features: [
      "Chasis de escalera reforzado",
      "Eje rígido delantero y trasero",
      "Reducción de marcha",
      "Bloqueo central de diferencial",
      "Capacidad de vadeo 700mm",
      "Diseño icónico legendario",
    ],
    description:
      "El todoterreno definitivo. Más de 40 años de legado, elegido para las condiciones más extremas del mundo.",
  },
  {
    id: "toyota-prado",
    brand: "Toyota",
    model: "Land Cruiser Prado",
    category: "SUV",
    image: "/modelos/toyota-land-cruiser-prado.jpg",
    specs: {
      motor: "2.8L Turbo Diesel",
      potencia: "204 HP",
      transmision: "6AT",
      combustible: "Diesel",
      pasajeros: 7,
    },
    features: [
      "Multi-Terrain Select",
      "Suspensión KDSS",
      "Toyota Safety Sense",
      "Interior cuero premium",
      "Pantalla 9\" con navegación",
      "JBL Premium Audio 14 parlantes",
    ],
    description:
      "Capacidad todoterreno de clase mundial con lujo y refinamiento. El SUV premium para ir a cualquier lugar.",
  },
  {
    id: "soueast-s06",
    brand: "Soueast",
    model: "S06",
    category: "SUV",
    image: "/modelos/soueast-s06.jpg",
    specs: {
      motor: "1.5L",
      potencia: "120 HP",
      transmision: "CVT",
      combustible: "Gasolina",
      pasajeros: 5,
    },
    features: [
      "Pantalla táctil 10\"",
      "Cámara de reversa",
      "Sensores de estacionamiento",
      "Conectividad Bluetooth",
      "Aire acondicionado automático",
      "Llantas de aleación 17\"",
    ],
    description:
      "SUV moderno con equipamiento completo a un precio accesible para el mercado boliviano.",
  },
  {
    id: "byd-dolphin",
    brand: "BYD",
    model: "Dolphin EV",
    category: "Eléctrico",
    image: "/modelos/byd-dolphin-ev.webp",
    specs: {
      motor: "Motor Eléctrico",
      potencia: "177 HP",
      transmision: "Directa",
      combustible: "Eléctrico",
      pasajeros: 5,
    },
    features: [
      "Batería Blade 60.4 kWh",
      "Autonomía 427 km",
      "Carga rápida 30 min (30-80%)",
      "Pantalla giratoria 12.8\"",
      "Sistema V2L",
      "Plataforma e-Platform 3.0",
    ],
    description:
      "Puerta de entrada a la movilidad eléctrica. Tecnología Blade Battery con seguridad, autonomía y diseño moderno.",
  },
  {
    id: "maxus-t90",
    brand: "Maxus",
    model: "T90 EV",
    category: "Pickup",
    image: "/modelos/maxus-t90-ev.webp",
    specs: {
      motor: "Motor Eléctrico Dual",
      potencia: "272 HP",
      transmision: "Directa",
      combustible: "Eléctrico",
      pasajeros: 5,
    },
    features: [
      "Batería 88.55 kWh",
      "Autonomía 330 km",
      "Tracción 4WD",
      "Capacidad de carga 1 ton",
      "Pantalla táctil 12.3\"",
      "Carga rápida DC",
    ],
    description:
      "Primera pickup eléctrica del mercado boliviano. Practicidad de una pickup con cero emisiones y torque instantáneo.",
  },
  {
    id: "yadea-g5",
    brand: "Yadea",
    model: "G5",
    category: "Movilidad Eléctrica",
    image: "/modelos/yadea-g5.jpg",
    specs: {
      motor: "Motor Hub 3000W",
      potencia: "4 HP equivalente",
      transmision: "Directa",
      combustible: "Eléctrico",
      pasajeros: 2,
    },
    features: [
      "Batería extraíble de litio",
      "Autonomía hasta 80 km",
      "Pantalla LCD inteligente",
      "Conectividad App Yadea",
      "Frenado regenerativo",
      "Iluminación LED completa",
    ],
    description:
      "Scooter eléctrico premium para movilidad urbana. Silencioso, económico y ecológico.",
  },
];

export const categories = ["Todos", "SUV", "Pickup", "Utilitario", "Eléctrico", "Movilidad Eléctrica"];
export const brands = ["Todas", "Toyota", "Jetour", "BYD", "Maxus", "Soueast", "Yadea"];
