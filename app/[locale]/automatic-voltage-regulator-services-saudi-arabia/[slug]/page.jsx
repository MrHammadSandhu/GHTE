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
  SERVO_TYPE_AVR_DATA,
  STATIC_VOLTAGE_REGULATOR_DATA,
  FERRORESONANT_AVR_DATA,
} from "@/data/avr-page-data";

const Page = ({ params }) => {
  const { slug, locale } = use(params);

  const [activeTab, setActiveTab] = useState("overview");

  let selectedData;
  let typeKey = "";

  switch (slug) {
    case "servo-type-avr":
      selectedData = SERVO_TYPE_AVR_DATA;
      typeKey = "ServoTypeAVRData";
      break;
    case "static-voltage-regulators":
      selectedData = STATIC_VOLTAGE_REGULATOR_DATA;
      typeKey = "StaticVoltageRegulatorData";
      break;
    case "ferroresonant-avrs":
      selectedData = FERRORESONANT_AVR_DATA;
      typeKey = "FerroresonantAVRData";
      break;
    default:
      selectedData = SERVO_TYPE_AVR_DATA;
      typeKey = "ServoTypeAVRData";
  }

  const avrDetails = {
    ...(selectedData[typeKey] || {}),
    metadata: selectedData.metadata,
    pageHeader: selectedData.pageHeader,
  };

  return (
    <>
      <SEOHead
        title={avrDetails.metadata?.title.default}
        description={avrDetails.metadata?.description}
        locale={locale}
        pageUrl={`/avr-types/${slug || "servo-type-avr"}`}
      />
      <PageHeader pageHeader={avrDetails.pageHeader} />

      <div className="bg-gray-50">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <ImageSlider
                images={avrDetails.images}
                altText={avrDetails.name}
              />
              <TabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <div className="space-y-6">
                {activeTab === "overview" && (
                  <OverviewTab typeData={avrDetails} />
                )}
                {activeTab === "specifications" && (
                  <SpecificationsTab
                    specifications={avrDetails.specifications}
                    certifications={avrDetails.certifications}
                    installationRequirements={
                      avrDetails.installationRequirements
                    }
                  />
                )}
                {activeTab === "applications" && (
                  <ApplicationsTab
                    applications={avrDetails.applications}
                    maintenanceInfo={avrDetails.maintenanceInfo}
                    faqs={avrDetails.faqs}
                  />
                )}
                {activeTab === "buyvsrent" && (
                  <BuyVsRentTab
                    buyVsRent={avrDetails.buyVsRent}
                    purchase={avrDetails.purchase}
                    rental={avrDetails.rental}
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Sidebar typeData={avrDetails} activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
