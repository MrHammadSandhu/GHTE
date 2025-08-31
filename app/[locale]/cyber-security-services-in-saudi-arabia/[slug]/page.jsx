"use client";
import { use, useState } from "react"; // <-- use `use` from React
import ImageSlider from "@/components/ImageSlider";
import TabNavigation from "@/components/TabNavigation";
import Sidebar from "@/components/Sidebar";
import OverviewTab from "@/components/TabContent/OverviewTab";
import SpecificationsTab from "@/components/TabContent/SpecificationsTab";
import ApplicationsTab from "@/components/TabContent/ApplicationsTab";
import BuyVsRentTab from "@/components/TabContent/BuyVsRentTab";
import SEOHead from "@/components/SeoHead";
import PageHeader from "@/components/PageHeader";
import { ENDPOINT_SECURITY_DATA, MANAGED_SOC_DATA, PERIMETER_DEFENSE_SYSTEM_DATA } from "@/data/cybersecurity-page-data";

const GeneratorTypeDetailPage = ({ params }) => {
  const { slug, locale } = use(params);

  const [activeTab, setActiveTab] = useState("overview");

  let selectedData;
  let typeKey = "";

  switch (slug) {
    case "perimeter-defense-systems":
      selectedData = PERIMETER_DEFENSE_SYSTEM_DATA;
      typeKey = "PerimeterDefenseSystemData";
      break;
    case "managed-soc":
      selectedData = MANAGED_SOC_DATA;
      typeKey = "ManagedSocData";
      break;
    case "endpoint-security":
      selectedData = ENDPOINT_SECURITY_DATA;
      typeKey = "EndpointSecurityData";
      break;
    default:
      selectedData = PERIMETER_DEFENSE_SYSTEM_DATA;
      typeKey = "PerimeterDefenseSystemData";
  }

  const generatorDetails = {
    ...(selectedData[typeKey] || {}),
    metadata: selectedData.metadata,
    pageHeader: selectedData.pageHeader,
  };

  return (
    <>
      <SEOHead
        title={generatorDetails.metadata?.title.default}
        description={generatorDetails.metadata?.description}
        locale={locale}
        pageUrl={`/generator-types/${slug || "diesel-generators"}`}
      />
      <PageHeader pageHeader={generatorDetails.pageHeader} />

      <div className="bg-gray-50">
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <ImageSlider
                images={generatorDetails.images}
                altText={generatorDetails.name}
              />
              <TabNavigation
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <div className="space-y-6">
                {activeTab === "overview" && (
                  <OverviewTab typeData={generatorDetails} />
                )}
                {activeTab === "specifications" && (
                  <SpecificationsTab
                    specifications={generatorDetails.specifications}
                    certifications={generatorDetails.certifications}
                    installationRequirements={
                      generatorDetails.installationRequirements
                    }
                  />
                )}
                {activeTab === "applications" && (
                  <ApplicationsTab
                    applications={generatorDetails.applications}
                    maintenanceInfo={generatorDetails.maintenanceInfo}
                    faqs={generatorDetails.faqs}
                  />
                )}
                {activeTab === "buyvsrent" && (
                  <BuyVsRentTab
                    buyVsRent={generatorDetails.buyVsRent}
                    purchase={generatorDetails.purchase}
                    rental={generatorDetails.rental}
                  />
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <Sidebar typeData={generatorDetails} activeTab={activeTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneratorTypeDetailPage;
