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
import { BATTERY_PAGE_DATA } from "@/data/battery-page-data";

export default async function BatteryPage({ params: { locale } }) {
  const {
    metadata,
    pageHeader,
    sidebarCategories,
    batteryData,
    productData,
    batteryTypes,
    industryApplications,
    batteryFaqs,
    whyChooseUs,
    sidebar,
  } = BATTERY_PAGE_DATA;

  return (
    <>
      <SEOHead
        title={metadata.title.default}
        description={metadata.description}
        locale={locale}
        pageUrl="/battery-solutions-saudi-arabia"
      />
      <PageHeader pageHeader={pageHeader} />

      <section className="container mx-auto px-4 sm:px-6 md:px-4 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-10">
            <ImageSlider
              images={batteryData.images}
              altText={"Battery Images"}
            />
            <Header
              alignment="responsive"
              className="text-center mx-auto lg:!text-left"
            >
              <Heading className="!text-primary">{batteryData.title}</Heading>
              <Description>{batteryData.description}</Description>
            </Header>
            <ProductList ProductList={productData} />
          </div>

          <div className="lg:col-span-1 space-y-4">
            <SideCategoriesList sidebarCatagories={sidebarCategories} />
            <Sidebar sidebar={sidebar} />
          </div>
        </div>

        <ProductTypeCard ProductTypes={batteryTypes} />
        <IndustryApplications applications={industryApplications} />
        <WhyChooseUs whychooseus={whyChooseUs} />
        <FaqAccordion faqs={batteryFaqs.details} />
      </section>
    </>
  );
}
