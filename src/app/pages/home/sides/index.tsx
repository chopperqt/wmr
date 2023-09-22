import Image from "next/image";

import { cx } from "@/app/utils/cx";

import { SidesInfo } from "./constants";

import styles from "./Sides.module.scss";

const TITLE_TEXT = "Наши сильные стороны";
const DESCRIPTION_TEXT =
  "Сильные качества команды WinMarketing ― это аналитический способ мышления, склонность к\nпедантичности и ясности, высокие этические принципы ведения бизнеса.";
const SUBTITLE =
  "Стратегическое развитие компания видит в двух основных направлениях ― повышение профессионального уровня и создание железобетонной репутации в сфере интернет-маркетинга.";

export const Sides = () => {
  return (
    <section className={styles.layout}>
      <div className={cx("container", "text-thin", "text-center")}>
        <h3>{TITLE_TEXT}</h3>
        <h4 className={styles.description}>{DESCRIPTION_TEXT}</h4>
        <ul className={styles.sides}>
          <li>
            <h4>{SidesInfo["perspective"].title}</h4>
            <div>{SidesInfo["perspective"].description}</div>
          </li>
          <li>
            <Image
              src="/str1.webp"
              alt="Web Development"
              width={407}
              height={312}
            />
          </li>
          <li>
            <h4>{SidesInfo["approact"].title}</h4>
            <div>{SidesInfo["approact"].description}</div>
          </li>
          <li>
            <Image
              src="/str2.webp"
              alt="Web Development"
              width={407}
              height={312}
            />
          </li>
          <li>
            <h4>{SidesInfo["marketing"].title}</h4>
            <div>{SidesInfo["marketing"].description}</div>
          </li>
          <li>
            <Image
              src="/str3.webp"
              alt="Web Development"
              width={407}
              height={312}
            />
          </li>
          <li>
            <h4>{SidesInfo["internet"].title}</h4>
            <div>{SidesInfo["internet"].description}</div>
          </li>
          <li>
            <Image
              src="/str4.webp"
              alt="Web Development"
              width={407}
              height={312}
            />
          </li>
          <li>
            <h4>{SidesInfo["consulting"].title}</h4>
            <div>{SidesInfo["consulting"].description}</div>
          </li>
        </ul>
        <h5 className={styles.subtitle}>{SUBTITLE}</h5>
      </div>
    </section>
  );
};
