import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  onChange?: (e: any) => {};
  onBlur?: (e: any) => {};
  error: string;
  values?: string;
  name?: string;
  placeholder?: string;
  width?: string;
  height?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({
  onChange,
  onBlur,
  error,
  values,
  name,
  placeholder = "введите значение",
  width,
  height,
  type,
}) => {
  return (
    <div className={styles.Input__container}>
      <input
        onChange={onChange}
        onBlur={onBlur}
        value={values}
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
