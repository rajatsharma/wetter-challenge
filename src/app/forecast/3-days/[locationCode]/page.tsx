import styles from "@/app/forecast/layout.module.css";
import { Metadata } from "next";
import LinkButton from "@/components/LinkButton/LinkButton";
import WeatherAccordion from "@/components/WeatherForecast/WeatherAccordion";
import { getLocationData } from "@/lib/api/location";
import { getWeatherData } from "@/lib/api/weather";
import Header from "@/components/Header/Header";

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

export const revalidate = 3600;
export default async function Page({ params }: { params: Params }) {
  // Loader could appear when the cache is revalidating
  // Uncomment the line below to forcefully suspend this component and check if Loader doesn't affect CLS
  // await new Promise((r) => setTimeout(r, 1000));
  const { locationCode } = await params;
  const location = await getLocationData(locationCode);
  const weather = await getWeatherData(location.coordinates);

  const threeDaysForecast = weather.items.slice(0, 3);

  return (
    <>
      <Header title={`${location.name} - 3 Days Weather Forecast`}>
        <LinkButton href={`/forecast/7-days/${locationCode}.html`}>
          Check for 7 Days
        </LinkButton>
      </Header>
      <main className={styles.sectionBoundary}>
        {threeDaysForecast.map((w) => (
          <WeatherAccordion
            key={w.summary.date}
            summary={w.summary}
            spaces={w.spaces}
          />
        ))}
      </main>
      <div className={styles.footerContainer}>
        <LinkButton variant="secondary" href="/forecast">
          Go to Cities List
        </LinkButton>
      </div>
    </>
  );
}
