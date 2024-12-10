"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { ArrowUpIcon } from "lucide-react";

const charges = [
  {
    id: "165372",
    provider: "AWS",
    usage: "10170 Hours",
    interval: "Oct 1 - Oct 31",
    amount: "$40,000",
    change: "+3%",
    projected: "$32,000",
  },
  {
    id: "328492",
    provider: "Azure",
    usage: "540 Hours",
    interval: "Oct 1 - Oct 31",
    amount: "$20,000",
    change: "+6%",
    projected: "$23,000",
  },
  // Add more charges as needed
];

export function RecentCharges() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Recent charges</h3>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invoice ID</TableHead>
            <TableHead>Service provider</TableHead>
            <TableHead>Usage</TableHead>
            <TableHead>Interval</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Projected cost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {charges.map((charge) => (
            <TableRow key={charge.id}>
              <TableCell>{charge.id}</TableCell>
              <TableCell>{charge.provider}</TableCell>
              <TableCell>{charge.usage}</TableCell>
              <TableCell>{charge.interval}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  {charge.amount}
                  <span className="flex items-center text-sm text-green-500">
                    <ArrowUpIcon className="h-3 w-3" />
                    {charge.change}
                  </span>
                </div>
              </TableCell>
              <TableCell>{charge.projected}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}