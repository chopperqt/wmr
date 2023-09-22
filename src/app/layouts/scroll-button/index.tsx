"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ScrollButton.module.scss";
import { Animate, AnimateKey } from "./constants";

export const ScrollButton = () => {
  const [isVisible, setVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;

      if (scrollY > 100) {
        setVisible(true);

        return;
      }

      setVisible(false);
    });

    const scrollY = window.scrollY;

    if (scrollY > 100) {
      setVisible(true);

      return;
    }
  }, []);

  const key = isVisible ? AnimateKey.Show : AnimateKey.Hide;
  const animate = Animate[key];

  return (
    <motion.button
      onClick={handleScrollToTop}
      className={styles.button}
      animate={animate}
      transition={{ duration: 0.1 }}
    >
      <FontAwesomeIcon className="text-base" icon={faChevronUp} />
    </motion.button>
  );
};
