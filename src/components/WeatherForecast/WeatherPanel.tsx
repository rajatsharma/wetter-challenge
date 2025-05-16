import React from "react";
import styles from "@/components/WeatherForecast/WeatherForecast.module.css";
import Image from "next/image";

type WeatherPanelProps = {
  heading: string;
  subheading: string;
  icon: string | null;
  temperature: { max: number | null; min: number | null };
  forecast: string | null;
};

const WeatherPanel: React.FC<WeatherPanelProps> = ({
  heading,
  subheading,
  icon,
  forecast,
  temperature,
}) => {
  return (
    <>
      <h3 className={styles.heading}>{heading}</h3>
      <div className={styles.subheading}>{subheading}</div>
      {/* If icon is null for any reason,
        or is loading slowly, it won't affect our CLS because of grid layout */}
      {icon && (
        <Image
          className={styles.icon}
          width={100}
          height={84}
          src={icon}
          alt={forecast ?? `${heading}'s weather`}
        />
      )}
      <div
        className={styles.temperature}
        aria-label={`Estimated temperature from ${temperature.min}°C to ${temperature.max}°C`}
      >
        <span className={styles.temperatureMax}>{temperature.max ?? "-"}°</span>
        <span className={styles.temperatureMin}>
          /{temperature.min ?? "-"}°
        </span>
      </div>
      <div className={styles.forecast} aria-label={forecast ?? "Forecast"}>
        {forecast ?? ""}
      </div>
    </>
  );
};

export default WeatherPanel;
