import React from 'react';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <div className="row">
        <p className={styles.text}>Subscribe</p>
      </div>
    </div>
  </header>
);

export default Header;
