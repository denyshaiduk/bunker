import Image from "next/image";
import { withBasePath } from "@/lib/base-path";

interface RecipeItem {
  name: string;
  price: number;
  glass?: string;
  recipe?: string;
  garnish?: string;
  thumb?: string;
  comingSoon?: boolean;
}

interface SimpleItem {
  name: string;
  price: number;
  comingSoon?: boolean;
}

const cocktails: RecipeItem[] = [
  { name: "Блакитна лагуна", price: 220, glass: "Стакан 280 мл", recipe: "Горілка 50 мл · Блю кюрасао 20 мл · Спрайт 150 мл", garnish: "Ананас, лід", thumb: "blue-lagoon" },
  { name: "Espresso Martini", price: 240, glass: "Мартінка · шейкер", recipe: "Горілка 50 мл · Кавовий лікер амаретто 30 мл · Цукровий сироп 10 мл · Еспресо 50 мл", garnish: "3 зернятка кави", thumb: "espresso-martini" },
  { name: "Tequila Sunrise", price: 250, glass: "Стакан 365 мл", recipe: "Текіла сільвер 50 мл · Апельсиновий сік 150 мл · Гранатовий сироп 15 мл", garnish: "Лід", thumb: "tequila-sunrise" },
  { name: "Whisky-Cola", price: 220, glass: "Стакан 220 мл", recipe: "Віскі 50 мл · Кола 100 мл", garnish: "Лід", thumb: "whisky-cola" },
  { name: "Mojito", price: 220, glass: "Стакан 365 мл", recipe: "Білий ром 50 мл · Тростинний сироп 10 мл · Спрайт 100 мл · Варення мохіто 10 мл", garnish: "Лайм, м'ята, лід", thumb: "mojito" },
  { name: "Strawberry Mojito", price: 240, glass: "Стакан 365 мл", recipe: "Білий ром 50 мл · Варення 15 мл · Sprite 100 мл", garnish: "Полуниця, м'ята, лайм, лід", thumb: "strawberry-mojito" },
  { name: "Gin-Tonik", price: 220, glass: "Стакан 200 мл", recipe: "Джин сухий 40 мл · Швепс Індіан тонік 60 мл", garnish: "Лайм, лід", thumb: "gin-tonic" },
  { name: "Negroni", price: 250, glass: "Стакан 200 мл", recipe: "Джин сухий 40 мл · Червоний вермут 40 мл · Червоний біттер 40 мл", garnish: "Шматочок апельсину, лід", thumb: "negroni" },
  { name: "Godfather", price: 240, glass: "Стакан 220 мл", recipe: "Ballantine's 50 мл · Лікер Амаретто 25 мл · Тростинний цукор 10 мл", garnish: "Лід, цедра апельсину", thumb: "godfather" },
  { name: "Manhattan", price: 240, glass: "Стакан 200 мл", recipe: "Jim Beam бурбон 50 мл · Червоний вермут 25 мл · Біттер 3 краплі", garnish: "Коктейльна вишня, лід", thumb: "manhattan" },
  { name: "Daiquiri", price: 220, glass: "Мартінка · шейкер", recipe: "Білий ром 60 мл · Тростинний сироп 15 мл · Лаймовий сік", garnish: "Кружечок лайму, лід", thumb: "daiquiri" },
  { name: "Aperol Spritz", price: 250, glass: "Бокал для вина", recipe: "Апероль 60 мл · Біле сухе вино 90 мл · Моршинська лимонад-персик 30 мл", garnish: "Скибка апельсину, лід", thumb: "aperol-spritz" },
  { name: "Mint Julep", price: 220, glass: "Стакан 200 мл", recipe: "Бурбон 60 мл · Цукровий сироп 10 мл", garnish: "Свіжа м'ята, лід", thumb: "mint-julep" },
  { name: "Boulevardier", price: 250, glass: "Стакан 280 мл", recipe: "Бурбон 60 мл · Вермут 30 мл · Біттер 30 мл", garnish: "Долька апельсину", thumb: "boulevardier" },
  { name: "Old Fashioned", price: 240, glass: "Стакан 200 мл", recipe: "Бурбон 50 мл · Біттер 3 краплі · Тростинний сироп 10 мл · Апельсиновий сік 15 мл", garnish: "Лід", thumb: "old-fashioned" },
];

