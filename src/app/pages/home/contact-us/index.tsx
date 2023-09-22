"use client";

import { useForm } from "react-hook-form";

import { cx } from "@/app/utils/cx";
import { CustomButton } from "@/app/components";
import { TextField } from "@/app/common/text-field";
import { TextareaField } from "@/app/common/textarea-field";

import { ContactFormField, ContactFormNames } from "./constants";
import { ContactFormData } from "./types";

import styles from "./ContactUs.module.scss";

const TITLE_TEXT = "Свяжитесь с нами";
const ERROR_TEXT = "Пожалуйста, исправьте ошибки перед отправкой формы";

export const ContactUs = () => {
  const {
    control,
    handleSubmit: onSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    mode: "onChange",
  });

  const handleSubmit = onSubmit((data) => {
    console.log(data);
  });

  console.log("errors: ", errors);

  return (
    <section className={styles.layout}>
      <div className={cx(styles.wrapper, "container")}>
        <h3 className="text-thin">{TITLE_TEXT}</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            control={control}
            {...ContactFormField[ContactFormNames.Name]}
          />
          <TextField
            control={control}
            {...ContactFormField[ContactFormNames.Email]}
          />
          <TextField
            control={control}
            {...ContactFormField[ContactFormNames.Phone]}
          />
          <TextareaField
            control={control}
            {...ContactFormField[ContactFormNames.Message]}
          />
          <CustomButton type="submit" text="Отправить" onClick={handleSubmit} />
          {!!Object.keys(errors).length && (
            <div className={styles.error}>{ERROR_TEXT}</div>
          )}
        </form>
      </div>
    </section>
  );
};
