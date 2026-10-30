import type { Project } from "../projects";

const entry: Project = {
  slug: "campus-activewear",
  brandKey: "campus",
  title: "Campus Activewear",
  tag: "Live Project",
  year: "2026",
  question:
    "How can Campus Activewear transition from a value footwear maker to India's preferred youth lifestyle brand across FY27 to FY31 in NCCS A?",
  cardNumber: { value: "11.4% vs 21%", label: "FY26 revenue growth vs category expansion" },
  chips: ["Brand architecture", "Youth lifestyle"],
  filters: ["Growth strategy", "Research", "Pricing"],
  keyNumbers: [
    { value: "11.4% vs 21%", label: "FY26 revenue growth vs category expansion" },
    { value: "92.7% to 4.9%", label: "familiarity to future consideration funnel" },
    { value: "0.76 pt", label: "youth lifestyle identity expectation gap" },
    { value: "Rs.683 to Rs.2.5k+", label: "MOSA premium ladder price corridor" },
  ],
  context:
    "Executed with our team as a strategic brand transformation plan for Campus Activewear. While the Indian sports footwear category was expanding at 21% CAGR, Campus's revenue growth slowed to 11.4% (reaching Rs.1,774.1 Crore in FY26), anchored at a value average selling price (ASP) of Rs.683. Primary consumer research revealed a severe conversion drop: despite 92.7% aided familiarity, future purchase consideration fell to just 4.9%. We designed a two-track brand architecture, creating the culture-first 'MOSA by Campus' sub-brand to capture the Rs.2,500 to Rs.3,999 youth lifestyle segment without cannibalizing the mass-market core.",
  approach: [
    "Decomposed FY25 to FY26 revenue expansion (Rs.181.1 Crore) into volume contribution (~Rs.70 Crore) and price realization (~Rs.114 Crore).",
    "Audited consumer conversion bottlenecks across familiarity (92.7%), recent purchase (14.6%), and future consideration (4.9%).",
    "Evaluated youth identity alignment, identifying a 0.76-point semantic gap (importance rating 3.37 vs Campus 2.61, with 53.7% showing a positive expectation gap).",
    "Analyzed digital social listening sentiment across sports footwear brands, benchmarking negative sentiment against global peers.",
    "Formulated the 'MOSA by Campus' two-track architecture: preserving the Rs.683 value base while introducing a Good-Better-Best premium corridor up to Rs.3,999.",
  ],
  findings: [
    "Campus grew 11.4% to Rs.1,774.1 Crore in FY26, underperforming the broader Indian sports footwear category growth (+21%) due to value price point concentration at Rs.683 ASP.",
    "The consumer conversion funnel displays a severe drop-off: while brand familiarity is exceptionally high at 92.7%, recent purchase drops to 14.6% and future consideration falls to 4.9%.",
    "A 0.76-point identity expectation gap exists among youth buyers: importance of footwear as self-expression rates 3.37 out of 5, while Campus current perception rates 2.61, with 53.7% desiring stronger lifestyle alignment.",
    "Social listening sentiment analysis revealed Campus carries 14.4% negative sentiment, compared to Nike (8.2%), Puma (7.2%), and Adidas (4.3%), driven by durability and design perceptions.",
    "The proposed MOSA by Campus two-track architecture bridges this gap through a 3-tier Good-Better-Best corridor (Rs.1,500 to Rs.3,999), supported by youth cultural partnerships and curated retail distribution.",
  ],
  charts: [
    {
      title: "Campus Activewear consumer conversion funnel drop-off",
      description: "Aided familiarity stands at 92.7%, but conversion contracts to 14.6% recent purchase and 4.9% future consideration.",
      unit: "% of respondents",
      variant: "funnel",
      callout: { value: "92.7% to 4.9%", label: "familiarity to consideration conversion contraction" },
      bars: [
        { label: "Aided Brand Familiarity", value: 92.7, display: "92.7%", note: "Widespread mass market brand recognition" },
        { label: "Recent Footwear Purchase", value: 14.6, display: "14.6%", note: "Purchased within the past 12 months" },
        { label: "Future Consideration Intent", value: 4.9, display: "4.9%", note: "Actively considering Campus for next lifestyle purchase" },
      ],
    },
    {
      title: "Youth footwear identity expectation gap: Campus vs benchmark",
      description: "Youth rate footwear importance in self-identity at 3.37 out of 5, while Campus scores 2.61, creating a 0.76-point positive expectation gap.",
      unit: "Score (1-5)",
      variant: "bars",
      callout: { value: "0.76 pt", label: "gap between youth expectations and current perception" },
      bars: [
        { label: "Youth Category Importance Rating", value: 3.37, display: "3.37 / 5", note: "Importance of footwear in personal style and social expression" },
        { label: "Campus Current Perception Rating", value: 2.61, display: "2.61 / 5", note: "Perceived brand alignment with contemporary youth culture" },
        { label: "Net Identity Expectation Gap", value: 0.76, display: "0.76 pts", note: "53.7% of surveyed youth display a positive expectation gap" },
      ],
    },
    {
      title: "Footwear brand social listening negative sentiment benchmark",
      description: "Social listening indicates Campus carries 14.4% negative sentiment, higher than global athletic peers in Indian youth discussions.",
      unit: "% negative",
      variant: "bars",
      callout: { value: "14.4%", label: "Campus negative digital sentiment vs 4.3-8.2% for global peers" },
      bars: [
        { label: "Campus Activewear", value: 14.4, display: "14.4%", note: "Perceptions centered on school utility rather than lifestyle" },
        { label: "Nike", value: 8.2, display: "8.2%", note: "Global youth cultural and athletic anchor" },
        { label: "Puma", value: 7.2, display: "7.2%", note: "Strong streetwear and motorsport integration" },
        { label: "Adidas", value: 4.3, display: "4.3%", note: "Lowest negative sentiment in tracked youth cohort" },
      ],
    },
    {
      title: "Two-track pricing architecture: Core Campus vs MOSA corridor",
      description: "Preserving the Rs.683 value core while introducing MOSA by Campus to capture the higher-margin Rs.2,500 to Rs.3,999 lifestyle corridor.",
      unit: "Rs. price point",
      variant: "ladder",
      callout: { value: "Rs.2.5k - 4k", label: "MOSA culture track target price corridor" },
      bars: [
        { label: "Core Campus Baseline (ASP)", value: 683, display: "Rs.683", note: "High-volume mass-market value foundation" },
        { label: "MOSA Tier 1: Campus Core+", value: 1499, display: "Rs.1,499", note: "Entry athleisure and upgraded materials" },
        { label: "MOSA Tier 2: Culture Streetwear", value: 2499, display: "Rs.2,499", note: "Lifestyle aesthetics and collegiate distribution" },
        { label: "MOSA Tier 3: Limited Collaborations", value: 3999, display: "Rs.3,999", note: "Exclusive drops, creative collaborations and premium trims" },
      ],
    },
  ],
  credit: "With our team. Live Project for Campus Activewear.",
};

export default entry;
