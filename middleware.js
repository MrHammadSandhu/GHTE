import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",
    "/about",
    "/ups-saudi-arabia",
    "/battery-solutions-saudi-arabia",
    "/generators-saudi-arabia",
    "/load-bank-rental-saudi-arabia",
    "/automatic-voltage-regulator-services-saudi-arabia",
    "/cctv-solutions-saudi-arabia",
    "/access-control-systems-in-saudi-arabia",
    "/fire-fighting-systems-solution-in-saudi-arabia",
    "/cyber-security-services-in-saudi-arabia",
    "/sound-system-services-in-saudi-arabia",
    "/networking-solutions",
    "/racks-and-power-distribution-units-in-saudi-arabia",
    "/server-and-computer-solution-in-saudia-arabia",
    "/client-projects",
    "/contact",
    "/(ar|en)/:path*",
  ],
};
