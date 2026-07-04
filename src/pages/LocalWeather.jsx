import React, { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  Cloud,
  CloudDrizzle,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSun,
  Droplets,
  ExternalLink,
  MapPin,
  RefreshCw,
  Snowflake,
  Sun,
  Thermometer,
  Wind,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { LOCAL_WEATHER_COUNTRIES, useCountryStates, useLocalWeatherQuery, useStateCities } from "@/hooks/useLocalWeather";
import { roundWeatherValue, weatherCodeKey } from "@/lib/weatherCodes";

function iconForWeather(key, isDay) {
  if (key === "clear") return isDay ? Sun : CloudSun;
  if (["mostlyClear", "partlyCloudy"].includes(key)) return CloudSun;
  if (key === "overcast") return Cloud;
  if (key === "fog") return CloudFog;
  if (["drizzle", "freezingDrizzle"].includes(key)) return CloudDrizzle;
  if (["rain", "freezingRain", "showers"].includes(key)) return CloudRain;
  if (["snow", "snowShowers"].includes(key)) return Snowflake;
  if (["thunderstorm", "thunderstormHail"].includes(key)) return CloudLightning;
  return Cloud;
}

const labels = {
  pt: {
    pageTitle: "Clima local por cidade",
    pageSubtitle: "Escolha país, estado e cidade para cruzar clima atual com contexto ENSO sem confundir isso com alerta oficial.",
    selectCountry: "Selecione um país",
    selectState: "Selecione um estado ou região",
    selectCity: "Selecione uma cidade",
    loading: "Carregando…",
    loadingStates: "Buscando estados/regiões…",
    loadingCities: "Buscando cidades…",
    loadingWeather: "Atualizando clima local…",
    noStates: "Nenhum estado encontrado para esse país.",
    noCities: "Nenhuma cidade encontrada para essa região.",
    currentConditions: "Condições atuais",
    humidity: "Umidade",
    precipitation: "Precipitação",
    wind: "Vento",
    feelsLike: "Sensação",
    highLow: "Máx. / mín.",
    forecastTitle: "Próximos 7 dias",
    retry: "Tentar novamente",
    reset: "Limpar seleção",
    sourceTitle: "Fontes e limite científico",
    sourceText: "Geocodificação e previsão vêm do Open-Meteo; divisões administrativas vêm do CountriesNow. Isto é clima local atual, não previsão oficial nem alerta de emergência.",
    methodology: "Ver metodologia",
    openMeteo: "Open-Meteo",
    countriesNow: "CountriesNow",
    errorTitle: "Não consegui carregar esses dados agora.",
    pickHint: "Comece pelo país. A lista de estados e cidades fica em cache para deixar a navegação mais rápida.",
  },
  en: {
    pageTitle: "Local city weather",
    pageSubtitle: "Choose a country, state and city to compare current weather with ENSO context without treating it as an official alert.",
    selectCountry: "Select a country",
    selectState: "Select a state or province",
    selectCity: "Select a city",
    loading: "Loading…",
    loadingStates: "Loading states/provinces…",
    loadingCities: "Loading cities…",
    loadingWeather: "Refreshing local weather…",
    noStates: "No states were found for this country.",
    noCities: "No cities were found for this region.",
    currentConditions: "Current conditions",
    humidity: "Humidity",
    precipitation: "Precipitation",
    wind: "Wind",
    feelsLike: "Feels like",
    highLow: "High / low",
    forecastTitle: "Next 7 days",
    retry: "Try again",
    reset: "Clear selection",
    sourceTitle: "Sources and scientific boundary",
    sourceText: "Geocoding and forecasts come from Open-Meteo; administrative divisions come from CountriesNow. This is current local weather, not an official forecast or emergency warning.",
    methodology: "View methodology",
    openMeteo: "Open-Meteo",
    countriesNow: "CountriesNow",
    errorTitle: "I could not load this data right now.",
    pickHint: "Start with the country. State and city lists are cached to make navigation faster.",
  },
};

const weatherDescriptions = {
  clear: { pt: "Céu limpo", en: "Clear sky" },
  mostlyClear: { pt: "Pred. limpo", en: "Mostly clear" },
  partlyCloudy: { pt: "Parcial nublado", en: "Partly cloudy" },
  overcast: { pt: "Nublado", en: "Overcast" },
  fog: { pt: "Nevoeiro", en: "Fog" },
  drizzle: { pt: "Garoa", en: "Drizzle" },
  freezingDrizzle: { pt: "Garoa cong.", en: "Freezing drizzle" },
  rain: { pt: "Chuva", en: "Rain" },
  freezingRain: { pt: "Chuva cong.", en: "Freezing rain" },
  snow: { pt: "Neve", en: "Snow" },
  showers: { pt: "Pancadas", en: "Showers" },
  snowShowers: { pt: "Pancadas neve", en: "Snow showers" },
  thunderstorm: { pt: "Trovoada", en: "Thunderstorm" },
  thunderstormHail: { pt: "Trovoada granizo", en: "Thunderstorm hail" },
  unknown: { pt: "Cond. desconhecida", en: "Unknown" },
};

function formatDate(dateStr, language) {
  if (!dateStr) return "";
  const date = new Date(`${dateStr}T00:00:00`);
  return date.toLocaleDateString(language === "pt" ? "pt-BR" : "en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function ErrorCallout({ title, message, retryLabel, onRetry }) {
  return (
    <div className="mt-3 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-sm">
      <div className="flex items-start gap-3">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
        <div className="min-w-0 flex-1">
          <p className="font-bold text-foreground">{title}</p>
          {message && <p className="mt-1 break-words text-muted-foreground">{message}</p>}
          {onRetry && (
            <button type="button" onClick={onRetry} className="control-button mt-3">
              <RefreshCw className="h-4 w-4" /> {retryLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Metric({ icon: Icon, value, label }) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-3">
      <Icon className="h-4 w-4 text-primary" />
      <p className="mt-2 text-sm font-bold">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p>
    </div>
  );
}

export default function LocalWeather() {
  const { language } = useLanguage();
  const l = labels[language] || labels.en;
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const selectedCountryData = LOCAL_WEATHER_COUNTRIES.find((country) => country.apiName === selectedCountry);
  const statesQuery = useCountryStates(selectedCountry);
  const citiesQuery = useStateCities(selectedCountry, selectedState);
  const countryLabel = selectedCountryData ? (language === "pt" ? selectedCountryData.labelPt : selectedCountryData.labelEn) : selectedCountry;

  const weatherSelection = useMemo(() => ({
    city: selectedCity,
    state: selectedState,
    country: selectedCountry,
    countryCode: selectedCountryData?.iso2 || "",
    countryLabel,
  }), [countryLabel, selectedCity, selectedCountry, selectedCountryData?.iso2, selectedState]);

  const weatherQuery = useLocalWeatherQuery(weatherSelection);
  const weather = weatherQuery.data;

  useEffect(() => {
    setSelectedState("");
    setSelectedCity("");
  }, [selectedCountry]);

  useEffect(() => {
    setSelectedCity("");
  }, [selectedState]);

  function resetSelection() {
    setSelectedCountry("");
    setSelectedState("");
    setSelectedCity("");
  }

  return (
    <div className="min-h-[100dvh] bg-background pb-24 pt-20 md:pb-12">
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <section className="surface-card overflow-hidden p-5 sm:p-7">
            <p className="section-kicker">NiñoPulse Local</p>
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{l.pageTitle}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{l.pageSubtitle}</p>

            <div className="mt-6 grid gap-4">
              <div>
                <label htmlFor="country-select" className="mb-1 block text-sm font-semibold">{l.selectCountry}</label>
                <select
                  id="country-select"
                  className="w-full rounded-xl border border-border bg-card px-3 py-3 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                  value={selectedCountry}
                  onChange={(event) => setSelectedCountry(event.target.value || "")}
                >
                  <option value="">{l.selectCountry}</option>
                  {LOCAL_WEATHER_COUNTRIES.map((country) => (
                    <option key={country.iso2} value={country.apiName}>
                      {language === "pt" ? country.labelPt : country.labelEn}
                    </option>
                  ))}
                </select>
              </div>

              {selectedCountry && (
                <div>
                  <label htmlFor="state-select" className="mb-1 block text-sm font-semibold">{l.selectState}</label>
                  {statesQuery.isLoading ? (
                    <div className="surface-card flex min-h-12 items-center gap-2 px-3 text-sm text-muted-foreground">
                      <RefreshCw className="h-4 w-4 animate-spin" /> {l.loadingStates}
                    </div>
                  ) : statesQuery.isError ? (
                    <ErrorCallout title={l.errorTitle} message={statesQuery.error?.message} retryLabel={l.retry} onRetry={() => statesQuery.refetch()} />
                  ) : statesQuery.data?.length ? (
                    <select
                      id="state-select"
                      className="w-full rounded-xl border border-border bg-card px-3 py-3 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                      value={selectedState}
                      onChange={(event) => setSelectedState(event.target.value || "")}
                    >
                      <option value="">{l.selectState}</option>
                      {statesQuery.data.map((stateName) => (
                        <option key={stateName} value={stateName}>{stateName}</option>
                      ))}
                    </select>
                  ) : (
                    <p className="rounded-xl border border-border bg-secondary/40 px-3 py-3 text-sm text-muted-foreground">{l.noStates}</p>
                  )}
                </div>
              )}

              {selectedState && (
                <div>
                  <label htmlFor="city-select" className="mb-1 block text-sm font-semibold">{l.selectCity}</label>
                  {citiesQuery.isLoading ? (
                    <div className="surface-card flex min-h-12 items-center gap-2 px-3 text-sm text-muted-foreground">
                      <RefreshCw className="h-4 w-4 animate-spin" /> {l.loadingCities}
                    </div>
                  ) : citiesQuery.isError ? (
                    <ErrorCallout title={l.errorTitle} message={citiesQuery.error?.message} retryLabel={l.retry} onRetry={() => citiesQuery.refetch()} />
                  ) : citiesQuery.data?.length ? (
                    <select
                      id="city-select"
                      className="w-full rounded-xl border border-border bg-card px-3 py-3 text-sm outline-none transition focus:border-primary/50 focus:ring-2 focus:ring-primary/15"
                      value={selectedCity}
                      onChange={(event) => setSelectedCity(event.target.value || "")}
                    >
                      <option value="">{l.selectCity}</option>
                      {citiesQuery.data.map((cityName) => (
                        <option key={cityName} value={cityName}>{cityName}</option>
                      ))}
                    </select>
                  ) : (
                    <p className="rounded-xl border border-border bg-secondary/40 px-3 py-3 text-sm text-muted-foreground">{l.noCities}</p>
                  )}
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <button type="button" onClick={resetSelection} className="secondary-action min-h-10 px-4 text-xs">
                {l.reset}
              </button>
              <Link to="/research" className="secondary-action min-h-10 px-4 text-xs">
                {l.methodology}
              </Link>
            </div>
          </section>

          <aside className="surface-card p-5 sm:p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 className="font-display text-lg font-bold">{l.sourceTitle}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{selectedCity ? l.sourceText : l.pickHint}</p>
              </div>
            </div>
            <div className="mt-5 grid gap-2 text-xs sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <a href="https://open-meteo.com/" target="_blank" rel="noreferrer" className="tool-button justify-between">
                {l.openMeteo} <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a href="https://countriesnow.space/" target="_blank" rel="noreferrer" className="tool-button justify-between">
                {l.countriesNow} <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </aside>
        </div>

        {weatherQuery.isLoading && selectedCity && (
          <div className="surface-card mt-8 flex min-h-24 items-center gap-3 p-5 text-sm text-muted-foreground">
            <RefreshCw className="h-4 w-4 animate-spin text-primary" /> {l.loadingWeather}
          </div>
        )}

        {weatherQuery.isError && selectedCity && (
          <ErrorCallout title={l.errorTitle} message={weatherQuery.error?.message} retryLabel={l.retry} onRetry={() => weatherQuery.refetch()} />
        )}

        {weather && !weatherQuery.isLoading && (
          <section className="mt-8 rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 via-card to-background p-5 shadow-sm sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    {l.currentConditions}
                  </span>
                  <span className="text-xs text-muted-foreground">{weather.location.name} · {weather.location.admin1}</span>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold">{weather.location.country}</h3>
              </div>
              <button type="button" onClick={() => weatherQuery.refetch()} className="control-button" aria-label={l.retry} title={l.retry}>
                <RefreshCw className={`h-4 w-4 ${weatherQuery.isFetching ? "animate-spin" : ""}`} />
              </button>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                {(() => {
                  const key = weatherCodeKey(weather.current.weatherCode);
                  const Icon = iconForWeather(key, weather.current.isDay);
                  return <Icon className="h-9 w-9" />;
                })()}
              </span>
              <div>
                <p className="font-display text-5xl font-bold tracking-tight">{roundWeatherValue(weather.current.temperature)}°C</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {(() => {
                    const key = weatherCodeKey(weather.current.weatherCode);
                    return (weatherDescriptions[key] ?? weatherDescriptions.unknown)[language] || weatherDescriptions.unknown.en;
                  })()}
                </p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Metric icon={Thermometer} value={`${roundWeatherValue(weather.current.apparentTemperature)}°C`} label={l.feelsLike} />
              <Metric icon={Droplets} value={`${roundWeatherValue(weather.current.humidity)}%`} label={l.humidity} />
              <Metric icon={CloudRain} value={`${roundWeatherValue(weather.current.precipitation)} mm`} label={l.precipitation} />
              <Metric icon={Wind} value={`${roundWeatherValue(weather.current.windSpeed)} km/h`} label={l.wind} />
            </div>

            <div className="mt-5 flex flex-wrap justify-between gap-2 rounded-xl bg-secondary/45 px-4 py-3 text-xs text-muted-foreground">
              <span>
                {l.highLow}: <strong className="text-foreground">{roundWeatherValue(weather.today?.temperatureMax)}° / {roundWeatherValue(weather.today?.temperatureMin)}°</strong>
              </span>
              <span>{weather.location.timezoneAbbreviation || weather.location.timezone}</span>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{l.forecastTitle}</h4>
                <span className="text-[10px] text-muted-foreground">{weather.source}</span>
              </div>
              <div className="scrollbar-none mt-3 flex snap-x snap-proximity gap-2 overflow-x-auto pb-2">
                {weather.forecast.map((day) => {
                  const key = weatherCodeKey(day.weatherCode);
                  const DayIcon = iconForWeather(key, true);
                  return (
                    <div key={day.date} className="min-w-[96px] snap-start rounded-2xl bg-secondary/45 p-3 text-center text-xs">
                      <p className="font-semibold">{formatDate(day.date, language)}</p>
                      <DayIcon className="mx-auto my-1 h-6 w-6 text-primary" />
                      <p className="font-semibold">{roundWeatherValue(day.temperatureMax)}° / {roundWeatherValue(day.temperatureMin)}°</p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">{Number(day.precipitationProbability ?? 0).toFixed(0)}% {l.precipitation.toLowerCase()}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="mt-5 text-[11px] leading-5 text-muted-foreground">{l.sourceText}</p>
          </section>
        )}
      </div>
    </div>
  );
}
