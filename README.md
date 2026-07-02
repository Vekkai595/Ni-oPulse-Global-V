# NiñoPulse Global 2.3 Beta 1

> English README. For a Portuguese version, create `README.pt-BR.md` and link it here.

A bilingual, mobile-first ENSO research dashboard built to monitor, explain and visualize **El Niño**, **La Niña** and global climate impacts using official NOAA/CPC data, Open-Meteo live weather, historical ONI/RONI analysis, interactive maps, exports, public API routes, PWA support and Android support through Capacitor.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Version](https://img.shields.io/badge/version-2.3.0--beta.1-blue)
![Project](https://img.shields.io/badge/project-ENSO%20research-0ab6c8)
![Climate](https://img.shields.io/badge/focus-climate%20science-blue)
![Education](https://img.shields.io/badge/purpose-education%20%26%20research-purple)
![Private](https://img.shields.io/badge/package-private-lightgrey)

![React](https://img.shields.io/badge/React-18.2.0-20232A?logo=react&logoColor=61DAFB)
![React DOM](https://img.shields.io/badge/React%20DOM-18.2.0-20232A?logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-6.1.0-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ESM-F7DF1E?logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-%3E%3D20-339933?logo=nodedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-38B2AC?logo=tailwindcss&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-8.5.3-DD3A0A?logo=postcss&logoColor=white)
![Autoprefixer](https://img.shields.io/badge/Autoprefixer-10.4.20-DD3735?logo=autoprefixer&logoColor=white)

![PWA](https://img.shields.io/badge/PWA-ready-purple)
![Vite PWA](https://img.shields.io/badge/Vite%20PWA-1.3.0-5A0FC8)
![Workbox](https://img.shields.io/badge/Workbox-enabled-orange)
![Capacitor](https://img.shields.io/badge/Capacitor-7.4.4-119EFF?logo=capacitor&logoColor=white)
![Android](https://img.shields.io/badge/Android-ready-3DDC84?logo=android&logoColor=white)
![Android SDK](https://img.shields.io/badge/Android%20SDK-35-3DDC84?logo=android&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-ready-000000?logo=vercel&logoColor=white)
![Serverless](https://img.shields.io/badge/API-serverless-black)

![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900?logo=leaflet&logoColor=white)
![React Leaflet](https://img.shields.io/badge/React%20Leaflet-4.2.1-199900?logo=leaflet&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-2.15.4-orange)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-5.84.1-FF4154?logo=reactquery&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.16.4-0055FF?logo=framer&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide%20React-0.475.0-black)
![html2canvas](https://img.shields.io/badge/html2canvas-1.4.1-yellow)
![jsPDF](https://img.shields.io/badge/jsPDF-4.2.1-red)
![next-themes](https://img.shields.io/badge/next--themes-0.4.4-black)

![NOAA CPC](https://img.shields.io/badge/data-NOAA%2FCPC-blue)
![Open-Meteo](https://img.shields.io/badge/weather-Open--Meteo-0ea5e9)
![CORS](https://img.shields.io/badge/CORS-enabled-green)
![Upstash](https://img.shields.io/badge/Upstash-optional%20rate%20limit-00E9A3?logo=upstash&logoColor=white)
![Tests](https://img.shields.io/badge/tests-Node%20Test-green)
![ESLint](https://img.shields.io/badge/ESLint-9.19.0-4B32C3?logo=eslint&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-enabled-2088FF?logo=githubactions&logoColor=white)

---

## Preview

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dfe2e88a-8b8d-434c-bb57-6016cb27c14b" />

---

## Live Demo

https://ni-o-pulse-global-v.vercel.app
---

## Overview

**NiñoPulse Global** is an interactive ENSO research platform designed to make climate science easier to understand through official data, visual learning, global mapping and educational impact analysis.

The platform combines current ENSO monitoring, weekly Niño-region indices, seasonal probability tables, historical ONI/RONI series, live country weather, educational country profiles, exports, local alerts, a read-only public API and an Android-ready Capacitor project.

Instead of only showing raw climate numbers, NiñoPulse Global explains what ENSO phases can mean in the real world: rainfall changes, drought risk, floods, temperature shifts, agriculture impacts, ecosystem stress and economic vulnerability.

---

## What Is ENSO?

ENSO stands for **El Niño-Southern Oscillation**, a large-scale ocean-atmosphere pattern in the tropical Pacific.

It has three main phases:

- **El Niño**: warmer-than-average central/eastern Pacific sea surface temperatures;
- **La Niña**: cooler-than-average central/eastern Pacific sea surface temperatures;
- **Neutral**: conditions that do not meet El Niño or La Niña thresholds.

ENSO can influence weather patterns around the world, but its impacts vary by region, season and local climate systems.

---

## Main Features

- Bilingual interface: Portuguese and English.
- Mobile-first responsive layout from small phones to desktop screens.
- System, light and dark theme support.
- Official current ENSO phase display.
- Weekly Niño-region sea surface temperature anomaly indicators.
- Seasonal ENSO probability tables.
- Historical ONI and RONI data.
- Automatic warm and cold ENSO episode detection.
- Interactive global map.
- 30 country climate profiles.
- Current weather and seven-day forecast for representative monitoring locations.
- Favorites dashboard stored locally.
- Research mode for deeper analysis.
- Public API documentation page.
- CSV, JSON and PDF exports.
- Dashboard image sharing with web and Android support.
- Installable PWA with update and offline-ready prompts.
- Successful-response-only API caching through Workbox.
- Local foreground notifications for selected climate changes.
- Android support through Capacitor.
- Native Android share, filesystem, keyboard, splash screen and local notification integrations.
- API cache, source health, retry states and last-valid fallback behavior.
- GitHub Actions quality workflow.
- Optional Android debug artifact workflow.
- Optional Vercel deployment workflow.
- Automated tests with Node Test.
- Lint, typecheck, test and production build validation through one command.

---

## Scientific Boundary

NiñoPulse Global is educational and research-oriented. It is not an official forecasting agency, disaster-warning system or emergency alert service.

Current ENSO observations and probabilities come from NOAA/CPC sources. Current country weather comes from Open-Meteo and represents one selected monitoring location per country, not a national average, station observation or official warning.

Country impact profiles are educational historical summaries. They adapt to the current global ENSO phase, but they do not model local rainfall, crop losses, floods, droughts or economic damage.

The experimental **Signal Index** is a transparent heuristic for exploration. It is not machine learning, a calibrated probability, a confidence interval or an official NOAA product.

Users should always consult national meteorological agencies and emergency authorities for operational decisions.

---

## Data Sources

NiñoPulse Global focuses on ENSO-related monitoring and educational interpretation.

Main data areas include:

- official ENSO phase;
- weekly Niño-region indices;
- seasonal ENSO probabilities;
- historical ONI series;
- historical RONI series;
- detected warm and cold ENSO episodes;
- country-level educational impact scenarios;
- current weather for representative locations;
- seven-day forecasts for representative locations.

---

## Screenshots

### Main Dashboard
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/eebfa22f-474f-4023-bfbe-796cef29e835" />


### Global ENSO Map

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/b23d8016-9b90-4f31-9a5f-37022f5fc6fc" />


### Country Climate Profile

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/63d0dc93-df43-4ed1-a361-35dc7e8f7525" />

### ENSO Archive —— Complete History and Comparison

<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/246d2d16-e7f3-4a98-b53c-7358f5a7cf62" />

 
### Research Mode


### Mobile / Android View

<img width="390" height="844" alt="Mobile view" src="YOUR-IMAGE-LINK-HERE" />

---

## Public API

NiñoPulse Global includes read-only API routes for ENSO, history, country data and health checks.

```txt
GET /api/v1/enso
GET /api/v1/history
GET /api/v1/countries
GET /api/v1/live-countries
GET /api/v1/countries?risk=alto
GET /api/v1/countries?threat=seca
GET /api/v1/countries?q=brasil
GET /api/health
```

The deployed v1 routes include CORS support for the Android app.

Anonymous access is rate-limited by default. Named keys and distributed rate limiting can be configured through environment variables.

---

## API Behavior

- API routes are read-only.
- CORS is intentionally public for research and mobile app access.
- NOAA requests use timeout handling.
- Parsed NOAA output is validated before replacing last-valid data.
- Open-Meteo country weather is requested in a cached batch.
- Server responses include fallback behavior for temporary provider failures.
- Optional named API keys can be configured by the operator.
- Optional Upstash Redis support can provide distributed rate limiting in production.

---

## Tech Stack

### Frontend

- React 18
- React DOM
- React Router DOM
- Vite 6
- JavaScript / ESM
- TypeScript tooling
- Tailwind CSS
- next-themes
- Framer Motion
- Lucide React

### Data and Visualization

- Leaflet
- React Leaflet
- Recharts
- TanStack React Query
- html2canvas
- jsPDF

### Backend / API

- Node.js 20+
- Vercel Serverless Functions
- Local Vite API middleware for development
- NOAA/CPC parsers
- Open-Meteo live country weather service
- API utilities for CORS, caching and validation
- Optional Upstash Redis rate limiting

### Mobile / Native

- Capacitor 7
- Capacitor Android
- Capacitor App
- Capacitor Filesystem
- Capacitor Keyboard
- Capacitor Local Notifications
- Capacitor Share
- Capacitor Splash Screen
- Android project with branded splash and adaptive icons

### Quality and Tooling

- ESLint 9
- TypeScript 5 tooling
- Node Test
- GitHub Actions
- Vite PWA
- Workbox
- Android Gradle project

---

## Project Structure

```txt
android/                 Capacitor Android project
api/                     Vercel serverless API routes
server/                  NOAA parsers, cache, API helpers and local server
src/components/elnino/   dashboard, map, alerts, country and research components
src/components/system/   runtime, error boundary, PWA and connectivity components
src/contexts/            language and preferences contexts
src/hooks/               ENSO, history, live country and PWA hooks
src/lib/                 models, fallback data, formatting and runtime helpers
src/pages/               home, research, about, privacy and API docs pages
src/services/            export, share and notification services
public/icons/            PWA source icons
docs/                    methodology, privacy, security, validation and release docs
scripts/                 Android and build helper scripts
.github/workflows/       CI, Android and optional Vercel deployment workflows
```

---

## Requirements

- Node.js 20+
- npm
- Android Studio, only for Android builds
- Android SDK 35, only for Android builds
- A deployed HTTPS API URL for native Android builds

---

## Local Development

Install dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

The local Vite server includes development API middleware for ENSO, history, live countries and public v1 routes.

---

## Full Validation

Run the complete project validation:

```bash
npm run check
```

This command runs:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

---

## Production Build

```bash
npm run build
```

---

## Production Preview

```bash
npm run build
npm start
```

The production preview uses the local Node server from `server/index.js`.

---

## Tests

```bash
npm test
```

The test suite uses Node Test and covers:

- NOAA service behavior;
- history service behavior;
- API utilities;
- country API filtering;
- Vercel API behavior;
- live country weather service;
- experimental model logic;
- country outlook logic;
- runtime helpers.

---

## Lint and Typecheck

```bash
npm run lint
npm run typecheck
```

To auto-fix lint issues where possible:

```bash
npm run lint:fix
```

---

## Deploy to Vercel

Import the repository into Vercel and keep these folders/files at the repository root:

```txt
api/
server/
src/
public/
vercel.json
package.json
```

Recommended Vercel settings:

```txt
Framework: Vite
Build command: npm run build
Output directory: dist
Node.js: 20+
```

No NOAA credential is required.

---

## Environment Variables

Optional variables:

```txt
NOAA_CACHE_TTL_MS=600000
HISTORY_CACHE_TTL_MS=21600000
NINOPULSE_API_KEYS=
NINOPULSE_API_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

### Meaning

- `NOAA_CACHE_TTL_MS`: current NOAA data cache duration.
- `HISTORY_CACHE_TTL_MS`: historical data cache duration.
- `NINOPULSE_API_KEYS`: optional JSON map for named API keys and per-key limits.
- `NINOPULSE_API_KEY`: optional legacy single shared key.
- `UPSTASH_REDIS_REST_URL`: optional Upstash Redis URL for distributed rate limiting.
- `UPSTASH_REDIS_REST_TOKEN`: optional Upstash Redis token.

Example named API keys:

```json
{
  "school-lab": {
    "key": "research-key-1",
    "limit": 600
  },
  "partner": "research-key-2"
}
```

---

## Android Build

The native Android app must call a deployed HTTPS API because Vercel serverless routes do not run inside the APK.

Copy the Android environment file:

```bash
cp .env.android.example .env.android
```

Set your deployed API URL:

```txt
VITE_API_BASE_URL=https://your-project.vercel.app
```

Prepare the Android project:

```bash
npm run android:config
npm run build
npm run android:sync
npm run android:open
```

On Windows:

```bat
npm run android:prepare:windows
npm run android:open
```

Run on Android:

```bash
npm run android:run
```

Build debug APK:

```bash
npm run android:apk
```

Output:

```txt
android/app/build/outputs/apk/debug/app-debug.apk
```

Build Play Store AAB:

```bash
npm run android:aab
```

Output:

```txt
android/app/build/outputs/bundle/release/app-release.aab
```

Never commit `.env.android`, keystores, `android/keystore.properties`, `.jks` files or Play Console credentials.

---

## Android Release Notes

Before publishing an Android build:

- deploy the web/API project to an HTTPS domain;
- configure `.env.android` with the production API URL;
- run `npm run check`;
- run `npm run android:config`;
- run `npm run build`;
- run `npm run android:sync`;
- test on a physical Android phone and emulator;
- test Portuguese and English;
- test light, dark and system themes;
- test the map, country sheets and research mode;
- test offline shell behavior;
- test exports and image sharing;
- test notification permission behavior;
- build the final AAB with the same upload key.

---

## PWA Features

NiñoPulse Global includes installable PWA support through Vite PWA and Workbox.

Supported PWA behavior:

- generated Workbox precache;
- install prompt logic;
- update-ready prompt;
- offline-ready prompt;
- navigation fallback;
- API runtime caching;
- map tile caching;
- cleanup of outdated caches;
- standalone display mode.

---

## CI/CD

The repository includes GitHub Actions workflows for quality validation, optional Android artifact generation and optional Vercel deployment.

### CI workflow

Runs on push to `main` and on pull requests:

```txt
npm ci
npm run lint
npm run typecheck
npm test
npm run build
```

### Android workflow

Can build a debug APK artifact when Android-related files change or when triggered manually.

### Vercel deployment workflow

Can run validation and deploy a prebuilt production project to Vercel when manually triggered with the required Vercel secrets.

---

## Security Notes

- The app has no password login or cloud account database.
- Favorites, language, theme and alert choices are stored locally.
- API endpoints are read-only.
- CORS is intentionally public for research and app usage.
- Optional API keys are operator-managed.
- Optional Upstash Redis provides distributed rate limiting.
- Without Upstash, rate limiting is process-local and should be treated as basic protection only.
- Cleartext HTTP traffic is disabled in Android.
- Android backups are disabled for device-local preferences.
- Upload keys and passwords must remain outside Git.

---

## Privacy Notes

NiñoPulse Global does not require account creation, login, password, personal documents, precise GPS location, banking data or advertising profiles.

Preferences such as language, theme, favorites and selected alerts may be stored locally on the device or browser.

External services may process technical requests needed to load maps, weather, climate data and hosting infrastructure according to their own policies.

---

## Validation Snapshot

The 2.3.0-beta.1 validation report documents:

- lint passed;
- typecheck passed;
- automated tests passed;
- Vite production build passed;
- PWA generation completed;
- Capacitor Android synchronization completed;
- production dependency audit showed no known vulnerabilities at validation time;
- heavy map, history, PDF and image-export code is split into on-demand chunks.

---

## Deliberately Not Faked

- There is no password login.
- There is no cloud account synchronization.
- Preferences and favorites are stored locally.
- Alerts are local and checked while the app is active.
- Remote push notifications are not included.
- API keys are configured by the operator, not automatically issued through a user portal.
- Country scenarios are not national forecasts.
- The Signal Index is not an official prediction model.
- Current country weather is not a national average.

---

## Roadmap

Possible future improvements:

- richer city-level exploration;
- more country profiles;
- additional official climate datasets;
- improved accessibility testing;
- more educational explainers;
- downloadable classroom material;
- optional backend dashboard for operator-managed API keys;
- more automated tests for UI behavior;
- expanded Android device QA.

---

## Changelog Highlights

### 2.3.0-beta.1

- Mobile hardening for Android WebView.
- Dynamic viewport handling.
- Keyboard-aware layout.
- Native Android back behavior.
- Branded splash behavior.
- Connection-lost/restored messaging.
- PWA update/offline-ready prompts.
- Deferred heavy dashboard modules.
- Improved Leaflet map behavior.
- Mobile research cards.
- Android multi-window support.
- Updated Android version code.
- Release QA documentation.

### 2.2.0

- Live current conditions and seven-day forecasts for 30 countries.
- Open-Meteo batch weather retrieval.
- Last-valid server fallback.
- Browser snapshot fallback.
- Country card weather details.
- `/api/live-countries` and `/api/v1/live-countries`.

### 2.1.0

- Official NOAA RONI/ONI historical retrieval.
- Automatic episode detection.
- Transparent experimental Signal Index.
- Dynamic educational country scenarios.
- Dashboard-image sharing.
- Vite PWA / Workbox migration.
- Capacitor Android project.
- Vercel `/api/v1/*` routes.
- Named API keys and optional Upstash rate limiting.

### 2.0.0

- Initial bilingual mobile-first dashboard.
- Current NOAA data.
- PWA foundation.
- Exports.
- Favorites.
- Research mode.
- Read-only API.

---

## Why This Project Matters

El Niño and La Niña can affect rainfall, droughts, floods, heat patterns, agriculture, ecosystems, infrastructure and economies across the world.

NiñoPulse Global was built to make ENSO science more accessible by combining official monitoring, historical climate data, educational explanations, maps, exports and country-based impact context in one interface.

The goal is to help students, teachers and curious users understand how ocean-atmosphere patterns can influence real life.

---

## Author

**Samuel Borba**

Student developer from Brazil focused on climate science, educational technology, data visualization, programming and real-world impact.

---

## Repository Notes

This repository is currently marked as a private package in `package.json`.

If the project becomes open source, add a real license file and update the license badge accordingly.
