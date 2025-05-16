# Suggestions to Improve Core Web Vitals

## Steps already implemented

### For HomePage

- At HomePage, for the `<img>` an exact value of width and height is set to avoid CLS, since the image is only content that is loaded asynchronously, not many changes are needed to improve the score.
- To improve LCP, adding `fetchPriority` will set image priority to be higher because by default browser treats images as lower priority than the rendering.
- Adding `priority` which is exclusive prop to `next/image` adds `rel=preload` hint to image url causing browser to preload image, while parsing `<head>`.
- The above prop will also disable lazy loading of image i.e. remove `loading=lazy` from `<img>` tag as it is not recommended for images part of LCP.
- Also, `sizes` prop is set to make sure smaller size is requested for `<img>` with smaller width, at the same time making sure that the resolution is not too low. e.g. 500px width of `<img>` will load 640px width image at the minimum. 

### General Improvements

- Added `preconnect` hint for `https://cs3.wettercomassets.com/` to establish connection with the asset server (DNS + HTTP) before asking for images and weather icons.
- Added `useLightningcss: true` to `next.config.ts` to minimize CSS files with [Lightning CSS](https://lightningcss.dev/). This will reduce the size of CSS loaded reducing TTFB, which will further reduce LCP.
- Since we don't have a lot of CSS, and it is already minified in the above step, `inlineCss: true` is added to `next.config.ts` to inline CSS in initial document, this will reduce the no of requests needed to fetch css files, reducing TTFB and LCP.
- Optimal caching is added to cache fetch requests, to improve TTFB for `/forecast` pages, location API is cached indefinitely and weather API is cached for an hour.
- Most of the improvements like Code Splitting, Cache Headers etc. are already done by Next.js.

## Steps that can be implemented for the current use case

### For HomePage

- Making image responsive based on viewport dimensions.
- Serving `webp` images instead of `jpg` at the source i.e. `https://cs3.wettercomassets.com/` will improve the performance.
- Adding resize support on the server will help in order to request specific size of images for specific width of `<img>` tag.
  (Both the above steps are supported by next/image but has limitations)
- Other image based optimisations include: serving them via CDN, compressing them and removing EXIF metadata if present etc.

### General Improvements

- If we are streaming page using `<Suspense>` adding Loader component with specific dimensions of the loading content will help reduce CLS.
- Reducing the size of JS files by removing polyfills for newer browsers.
