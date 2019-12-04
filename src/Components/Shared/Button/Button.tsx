import React from 'react';

import styles from './Button.module.scss';

interface ButtonProps {
  buttonText: string;
}

const Button = ({ buttonText }: ButtonProps) => (
  <button className={styles.button}>{buttonText}</button>
);

export default Button;
