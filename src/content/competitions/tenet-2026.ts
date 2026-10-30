import type { Competition } from "../competitions";

const entry: Competition = {
  slug: "tenet-2026",
  name: "TENET 2026, sponsored by Zerodha",
  short: "TENET 2026",
  sponsor: "Zerodha",
  brandKey: "zerodha",
  chips: ["Merchant banking", "Capital markets"],
  result: "National 1st Runner-Up",
  scale: "452 registrations",
  year: "2026",
  challenge:
    "If Zerodha secures a SEBI Category I merchant banking licence, what business model, target segment, and capability roadmap give it a defensible franchise against entrenched institutional banks?",
  context:
    "Executed with our team for TENET 2026 (organized by ISB PGP YL, powered by Zerodha), where our strategy placed National 1st Runner-Up across 452 registrations. Rather than fighting established full-service investment banks (Kotak, Axis, ICICI Securities) for traditional lead-manager mandates, we formulated an asset-light, retail-intelligence strategy. Under SEBI's 2025 regulatory amendments raising Category I net worth from Rs.5 Crore to Rs.50 Crore, our proposal structured a two-product offering: a proprietary Pre-DRHP Retail Appetite Score and a wholesale standby retail shortfall underwriting commitment, enabled through a disciplined Build-Partner-Borrow capability roadmap.",
  approach: [
    "Audited SEBI Category I merchant banking regulatory landscape, analyzing the 2025 amendment raising minimum net worth from Rs.5 Crore to Rs.50 Crore (phased to 2028) with 13 applications under review.",
    "Benchmarked fee economics across capital market segments: Mainboard issues generate 1-3% lead manager fees, while SME capital market issuance costs run at 7-10%.",
    "Analyzed retail investor participation patterns across recent marquee IPOs, noting that Zerodha accounted for roughly one-fifth (~20%) of all retail applications on major consumer listings like Zomato.",
    "Formulated a Build-Partner-Borrow capability matrix: Build (origination team, retail intelligence engine, underwriting capital), Partner (institutional QIB syndicate placement), and Borrow (fundamental equity research).",
    "Constructed an execution roadmap with phased milestones and strict kill gates (requiring senior origination bankers in place within Year 1 before scaling balance-sheet commitments).",
  ],
  proposed: [
    "Product 1: Pre-DRHP Retail Appetite Score: Monetize anonymized, aggregate retail investor interest, watchlist additions, and trading velocity on Zerodha's platform into an intelligence product sold to pre-IPO issuers and lead managers.",
    "Product 2: Wholesale Technical Shortfall Underwriting: Deploy licensed balance-sheet capacity to underwrite retail tranche subscription shortfalls wholesale, selling risk-absorption capacity to peer investment banks rather than competing for primary syndication.",
    "The Build-Partner-Borrow Framework: Build proprietary retail intelligence and underwriting capacity in-house; partner with institutional investment banks for QIB roadshows; borrow external sell-side research coverage to maintain lean overhead.",
    "Target Segment Focus: Prioritize high-velocity Consumer-Tech, D2C, and emerging growth issuers where retail appetite is decisive and Zerodha's retail application market share moves the needle.",
    "Phased Capability Roadmap: Stage 1 sets up core regulatory compliance and hires senior origination leadership; Stage 2 activates wholesale syndication partnerships; Stage 3 selectively evaluates lead-manager mandates on retail-heavy issues.",
  ],
  findings: [
    "Competing directly for primary institutional IPO mandates against entrenched merchant banks requires decades of corporate promoter relationships and institutional QIB desks that a discount broker lacks.",
    "Zerodha's true strategic moat lies in retail market intelligence: driving roughly 20% of retail IPO applications on major consumer listings provides predictive insight into retail book subscription velocity.",
    "Underwriting wholesale shortfall capacity converts potential banking rivals into corporate clients, de-risking their retail book while creating high-margin B2B fee income.",
    "The Build-Partner-Borrow model keeps operational overhead disciplined, avoiding the high fixed compensation of extensive research and institutional sales departments.",
    "SEBI's phased net worth escalation to Rs.50 Crore creates a natural barrier to entry, favoring well-capitalized fintech platforms that can productize digital distribution.",
  ],
  keyNumbers: [
    { value: "~20%", label: "retail IPO application share" },
    { value: "Rs.50Cr", label: "SEBI Category I net worth bar" },
    { value: "1-3% vs 7-10%", label: "Mainboard vs SME fee pool" },
    { value: "2 Products", label: "retail score & wholesale underwriting" },
  ],
  charts: [
    {
      title: "Indian IPO fee pool economics by market segment",
      description: "Comparing issuance fee structures shows Mainboard mandates capture 1-3% on large volumes while SME issues command 7-10% fees on smaller capital raises.",
      unit: "% fee pool",
      variant: "bars",
      callout: { value: "1-3% vs 7-10%", label: "Mainboard vs SME merchant banking fee spread" },
      bars: [
        { label: "Mainboard Lead Manager Fee", value: 2.0, display: "1.0 - 3.0%", note: "Large volume issues ($50M+) · Institutional placement driven" },
        { label: "SME Issuance & Underwriting Cost", value: 8.5, display: "7.0 - 10.0%", note: "High-touch advisory, underwriting and market-making cost" },
        { label: "Wholesale Underwriting Spread", value: 1.5, display: "1.0 - 2.0%", note: "Target B2B risk-absorption fee for retail tranche backstopping" },
      ],
    },
    {
      title: "Build, partner, and borrow capability allocation matrix",
      description: "Structuring capital markets capabilities across three execution modes to minimize fixed overhead while maximizing speed-to-market.",
      unit: "% allocation",
      variant: "donut",
      callout: { value: "3 Modes", label: "balanced build, partner, and borrow capability mix" },
      bars: [
        { label: "Build (In-House Core)", value: 45, display: "45%", note: "Retail intelligence analytics, underwriting capital, and tech UX" },
        { label: "Partner (Institutional Desks)", value: 35, display: "35%", note: "QIB institutional placement desks and foreign portfolio syndicate" },
        { label: "Borrow (External Sell-Side)", value: 20, display: "20%", note: "Third-party research coverage and specialized sectoral expertise" },
      ],
    },
    {
      title: "SEBI Category I merchant banking net worth escalation roadmap",
      description: "SEBI's 2025 regulatory amendments scale minimum net worth requirements tenfold, establishing higher institutional capital standards by 2028.",
      unit: "Rs. Cr",
      variant: "ladder",
      callout: { value: "Rs.50Cr", label: "mandated minimum net worth requirement by 2028" },
      bars: [
        { label: "Historical Baseline Requirement", value: 5, display: "Rs.5Cr", note: "Legacy minimum capital floor for Category I license" },
        { label: "Interim Phased Capital Milestone", value: 25, display: "Rs.25Cr", note: "Transitional capital requirement for active applicants" },
        { label: "Full 2028 Regulatory Net Worth", value: 50, display: "Rs.50Cr", note: "Final SEBI capital threshold ensuring institutional balance sheet resilience" },
      ],
    },
    {
      title: "Retail application share on marquee tech listings (disclosed)",
      description: "Disclosed retail application shares highlight Zerodha's unique ability to mobilize retail subscription on high-profile consumer offerings.",
      unit: "% share",
      variant: "bars",
      callout: { value: "~20%", label: "retail application share on Zomato and peer consumer IPOs" },
      bars: [
        { label: "Zerodha Retail Application Share", value: 20, display: "~20.0%", note: "Driven by seamless UPI-based bidding on Kite platform" },
        { label: "Rest of Banking & Broker Market", value: 80, display: "~80.0%", note: "Fragmented across 50+ traditional bank and non-bank brokers" },
      ],
    },
  ],
  note: "National 1st Runner-Up. With our team.",
};

export default entry;
