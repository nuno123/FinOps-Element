"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertTriangle, TrendingUp, Clock } from "lucide-react";

const insights = [
  {
    type: "alert",
    message: "EC2 costs exceeded baseline by 150% in the last 24 hours",
    time: "2 hours ago",
  },
  {
    type: "trend",
    message: "Unusual spike in data transfer costs detected in us-west-2",
    time: "4 hours ago",
  },
  {
    type: "prediction",
    message: "Current spending trajectory may exceed monthly budget by 25%",
    time: "6 hours ago",
  },
];

export function AnomaliesInsights() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-4">Insights & Recommendations</h3>
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {insights.map((insight, index) => (
            <Card key={index} className="p-4 border-l-4 border-l-red-500">
              <div className="flex items-start gap-4">
                {insight.type === "alert" && (
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                )}
                {insight.type === "trend" && (
                  <TrendingUp className="h-5 w-5 text-yellow-500 mt-0.5" />
                )}
                {insight.type === "prediction" && (
                  <Clock className="h-5 w-5 text-blue-500 mt-0.5" />
                )}
                <div className="flex-1">
                  <p className="text-sm">{insight.message}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Badge variant="secondary" className="text-xs">
                      {insight.time}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}