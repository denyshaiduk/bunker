export interface Pour {
  /** Brand / label as printed on the artboard */
  name: string;
  /** Serving size, e.g. "50 мл" */
  volume: string;
  /** Price in UAH for this exact pour */
  price: number;
}

export interface MenuItem {
  /** Name shown under the artwork inside the lightbox */
  title: string;
  /** Path to the designer artboard (contains name and composition) */
  image: string;
  width: number;
  height: number;
  /** Price in UAH */
  price: number;
  /** Set for selection boards where the price is a starting price */
  priceFrom?: boolean;
  /** Per-brand pours shown on a selection artboard, each with its own price */
  pours?: Pour[];
  /** This specific item isn't served yet — shown greyed out with a "coming soon" badge */
  comingSoon?: boolean;
}

export interface MenuCategory {
  slug: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
  /** Section not served yet — shown greyed out with a "coming soon" ribbon */
  comingSoon?: boolean;
}

function aspect(width: number, height: number) {
  return width / height;
}

export function formatPrice(item: Pick<MenuItem, "price" | "priceFrom">) {
  return `${item.priceFrom ? "від " : ""}${item.price} ₴`;
}

export function categoryMinPrice(category: MenuCategory) {
  const available = category.items.filter((item) => !item.comingSoon);
  const prices = (available.length > 0 ? available : category.items).map((item) => item.price);
  return Math.min(...prices);
}

