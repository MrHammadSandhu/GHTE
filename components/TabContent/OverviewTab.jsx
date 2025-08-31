import { CardHeading, Description, Header } from "../Headings";
import { ArrownRightIcon } from "../Icons";

const OverviewTab = ({ typeData }) => {
  return (
    <>
      <div className="prose max-w-none">
        <Header alignment="left">
          <CardHeading className="!text-primary">Product Overview</CardHeading>
          <Description>{typeData?.detailedDescription}</Description>
        </Header>
      </div>

      <div className="space-y-4">
        <CardHeading className="!text-primary">Key Features</CardHeading>
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-2">
          {typeData?.features?.map((feature, index) => (
            <li key={index} className="flex items-center justify-start">
              <div className="mr-2 flex-shrink-0">
                <ArrownRightIcon />
              </div>
              <div className="text-gray-700">{feature}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-8">
        <CardHeading className="!text-primary">Benefits</CardHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {typeData?.benefits?.map((benefit, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm bg-white p-4"
            >
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
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
                <span className="text-gray-700">{benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OverviewTab;
