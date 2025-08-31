// servicesData.js
export const getServicesData = (t) => [
  {
    category: t("categories.power"),
    items: [
      {
        title: t("services.ups_system.title"),
        description: t("services.ups_system.description"),
        image: "/ups/ups.webp",
        link: "/ups-saudi-arabia",
      },
      {
        title: t("services.load_bank.title"),
        description: t("services.load_bank.description"),
        image: "/loadbank/loadbank.webp",
        link: "/load-bank-rental-saudi-arabia",
      },
      {
        title: t("services.Battery_Solutions.title"),
        description: t("services.Battery_Solutions.description"),
        image: "/batteries/batteries.webp",
        link: "/battery-solutions-saudi-arabia",
      },
      {
        title: t("services.AVR.title"),
        description: t("services.AVR.description"),
        image: "/avr/avr.webp",
        link: "/automatic-voltage-regulator-services-saudi-arabia",
      },
      {
        title: t("services.Generator.title"),
        description: t("services.Generator.description"),
        image: "/genrators/genraters.webp",
        link: "/generators-saudi-arabia",
      },
    ],
  },
  {
    category: t("categories.security"),
    items: [
      {
        title: t("services.CCTV.title"),
        description: t("services.CCTV.description"),
        image: "/cctv/cctv.webp",
        link: "/cctv-solutions-saudi-arabia",
      },
      {
        title: t("services.Access_Control.title"),
        description: t("services.Access_Control.description"),
        image: "/access-control/accesscontroll.webp",
        link: "/access-control-systems-in-saudi-arabia",
      },
      {
        title: t("services.Fire_Fighting.title"),
        description: t("services.Fire_Fighting.description"),
        image: "/firefighting/fire.webp",
        link: "/fire-fighting-systems-solution-in-saudi-arabia",
      },
      {
        title: t("services.Sound_System.title"),
        description: t("services.Sound_System.description"),
        image: "/soundsystem/sound.webp",
        link: "/sound-system-services-in-saudi-arabia",
      },
      {
        title: t("services.Cyber_Security.title"),
        description: t("services.Cyber_Security.description"),
        image: "/cybersecurity/cybersecurity.webp",
        link: "/cyber-security-services-in-saudi-arabia",
      },
    ],
  },
  {
    category: t("categories.it"),
    items: [
      {
        title: t("services.Server_Computer.title"),
        description: t("services.Server_Computer.description"),
        image: "/server-computer/server.webp",
        link: "/server-and-computer-solution-in-saudia-arabia",
      },
      {
        title: t("services.Networking_Switches.title"),
        description: t("services.Networking_Switches.description"),
        image: "/networking/networking.webp",
        link: "/",
      },
      {
        title: t("services.Racks_Power.title"),
        description: t("services.Racks_Power.description"),
        image: "/rack/racks.webp",
        link: "/racks-and-power-distribution-units-in-saudi-arabia",
      },
    ],
  },
];
