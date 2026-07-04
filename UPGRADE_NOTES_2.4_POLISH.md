# NiñoPulse Global 2.4 Product Polish Notes

## What changed

- Fixed the mobile bottom navigation layout for five items instead of four.
- Refactored the Local Weather page into a query-driven flow with TanStack Query, cached state/city lists, retry buttons, visible errors and source attribution.
- Added `src/hooks/useLocalWeather.js` to separate API/data loading logic from the page UI.
- Improved the Hero copy so the product value is clear in the first few seconds.
- Added a direct Hero CTA to Local Weather.
- Added `SourceMethodologyStrip` near the top of the homepage to show NOAA/CPC, Open-Meteo, methodology and API links.
- Added `EnsoScenarioSimulator`, a didactic Niño 3.4 anomaly slider that ranks historically sensitive countries.
- Expanded SEO/Open Graph/Twitter metadata in `index.html`.
- Expanded `jsconfig.json` so type checking covers the app, API, server and scripts.
- Updated README top section to be cleaner and more portfolio-friendly.
- Bumped package version to `2.4.0-polish.1`.

## Validation run

```bash
npm run check
```

Passed:

- ESLint
- TypeScript check
- Node test suite: 22/22 tests passed
- Vite production build

## Notes

This remains an educational ENSO dashboard. The new simulator is intentionally transparent and simple; it is not a meteorological model, warning system or calibrated forecast.
