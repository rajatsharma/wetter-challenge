import { APPLICATION_ID_HEADER, WETTER_TOKEN, WETTER_URL } from "@/env";
import { ForecastWeatherNearby } from "@/app/types/forecast";

const requestHeaders = {
  Token: WETTER_TOKEN,
  "X-Application-ID": APPLICATION_ID_HEADER,
};

export async function getWeatherData(coordinates: {
  latitude: string;
  longitude: string;
}): Promise<ForecastWeatherNearby> {
  const response = await fetch(
    `${WETTER_URL}/weather/forecast/${coordinates.latitude}/${coordinates.longitude}/`,
    {
      headers: requestHeaders,
      // Cache Weather response for an hour
      next: { revalidate: 60 * 60 },
    },
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch weather data, reason:${response.statusText}`,
    );
  }

  return response.json();
}
