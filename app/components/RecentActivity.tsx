
const RecentActivity = () => {
  const activities = [
    { text: "Email sent to John @Acme", time: "1h ago", color: "bg-blue-500" },
    { text: "Meeting booked with Alice @XYZ Corp", time: "2h ago", color: "bg-green-500" },
    { text: "Reply received from Sarah @TechCo", time: "3h ago", color: "bg-yellow-500" },
    { text: "Campaign 'SaaS Outreach' paused", time: "4h ago", color: "bg-red-500" },
    { text: "Email bounced: invalid@example.com", time: "5h ago", color: "bg-purple-500" },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
      <div className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</div>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
   
              <span className={`h-3 w-3 rounded-full ${activity.color}`}></span>
              
           
              <span className="text-gray-800">{activity.text}</span>
            </div>

            <div className="text-gray-500 text-sm">{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
