import styles from "./CustomButton.module.scss";

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  type?: any;
}

export const CustomButton = ({
  text,
  onClick,
  type = "button",
}: CustomButtonProps) => (
  <button type={type} className={styles.button} onClick={onClick}>
    {text}
  </button>
);
