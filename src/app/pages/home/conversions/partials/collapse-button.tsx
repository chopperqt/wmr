"use client";

import { motion } from "framer-motion";

import { AnimateHorizonal, AnimateKey, AnimateVertical } from "../constants";

import styles from "../Conversions.module.scss";

interface CollapseButtonProps {
  isOpened?: boolean;
}

export const CollapseButton = ({ isOpened = false }: CollapseButtonProps) => {
  const key = isOpened ? AnimateKey.Open : AnimateKey.Close;

  return (
    <button className={styles.collapseButton}>
      <motion.div
        className={styles.vertical}
        transition={{ duration: 0.5 }}
        animate={AnimateVertical[key]}
      ></motion.div>
      <motion.div
        className={styles.horizontal}
        transition={{ duration: 0.5 }}
        animate={AnimateHorizonal[key]}
      ></motion.div>
    </button>
  );
};
