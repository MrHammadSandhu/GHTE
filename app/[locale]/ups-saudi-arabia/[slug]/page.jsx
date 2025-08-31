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
  LINE_INTERACTIVE_UPS_DATA,
  ONLINE_UPS_DATA,
  STANDBY_UPS_DATA,
} from "@/data/ups-page-data";

const UpsSystemDetailPage = ({ params }) => {
  const resolvedParams = use(params);
  const [activeTab, setActiveTab] = useState("overview");

  let selectedData;
  let typeKey = "";

  switch (resolvedParams.slug) {
    case "online-ups":
      selectedData = ONLINE_UPS_DATA;
      typeKey = "OnlineUpsData";
      break;
    case "standby-ups":
      selectedData = STANDBY_UPS_DATA;
      typeKey = "StandbyUpsData";
      break;
    case "line-interactive-ups":
      selectedData = LINE_INTERACTIVE_UPS_DATA;
      typeKey = "LineInteractiveUpsData";
      break;
    default:
      selectedData = ONLINE_UPS_DATA;
      typeKey = "OnlineUpsData";
  }

  const typeData = {
    ...(selectedData[typeKey] || {}),
    metadata: selectedData.metadata,
    pageHeader: selectedData.pageHeader,
  };

  return (
    <>
      <SEOHead
        title={typeData.metadata?.title?.default}
        description={typeData.metadata?.description}
        locale={resolvedParams.locale}
        pageUrl={`/ups-saudi-arabia/${resolvedParams.slug || "online-ups"}`}
      />
      <PageHeader pageHeader={typeData.pageHeader} />
      <div className="bg-gray-50">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <ImageSlider images={typeData.images} altText={typeData.name} />
              <TabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <div className="space-y-6">
                {activeTab === "overview" && (
                  <OverviewTab typeData={typeData} />
                )}
                {activeTab === "specifications" && (
                  <SpecificationsTab
                    specifications={typeData.specifications}
                    certifications={typeData.certifications}
                    installationRequirements={typeData.installationRequirements}
                  />
                )}
                {activeTab === "applications" && (
                  <ApplicationsTab
                    applications={typeData.applications}
                    maintenanceInfo={typeData.maintenanceInfo}
                    faqs={typeData.faqs}
                  />
                )}
                {activeTab === "buyvsrent" && (
                  <BuyVsRentTab
                    buyVsRent={typeData.buyVsRent}
                    purchase={typeData.purchase}
                    rental={typeData.rental}
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Sidebar typeData={typeData} activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpsSystemDetailPage;
