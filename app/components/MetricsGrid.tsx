
import MetricsCard from "./MetricsCard";
import { TrendingUp ,MessageCircle, CalendarCheck, PieChart } from "lucide-react";

const MetricsGrid = () => {
  const metrics = [
    {
      title: "Emails Sent",
      value: "12,340",
      change: "+8%",
      icon: TrendingUp,
      color: "blue" as const,
    },
    {
      title: "Replies",
      value: "1,240",
      change: "+12%",
      icon: MessageCircle,
      color: "teal" as const,
    },
    {
      title: "Meetings Booked",
      value: "123",
      change: "+15%",
      icon: CalendarCheck,
      color: "green" as const,
    },
    {
      title: "Reply Rate",
      value: "10.1%",
      change: "+2.3%",
      icon: PieChart,
      color: "orange" as const,
    },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="text-2xl font-semibold text-gray-900">AIDAA</div>
        <div className="text-gray-500">AIDAA.com/admin</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <MetricsCard key={metric.title} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default MetricsGrid;
