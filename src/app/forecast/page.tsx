import React from "react";
import styles from "./layout.module.css";
import LinkButton from "@/components/LinkButton/LinkButton";
import Header from "@/components/Header/Header";
import type { Metadata } from "next";

const citiesList = [
  {
    name: "Berlin",
    code: "DE0001020",
  },
  {
    name: "Munich",
    code: "DE0006515",
  },
  {
    name: "Constance",
    code: "DE0005678",
  },
  {
    name: "Cologne",
    code: "DE0005156",
  },
  {
    name: "Frankfurt",
    code: "DE0002989",
  },
];

const title = "Weather Forecast powered by Wetter.com";
const description = `Weather Forecast for ${citiesList.map((c) => c.name).join(", ")}`;
const keywords = citiesList.map((c) => `${c.name} weather`).join(", ");

export const metadata: Metadata = {
  title,
  description,
  keywords: `${keywords}, Wetter, 3 Days Forecast, 7 Days Forecast, Weather, Current Weather`,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "wetter-test.vercel.app",
    url: "https://wetter-test.vercel.app/forecast/",
  },
  twitter: {
    title,
    description,
  },
};

const ForecastPage: React.FC = () => {
  return (
    <>
      <Header title="Forecast" />
      <main className={styles.sectionBoundary}>
        {citiesList.map((city) => (
          <section
            className={styles.cityPanel}
            key={city.code}
            aria-label={`Forecast for ${city.name}`}
          >
            <h2>{city.name}</h2>
            <LinkButton
              href={`/forecast/7-days/${city.code}.html`}
              variant="secondary"
            >
              Check for 7 Days
            </LinkButton>
            <LinkButton href={`/forecast/3-days/${city.code}.html`}>
              Check for 3 Days
            </LinkButton>
          </section>
        ))}
      </main>
    </>
  );
};

export default ForecastPage;
