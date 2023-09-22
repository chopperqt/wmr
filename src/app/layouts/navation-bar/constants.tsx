export const NavigationItems = [
  {
    title: "Главная",
    link: "/",
  },
  {
    title: "Рзработка сайтово",
    link: "/dev-websites",
  },
  {
    title: "Интернет маркетинг",
    link: "/internet-marketing",
  },
  {
    title: "Веб-дизайн",
    link: "/web-design",
  },
  {
    title: "Цены",
    link: "/prices",
  },
  {
    title: "О нас",
    link: "/about",
  },
  {
    title: "Контакты",
    link: "/contacts",
  },
];

export const AnimateKey = {
  Open: "open",
  Close: "close",
};

export const Animate = {
  [AnimateKey.Open]: { top: 0 },
  [AnimateKey.Close]: { top: -80 },
};
