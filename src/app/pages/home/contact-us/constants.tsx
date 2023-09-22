import { getRequiredRule } from "@/app/utils/form-rules";

export const ContactFormNames = {
  Name: "name",
  Email: "email",
  Phone: "phone",
  Message: "message",
};

export const ContactFormField = {
  [ContactFormNames.Name]: {
    label: "Имя",
    name: ContactFormNames.Name,
    rules: {
      required: getRequiredRule(),
    },
    full: true,
  },
  [ContactFormNames.Email]: {
    label: "Email",
    name: ContactFormNames.Email,
    rules: {
      required: getRequiredRule(),
    },
    full: true,
  },
  [ContactFormNames.Phone]: {
    label: "Телефон",
    name: ContactFormNames.Phone,
    rules: {
      required: getRequiredRule(),
    },
    full: true,
  },
  [ContactFormNames.Message]: {
    label: "Сообщениe",
    name: ContactFormNames.Message,
    rules: {
      required: getRequiredRule(),
    },
    full: true,
  },
};
