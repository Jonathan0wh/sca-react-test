import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  labelName: string;
  inputType: string;
  required: boolean;
  dataField: string;
  handleInputChange: Function;
}

const Input = ({
  labelName,
  inputType,
  required,
  dataField,
  handleInputChange
}: InputProps) => (
  <div className={styles.input_wrapper}>
    <label htmlFor={`input-${labelName}`} className={styles.label_text}>
      {labelName} {required && <span className={styles.asterisk}>*</span>}
    </label>
    <input
      className={styles.input}
      id={`input-${labelName}`}
      type={inputType}
      required={required}
      onChange={event => handleInputChange(dataField, event.target.value)}
    />
  </div>
);

export default Input;
