"use client";

import { AnomaliesHeader } from "@/components/anomalies/header";
import { AnomaliesOverview } from "@/components/anomalies/overview";
import { AnomaliesList } from "@/components/anomalies/list";
import { AnomaliesInsights } from "@/components/anomalies/insights";

export default function Anomalies() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <AnomaliesHeader />
        <div className="grid gap-6 mt-6">
          <AnomaliesOverview />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <AnomaliesList />
            </div>
            <div>
              <AnomaliesInsights />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}