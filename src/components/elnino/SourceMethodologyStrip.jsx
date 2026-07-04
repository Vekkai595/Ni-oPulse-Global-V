import React from "react";
import { Database, ExternalLink, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SourceMethodologyStrip() {
  const { language } = useLanguage();
  const labels = language === "pt" ? {
    title: "Transparência científica embutida",
    text: "Dados oficiais NOAA/CPC ficam separados de clima local Open-Meteo, perfis históricos e modelos experimentais. Assim o usuário sabe o que é observação, síntese educacional e simulação.",
    noaa: "Fonte ENSO: NOAA/CPC",
    weather: "Clima atual: Open-Meteo",
    methodology: "Metodologia",
    api: "API pública",
  } : {
    title: "Built-in scientific transparency",
    text: "Official NOAA/CPC data is kept separate from Open-Meteo local weather, historical profiles and experimental models. Users can see what is observation, educational synthesis and simulation.",
    noaa: "ENSO source: NOAA/CPC",
    weather: "Current weather: Open-Meteo",
    methodology: "Methodology",
    api: "Public API",
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-6" aria-labelledby="source-methodology-title">
      <div className="surface-card grid gap-4 p-4 sm:p-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="flex items-start gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
            <ShieldCheck className="h-5 w-5" />
          </span>
          <div>
            <h2 id="source-methodology-title" className="font-display text-lg font-bold">{labels.title}</h2>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">{labels.text}</p>
          </div>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          <a href="https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/" target="_blank" rel="noreferrer" className="tool-button justify-between">
            <span className="inline-flex items-center gap-2"><Database className="h-4 w-4" /> {labels.noaa}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a href="https://open-meteo.com/" target="_blank" rel="noreferrer" className="tool-button justify-between">
            <span className="inline-flex items-center gap-2"><Database className="h-4 w-4" /> {labels.weather}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Link to="/research" className="tool-button justify-center">{labels.methodology}</Link>
          <Link to="/api-docs" className="tool-button justify-center">{labels.api}</Link>
        </div>
      </div>
    </section>
  );
}
