"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import * as m from "framer-motion/m";

export type CanonicalBrandKey =
  | "walmart"
  | "epsilon"
  | "tata-steel"
  | "tata-consumer"
  | "hul"
  | "campus"
  | "xlri"
  | "1001-stories"
  | "ajooni"
  | "arthdex"
  | "zerodha"
  | "maruti"
  | "galderma"
  | "hero"
  | "tvs"
  | "iimb"
  | "the-ken"
  | "mochatrade"
  | "vit"
  | "springer"
  | "shree-gajanan"
  | "nitd"
  | "iims"
  | "isb"
  | "dps"
  | "st-patricks";

export type BrandKey =
  | CanonicalBrandKey
  | "tata-consumer-products"
  | "campus-activewear"
  | "hul-red-label"
  | "ajooni-biotech"
  | "maruti-suzuki"
  | "tvs-credit"
  | "gajanan"
  | "iim-bangalore"
  | "iim-sirmaur"
  | "nit-durgapur"
  | "vit-chennai"
  | "delhi-public-school"
  | "st-patricks-asansol";

export type BrandMeta = {
  key: CanonicalBrandKey;
  name: string;
  short: string;
  context: string;
  metric: string;
  href: string;
  accent: string;
  bg: string;
  hasOfficialLogo?: boolean;
};

export function resolveBrandKey(key: BrandKey): CanonicalBrandKey {
  switch (key) {
    case "tata-consumer-products":
      return "tata-consumer";
    case "campus-activewear":
      return "campus";
    case "hul-red-label":
      return "hul";
    case "ajooni-biotech":
      return "ajooni";
    case "maruti-suzuki":
      return "maruti";
    case "tvs-credit":
      return "tvs";
    case "gajanan":
      return "shree-gajanan";
    case "iim-bangalore":
      return "iimb";
    case "iim-sirmaur":
      return "iims";
    case "nit-durgapur":
      return "nitd";
    case "vit-chennai":
      return "vit";
    case "delhi-public-school":
      return "dps";
    case "st-patricks-asansol":
      return "st-patricks";
    default:
      return key;
  }
}

