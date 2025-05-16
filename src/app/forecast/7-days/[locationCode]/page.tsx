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
  // Since the location data is cached, we can call this function again later with no cost
  const location = await getLocationData(locationCode);

  const title = `${location.name} - 7 Days Weather Forecast`;
  const description = `7 Days Weather Forecast for ${location.name} powered by Wetter.com`;

  return {
    title,
    description,
    keywords: `${location.name} Weather, Wetter, 7 Days Forecast, Weather, Current Weather`,
    openGraph: {
      siteName: "wetter-test.vercel.app",
      url: `https://wetter-test.vercel.app/forecast/7-days/${locationCode}.html`,
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

// Mark this page for cache for 1 hr
export const revalidate = 3600;
export default async function Page({ params }: { params: Params }) {
  const { locationCode } = await params;
  const location = await getLocationData(locationCode);
  const weather = await getWeatherData(location.coordinates);

  const sevenDaysForecast = weather.items.slice(0, 7);

  return (
    <>
      <Header title={`${location.name} - 7 Days Weather Forecast`}>
        <LinkButton href={`/forecast/3-days/${locationCode}.html`}>
          Check for 3 Days
        </LinkButton>
      </Header>
      <main className={styles.sectionBoundary}>
        {sevenDaysForecast.map((w, i) => (
          <WeatherAccordion
            key={w.summary.date}
            index={i}
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
