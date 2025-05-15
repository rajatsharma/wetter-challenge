import Link, { LinkProps } from "next/link";
import React from "react";
import styles from "./LinkButton.module.css";

type LinkButtonProps = LinkProps & {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  variant = "primary",
  ...rest
}) => {
  const variantClass =
    variant === "secondary" ? styles.secondary : styles.primary;

  const combinedClassName = `${styles.linkButton} ${variantClass}`;

  return (
    <Link href={href} {...rest} className={combinedClassName}>
      {children}
    </Link>
  );
};

export default LinkButton;
