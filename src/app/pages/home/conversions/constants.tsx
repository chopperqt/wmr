export const ConversionsList = [
  {
    title: "Анализ спроса",
    description:
      "Это наиболее важный и первостепенный вопрос, который необходимо решить маркетологам при стартапе любого бизнеса. Клиент может быть уверен, что его идея гениальна и будет на 100% иметь успех. Однако идеальный сайт и грамотное продвижение не дадут никакого результата, если на товар или на услугу нет спроса (или очень низкий спрос).Если Клиент обращается к разрабам (разработчикам сайтов), и они приступают к работе не изучив потребительские возможности по данной нише, то такие инвестиции имеют максимальный показатель риска",
  },
  {
    title: "Анализ конкурентного шума",
    description:
      "Стратегический маркетинг учитывает не только спрос, но и активность конкурентов. Перспективная ниша с высоким уровнем  конкуренции требует больших финансовых вложений и сил для завоевания покупателя. Специалисты Semexperts в таких проектах достраивают идею Клиента уникальными торговыми предложениями, репозиционированием или созданием спроса.",
  },
  {
    title: "Сбор семантического ядра",
    description:
      "Первый этап SЕО включается на начальной стадии построения сайта, когда ещё не написан контент. Составляется семантическое ядро (100+ слов) для дальнейшей оптимизации сайта и выдачи ресурса в топ поисковиков. Написание текстовой составляющей сайта с включением высокочастотных, среднечастотных и низкочастотных ключей решает сразу комплекс задач при разработке и существенно оптимизирует процесс.",
  },
  {
    title: "Прототипирование",
    description:
      "Прототип ― это начальная схема сайта с четкой структурой и текстовым наполнением.  Нередко заказчики пренебрегают этапом создания прототипа и начинают вносить текстовые правки в дизайнерский макет, значительно усложняя работу по срокам и трудозатратам.  В макете прототипа, без фотографий и дизайна, гораздо проще оценить смысловую составляющую ресурса и вовремя внести все корректировки. Опытные заказчики, у которых за плечами не один ресурс, хорошо понимают, что прототип может быть гораздо важнее других этапов, поскольку во время его создания продумываются и устанавливаются все идейные и ключевые смыслы сайта.",
  },
  {
    title: "Дизайн сайта",
    description:
      "Художественное наполнение сайта происходит на этапе дизайна. Все современные дизайны адаптивны к мобильным устройствам и создаются по последним трендам IT-индустрии. Все больше в дизайнах востребованы: минимализм, максимальная простота восприятия, сдержанные тона и качественные фотографии (желательно аутентичные для компании заказчика). Если клиент не имеет четкого представления о дизайне, специалисты Semexperts изучают его вкусы и предпочтения, чтобы точно попасть в цель его ожиданий.",
  },
  {
    title: "Верстка сайта",
    description:
      "Верстка ― это перевод структуры макета в HTML-код. Если дизайн сайта можно редактировать много раз, то процесс верстки подразумевает разовую точную работу с адаптацией под различные устройства и браузеры. Поэтому для заказчика чрезвычайно важно подключаться к процессу создания ресурса на этапе прототипирования и дизайна, чтобы в дальнейшем не возникало вопросов к уже сверстанному сайту.",
  },
  {
    title: "Программирование",
    description:
      "Готовый сверстанный сайт устанавливается на так называемый движок ― CMS-систему (Joomla, Drupal, Bitrix и др.) Программисты выстраивают механику сайта: переключение кнопок, работу слайдеров и интерактива, настройку административной панели пользователя сайта. Движок выбирается индивидуально с учетом задач будущего сайта, для одного бизнеса подходит WordPress, для другого ― Bitrix и т.д.",
  },
  {
    title: "Тестирование",
    description:
      "Запуск сайта проходит параллельно с отладкой всех его механизмов: корректной работой виджетов, синхронизацией движка и 1С системой для интернет-магазинов, соблюдением авторских прав на использованные материалы для ресурса и т.д. С одной стороны, процесс отладки может инициироваться специалистами компании-разработчика, с другой стороны ―  проходить с помощью обратной связи от посетителей и покупателей.",
  },
  {
    title: "Продвижение",
    description:
      "Комплексные услуги продвижения сайта могут включать в себя настройку контекстной рекламы, внутреннюю и внешнюю оптимизацию (SEO), установку и настройку сервисов веб-аналитики, рекламу в соцсетях. Вид продвижения зависит от маркетинговой стратегии продаж, специфики ниши, возможностей бюджета и других факторов. При необходимости запускаем e-mail-маркетинг или рекламу Клиента на канале Youtube.",
  },
];

export const AnimateKey = {
  Open: "open",
  Close: "close",
};

export const AnimateHorizonal = {
  [AnimateKey.Close]: { transform: "rotate(0deg)" },
  [AnimateKey.Open]: { transform: "rotate(135deg)" },
};

export const AnimateVertical = {
  [AnimateKey.Close]: { transform: "rotate(0deg)" },
  [AnimateKey.Open]: { transform: "rotate(-40deg)" },
};

export const AnimeteCollapse = {
  [AnimateKey.Close]: { height: "0", marginBottom: "0" },
  [AnimateKey.Open]: { height: "100%", marginBottom: "20px" },
};
