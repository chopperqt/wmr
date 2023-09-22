"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { cx } from "@/app/utils/cx";
import { ScrollKey, useScroll } from "@/app/utils/use-scroll";

import { Animate, AnimateKey, NavigationItems } from "./constants";

import styles from "./NavigationBar.module.scss";

export const NavigationBar = () => {
  const patchname = usePathname();
  const [isSticky, setSticky] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const offset = useRef(145);

  const { scroll } = useScroll();

  const handleScroll = () => {
    if (window.scrollY > offset.current) {
      setSticky(true);

      if (scroll === ScrollKey.Bottom) {
        setVisible(false);
      }

      if (scroll === ScrollKey.Up) {
        setVisible(true);
      }

      offset.current = 65;

      return;
    }

    offset.current = 145;
    setSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll, offset]);

  const key = isSticky && isVisible ? AnimateKey.Open : AnimateKey.Close;

  return (
    <header className={cx(styles.layout)}>
      <motion.div
        className={cx(styles.content, isSticky && styles.sticky)}
        transition={{ duration: 0.3 }}
        animate={Animate[key]}
        initial={Animate[AnimateKey.Close]}
      >
        <div className={cx(styles.wrapper, "container")}>
          <a>
            <Image src="/logo.webp" width={200} alt="Logo" height={37} />
          </a>
          <ul className={styles.navigation}>
            {NavigationItems.map(({ title, link }, index) => {
              const isActive = patchname === link;

              return (
                <li key={index} className={cx(isActive && styles.active)}>
                  <Link className={cx(styles.link, "text-base")} href={link}>
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </header>
  );
};
