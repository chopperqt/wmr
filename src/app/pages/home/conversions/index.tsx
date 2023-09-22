"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { cx } from "@/app/utils/cx";

import { AnimateKey, AnimeteCollapse, ConversionsList } from "./constants";
import { CollapseButton } from "./partials/collapse-button";

import styles from "./Conversions.module.scss";

const CREATE_TEXT = "Как создаются сайты с высокой конверсией";

export const Convenrtions = () => {
  const [open, setOpen] = useState(-1);

  const handleClickOpen = (index: number) => {
    if (index === open) {
      setOpen(-1);

      return;
    }

    setOpen(index);
  };

  return (
    <section className={styles.layout}>
      <div className={cx("container", "text-thin", "text-center")}>
        <h3>{CREATE_TEXT}</h3>
        <div className={styles.wrapper}>
          <ul className={styles.conversions}>
            {ConversionsList.map(({ title, description }, index) => {
              const key = open === index ? AnimateKey.Open : AnimateKey.Close;

              return (
                <motion.li
                  key={index}
                  className={styles.item}
                  onClick={() => handleClickOpen(index)}
                >
                  <div className={styles.itemHead}>
                    <div className="text-base">{title}</div>
                    <CollapseButton isOpened={open === index} />
                  </div>
                  <motion.div
                    className={styles.description}
                    transition={{ duration: 0.5 }}
                    animate={AnimeteCollapse[key]}
                    initial={AnimeteCollapse[AnimateKey.Close]}
                  >
                    {description}
                  </motion.div>
                </motion.li>
              );
            })}
          </ul>
          <Image
            src="/conversion.webp"
            alt="Conversions"
            width={803}
            height={602}
          />
        </div>
      </div>
    </section>
  );
};
