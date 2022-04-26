import React from "react";
import styles from "./WrapperInput.module.scss";

interface WrapperInputProps {
  children: any;
  leftText?: string;
  rightText?: string;
}

const WrapperInput: React.FC<WrapperInputProps> = ({
  children,
  leftText,
  rightText,
}) => {
  return (
    <div className={styles.container__input}>
      <p className={styles.container__input_p}>{leftText}</p>
      {children}
      <p className={styles.container__input_pGray}>{rightText}</p>
    </div>
  );
};

export default WrapperInput;
