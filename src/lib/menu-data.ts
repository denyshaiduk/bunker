export interface MenuItem {
  /** Name shown under the artwork inside the lightbox */
  title: string;
  /** Path to the designer artboard (contains name, composition and price) */
  image: string;
  width: number;
  height: number;
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

// All artwork below is the real, final designer menu supplied by the bar
// (see /public/menu/<category>/*). Every card already contains the name,
// composition and price — the site only frames and displays it untouched.
export const menuCategories: MenuCategory[] = [
  {
    slug: "cocktails",
    title: "Коктейлі",
    subtitle: "Авторська барна карта · 15 позицій",
    items: [
      { title: "Old Fashioned", image: "/menu/cocktails/old-fashioned.png", width: 1054, height: 1492 },
      { title: "Boulevardier", image: "/menu/cocktails/boulevardier.png", width: 1054, height: 1492 },
      { title: "Negroni", image: "/menu/cocktails/negroni.png", width: 1086, height: 1448 },
      { title: "Manhattan", image: "/menu/cocktails/manhattan.png", width: 1054, height: 1492 },
      { title: "Godfather", image: "/menu/cocktails/godfather.png", width: 1054, height: 1492 },
      { title: "Mint Julep", image: "/menu/cocktails/mint-julep.png", width: 1054, height: 1492 },
      { title: "Daiquiri", image: "/menu/cocktails/daiquiri.png", width: 1054, height: 1492 },
      { title: "Mojito", image: "/menu/cocktails/mojito.png", width: 1054, height: 1492 },
      { title: "Strawberry Mojito", image: "/menu/cocktails/strawberry-mojito.png", width: 1054, height: 1492 },
      { title: "Aperol Spritz", image: "/menu/cocktails/aperol-spritz.png", width: 1054, height: 1492 },
      { title: "Whisky-Cola", image: "/menu/cocktails/whisky-cola.png", width: 1054, height: 1492 },
      { title: "Espresso Martini", image: "/menu/cocktails/espresso-martini.png", width: 1054, height: 1492 },
      { title: "Tequila Sunrise", image: "/menu/cocktails/tequila-sunrise.png", width: 1054, height: 1492 },
      { title: "Blue Lagoon", image: "/menu/cocktails/blue-lagoon.png", width: 1024, height: 1536 },
      { title: "Gin-Tonik", image: "/menu/cocktails/gin-tonic.png", width: 1054, height: 1492 },
    ],
  },
  {
    slug: "whiskey",
    title: "Віскі",
    subtitle: "Johnnie Walker Red Label · Jack Daniel's · Jack Daniel's Blackberry",
    items: [
      { title: "Бункерні запаси міцності — Віскі", image: "/menu/whiskey/whiskey-selection.png", width: 1122, height: 1402 },
    ],
  },
  {
    slug: "vodka-tequila",
    title: "Горілка · Текіла",
    subtitle: "Zubrówka · Finlandia · Absolut Mandrin · True Tequila Silver / Gold",
    items: [
      { title: "Горілка та текіла порційно", image: "/menu/vodka-tequila/vodka-tequila-selection.png", width: 1024, height: 1536 },
    ],
  },
  {
    slug: "gin",
    title: "Джин",
    subtitle: "Beefeater · Beefeater Blood Orange · Gordon's · Gordon's Tropical Passionfruit",
    items: [
      { title: "Джин порційно", image: "/menu/gin/gin-selection.png", width: 1024, height: 1536 },
    ],
  },
  {
    slug: "liqueurs",
    title: "Лікери",
    subtitle: "Jägermeister · Jägermeister Orange · Becherovka · Лікер вишневий",
    items: [
      { title: "Лікери порційно", image: "/menu/liqueurs/liqueurs-selection.png", width: 1023, height: 1537 },
    ],
  },
  {
    slug: "rum",
    title: "Ром",
    subtitle: "Bacardi Spiced · Bacardi Carta Blanca · Bacardi Carta Negra",
    items: [
      { title: "Ром порційно", image: "/menu/rum/rum-selection.png", width: 1024, height: 1536 },
    ],
  },
  {
    slug: "bourbon-brandy-chacha",
    title: "Бурбон · Бренді · Чача",
    subtitle: "Jim Beam · Fratelli XO · Iveria Walnut",
    items: [
      {
        title: "Бурбон, бренді та чача порційно",
        image: "/menu/bourbon-brandy-chacha/bourbon-brandy-chacha-selection.png",
        width: 1024,
        height: 1535,
      },
    ],
  },
  {
    slug: "beer",
    title: "Пиво",
    subtitle: "Corona Extra · Leffe Brune · Leffe Blonde · Hoegaarden White",
    items: [
      { title: "Бункерний хміль", image: "/menu/beer/beer-selection.png", width: 1024, height: 1536 },
    ],
  },
  {
    slug: "snacks",
    title: "Закуски",
    subtitle: "До напоїв · 4 позиції",
    items: [
      { title: "Сирні палички", image: "/menu/snacks/cheese-sticks.png", width: 1023, height: 1537 },
      { title: "Картопляні діпи", image: "/menu/snacks/potato-dips.png", width: 1122, height: 1402 },
      { title: "Курячі нагетси", image: "/menu/snacks/chicken-nuggets.jpg", width: 851, height: 1280 },
      { title: "Картопля фрі", image: "/menu/snacks/fries.png", width: 1024, height: 1536 },
    ],
  },
  {
    slug: "burgers",
    title: "Бургери",
    subtitle: "Фірмова випічка та м'ясо · 3 позиції",
    items: [
      { title: "Бургер яловичий", image: "/menu/burgers/beef-burger.jpg", width: 851, height: 1280 },
      { title: "Бургер зі свининою", image: "/menu/burgers/pork-burger.png", width: 1024, height: 1536 },
      { title: "Бургер курячий", image: "/menu/burgers/chicken-burger.png", width: 1023, height: 1537 },
    ],
  },
];

export function categoryCoverAspect(category: MenuCategory) {
  const first = category.items[0];
  return aspect(first.width, first.height);
}

