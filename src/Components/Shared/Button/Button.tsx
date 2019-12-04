import React from 'react';
import PulseLoader from 'react-spinners/PulseLoader';

import styles from './Button.module.scss';

interface ButtonProps {
  buttonText: string;
  handleClick: Function;
  loading?: boolean;
}

const Button = ({ buttonText, handleClick, loading }: ButtonProps) => (
  <button
    className={styles.button}
    onClick={event => {
      event.preventDefault();
      handleClick();
    }}
  >
    {loading ? <PulseLoader size={6} color="white" /> : buttonText}
  </button>
);

export default Button;
