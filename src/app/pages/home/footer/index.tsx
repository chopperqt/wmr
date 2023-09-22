import styles from "./Footer.module.scss";

const FOOTER_TEXT = "© 2023 WinMarketing Отдел маркетинга на аутсорсе";

export const Footer = () => {
  return (
    <footer className={styles.layout}>
      <div className="container text-base text-thin">{FOOTER_TEXT}</div>
    </footer>
  );
};
