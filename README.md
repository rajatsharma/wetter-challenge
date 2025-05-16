This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Your tasks:

1.  Create a new weather forecast page
    - make sure it is reachable via `/this-is-the-forecast-page/3-days/[locationCode].html` ("DE0001020" for Berlin)
    - make a API call to get the location `url: https://api.wttr.io/web-app/v1/locations/[locationCode]/`
2.  Add a listing with the weather forecast for the next 3 days
    - make a API call to get the forecast `url: https://api.wttr.io/web-app/v1/weather/forecast/[latitude]/[longitude]/`
    - show the date, min/max temperature, and weather icon (see summary)
3.  Make the items toggleable
    - clicking on one of those items toggles the detailed forecast per day (like in an accordion component).
    - the details per day should show information for morning, afternoon, evening, night forecast
    - show date, min/max temperature, and weather icon per item
    - you find these data in the same API response of the previous step
    - IMPORTANT: those data should be crawlable by search engines
4.  Create a new page to show 7 days of forecast data
    - make it reachable via `/this-is-the-forecast-page/7-days/[locationCode].html`
    - integrate the listing from the previous step
    - add links to navigate between the pages
5.  Core web vitals:
    - Optimize LCP of the Home Page or at least make some specific suggestions
    - Optimize CLS of the Home Page or at least make some specific suggestions

Hint: to make API calls please always use the following headers:

    token: rZP2E6Zy0JsbR3gh21Y4SDvEFU
    X-Application-ID: com.wetter/web-react/coding-challenge

Whenever you have questions, do not hesitate to ask.
