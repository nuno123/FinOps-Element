"use client";

import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Week 1", actual: 4000, projected: 2400 },
  { name: "Week 2", actual: 3000, projected: 1398 },
  { name: "Week 3", actual: 2000, projected: 9800 },
  { name: "Week 4", actual: 2780, projected: 3908 },
  { name: "Week 5", actual: 1890, projected: 4800 },
  { name: "Week 6", actual: 2390, projected: 3800 },
];

export function CostTrends() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-6">Cost Trends & Forecasting</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#8884d8"
              name="Actual Cost"
            />
            <Line
              type="monotone"
              dataKey="projected"
              stroke="#82ca9d"
              name="Projected Cost"
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}