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
}

export interface MenuCategory {
  slug: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

function aspect(width: number, height: number) {
  return width / height;
}

export function formatPrice(item: Pick<MenuItem, "price" | "priceFrom">) {
  return `${item.priceFrom ? "від " : ""}${item.price} ₴`;
}

export function categoryMinPrice(category: MenuCategory) {
  return Math.min(...category.items.map((item) => item.price));
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
      { title: "Old Fashioned", image: "/menu/cocktails/old-fashioned.webp", width: 1054, height: 1492, price: 220 },
      { title: "Boulevardier", image: "/menu/cocktails/boulevardier.webp", width: 1054, height: 1492, price: 210 },
      { title: "Negroni", image: "/menu/cocktails/negroni.webp", width: 1086, height: 1448, price: 200 },
      { title: "Manhattan", image: "/menu/cocktails/manhattan.webp", width: 1054, height: 1492, price: 210 },
      { title: "Godfather", image: "/menu/cocktails/godfather.webp", width: 1054, height: 1492, price: 190 },
      { title: "Mint Julep", image: "/menu/cocktails/mint-julep.webp", width: 1054, height: 1492, price: 180 },
      { title: "Daiquiri", image: "/menu/cocktails/daiquiri.webp", width: 1054, height: 1492, price: 170 },
      { title: "Mojito", image: "/menu/cocktails/mojito.webp", width: 1054, height: 1492, price: 160 },
      { title: "Strawberry Mojito", image: "/menu/cocktails/strawberry-mojito.webp", width: 1054, height: 1492, price: 175 },
      { title: "Aperol Spritz", image: "/menu/cocktails/aperol-spritz.webp", width: 1054, height: 1492, price: 190 },
      { title: "Whisky-Cola", image: "/menu/cocktails/whisky-cola.webp", width: 1054, height: 1492, price: 150 },
      { title: "Espresso Martini", image: "/menu/cocktails/espresso-martini.webp", width: 1054, height: 1492, price: 200 },
      { title: "Tequila Sunrise", image: "/menu/cocktails/tequila-sunrise.webp", width: 1054, height: 1492, price: 170 },
      { title: "Blue Lagoon", image: "/menu/cocktails/blue-lagoon.webp", width: 1024, height: 1536, price: 165 },
      { title: "Gin-Tonik", image: "/menu/cocktails/gin-tonic.webp", width: 1054, height: 1492, price: 170 },
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
        price: 90,
        priceFrom: true,
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
        price: 70,
        priceFrom: true,
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
        price: 90,
        priceFrom: true,
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
        price: 60,
        priceFrom: true,
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
        price: 85,
        priceFrom: true,
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
        price: 110,
        priceFrom: true,
      },
    ],
  },
  {
    slug: "beer",
    title: "Пиво",
    subtitle: "Corona Extra · Leffe Brune · Leffe Blonde · Hoegaarden White",
    items: [
      {
        title: "Бункерний хміль",
        image: "/menu/beer/beer-selection.webp",
        width: 1024,
        height: 1536,
        price: 65,
        priceFrom: true,
      },
    ],
  },
  {
    slug: "snacks",
    title: "Закуски",
    subtitle: "До напоїв · 4 позиції",
    items: [
      { title: "Сирні палички", image: "/menu/snacks/cheese-sticks.webp", width: 1023, height: 1537, price: 140 },
      { title: "Картопляні діпи", image: "/menu/snacks/potato-dips.webp", width: 1122, height: 1402, price: 130 },
      { title: "Курячі нагетси", image: "/menu/snacks/chicken-nuggets.webp", width: 851, height: 1280, price: 150 },
      { title: "Картопля фрі", image: "/menu/snacks/fries.webp", width: 1024, height: 1536, price: 110 },
    ],
  },
  {
    slug: "burgers",
    title: "Бургери",
    subtitle: "Фірмова випічка та м'ясо · 3 позиції",
    items: [
      { title: "Бургер яловичий", image: "/menu/burgers/beef-burger.webp", width: 851, height: 1280, price: 220 },
      { title: "Бургер зі свининою", image: "/menu/burgers/pork-burger.webp", width: 1024, height: 1536, price: 200 },
      { title: "Бургер курячий", image: "/menu/burgers/chicken-burger.webp", width: 1023, height: 1537, price: 190 },
    ],
  },
];

export function categoryCoverAspect(category: MenuCategory) {
  const first = category.items[0];
  return aspect(first.width, first.height);
}

