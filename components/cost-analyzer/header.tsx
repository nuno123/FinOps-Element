"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarDays, Download, Filter } from "lucide-react";
import { useState } from "react";

export function CostHeader() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Cost Analysis</h1>
        <p className="text-muted-foreground">
          Analyze and optimize your cloud spending
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="gap-2">
              <CalendarDays className="h-4 w-4" />
              Last 30 Days
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
        <Button variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>
    </div>
  );
}