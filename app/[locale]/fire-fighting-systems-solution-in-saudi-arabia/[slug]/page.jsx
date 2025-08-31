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
import { FIRE_EXTINGUISHER_DATA, FM200_SYSTEM_DATA, SPRINKLER_SYSTEM_DATA } from "@/data/fire-fighting-page-data";

const GeneratorTypeDetailPage = ({ params }) => {
  const { slug, locale } = use(params);

  const [activeTab, setActiveTab] = useState("overview");

  let selectedData;
  let typeKey = "";

  switch (slug) {
    case "sprinkler-systems":
      selectedData = SPRINKLER_SYSTEM_DATA;
      typeKey = "SprinklerSystemData";
      break;
    case "fm200-systems":
      selectedData = FM200_SYSTEM_DATA;
      typeKey = "FM200SystemData";
      break;
    case "fire-extinguishers":
      selectedData = FIRE_EXTINGUISHER_DATA;
      typeKey = "FireExtinguisherData";
      break;
    default:
      selectedData = SPRINKLER_SYSTEM_DATA;
      typeKey = "SprinklerSystemData";
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
