import Link from "next/link";

const DashboardHeader = () => {
  return (
    <div className="mb-8 flex items-start justify-between">
      
      {/* Left content */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">
          Good morning, Admin 👋
        </h1>
        <p className="text-gray-600 mt-2">
          Here’s how your AI SDR performed in the last 7 days.
        </p>
      </div>

      {/* Right button */}
      <Link
        href="/campaigns/create"
        className="bg-linear-to-b from-[#3489f8] to-[#10274b] rounded-2xl text-white px-4 py-2 text-sm font-medium"
      >
        + Create Campaign
      </Link>
      
    </div>
  );
};

export default DashboardHeader;
