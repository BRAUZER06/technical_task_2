import React from "react";
import styles from "./InputList.module.scss";

interface InputListProps {
  onBlur?: () => {};
  onChange?: () => {};
  error?: string;
  defaltValue?: any[];
  value: string;
  name?: string;
  type?: string;
  text?: string;
  width?: string;
  height?: string;
  placeholder?: string;
}

const InputList: React.FC<InputListProps> = ({
  onChange,
  onBlur,
  width,
  error,
  height,
  value,
  name,
  type,
  defaltValue,
  placeholder,
}) => {
  const id = React.useId();



  console.log(1);
  return (
    <div className={styles.InputList__container}>
      <input
        type={type}
        className={styles.InputList__container_input}
        name="sort"
        value={value}
        placeholder={placeholder}
        list={`list_${name}`}
        onChange={onChange}
        onBlur={onBlur}
      />
      <p className={styles.InputList__container_error} style={{ color: "red" }}>
        {error}
      </p>
      <datalist id={`list_${name}`}>
        {defaltValue &&
          defaltValue.map((item: any) => (
            <option key={Math.floor(Math.random() * (100000000 - 1 + 1)) + 2}>
              {item}
            </option>
          ))}
      </datalist>
    </div>
  );
};


export default React.memo(InputList);
