// Brands parsed from store sign
const BRANDS = [
  { id: "changan",   name: "Changan" },
  { id: "zeekr",     name: "Zeekr" },
  { id: "jac",       name: "JAC" },
  { id: "haval",     name: "Haval" },
  { id: "hongqi",    name: "Hongqi" },
  { id: "chery",     name: "Chery" },
  { id: "dongfeng",  name: "Dongfeng" },
  { id: "exeed",     name: "Exeed" },
  { id: "geely",     name: "Geely" },
  { id: "jetour",    name: "Jetour" },
  { id: "greatwall", name: "Great Wall" },
  { id: "jaecoo",    name: "Jaecoo" },
  { id: "tank",      name: "Tank" },
  { id: "liauto",    name: "Li Auto" },
  { id: "jetta",     name: "Jetta" },
  { id: "tenet",     name: "Tenet" },
  { id: "livan",     name: "Livan" }
];

// Categories
const CATEGORIES = [
  { id: "engine",      name: { ru: "Двигатель",           kk: "Қозғалтқыш",        en: "Engine" } },
  { id: "brakes",      name: { ru: "Тормозная система",   kk: "Тежегіш жүйе",      en: "Brakes" } },
  { id: "suspension",  name: { ru: "Подвеска",            kk: "Аспа",              en: "Suspension" } },
  { id: "body",        name: { ru: "Кузов",               kk: "Шанақ",             en: "Body" } },
  { id: "electrical",  name: { ru: "Электрика",           kk: "Электр",            en: "Electrical" } },
  { id: "filters",     name: { ru: "Фильтры",             kk: "Сүзгілер",          en: "Filters" } },
  { id: "transmission",name: { ru: "Трансмиссия",         kk: "Трансмиссия",       en: "Transmission" } },
  { id: "cooling",     name: { ru: "Система охлаждения",  kk: "Салқындату жүйесі", en: "Cooling" } },
  { id: "exhaust",     name: { ru: "Выхлопная система",   kk: "Шығатын жүйе",      en: "Exhaust" } },
  { id: "interior",    name: { ru: "Салон",               kk: "Салон",             en: "Interior" } }
];