export const BRANDS: Record<CanonicalBrandKey, BrandMeta> = {
  walmart: {
    key: "walmart",
    name: "Walmart",
    short: "Walmart",
    context: "Epsilon Account (2023-2025)",
    metric: "~$4M reallocated",
    href: "/#experience",
    accent: "#0053E2",
    bg: "#EBF2FF",
    hasOfficialLogo: true,
  },
  epsilon: {
    key: "epsilon",
    name: "Epsilon",
    short: "Epsilon",
    context: "Associate Data Scientist",
    metric: "22% ROI lift",
    href: "/#experience",
    accent: "#0F5BFF",
    bg: "#ECF2FF",
    hasOfficialLogo: true,
  },
  "tata-steel": {
    key: "tata-steel",
    name: "Tata Steel",
    short: "Tata Steel",
    context: "Live Project, Green Steel",
    metric: "$30.5/t (modelled)",
    href: "/work/tata-steel",
    accent: "#0054A6",
    bg: "#EBF3FA",
    hasOfficialLogo: true,
  },
  "tata-consumer": {
    key: "tata-consumer",
    name: "Tata Consumer Products",
    short: "Tata Consumer",
    context: "Live Project, Tata Sampann",
    metric: "24.5% core ROCE",
    href: "/work/tata-consumer-products",
    accent: "#0054A6",
    bg: "#EBF5F0",
    hasOfficialLogo: true,
  },
  hul: {
    key: "hul",
    name: "Hindustan Unilever",
    short: "HUL Red Label",
    context: "Research Project, Red Label",
    metric: "Rs.20 optimal price",
    href: "/work/hul-red-label",
    accent: "#1F36C7",
    bg: "#EDF0FC",
    hasOfficialLogo: true,
  },
  campus: {
    key: "campus",
    name: "Campus Activewear",
    short: "Campus",
    context: "Live Project, 5-Yr Valuation",
    metric: "11% vs 21% growth",
    href: "/work/campus-activewear",
    accent: "#E31E24",
    bg: "#FCEEEF",
    hasOfficialLogo: true,
  },
  zerodha: {
    key: "zerodha",
    name: "Zerodha",
    short: "Zerodha",
    context: "TENET 2026 National 1st Runner-Up",
    metric: "452 registrations",
    href: "/competitions/tenet-2026",
    accent: "#387ED1",
    bg: "#EDF4FC",
    hasOfficialLogo: true,
  },
  maruti: {
    key: "maruti",
    name: "Maruti Suzuki",
    short: "Maruti Suzuki",
    context: "XCELerate 2026 Semi-Finalist",
    metric: "1 of 143 teams",
    href: "/competitions/xcelerate-maruti-suzuki-2026",
    accent: "#003399",
    bg: "#ECEFFB",
    hasOfficialLogo: true,
  },
  galderma: {
    key: "galderma",
    name: "Galderma",
    short: "Galderma",
    context: "GRAD 3.0 Semi-Finalist",
    metric: "Top of 26,805",
    href: "/competitions/grad-3-galderma",
    accent: "#111111",
    bg: "#F0EFEA",
    hasOfficialLogo: true,
  },
  mochatrade: {
    key: "mochatrade",
    name: "Mochatrade (YC P26)",
    short: "Mochatrade",
    context: "Venix Finalist & Market Makers",
    metric: "1 of 15 from 834",
    href: "/competitions/market-makers-mochatrade",
    accent: "#FF6600",
    bg: "#FFF1E6",
    hasOfficialLogo: true,
  },
  xlri: {
    key: "xlri",
    name: "XLRI Jamshedpur",
    short: "XLRI",
    context: "PGDM-BM & Alumni Policy",
    metric: "99.87%ile XAT",
    href: "/work/xlri-alumni-policy",
    accent: "#1B365D",
    bg: "#EEF2F7",
    hasOfficialLogo: true,
  },
  springer: {
    key: "springer",
    name: "Springer",
    short: "Springer",
    context: "Published ICBCC Paper",
    metric: "400+ accesses",
    href: "/#research",
    accent: "#01324B",
    bg: "#EBF2F6",
    hasOfficialLogo: true,
  },
  "1001-stories": {
    key: "1001-stories",
    name: "1001 Stories",
    short: "1001 Stories",
    context: "Live Project, Behaviour Study",
    metric: "-40% screen time",
    href: "/work/1001-stories",
    accent: "#F25F22",
    bg: "#FEF2EC",
    hasOfficialLogo: true,
  },
  ajooni: {
    key: "ajooni",
    name: "Ajooni Biotech",
    short: "Ajooni Biotech",
    context: "Course Project, Corporate Finance",
    metric: "24.47% WACC",
    href: "/work/ajooni-biotech",
    accent: "#1F6E43",
    bg: "#EBF6F0",
    hasOfficialLogo: true,
  },
  arthdex: {
    key: "arthdex",
    name: "Arthdex",
    short: "Arthdex",
    context: "Product, Quantitative Equity",
    metric: "2,592 NSE/BSE cos",
    href: "/work/arthdex",
    accent: "#2563EB",
    bg: "#EDF3FE",
    hasOfficialLogo: true,
  },
  hero: {
    key: "hero",
    name: "Hero MotoCorp",
    short: "Hero MotoCorp",
    context: "Campus Challenge Season 10",
    metric: "1 of 60 from 206,673",
    href: "/#recognition",
    accent: "#E21A22",
    bg: "#FDECEC",
    hasOfficialLogo: true,
  },
  tvs: {
    key: "tvs",
    name: "TVS Credit",
    short: "TVS Credit",
    context: "E.P.I.C 8.0 Finance Challenge",
    metric: "1 of 319 from 36,900",
    href: "/#recognition",
    accent: "#1A3B70",
    bg: "#EDF1F8",
    hasOfficialLogo: true,
  },
  iimb: {
    key: "iimb",
    name: "IIM Bangalore",
    short: "IIM Bangalore",
    context: "Venix 2026 Case Finalist",
    metric: "1 of 15 from 834",
    href: "/competitions/mochaverse-venix-2026",
    accent: "#9B1B30",
    bg: "#FBECEE",
    hasOfficialLogo: true,
  },
  "the-ken": {
    key: "the-ken",
    name: "The Ken",
    short: "The Ken",
    context: "The Great Rewiring 2026",
    metric: "Top 7% of 6,000",
    href: "/#recognition",
    accent: "#E11D2E",
    bg: "#FDECEE",
    hasOfficialLogo: true,
  },
  vit: {
    key: "vit",
    name: "VIT Chennai",
    short: "VIT Chennai",
    context: "B.Tech CSE",
    metric: "8.71 CGPA",
    href: "/#education",
    accent: "#1E3A8A",
    bg: "#EDF1FB",
    hasOfficialLogo: true,
  },
  "shree-gajanan": {
    key: "shree-gajanan",
    name: "Shree Gajanan",
    short: "Shree Gajanan",
    context: "Supply Chain Intern, Grade A+",
    metric: "Rs.9.19Cr optimized",
    href: "/#experience",
    accent: "#B45309",
    bg: "#FEF3E7",
    hasOfficialLogo: true,
  },
  nitd: {
    key: "nitd",
    name: "NIT Durgapur",
    short: "NIT Durgapur",
    context: "IIC B-Plan Pitch 2025",
    metric: "National Finalist",
    href: "/#recognition",
    accent: "#7C2D12",
    bg: "#FEF2EC",
    hasOfficialLogo: true,
  },
  iims: {
    key: "iims",
    name: "IIM Sirmaur",
    short: "IIM Sirmaur",
    context: "Ophzeus 5.0, Sierra'23",
    metric: "National Finalist",
    href: "/#recognition",
    accent: "#312E81",
    bg: "#EEF2FF",
    hasOfficialLogo: true,
  },
  isb: {
    key: "isb",
    name: "Indian School of Business",
    short: "ISB",
    context: "Executive & Case Forums",
    metric: "National Case Forum",
    href: "/#recognition",
    accent: "#002B49",
    bg: "#EDF2F7",
    hasOfficialLogo: true,
  },
  dps: {
    key: "dps",
    name: "Delhi Public School Ruby Park",
    short: "DPS Ruby Park",
    context: "High School Education",
    metric: "Alumnus",
    href: "/#education",
    accent: "#1B5E20",
    bg: "#E8F5E9",
    hasOfficialLogo: true,
  },
  "st-patricks": {
    key: "st-patricks",
    name: "St. Patrick's Higher Secondary School",
    short: "St. Patrick's",
    context: "Foundational Education, Asansol",
    metric: "Alumnus",
    href: "/#education",
    accent: "#0D47A1",
    bg: "#E3F2FD",
    hasOfficialLogo: true,
  },
};

