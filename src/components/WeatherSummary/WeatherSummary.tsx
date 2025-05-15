"use client";

import Image from "next/image";
import styles from "./WeatherSummary.module.css";
import { useState } from "react";
import WeatherDetails from "@/components/WeatherDetails/WeatherDetails";
import { ForecastSpace, ForecastSummary } from "@/app/types/forecast";
import { formatDate, getRelativeDay } from "@/utils/helpers";

type AccordionHeaderProps = {
  summary: ForecastSummary;
  spaces: ForecastSpace[];
};

export default function WeatherSummary(props: AccordionHeaderProps) {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <>
      <button
        className={styles.header}
        onClick={() => toggleOpen((s) => !s)}
        tabIndex={0}
        data-open={isOpen}
      >
        <h2 className={styles.weatherDay}>
          {getRelativeDay(props.summary.date)}
        </h2>
        <p className={styles.weatherDate}>{formatDate(props.summary.date)}</p>
        {props.summary.weather.iconUrl && (
          <Image
            className={styles.weatherIcon}
            width={100}
            height={84}
            src={props.summary.weather.iconUrl}
            alt="weather"
          />
        )}
        <div className={styles.weatherTemperature}>
          <span>{props.summary.temperature.max ?? "-"}°</span>
          <span className={styles.weatherTemperatureMin}>
            /{props.summary.temperature.min ?? "-"}°
          </span>
        </div>
        <div className={styles.weatherForecast}>
          {props.summary.weather.text}
        </div>
      </button>
      <WeatherDetails spaces={props.spaces} isOpen={isOpen} />
    </>
  );
}
