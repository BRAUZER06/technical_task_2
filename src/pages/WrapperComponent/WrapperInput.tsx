import React, { Children } from "react";
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
    <div className={styles.container__inputs_text}>
      <p className={styles.container__inputs_p}>{leftText}</p>
      {children}
      <p className={styles.container__inputs_pGray}>{rightText}</p>
    </div>
  );
};

export default WrapperInput;