export const SLUG_TO_BRAND: Record<string, CanonicalBrandKey> = {
  "tata-steel": "tata-steel",
  "tata-consumer-products": "tata-consumer",
  "campus-activewear": "campus",
  "hul-red-label": "hul",
  "xlri-alumni-policy": "xlri",
  "1001-stories": "1001-stories",
  "ajooni-biotech": "ajooni",
  arthdex: "arthdex",
  "tenet-2026": "zerodha",
  "mochaverse-venix-2026": "mochatrade",
  "grad-3-galderma": "galderma",
  "xcelerate-maruti-suzuki-2026": "maruti",
  "market-makers-mochatrade": "mochatrade",
  "hero-campus-challenge-10": "hero",
  "tvs-credit-epic-8": "tvs",
};

/**
 * Official symbol mark (renders extracted PNG marks from official brand identities).
 */
export function BrandGlyph({
  brand,
  className = "h-4 w-4",
}: {
  brand: BrandKey;
  className?: string;
}) {
  const k = resolveBrandKey(brand);
  switch (k) {
    case "tata-steel":
    case "tata-consumer":
      return <img src="/logos/marks/tata.png" alt="Tata" className={`${className} object-contain`} />;
    case "campus":
      return <img src="/logos/marks/campus.png" alt="Campus" className={`${className} object-contain`} />;
    case "hul":
      return <img src="/logos/marks/red-label.png" alt="Brooke Bond Red Label" className={`${className} object-contain`} />;
    case "ajooni":
      return <img src="/logos/marks/ajooni.png" alt="Ajooni" className={`${className} object-contain`} />;
    case "arthdex":
      return <img src="/logos/marks/arthdex.png" alt="Arthdex" className={`${className} object-contain`} />;
    case "springer":
      return <img src="/logos/marks/springer.png" alt="Springer" className={`${className} object-contain`} />;
    case "zerodha":
      return <img src="/logos/marks/zerodha.png" alt="Zerodha" className={`${className} object-contain`} />;
    case "maruti":
      return <img src="/logos/marks/maruti.png" alt="Maruti Suzuki" className={`${className} object-contain`} />;
    case "xlri":
      return <img src="/logos/marks/xlri.png" alt="XLRI" className={`${className} object-contain`} />;
    case "mochatrade":
      return <img src="/logos/marks/yc.png" alt="Y Combinator" className={`${className} object-contain`} />;
    case "epsilon":
      return <img src="/logos/marks/epsilon.png" alt="Epsilon" className={`${className} object-contain`} />;
    case "1001-stories":
      return <img src="/logos/marks/1001-stories.png" alt="1001 Stories" className={`${className} object-contain`} />;
    case "galderma":
      return <img src="/logos/marks/galderma.png" alt="Galderma" className={`${className} object-contain`} />;
    case "walmart":
      return <img src="/logos/marks/walmart.png" alt="Walmart" className={`${className} object-contain`} />;
    case "hero":
      return <img src="/logos/marks/hero.png" alt="Hero MotoCorp" className={`${className} object-contain`} />;
    case "tvs":
      return <img src="/logos/marks/tvs.png" alt="TVS Credit" className={`${className} object-contain`} />;
    case "the-ken":
      return <img src="/logos/marks/the-ken.png" alt="The Ken" className={`${className} object-contain`} />;
    case "shree-gajanan":
      return <img src="/logos/marks/shree-gajanan.png" alt="Shree Gajanan" className={`${className} object-contain`} />;
    case "iimb":
      return <img src="/logos/marks/iimb.png" alt="IIM Bangalore" className={`${className} object-contain`} />;
    case "nitd":
      return <img src="/logos/marks/nitd.png" alt="NIT Durgapur" className={`${className} object-contain`} />;
    case "iims":
      return <img src="/logos/marks/iims.png" alt="IIM Sirmaur" className={`${className} object-contain`} />;
    case "vit":
      return <img src="/logos/marks/vit.png" alt="VIT Chennai" className={`${className} object-contain`} />;
    case "isb":
      return <img src="/logos/marks/isb.png" alt="ISB" className={`${className} object-contain`} />;
    case "dps":
      return <img src="/logos/marks/dps.png" alt="DPS" className={`${className} object-contain`} />;
    case "st-patricks":
      return <img src="/logos/marks/st-patricks.png" alt="St. Patrick's" className={`${className} object-contain`} />;
    default:
      return <img src="/logos/marks/xlri.png" alt="Institutional" className={`${className} object-contain`} />;
  }
}

