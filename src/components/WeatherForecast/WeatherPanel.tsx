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

// Since this component will be rendered inside Button we need to keep all elements as span
const WeatherPanel: React.FC<WeatherPanelProps> = ({
  heading,
  subheading,
  icon,
  forecast,
  temperature,
}) => {
  return (
    <>
      <span className={styles.heading}>{heading}</span>
      <span className={styles.subheading}>{subheading}</span>
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
      <span className={styles.temperature}>
        <span className={styles.temperatureMax}>{temperature.max ?? "-"}°</span>
        <span className={styles.temperatureMin}>
          /{temperature.min ?? "-"}°
        </span>
      </span>
      <span className={styles.forecast}>{forecast ?? ""}</span>
    </>
  );
};

export default WeatherPanel;
