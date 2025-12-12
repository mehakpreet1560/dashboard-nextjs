
import { BadgeCheck, Clock, AlertTriangle, PauseCircle, Sparkles } from "lucide-react";

const ActivityStream = () => {
  const activities = [
    {
      text: "Generated 42 drafts using Playbook v1.0",
      time: "2 min ago",
      status: "In Progress",
      bg: "bg-blue-50",
      badgeBg: "bg-blue-100 text-blue-700",
      icon: <Sparkles className="w-5 h-5 text-blue-600" />,
    },
    {
      text: "Identified 6 positive replies from recent campaigns",
      time: "8 min ago",
      status: "",
      bg: "bg-green-50",
      badgeBg: "",
      icon: <BadgeCheck className="w-5 h-5 text-green-600" />,
    },
    {
      text: "Recommends adjusting Follow-up #2 timing",
      time: "15 min ago",
      status: "Needs Review",
      bg: "bg-purple-50",
      badgeBg: "bg-purple-100 text-purple-700",
      icon: <Clock className="w-5 h-5 text-purple-600" />,
    },
    {
      text: "Flagged 12 low-quality emails for your review",
      time: "22 min ago",
      status: "Action Required",
      bg: "bg-orange-50",
      badgeBg: "bg-orange-100 text-orange-700",
      icon: <AlertTriangle className="w-5 h-5 text-orange-600" />,
    },
    {
      text: "Paused sending due to inbox warming schedule",
      time: "1 hour ago",
      status: "",
      bg: "bg-red-50",
      badgeBg: "",
      icon: <PauseCircle className="w-5 h-5 text-red-600" />,
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-blue-100 shadow-sm">
  
      <div className="flex items-center gap-3 mb-1">
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white text-xl">
          🔊
        </div>
        <div>
          <div className="text-lg font-semibold text-gray-900">AI Activity Stream</div>
          <div className="text-sm text-gray-600">AURA is working in the background</div>
        </div>
      </div>

   
      <div className="space-y-4 mt-6">
        {activities.map((item, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl flex justify-between items-start ${item.bg}`}
          >
            {/* Left side */}
            <div className="flex gap-3 items-start">
              <div>{item.icon}</div>

              <div className="flex flex-col">
                <span className="text-gray-900 font-medium">{item.text}</span>

                <div className="flex items-center gap-3 mt-1">
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    {item.time}
                  </div>

                  {item.status && (
                    <span
                      className={`px-2 py-0.5 text-xs rounded-md font-medium ${item.badgeBg}`}
                    >
                      {item.status}
                    </span>
                  )}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityStream;
