"use client";

import React, { use } from "react";
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
import { AVR_PAGE_DATA } from "@/data/avr-page-data";

export default function Page({ params }) {
  const { locale } = use(params);

  const {
    metadata,
    pageHeader,
    sidebarCategories,
    generatorData,
    productData,
    generatorTypes,
    industryApplications,
    generatorFaqs,
    whyChooseUs,
    sidebar
  } = AVR_PAGE_DATA;

  return (
    <>
      <SEOHead
        title={metadata.title.default}
        description={metadata.description}
        locale={locale}
        pageUrl="/automatic-voltage-regulator-services-saudi-arabia"
      />
      <PageHeader pageHeader={pageHeader} />

      <section>
        <div className="container mx-auto px-4 sm:px-6 md:px-4 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-10">
              <ImageSlider
                images={generatorData.images}
                altText={"AVR Systems Images"}
              />
              <Header
                alignment="responsive"
                className="text-center mx-auto lg:!text-left"
              >
                <Heading className="!text-primary lg:!text-4xl sm:!text-2xl md:!text-3xl">
                  {generatorData.title}
                </Heading>
                <Description>{generatorData.description}</Description>
              </Header>
              <ProductList ProductList={productData} />
            </div>
            <div className="lg:col-span-1 space-y-4">
              <SideCategoriesList sidebarCatagories={sidebarCategories} />
              <Sidebar sidebar={sidebar} />
            </div>
          </div>
        </div>

        <ProductTypeCard ProductTypes={generatorTypes} />
        <IndustryApplications applications={industryApplications} />
        <WhyChooseUs whychooseus={whyChooseUs} />
        <FaqAccordion faqs={generatorFaqs} />
      </section>
    </>
  );
}
