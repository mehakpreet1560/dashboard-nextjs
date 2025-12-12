// app/page.tsx
import DashboardHeader from "@/app/components/DashboardHeader";
import Sidebar from "@/app/components/Sidebar";
import MetricsGrid from "@/app/components/MetricsGrid";
import ActivityStream from "@/app/components/ActivityStream";
import SummaryCard from "@/app/components/SummaryCard";
import InsightsSection from "@/app/components/InsightsSection";
import RecentActivity from "@/app/components/RecentActivity";
import UsageMeter from "@/app/components/UsageMeter";
import ChartsRow from "@/app/components/ChartsRow";
export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <DashboardHeader />
          <MetricsGrid />

          <div className="p-6">
            <ChartsRow />
          </div>

          {/* Full-width section */}
          <div className="w-full space-y-8">
            <ActivityStream />
            <SummaryCard />
            <InsightsSection />
            <RecentActivity />
            <UsageMeter />
          </div>

        </div>
      </div>
    </div>
  );
}
