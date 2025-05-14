"use client";

import Image from "next/image";
import styles from "./WeatherSummary.module.css";
import { useState } from "react";
import { ForecastSpace } from "@/app/types/forecast";
import { formatDate, getRelativeDay } from "@/utils/helpers";

type AccordionHeaderProps = {
  date: Date;
  temperature: { min: number; max: number };
  weatherIcon: string;
  spaces: ForecastSpace[];
  forecast: string;
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
        <h2 className={styles.weatherDay}>{getRelativeDay(props.date)}</h2>
        <div className={styles.weatherDate}>{formatDate(props.date)}</div>
        <Image
          className={styles.weatherIcon}
          width={100}
          height={84}
          src={props.weatherIcon}
          alt="weather"
        />
        <div className={styles.weatherForecast}>{props.forecast}</div>
        <div className={styles.weatherTemperature}>
          <span>{props.temperature.max ?? "-"}°</span>
          <span className={styles.weatherTemperatureMin}>
            /{props.temperature.min ?? "-"}°
          </span>
        </div>
      </button>
    </>
  );
}
