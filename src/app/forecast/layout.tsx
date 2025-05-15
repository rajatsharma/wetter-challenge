import React, { ReactNode, Suspense } from "react";
import styles from "./layout.module.css";

export default function Layout({ children }: { children: ReactNode }) {
  // We are not using Streaming here because Suspense is causing Metadata tags to be rendered in <body>
  // instead of <head> more info: https://github.com/vercel/next.js/issues/46738
  // and https://github.com/vercel/next.js/discussions/35847
  return (
    // <Suspense fallback="Loading...">
    <div className={styles.container}>{children}</div>
    // </Suspense>
  );
}
