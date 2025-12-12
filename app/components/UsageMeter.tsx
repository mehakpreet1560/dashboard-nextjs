
const UsageMeter = () => {
  const used = 2500;
  const total = 3000;
  const percentage = (used / total) * 100;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="text-lg font-semibold text-gray-900 mb-4">Monthly Email Usage</div>
      <div className="mb-2">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>{used.toLocaleString()} / {total.toLocaleString()}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
        </div>
      </div>
      <div className="text-sm text-gray-500">{total - used} emails remaining this month</div>
    </div>
  );
};

export default UsageMeter;