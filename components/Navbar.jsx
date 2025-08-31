"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LanguageTranslator from "./LanguageTranslator";
import { motion } from "@/utils/animations";

const CustomLink = ({ href, title, className = "", toggle }) => {
  const t = useTranslations("Navigations"); // Use the "Navigations" namespace for translations

  const handleClick = () => {
    if (toggle) toggle();
  };

  return (
    <Link
      href={href}
      className={`${className} relative group text-[18px] text-light hover:text-secondary`}
      onClick={handleClick}
    >
      {t(title)} {/* Correct translation key */}
      <span className="inline-block w-0 absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-linear duration-700">
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const t = useTranslations("Navigations");
  const dropdownMenus = [
    {
      menuName: "power",
      links: [
        { href: "/ups-saudi-arabia", key: "ups_system" },
        { href: "/battery-solutions-saudi-arabia", key: "batteries" },
        { href: "/generators-saudi-arabia", key: "generators" },
        { href: "/load-bank-rental-saudi-arabia", key: "load_banks" },
        {
          href: "/automatic-voltage-regulator-services-saudi-arabia",
          key: "avrs",
        },
      ],
    },
    {
      menuName: "security",
      links: [
        { href: "/cctv-solutions-saudi-arabia", key: "cctv" },
        {
          href: "/access-control-systems-in-saudi-arabia",
          key: "access_control",
        },
        {
          href: "/fire-fighting-systems-solution-in-saudi-arabia",
          key: "firefighting",
        },
        {
          href: "/cyber-security-services-in-saudi-arabia",
          key: "cybersecurity",
        },
        { href: "/sound-system-services-in-saudi-arabia", key: "sound_system" },
      ],
    },
    {
      menuName: "it",
      links: [
        {
          href: "/racks-and-power-distribution-units-in-saudi-arabia",
          key: "racks",
        },
        { href: "/networking-solutions", key: "networking_switches" },
        {
          href: "/server-and-computer-solution-in-saudia-arabia",
          key: "servers_computers",
        },
      ],
    },
  ];

  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => {
    setOpen(false);
    setActiveDropdown(null);
  };
  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="w-full px-4 py-4 font-medium flex items-center justify-between lg:px-16 border-b-2 border-light/20 relative z-20">
      {/* Logo */}
      <Link href="/">
        <img src="/logo/logo.webp" alt="logo" className="w-36" />
      </Link>

      {/* Mobile menu toggle button */}
      <button
        className="flex flex-col justify-center items-center xl:hidden bg-primary p-3 px-2 rounded-md"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            open ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      {/* Desktop Menu */}
      <nav className="hidden xl:flex space-x-8 px-5 items-center">
        <CustomLink href="/" title="home" />
        <CustomLink href="/about" title="about" />
        {dropdownMenus.map(({ menuName, links }) => (
          <div
            key={menuName}
            className="relative group text-light text-[18px] flex items-center"
          >
            <div className="flex items-center gap-x-2 group-hover:font-semibold cursor-pointer">
              {t(menuName)}
            </div>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="absolute hidden group-hover:block bg-primary text-light shadow-lg py-4 rounded-lg w-[200px] -left-1 top-7">
              {links.map(({ href, key }) => (
                <Link
                  key={key}
                  href={href}
                  className="block hover:text-secondary hover:translate-x-1 transition-all py-2 px-4"
                >
                  {t(key)}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <CustomLink href="/client-projects" title="projects" />
        <CustomLink href="/contact" title="contact" />
        <LanguageTranslator />
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="min-w-[70vw] flex flex-col justify-between items-center absolute top-96 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 rounded-lg backdrop-blur-md py-20 !transform bg-primary xl:hidden"
        >
          <CustomLink
            href="/"
            title="home"
            toggle={closeMenu}
            className="mb-4"
          />
          <CustomLink
            href="/about"
            title="about"
            toggle={closeMenu}
            className="mb-4"
          />
          {dropdownMenus.map(({ menuName, links }) => (
            <div
              key={menuName}
              className="w-full flex flex-col items-center mb-4"
            >
              <button
                className="w-full text-center text-light flex items-center justify-center hover:text-secondary transition-all text-[18px]"
                onClick={() => toggleDropdown(menuName)}
                aria-expanded={activeDropdown === menuName}
              >
                {t(menuName)} {/* Use key directly */}
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              {activeDropdown === menuName && (
                <div className="w-full flex flex-col items-center justify-center py-2 rounded-md">
                  {links.map(({ href, key }) => (
                    <Link
                      key={key}
                      href={href}
                      className="block hover:text-secondary hover:translate-x-1 transition-all px-4 text-light mb-4"
                      onClick={closeMenu}
                    >
                      {t(key)} {/* Use key directly */}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <CustomLink
            href="/client-projects"
            title="projects"
            toggle={closeMenu}
            className="mb-4"
          />
          <CustomLink
            href="/contact"
            title="contact"
            toggle={closeMenu}
            className="mb-4"
          />
          <LanguageTranslator className="bg-secondary" />
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
