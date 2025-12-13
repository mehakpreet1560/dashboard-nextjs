"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCampaigns } from "../../context/CampaignContext";
import { v4 as uuidv4 } from "uuid";
import Sidebar from "../../components/Sidebar";
export default function CreateCampaignPage() {
  const { addCampaign } = useCampaigns();
  const router = useRouter();

  const [name, setName] = useState("");
  const [status, setStatus] = useState<"Active" | "Paused">("Active");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !startDate || !endDate) {
      setError("All fields are required.");
      return;
    }

    if (new Date(startDate) > new Date(endDate)) {
      setError("Start date cannot be after end date.");
      return;
    }

    addCampaign({
      id: uuidv4(),
      name,
      status,
      startDate,
      endDate,
    });

    router.push("/campaigns");
  };

  return (
      <div className="flex">
            <Sidebar />
            
    <div className="p-8 max-w-xl">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Create Campaign
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl text-black shadow border border-gray-200 space-y-4"
      >
        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">
            Campaign Name
          </label>
          <input
            type="text"
            className="w-full border rounded-lg px-3 py-2 text-sm"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter campaign name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Status
          </label>
          <select
            className="w-full border rounded-lg px-3 py-2 text-sm"
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as "Active" | "Paused")
            }
          >
            <option value="Active">Active</option>
            <option value="Paused">Paused</option>
          </select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Start Date
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 text-sm"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              End Date
            </label>
            <input
              type="date"
              className="w-full border rounded-lg px-3 py-2 text-sm"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            className="bg-linear-to-b from-[#3489f8] to-[#10274b] rounded-3xl text-white px-4 py-2  text-sm font-medium hover:bg-blue-700"
          >
            Create Campaign
          </button>

          <button
            type="button"
            onClick={() => router.push("/campaigns")}
            className="px-4 py-2 rounded-lg text-sm border"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}