/**
 * Official Brand Logo Lockups rendering crisp official PNGs.
 * Supports `size="badge"` (compact inline card header) or `size="default"` (showcase & hero headers).
 */
export function BrandLogoLockup({
  brand,
  size = "default",
}: {
  brand: BrandKey;
  size?: "badge" | "default";
}) {
  const k = resolveBrandKey(brand);
  const isBadge = size === "badge";

  switch (k) {
    case "walmart":
      return (
        <img
          src="/logos/walmart.png"
          alt="Walmart"
          className={`${isBadge ? "h-[16px] max-w-[88px]" : "h-[24px] max-w-[130px]"} w-auto object-contain object-left`}
        />
      );

    case "epsilon":
      return (
        <img
          src="/logos/epsilon.png"
          alt="Epsilon"
          className={`${isBadge ? "h-[15px] max-w-[90px]" : "h-[23px] max-w-[136px]"} w-auto object-contain object-left`}
        />
      );

    case "tata-steel":
      return (
        <img
          src="/logos/tata-steel.png"
          alt="Tata Steel"
          className={`${isBadge ? "h-[14px] max-w-[102px]" : "h-[21px] max-w-[146px]"} w-auto object-contain object-left`}
        />
      );

    case "tata-consumer":
      return (
        <img
          src="/logos/tata-consumer-horiz.png"
          alt="Tata Consumer Products"
          className={`${isBadge ? "h-[17px] max-w-[114px]" : "h-[24px] max-w-[152px]"} w-auto object-contain object-left`}
        />
      );

    case "hul":
      return (
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <img
            src="/logos/hul-horiz.png"
            alt="Hindustan Unilever"
            className={`${isBadge ? "h-[16px] max-w-[70px]" : "h-[22px] max-w-[95px]"} w-auto object-contain object-left`}
          />
          <img
            src="/logos/marks/red-label.png"
            alt="Brooke Bond Red Label"
            className={`${isBadge ? "h-[18px] max-w-[36px]" : "h-[24px] max-w-[48px]"} w-auto object-contain object-left`}
          />
        </span>
      );

    case "campus":
      return (
        <img
          src="/logos/campus-horiz.png"
          alt="Campus Activewear"
          className={`${isBadge ? "h-[15px] max-w-[108px]" : "h-[21px] max-w-[148px]"} w-auto object-contain object-left`}
        />
      );

    case "ajooni":
      return (
        <img
          src="/logos/ajooni-horiz.png"
          alt="Ajooni Biotech Ltd."
          className={`${isBadge ? "h-[17px] max-w-[114px]" : "h-[25px] max-w-[150px]"} w-auto object-contain object-left`}
        />
      );

    case "1001-stories":
      return (
        <img
          src="/logos/1001-stories.png"
          alt="1001 Stories"
          className={`${isBadge ? "h-[15px] max-w-[110px]" : "h-[22px] max-w-[150px]"} w-auto object-contain object-left`}
        />
      );

    case "arthdex":
      return (
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <img
            src="/logos/arthdex.png"
            alt="Arthdex"
            className={`${isBadge ? "h-[18px]" : "h-[25px]"} w-auto object-contain`}
          />
          <span
            className={`font-display font-extrabold tracking-[-0.03em] text-[#0F3D6E] ${
              isBadge ? "text-[13px]" : "text-[16px]"
            }`}
          >
            Arthdex
          </span>
        </span>
      );

    case "zerodha":
      return (
        <img
          src="/logos/zerodha.png"
          alt="Zerodha"
          className={`${isBadge ? "h-[14px] max-w-[102px]" : "h-[20px] max-w-[142px]"} w-auto object-contain object-left`}
        />
      );

    case "maruti":
      return (
        <img
          src="/logos/maruti.png"
          alt="Maruti Suzuki"
          className={`${isBadge ? "h-[13px] max-w-[116px]" : "h-[18px] max-w-[152px]"} w-auto object-contain object-left`}
        />
      );

    case "galderma":
      return (
        <img
          src="/logos/galderma.png"
          alt="Galderma Est. 1981"
          className={`${isBadge ? "h-[16px] max-w-[102px]" : "h-[24px] max-w-[142px]"} w-auto object-contain object-left`}
        />
      );

    case "mochatrade":
      return (
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
          <img
            src="/logos/mochatrade.png"
            alt="Mochatrade"
            className={`${isBadge ? "h-[15px] max-w-[90px]" : "h-[19px] max-w-[122px]"} w-auto object-contain object-left`}
          />
          <img
            src="/logos/marks/yc.png"
            alt="YC"
            className={`${isBadge ? "h-[13px]" : "h-[15px]"} w-auto object-contain`}
          />
        </span>
      );

    case "xlri":
      return (
        <img
          src="/logos/xlri.png"
          alt="XLRI Xavier School of Management"
          className={`${isBadge ? "h-[20px] max-w-[102px]" : "h-[30px] max-w-[142px]"} w-auto object-contain object-left`}
        />
      );

    case "springer":
      return (
        <img
          src="/logos/springer-horiz.png"
          alt="Springer"
          className={`${isBadge ? "h-[17px] max-w-[98px]" : "h-[26px] max-w-[136px]"} w-auto object-contain object-left`}
        />
      );

    case "hero":
      return (
        <img
          src="/logos/hero.png"
          alt="Hero MotoCorp"
          className={`${isBadge ? "h-[15px] max-w-[98px]" : "h-[23px] max-w-[138px]"} w-auto object-contain object-left`}
        />
      );

    case "tvs":
      return (
        <img
          src="/logos/tvs-credit.png"
          alt="TVS Credit"
          className={`${isBadge ? "h-[16px] max-w-[108px]" : "h-[23px] max-w-[146px]"} w-auto object-contain object-left`}
        />
      );

    case "the-ken":
      return (
        <img
          src="/logos/the-ken.png"
          alt="The Ken"
          className={`${isBadge ? "h-[18px] max-w-[94px]" : "h-[26px] max-w-[130px]"} w-auto object-contain object-left`}
        />
      );

    case "shree-gajanan":
      return (
        <img
          src="/logos/shree-gajanan.png"
          alt="Shree Gajanan Industries"
          className={`${isBadge ? "h-[21px] max-w-[108px]" : "h-[30px] max-w-[146px]"} w-auto object-contain object-left`}
        />
      );

    case "iimb":
      return (
        <img
          src="/logos/iimb.png"
          alt="IIM Bangalore"
          className={`${isBadge ? "h-[22px] max-w-[100px]" : "h-[30px] max-w-[138px]"} w-auto object-contain object-left`}
        />
      );

    case "nitd":
      return (
        <img
          src="/logos/nitd.png"
          alt="NIT Durgapur"
          className={`${isBadge ? "h-[22px] max-w-[98px]" : "h-[30px] max-w-[136px]"} w-auto object-contain object-left`}
        />
      );

    case "iims":
      return (
        <img
          src="/logos/iims.png"
          alt="IIM Sirmaur"
          className={`${isBadge ? "h-[22px] max-w-[98px]" : "h-[30px] max-w-[136px]"} w-auto object-contain object-left`}
        />
      );

    case "vit":
      return (
        <img
          src="/logos/vit.png"
          alt="VIT Chennai"
          className={`${isBadge ? "h-[16px] max-w-[106px]" : "h-[23px] max-w-[144px]"} w-auto object-contain object-left`}
        />
      );

    case "isb":
      return (
        <img
          src="/logos/isb.png"
          alt="Indian School of Business"
          className={`${isBadge ? "h-[18px] max-w-[98px]" : "h-[25px] max-w-[134px]"} w-auto object-contain object-left`}
        />
      );

    case "dps":
      return (
        <img
          src="/logos/dps.png"
          alt="Delhi Public School Ruby Park"
          className={`${isBadge ? "h-[22px] max-w-[98px]" : "h-[30px] max-w-[136px]"} w-auto object-contain object-left`}
        />
      );

    case "st-patricks":
      return (
        <img
          src="/logos/st-patricks.png"
          alt="St. Patrick's Higher Secondary School"
          className={`${isBadge ? "h-[22px] max-w-[98px]" : "h-[30px] max-w-[136px]"} w-auto object-contain object-left`}
        />
      );

    default: {
      const meta = BRANDS[k as CanonicalBrandKey];
      if (!meta) return null;
      return (
        <span className="inline-flex items-center gap-2 whitespace-nowrap">
          <span
            style={{ backgroundColor: meta.accent }}
            className={`inline-flex shrink-0 items-center justify-center rounded-md text-white ${
              isBadge ? "h-5 w-5" : "h-6 w-6"
            }`}
          >
            <BrandGlyph brand={k} className={isBadge ? "h-3 w-3" : "h-3.5 w-3.5"} />
          </span>
          <span
            style={{ color: meta.accent }}
            className={`font-display font-extrabold tracking-tight whitespace-nowrap ${
              isBadge ? "text-[13px]" : "text-[15px]"
            }`}
          >
            {meta.short}
          </span>
        </span>
      );
    }
  }
}

