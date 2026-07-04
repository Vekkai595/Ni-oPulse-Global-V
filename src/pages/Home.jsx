import React, { Suspense, lazy, useState } from "react";
import NavBar from "@/components/elnino/NavBar";
import HeroSection from "@/components/elnino/HeroSection";
import FilterBar from "@/components/elnino/FilterBar";
import CountryGrid from "@/components/elnino/CountryGrid";
import CountryPanel from "@/components/elnino/CountryPanel";
import ENSOProbability from "@/components/elnino/ENSOProbability";
import FavoritesDashboard from "@/components/elnino/FavoritesDashboard";
import FooterSection from "@/components/elnino/FooterSection";
import SourceMethodologyStrip from "@/components/elnino/SourceMethodologyStrip";
import EnsoScenarioSimulator from "@/components/elnino/EnsoScenarioSimulator";
import DeferredSection from "@/components/system/DeferredSection";

const WorldMap = lazy(() => import("@/components/elnino/WorldMap"));
const HistoricalAnalytics = lazy(() => import("@/components/elnino/HistoricalAnalytics"));
const ImpactEconomySection = lazy(() => import("@/components/elnino/ImpactEconomySection"));
const ExperimentalModel = lazy(() => import("@/components/elnino/ExperimentalModel"));
const ResearchTools = lazy(() => import("@/components/elnino/ResearchTools"));
const AlertCenter = lazy(() => import("@/components/elnino/AlertCenter"));

function SectionLoader({ minHeight = 280 }) {
  return (
    <div className="mx-auto max-w-7xl px-4" style={{ minHeight }}>
      <div className="surface-card grid h-full min-h-[inherit] place-items-center text-sm text-muted-foreground" role="status">
        <span className="loading-pulse">NiñoPulse…</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [riskFilter, setRiskFilter] = useState("all");
  const [threatFilter, setThreatFilter] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main id="main-content">
        <HeroSection />
        <SourceMethodologyStrip />
        <FavoritesDashboard onCountryClick={setSelectedCountry} />
        <section className="scroll-mt-20 mx-auto max-w-7xl px-3 py-8 sm:px-4" id="mapa">
          <FilterBar riskFilter={riskFilter} setRiskFilter={setRiskFilter} threatFilter={threatFilter} setThreatFilter={setThreatFilter} />
          <Suspense fallback={<SectionLoader minHeight={420} />}>
            <WorldMap riskFilter={riskFilter} threatFilter={threatFilter} onCountryClick={setSelectedCountry} />
          </Suspense>
        </section>
        <CountryGrid riskFilter={riskFilter} threatFilter={threatFilter} onCountryClick={setSelectedCountry} />
        <ENSOProbability />
        <EnsoScenarioSimulator />

        <DeferredSection minHeight={360}>
          <Suspense fallback={<SectionLoader minHeight={360} />}><ImpactEconomySection /></Suspense>
        </DeferredSection>
        <DeferredSection minHeight={520}>
          <Suspense fallback={<SectionLoader minHeight={520} />}><HistoricalAnalytics /></Suspense>
        </DeferredSection>
        <DeferredSection minHeight={360}>
          <Suspense fallback={<SectionLoader minHeight={360} />}><ExperimentalModel /></Suspense>
        </DeferredSection>
        <DeferredSection minHeight={300}>
          <Suspense fallback={<SectionLoader minHeight={300} />}><ResearchTools /></Suspense>
        </DeferredSection>
        <DeferredSection minHeight={220} rootMargin="500px 0px">
          <Suspense fallback={<SectionLoader minHeight={220} />}><AlertCenter /></Suspense>
        </DeferredSection>
      </main>
      <FooterSection />
      {selectedCountry && <CountryPanel country={selectedCountry} onClose={() => setSelectedCountry(null)} />}
    </div>
  );
}
