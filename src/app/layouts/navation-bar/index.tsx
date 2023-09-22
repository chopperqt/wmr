"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cx } from "@/app/utils/cx";

import { NavigationItems } from "./constants";

import styles from "./NavigationBar.module.scss";

export const NavigationBar = () => {
  const patchname = usePathname();

  return (
    <header className={styles.layout}>
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
    </header>
  );
};
