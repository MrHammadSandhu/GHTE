"use client";

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "buyvsrent", label: "Buy vs Rent" },
    { id: "applications", label: "Applications" },
    { id: "specifications", label: "Installation Requirements" },
  ];

  return (
    <div className="w-full mb-6">
      <div className="grid grid-cols-2 sm:grid-cols-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-3 font-medium text-sm sm:text-base transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
