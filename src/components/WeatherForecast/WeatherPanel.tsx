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
      <span className={styles.subheading}>{subheading}</span>
      {icon && (
        <Image
          className={styles.icon}
          width={100}
          height={84}
          src={icon}
          alt="weather"
        />
      )}
      <div className={styles.temperature}>
        <span className={styles.temperatureMax}>{temperature.max ?? "-"}°</span>
        <span className={styles.temperatureMin}>{temperature.min ?? "-"}°</span>
      </div>
      <div className={styles.forecast}>{forecast ?? ""}</div>
    </>
  );
};

export default WeatherPanel;
