"use client";

import styles from "./WeatherForecast.module.css";
import { ForecastSpace } from "@/app/types/forecast";
import React, { ComponentPropsWithoutRef, useEffect, useRef } from "react";
import { formatHours } from "@/lib/utils/helpers";
import WeatherPanel from "@/components/WeatherForecast/WeatherPanel";

type WeatherDisclosureProps = ComponentPropsWithoutRef<"div"> & {
  spaces: ForecastSpace[];
  isOpen: boolean;
  timezone: string;
};

const WeatherDisclosure: React.FC<WeatherDisclosureProps> = ({
  spaces,
  isOpen,
  timezone,
  ...props
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // This will allow us to hide content to the user while keeping it visible for search engines
  // We will keep it closed by default to keep our CLS 0
  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  const containerClass = `${styles.container} ${styles.disclosure}`;

  return (
    <div
      className={styles.disclosureBoundary}
      role="region"
      ref={contentRef}
      {...props}
    >
      {spaces.map((space) => (
        <section className={containerClass} key={space.typeLabel}>
          <WeatherPanel
            heading={space.type ?? space.typeLabel}
            subheading={`${formatHours(space.from, timezone)} - ${formatHours(space.to, timezone)} hrs`}
            icon={space.weather.iconUrl}
            temperature={space.temperature}
            forecast={space.weather.text}
          />
        </section>
      ))}
    </div>
  );
};

export default WeatherDisclosure;
