"use client";

import { use, useState } from "react";
import ImageSlider from "@/components/ImageSlider";
import TabNavigation from "@/components/TabNavigation";
import Sidebar from "@/components/Sidebar";
import OverviewTab from "@/components/TabContent/OverviewTab";
import SpecificationsTab from "@/components/TabContent/SpecificationsTab";
import ApplicationsTab from "@/components/TabContent/ApplicationsTab";
import BuyVsRentTab from "@/components/TabContent/BuyVsRentTab";
import SEOHead from "@/components/SeoHead";
import PageHeader from "@/components/PageHeader";

import {
  INDUSTRIAL_PC_DATA,
  RACK_SERVERS_DATA,
  WORKSTATIONS_DATA,
} from "@/data/server-computer-page-data";

const ServerComputerTypeDetailPage = ({ params }) => {
  const { slug, locale } = use(params); // ✅ intentionally kept as per your instruction

  const [activeTab, setActiveTab] = useState("overview");

  let selectedData;
  let typeKey = "";

  switch (slug) {
    case "rack-servers":
      selectedData = RACK_SERVERS_DATA;
      typeKey = "RackServerData";
      break;
    case "workstations":
      selectedData = WORKSTATIONS_DATA;
      typeKey = "WorkstationData";
      break;
    case "industrial-pcs":
      selectedData = INDUSTRIAL_PC_DATA;
      typeKey = "IndustrialPCData";
      break;
    default:
      selectedData = RACK_SERVERS_DATA;
      typeKey = "RackServerData";
  }

  const computerDetails = {
    ...(selectedData[typeKey] || {}),
    metadata: selectedData.metadata,
    pageHeader: selectedData.pageHeader,
  };

  return (
    <>
      <SEOHead
        title={computerDetails.metadata?.title?.default}
        description={computerDetails.metadata?.description}
        locale={locale}
        pageUrl={`/server-computer-types/${slug || "rack-servers"}`} // ✅ corrected URL path
      />
      <PageHeader pageHeader={computerDetails.pageHeader} />

      <div className="bg-gray-50">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <ImageSlider
                images={computerDetails.images}
                altText={computerDetails.name}
              />
              <TabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <div className="space-y-6">
                {activeTab === "overview" && (
                  <OverviewTab typeData={computerDetails} />
                )}
                {activeTab === "specifications" && (
                  <SpecificationsTab
                    specifications={computerDetails.specifications}
                    certifications={computerDetails.certifications}
                    installationRequirements={
                      computerDetails.installationRequirements
                    }
                  />
                )}
                {activeTab === "applications" && (
                  <ApplicationsTab
                    applications={computerDetails.applications}
                    maintenanceInfo={computerDetails.maintenanceInfo}
                    faqs={computerDetails.faqs}
                  />
                )}
                {activeTab === "buyvsrent" && (
                  <BuyVsRentTab
                    buyVsRent={computerDetails.buyVsRent}
                    purchase={computerDetails.purchase}
                    rental={computerDetails.rental}
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Sidebar typeData={computerDetails} activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerComputerTypeDetailPage;
