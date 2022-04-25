import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  value: string;
}

const Button: React.FC<ButtonProps> = ({ value }) => {
  return (
    <div className={styles.Button__container}>
      <input
        className={styles.Button__container_input}
        type="submite"
        value={value}
      />
    </div>
  );
};

export default Button;