/**
 * BrandBadge renders the ACTUAL official horizontal logo inside a crisp white badge pill.
 */
export function BrandBadge({
  brand,
  label,
  size = "sm",
  showContext = false,
  interactive = true,
}: {
  brand: BrandKey;
  label?: string;
  tone?: "light" | "dark" | "amber";
  size?: "sm" | "md" | "lg";
  showContext?: boolean;
  interactive?: boolean;
  dark?: boolean;
}) {
  const k = resolveBrandKey(brand);
  const meta = BRANDS[k];
  if (!meta) return null;

  const pad =
    size === "lg"
      ? "px-3.5 py-2 gap-2.5"
      : size === "md"
        ? "px-3 py-1.5 gap-2"
        : "px-2.5 py-1 gap-2";

  // Always use a clean crisp white backing so every brand logo has 100% contrast & legibility
  const surface = "border-[#161616]/15 bg-white text-[#161616]";

  return (
    <span
      className={`group/brand inline-flex shrink-0 items-center whitespace-nowrap rounded-full border shadow-[0_2px_8px_-2px_rgb(22_22_22/0.12)] transition-all duration-300 ${
        interactive ? "hover:-translate-y-0.5 hover:border-[#161616]/35 hover:shadow-sm" : ""
      } ${pad} ${surface}`}
    >
      <BrandLogoLockup brand={k} size="badge" />
      {label && <span className="font-mono text-[11px] font-semibold text-[#161616]">{label}</span>}
      {showContext && (
        <span className="border-l border-[#161616]/15 pl-2 font-mono text-[11px] text-[#161616]/70">
          {meta.metric}
        </span>
      )}
    </span>
  );
}

