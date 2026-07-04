import { useQuery } from "@tanstack/react-query";

export const LOCAL_WEATHER_COUNTRIES = [
  { iso2: "BR", labelPt: "Brasil", labelEn: "Brazil", apiName: "Brazil" },
  { iso2: "US", labelPt: "Estados Unidos", labelEn: "United States", apiName: "United States" },
  { iso2: "CA", labelPt: "Canadá", labelEn: "Canada", apiName: "Canada" },
  { iso2: "MX", labelPt: "México", labelEn: "Mexico", apiName: "Mexico" },
  { iso2: "AR", labelPt: "Argentina", labelEn: "Argentina", apiName: "Argentina" },
  { iso2: "CL", labelPt: "Chile", labelEn: "Chile", apiName: "Chile" },
  { iso2: "PE", labelPt: "Peru", labelEn: "Peru", apiName: "Peru" },
  { iso2: "CO", labelPt: "Colômbia", labelEn: "Colombia", apiName: "Colombia" },
  { iso2: "AU", labelPt: "Austrália", labelEn: "Australia", apiName: "Australia" },
  { iso2: "NZ", labelPt: "Nova Zelândia", labelEn: "New Zealand", apiName: "New Zealand" },
  { iso2: "CN", labelPt: "China", labelEn: "China", apiName: "China" },
  { iso2: "IN", labelPt: "Índia", labelEn: "India", apiName: "India" },
  { iso2: "JP", labelPt: "Japão", labelEn: "Japan", apiName: "Japan" },
  { iso2: "ID", labelPt: "Indonésia", labelEn: "Indonesia", apiName: "Indonesia" },
  { iso2: "PH", labelPt: "Filipinas", labelEn: "Philippines", apiName: "Philippines" },
  { iso2: "ZA", labelPt: "África do Sul", labelEn: "South Africa", apiName: "South Africa" },
  { iso2: "EG", labelPt: "Egito", labelEn: "Egypt", apiName: "Egypt" },
  { iso2: "NG", labelPt: "Nigéria", labelEn: "Nigeria", apiName: "Nigeria" },
  { iso2: "KE", labelPt: "Quênia", labelEn: "Kenya", apiName: "Kenya" },
  { iso2: "GB", labelPt: "Reino Unido", labelEn: "United Kingdom", apiName: "United Kingdom" },
  { iso2: "FR", labelPt: "França", labelEn: "France", apiName: "France" },
  { iso2: "DE", labelPt: "Alemanha", labelEn: "Germany", apiName: "Germany" },
  { iso2: "ES", labelPt: "Espanha", labelEn: "Spain", apiName: "Spain" },
  { iso2: "IT", labelPt: "Itália", labelEn: "Italy", apiName: "Italy" },
  { iso2: "RU", labelPt: "Rússia", labelEn: "Russia", apiName: "Russia" },
  { iso2: "SA", labelPt: "Arábia Saudita", labelEn: "Saudi Arabia", apiName: "Saudi Arabia" },
  { iso2: "PK", labelPt: "Paquistão", labelEn: "Pakistan", apiName: "Pakistan" },
  { iso2: "BD", labelPt: "Bangladesh", labelEn: "Bangladesh", apiName: "Bangladesh" },
  { iso2: "TH", labelPt: "Tailândia", labelEn: "Thailand", apiName: "Thailand" },
  { iso2: "VN", labelPt: "Vietnã", labelEn: "Vietnam", apiName: "Vietnam" },
];

async function readJsonResponse(response, fallbackMessage) {
  if (!response.ok) throw new Error(`${fallbackMessage} (HTTP ${response.status})`);
  const json = await response.json();
  if (json?.error) throw new Error(json.msg || json.error || fallbackMessage);
  return json;
}

