import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  labelName: string;
  inputType: string;
  required: boolean;
}

const Input = ({ labelName, inputType, required }: InputProps) => (
  <div className={styles.input_wrapper}>
    <label htmlFor={`input-${labelName}`} className={styles.label_text}>
      {labelName} {required && <span className={styles.asterisk}>*</span>}
    </label>
    <input
      id={`input-${labelName}`}
      type={inputType}
      required={required}
      className={styles.input}
    />
  </div>
);

export default Input;
