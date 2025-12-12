"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "SaaS Demo v2", value: 12 },
  { name: "—", value: 8 },{ name: "—", value: 10},

  { name: "Healthcare Connect", value: 15

   },
];

export default function TopPlaybooksChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="text-lg font-semibold mb-4 text-gray-900 ">
        Top Performing Playbooks
      </div>

      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip />

            <Bar
              dataKey="value"
              radius={[12, 12, 0, 0]}
              fill="url(#colorBlue)"
               barSize={60}
            />

            <defs>
              <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#1d4ed8" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