/**
 * InteractiveBrandHeaderLogo component for case study page headers with spring hover physics.
 */
export function InteractiveBrandHeaderLogo({
  brand,
  label,
  dark = false,
  className = "",
}: {
  brand: BrandKey;
  label?: string;
  dark?: boolean;
  className?: string;
}) {
  const k = resolveBrandKey(brand);
  const meta = BRANDS[k];
  if (!meta) return null;

  return (
    <m.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`group relative inline-flex items-center gap-2.5 rounded-2xl border px-3.5 py-1.5 shadow-sm transition-colors cursor-pointer select-none ${
        dark
          ? "border-white/20 bg-white text-[#161616] hover:bg-white hover:shadow-md"
          : "border-[#161616]/15 bg-white text-[#161616] hover:border-[#161616]/40 hover:shadow-md"
      } ${className}`}
      data-cursor="Brand"
      role="figure"
      aria-label={`${meta.name} Official Brand`}
    >
      <div className="flex h-6 sm:h-7 items-center transition-transform duration-300 group-hover:scale-105">
        <BrandLogoLockup brand={k} size="badge" />
      </div>
      <span className="h-3.5 w-px bg-[#161616]/20" />
      <span className="font-mono text-[11px] font-bold tracking-wide text-[#161616]/85 uppercase">
        {label || meta.short}
      </span>
    </m.div>
  );
}

