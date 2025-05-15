import { Metadata } from "next";
import WeatherAccordion from "@/components/WeatherForecast/WeatherAccordion";
import { getLocationData } from "@/lib/api/location";
import { getWeatherData } from "@/lib/api/weather";
import LinkButton from "@/components/LinkButton/LinkButton";
import Header from "@/components/Header/Header";
import styles from "@/app/forecast/layout.module.css";

type Params = Promise<{ locationCode: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { locationCode } = await params;
  const location = await getLocationData(locationCode);

  const title = `${location.name} - 7 Days Weather Forecast`;
  const description = `7 Days Weather Forecast for ${location.name} powered by Wetter.com`;

  return {
    title,
    description,
    keywords: `${location.name} Weather, Wetter, 7 Days Forecast, Weather, Current Weather`,
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

export default async function Page({ params }: { params: Params }) {
  const { locationCode } = await params;
  const location = await getLocationData(locationCode);
  const weather = await getWeatherData(location.coordinates);

  const sevenDaysForecast = weather.items.slice(0, 7);

  return (
    <>
      <Header title={`${location.name} - 7 Days Weather Forecast`}>
        <LinkButton
          href={`/forecast/3-days/${locationCode}.html`}
          variant="secondary"
        >
          Check for 3 Days
        </LinkButton>
      </Header>
      <main className={styles.weatherContainer}>
        {sevenDaysForecast.map((w) => (
          <WeatherAccordion
            key={w.summary.date}
            summary={w.summary}
            spaces={w.spaces}
          />
        ))}
      </main>
      <div className={styles.footerContainer}>
        <LinkButton href="/forecast">Go to Cities List</LinkButton>
      </div>
    </>
  );
}
