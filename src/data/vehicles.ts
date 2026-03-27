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
  // ═══════════════════ TOYOTA ═══════════════════
  {
    id: "toyota-hilux",
    brand: "Toyota",
    model: "Hilux",
    category: "Pickup",
    image: "/modelos/toyota-hilux-mt.webp",
    specs: {
      motor: "2.8L Turbo Diesel",
      potencia: "204 HP",
      transmision: "6MT / 6AT",
      combustible: "Diesel",
      pasajeros: 5,
    },
    features: [
      "Toyota Safety Sense",
      "Tracción 4x4",
      "Control de descenso",
      "Diferencial trasero bloqueante",
      "Capacidad de carga 1 ton",
      "Apple CarPlay / Android Auto",
    ],
    description:
      "La pickup más vendida del mundo. Sinónimo de durabilidad y confiabilidad para el trabajo y la aventura.",
  },
  {
    id: "toyota-yaris-cross",
    brand: "Toyota",
    model: "Yaris Cross",
    category: "SUV",
    image: "/modelos/toyota-yaris-cross.webp",
    specs: {
      motor: "1.5L Híbrido",
      potencia: "116 HP",
      transmision: "CVT",
      combustible: "Híbrido",
      pasajeros: 5,
    },
    features: [
      "Sistema híbrido auto-recargable",
      "Toyota Safety Sense 3.0",
      "Pantalla multimedia 9\"",
      "Cámara panorámica",
      "Consumo 3.8L/100km",
      "Modo EV eléctrico puro",
    ],
    description:
      "SUV compacto con tecnología híbrida. Eficiencia excepcional para la ciudad con capacidad todoterreno.",
  },
  {
    id: "toyota-serie70",
    brand: "Toyota",
    model: "Serie 70",
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
    id: "toyota-4runner",
    brand: "Toyota",
    model: "4Runner",
    category: "SUV",
    image: "/modelos/toyota-4runner.webp",
    specs: {
      motor: "2.4L Turbo i-FORCE",
      potencia: "278 HP",
      transmision: "8AT",
      combustible: "Gasolina",
      pasajeros: 7,
    },
    features: [
      "Tracción 4WD con reductora",
      "Multi-Terrain Select",
      "Suspensión con estabilización dinámica",
      "Toyota Safety Sense 3.0",
      "Pantalla multimedia 14\"",
      "Crawl Control",
    ],
    description:
      "SUV todoterreno con capacidades off-road superiores y espacio familiar para 7 pasajeros.",
  },
  {
    id: "toyota-land-cruiser-prado",
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
    id: "toyota-raize",
    brand: "Toyota",
    model: "Raize",
    category: "SUV",
    image: "/modelos/toyota-raize.webp",
    specs: {
      motor: "1.0L Turbo",
      potencia: "98 HP",
      transmision: "CVT",
      combustible: "Gasolina",
      pasajeros: 5,
    },
    features: [
      "Diseño compacto urbano",
      "Pantalla táctil 9\"",
      "Smart Assist ADAS",
      "Cámara de reversa",
      "Control de estabilidad VSC",
      "Conectividad smartphone",
    ],
    description:
      "SUV subcompacto ideal para la ciudad. Ágil, eficiente y con equipamiento tecnológico completo.",
  },
  {
    id: "toyota-rush",
    brand: "Toyota",
    model: "Rush",
    category: "SUV",
    image: "/modelos/toyota-rush.webp",
    specs: {
      motor: "1.5L Dual VVT-i",
      potencia: "105 HP",
      transmision: "4AT",
      combustible: "Gasolina",
      pasajeros: 7,
    },
    features: [
      "7 plazas versátiles",
      "Tracción trasera o 4WD",
      "Pantalla multimedia 7\"",
      "6 airbags de seguridad",
      "Control de estabilidad",
      "Asientos abatibles 60/40",
    ],
    description:
      "SUV familiar de 7 plazas con precio accesible. Versatilidad y confiabilidad Toyota en formato compacto.",
  },
  {
    id: "toyota-coaster",
    brand: "Toyota",
    model: "Coaster",
    category: "Utilitario",
    image: "/modelos/toyota-coaster.webp",
    specs: {
      motor: "4.0L Diesel",
      potencia: "177 HP",
      transmision: "6MT",
      combustible: "Diesel",
      pasajeros: 23,
    },
    features: [
      "Capacidad 23 pasajeros",
      "Aire acondicionado de doble zona",
      "Asientos reclinables individuales",
      "Motor Diesel de alto rendimiento",
      "Chasis resistente reforzado",
      "Puerta de acceso amplia",
    ],
    description:
      "Minibus de transporte de pasajeros con la confiabilidad Toyota. Ideal para transporte corporativo y turístico.",
  },
  {
    id: "toyota-corolla-cross",
    brand: "Toyota",
    model: "Corolla Cross",
    category: "SUV",
    image: "/modelos/toyota-corolla-cross.webp",
    specs: {
      motor: "1.8L Híbrido",
      potencia: "122 HP",
      transmision: "CVT",
      combustible: "Híbrido",
      pasajeros: 5,
    },
    features: [
      "Sistema híbrido auto-recargable",
      "Toyota Safety Sense 2.0",
      "Pantalla multimedia 9\"",
      "Cámara de reversa",
      "Apple CarPlay / Android Auto",
      "Consumo 4.3L/100km",
    ],
    description:
      "El crossover más vendido con tecnología híbrida. Combina eficiencia, confort y la confiabilidad Corolla.",
  },
  {
    id: "toyota-rav4",
    brand: "Toyota",
    model: "RAV4",
    category: "SUV",
    image: "/modelos/toyota-rav4.webp",
    specs: {
      motor: "2.5L Hybrid",
      potencia: "222 HP",
      transmision: "CVT",
      combustible: "Híbrido",
      pasajeros: 5,
    },
    features: [
      "Tracción AWD inteligente",
      "Toyota Safety Sense 2.0",
      "Pantalla táctil 10.5\"",
      "JBL Premium Audio 11 parlantes",
      "Cámara 360°",
      "Modo Trail Off-Road",
    ],
    description:
      "El SUV pionero, ahora con tecnología híbrida avanzada. Potencia y eficiencia en un diseño imponente.",
  },
  {
    id: "toyota-hiace",
    brand: "Toyota",
    model: "Hiace",
    category: "Utilitario",
    image: "/modelos/toyota-hiace.webp",
    specs: {
      motor: "2.8L Turbo Diesel",
      potencia: "177 HP",
      transmision: "6AT",
      combustible: "Diesel",
      pasajeros: 15,
    },
    features: [
      "Capacidad hasta 15 pasajeros",
      "Motor Turbo Diesel eficiente",
      "Aire acondicionado dual",
      "Puerta corredera lateral",
      "Toyota Safety Sense",
      "Carga útil hasta 1,275 kg",
    ],
    description:
      "Van de pasajeros y carga con confiabilidad legendaria. La elección profesional para transporte comercial.",
  },

  // ═══════════════════ JETOUR ═══════════════════
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
      "SUV familiar de 7 plazas que combina espacio, tecnología y precio competitivo. Ideal para familias.",
  },
  {
    id: "jetour-x50",
    brand: "Jetour",
    model: "X50",
    category: "SUV",
    image: "/modelos/jetour-x50.webp",
    specs: {
      motor: "1.5L Turbo",
      potencia: "156 HP",
      transmision: "6DCT",
      combustible: "Gasolina",
      pasajeros: 5,
    },
    features: [
      "Doble pantalla 10.25\"",
      "Apple CarPlay / Android Auto inalámbrico",
      "Techo panorámico",
      "4 airbags + ESC",
      "Frenos de disco traseros",
      "Parking con cámara de reversa",
    ],
    description:
      "SUV compacto con tecnología premium. Motor turbo potente en un formato ágil y moderno.",
  },
  {
    id: "jetour-dashing",
    brand: "Jetour",
    model: "Dashing",
    category: "SUV",
    image: "/modelos/jetour-dashing.webp",
    specs: {
      motor: "1.5L Turbo",
      potencia: "156 HP",
      transmision: "6DCT",
      combustible: "Gasolina",
      pasajeros: 5,
    },
    features: [
      "Pantalla central 12.8\"",
      "Cámara panorámica 540°",
      "Asistencia de conducción Nivel 2+",
      "Techo panorámico apertura",
      "Audio Sony Hi-Fi 8 parlantes",
      "Monitoreo punto ciego",
    ],
    description:
      "SUV deportivo con equipamiento de gama alta. Diseño aerodinámico y tecnología de asistencia avanzada.",
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

  // ═══════════════════ MAXUS ═══════════════════
  {
    id: "maxus-v90",
    brand: "Maxus",
    model: "V90",
    category: "Utilitario",
    image: "/modelos/maxus-v90.webp",
    specs: {
      motor: "2.0L Turbo Diesel",
      potencia: "148 HP",
      transmision: "6MT",
      combustible: "Diesel",
      pasajeros: 15,
    },
    features: [
      "Capacidad 15 pasajeros",
      "Pantalla 10.1\" HD táctil",
      "Aire acondicionado frontal y trasero",
      "Frenos de disco en las 4 ruedas",
      "Estribo eléctrico retráctil",
      "Control de estabilidad ESP",
    ],
    description:
      "Minibus de pasajeros con confort y equipamiento moderno. Ideal para transporte corporativo y turístico.",
  },
  {
    id: "maxus-d90",
    brand: "Maxus",
    model: "D90",
    category: "SUV",
    image: "/modelos/maxus-d90.webp",
    specs: {
      motor: "2.0L Bi-Turbo Diesel",
      potencia: "218 HP",
      transmision: "ZF 8AT",
      combustible: "Diesel",
      pasajeros: 7,
    },
    features: [
      "Doble pantalla 12.3\"",
      "4WD con reductora + bloqueos de diferencial",
      "Cámara 360° + frenado de emergencia",
      "Techo panorámico + iluminación 64 colores",
      "Suspensión independiente multilink",
      "Carga inalámbrica dual",
    ],
    description:
      "SUV full-size de 7 plazas con capacidad off-road real. Potencia, lujo y tecnología en un solo vehículo.",
  },

  // ═══════════════════ BYD ═══════════════════
  {
    id: "byd-song-pro",
    brand: "BYD",
    model: "Song Pro",
    category: "SUV",
    image: "/modelos/byd-song-pro.webp",
    specs: {
      motor: "1.5L + Motor Eléctrico",
      potencia: "232 HP combinados",
      transmision: "E-CVT",
      combustible: "Híbrido Plug-in",
      pasajeros: 5,
    },
    features: [
      "Batería Blade LFP 18.3 kWh",
      "Autonomía eléctrica 71 km",
      "Pantalla giratoria 12.8\"",
      "Asistente de voz \"Hi BYD\"",
      "Llave digital NFC smartphone",
      "V2L carga dispositivos externos",
    ],
    description:
      "SUV híbrido enchufable con tecnología Blade Battery. Autonomía combinada superior a 1,000 km.",
  },
];

export const categories = ["Todos", "SUV", "Pickup", "Utilitario"];
export const brands = ["Todas", "Toyota", "Jetour", "BYD", "Maxus"];
