
interface InsightsCardProps {
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low" | string;
}

const priorityColors: Record<string, string> = {
  High: "bg-blue-100 text-blue-700",
  Medium: "bg-purple-100 text-purple-700",
  Low: "bg-gray-100 text-gray-700",
};

const InsightsCard = ({ title, description, priority }: InsightsCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative">

      {/* Priority Badge */}
      <span
        className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full ${
          priorityColors[priority] || "bg-gray-100 text-gray-700"
        }`}
      >
        {priority}
      </span>

      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>

      {/* Buttons */}
      <div className="mt-5 flex gap-3">
        <button className="px-4 py-2  bg-linear-to-b from-[#3489f8] to-[#10274b] rounded-3xl text-white text-sm  hover:bg-blue-700">
          Apply to Playbook
        </button>

        <button className="px-4 py-2 border text-gray-900 rounded-3xl border-gray-300 text-sm  hover:bg-gray-50">
          View Data
        </button>
      </div>
    </div>
  );
};

export default InsightsCard;
