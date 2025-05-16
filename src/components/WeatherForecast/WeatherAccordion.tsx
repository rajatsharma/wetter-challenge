"use client";

import styles from "./WeatherForecast.module.css";
import React, { useId, useState } from "react";
import WeatherDisclosure from "@/components/WeatherForecast/WeatherDisclosure";
import { ForecastSpace, ForecastSummary } from "@/app/types/forecast";
import { formatDate, getRelativeDay } from "@/lib/utils/helpers";
import ChevronIcon from "@/components/icons/ChevronIcon";
import WeatherPanel from "@/components/WeatherForecast/WeatherPanel";

type WeatherAccordionProps = {
  summary: ForecastSummary;
  spaces: ForecastSpace[];
  timezone: string;
};

const WeatherAccordion: React.FC<WeatherAccordionProps> = (props) => {
  const [isOpen, toggleOpen] = useState(false);
  const containerClass = `${styles.container} ${styles.accordion}`;
  // Generate SSR safe randomId for disclosure id
  const disclosureId = useId();
  const relativeDay = getRelativeDay(props.summary.date, props.timezone);

  // We need to make sure that the accordion is accessible by
  // tab and clickable using enter and space
  return (
    <>
      <button
        className={containerClass}
        onClick={() => toggleOpen((s) => !s)}
        tabIndex={0}
        data-open={isOpen}
        aria-expanded={isOpen}
        aria-label={`View Detailed Forecast for ${relativeDay}`}
        aria-controls={`disclosure-${disclosureId}`}
      >
        <WeatherPanel
          heading={relativeDay}
          subheading={formatDate(props.summary.date, props.timezone)}
          icon={props.summary.weather.iconUrl}
          temperature={props.summary.temperature}
          forecast={props.summary.weather.text}
        />
        <div className={styles.handle} data-open={isOpen} aria-hidden>
          <ChevronIcon />
        </div>
      </button>
      <WeatherDisclosure
        id={`disclosure-${disclosureId}`}
        aria-label={`Detailed Forecast for ${relativeDay}`}
        isOpen={isOpen}
        timezone={props.timezone}
        spaces={props.spaces}
      />
    </>
  );
};

export default WeatherAccordion;
