import { APPLICATION_ID_HEADER, WETTER_TOKEN, WETTER_URL } from "@/env";
import { ForecastWeatherNearby } from "@/app/types/forecast";

const requestHeaders = {
  Token: WETTER_TOKEN,
  "X-Application-ID": APPLICATION_ID_HEADER,
};

// The results of weather api is cached in the data-cache for 50 mins
export async function getWeatherData(coordinates: {
  latitude: string;
  longitude: string;
}): Promise<ForecastWeatherNearby> {
  const response = await fetch(
    `${WETTER_URL}/weather/forecast/${coordinates.latitude}/${coordinates.longitude}/`,
    {
      headers: requestHeaders,
      // Cache Weather response for 50 min, we don't want this value to match 1 hr as we cache all our
      // routes for 1 hr
      next: { revalidate: 50 * 60 },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch weather data, reason:${response.statusText}`,
    );
  }

  return response.json();
}
