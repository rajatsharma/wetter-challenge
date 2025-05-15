import { APPLICATION_ID_HEADER, WETTER_TOKEN, WETTER_URL } from "@/env";
import { Location } from "@/app/types/location";

const requestHeaders = {
  Token: WETTER_TOKEN,
  "X-Application-ID": APPLICATION_ID_HEADER,
};

export async function getLocationData(locationCode: string): Promise<Location> {
  const response = await fetch(`${WETTER_URL}/locations/${locationCode}/`, {
    cache: "force-cache",
    headers: requestHeaders,
    // Since location details that we need are never going to change, i.e. co-ordinates
    // we cache this response forever
    next: { revalidate: false },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch location data, reason:${response.statusText}`,
    );
  }

  return response.json();
}
