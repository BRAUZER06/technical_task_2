import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: string;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ disabled, children='Кнопка' }) => {
  return (
    <div className={styles.Button__container}>
      <button className={styles.Button__container_button} disabled={disabled}>
        {children}
      </button>
    </div>
  );
};

export default Button;
