import styles from "./Header.module.css";
import React, { ReactNode } from "react";

type HeaderProps = {
  title: string;
  children?: ReactNode;
};

const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <header className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </header>
  );
};

export default Header;
