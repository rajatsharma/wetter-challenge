"use client";

import styles from "./WeatherForecast.module.css";
import { ForecastSpace } from "@/app/types/forecast";
import React, { useEffect, useRef } from "react";
import { formatHours } from "@/utils/helpers";
import WeatherPanel from "@/components/WeatherForecast/WeatherPanel";

type WeatherDisclosureProps = {
  id: string;
  spaces: ForecastSpace[];
  isOpen: boolean;
  relativeDay: string;
};

const WeatherDisclosure: React.FC<WeatherDisclosureProps> = (props) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = props.isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [props.isOpen]);

  const containerClass = `${styles.container} ${styles.disclosure}`;

  return (
    <div
      ref={contentRef}
      className={styles.disclosureBoundary}
      id={`disclosure-${props.id}`}
      aria-label={`Detailed Forecast for ${props.relativeDay}`}
      role="region"
    >
      {props.spaces.map((space) => (
        <section className={containerClass} key={space.typeLabel}>
          <WeatherPanel
            heading={space.type ?? space.typeLabel}
            subheading={`${formatHours(space.from)} - ${formatHours(space.to)} hrs`}
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
