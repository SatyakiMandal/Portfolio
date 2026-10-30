// Built from data/case_studies.md and data/profile.json. No figure here is new.
import type { BrandKey } from "@/components/BrandLogo";
import tataSteel from "./projects/tata-steel";
import tataConsumerProducts from "./projects/tata-consumer-products";
import campusActivewear from "./projects/campus-activewear";
import hulRedLabel from "./projects/hul-red-label";
import xlriAlumniPolicy from "./projects/xlri-alumni-policy";
import _1001Stories from "./projects/1001-stories";
import ajooniBiotech from "./projects/ajooni-biotech";
import arthdex from "./projects/arthdex";

export type Filter = "Pricing" | "Market sizing" | "Growth strategy" | "Finance" | "Product and data" | "Research";

export const filters: Filter[] = [
  "Pricing",
  "Market sizing",
  "Growth strategy",
  "Finance",
  "Product and data",
  "Research",
];

export type KeyNumber = { value: string; label: string };

export type ChartBar = { label: string; value: number; display: string; note?: string };
export type ChartVariant =
  | "bars"
  | "waterfall"
  | "funnel"
  | "ladder"
  | "cliff"
  | "matrix"
  | "gauge"
  | "spider"
  | "donut"
  | "treemap"
  | "stacked"
  | "scorecard";
export type Chart = {
  title: string;
  description: string;
  unit: string;
  variant?: ChartVariant;
  callout?: KeyNumber;
  bars: ChartBar[];
};

export type Project = {
  slug: string;
  title: string;
  brandKey: BrandKey;
  tag: string;
  year: string;
  modelled?: boolean;
  question: string;
  cardNumber: KeyNumber;
  chips: [string, string];
  filters: Filter[];
  keyNumbers: KeyNumber[];
  context: string;
  approach: string[];
  findings: string[];
  charts: Chart[];
  credit?: string;
};

export const projects: Project[] = [
  tataSteel,
  tataConsumerProducts,
  campusActivewear,
  hulRedLabel,
  xlriAlumniPolicy,
  _1001Stories,
  ajooniBiotech,
  arthdex,
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function sourceFor(p: Project) {
  return `${p.title} (${p.tag}, ${p.year})`;
}
