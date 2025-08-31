"use client";

import { use, useState } from "react"; // ✅ use() for unwrapping `params`
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
  BULLET_CAMERA_DATA,
  DOME_CAMERA_DATA,
  IP_CAMERA_DATA,
  NVR_SYSTEM_DATA,
  PTZ_CAMERA_DATA,
  WIRELESS_CAMERA_DATA,
} from "@/data/cctv-page-data";

const CctvTypeDetailPage = ({ params }) => {
  const { slug, locale } = use(params); // ✅ unwrap params

  const [activeTab, setActiveTab] = useState("overview");

  let selectedData;
  let typeKey = "";

  switch (slug) {
    case "ip-cameras":
      selectedData = IP_CAMERA_DATA;
      typeKey = "IPCameraData";
      break;
    case "dome-cameras":
      selectedData = DOME_CAMERA_DATA;
      typeKey = "DomeCameraData";
      break;
    case "bullet-cameras":
      selectedData = BULLET_CAMERA_DATA;
      typeKey = "BulletCameraData";
      break;
    case "ptz-cameras":
      selectedData = PTZ_CAMERA_DATA;
      typeKey = "PTZCameraData";
      break;
    case "wireless-cameras":
      selectedData = WIRELESS_CAMERA_DATA;
      typeKey = "WirelessCameraData";
      break;
    case "nvr-systems":
      selectedData = NVR_SYSTEM_DATA;
      typeKey = "NVRSystemData";
      break;
    default:
      selectedData = IP_CAMERA_DATA;
      typeKey = "IPCameraData";
  }

  const cameraDetails = {
    ...(selectedData[typeKey] || {}),
    metadata: selectedData.metadata,
    pageHeader: selectedData.pageHeader,
  };

  return (
    <>
      <SEOHead
        title={cameraDetails.metadata?.title.default}
        description={cameraDetails.metadata?.description}
        locale={locale}
        pageUrl={`/cctv-types/${slug || "ip-cameras"}`}
      />
      <PageHeader pageHeader={cameraDetails.pageHeader} />

      <div className="bg-gray-50">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <ImageSlider
                images={cameraDetails.images}
                altText={cameraDetails.name}
              />
              <TabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <div className="space-y-6">
                {activeTab === "overview" && (
                  <OverviewTab typeData={cameraDetails} />
                )}
                {activeTab === "specifications" && (
                  <SpecificationsTab
                    specifications={cameraDetails.specifications}
                    certifications={cameraDetails.certifications}
                    installationRequirements={
                      cameraDetails.installationRequirements
                    }
                  />
                )}
                {activeTab === "applications" && (
                  <ApplicationsTab
                    applications={cameraDetails.applications}
                    maintenanceInfo={cameraDetails.maintenanceInfo}
                    faqs={cameraDetails.faqs}
                  />
                )}
                {activeTab === "buyvsrent" && (
                  <BuyVsRentTab
                    buyVsRent={cameraDetails.buyVsRent}
                    purchase={cameraDetails.purchase}
                    rental={cameraDetails.rental}
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Sidebar typeData={cameraDetails} activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CctvTypeDetailPage;
