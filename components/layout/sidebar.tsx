"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  BarChart3, 
  CircleDollarSign, 
  CloudRain, 
  Cpu, 
  Database, 
  HardDrive, 
  Network, 
  Settings, 
  AlertTriangle,
  PiggyBank,
  LayoutDashboard
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Overview",
    icon: LayoutDashboard,
    href: "/",
  },
  {
    label: "Cost Analyzer",
    icon: BarChart3,
    href: "/cost-analyzer",
  },
  {
    label: "Cost Allocation",
    icon: CircleDollarSign,
    href: "/cost-allocation",
  },
  {
    label: "Anomalies",
    icon: AlertTriangle,
    href: "/anomalies",
  },
  {
    label: "Recommendations",
    icon: PiggyBank,
    href: "/recommendations",
  },
  {
    label: "Budgets",
    icon: CircleDollarSign,
    href: "/budgets",
  },
  {
    label: "K8s",
    icon: Settings,
    href: "/k8s",
  },
];

const views = [
  {
    label: "Cost Summary",
    icon: BarChart3,
    href: "/cost-summary",
  },
  {
    label: "Network Cost",
    icon: Network,
    href: "/network-cost",
  },
  {
    label: "Data Transfer Cost",
    icon: Database,
    href: "/data-transfer",
  },
  {
    label: "Storage Cost",
    icon: HardDrive,
    href: "/storage-cost",
  },
  {
    label: "Compute Cost",
    icon: Cpu,
    href: "/compute-cost",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#1E1235] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">Element X</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "bg-white/10" : ""
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <h2 className="text-xs uppercase text-white/50 font-bold tracking-wider mb-3 px-3">
            Views
          </h2>
          <div className="space-y-1">
            {views.map((view) => (
              <Link
                key={view.href}
                href={view.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition",
                  pathname === view.href ? "bg-white/10" : ""
                )}
              >
                <div className="flex items-center flex-1">
                  <view.icon className={cn("h-5 w-5 mr-3")} />
                  {view.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="px-3 py-2">
        <div className="flex items-center gap-2 px-3">
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
            N
          </div>
          <div className="flex-1">
            <p className="text-sm">nishi@elementx.com</p>
          </div>
          <Button variant="ghost" size="icon" className="text-white">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}