// All artwork below is the real, final designer menu supplied by the bar
// (see /public/menu/<category>/*). Every card already contains the name and
// composition — prices are curated separately in this file.
export const menuCategories: MenuCategory[] = [
  {
    slug: "cocktails",
    title: "Коктейлі",
    subtitle: "Авторська барна карта · 15 позицій",
    items: [
      { title: "Old Fashioned", image: "/menu/cocktails/old-fashioned.webp", width: 1054, height: 1492, price: 240 },
      { title: "Boulevardier", image: "/menu/cocktails/boulevardier.webp", width: 1054, height: 1492, price: 250 },
      { title: "Negroni", image: "/menu/cocktails/negroni.webp", width: 1086, height: 1448, price: 250 },
      { title: "Manhattan", image: "/menu/cocktails/manhattan.webp", width: 1054, height: 1492, price: 240 },
      { title: "Godfather", image: "/menu/cocktails/godfather.webp", width: 1054, height: 1492, price: 240 },
      { title: "Mint Julep", image: "/menu/cocktails/mint-julep.webp", width: 1054, height: 1492, price: 220 },
      { title: "Daiquiri", image: "/menu/cocktails/daiquiri.webp", width: 1054, height: 1492, price: 220 },
      { title: "Mojito", image: "/menu/cocktails/mojito.webp", width: 1054, height: 1492, price: 220 },
      { title: "Strawberry Mojito", image: "/menu/cocktails/strawberry-mojito.webp", width: 1054, height: 1492, price: 240 },
      { title: "Aperol Spritz", image: "/menu/cocktails/aperol-spritz.webp", width: 1054, height: 1492, price: 250 },
      { title: "Whisky-Cola", image: "/menu/cocktails/whisky-cola.webp", width: 1054, height: 1492, price: 220 },
      { title: "Espresso Martini", image: "/menu/cocktails/espresso-martini.webp", width: 1054, height: 1492, price: 240 },
      { title: "Tequila Sunrise", image: "/menu/cocktails/tequila-sunrise.webp", width: 1054, height: 1492, price: 250 },
      { title: "Blue Lagoon", image: "/menu/cocktails/blue-lagoon.webp", width: 1024, height: 1536, price: 220 },
      { title: "Gin-Tonik", image: "/menu/cocktails/gin-tonic.webp", width: 1054, height: 1492, price: 220 },
    ],
  },
  {
    slug: "whiskey",
    title: "Віскі",
    subtitle: "Johnnie Walker Red Label · Jack Daniel's · Jack Daniel's Blackberry",
    items: [
      {
        title: "Бункерні запаси міцності — Віскі",
        image: "/menu/whiskey/whiskey-selection.webp",
        width: 1122,
        height: 1402,
        price: 130,
        priceFrom: true,
        pours: [
          { name: "Johnnie Walker Red Label", volume: "50 мл", price: 150 },
          { name: "White Horse", volume: "50 мл", price: 130 },
          { name: "Jack Daniel's", volume: "50 мл", price: 190 },
          { name: "Jack Daniel's Blackberry", volume: "50 мл", price: 210 },
        ],
      },
    ],
  },
  {
    slug: "vodka-tequila",
    title: "Горілка · Текіла",
    subtitle: "Zubrówka · Finlandia · Absolut Mandrin · True Tequila Silver / Gold",
    items: [
      {
        title: "Горілка та текіла порційно",
        image: "/menu/vodka-tequila/vodka-tequila-selection.webp",
        width: 1024,
        height: 1536,
        price: 110,
        priceFrom: true,
        pours: [
          { name: "Zubrówka", volume: "50 мл", price: 110 },
          { name: "Finlandia", volume: "50 мл", price: 120 },
          { name: "Absolut Mandrin", volume: "50 мл", price: 140 },
          { name: "True Tequila Silver", volume: "50 мл", price: 160 },
          { name: "True Tequila Gold", volume: "50 мл", price: 180 },
        ],
      },
    ],
  },
  {
    slug: "gin",
    title: "Джин",
    subtitle: "Beefeater · Beefeater Blood Orange · Gordon's · Gordon's Tropical Passionfruit",
    items: [
      {
        title: "Джин порційно",
        image: "/menu/gin/gin-selection.webp",
        width: 1024,
        height: 1536,
        price: 130,
        priceFrom: true,
        pours: [
          { name: "Beefeater Blood Orange", volume: "50 мл", price: 160 },
          { name: "Beefeater", volume: "50 мл", price: 150 },
          { name: "Gordon's", volume: "50 мл", price: 130 },
          { name: "Gordon's Tropical Passionfruit", volume: "50 мл", price: 140 },
        ],
      },
    ],
  },
  {
    slug: "liqueurs",
    title: "Лікери",
    subtitle: "Jägermeister · Jägermeister Orange · Becherovka · Лікер вишневий",
    items: [
      {
        title: "Лікери порційно",
        image: "/menu/liqueurs/liqueurs-selection.webp",
        width: 1023,
        height: 1537,
        price: 110,
        priceFrom: true,
        pours: [
          { name: "Jägermeister", volume: "50 мл", price: 120 },
          { name: "Jägermeister Orange", volume: "50 мл", price: 130 },
          { name: "Becherovka", volume: "50 мл", price: 110 },
          { name: "Лікер вишневий", volume: "100 мл", price: 130 },
        ],
      },
    ],
  },
  {
    slug: "rum",
    title: "Ром",
    subtitle: "Bacardi Spiced · Bacardi Carta Blanca · Bacardi Carta Negra",
    items: [
      {
        title: "Ром порційно",
        image: "/menu/rum/rum-selection.webp",
        width: 1024,
        height: 1536,
        price: 130,
        priceFrom: true,
        pours: [
          { name: "Bacardi Spiced", volume: "50 мл", price: 140 },
          { name: "Bacardi Carta Blanca", volume: "50 мл", price: 130 },
          { name: "Bacardi Carta Negra", volume: "50 мл", price: 140 },
        ],
      },
    ],
  },
  {
    slug: "bourbon-brandy-chacha",
    title: "Бурбон · Бренді · Чача",
    subtitle: "Jim Beam · Fratelli XO · Iveria Walnut",
    items: [
      {
        title: "Бурбон, бренді та чача порційно",
        image: "/menu/bourbon-brandy-chacha/bourbon-brandy-chacha-selection.webp",
        width: 1024,
        height: 1535,
        price: 150,
        priceFrom: true,
        pours: [
          { name: "Бурбон Jim Beam", volume: "50 мл", price: 170 },
          { name: "Бренді Fratelli XO", volume: "50 мл", price: 230 },
          { name: "Чача Iveria Walnut", volume: "50 мл", price: 150 },
        ],
      },
    ],
  },
  {
    slug: "beer",
    title: "Пиво",
    subtitle: "Corona Extra · Carlsberg · Leffe Brune · Leffe Blonde · Hoegaarden White",
    items: [
      {
        title: "Бункерний хміль",
        image: "/menu/beer/beer-selection.webp",
        width: 1024,
        height: 1536,
        price: 130,
        priceFrom: true,
        pours: [
          { name: "Corona Extra", volume: "0,33 л", price: 130 },
          { name: "Carlsberg", volume: "0,5 л", price: 140 },
          { name: "Leffe Brune", volume: "0,33 л", price: 150 },
          { name: "Leffe Blonde", volume: "0,33 л", price: 150 },
          { name: "Hoegaarden White", volume: "0,33 л", price: 130 },
        ],
      },
    ],
  },
  {
    slug: "coffee",
    title: "Кава",
    subtitle: "Американо · Еспресо",
    items: [
      { title: "Американо", image: "/menu/coffee/americano.svg", width: 1024, height: 1536, price: 80 },
      { title: "Еспресо", image: "/menu/coffee/espresso.svg", width: 1024, height: 1536, price: 70 },
      { title: "Капучино", image: "/menu/coffee/cappuccino.svg", width: 1024, height: 1536, price: 100, comingSoon: true },
      { title: "Латте", image: "/menu/coffee/latte.svg", width: 1024, height: 1536, price: 110, comingSoon: true },
      { title: "Раф", image: "/menu/coffee/raf.svg", width: 1024, height: 1536, price: 140, comingSoon: true },
    ],
  },
  {
    slug: "soft-drinks",
    title: "Безалкогольні напої",
    subtitle: "Кола 0,25 л / 0,3 л · Спрайт 0,3 л",
    items: [
      {
        title: "Кола",
        image: "/menu/soft-drinks/cola.svg",
        width: 1024,
        height: 1536,
        price: 60,
        priceFrom: true,
        pours: [
          { name: "Кола", volume: "0,25 л", price: 60 },
          { name: "Кола", volume: "0,3 л", price: 70 },
        ],
      },
      { title: "Спрайт", image: "/menu/soft-drinks/sprite.svg", width: 1024, height: 1536, price: 70 },
    ],
  },
  {
    slug: "snacks",
    title: "Закуски",
    subtitle: "До напоїв · 4 позиції",
    comingSoon: true,
    items: [
      { title: "Сирні палички", image: "/menu/snacks/cheese-sticks.webp", width: 1023, height: 1537, price: 220 },
      { title: "Картопляні діпи", image: "/menu/snacks/potato-dips.webp", width: 1122, height: 1402, price: 200 },
      { title: "Курячі нагетси", image: "/menu/snacks/chicken-nuggets.webp", width: 851, height: 1280, price: 230 },
      { title: "Картопля фрі", image: "/menu/snacks/fries.webp", width: 1024, height: 1536, price: 180 },
    ],
  },
  {
    slug: "burgers",
    title: "Бургери",
    subtitle: "Фірмова випічка та м'ясо · 3 позиції",
    comingSoon: true,
    items: [
      { title: "Бургер яловичий", image: "/menu/burgers/beef-burger.webp", width: 851, height: 1280, price: 340 },
      { title: "Бургер зі свининою", image: "/menu/burgers/pork-burger.webp", width: 1024, height: 1536, price: 310 },
      { title: "Бургер курячий", image: "/menu/burgers/chicken-burger.webp", width: 1023, height: 1537, price: 290 },
    ],
  },
];

export function categoryCoverAspect(category: MenuCategory) {
  const first = category.items[0];
  return aspect(first.width, first.height);
}

