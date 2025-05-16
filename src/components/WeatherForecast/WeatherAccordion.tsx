"use client";

import styles from "./WeatherForecast.module.css";
import React, { useId, useState } from "react";
import WeatherDisclosure from "@/components/WeatherForecast/WeatherDisclosure";
import { ForecastSpace, ForecastSummary } from "@/app/types/forecast";
import { formatDate, getRelativeDay } from "@/utils/helpers";
import ChevronIcon from "@/components/icons/ChevronIcon";
import WeatherPanel from "@/components/WeatherForecast/WeatherPanel";

type WeatherAccordionProps = {
  summary: ForecastSummary;
  spaces: ForecastSpace[];
};

const WeatherAccordion: React.FC<WeatherAccordionProps> = (props) => {
  const [isOpen, toggleOpen] = useState(false);
  const containerClass = `${styles.container} ${styles.accordion}`;
  // Generate SSR safe randomId for disclosure id
  const disclosureId = useId();
  const relativeDay = getRelativeDay(props.summary.date);

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
          subheading={formatDate(props.summary.date)}
          icon={props.summary.weather.iconUrl}
          temperature={props.summary.temperature}
          forecast={props.summary.weather.text}
        />
        <div className={styles.handle} data-open={isOpen} aria-hidden>
          <ChevronIcon />
        </div>
      </button>
      <WeatherDisclosure
        spaces={props.spaces}
        isOpen={isOpen}
        relativeDay={relativeDay}
        id={disclosureId}
      />
    </>
  );
};

export default WeatherAccordion;
