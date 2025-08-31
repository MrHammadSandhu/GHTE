const SpecificationsTab = ({
  specifications,
  certifications,
  installationRequirements,
}) => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold mb-4">
          Installation Requirements
        </h2>
        <ul className="space-y-2">
          {installationRequirements?.map((req, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <span className="text-gray-700">{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SpecificationsTab;
