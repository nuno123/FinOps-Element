"use client";

import { CostHeader } from "@/components/cost-analyzer/header";
import { CostOverview } from "@/components/cost-analyzer/overview";
import { CostBreakdown } from "@/components/cost-analyzer/breakdown";
import { CostTrends } from "@/components/cost-analyzer/trends";

export default function CostAnalyzer() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <CostHeader />
        <div className="grid gap-6 mt-6">
          <CostOverview />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CostBreakdown />
            <CostTrends />
          </div>
        </div>
      </div>
    </div>
  );
}