"use client";

import { Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Welcome Paul! 👋</h1>
        <p className="text-muted-foreground">View your cloud spending with just a glance.</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}