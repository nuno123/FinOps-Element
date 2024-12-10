"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpIcon, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";

export function AnomaliesOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">Active Anomalies</p>
          <AlertTriangle className="h-4 w-4 text-red-500" />
        </div>
        <div className="mt-2">
          <h2 className="text-2xl font-bold">12</h2>
          <div className="flex items-center mt-1">
            <ArrowUpIcon className="h-4 w-4 text-red-500" />
            <span className="text-sm text-red-500 ml-1">+4</span>
            <span className="text-sm text-muted-foreground ml-1">from last week</span>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">Potential Impact</p>
          <DollarSign className="h-4 w-4 text-yellow-500" />
        </div>
        <div className="mt-2">
          <h2 className="text-2xl font-bold">$45,230</h2>
          <div className="flex items-center mt-1">
            <ArrowUpIcon className="h-4 w-4 text-yellow-500" />
            <span className="text-sm text-yellow-500 ml-1">+15.3%</span>
            <span className="text-sm text-muted-foreground ml-1">from baseline</span>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">Resolution Rate</p>
          <TrendingUp className="h-4 w-4 text-green-500" />
        </div>
        <div className="mt-2">
          <h2 className="text-2xl font-bold">85%</h2>
          <div className="flex items-center mt-1">
            <ArrowUpIcon className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-500 ml-1">+5%</span>
            <span className="text-sm text-muted-foreground ml-1">improvement</span>
          </div>
        </div>
      </Card>
    </div>
  );
}