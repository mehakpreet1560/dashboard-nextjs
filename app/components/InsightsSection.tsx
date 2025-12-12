
import { Lightbulb } from "lucide-react";
import InsightsCard from "./InsightsCard";

const InsightsSection = () => {
  const insights = [
    {
      title: "Follow-up #2 at Day 4 performs best",
      description:
        "Your Day-4 follow-up got 26% more replies. Consider moving other follow-ups earlier.",
      priority: "High",
    },
    {
      title: "Subject lines under 7 words drive 18% more opens",
      description:
        "Short, direct subject lines are working better across all campaigns.",
      priority: "High",
    },
    {
      title: "Tuesday 10 AM sends show highest engagement",
      description:
        "Emails sent on Tuesday mornings have a 22% higher open rate.",
      priority: "Medium",
    },
  ];

  return (
    <div className="p-6 rounded-2xl bg-[#f5f9ff]">

      <div className="flex items-center gap-2 mb-6">
        <span className="text-blue-600 text-lg"><Lightbulb className="w-5 h-5 text-blue-600" /></span>
        <h2 className="text-xl font-semibold text-gray-900">
          AI Insights & Suggestions
        </h2>
      </div>


      <div className="space-y-5">
        {insights.map((insight, index) => (
          <InsightsCard key={index} {...insight} />
        ))}
      </div>
    </div>
  );
};

export default InsightsSection;
