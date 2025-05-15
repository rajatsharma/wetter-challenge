import styles from "./page.module.css";
import WeatherSummary from "@/components/WeatherSummary/WeatherSummary";
import { getLocationData } from "@/lib/api/location";
import { getWeatherData } from "@/lib/api/weather";
import { Metadata } from "next";

type Params = Promise<{ locationCode: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locationCode } = await params;
  const location = await getLocationData(locationCode);

  const title = `${location.name} - 3 Days Weather Forecast`;
  const description = `3 Days Weather Forecast for ${location.name} powered by Wetter.com`;

  return {
    title,
    description,
    keywords: `${location.name} Weather, Wetter, 3 Days Forecast, Weather, Current Weather`,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      title,
      description,
    },
  };
}

// Cache this page for 1 hr
export const revalidate = 3600;
export default async function Page({ params }: { params: Params }) {
  const { locationCode } = await params;
  const location = await getLocationData(locationCode);
  const weather = await getWeatherData(location.coordinates);

  const threeDaysForecast = weather.items.slice(0, 3);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {location.name} - 3 Days Weather Forecast
      </h1>
      <div className={styles.weatherContainer}>
        {threeDaysForecast.map((w) => (
          <WeatherSummary
            key={w.summary.date}
            summary={w.summary}
            spaces={w.spaces}
          />
        ))}
      </div>
    </div>
  );
}
