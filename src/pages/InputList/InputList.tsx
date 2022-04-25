import React from "react";
import styles from "./InputList.module.scss";

interface InputListProps {
  text?: string;
  width?: string;
  height?: string;
}

const InputList: React.FC<InputListProps> = ({ text, width, height }) => {
  const onChangeInputValue = (event: any) => {};
  return (
    <div className={styles.InputList__container}>
      <input
        className={styles.InputList__container_input}
        name="sort"
        value={text}
        onChange={onChangeInputValue}
        placeholder="Сортировка по:"
        type="text"
        list="list_one"
      />
      <datalist id="list_one">
        <option value="RATING" />
        <option value="NUM_VOTE" />
        <option value="YEAR" />
      </datalist>
    </div>
  );
};

export default InputList;
