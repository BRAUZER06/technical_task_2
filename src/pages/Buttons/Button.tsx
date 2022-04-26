import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick: (e:any) => void;
  children: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children = "Кнопка",
}) => {
  return (
    <div className={styles.Button__container}>
      <button
        onClick={onClick}
        className={styles.Button__container_button}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
