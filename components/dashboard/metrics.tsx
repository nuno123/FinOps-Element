"use client";

import { Card } from "@/components/ui/card";
import { ArrowUpIcon, DollarSign, Percent } from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const data = [
  { value: 1200 },
  { value: 1300 },
  { value: 1250 },
  { value: 1420 },
  { value: 1390 },
  { value: 1500 },
];

export function DashboardMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <MetricCard
        title="Total Cost"
        value="$1,390,021"
        change="+25%"
        type="cost"
        data={data}
      />
      <MetricCard
        title="Total Savings"
        value="$3,900"
        change="+15%"
        type="savings"
        data={data}
      />
      <MetricCard
        title="Used Allocation"
        value="78%"
        change="+12%"
        type="allocation"
        data={data}
      />
    </div>
  );
}

function MetricCard({ title, value, change, type, data }: any) {
  const colors = {
    cost: "text-green-500",
    savings: "text-yellow-500",
    allocation: "text-blue-500",
  };

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {type === "cost" && <DollarSign className="h-4 w-4 text-muted-foreground" />}
        {type === "savings" && <DollarSign className="h-4 w-4 text-muted-foreground" />}
        {type === "allocation" && <Percent className="h-4 w-4 text-muted-foreground" />}
      </div>
      <div className="mt-2">
        <h2 className="text-2xl font-bold">{value}</h2>
        <div className="flex items-center mt-1">
          <ArrowUpIcon className={`h-4 w-4 ${colors[type]}`} />
          <span className={`text-sm ${colors[type]} ml-1`}>{change}</span>
          <span className="text-sm text-muted-foreground ml-1">increase in total {type}</span>
        </div>
      </div>
      <div className="h-16 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={type === "cost" ? "#22c55e" : type === "savings" ? "#eab308" : "#3b82f6"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}