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
import { COMBINED_LOAD_BANK_DATA, REACTIVE_LOAD_BANK_DATA, RESISTIVE_LOAD_BANK_DATA } from "@/data/load-bank-page-data";

const LoadBankTypeDetailPage = ({ params }) => {
  const resolvedParams = use(params);
  const [activeTab, setActiveTab] = useState("overview");

  let selectedData;

  switch (resolvedParams.slug) {
    case "resistive":
      selectedData = RESISTIVE_LOAD_BANK_DATA;
      break;
    case "reactive":
      selectedData = REACTIVE_LOAD_BANK_DATA;
      break;
    case "combined":
      selectedData = COMBINED_LOAD_BANK_DATA;
      break;
    default:
      selectedData = RESISTIVE_LOAD_BANK_DATA;
  }

  const dataKey = Object.keys(selectedData).find((key) =>
    key.toLowerCase().includes("loadbankdata")
  );

  const typeData = {
    ...selectedData[dataKey],
    metadata: selectedData.metadata,
    pageHeader: selectedData.pageHeader,
  };

  return (
    <>
      <SEOHead
        title={typeData.metadata?.title.default}
        description={typeData.metadata?.description}
        locale={resolvedParams.locale}
        pageUrl={`/load-bank-types/${resolvedParams.slug || "resistive"}`}
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

export default LoadBankTypeDetailPage;
