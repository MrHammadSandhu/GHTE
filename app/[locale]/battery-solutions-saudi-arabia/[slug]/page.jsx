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
import { LITHIUM_ION_BATTERY_DATA, TUBULAR_BATTERY_DATA, VRLA_BATTERY_DATA } from "@/data/battery-page-data";

const BatteryTypeDetailPage = ({ params }) => {
  const resolvedParams = use(params);
  const [activeTab, setActiveTab] = useState("overview");

  let batteryData;

  switch (resolvedParams.slug) {
    case "vrla-(sealed-lead-acid)-batteries":
      batteryData = VRLA_BATTERY_DATA;
      break;
    case "lithium-ion-batteries":
      batteryData = LITHIUM_ION_BATTERY_DATA;
      break;
    case "tubular-batteries":
      batteryData = TUBULAR_BATTERY_DATA;
      break;
    default:
      batteryData = VRLA_BATTERY_DATA;
  }
  const dataKey = Object.keys(batteryData).find((key) =>
    key.toLowerCase().includes("batterydata")
  );
  const mainDataKey = dataKey || "VRLABatteryData";

  const batteryDetails = {
    ...batteryData[mainDataKey],
    metadata: batteryData.metadata,
    pageHeader: batteryData.pageHeader,
  };

  return (
    <>
      <SEOHead
        title={batteryDetails.metadata?.title.default}
        description={batteryDetails.metadata?.description}
        locale={resolvedParams.locale}
        pageUrl={`/battery-types/${resolvedParams.slug || "vrla"}`}
      />
      <PageHeader pageHeader={batteryDetails.pageHeader} />
      <div className="bg-gray-50">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <ImageSlider
                images={batteryDetails.images}
                altText={batteryDetails.name}
              />
              <TabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <div className="space-y-6">
                {activeTab === "overview" && (
                  <OverviewTab typeData={batteryDetails} />
                )}
                {activeTab === "specifications" && (
                  <SpecificationsTab
                    specifications={batteryDetails.specifications}
                    certifications={batteryDetails.certifications}
                    installationRequirements={
                      batteryDetails.installationRequirements
                    }
                  />
                )}
                {activeTab === "applications" && (
                  <ApplicationsTab
                    applications={batteryDetails.applications}
                    maintenanceInfo={batteryDetails.maintenanceInfo}
                    faqs={batteryDetails.faqs}
                  />
                )}
                {activeTab === "buyvsrent" && (
                  <BuyVsRentTab
                    buyVsRent={batteryDetails.buyVsRent}
                    purchase={batteryDetails.purchase}
                    rental={batteryDetails.rental}
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Sidebar typeData={batteryDetails} activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BatteryTypeDetailPage;