const groups: { title: string; subtitle?: string; items: SimpleItem[] }[] = [
  {
    title: "Віскі",
    subtitle: "Порційно · 50 мл",
    items: [
      { name: "White Horse", price: 130 },
      { name: "Johnnie Walker Red Label", price: 150 },
      { name: "Jack Daniel's", price: 190 },
      { name: "Jack Daniel's Blackberry", price: 210 },
    ],
  },
  {
    title: "Горілка · Текіла",
    subtitle: "Порційно · 50 мл",
    items: [
      { name: "Zubrówka", price: 110 },
      { name: "Finlandia", price: 120 },
      { name: "Absolut Mandrin", price: 140 },
      { name: "True Tequila Silver", price: 160 },
      { name: "True Tequila Gold", price: 180 },
    ],
  },
  {
    title: "Джин",
    subtitle: "Порційно · 50 мл",
    items: [
      { name: "Gordon's", price: 130 },
      { name: "Gordon's Tropical Passionfruit", price: 140 },
      { name: "Beefeater", price: 150 },
      { name: "Beefeater Blood Orange", price: 160 },
    ],
  },
  {
    title: "Лікери",
    subtitle: "Порційно",
    items: [
      { name: "Becherovka · 50 мл", price: 110 },
      { name: "Jägermeister · 50 мл", price: 120 },
      { name: "Jägermeister Orange · 50 мл", price: 130 },
      { name: "Лікер вишневий · 100 мл", price: 130 },
    ],
  },
  {
    title: "Ром",
    subtitle: "Порційно · 50 мл",
    items: [
      { name: "Bacardi Carta Blanca", price: 130 },
      { name: "Bacardi Spiced", price: 140 },
      { name: "Bacardi Carta Negra", price: 140 },
    ],
  },
  {
    title: "Бурбон · Бренді · Чача",
    subtitle: "Порційно · 50 мл",
    items: [
      { name: "Бурбон Jim Beam", price: 170 },
      { name: "Чача Iveria Walnut", price: 150 },
      { name: "Бренді Fratelli XO", price: 230 },
    ],
  },
  {
    title: "Пиво",
    items: [
      { name: "Corona Extra · 0,33 л", price: 130 },
      { name: "Hoegaarden White · 0,33 л", price: 130 },
      { name: "Carlsberg · 0,5 л", price: 140 },
      { name: "Leffe Brune · 0,33 л", price: 150 },
      { name: "Leffe Blonde · 0,33 л", price: 150 },
    ],
  },
  {
    title: "Кава",
    items: [
      { name: "Еспресо", price: 70 },
      { name: "Американо", price: 80 },
      { name: "Капучино", price: 100, comingSoon: true },
      { name: "Латте", price: 110, comingSoon: true },
      { name: "Раф", price: 140, comingSoon: true },
    ],
  },
  {
    title: "Безалкогольні напої",
    items: [
      { name: "Моршинська (сл. газована / негазована) · 0,3 л", price: 50 },
      { name: "Кола · 0,25 л", price: 60 },
      { name: "Кола · 0,3 л", price: 70 },
      { name: "Спрайт · 0,3 л", price: 70 },
      { name: "Мохіто безалкогольне", price: 90 },
      { name: "Мохіто полуничне безалкогольне", price: 110 },
    ],
  },
  {
    title: "Закуски",
    subtitle: "До напоїв",
    items: [
      { name: "Сирні палички", price: 220, comingSoon: true },
      { name: "Картопляні діпи", price: 200, comingSoon: true },
      { name: "Курячі нагетси", price: 230, comingSoon: true },
      { name: "Картопля фрі", price: 180, comingSoon: true },
    ],
  },
  {
    title: "Бургери",
    subtitle: "Фірмова випічка та м'ясо",
    items: [
      { name: "Бургер яловичий", price: 340, comingSoon: true },
      { name: "Бургер зі свининою", price: 310, comingSoon: true },
      { name: "Бургер курячий", price: 290, comingSoon: true },
    ],
  },
];

function SoonBadge() {
  return (
    <span className="ml-2 rounded-full border border-bone/20 px-2 py-0.5 text-[9px] uppercase tracking-[0.15em] text-bone/40">
      Скоро
    </span>
  );
}

export function FullMenu() {
  return (
    <div className="mx-auto max-w-4xl font-body">
      <h3 className="font-serif-display text-gradient-bronze mb-1 text-2xl">Коктейлі</h3>
      <p className="mb-4 text-xs italic text-bone/45">Авторська барна карта · 15 позицій</p>
      <div className="mb-2 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
        {cocktails.map((item) => (
          <div key={item.name} className="flex items-start gap-3 border-b border-dotted border-bronze-light/15 py-2.5">
            {item.thumb && (
              <Image
                src={withBasePath(`/menu/cocktails/thumbs/${item.thumb}.webp`)}
                alt=""
                width={46}
                height={46}
                loading="lazy"
                unoptimized
                className="h-[46px] w-[46px] shrink-0 rounded-lg border border-bronze-light/30 bg-bunker-900 object-cover"
              />
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-3">
                <span className="text-bone">{item.name}</span>
                <span className="whitespace-nowrap font-semibold text-bronze-light">{item.price} ₴</span>
              </div>
              {item.glass && <div className="text-[11px] italic text-bronze-light/70">{item.glass}</div>}
              {item.recipe && <div className="mt-0.5 text-[13px] text-bone/70">{item.recipe}</div>}
              {item.garnish && <div className="mt-0.5 text-[11px] text-bone/40">{item.garnish}</div>}
            </div>
          </div>
        ))}
      </div>

      {groups.map((group) => (
        <div key={group.title}>
          <h3 className="font-serif-display text-gradient-bronze mb-1 mt-9 text-2xl border-t border-bronze-light/25 pt-6">
            {group.title}
          </h3>
          {group.subtitle && <p className="mb-2 text-xs italic text-bone/45">{group.subtitle}</p>}
          {group.items.map((item) => (
            <div
              key={item.name}
              className={`flex items-baseline justify-between gap-3 border-b border-dotted border-bronze-light/15 py-2 ${
                item.comingSoon ? "opacity-50" : ""
              }`}
            >
              <span className="text-bone">
                {item.name}
                {item.comingSoon && <SoonBadge />}
              </span>
              <span className="whitespace-nowrap font-semibold text-bronze-light">{item.price} ₴</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
