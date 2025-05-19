import React, { ReactNode } from "react";
import styles from "./layout.module.css";

const ForecastLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  // We are not using Streaming here because Suspense is causing Metadata tags to be rendered in <body>
  // instead of <head> more info: https://github.com/vercel/next.js/issues/46738
  // and https://github.com/vercel/next.js/discussions/35847
  return (
    // <Suspense fallback="Loading...">
    <div className={styles.container}>{children}</div>
    // </Suspense>
  );
};

export default ForecastLayout;
