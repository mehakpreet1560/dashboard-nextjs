"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", emails: 420, meetings: 35, replies: 12 },
  { name: "Tue", emails: 380, meetings: 40, replies: 15 },
  { name: "Wed", emails: 450, meetings: 55, replies: 18 },
  { name: "Thu", emails: 480, meetings: 50, replies: 16 },
  { name: "Fri", emails: 510, meetings: 65, replies: 20 },
  { name: "Sat", emails: 290, meetings: 25, replies: 8 },
  { name: "Sun", emails: 150, meetings: 18, replies: 6 },
];

export default function EngagementChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="text-lg font-semibold mb-4 text-gray-900">Engagement Over Time</div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />

            <Tooltip />
            <Legend />

            <Line
              type="monotone"
              dataKey="emails"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 5 }}
            />

            <Line
              type="monotone"
              dataKey="meetings"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 5 }}
            />

            <Line
              type="monotone"
              dataKey="replies"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={{ r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
