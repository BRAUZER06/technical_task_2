import React from "react";
import styles from "./InputList.module.scss";

interface InputListProps {
  value?:string;
  type?:string;
  text?: string;
  width?: string;
  height?: string;
}

const InputList: React.FC<InputListProps> = ({  width, height,type, value}) => {
  const onChangeInputValue = (event: any) => {};
  return (
    <div className={styles.InputList__container}>
      <input
      type={type}
      
        className={styles.InputList__container_input}
        name="sort"
        value={value}
        onChange={onChangeInputValue}
        placeholder="Сортировка по:"
        
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
