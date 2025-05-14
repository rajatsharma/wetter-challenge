import React from "react";
import styles from "../page.module.css";
import NextLink from "next/link";

const ForecastPage: React.FC = () => {
  return (
    <div className={styles.page}>
      <main>
        <h1>Forecast Page</h1>
        <NextLink href="/">go to Home Page</NextLink>
      </main>
    </div>
  );
};

export default ForecastPage;
