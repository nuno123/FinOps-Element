"use client";

import { Card } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { name: "Jan", aws: 4000, azure: 2400, gcp: 2400 },
  { name: "Feb", aws: 3000, azure: 1398, gcp: 2210 },
  { name: "Mar", aws: 2000, azure: 9800, gcp: 2290 },
  { name: "Apr", aws: 2780, azure: 3908, gcp: 2000 },
  { name: "May", aws: 1890, azure: 4800, gcp: 2181 },
  { name: "Jun", aws: 2390, azure: 3800, gcp: 2500 },
];

export function CostOverview() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-6">Cost Overview</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="aws" fill="#FF9900" name="AWS" />
            <Bar dataKey="azure" fill="#008AD7" name="Azure" />
            <Bar dataKey="gcp" fill="#4285F4" name="GCP" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}