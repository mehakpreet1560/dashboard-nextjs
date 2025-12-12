import EngagementChart from "./EngagementChart";
import TopPlaybooksChart from "./TopPlaybooksChart";

export default function ChartsRow() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <EngagementChart />
      <TopPlaybooksChart />
    </div>
  );
}
