"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { memo } from "react";
import { motion } from "@/utils/animations";
import { ArrowWithCircleIcon, PhoneIcon } from "./Icons";

const buttonStyles = {
  primary: "bg-primary text-white border border-light hover:bg-primary/90",
  secondary:
    "bg-secondary text-white border border-light hover:bg-secondary/90",
  transparent:
    "bg-transparent text-white border border-light hover:bg-white/10",
};

const Button = memo(
  ({
    href,
    children,
    className = "",
    type = "primary",
    size = "md",
    onClick,
    disabled = false,
    fullWidth = false,
    htmlType = "button",
  }) => {
    const sizeClasses = {
      sm: "py-2 px-4 text-sm",
      md: "py-2.5 sm:py-3 px-4 sm:px-5 text-sm sm:text-base",
      lg: "py-3 sm:py-4 px-5 sm:px-6 text-base sm:text-lg",
    };

    const baseButtonClass =
      buttonStyles[type]?.replace(/hover:[^ ]+/g, "") ||
      buttonStyles.primary.replace(/hover:[^ ]+/g, "");
    const sizeClass = sizeClasses[size] || sizeClasses.md;
    const widthClass = fullWidth ? "w-full" : "";

    const commonClasses = `
      group relative inline-flex items-center justify-center overflow-hidden
      rounded-xl font-medium transition-all duration-300
      ${baseButtonClass} ${sizeClass} ${widthClass} ${className}
      ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
    `;

    const getOverlayColor = () => {
      switch (type) {
        case "primary":
          return "bg-secondary";
        case "secondary":
          return "bg-primary";
        case "transparent":
          return "bg-primary";
        case "outline":
          return "bg-primary/5";
        default:
          return "bg-secondary";
      }
    };

    const ButtonContent = () => (
      <>
        <span
          className={`absolute inset-0 ${getOverlayColor()} rounded-xl transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out`}
        ></span>
        <span className="relative z-10 flex items-center">
          {children}
          <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
            <ArrowWithCircleIcon stroke="white" fill="none" />
          </span>
        </span>
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={commonClasses}
          aria-disabled={disabled}
          onClick={(e) => disabled && e.preventDefault()}
        >
          <ButtonContent />
        </Link>
      );
    }

    return (
      <button
        type={htmlType}
        onClick={disabled ? undefined : onClick}
        className={commonClasses}
        disabled={disabled}
      >
        <ButtonContent />
      </button>
    );
  }
);
const CalltoActionBtn = memo(({ className = "" }) => {
  const t = useTranslations("CompanyBtn");
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const phoneNumber = t("phone");
  const displayNumber = isExpanded
    ? phoneNumber
    : phoneNumber.replace(/\s/g, "");

  return (
    <div
      className={`relative flex justify-start items-start gap-2 sm:gap-3 md:gap-4 cursor-pointer ${className}`}
      onMouseEnter={() => {
        setIsHovered(true);
        setShowTooltip(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowTooltip(false);
      }}
    >
      <motion.div
        className="flex-shrink-0 bg-secondary/15 rounded-full p-2 sm:p-3"
        animate={{
          rotate: isHovered ? [0, 15, -15, 0] : [0, 5, -5, 0],
          scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1],
        }}
        transition={{
          duration: isHovered ? 0.5 : 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <PhoneIcon className="h-5 w-5" />
      </motion.div>
      <div>
        <p className="text-xs sm:text-sm font-medium text-textcolor">
          {t("Support")}
        </p>
        <a
          href={`tel:${phoneNumber}`}
          className="text-base sm:text-lg md:text-xl font-semibold text-primary hover:text-primary/80 transition-colors"
          onClick={(e) => {
            if (isExpanded) {
              e.preventDefault();
              setIsExpanded(false);
            }
          }}
        >
          {displayNumber}
        </a>
      </div>

      {/* Beautiful Tooltip - Now at the bottom */}
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg shadow-lg z-10"
        >
          <div className="relative">
            {/* Tooltip arrow - Now at the top */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-transparent border-b-primary"></div>
            <p className="font-medium text-sm whitespace-nowrap">
              {t("Click_to_call_support")}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
});

Button.displayName = "Button";
CalltoActionBtn.displayName = "CalltoActionBtn";

export default Button;
export { CalltoActionBtn };
