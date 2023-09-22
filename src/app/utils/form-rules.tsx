/**
 * Возвращает правило, которое валидирует максимальную длину строки
 * @param maxLength - Максимальное количество символов для ввода
 * @example rules: { maxLength: getMaxLengthRule(1000)}
 */
export const getMaxLengthRule = (maxLength: number) => {
  // return {
  //   value: maxLength,
  //   message: `Максимальная длина ${maxLength} ${plural(
  //     maxLength,
  //     'символ',
  //     'символа',
  //     'символов',
  //   )}.`,
  // };
};

/**
 * Возвращает правило, которое валидирует минимальную длину строки
 * @param maxLength - Минимальное количество символов для ввода
 * @example rules: { minLength: getMinLengthRule(20) }
 */
export const getMinLengthRule = (minLength: number) => {
  // return {
  //   value: minLength,
  //   message: `Минимальная длина ${minLength} ${plural(
  //     minLength,
  //     'символ',
  //     'символа',
  //     'символов',
  //   )}.`,
  // };
};

/**
 * Возвращает правило, которое делает поле обязательным
 * @param isRequired - Динимический параметр, которые отвечает за то, что поле является обязательным
 * @example rules: { required: getRequiredRule() }
 */
export const getRequiredRule = (isRequired = true) => {
  return {
    value: isRequired,
    message: "Это поле обязательное.",
  };
};

/**
 * Возвращает ошибку, если число, больше указанного.
 * @param max - Максимальное число
 * @example rules: { max: getMaxRule(20) }
 */
export const getMaxRule = (max: number) => {
  return {
    value: max,
    message: `Максимальное значение ${max}.`,
  };
};

/**
 * Возвращает ошибку, если число, меньше указанного.
 * @param max - Минимальное число
 * @example rules: { max: getMinRule(20) }
 */
export const getMinRule = (min: number) => {
  return {
    value: min,
    message: `Минимальное значение ${min}.`,
  };
};
