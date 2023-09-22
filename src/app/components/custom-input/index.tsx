import { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

import { cx } from "@/app/utils/cx";

import styles from "./CustomInput.module.scss";

interface TextFieldProps {
  name: string;
  label?: string;
  error?: string;
  isRequired?: boolean;
  full?: boolean;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const CustomInput = ({
  label,
  isRequired,
  value,
  onChange,
  error,
  name,
  full = false,
  placeholder,
}: TextFieldProps) => (
  <div className={cx(styles.layout, full && "full")}>
    {label && (
      <label htmlFor={name} className={cx(styles.label, "text-bold")}>
        {label}
        {isRequired && <span className={styles.required}>*</span>}
      </label>
    )}
    <input
      placeholder={placeholder}
      name={name}
      className={cx(styles.input, error && styles.inputError)}
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
