"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const anomalies = [
  {
    id: "ANM-001",
    service: "EC2 Instances",
    severity: "High",
    impact: "$12,450",
    detection: "2024-03-20 14:30",
    status: "Active",
    description: "Sudden spike in compute usage in us-east-1",
  },
  {
    id: "ANM-002",
    service: "S3 Storage",
    severity: "Medium",
    impact: "$5,230",
    detection: "2024-03-20 12:15",
    status: "Investigating",
    description: "Unusual increase in data transfer costs",
  },
  {
    id: "ANM-003",
    service: "RDS Database",
    severity: "Low",
    impact: "$2,800",
    detection: "2024-03-20 10:45",
    status: "Resolved",
    description: "Unexpected backup storage growth",
  },
];

export function AnomaliesList() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Recent Anomalies</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Service</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Impact</TableHead>
            <TableHead>Detection Time</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {anomalies.map((anomaly) => (
            <TableRow key={anomaly.id}>
              <TableCell className="font-medium">{anomaly.id}</TableCell>
              <TableCell>{anomaly.service}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    anomaly.severity === "High"
                      ? "destructive"
                      : anomaly.severity === "Medium"
                      ? "warning"
                      : "secondary"
                  }
                >
                  {anomaly.severity}
                </Badge>
              </TableCell>
              <TableCell>{anomaly.impact}</TableCell>
              <TableCell>{anomaly.detection}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    anomaly.status === "Active"
                      ? "destructive"
                      : anomaly.status === "Investigating"
                      ? "warning"
                      : "success"
                  }
                >
                  {anomaly.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}