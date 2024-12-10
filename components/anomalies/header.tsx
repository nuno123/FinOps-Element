"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bell, Filter } from "lucide-react";

export function AnomaliesHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Cost Anomalies</h1>
        <p className="text-muted-foreground">
          Monitor and detect unusual spending patterns
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Select defaultValue="7days">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="24hours">Last 24 hours</SelectItem>
            <SelectItem value="7days">Last 7 days</SelectItem>
            <SelectItem value="30days">Last 30 days</SelectItem>
            <SelectItem value="90days">Last 90 days</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
        <Button variant="outline" className="gap-2">
          <Bell className="h-4 w-4" />
          Configure Alerts
        </Button>
      </div>
    </div>
  );
}