import { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import { cx } from "@/app/utils/cx";

import styles from "./CustomTextarea.module.scss";

interface TextFieldProps {
  name: string;
  label?: string;
  error?: string;
  isRequired?: boolean;
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  full?: boolean;
}

export const CustomTextarea = ({
  label,
  isRequired,
  value,
  onChange,
  error,
  name,
  full = false,
}: TextFieldProps) => (
  <div className={cx(styles.layout, full && "full")}>
    {label && (
      <label
        htmlFor={name}
        className={cx(styles.label, "text-bold", "text-xs")}
      >
        {label}
        {isRequired && <span className={styles.required}>*</span>}
      </label>
    )}
    <textarea
      name={name}
      className={cx(styles.textarea, error && styles.textareaError)}
      value={value}
      onChange={onChange}
    />
    {error && (
      <div className={cx(styles.error, "text-xs")}>
        <FontAwesomeIcon className="text-xs" icon={faCircleInfo} />
        {error}
      </div>
    )}
  </div>
);
