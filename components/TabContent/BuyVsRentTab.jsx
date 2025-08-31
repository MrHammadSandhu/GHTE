const BuyVsRentTab = ({ buyVsRent, purchase, rental }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Purchase Details</h2>
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2">Lead Time</h3>
                <p className="text-gray-700">{purchase?.leadTime}</p>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">Payment Options</h3>
                <ul className="space-y-1">
                  {purchase?.paymentOptions?.map((option, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">Warranty</h3>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Standard: {purchase?.warranty?.standard}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Extended: {purchase?.warranty?.extended}</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">
                  After-Sale Services
                </h3>
                <ul className="space-y-1">
                  {purchase?.afterSaleServices?.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Rental Details</h2>
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2">Rental Periods</h3>
                <div className="flex flex-wrap gap-2">
                  {rental?.rentalPeriods?.map((period, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-200"
                    >
                      {period}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">Rental Information</h3>
                <ul className="space-y-1">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>
                      Minimum Rental Period: {rental?.minimumRentalPeriod}
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Delivery Timeframe: {rental?.deliveryTimeframe}</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">Included Services</h3>
                <ul className="space-y-1">
                  {rental?.includedServices?.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-medium text-lg mb-2">Rental Terms</h3>
                <ul className="space-y-1">
                  {rental?.rentalTerms?.map((term, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      <span>{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Purchase vs. Rental Comparison
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Purchase Advantages</h3>
            </div>
            <ul className="space-y-2">
              {buyVsRent?.buyAdvantages?.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-700">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg border shadow-sm p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold">Rental Advantages</h3>
            </div>
            <ul className="space-y-2">
              {buyVsRent?.rentAdvantages?.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-gray-700">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          When to Choose Each Option
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              Ideal Purchase Scenarios
            </h3>
            <ul className="space-y-2">
              {buyVsRent?.idealBuyScenarios?.map((scenario, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600"
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
                  <span className="text-gray-700">{scenario}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg border shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">
              Ideal Rental Scenarios
            </h3>
            <ul className="space-y-2">
              {buyVsRent?.idealRentScenarios?.map((scenario, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-2 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-blue-600"
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
                  <span className="text-gray-700">{scenario}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyVsRentTab;
