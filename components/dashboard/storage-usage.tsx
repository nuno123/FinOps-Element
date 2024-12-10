"use client";

import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const storageData = [
  { provider: "AWS", used: 51, total: 100 },
  { provider: "Azure", used: 20, total: 50 },
  { provider: "GCP", used: 140, total: 150 },
  { provider: "Oracle", used: 20, total: 50 },
  { provider: "Salesforce", used: 12, total: 50 },
];

export function StorageUsage() {
  const totalUsed = 212;
  const totalCapacity = 500;
  const percentageLeft = ((totalCapacity - totalUsed) / totalCapacity) * 100;

  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Used storage</h3>
          <p className="text-sm text-muted-foreground">Total usage</p>
          <div className="mt-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">
                {totalUsed} TB / {totalCapacity} TB
              </span>
              <span className="text-sm text-muted-foreground">
                {percentageLeft.toFixed(0)}% storage left
              </span>
            </div>
            <Progress value={(totalUsed / totalCapacity) * 100} />
          </div>
        </div>
        
        <div className="space-y-2">
          {storageData.map((item) => (
            <div key={item.provider} className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{item.provider}</span>
                <span className="text-sm text-muted-foreground">
                  {item.used} TB / {item.total} TB
                </span>
              </div>
              <Progress value={(item.used / item.total) * 100} />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}