async function postCountriesNow(path, payload, signal) {
  const response = await fetch(`https://countriesnow.space/api/v0.1/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal,
  });
  return readJsonResponse(response, "CountriesNow request failed");
}

export async function fetchCountryStates({ queryKey, signal }) {
  const [, country] = queryKey;
  if (!country) return [];
  const json = await postCountriesNow("countries/states", { country }, signal);
  const states = Array.isArray(json?.data?.states) ? json.data.states : [];
  return states.map((state) => (typeof state === "string" ? state : state.name)).filter(Boolean).sort((a, b) => a.localeCompare(b));
}

export async function fetchStateCities({ queryKey, signal }) {
  const [, country, state] = queryKey;
  if (!country || !state) return [];
  const json = await postCountriesNow("countries/state/cities", { country, state }, signal);
  const cities = Array.isArray(json?.data) ? json.data : [];
  return [...new Set(cities.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function chooseGeocodingResult(results, countryCode, selectedState) {
  const normalizedState = String(selectedState || "").trim().toLowerCase();
  return (
    results.find((item) => item.country_code === countryCode && String(item.admin1 || "").trim().toLowerCase() === normalizedState) ||
    results.find((item) => item.country_code === countryCode) ||
    results[0] ||
    null
  );
}

export async function fetchLocalWeather({ queryKey, signal }) {
  const [, { city, state, country, countryCode, countryLabel }] = queryKey;
  if (!city || !country) return null;

  const geoUrl = new URL("https://geocoding-api.open-meteo.com/v1/search");
  geoUrl.searchParams.set("name", city);
  geoUrl.searchParams.set("count", "20");
  geoUrl.searchParams.set("language", "en");
  geoUrl.searchParams.set("format", "json");

  const geoResponse = await fetch(geoUrl.toString(), { signal });
  const geoJson = await readJsonResponse(geoResponse, "Geocoding request failed");
  const results = Array.isArray(geoJson?.results) ? geoJson.results : [];
  const location = chooseGeocodingResult(results, countryCode, state);
  if (!location) throw new Error("City coordinates were not found.");

  const forecastUrl = new URL("https://api.open-meteo.com/v1/forecast");
  forecastUrl.searchParams.set("latitude", location.latitude);
  forecastUrl.searchParams.set("longitude", location.longitude);
  forecastUrl.searchParams.set("current", [
    "temperature_2m",
    "relative_humidity_2m",
    "apparent_temperature",
    "is_day",
    "precipitation",
    "rain",
    "weather_code",
    "cloud_cover",
    "wind_speed_10m",
    "wind_gusts_10m",
  ].join(","));
  forecastUrl.searchParams.set("daily", [
    "weather_code",
    "temperature_2m_max",
    "temperature_2m_min",
    "precipitation_sum",
    "precipitation_probability_max",
    "wind_speed_10m_max",
  ].join(","));
  forecastUrl.searchParams.set("timezone", "auto");
  forecastUrl.searchParams.set("forecast_days", "7");
  forecastUrl.searchParams.set("temperature_unit", "celsius");
  forecastUrl.searchParams.set("wind_speed_unit", "kmh");
  forecastUrl.searchParams.set("precipitation_unit", "mm");

  const forecastResponse = await fetch(forecastUrl.toString(), { signal });
  const forecastJson = await readJsonResponse(forecastResponse, "Weather forecast request failed");
  const dailyTimes = Array.isArray(forecastJson?.daily?.time) ? forecastJson.daily.time : [];
  const forecast = dailyTimes.map((date, index) => ({
    date,
    weatherCode: forecastJson.daily.weather_code?.[index] ?? null,
    temperatureMax: forecastJson.daily.temperature_2m_max?.[index] ?? null,
    temperatureMin: forecastJson.daily.temperature_2m_min?.[index] ?? null,
    precipitationSum: forecastJson.daily.precipitation_sum?.[index] ?? null,
    precipitationProbability: forecastJson.daily.precipitation_probability_max?.[index] ?? null,
    windSpeedMax: forecastJson.daily.wind_speed_10m_max?.[index] ?? null,
  }));

  return {
    location: {
      name: location.name || city,
      admin1: location.admin1 || state,
      country: countryLabel || country,
      timezone: location.timezone || "GMT",
      timezoneAbbreviation: location.timezone_abbreviation || "GMT",
      latitude: location.latitude,
      longitude: location.longitude,
    },
    current: {
      time: forecastJson.current?.time || new Date().toISOString(),
      intervalSeconds: forecastJson.current?.interval || null,
      temperature: forecastJson.current?.temperature_2m ?? null,
      apparentTemperature: forecastJson.current?.apparent_temperature ?? null,
      humidity: forecastJson.current?.relative_humidity_2m ?? null,
      precipitation: forecastJson.current?.precipitation ?? null,
      rain: forecastJson.current?.rain ?? null,
      weatherCode: forecastJson.current?.weather_code ?? null,
      cloudCover: forecastJson.current?.cloud_cover ?? null,
      windSpeed: forecastJson.current?.wind_speed_10m ?? null,
      windGusts: forecastJson.current?.wind_gusts_10m ?? null,
      isDay: Number(forecastJson.current?.is_day) === 1,
    },
    today: forecast[0] || null,
    forecast,
    source: "Open-Meteo",
    retrievedAt: new Date().toISOString(),
  };
}

export function useCountryStates(country) {
  return useQuery({
    queryKey: ["local-weather-states", country],
    queryFn: fetchCountryStates,
    enabled: Boolean(country),
    staleTime: 24 * 60 * 60 * 1000,
  });
}

export function useStateCities(country, state) {
  return useQuery({
    queryKey: ["local-weather-cities", country, state],
    queryFn: fetchStateCities,
    enabled: Boolean(country && state),
    staleTime: 24 * 60 * 60 * 1000,
  });
}

export function useLocalWeatherQuery(selection) {
  return useQuery({
    queryKey: ["local-weather", selection],
    queryFn: fetchLocalWeather,
    enabled: Boolean(selection?.country && selection?.state && selection?.city),
    staleTime: 10 * 60 * 1000,
  });
}
