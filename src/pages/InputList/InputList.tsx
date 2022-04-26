import React from "react";
import styles from "./InputList.module.scss";

interface InputListProps {
  onBlur?: (e:any) => void;
  onChange?: (e:any) => void;
  value: string;
  name?: string;
  text?: string;
  error?: any;
  defaltValue?: any[];
  placeholder?: string;
}

const InputList: React.FC<InputListProps> = ({
  onChange,
  onBlur,
  name,
  error,
  value,
  placeholder,
  defaltValue,
}) => {
  return (
    <div className={styles.InputList__container}>
      <input
        className={styles.InputList__container_input}
        name={name}
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
