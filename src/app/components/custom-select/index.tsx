import { cx } from "@/app/utils/cx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import styles from "./CustomSelect.module.scss";

export interface CustomSelectItem {
  value: string;
  label: string;
}

interface CustomSelectProps {
  items: CustomSelectItem[];
  name?: string;
  label?: string;
  isRequired?: boolean;
  error?: string;
}

export const CustomSelect = ({
  items,
  name,
  label,
  isRequired,
  error,
}: CustomSelectProps) => {
  return (
    <div className={styles.layout}>
      {label && (
        <label htmlFor={name} className={cx(styles.label, "text-bold")}>
          {label}
          {isRequired && <span className={styles.required}>*</span>}
        </label>
      )}
      <select className={styles.select}>
        {items.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && (
        <div className={cx(styles.error, "text-xs")}>
          <FontAwesomeIcon className="text-xs" icon={faCircleInfo} />
          {error}
        </div>
      )}
    </div>
  );
};
