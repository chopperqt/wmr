"use client";

import { useForm } from "react-hook-form";

import { TextField } from "@/app/common/text-field";
import { cx } from "@/app/utils/cx";
import { CustomButton } from "@/app/components";

import { SubscribeFormFields, SubscribeFormNames } from "./constants";

import styles from "./Subscribe.module.scss";
import Image from "next/image";

const SUBSCRIBE_TEXT = "Будьте в курсе новых маркетинговых решений";

export const Subscribe = () => {
  const { control, handleSubmit: onSubmit } = useForm({
    mode: "onChange",
  });

  const handleSubmit = onSubmit((data) => {
    console.log(data);
  });

  return (
    <section className={styles.layout}>
      <div className={cx(styles.wrapper, "container")}>
        <div className={styles.subscribe}>
          <Image width={46} height={46} src="/book.png" alt="Book" />
          <div className="text-base text-thin">{SUBSCRIBE_TEXT}</div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <TextField
            control={control}
            {...SubscribeFormFields[SubscribeFormNames.email]}
          />
          <CustomButton type="submit" text="Подписаться" onClick={() => { }} />
        </form>
      </div>
    </section>
  );
};
