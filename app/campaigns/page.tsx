"use client";

import Link from "next/link";
import { useCampaigns } from "../context/CampaignContext";
import Sidebar from "../components/Sidebar";
export default function CampaignsPage() {
  const { campaigns } = useCampaigns();

  return (
      <div className="flex">
            <Sidebar />
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Campaigns
        </h1>

        <Link
          href="/campaigns/create"
          className="bg-linear-to-b from-[#3489f8] to-[#10274b] rounded-3xl text-white px-4 py-2  text-sm font-medium hover:bg-blue-700"
        >
          + Create Campaign
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow border text-black border-gray-200">
        {campaigns.length === 0 ? (
          <div className="p-6 text-gray-500 text-sm">
            No campaigns yet. Click <strong>Create Campaign</strong> to add one.
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-4 py-3 font-medium text-gray-600">
                  Name
                </th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">
                  Start Date
                </th>
                <th className="text-left px-4 py-3 font-medium text-gray-600">
                  End Date
                </th>
              </tr>
            </thead>

            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b last:border-none">
                  <td className="px-4 py-3">{campaign.name}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        campaign.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{campaign.startDate}</td>
                  <td className="px-4 py-3">{campaign.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
    </div>
  );
}
