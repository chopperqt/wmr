import { cx } from "./utils/cx";

import { Convenrtions } from "./pages/home/conversions";
import { Sides } from "./pages/home/sides";
import { ContactUs } from "./pages/home/contact-us";
import { Subscribe } from "./pages/home/subscribe";
import { Contacts } from "./pages/home/contacts";

import { Footer } from "./pages/home/footer";

import styles from "./Home.module.scss";

const HOME_TEXT = "WinMarketing ―\nполный цикл создания\nи раскрутки сайта";
const DESCRIPTION_TEXT = "От идеи до полученной прибыли";

export default function Home() {
  return (
    <main>
      <div className={styles.layout}>
        <div>
          <h1 className={cx(styles.title, "text-bold", "text-3xl")}>
            {HOME_TEXT}
          </h1>
          <div className={cx(styles.description, "text-bold", "text-lg")}>
            {DESCRIPTION_TEXT}
          </div>
        </div>
      </div>
      <Convenrtions />
      <Sides />
      <ContactUs />
      <Subscribe />
      <Contacts />
      <Footer />
    </main>
  );
}