// Product catalog
// price: number in KZT, or null for "цена по запросу"
const PRODUCTS = [
  // Chery
  { sku: "CHR-481H-1003011", brand: "chery", category: "engine",     name: { ru: "Прокладка ГБЦ Chery Tiggo 4 / 7 / 8", kk: "Chery Tiggo 4/7/8 ЦБГ төсемесі", en: "Cylinder head gasket Chery Tiggo 4 / 7 / 8" }, price: 18500, badge: "OEM" },
  { sku: "CHR-J42-1109110", brand: "chery", category: "filters",    name: { ru: "Фильтр воздушный Chery Tiggo 7 Pro", kk: "Chery Tiggo 7 Pro ауа сүзгісі", en: "Air filter Chery Tiggo 7 Pro" }, price: 4500 },
  { sku: "CHR-T11-3501080", brand: "chery", category: "brakes",     name: { ru: "Колодки тормозные передние Chery Tiggo 8", kk: "Chery Tiggo 8 алдыңғы тежегіш колодкалары", en: "Front brake pads Chery Tiggo 8" }, price: 14900 },
  { sku: "CHR-A11-2904060", brand: "chery", category: "suspension", name: { ru: "Стойка стабилизатора Chery Arrizo 5", kk: "Chery Arrizo 5 тұрақтандырғыш тірегі", en: "Stabilizer link Chery Arrizo 5" }, price: 5200 },
  { sku: "CHR-A21-8202010", brand: "chery", category: "body",       name: { ru: "Зеркало боковое левое Chery Tiggo 4", kk: "Chery Tiggo 4 сол жақ айна", en: "Left side mirror Chery Tiggo 4" }, price: 28000 },

  // Haval
  { sku: "HAV-1109100XKZ16A", brand: "haval", category: "filters",    name: { ru: "Фильтр воздушный Haval Jolion", kk: "Haval Jolion ауа сүзгісі", en: "Air filter Haval Jolion" }, price: 5200 },
  { sku: "HAV-3501100XKZ01A", brand: "haval", category: "brakes",     name: { ru: "Тормозные колодки передние Haval F7", kk: "Haval F7 алдыңғы тежегіш колодкалары", en: "Front brake pads Haval F7" }, price: 17500, badge: "OEM" },
  { sku: "HAV-2906100XKZ01A", brand: "haval", category: "suspension", name: { ru: "Амортизатор передний Haval H6", kk: "Haval H6 алдыңғы амортизаторы", en: "Front shock absorber Haval H6" }, price: 32000 },
  { sku: "HAV-1012100XKZ16A", brand: "haval", category: "engine",     name: { ru: "Масляный фильтр Haval Jolion / F7", kk: "Haval Jolion/F7 май сүзгісі", en: "Oil filter Haval Jolion / F7" }, price: 2800 },
  { sku: "HAV-3724100XKZ01A", brand: "haval", category: "electrical", name: { ru: "Аккумулятор 70Ah для Haval H6", kk: "Haval H6 үшін 70Ah аккумулятор", en: "70Ah battery for Haval H6" }, price: 48000 },
  { sku: "HAV-8202100XKZ16A", brand: "haval", category: "body",       name: { ru: "Решётка радиатора Haval Jolion", kk: "Haval Jolion радиатор торы", en: "Radiator grille Haval Jolion" }, price: 39500 },

  // Geely
  { sku: "GLY-1016050180", brand: "geely", category: "engine",     name: { ru: "Свечи зажигания Geely Coolray (комплект)", kk: "Geely Coolray от шамдары (жинақ)", en: "Spark plugs Geely Coolray (set)" }, price: 9800 },
  { sku: "GLY-1064001624", brand: "geely", category: "filters",    name: { ru: "Фильтр салонный Geely Coolray / Atlas", kk: "Geely Coolray/Atlas салон сүзгісі", en: "Cabin filter Geely Coolray / Atlas" }, price: 3500 },
  { sku: "GLY-1064001625", brand: "geely", category: "brakes",     name: { ru: "Колодки тормозные передние Geely Atlas Pro", kk: "Geely Atlas Pro алдыңғы тежегіш колодкалары", en: "Front brake pads Geely Atlas Pro" }, price: 15600 },
  { sku: "GLY-2904080300", brand: "geely", category: "suspension", name: { ru: "Рычаг передний нижний Geely Emgrand", kk: "Geely Emgrand алдыңғы төменгі тіреуіш", en: "Front lower arm Geely Emgrand" }, price: 22000 },
  { sku: "GLY-8401050300", brand: "geely", category: "body",       name: { ru: "Капот Geely Coolray", kk: "Geely Coolray қалпақ", en: "Hood Geely Coolray" }, price: null },

  // Changan
  { sku: "CHN-S111802100", brand: "changan", category: "filters",    name: { ru: "Фильтр воздушный Changan CS35 Plus", kk: "Changan CS35 Plus ауа сүзгісі", en: "Air filter Changan CS35 Plus" }, price: 4200 },
  { sku: "CHN-S111802200", brand: "changan", category: "brakes",     name: { ru: "Диски тормозные передние Changan CS75", kk: "Changan CS75 алдыңғы тежегіш дискілері", en: "Front brake discs Changan CS75" }, price: 26500 },
  { sku: "CHN-S111802300", brand: "changan", category: "suspension", name: { ru: "Опора амортизатора Changan Eado", kk: "Changan Eado амортизатор тірегі", en: "Shock mount Changan Eado" }, price: 7800 },
  { sku: "CHN-S111802400", brand: "changan", category: "cooling",    name: { ru: "Радиатор охлаждения Changan CS35 Plus", kk: "Changan CS35 Plus салқындату радиаторы", en: "Cooling radiator Changan CS35 Plus" }, price: 54000 },
  { sku: "CHN-S111802500", brand: "changan", category: "electrical", name: { ru: "Фара передняя левая Changan CS55", kk: "Changan CS55 алдыңғы сол шам", en: "Front left headlight Changan CS55" }, price: 78000, badge: "OEM" },

  // JAC
  { sku: "JAC-1109000U150", brand: "jac", category: "filters",    name: { ru: "Воздушный фильтр JAC S3 / S5", kk: "JAC S3/S5 ауа сүзгісі", en: "Air filter JAC S3 / S5" }, price: 3800 },
  { sku: "JAC-3501100U150", brand: "jac", category: "brakes",     name: { ru: "Колодки тормозные JAC J7", kk: "JAC J7 тежегіш колодкалары", en: "Brake pads JAC J7" }, price: 11500 },
  { sku: "JAC-2906100U150", brand: "jac", category: "suspension", name: { ru: "Амортизатор задний JAC S5", kk: "JAC S5 артқы амортизатор", en: "Rear shock absorber JAC S5" }, price: 24000 },

  // Exeed
  { sku: "EXD-J42-1109110", brand: "exeed", category: "filters", name: { ru: "Фильтр воздушный Exeed VX / TXL", kk: "Exeed VX/TXL ауа сүзгісі", en: "Air filter Exeed VX / TXL" }, price: 6800 },
  { sku: "EXD-3501100J42",  brand: "exeed", category: "brakes",  name: { ru: "Колодки тормозные передние Exeed TXL", kk: "Exeed TXL алдыңғы тежегіш колодкалары", en: "Front brake pads Exeed TXL" }, price: 22500, badge: "OEM" },
  { sku: "EXD-1109110-VX",  brand: "exeed", category: "engine",  name: { ru: "Свечи зажигания Exeed VX (комплект)", kk: "Exeed VX от шамдары (жинақ)", en: "Spark plugs Exeed VX (set)" }, price: 14200 },

  // Jetour
  { sku: "JTR-T19-1109110", brand: "jetour", category: "filters", name: { ru: "Воздушный фильтр Jetour X70", kk: "Jetour X70 ауа сүзгісі", en: "Air filter Jetour X70" }, price: 5500 },
  { sku: "JTR-T19-3501100", brand: "jetour", category: "brakes",  name: { ru: "Колодки тормозные Jetour Dashing", kk: "Jetour Dashing тежегіш колодкалары", en: "Brake pads Jetour Dashing" }, price: 18500 },

  // Great Wall
  { sku: "GW-1109101-K00",  brand: "greatwall", category: "filters",  name: { ru: "Фильтр воздушный Great Wall Hover H3", kk: "Great Wall Hover H3 ауа сүзгісі", en: "Air filter Great Wall Hover H3" }, price: 4200 },
  { sku: "GW-3501100-K00",  brand: "greatwall", category: "brakes",   name: { ru: "Колодки тормозные Great Wall Wingle 7", kk: "Great Wall Wingle 7 тежегіш колодкалары", en: "Brake pads Great Wall Wingle 7" }, price: 13800 },
  { sku: "GW-1012010-EG01", brand: "greatwall", category: "engine",   name: { ru: "Масляный фильтр Great Wall Poer", kk: "Great Wall Poer май сүзгісі", en: "Oil filter Great Wall Poer" }, price: 2400 },

  // Jaecoo
  { sku: "JCO-J42-1109110", brand: "jaecoo", category: "filters", name: { ru: "Фильтр воздушный Jaecoo J7", kk: "Jaecoo J7 ауа сүзгісі", en: "Air filter Jaecoo J7" }, price: 6500 },
  { sku: "JCO-3501100J42",  brand: "jaecoo", category: "brakes",  name: { ru: "Тормозные колодки Jaecoo J7", kk: "Jaecoo J7 тежегіш колодкалары", en: "Brake pads Jaecoo J7" }, price: 21500 },

  // Tank
  { sku: "TNK-1109100-T300", brand: "tank", category: "filters", name: { ru: "Воздушный фильтр Tank 300", kk: "Tank 300 ауа сүзгісі", en: "Air filter Tank 300" }, price: 8500 },
  { sku: "TNK-3501100-T500", brand: "tank", category: "brakes",  name: { ru: "Колодки тормозные передние Tank 500", kk: "Tank 500 алдыңғы тежегіш колодкалары", en: "Front brake pads Tank 500" }, price: 32000 },

  // Hongqi
  { sku: "HQI-1109100-H5",  brand: "hongqi", category: "filters",    name: { ru: "Фильтр воздушный Hongqi H5", kk: "Hongqi H5 ауа сүзгісі", en: "Air filter Hongqi H5" }, price: 7200 },
  { sku: "HQI-3501100-HS5", brand: "hongqi", category: "brakes",     name: { ru: "Колодки тормозные Hongqi HS5", kk: "Hongqi HS5 тежегіш колодкалары", en: "Brake pads Hongqi HS5" }, price: 24500 },

  // Dongfeng
  { sku: "DF-1109100-AX7", brand: "dongfeng", category: "filters", name: { ru: "Воздушный фильтр Dongfeng AX7", kk: "Dongfeng AX7 ауа сүзгісі", en: "Air filter Dongfeng AX7" }, price: 4800 },
  { sku: "DF-3501100-S30", brand: "dongfeng", category: "brakes",  name: { ru: "Колодки тормозные Dongfeng S30", kk: "Dongfeng S30 тежегіш колодкалары", en: "Brake pads Dongfeng S30" }, price: 11800 },

  // Zeekr
  { sku: "ZKR-1109100-001", brand: "zeekr", category: "filters",    name: { ru: "Салонный фильтр Zeekr 001", kk: "Zeekr 001 салон сүзгісі", en: "Cabin filter Zeekr 001" }, price: 8800 },
  { sku: "ZKR-3501100-001", brand: "zeekr", category: "brakes",     name: { ru: "Тормозные колодки Zeekr 001", kk: "Zeekr 001 тежегіш колодкалары", en: "Brake pads Zeekr 001" }, price: 42000, badge: "OEM" },

  // Li Auto
  { sku: "LIA-1109100-L9", brand: "liauto", category: "filters", name: { ru: "Воздушный фильтр Li Auto L9", kk: "Li Auto L9 ауа сүзгісі", en: "Air filter Li Auto L9" }, price: 9800 },
  { sku: "LIA-3501100-L7", brand: "liauto", category: "brakes",  name: { ru: "Тормозные колодки Li Auto L7", kk: "Li Auto L7 тежегіш колодкалары", en: "Brake pads Li Auto L7" }, price: 38500 },

  // Jetta
  { sku: "JET-1109100-VS5", brand: "jetta", category: "filters", name: { ru: "Воздушный фильтр Jetta VS5", kk: "Jetta VS5 ауа сүзгісі", en: "Air filter Jetta VS5" }, price: 4500 },
  { sku: "JET-3501100-VS7", brand: "jetta", category: "brakes",  name: { ru: "Колодки тормозные Jetta VS7", kk: "Jetta VS7 тежегіш колодкалары", en: "Brake pads Jetta VS7" }, price: 13500 },

  // Tenet
  { sku: "TNT-1109100-T7", brand: "tenet", category: "filters", name: { ru: "Воздушный фильтр Tenet T7", kk: "Tenet T7 ауа сүзгісі", en: "Air filter Tenet T7" }, price: 5800 },
  { sku: "TNT-3501100-T8", brand: "tenet", category: "brakes",  name: { ru: "Колодки тормозные Tenet T8", kk: "Tenet T8 тежегіш колодкалары", en: "Brake pads Tenet T8" }, price: 17500 },

  // Livan
  { sku: "LVN-1109100-X3", brand: "livan", category: "filters", name: { ru: "Воздушный фильтр Livan X3 Pro", kk: "Livan X3 Pro ауа сүзгісі", en: "Air filter Livan X3 Pro" }, price: 4900 },
  { sku: "LVN-3501100-X6", brand: "livan", category: "brakes",  name: { ru: "Тормозные колодки Livan X6 Pro", kk: "Livan X6 Pro тежегіш колодкалары", en: "Brake pads Livan X6 Pro" }, price: 14800 }
];
