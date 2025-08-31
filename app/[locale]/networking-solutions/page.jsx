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
import { NETWORKING_SWITCH_PAGE_DATA } from "@/data/networking-switch-page-data";

export default async function NetworkingSwitchPage({ params: { locale } }) {
  const {
    metadata,
    pageHeader,
    sidebarCategories,
    networkingData,
    productData,
    NETWORKING_TYPES,
    NETWORKING_APPLICATIONS,
    NETWORKING_FAQS,
    whychooseus,
    sidebar,
  } = NETWORKING_SWITCH_PAGE_DATA;

  return (
    <>
      <SEOHead
        title={metadata.title.default}
        description={metadata.description}
        locale={locale}
        pageUrl="/network-switches-saudi-arabia"
      />
      <PageHeader pageHeader={pageHeader} />

      <section className="container mx-auto px-4 sm:px-6 md:px-4 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-10">
            <ImageSlider
              images={networkingData.images}
              altText={"Network Switches Images"}
            />
            <Header
              alignment="responsive"
              className="text-center mx-auto lg:!text-left"
            >
              <Heading className="!text-primary lg:!text-4xl sm:!text-2xl md:!text-3xl">
                {networkingData.title}
              </Heading>
              <Description>{networkingData.description}</Description>
            </Header>
            <ProductList ProductList={productData} />
          </div>

          <div className="lg:col-span-1 space-y-4">
            <SideCategoriesList sidebarCatagories={sidebarCategories} />
            <Sidebar sidebar={sidebar} />
          </div>
        </div>

        <ProductTypeCard ProductTypes={NETWORKING_TYPES} />
        <IndustryApplications applications={NETWORKING_APPLICATIONS} />
        <WhyChooseUs whychooseus={whychooseus} />
        <FaqAccordion faqs={NETWORKING_FAQS.details} />
      </section>
    </>
  );
}
