import { Description, Header, Heading } from "@/components/Headings";
import { IndustryApplications } from "@/components/IndustryApplications";
import ImageSlider from "@/components/ImageSlider";
import Sidebar from "@/components/Sidebar";
import PageHeader from "@/components/PageHeader";
import { SideCategoriesList } from "@/components/CategoriesList";
import { ProductList } from "@/components/ProductList";
import ProductTypeCard from "@/components/ProductTypeCard";
import SEOHead from "@/components/SeoHead";
import WhyChooseUs from "@/components/WhyChooseUs";
import FaqAccordion from "@/components/FaqAccordion";
import { getTranslations } from "next-intl/server";
import { UPS_PAGE_DATA } from "@/data/ups-page-data";

export default async function page({ params: { locale } }) {
  const {
    metadata,
    pageHeader,
    Sidebarcategories,
    UPSData,
    ProductData,
    UPS_TYPES,
    UPS_APPLICATIONS,
    UPS_FAQS,
    whychooseus,
    sidebar,
  } = UPS_PAGE_DATA;

  return (
    <>
      <SEOHead
        title={metadata.title.default}
        description={metadata.description}
        locale={locale}
        pageUrl="/ups-saudi-arabia"
      />
      <PageHeader pageHeader={pageHeader} />
      <section>
        <div className="container mx-auto px-4 sm:px-6 md:px-4 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-10">
              <ImageSlider
                images={UPSData.images}
                altText={"UPS Systems Images"}
              />
              <Header
                alignment="responsive"
                className="text-center mx-auto lg:!text-left"
              >
                <Heading className="!text-primary">{UPSData.title}</Heading>
                <Description>{UPSData.description}</Description>
              </Header>
              <ProductList ProductList={ProductData} />
            </div>
            <div className="lg:col-span-1 space-y-4">
              <SideCategoriesList sidebarCatagories={Sidebarcategories} />
              <Sidebar sidebar={sidebar} />
            </div>
          </div>
        </div>
        <ProductTypeCard ProductTypes={UPS_TYPES} />
        <IndustryApplications applications={UPS_APPLICATIONS} />
        <WhyChooseUs whychooseus={whychooseus} />
        <FaqAccordion faqs={UPS_FAQS} />
      </section>
    </>
  );
}
