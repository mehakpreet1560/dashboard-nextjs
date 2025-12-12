import React from "react";

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  icon: any;
  color: "blue" | "teal" | "green" | "orange";
}

const colorMap = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    iconBg: "bg-blue-500",
    cardTint: "bg-blue-50"
  },
  teal: {
    bg: "bg-teal-100",
    text: "text-teal-700",
    iconBg: "bg-teal-500",
    cardTint: "bg-teal-50"
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-700",
    iconBg: "bg-green-500",
    cardTint: "bg-green-50"
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-700",
    iconBg: "bg-orange-500",
    cardTint: "bg-orange-50"
  },
};

const MetricsCard = ({ title, value, change, icon: Icon, color }: MetricsCardProps) => {
  const isPositive = change.startsWith("+");
  const c = colorMap[color];

  return (
    <div className={`rounded-xl border border-gray-200 p-6 bg-white`}>
      <div className="flex items-center justify-between">
        

        <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${c.iconBg}`}>
          <Icon size={26} />
        </div>

        <span
          className={`px-3 py-1 text-sm rounded-full font-medium ${
            isPositive ? " text-green-700" : "bg-red-100 text-red-700"
          }`}
        >
          {change}
        </span>
      </div>

      <p className={`mt-4 text-sm ${c.text}`}>{title}</p>
      <p className="text-3xl font-bold text-gray-900 mt-1">{value}</p>

    </div>
  );
};

export default MetricsCard;
