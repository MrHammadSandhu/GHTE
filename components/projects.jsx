"use client";
import React, { useState, useMemo, useCallback, memo } from "react";
import Link from "next/link";
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
import Image from "next/image";

const Projects = memo(({ projectsData }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.01 });

  return (
    <ProjectsSection
      innerRef={ref}
      inView={inView}
      projects={projectsData.projects}
      sectionHeader={projectsData.sectionHeader}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );
});

const ProjectsSection = memo(
  ({
    innerRef,
    inView,
    projects,
    sectionHeader,
    selectedCategory,
    setSelectedCategory,
  }) => {
    const filteredProjects = useMemo(() => {
      if (selectedCategory === "All") {
        return projects.flatMap((project) => project.items);
      }
      return (
        projects.find((project) => project.category === selectedCategory)
          ?.items || []
      );
    }, [selectedCategory, projects]);

    const handleCategoryChange = useCallback(
      (category) => {
        setSelectedCategory(category);
      },
      [setSelectedCategory]
    );

    return (
      <motion.div
        className="py-16"
        ref={innerRef}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-8 md:space-y-12">
          <Header>
            <SubHeading>{sectionHeader.heading}</SubHeading>
            <Heading className="!text-primary">
              {sectionHeader.subheading}
            </Heading>
            <Description className="!text-textcolor max-w-3xl mx-auto">
              {sectionHeader.description}
            </Description>
          </Header>

          <CategoryFilter
            categories={["All", ...projects.map((p) => p.category)]}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <ProjectGrid
            projects={filteredProjects}
            viewMoreText={sectionHeader.viewMoreBtn}
          />
        </div>
      </motion.div>
    );
  }
);

const CategoryFilter = memo(
  ({ categories, selectedCategory, onCategoryChange }) => (
    <div className="mb-8 flex flex-wrap justify-center">
      <ul className="flex flex-wrap space-x-2 space-y-2 items-center justify-center">
        {categories.map((category, index) => (
          <li
            key={index}
            className={`px-4 py-2 rounded cursor-pointer ${
              index === 0 ? "mt-2" : ""
            } ${
              selectedCategory === category
                ? "bg-secondary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
);

const ProjectGrid = memo(({ projects, viewMoreText }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 gap-x-3">
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        project={project}
        index={index}
        viewMoreText={viewMoreText}
      />
    ))}
  </div>
));

const ProjectCard = memo(({ project }) => {
  return (
    <motion.div
      className="relative overflow-hidden mx-auto w-full text-center group rounded-[30px] shadow-md hover:shadow-lg transition-shadow duration-300 h-full"
      variants={headingVariants}
    >
      <div className="overflow-hidden rounded-[30px] relative h-full">
        <Link href={project.link} className="block relative h-full">
          {/* Project Image */}
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

          {/* Black overlay gradient always visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80 rounded-[30px] opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

          {/* Text content */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-7 text-left transform transition-all duration-500 ease-out">
            {/* Title always visible */}
            <CardHeading className="!text-white mb-2 sm:mb-3">
              {project.title}
            </CardHeading>

            {/* Description revealed on hover */}
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


// Display names for debugging
Projects.displayName = "Projects";
ProjectsSection.displayName = "ProjectsSection";
CategoryFilter.displayName = "CategoryFilter";
ProjectGrid.displayName = "ProjectGrid";
ProjectCard.displayName = "ProjectCard";

export default Projects;
