import React from "react";
import styles from "./page.module.css";
import NextLink from "next/link";
import { SomeImage } from "@/components/someImage";

const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <main>
        <h1>wetter.com coding challenge</h1>
        <NextLink href="/forecast">go to Forecast Page</NextLink>
        <SomeImage />
      </main>
    </div>
  );
};

export default HomePage;
