"use client";

import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Compute", value: 45000, color: "#FF9900" },
  { name: "Storage", value: 25000, color: "#008AD7" },
  { name: "Network", value: 15000, color: "#4285F4" },
  { name: "Database", value: 20000, color: "#34A853" },
  { name: "Other", value: 10000, color: "#7B61FF" },
];

export function CostBreakdown() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-6">Cost Breakdown by Service</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}