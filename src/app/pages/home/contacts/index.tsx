"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { cx } from "@/app/utils/cx";
import { CustomButton, CustomSelect } from "@/app/components";
import { TextField } from "@/app/common/text-field";

import {
  AdvetismentsList,
  DevelopmentList,
  ThemeSelectItem,
  CallFormNames,
  CallFormFields,
} from "./constants";

import styles from "./Contacts.module.scss";

const STRATEGY_TEXT =
  "Выигрышная стратегия — это набор действий и планов, которые приведут к достижению цели на 100% так быстро, как хотелось бы.";
const WORK_TEXT = "Рабочее время";
const WORK_TIME_TEXT = "Пон - Пят: 9:00 - 19:00 Выходные - не работаем";
const DEVELOP_TEXT = "Разработка сайтов";
const CALL_TEXT = "Запросить обратный звонок";
const BUTTON_TEXT = "Отправить";

export const Contacts = () => {
  const { control, handleSubmit: onSubmit } = useForm({
    mode: "onChange",
  });

  const handleSubmit = onSubmit((data) => {
    console.log(data);
  });

  return (
    <section className={styles.layout}>
      <div className={cx(styles.wrapper, "container")}>
        <div className={styles.about}>
          <Image
            className={styles.logo}
            src="/logo.webp"
            width={220}
            height={40}
            alt="Logo"
          />
          <div className="text-thin">{STRATEGY_TEXT}</div>
        </div>
        <div>
          <div>
            <h4>{WORK_TEXT}</h4>
            <h5>{WORK_TIME_TEXT}</h5>
          </div>
          <ul className={styles.navigation}>
            {AdvetismentsList.map(({ label, path }, index) => (
              <li key={index}>
                <Link className="text-lg" href={path}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{DEVELOP_TEXT}</h4>
          <ul className={styles.navigation}>
            {DevelopmentList.map(({ label, path }, index) => (
              <li key={index}>
                <Link className="text-lg" href={path}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>{CALL_TEXT}</h4>
          <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
              control={control}
              {...CallFormFields[CallFormNames.Name]}
            />
            <TextField
              control={control}
              {...CallFormFields[CallFormNames.Phone]}
            />
            <CustomSelect items={ThemeSelectItem} />
            <CustomButton
              text={BUTTON_TEXT}
              type="submit"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </section>
  );
};
