import { getRequiredRule } from "@/app/utils/form-rules";

export const SubscribeFormNames = {
  email: "email",
};

export const SubscribeFormFields = {
  [SubscribeFormNames.email]: {
    name: SubscribeFormNames.email,
    placeholder: "Ваш e-mail",
    full: true,
    rules: {
      required: getRequiredRule(),
    },
  },
};
