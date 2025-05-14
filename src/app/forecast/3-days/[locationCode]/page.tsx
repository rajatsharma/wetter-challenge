import location from "./location.json";
import weatherJson from "./weather.json";
import styles from "./page.module.css";
import WeatherSummary from "@/components/WeatherSummary/WeatherSummary";

export default async function WeatherForecast() {
  const weather = weatherJson.items.slice(0, 3).map((w) => w.summary);
  const spaces = weatherJson.items.slice(0, 3).map((w) => w.spaces);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{location.name} - 3 days weather</h1>
      <div className={styles.weatherContainer}>
        {weather.map((w, i) => (
          <WeatherSummary
            key={w.date}
            date={w.date}
            temperature={w.temperature}
            forecast={w.weather.text}
            weatherIcon={w.weather.iconUrl}
            spaces={spaces[i]}
          />
        ))}
      </div>
    </div>
  );
}
