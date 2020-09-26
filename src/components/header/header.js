import React from "react";
import styles from './header.module.css';

const Header= ({ user }) => {
    const { name, status } = user;
    return (
      <header className={styles.Header}>
        <h1 className={styles.Header__name}>{name}</h1>
        <p className={styles.Header__status}>{status}</p>
      </header>
    );
};

export default Header;
