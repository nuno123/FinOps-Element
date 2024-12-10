"use client";

import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Sales", value: 400, color: "#3b82f6" },
  { name: "Marketing", value: 300, color: "#ef4444" },
  { name: "Human Resources", value: 300, color: "#22c55e" },
  { name: "Information Technology", value: 390, color: "#8b5cf6" },
];

export function SpendingChart() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-medium mb-6">Spending by departments</h3>
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
            <Legend
              verticalAlign="bottom"
              height={36}
              iconType="circle"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}