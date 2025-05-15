if (process.env.WETTER_TOKEN === undefined) {
  throw new Error("Env var WETTER_TOKEN not set");
}

export const WETTER_TOKEN = process.env.WETTER_TOKEN;
export const WETTER_URL = "https://api.wttr.io/web-app/v1";
export const APPLICATION_ID_HEADER = "com.wetter/web-react/coding-challenge";
