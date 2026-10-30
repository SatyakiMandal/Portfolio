import type { Project } from "../projects";

const entry: Project = {
  slug: "tata-steel",
  brandKey: "tata-steel",
  title: "Tata Steel",
  tag: "Live Project",
  year: "2026",
  modelled: true,
  question:
    "How should Tata Steel price green steel so the premium pays for decarbonization while defending against EU CBAM export penalties? (Modelled)",
  cardNumber: { value: "$30.50/t", label: "modelled blended green premium across 1M tons" },
  chips: ["Pricing", "Decarbonization"],
  filters: ["Pricing", "Growth strategy"],
  keyNumbers: [
    { value: "$30.50/t", label: "modelled blended green premium across 1M tons" },
    { value: "$30.5M", label: "annual premium revenue (Rs.252Cr, modelled)" },
    { value: "Rs.2,201", label: "weighted marginal abatement cost per tCO2" },
    { value: "EUR 11/t", label: "CBAM carbon tariff avoidance at EUR 75/tCO2" },
  ],
  context:
    "Executed with our team as a strategic decarbonization pricing model for Tata Steel. In India, coal-based blast furnace-basic oxygen furnace (BF-BOF) steel generates high baseline emissions intensities: 3.00 tCO2/ton for Galvanized steel (automotive) and 2.80 tCO2/ton for Hot-Rolled Coil (HRC, infrastructure). With the EU Carbon Border Adjustment Mechanism (CBAM) phasing in from 2026, and automotive OEMs targeting green steel supply, Tata Steel required a structured commercialization model to fund verified CO2 reductions without eroding export margins. All commercial figures, price points, and revenue streams are modelled estimates.",
  approach: [
    "Formulated a Marginal Abatement Cost (MAC) curve combining biochar injection (Rs.12,060/tCO2, 12% allocation = $3.49/t steel) and microturbine waste heat recovery (Rs.860/tCO2, 88% allocation = $1.82/t steel), achieving a weighted MAC of Rs.2,201/tCO2 ($26.5/tCO2).",
    "Modelled product-specific decarbonization: Galvanized steel achieves a 0.20 tCO2/t reduction (to 2.80 tCO2/t), while HRC achieves a 0.15 tCO2/t reduction (to 2.65 tCO2/t).",
    "Constructed an auditable unit cost buildup adding ISO 14064-2/14067 verification ($8.00/t), blockchain chain-of-custody tracking ($6.00/t), and green brand positioning ($10.00/t) to direct abatement costs ($5.30/t for Galvanized, $4.00/t for HRC), setting cost floors of $29.30/t and $25.00/t.",
    "Designed a 3-tier willingness-to-pay (WTP) customer pricing model across 1,000,000 tons portfolio volume (500k tons Galvanized, 500k tons HRC): Tier 1 (20% volume, $40-45/t), Tier 2 (40% volume, $30-35/t), Tier 3 (40% volume, $20-25/t).",
    "Structured an integrated Carbon Bank mass-balance model to monetize 56,800 tCO2 of verified annual savings at a $20/tCO2 base case.",
    "Simulated EU CBAM tariff avoidance models at EUR 75/tCO2 carbon price to quantify export protection against European H2-DRI ($55-85/t) peers.",
  ],
  findings: [
    "The modelled weighted MAC of Rs.2,201/tCO2 ($26.5/tCO2) is approximately 70% lower than European abatement benchmarks ($85-120/tCO2), establishing a significant regional cost advantage.",
    "The 3-tier pricing model yields a blended premium of $30.50/ton ($33/t for Galvanized, $28/t for HRC), generating $30.5M annually (Rs.252.56 Crores) across 1,000,000 tons of green steel volume.",
    "Segment economics: Tier 1 (EV OEMs) captures $40-45/t (20% volume, $8.5M revenue); Tier 2 (auto and infrastructure) captures $30-35/t (40% volume, $13.0M revenue); Tier 3 (fabricators) captures $20-25/t (40% volume, $9.0M revenue).",
    "Monetizing 56,800 tCO2/year through ISO 14064-2 verified credits at $20/tCO2 delivers $1.136M/year, reducing the effective net premium to $29.36/ton.",
    "Abating 0.15 tCO2/t on HRC saves EUR 11/ton under EU CBAM at EUR 75/tCO2 (EUR 199 vs EUR 210/ton baseline), undercutting European green steel premiums ($55-85/t) by 30-50%.",
    "A 3-phase rollout roadmap: Phase 1 validates pilot volume; Phase 2 scales commercial rollout to $30.5M premium revenue; Phase 3 expands to 400k green tons and tests hydrogen integration.",
  ],
  charts: [
    {
      title: "Customer willingness-to-pay green premium tiers (modelled)",
      description: "Customer willingness to pay ranges from $45.00/t for export EV OEMs down to $20.00/t for commodity fabricators, yielding a $30.50/t blended portfolio premium.",
      unit: "$/ton",
      variant: "ladder",
      callout: { value: "$30.50/t", label: "modelled blended green premium across 1M tons" },
      bars: [
        { label: "Tier 1: Global EV OEMs (Galvanized)", value: 45, display: "$45.00/t", note: "Top willing-to-pay segment, 20% volume allocation" },
        { label: "Tier 1: Domestic Auto OEMs (HRC)", value: 40, display: "$40.00/t", note: "High-spec auto structural applications, 20% volume" },
        { label: "Tier 2: Commercial Fleet Transport", value: 35, display: "$35.00/t", note: "Chassis and cab structural framing, 40% volume allocation" },
        { label: "Tier 2: Green Infrastructure & EPC", value: 30, display: "$30.00/t", note: "Certified structural steel and rebar, 40% volume" },
        { label: "Tier 3: Fabricators & Capital Goods", value: 25, display: "$25.00/t", note: "Spot market and general fabrication, 40% volume allocation" },
        { label: "Portfolio Blended Realized Premium", value: 30.5, display: "$30.50/t", note: "Modelled blended average across 1,000,000 tons portfolio" },
      ],
    },
    {
      title: "Galvanized green steel unit cost buildup vs $29.30/t cost floor",
      description: "Direct decarbonization cost ($5.30/t) combines with verification and tracking adders ($24/t) to define a minimum cost floor of $29.30/t.",
      unit: "$/ton",
      variant: "waterfall",
      callout: { value: "$29.30/t", label: "modelled cost floor for Galvanized green steel" },
      bars: [
        { label: "Direct Decarb Capex & Opex", value: 5.3, display: "$5.30/t", note: "0.20 tCO2 abatement via biochar and waste heat recovery" },
        { label: "ISO 14064-2 Verification Audit", value: 8, display: "$8.00/t", note: "Third-party MRV emissions auditing" },
        { label: "Chain-of-Custody Tracking", value: 6, display: "$6.00/t", note: "Blockchain mass-balance tracking" },
        { label: "Green Brand Positioning", value: 10, display: "$10.00/t", note: "Market positioning and client certification" },
        { label: "Net Delivered Cost Floor", value: 29.3, display: "$29.30/t", note: "Minimum defensible pricing floor" },
      ],
    },
    {
      title: "Abatement technology contribution and weighted MAC curve",
      description: "Biochar injection and microturbine waste heat recovery deliver a weighted MAC of Rs.2,201/tCO2 ($26.5/t), roughly 70% below European peers.",
      unit: "Rs./tCO2",
      variant: "bars",
      callout: { value: "Rs.2,201", label: "weighted marginal abatement cost ($26.5/tCO2)" },
      bars: [
        { label: "Microturbine + Waste Heat Recovery", value: 860, display: "Rs.860", note: "88% technology allocation ($1.82/ton steel cost)" },
        { label: "Tata Steel Weighted MAC", value: 2201, display: "Rs.2,201", note: "South Asian lowest-cost abatement benchmark ($26.5/t)" },
        { label: "Biochar Injection", value: 12060, display: "Rs.12,060", note: "12% technology allocation ($3.49/ton steel cost)" },
      ],
    },
    {
      title: "Product-specific green premium split: Galvanized vs HRC",
      description: "Galvanized steel captures a $33/t premium on 0.20 tCO2 cut, while HRC captures $28/t on 0.15 tCO2 cut, generating $30.5M revenue.",
      unit: "$/ton",
      variant: "bars",
      callout: { value: "$30.5M", label: "total annual premium revenue across 1,000,000 tons" },
      bars: [
        { label: "Galvanized Automotive Steel Premium", value: 33, display: "$33.00/t", note: "500k tons volume, $16.5M annual premium revenue" },
        { label: "Portfolio Blended Average Premium", value: 30.5, display: "$30.50/t", note: "1,000,000 tons total volume, $30.5M revenue (Rs.252Cr)" },
        { label: "Hot-Rolled Coil (HRC) Premium", value: 28, display: "$28.00/t", note: "500k tons volume, $14.0M annual premium revenue" },
      ],
    },
    {
      title: "Carbon credit monetization curve: 56,800 tCO2 under pricing scenarios",
      description: "Monetizing verified savings generates $1.14M at $20/tCO2 base case, offsetting $1.14/t to reduce the effective premium to $29.36/t.",
      unit: "$M",
      variant: "cliff",
      callout: { value: "$1.136M", label: "base case annual carbon bank monetization at $20/tCO2" },
      bars: [
        { label: "Conservative VCM ($10/t)", value: 0.57, display: "$0.57M", note: "Current voluntary market floor ($0.57/t offset)" },
        { label: "Indian CCTS Opening ($15/t)", value: 0.85, display: "$0.85M", note: "Early compliance market ramp-up ($0.86/t offset)" },
        { label: "Base Case Scenario ($20/t)", value: 1.14, display: "$1.14M", note: "Target base monetization ($1.14/t offset)" },
        { label: "EU ETS Mid-Term ($30/t)", value: 1.7, display: "$1.70M", note: "Export linkage scenario ($1.70/t offset)" },
        { label: "Long-Term Policy ($50/t)", value: 2.84, display: "$2.84M", note: "Decarbonization mandate maturity ($2.84/t offset)" },
      ],
    },
    {
      title: "EU CBAM carbon tariff avoidance at EUR 75/tCO2 benchmark",
      description: "Direct decarbonization saves EUR 11/ton under EU CBAM, helping preserve export competitiveness against European green steel alternatives.",
      unit: "EUR/ton",
      variant: "bars",
      callout: { value: "EUR 11/t", label: "modelled CBAM carbon tariff avoidance on HRC" },
      bars: [
        { label: "Baseline Indian BF-BOF Tariff", value: 210, display: "EUR 210/t", note: "Based on 2.80 tCO2/t emissions intensity at EUR 75/tCO2" },
        { label: "Decarbonized Product Tariff", value: 199, display: "EUR 199/t", note: "0.15 tCO2 abated to 2.65 tCO2/t certified intensity" },
        { label: "Net Direct Tariff Savings", value: 11, display: "EUR 11/t", note: "Avoided carbon penalty under full CBAM implementation" },
      ],
    },
  ],
  credit: "With our team. Live Project for Tata Steel. All figures modelled.",
};

export default entry;
