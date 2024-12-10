import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardMetrics } from '@/components/dashboard/metrics';
import { RecentCharges } from '@/components/dashboard/recent-charges';
import { SpendingChart } from '@/components/dashboard/spending-chart';
import { StorageUsage } from '@/components/dashboard/storage-usage';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <DashboardHeader />
        <div className="grid gap-6 mt-6">
          <DashboardMetrics />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpendingChart />
            <StorageUsage />
          </div>
          <RecentCharges />
        </div>
      </div>
    </div>
  );
}