const SHOWCASE_ORDER: CanonicalBrandKey[] = [
  "walmart",
  "epsilon",
  "tata-steel",
  "tata-consumer",
  "hul",
  "campus",
  "1001-stories",
  "ajooni",
  "xlri",
  "arthdex",
  "zerodha",
  "maruti",
  "galderma",
  "mochatrade",
  "hero",
  "tvs",
  "the-ken",
  "iimb",
  "vit",
  "springer",
  "shree-gajanan",
];

/**
 * Clean, single-glance Institutional & Sponsor Logo Bar.
 */
export function BrandShowcase() {
  return (
    <section
      aria-label="Organizations, case sponsors and institutions"
      className="relative border-b border-line/80 bg-paper/40 backdrop-blur-xs py-8 md:py-10"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
            Employers, Live Project Clients &amp; National Case Sponsors
          </p>
          <p className="font-mono text-[11px] text-muted">
            Official logos across all engagements
          </p>
        </div>

        <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-7">
          {SHOWCASE_ORDER.map((key) => {
            const b = BRANDS[key];
            return (
              <li key={key}>
                <Link
                  href={b.href}
                  title={`${b.name} (${b.context})`}
                  className="group flex h-12 sm:h-14 items-center justify-center rounded-xl glass-card px-2 sm:px-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#161616]/35"
                >
                  <div className="flex items-center justify-center transition-transform duration-200 group-hover:scale-[1.04]">
                    <BrandLogoLockup brand={key} />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
