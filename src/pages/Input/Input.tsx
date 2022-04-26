import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  onBlur?: (e:any) => void;
  onChange?: (e:any) => void;
  name: string;
  type?: string;
  value: string;
  error?: any;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  onBlur,
  error,
  value,
  name,
  type,
  placeholder = "введите значение",
}) => {
  return (
    <div className={styles.Input__container}>
      <input
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        className={styles.Input__container_input}
      />
      <p className={styles.Input__container_error} style={{ color: "red" }}>{error}</p>
    </div>
  );
};

export default Input;
