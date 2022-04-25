import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  onChange?: (e: any) => void;
  placeholder?: string;
  width?: string;
  height?: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  placeholder,
  width,
  height,
}) => {
  const inputStyles: InputProps = {
    width: width,
    height: height,
  };
  return (
    <div className={styles.Input__container}>
      <input
        className={styles.Input__container_input}
        onChange={(e) => {
          onChange?.(e);
        }}
        style={inputStyles}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default Input;
