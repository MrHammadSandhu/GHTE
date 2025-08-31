"use client";
import PageHeader from "@/components/PageHeader";
import Projects from "@/components/projects";
import SEOHead from "@/components/SeoHead";
import WhyChooseUs from "@/components/WhyChooseUs";
import { projectsData } from "@/data/projects-page-data";
import { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [resolvedParams, setResolvedParams] = useState(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolved = await params;
      setResolvedParams(resolved);
    };
    fetchParams();
  }, [params]);

  if (!resolvedParams) return null;

  return (
    <>
      <SEOHead
        title={projectsData.metadata.title.default}
        description={projectsData.metadata.description}
        locale={resolvedParams.locale}
        pageUrl="/client-projects"
      />
      <PageHeader pageHeader={projectsData.pageHeader} />
      <Projects projectsData={projectsData} /> {/* ✅ FIXED */}
      <WhyChooseUs whychooseus={projectsData.whychooseus} />
    </>
  );
};

export default Page;
