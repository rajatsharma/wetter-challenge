"use client";

import Image from "next/image";
import styles from "./WeatherDetails.module.css";
import { ForecastSpace } from "@/app/types/forecast";
import { useEffect, useRef } from "react";
import { formatHours } from "@/utils/helpers";

type WeatherDetailsProps = {
  spaces: ForecastSpace[];
  isOpen: boolean;
};

export default function WeatherDetails(props: WeatherDetailsProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = props.isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [props.isOpen]);

  return (
    <div ref={contentRef} className={styles.transition}>
      {props.spaces.map((space) => (
        <div className={styles.header} key={space.typeLabel}>
          <h3 className={styles.weatherPart}>{space.type}</h3>
          <span className={styles.weatherTime}>
            {formatHours(space.from)} - {formatHours(space.to)} hrs
          </span>
          <Image
            className={styles.weatherIcon}
            width={100}
            height={84}
            src={space.weather.iconUrl ?? ""}
            alt="weather"
          />
          <div className={styles.weatherTemperature}>
            <span>{space.temperature.max ?? "-"}°</span>
            <span className={styles.weatherTemperatureMin}>
              /{space.temperature.min ?? "-"}°
            </span>
          </div>
          <div className={styles.weatherForecast}>{space.weather.text}</div>
        </div>
      ))}
    </div>
  );
}
