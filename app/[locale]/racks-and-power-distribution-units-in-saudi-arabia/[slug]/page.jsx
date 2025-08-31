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
  DIESEL_GENERATOR_DATA,
  GAS_GENERATOR_DATA,
  STANDBY_GENERATOR_DATA,
} from "@/data/generators-page-data";

import {
  CABLE_TRAY_DATA,
  FLOOR_STANDING_RACK_DATA,
  FREE_STANDING_OPEN_RACK_DATA,
  INTELLIGENT_PDU_DATA,
  NETWORK_PATCH_PANEL_DATA,
  NETWORK_SWITCH_DATA,
  RACK_COOLING_UNIT_DATA,
  WALL_MOUNT_CABINET_DATA,
} from "@/data/rack-pdu-page-data";

const GeneratorTypeDetailPage = ({ params }) => {
  const { slug, locale } = use(params); // assumes `params` is a React resource

  const [activeTab, setActiveTab] = useState("overview");

  let selectedData;
  let typeKey = "";

  switch (slug) {
    case "floor-standing-server-racks":
      selectedData = FLOOR_STANDING_RACK_DATA;
      typeKey = "FloorStandingRackData";
      break;
    case "intelligent-rack-mount-pdus":
      selectedData = INTELLIGENT_PDU_DATA;
      typeKey = "IntelligentPduData";
      break;
    case "wall-mount-network-cabinets":
      selectedData = WALL_MOUNT_CABINET_DATA;
      typeKey = "WallMountCabinetData";
      break; // ✅ added missing break
    case "free-standing-open-racks":
      selectedData = FREE_STANDING_OPEN_RACK_DATA;
      typeKey = "OpenRackData";
      break;
    case "network-patch-panels":
      selectedData = NETWORK_PATCH_PANEL_DATA;
      typeKey = "PatchPanelData";
      break;
    // case "rack-cooling-units":
    //   selectedData = RACK_COOLING_UNIT_DATA;
    //   typeKey = "RackCoolingData";
    //   break;
    case "cable-trays-&-management-systems":
      selectedData = CABLE_TRAY_DATA;
      typeKey = "CableTrayData";
      break;
    case "network-switches-(rack-mount)":
      selectedData = NETWORK_SWITCH_DATA;
      typeKey = "NetworkSwitchData";
      break;
    default:
      selectedData = FLOOR_STANDING_RACK_DATA;
      typeKey = "FloorStandingRackData";
  }

  const productDetails = {
    ...(selectedData[typeKey] || {}),
    metadata: selectedData.metadata,
    pageHeader: selectedData.pageHeader,
  };

  return (
    <>
      <SEOHead
        title={productDetails.metadata?.title.default}
        description={productDetails.metadata?.description}
        locale={locale}
        pageUrl={`/rack-pdu-types/${slug || "floor-standing-server-racks"}`} // ✅ updated URL
      />
      <PageHeader pageHeader={productDetails.pageHeader} />

      <div className="bg-gray-50">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <ImageSlider
                images={productDetails.images}
                altText={productDetails.name}
              />
              <TabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <div className="space-y-6">
                {activeTab === "overview" && (
                  <OverviewTab typeData={productDetails} />
                )}
                {activeTab === "specifications" && (
                  <SpecificationsTab
                    specifications={productDetails.specifications}
                    certifications={productDetails.certifications}
                    installationRequirements={
                      productDetails.installationRequirements
                    }
                  />
                )}
                {activeTab === "applications" && (
                  <ApplicationsTab
                    applications={productDetails.applications}
                    maintenanceInfo={productDetails.maintenanceInfo}
                    faqs={productDetails.faqs}
                  />
                )}
                {activeTab === "buyvsrent" && (
                  <BuyVsRentTab
                    buyVsRent={productDetails.buyVsRent}
                    purchase={productDetails.purchase}
                    rental={productDetails.rental}
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Sidebar typeData={productDetails} activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneratorTypeDetailPage;
