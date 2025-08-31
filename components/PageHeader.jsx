"use client";
import React, { memo } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Heading } from "./Headings";

// Dynamically import Navbar with no SSR to reduce initial load time
const Navbar = dynamic(() => import("./Navbar"), { ssr: false });

const Breadcrumbs = memo(({ breadcrumbs, backto }) => {
  const router = useRouter();

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex justify-center space-x-4 text-sm md:text-lg font-semibold">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={index}
            className={`capitalize ${
              breadcrumb.active
                ? "text-secondary font-bold text-2xl"
                : "text-white"
            }`}
          >
            <button
              onClick={() => router.push(breadcrumb.link)}
              className="text-white hover:text-gray-200 transition-colors"
              type="button"
            >
              {backto}
            </button>{" "}
            / <span>{breadcrumb.name}</span>
          </li>
        ))}
      </ol>
    </nav>
  );
});

const PageHeader = memo(({ pageHeader }) => {
  const { title, backgroundImage, breadcrumbs, backto } = pageHeader;

  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          layout="fill"
          objectFit="cover"
          quality={60}
          priority={true}
          loading="eager"
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzMzMyIvPjwvc3ZnPg=="
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      <Navbar />

      {/* Content */}
      <div className="container mx-auto  px-4 sm:px-6 md:px-8 lg:px-12 py-40">
        <div className="text-center relative z-10">
          <Heading className="text-white">{title}</Heading>
          <Breadcrumbs breadcrumbs={breadcrumbs} backto={backto} />
        </div>
      </div>
    </div>
  );
});

// PropTypes for the pageHeader object
PageHeader.propTypes = {
  pageHeader: PropTypes.shape({
    title: PropTypes.string,
    breadcrumbs: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string,
        active: PropTypes.bool,
      })
    ),
    backgroundImage: PropTypes.string.isRequired,
    backto: PropTypes.string,
  }).isRequired,
};

// Default props with optimized values
PageHeader.defaultProps = {
  pageHeader: {
    title: "About Us",
    breadcrumbs: [
      { name: "home", link: "/", active: false },
      { name: "about us", link: "", active: true },
    ],
    backgroundImage: "https://via.placeholder.com/1920x1080?text=Loading", // Smaller placeholder
    backto: "Home",
  },
};

// Display names for debugging
Breadcrumbs.displayName = "Breadcrumbs";
PageHeader.displayName = "PageHeader";

export default PageHeader;
