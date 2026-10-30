import type { Project } from "../projects";

const entry: Project = {
  slug: "hul-red-label",
  brandKey: "hul",
  title: "Hindustan Unilever Red Label",
  tag: "Research Project",
  year: "2025",
  question:
    "What pricing architecture and channel interventions can convert 71.3% trial-willingness into habit for Red Label instant tea premix sachets?",
  cardNumber: { value: "Rs.20", label: "optimal sachet price point (OPP)" },
  chips: ["Pricing", "Go-to-market"],
  filters: ["Pricing", "Research", "Growth strategy"],
  keyNumbers: [
    { value: "Rs.20", label: "optimal sachet price point (OPP)" },
    { value: "71.3%", label: "consumer trial willingness" },
    { value: "55.3%", label: "artificial taste rejection barrier" },
    { value: "96.0%", label: "demand for trusted natural ingredients" },
  ],
  context:
    "Executed with our team for Hindustan Unilever at MAXI Fair 2025, where the project placed National 1st Runner-Up. Through a gamified consumer research environment at the 'Chhaiya Chhaiya Express' simulated railway stall, our research evaluated instant tea premix adoption barriers. While 71.3% of consumers were willing to try premix sachets, 55.3% resisted repeat adoption due to perceived 'artificial taste', and only 18% prioritized 'time saved' over flavour authenticity.",
  approach: [
    "Designed a multi-stage gamified consumer research environment simulating railway travel, office vending, and home settings to evaluate unconscious brand preference.",
    "Conducted Van Westendorp Price Sensitivity Meter (PSM) modeling across 4 price thresholds (PMC, IPP, OPP, PME) for single-serve sachets and bulk vending packs.",
    "Evaluated competitor perception across price-per-cup and perceived authenticity against Wagh Bakri, Girnar, Chaayos, Society, and Nescafe.",
    "Quantified situational adoption across daily travel and workplace scenarios, tracking word-of-mouth token allocations across consumer cohorts.",
    "Synthesized channel intervention and sampling playbooks for corporate vending machines and modern trade experiential sampling kiosks.",
  ],
  findings: [
    "Van Westendorp PSM established the Optimal Price Point (OPP) at Rs.20 per sachet and Indifference Price Point (IPP) at Rs.16 per sachet. Prices below Rs.12 trigger quality suspicion, while Rs.27 marks severe consumer resistance. Vending powder optimal benchmark is Rs.380-480/kg (IPP Rs.408/kg).",
    "96.0% of consumers demand 'Trusted Ingredients' (real milk solids and pure Assam tea leaves). Positioning premix around 'speed and convenience' underperformed because only 18% value time saved; the brand must pivot to 'authentic tea-master taste on the go'.",
    "Experiential sampling unlocks immediate conversion: student trial intent surged 6x post-tasting. In workplaces, vending machines represent the primary entry point (56.1% of trials), demonstrating that wet sampling drives trial faster than media ads.",
    "Travel and transit represent the highest-affinity adoption scenarios: 70% in transit/train journeys and 62% during social gatherings, where access to fresh milk and stoves is constrained.",
    "Trusted word-of-mouth accounts for 63-65% of category awareness (Family ~33-34%, Friends ~30-31%), while broadcast digital ads drive under 10%, indicating hyper-localized sampling out-converts broadcast digital campaigns.",
  ],
  charts: [
    {
      title: "Van Westendorp price sensitivity meter (PSM) thresholds",
      description: "Prices below Rs.12 trigger quality suspicion, Rs.16 represents indifference, Rs.20 maximizes revenue, and Rs.27 marks prohibitive resistance.",
      unit: "Rs. / sachet",
      variant: "ladder",
      callout: { value: "Rs.20", label: "optimal price point (OPP) maximizing sachet adoption" },
      bars: [
        { label: "Point of Marginal Cheapness (PMC)", value: 12, display: "Rs.12", note: "Prices below Rs.12 raise doubts on milk/tea quality" },
        { label: "Indifference Price Point (IPP)", value: 16, display: "Rs.16", note: "Equal proportion of consumers view price as cheap vs expensive" },
        { label: "Optimal Price Point (OPP)", value: 20, display: "Rs.20", note: "Peak conversion price point maximizing trial and margin" },
        { label: "Point of Marginal Expensiveness (PME)", value: 27, display: "Rs.27", note: "Severe price resistance barrier" },
      ],
    },
    {
      title: "Consumer trial readiness vs artificial taste barrier",
      description: "71.3% of consumers express trial willingness, but 55.3% cite perceived artificial taste as the single largest roadblock to repeat adoption.",
      unit: "% share",
      variant: "gauge",
      callout: { value: "71.3%", label: "trial-ready consumers open to sachet sampling" },
      bars: [
        { label: "Trial Willingness", value: 71.3, display: "71.3%", note: "Overall trial readiness" },
        { label: "Artificial Taste Barrier", value: 55.3, display: "55.3%", note: "Primary conversion inhibitor" },
        { label: "Trusted Ingredients Demand", value: 96, display: "96.0%", note: "Demand real milk and pure Assam tea" },
        { label: "Time Saved Preference", value: 18, display: "18.0%", note: "Only 18% prioritize speed over taste" },
      ],
    },
    {
      title: "Information discovery and word-of-mouth channel distribution",
      description: "Trusted word-of-mouth in close personal circles accounts for roughly two-thirds of category discovery, far outpacing digital advertising.",
      unit: "% share",
      variant: "donut",
      callout: { value: "64.2%", label: "combined family and friends word-of-mouth discovery" },
      bars: [
        { label: "Family Recommendations", value: 33.6, display: "33.6%", note: "Trusted household advice and parental endorsement" },
        { label: "Peer & Friend Referrals", value: 30.6, display: "30.6%", note: "Collegiate and workplace social circles" },
        { label: "Workplace Vending & Retail", value: 16.7, display: "16.7%", note: "Direct in-person physical encounter with premix" },
        { label: "Broadcast & Digital Advertising", value: 9.1, display: "9.1%", note: "Traditional broadcast campaigns and social media ads" },
        { label: "Other Informal Channels", value: 10, display: "10.0%", note: "Transit stalls, events, and miscellaneous sources" },
      ],
    },
    {
      title: "Vending powder price benchmarks vs sachet equivalence",
      description: "Comparing vending-pack powder benchmarks per kg indicates commercial buyers accept Rs.380-480/kg with an indifference price point at Rs.408/kg.",
      unit: "Rs. / kg",
      variant: "ladder",
      callout: { value: "Rs.408/kg", label: "vending powder indifference price point (IPP)" },
      bars: [
        { label: "Entry Value Threshold", value: 350, display: "Rs.350/kg", note: "Value bulk packaging floor" },
        { label: "Optimal Vending Band (Lower)", value: 380, display: "Rs.380/kg", note: "Start of commercial willingness-to-pay corridor" },
        { label: "Indifference Price Point (IPP)", value: 408, display: "Rs.408/kg", note: "Balanced perception of price and quality" },
        { label: "Optimal Vending Band (Upper)", value: 480, display: "Rs.480/kg", note: "Ceiling for high-turnover corporate cafeterias" },
      ],
    },
  ],
  credit: "With our team. Research Project for Hindustan Unilever at MAXI Fair 2025.",
};

export default entry;
