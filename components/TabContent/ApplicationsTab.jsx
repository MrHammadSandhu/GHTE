import FaqAccordion from "../FaqAccordion";
import { CardHeading, Description } from "../Headings";

const ApplicationsTab = ({ applications, maintenanceInfo, faqs }) => {
  return (
    <>
      <div>
        <CardHeading className="!text-primary">
          Maintenance Information
        </CardHeading>
        <Description>{maintenanceInfo}</Description>
      </div>
      <div>
        <CardHeading className="!text-primary">Ideal Applications</CardHeading>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          {applications?.map((app, index) => (
            <div key={index} className="border rounded-lg shadow-sm bg-white">
              <div className="p-4">
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
                  <span className="text-gray-700">{app}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FaqAccordion faqs={faqs} />
    </>
  );
};

export default ApplicationsTab;
