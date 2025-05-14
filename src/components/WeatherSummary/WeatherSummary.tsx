"use client";

import Image from "next/image";
import styles from "./WeatherSummary.module.css";
import { useState } from "react";
import WeatherDetails from "@/components/WeatherDetails/WeatherDetails";
import { ForecastSpace } from "@/app/types/forecast";
import { formatDate, getRelativeDay } from "@/utils/helpers";

type AccordionHeaderProps = {
  date: string;
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
        <p className={styles.weatherDate}>{formatDate(props.date)}</p>
        <Image
          className={styles.weatherIcon}
          width={100}
          height={84}
          src={props.weatherIcon}
          alt="weather"
        />
        <div className={styles.weatherTemperature}>
          <span>{props.temperature.max ?? "-"}°</span>
          <span className={styles.weatherTemperatureMin}>
            /{props.temperature.min ?? "-"}°
          </span>
        </div>
        <div className={styles.weatherForecast}>{props.forecast}</div>
      </button>
      <WeatherDetails spaces={props.spaces} isOpen={isOpen} />
    </>
  );
}
