import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  onChange?: (e: any) => {};
  onBlur?: (e: any) => {};
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
  values,
  name,
  placeholder = "введите значение",
  width,
  height,
  type,
}) => {
  const inputStyles: InputProps = {
    width: width,
    height: height,
  };

  return (
    <div className={styles.Input__container}>
      <input
        onChange={onChange}
        onBlur={onBlur}
        value={values}
        name={name}
        type={type}
        style={inputStyles}
        placeholder={placeholder}
        className={styles.Input__container_input}
      />
    </div>
  );
};

export default Input;
