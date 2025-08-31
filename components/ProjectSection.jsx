"use client";
import React, { useMemo, memo, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  containerVariants,
  headingVariants,
  useInView,
  motion,
} from "@/utils/animations";
import {
  CardHeading,
  Description,
  Header,
  Heading,
  SubHeading,
} from "./Headings";
import Button from "./Button";

const ProjectsSection = memo(() => {
  const t = useTranslations("FeaturedProjects");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const projects = useMemo(
    () => [
      {
        title: t("STC_Headquarters.title"),
        description: t("STC_Headquarters.description"),
        image: "/projects/stc.webp",
        link: "#",
      },
      {
        title: t("Riyadh_Metro.title"),
        description: t("Riyadh_Metro.description"),
        image: "/projects/riyadhmetro.webp",
        link: "#",
      },
      {
        title: t("National_CyberCrime_Agency.title"),
        description: t("National_CyberCrime_Agency.description"),
        image: "/projects/cybercrime.webp",
        link: "#",
      },
      {
        title: t("Batterjee_Medical_College.title"),
        description: t("Batterjee_Medical_College.description"),
        image: "/projects/batterjee.webp",
        link: "#",
      },
    ],
    [t]
  );

  return (
    <ProjectsSectionContent
      ref={ref}
      inView={inView}
      projects={projects}
      translations={t}
    />
  );
});

const ProjectsSectionContent = memo(
  ({ ref, inView, projects, translations: t }) => {
    return (
      <motion.div
        className="bg-light"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16 lg:py-20 space-y-4 xl:space-y-6">
          <ProjectsHeader translations={t} />
          <ProjectsGrid projects={projects} viewMoreText={t("view_more_btn")} />
          <Button
            href="/client-projects"
            type="secondary"
            size="lg"
            className="w-fit"
          >
            {t("view_projects")}
          </Button>
        </div>
      </motion.div>
    );
  }
);

const ProjectsHeader = memo(({ translations: t }) => (
  <Header>
    <SubHeading>{t("heading")}</SubHeading>
    <Heading className="!text-primary">{t("subheading")}</Heading>
    <Description className="!text-textcolor">{t("description")}</Description>
  </Header>
));

const ProjectsGrid = memo(({ projects, viewMoreText }) => (
  <motion.div
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    variants={containerVariants}
  >
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        project={project}
        index={index}
        viewMoreText={viewMoreText}
      />
    ))}
  </motion.div>
));

const ProjectCard = memo(({ project, index }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement to update tooltip position
  const handleMouseMove = (e) => {
    setTooltipPosition({
      x: e.clientX + 15,
      y: e.clientY - 10,
    });
  };

  return (
    <motion.div
      className="relative overflow-hidden mx-auto w-full text-center group rounded-[30px] shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
      variants={headingVariants}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onMouseMove={handleMouseMove}
    >
      <div className="overflow-hidden rounded-[30px] relative h-full">
        <Link href={project.link} className="block relative h-full">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={750}
            className="w-full aspect-[1/1.5] object-cover transition-transform duration-500 group-hover:scale-110 rounded-[30px]"
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 rounded-[30px] opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>

          {/* Content Container - Fixed positioning relative to card */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-7 text-left transform transition-all duration-500 ease-out">
            <CardHeading className="!text-white mb-2 sm:mb-3">
              {project.title}
            </CardHeading>

            {/* Use max-height transition for better animation */}
            <div className="overflow-hidden transition-all duration-500 ease-out max-h-0 group-hover:max-h-32">
              <Description className="!text-white/90 text-sm sm:text-base transition-opacity duration-300">
                {project.description}
              </Description>
            </div>
          </div>
        </Link>
      </div>
    </motion.div>
  );
});

// Add display names for better debugging
ProjectsSection.displayName = "ProjectsSection";
ProjectsSectionContent.displayName = "ProjectsSectionContent";
ProjectsHeader.displayName = "ProjectsHeader";
ProjectsGrid.displayName = "ProjectsGrid";
ProjectCard.displayName = "ProjectCard";

export default ProjectsSection;
