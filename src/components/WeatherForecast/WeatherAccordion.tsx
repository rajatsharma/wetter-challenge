"use client";

import styles from "./WeatherForecast.module.css";
import { useState } from "react";
import WeatherDisclosure from "@/components/WeatherForecast/WeatherDisclosure";
import { ForecastSpace, ForecastSummary } from "@/app/types/forecast";
import { formatDate, getRelativeDay } from "@/utils/helpers";
import ChevronIcon from "@/components/icons/ChevronIcon";
import WeatherPanel from "@/components/WeatherForecast/WeatherPanel";

type WeatherAccordionProps = {
  summary: ForecastSummary;
  spaces: ForecastSpace[];
};

export default function WeatherAccordion(props: WeatherAccordionProps) {
  const [isOpen, toggleOpen] = useState(false);
  const containerClass = `${styles.container} ${styles.accordion}`;

  return (
    <>
      <button
        className={containerClass}
        onClick={() => toggleOpen((s) => !s)}
        tabIndex={0}
        data-open={isOpen}
      >
        <WeatherPanel
          heading={getRelativeDay(props.summary.date)}
          subheading={formatDate(props.summary.date)}
          icon={props.summary.weather.iconUrl}
          temperature={props.summary.temperature}
          forecast={props.summary.weather.text}
        />
        <div className={styles.handle} data-open={isOpen}>
          <ChevronIcon />
        </div>
      </button>
      <WeatherDisclosure spaces={props.spaces} isOpen={isOpen} />
    </>
  );
}
