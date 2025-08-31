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
  INDUSTRIAL_SWITCHES_DATA,
  MANAGED_SWITCHES_DATA,
  POE_SWITCHES_DATA,
} from "@/data/networking-switch-page-data";

const NetworkingSwitchTypeDetailPage = ({ params }) => {
  const { slug, locale } = use(params); // ✅ Preserved as requested

  const [activeTab, setActiveTab] = useState("overview");

  let selectedData;
  let typeKey = "";

  switch (slug) {
    case "managed-switches-(l2/l3)":
      selectedData = MANAGED_SWITCHES_DATA;
      typeKey = "ManagedSwitchesData";
      break;
    case "poe-network-switches":
      selectedData = POE_SWITCHES_DATA;
      typeKey = "PoESwitchData";
      break;
    case "industrial-network-switches":
      selectedData = INDUSTRIAL_SWITCHES_DATA;
      typeKey = "IndustrialSwitchData";
      break;
    default:
      selectedData = MANAGED_SWITCHES_DATA;
      typeKey = "ManagedSwitchesData";
  }

  const switchDetails = {
    ...(selectedData[typeKey] || {}),
    metadata: selectedData.metadata,
    pageHeader: selectedData.pageHeader,
  };

  return (
    <>
      <SEOHead
        title={switchDetails.metadata?.title?.default}
        description={switchDetails.metadata?.description}
        locale={locale}
        pageUrl={`/network-switch-types/${slug || "managed-switches-(l2/l3)"}`} // ✅ Updated path
      />
      <PageHeader pageHeader={switchDetails.pageHeader} />

      <div className="bg-gray-50">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <ImageSlider
                images={switchDetails.images}
                altText={switchDetails.name}
              />
              <TabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <div className="space-y-6">
                {activeTab === "overview" && (
                  <OverviewTab typeData={switchDetails} />
                )}
                {activeTab === "specifications" && (
                  <SpecificationsTab
                    specifications={switchDetails.specifications}
                    certifications={switchDetails.certifications}
                    installationRequirements={
                      switchDetails.installationRequirements
                    }
                  />
                )}
                {activeTab === "applications" && (
                  <ApplicationsTab
                    applications={switchDetails.applications}
                    maintenanceInfo={switchDetails.maintenanceInfo}
                    faqs={switchDetails.faqs}
                  />
                )}
                {activeTab === "buyvsrent" && (
                  <BuyVsRentTab
                    buyVsRent={switchDetails.buyVsRent}
                    purchase={switchDetails.purchase}
                    rental={switchDetails.rental}
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Sidebar typeData={switchDetails} activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NetworkingSwitchTypeDetailPage;
