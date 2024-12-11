'use client';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDateRangePicker } from "@/components/date-range-picker";
import { Filter, Download } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const mockData = {
  overview: [
    { name: 'Jan', cost: 4000 },
    { name: 'Fev', cost: 3000 },
    { name: 'Mar', cost: 2000 },
    { name: 'Abr', cost: 2780 },
    { name: 'Mai', cost: 1890 },
    { name: 'Jun', cost: 2390 },
  ],
  services: [
    { name: 'EC2', cost: 4000 },
    { name: 'S3', cost: 3000 },
    { name: 'RDS', cost: 2000 },
    { name: 'Lambda', cost: 1000 },
    { name: 'CloudFront', cost: 500 },
  ]
};

export default function CostAnalyzer() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Cost Analysis</h2>
          <p className="text-muted-foreground">
            Analyze and optimize your cloud spending
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <CalendarDateRangePicker />
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card className="p-6">
        <h3 className="text-xl font-semibold mb-4">Cost Overview</h3>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={mockData.overview}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="cost" 
                stroke="#8884d8" 
                name="Total Cost"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Cost Breakdown by Service</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockData.services}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="cost" fill="#8884d8" name="Cost" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Cost Trends & Forecasting</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData.overview}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="cost" 
                  stroke="#82ca9d" 
                  name="Actual Cost"
                />
                <Line 
                  type="monotone" 
                  dataKey="forecast" 
                  stroke="#ffc658" 
                  name="Forecast"
                  strokeDasharray="5 5"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
} 