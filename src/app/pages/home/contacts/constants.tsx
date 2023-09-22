import { getRequiredRule } from "@/app/utils/form-rules";

export const AdvetismentsList = [
  {
    label: "Контекстная реклама",
    path: "/",
  },
  {
    label: "SEO продвижение сайта",
    path: "/",
  },
  {
    label: "Таргетированная реклама в соцсетях",
    path: "/",
  },
  {
    label: "Интернет маркетинг",
    path: "/",
  },
];

export const DevelopmentList = [
  {
    label: "Сайт-визитка",
    path: "/",
  },
  {
    label: "Landing Page",
    path: "/",
  },
  {
    label: "Корпоративный сайт",
    path: "/",
  },
  {
    label: "Интернет магазин",
    path: "/",
  },
  {
    label: "Проектирование сайтов",
    path: "/",
  },
];

export const ThemeSelectItem = [
  {
    label: "Маркетинг",
    value: "Finance & Restructuring",
  },
  {
    label: "Реклама",
    value: "Strategy & Planning",
  },
  {
    label: "Цель",
    value: "Audit & Evaluation",
  },
  {
    label: "Вебсайт",
    value: "Taxes & Efficiency",
  },
  {
    label: "Дизайн",
    value: "Estate Planning",
  },
  {
    label: "Индивидуальное решение",
    value: "Consumer Markets",
  },
];

export const CallFormNames = {
  Name: "name",
  Phone: "phone",
  Theme: "theme",
};

export const CallFormFields = {
  [CallFormNames.Name]: {
    name: CallFormNames.Name,
    placeholder: "Имя",
    rules: {
      required: getRequiredRule(),
    },
  },
  [CallFormNames.Phone]: {
    name: CallFormNames.Phone,
    placeholder: "Телефон",
    rules: {
      required: getRequiredRule(),
    },
  },
  [CallFormNames.Theme]: {
    name: CallFormNames.Theme,
    rules: {
      required: getRequiredRule(),
    },
  },
};
