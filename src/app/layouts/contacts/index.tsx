import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import styles from "./Contacts.module.scss";

const TITLE_TEXT = "Европа | Маркетинговое агенство";
const PHONE = "tell:+49017610869424";
const PHONE_TEXT = "+49&nbsp;017610869424";
const EMAIL_LINK = "http://winmarketingpartner@gmail.com";
const EMAIL_TEXT = "winmarketingpartner@gmail.com";

export const Contacts = () => {
  return (
    <div className={styles.layout}>
      <div>{TITLE_TEXT}</div>
      <div className={styles.wrapper}>
        <a href={PHONE} className={styles.link}>
          <FontAwesomeIcon className={styles.icon} icon={faPhone} size="sm" />
          <span dangerouslySetInnerHTML={{ __html: PHONE_TEXT }} />
        </a>
        <a href={EMAIL_LINK} className={styles.link}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <span>{EMAIL_TEXT}</span>
        </a>
      </div>
    </div>
  );
};
