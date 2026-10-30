import type { Project } from "../projects";

const entry: Project = {
  slug: "tata-consumer-products",
  brandKey: "tata-consumer",
  title: "Tata Consumer Products",
  tag: "Live Project",
  year: "2026",
  question:
    "How should Tata Sampann sustain 25-30%+ growth and premiumisation in a staples market that is 98-99% unbranded, and which growth vectors should the board back?",
  cardNumber: { value: "+46%", label: "Tata Sampann FY26 revenue growth" },
  chips: ["Market sizing", "Valuation"],
  filters: ["Market sizing", "Finance", "Growth strategy"],
  keyNumbers: [
    { value: "+46%", label: "Tata Sampann FY26 revenue growth" },
    { value: "98-99%", label: "unbranded pulses market share" },
    { value: "~25%", label: "core staples business ROCE" },
    { value: "38x", label: "J.P. Morgan EV/EBITDA multiple" },
  ],
  context:
    "Executed with our team as a strategic growth and portfolio evaluation project for Tata Consumer Products Limited (TCPL). Tata Sampann operates in vast everyday food categories: the Indian pulses market alone represents ~Rs.1,55,000 Crore where 98 to 99 percent is unbranded loose commodity trade, alongside a ~Rs.1,23,000 Crore spices market pool. While consolidated TCPL reflected dilution from recent capital deployment, the core India branded staples business operated with exceptional capital efficiency. We synthesized channel economics, SKU ratings, and an Ansoff growth matrix to formulate board-level recommendations.",
  approach: [
    "Evaluated category revenue momentum across TCPL filings, tracking Tata Sampann's 46% FY26 revenue acceleration (and 45% growth in Q3 FY26).",
    "Quantified market sizing and branded headroom across pulses (~Rs.1,55,000 Crore with 1-2% branded penetration) and spices (~Rs.1,23,000 Crore) utilizing industry disclosures and J.P. Morgan equity research.",
    "Conducted Ansoff Matrix analysis across core categories (Pulses, Spices, Besan, Poha, Dry Fruits, Cold-Pressed Oils) to prioritize expansion vectors.",
    "Audited e-commerce and quick commerce SKU performance, benchmarking Tata Sampann Toor Dal (41,928 Amazon ratings at 4.5/5, #1 bestseller) and Zepto ratings (4.75 average across 14 SKUs).",
    "Formulated 6 board recommendations with quantitative threshold metrics (sustaining 25-30%+ revenue growth and 15% margin discipline).",
  ],
  findings: [
    "Tata Sampann accelerated revenue growth to +46% in FY26 (and +45% in Q3 FY26), demonstrating rapid consumer conversion from loose unbranded staples to certified packaged food.",
    "Unbranded commodity headroom is massive: the ~Rs.1,55,000 Crore Indian pulses market remains 98 to 99 percent unbranded, providing decades of runway for clean-label, unpolished staples.",
    "The core India branded staples engine generates ~24.5 to 25% ROCE, benefiting from negative working capital cycles and supporting J.P. Morgan's 38x EV/EBITDA sum-of-the-parts multiple for the branded business.",
    "Digital sentiment and quick commerce validation are dominant: Amazon Toor Dal ranks as the #1 bestseller with 41,928 ratings (4.5/5), while quick commerce channel audit on Zepto shows a 4.75 average rating across 14 active SKUs.",
    "The board roadmap recommends aggressive penetration in high-velocity categories (pulses, unpolished dal, spices) while maintaining a strict 25-30%+ revenue growth threshold and 15% margin discipline before entering heavy capital categories like atta.",
  ],
  charts: [
    {
      title: "Indian staples addressable market pool and unbranded share",
      description: "Indian pulses and spices represent a combined ~Rs.2.78L Crore market pool where unbranded loose trade accounts for 98-99% of pulses volume.",
      unit: "Rs. Cr",
      variant: "bars",
      callout: { value: "98-99%", label: "unbranded pulses share in a Rs.1,55,000 Cr market" },
      bars: [
        { label: "Pulses Addressable Market Pool", value: 155000, display: "Rs.1.55L Cr", note: "Only 1 to 2 percent currently branded; massive conversion headroom" },
        { label: "Spices Addressable Market Pool", value: 123000, display: "Rs.1.23L Cr", note: "Blended and pure spices market across India" },
        { label: "Tata Sampann FY26 Growth", value: 46, display: "+46% YoY", note: "High-growth branded market share gain" },
      ],
    },
    {
      title: "Tata Sampann e-commerce and quick commerce consumer ratings",
      description: "High-volume customer review validation across Amazon.in and Zepto confirms dominant product quality and unpolished clean-label trust.",
      unit: "Rating (out of 5)",
      variant: "bars",
      callout: { value: "4.75 / 5", label: "average Zepto rating across 14 Tata Sampann SKUs" },
      bars: [
        { label: "Zepto Quick Commerce (14 SKUs)", value: 4.75, display: "4.75 / 5", note: "Average across all active pantry SKUs on quick commerce" },
        { label: "Amazon.in Toor Dal (#1 Bestseller)", value: 4.5, display: "4.50 / 5", note: "41,928 customer ratings · Leading packaged dal on Amazon" },
        { label: "Industry Category Benchmark", value: 4.0, display: "4.00 / 5", note: "Average customer rating for packaged commodity pulses" },
      ],
    },
    {
      title: "Strategic category prioritization under Ansoff Matrix",
      description: "Evaluating category attractiveness shows pulses, besan, and premium spices offer high growth with low capital expenditure.",
      unit: "Index Score",
      variant: "matrix",
      callout: { value: "85 / 100", label: "pulses and dal category expansion priority index" },
      bars: [
        { label: "Pulses & Unpolished Dal", value: 85, display: "85%", note: "Core volume anchor · Deepen modern trade penetration" },
        { label: "Specialty Besan & Flours", value: 75, display: "75%", note: "High-margin value-added staple extension" },
        { label: "Blended & Pure Spices", value: 72, display: "72%", note: "Premium clean-label regional flavor blends" },
        { label: "Bulk Atta & Edible Oil", value: 35, display: "35%", note: "Defer entry · Low margin, high working capital commodity" },
      ],
    },
    {
      title: "Core staples capital efficiency: ROCE vs valuation multiple",
      description: "Negative working capital in India branded staples delivers ~25% ROCE, supporting a 38x EV/EBITDA multiple from equity research analysts.",
      unit: "Metric",
      variant: "bars",
      callout: { value: "38x EV/EBITDA", label: "J.P. Morgan valuation multiple for India branded business" },
      bars: [
        { label: "Core Branded Staples ROCE", value: 25, display: "25.0%", note: "Negative working capital efficiency in domestic distribution" },
        { label: "Target Growth Threshold", value: 30, display: "30.0%", note: "Board-recommended minimum annual revenue growth threshold" },
        { label: "J.P. Morgan EV/EBITDA Multiple", value: 38, display: "38.0x", note: "Equity research valuation multiple for branded consumer engine" },
      ],
    },
  ],
  credit: "With our team. Live Project for Tata Consumer Products.",
};

export default entry;
