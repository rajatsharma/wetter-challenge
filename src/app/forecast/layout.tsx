import React, { ReactNode, Suspense } from "react";
import styles from "./layout.module.css";

const FullScreenLoader: React.FC = () => {
  return <div className={styles.fullScreenLoader}>Loading...</div>;
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    // <Suspense fallback={<FullScreenLoader />}>
    <div className={styles.container}>{children}</div>
    // </Suspense>
  );
}
