import React, { useMemo, useState } from "react";
import { AlertTriangle, ArrowRight, Gauge, SlidersHorizontal, Thermometer, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { countries, riskLabels } from "@/lib/elNinoData";
import { localizeCountries } from "@/lib/localizedContent";

const RISK_WEIGHT = { baixo: 1, moderado: 2, alto: 3, extremo: 4 };
const threatCopy = {
  pt: {
    seca: "seca",
    enchentes: "enchentes",
    calor: "calor extremo",
    agricultura: "agricultura",
    queimadas: "queimadas",
    "chuva intensa": "chuva intensa",
  },
  en: {
    seca: "drought",
    enchentes: "flooding",
    calor: "extreme heat",
    agricultura: "agriculture",
    queimadas: "wildfires",
    "chuva intensa": "heavy rain",
  },
};

function classifyScenario(value, language) {
  const abs = Math.abs(value);
  if (value >= 1.5) return { phase: "El Niño", intensity: language === "pt" ? "forte" : "strong", color: "text-accent", icon: Thermometer, severity: 1 };
  if (value >= 0.5) return { phase: "El Niño", intensity: language === "pt" ? "moderado" : "moderate", color: "text-accent", icon: Thermometer, severity: Math.max(0.45, abs / 1.8) };
  if (value <= -1.5) return { phase: "La Niña", intensity: language === "pt" ? "forte" : "strong", color: "text-chart-2", icon: Waves, severity: 0.9 };
  if (value <= -0.5) return { phase: "La Niña", intensity: language === "pt" ? "moderada" : "moderate", color: "text-chart-2", icon: Waves, severity: Math.max(0.4, abs / 1.8) };
  return { phase: language === "pt" ? "Neutro" : "Neutral", intensity: language === "pt" ? "baixo sinal" : "low signal", color: "text-primary", icon: Gauge, severity: 0.25 };
}

function threatList(country, language) {
  const names = country.ameacas.slice(0, 3).map((threat) => threatCopy[language]?.[threat] || threat);
  return new Intl.ListFormat(language === "pt" ? "pt-BR" : "en", { style: "short", type: "conjunction" }).format(names);
}

export default function EnsoScenarioSimulator() {
  const { language } = useLanguage();
  const [anomaly, setAnomaly] = useState(1.2);
  const labels = language === "pt" ? {
    kicker: "SIMULADOR ENSO",
    title: "Teste cenários antes de olhar o mapa",
    subtitle: "Mova a anomalia Niño 3.4 para ver quais países do banco educacional ficariam mais expostos historicamente. É uma simulação didática, não uma previsão oficial.",
    slider: "Anomalia Niño 3.4 hipotética",
    topRisk: "Países mais sensíveis nesse cenário",
    scenario: "Cenário hipotético",
    signal: "Sinal combinado",
    viewMap: "Ver no mapa",
    boundary: "Uso correto",
    boundaryText: "O simulador usa pesos simples de risco histórico + intensidade do cenário. Ele não prevê chuva, safra, desastres ou impactos econômicos.",
  } : {
    kicker: "ENSO SIMULATOR",
    title: "Test scenarios before opening the map",
    subtitle: "Move the hypothetical Niño 3.4 anomaly to see which educational country profiles would become most exposed historically. This is a learning simulator, not an official forecast.",
    slider: "Hypothetical Niño 3.4 anomaly",
    topRisk: "Most sensitive countries in this scenario",
    scenario: "Hypothetical scenario",
    signal: "Combined signal",
    viewMap: "View map",
    boundary: "Correct use",
    boundaryText: "The simulator uses simple historical-risk weights + scenario intensity. It does not forecast rainfall, crop losses, disasters or economic impacts.",
  };

  const scenario = classifyScenario(anomaly, language);
  const localizedCountries = useMemo(() => localizeCountries(countries, language), [language]);
  const rankedCountries = useMemo(() => localizedCountries
    .map((country) => {
      const riskWeight = RISK_WEIGHT[country.nivelDeRisco] || 1;
      const threatBoost = country.ameacas.includes("seca") || country.ameacas.includes("enchentes") ? 6 : 0;
      const signal = Math.round(Math.min(100, riskWeight * 22 * scenario.severity + threatBoost));
      return { ...country, signal };
    })
    .sort((a, b) => b.signal - a.signal)
    .slice(0, 4), [localizedCountries, scenario.severity]);

  const ScenarioIcon = scenario.icon;

  return (
    <section className="mx-auto max-w-7xl px-4 py-14" id="simulador">
      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <div className="surface-card overflow-hidden p-5 sm:p-6">
          <p className="section-kicker">{labels.kicker}</p>
          <h2 className="section-title">{labels.title}</h2>
          <p className="section-description">{labels.subtitle}</p>

          <div className="mt-7 rounded-2xl border border-border bg-secondary/35 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{labels.slider}</p>
                <p className="mt-1 font-display text-3xl font-bold">{anomaly > 0 ? "+" : ""}{anomaly.toFixed(1)}°C</p>
              </div>
              <span className={`inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-2 text-xs font-bold ${scenario.color}`}>
                <ScenarioIcon className="h-4 w-4" /> {scenario.phase} · {scenario.intensity}
              </span>
            </div>
            <input
              type="range"
              min="-2.5"
              max="2.5"
              step="0.1"
              value={anomaly}
              onChange={(event) => setAnomaly(Number(event.target.value))}
              className="mt-5 w-full accent-primary"
              aria-label={labels.slider}
            />
            <div className="mt-2 flex justify-between text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              <span>La Niña</span>
              <span>{language === "pt" ? "Neutro" : "Neutral"}</span>
              <span>El Niño</span>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-accent/25 bg-accent/10 p-4 text-sm">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <div>
                <p className="font-bold text-foreground">{labels.boundary}</p>
                <p className="mt-1 leading-6 text-muted-foreground">{labels.boundaryText}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="surface-card p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="section-kicker mb-1">{labels.scenario}</p>
              <h3 className="font-display text-2xl font-bold">{labels.topRisk}</h3>
            </div>
            <SlidersHorizontal className="h-5 w-5 text-primary" />
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {rankedCountries.map((country) => (
              <article key={country.id} className="rounded-2xl border border-border bg-background/70 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-display text-lg font-bold">{country.nome}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{threatList(country, language)}</p>
                  </div>
                  <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-bold text-primary">{country.signal}%</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${country.signal}%` }} />
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>{labels.signal}</span>
                  <span>{riskLabels[country.nivelDeRisco] || country.nivelDeRisco}</span>
                </div>
              </article>
            ))}
          </div>

          <Link to="/#mapa" className="primary-action mt-5 w-full sm:w-auto">
            {labels.viewMap} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
