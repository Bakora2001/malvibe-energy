import {
  Sun, Zap, Wrench, Battery, ClipboardCheck, Building2, Home, Lightbulb, Gauge,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const services: Service[] = [
  {
    slug: "solar-pv",
    title: "Solar PV Installation",
    short: "Grid-tied & hybrid solar systems for homes, offices and farms.",
    long:
      "Custom-designed photovoltaic systems using Tier-1 panels, MPPT inverters and lithium storage. From a 1kW starter system to a 500kW commercial array — we engineer for your roof, load profile and budget.",
    icon: Sun,
  },
  {
    slug: "solar-water-heating",
    title: "Solar Water Heating",
    short: "Flat-plate and evacuated-tube systems that cut your bills by 80%.",
    long:
      "EPRA-compliant solar water heating for residential estates, hotels, hospitals and factories. We supply, install and certify pressurized & non-pressurized systems with up to 200L–10,000L capacity.",
    icon: Wrench,
  },
  {
    slug: "electrical-installations",
    title: "Electrical Installations",
    short: "Licensed wiring, panel boards, lighting & power distribution.",
    long:
      "Full electrical installations for new builds, renovations and industrial sites. EPRA-licensed engineers handle wiring, distribution boards, earthing, lightning protection, and KPLC connection.",
    icon: Zap,
  },
  {
    slug: "testing-equipment-leasing",
    title: "Electrical / Solar Testing Equipment Leasing",
    short: "Calibrated test gear for hire — IR testers, clamp meters, IV curve tracers & more.",
    long:
      "Lease professional-grade electrical and solar testing equipment by the day, week or month. Our calibrated fleet includes insulation resistance testers, earth-loop testers, clamp meters, thermal cameras, PV IV-curve tracers and irradiance meters — perfect for contractors, inspectors and EPRA T3 candidates.",
    icon: Gauge,
  },
  {
    slug: "backup-power",
    title: "Backup Power & Inverters",
    short: "Inverters, lithium batteries and seamless changeover systems.",
    long:
      "Goodbye blackouts. We install pure sine-wave inverters, lithium-ion battery banks, ATS panels and hybrid generators sized to your critical loads, with remote monitoring.",
    icon: Battery,
  },
  {
    slug: "maintenance",
    title: "Solar Maintenance & Repairs",
    short: "Annual servicing, panel cleaning, fault diagnosis & upgrades.",
    long:
      "Keep your system at peak output. Scheduled maintenance contracts include performance auditing, panel washing, inverter firmware updates, battery health checks and rapid fault response.",
    icon: Wrench,
  },
  {
    slug: "energy-audit",
    title: "Energy Audits & Consulting",
    short: "Find waste. Right-size systems. Save up to 40% on power bills.",
    long:
      "Detailed energy audits with thermal imaging and load logging. We deliver a clear ROI report, sizing recommendations and a phased implementation plan tailored to your operation.",
    icon: ClipboardCheck,
  },
  {
    slug: "off-grid",
    title: "Off-grid & Hybrid Systems",
    short: "Total energy independence for remote sites and farms.",
    long:
      "Standalone solar + storage systems for off-grid homes, lodges, schools, boreholes and telecom sites. Fully autonomous designs with optional generator backup.",
    icon: Home,
  },
  {
    slug: "solar-lighting",
    title: "Street & Security Solar Lighting",
    short: "All-in-one solar street lights for estates, schools & roads.",
    long:
      "Integrated solar streetlights, perimeter floodlights and pathway bollards with motion sensors and dusk-to-dawn control. Zero wiring, zero electricity bills.",
    icon: Lightbulb,
  },
];

export const commercialPartners = [
  "Hotels & Resorts",
  "Schools & Universities",
  "Hospitals & Clinics",
  "Manufacturing & Agro-processing",
  "Real Estate Developments",
  "NGOs & Government",
];

export { Building2 };
