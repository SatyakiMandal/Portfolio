// Built from audit/REVIEW.md and owner-provided competition submissions.
// Survey figures flagged as synthetic or unverified are left out.

import type { BrandKey } from "@/components/BrandLogo";
import type { Chart, KeyNumber } from "./projects";
import heroCampusChallenge10 from "./competitions/hero-campus-challenge-10";
import theKen2026 from "./competitions/the-ken-2026";

export type Competition = {
  slug: string;
  name: string;
  short: string;
  sponsor: string;
  brandKey: BrandKey;
  chips: [string, string];
  result: string;
  scale: string;
  year: string;
  challenge: string;
  context: string;
  approach: string[];
  proposed: string[];
  findings: string[];
  keyNumbers: KeyNumber[];
  charts: Chart[];
  note?: string;
};

export const competitions: Competition[] = [
  {
    slug: "tenet-2026",
    name: "TENET 2026, sponsored by Zerodha",
    short: "TENET 2026",
    sponsor: "Zerodha",
    brandKey: "zerodha",
    chips: ["Merchant banking", "Capital markets"],
    result: "National 1st Runner-Up",
    scale: "452 registrations",
    year: "2026",
    challenge: "If Zerodha secures a SEBI Category I merchant banking licence, what should it build with it?",
    context:
      "SEBI's 2025 amendment raises the Category I merchant banking net worth threshold from Rs.5Cr to Rs.50Cr, phased to 2028, with 13 applications under review. Competing head-on with incumbent institutional bookrunners like Kotak, Axis, and ICICI Securities for mainboard lead-manager mandates (1-3% fee pool) plays away from Zerodha's core retail distribution moat.",
    approach: [
      "Audited SEBI's 2025 Category I net worth and underwriting rules alongside mainboard (1-3%) vs SME (7-10%) fee pools.",
      "Mapped Zerodha's proprietary advantage: driving roughly one-fifth of retail IPO applications on flagship issues such as Zomato and Groww.",
      "Separated merchant banking capabilities into Build (origination, retail intelligence, underwriting capital), Partner (QIB placement), and Borrow (research).",
      "Structured a 3-year staged roadmap with explicit Year-1 hiring and regulatory kill gates.",
    ],
    proposed: [
      "Stay out of the lead-manager fight with the large incumbent brokers and banks.",
      "Product one: a pre-DRHP Retail Appetite Score sold to issuers, built on data Zerodha already holds.",
      "Product two: a standby retail-tranche underwriting commitment sold wholesale to other merchant bankers.",
      "A three-year roadmap with KPIs and kill gates, reverting to a partnership model if senior hiring stalls in Year 1.",
    ],
    findings: [
      "SEBI's 2025 amendment raises Category I net worth 10x from Rs.5Cr to Rs.50Cr (phased to 2028), creating a capital moat that rewards balance-sheet-backed wholesale underwriting.",
      "Zerodha already captures roughly 20% (one-fifth) of retail IPO applications on marquee listings (Zomato 2021, Groww 2025), making retail demand intelligence and retail-tranche standby underwriting natural adjacencies.",
      "Whereas mainboard lead-manager fees compress to 1-3% of issue size (vs 7-10% in SME issues), wholesale retail-tranche underwriting monetizes Zerodha's existing brokerage base without hiring an institutional QIB sales desk.",
      "If hiring 2 to 3 senior merchant bankers stalls in Year 1, the kill-gate triggers an immediate pivot to a co-branded syndicate partnership model.",
    ],
    keyNumbers: [
      { value: "Rs.5Cr → Rs.50Cr", label: "Category I net worth rule, phased to 2028" },
      { value: "2", label: "products built on existing retail data" },
      { value: "3 years", label: "roadmap with kill gates" },
    ],
    charts: [
      {
        title: "SEBI Category I merchant banker minimum net worth requirement",
        description: "The 2025 regulatory amendment increases minimum net worth 10x from Rs.5Cr to Rs.50Cr, phased to 2028.",
        unit: "Rs. Cr",
        variant: "waterfall",
        callout: { value: "~1/5th", label: "retail IPO share driven by Zerodha on Zomato & Groww" },
        bars: [
          { label: "Previous SEBI Cat. I threshold", value: 5, display: "Rs.5Cr", note: "Legacy merchant banking capital floor" },
          { label: "Amended SEBI Cat. I threshold (by 2028)", value: 50, display: "Rs.50Cr", note: "10x capital step-up enabling standby underwriting" },
        ],
      },
      {
        title: "Issue fee pools across Indian equity capital markets",
        description: "SME issue costs run 7-10% of issue size compared with 1-3% for mainboard lead-manager mandates.",
        unit: "% of issue",
        variant: "bars",
        callout: { value: "Build / Partner / Borrow", label: "capability split (partner on QIB placement)" },
        bars: [
          { label: "SME IPO total issue cost pool", value: 8.5, display: "7-10%", note: "High touch, smaller ticket mandates" },
          { label: "Mainboard IPO lead-manager fee pool", value: 2.0, display: "1-3%", note: "Dominated by Kotak, Axis, ICICI Securities" },
        ],
      },
    ],
  },
  {
    slug: "mochaverse-venix-2026",
    name: "Mochaverse at Venix 2026, IIM Bangalore",
    short: "Mochaverse, Venix 2026",
    sponsor: "Mochatrade · IIM Bangalore",
    brandKey: "iimb",
    chips: ["Positioning", "Fintech GTM"],
    result: "National Finalist",
    scale: "1 of 15 finalists from 834 teams",
    year: "2026",
    challenge: "Why does the market read Mochatrade as a Web3 product when it wants Web2 Indian investors, and how does it close that gap?",
    context:
      "Mochatrade set out to give Indian retail investors access to US equities, a market backed by 21.6Cr Indian demat accounts (as of Dec 2025) and a USD 250,000 annual LRS allowance. However, leading with onchain mechanics and 50x leverage copy caused mainstream Web2 equity investors to read the platform as a high-risk crypto exchange rather than a global investing product.",
    approach: [
      "Audited the first-fold information hierarchy to separate mainstream cross-border investing utility from Web3 settlement plumbing.",
      "Redesigned the onboarding flow around a plain-English value proposition: US stocks, in rupees, via UPI.",
      "Moved 50x leverage and onchain mechanics two clicks deep behind an explicit opt-in toggle for advanced traders.",
      "Created a transparent regulatory FAQ addressing RBI LRS rules and compliance status without requiring any core product rebuild.",
    ],
    proposed: [
      "Lead with the plain promise: US stocks, in rupees, via UPI. Keep onchain and leverage two clicks deep.",
      "One simple default experience, with leverage behind an opt-in toggle.",
      "Honest trust framing, including a direct answer to whether the product is legal.",
      "A phased roadmap from week 1 to quarter 1, with no product rebuild.",
    ],
    findings: [
      "Mainstream Indian retail investors (21.6Cr demat accounts) anchor on familiar rails (INR pricing and UPI funding) and recoil when 50x leverage dominates the hero headline.",
      "Pushing onchain mechanics and margin leverage two clicks deep preserves full power-user functionality while removing first-impression trust friction.",
      "Direct, upfront regulatory framing around the USD 250,000 annual LRS cap and compliance status outperforms vague disclaimers.",
      "All positioning, hierarchy, and trust-architecture changes ship between Week 1 and Quarter 1 with 0 core engineering rebuilds.",
    ],
    keyNumbers: [
      { value: "1 of 15", label: "finalists from 834 teams" },
      { value: "0", label: "product rebuilds needed" },
      { value: "21.6Cr", label: "Indian demat account base (Dec 2025)" },
    ],
    charts: [
      {
        title: "Information hierarchy shift: clicks to reach complexity",
        description: "Moving onchain settlement and 50x leverage two clicks deep keeps the default entry surface focused on US equities in INR via UPI.",
        unit: "clicks",
        variant: "ladder",
        callout: { value: "0 rebuilds", label: "shipped via copy, hierarchy & opt-in toggle" },
        bars: [
          { label: "Layer 1 (Default Hero): US stocks in INR via UPI", value: 1, display: "Click 0", note: "Plain Web2 investor promise + direct legal FAQ" },
          { label: "Layer 2 (Opt-In Toggle): Advanced trading mode", value: 2, display: "Click 1", note: "Explicit risk disclosure and mode switch" },
          { label: "Layer 3 (Pro Drawer): Onchain & up to 50x leverage", value: 3, display: "Click 2", note: "Two clicks deep for experienced traders" },
        ],
      },
    ],
  },
  {
    slug: "tvs-credit-epic-8",
    name: "TVS Credit E.P.I.C 8.0, Finance Track",
    short: "TVS Credit E.P.I.C 8.0",
    sponsor: "TVS Credit",
    brandKey: "tvs",
    chips: ["NBFC unit economics", "Cohort modelling"],
    result: "National Semi-Finalist",
    scale: "1 of 319 teams from 36,900 participants",
    year: "2026",
    challenge:
      "How should a digital checkout-finance NBFC scale AUM 30x from Rs.100Cr to Rs.3,000Cr by March 2029 across ticket size, tenor, yield, opex and credit cost?",
    context:
      "The case brief asks how XYZ NBFC (opening AUM Rs.100Cr, FY27 disbursal Rs.400Cr, average ticket size Rs.20,000, 9-month tenor, 25% yield, 8% cost of funds, 10% opex, 6% credit cost, 1% ROTA) can reach Rs.3,000Cr AUM by March 2029 while holding opex at 5-7%, credit cost at 3-4%, and ROTA above 4%. We built an independent monthly cohort reducing-balance amortisation engine, a bottom-up unit-cost model calibrated to FY27 disclosures, a merchant-subvention yield decay curve (net of 18% GST), and a 20,000-trial Monte Carlo simulation benchmarked against 7 Indian consumer lenders.",
    approach: [
      "Solved monthly cohort reducing-balance amortisation schedules across 6-to-24 month tenors, comparing an exponential ramp against a steady-state logistic plateau ramp.",
      "Calibrated a bottom-up operating-cost engine from FY27 inputs: Rs.408 per loan originated, Rs.20 per active loan-month servicing, and Rs.45Cr FY29 Middle Layer fixed platform cost.",
      "Decomposed the 10% loan cancellation/foreclosure shock by cohort timing into 6% origination-stage e-commerce return-to-origin (RTO) and 1-day cooling-off exits vs 4% mid-life foreclosures.",
      "Built the pre-tax to post-tax ROTA bridge on own-book assets, ran 20,000 Monte Carlo draws across 6 drivers, and structured a 30% co-lending capital plan under RBI's 2025 Directions.",
    ],
    proposed: [
      "Shift average ticket size from Rs.20,000 to Rs.40,000 by weighting checkout originations toward smartphones and large appliances, cutting FY29 daily originations 59% (7,888/day to 3,212/day) and bringing opex to 5.62% of average AUM.",
      "Extend average tenor from 9 to 12 months on a logistic plateau path (cumulative 3-year disbursal Rs.5,817Cr: FY28 Rs.728Cr, FY29 Rs.4,689Cr), exiting March 2029 at a sustainable Rs.509Cr/month steady state.",
      "Accept a 23.15% portfolio yield (as 12-month tenor dilutes upfront brand subvention net of 18% GST) and re-set the Board's return target to 1.5-2.5% post-tax ROTA (with 4% deferred to FY32 conditional on a AA rating).",
      "Fund 30% of originations through co-lending (retaining 20% under RBI's 2025 Co-Lending Directions) to save Rs.135Cr of regulatory equity, and budget Rs.388Cr (+6.67%) of replacement disbursal for the 6% origination + 4% mid-life cancellation split.",
    ],
    findings: [
      "Ticket size is the true operating-cost lever: at Rs.25,000 and 12m, FY29 opex lands at 7.42% (outside the Board's 5-7% ceiling). Moving ATS to Rs.40,000 at 12m cuts daily originations 59% from 7,888 to 3,212 loans/day and brings FY29 opex to 5.62% of average AUM while staying below the RBI's Rs.50,000 risk threshold.",
      "Ramp geometry matters as much as tenor: an exponential ramp hits Rs.3,000Cr as a momentary spike originating Rs.667Cr/month (Rs.8,007Cr annualised) with a 2.79-month book age, whereas a logistic plateau path exits at Rs.509Cr/month flat with a 3.26-month book age.",
      "When a loan leaves matters as much as whether it leaves: 10% cancelling at origination causes a Rs.300Cr AUM shortfall (needing Rs.555Cr / +9.53% top-up disbursal), whereas 10% foreclosing mid-life costs Rs.90.8Cr (Rs.168Cr top-up). Our 6% origination RTO + 4% mid-life split produces a Rs.216.3Cr shortfall requiring Rs.388Cr (+6.67%) replacement disbursal.",
      "On the case's internal pre-tax spread at 8% cost of funds, the plan clears 5.13%. Adjusting for market A-band cost of funds of 10.0% (-2.00 pts), own-book co-lending accounting (-1.38 pts), and 25% corporate tax (-0.44 pts) yields 1.31% post-tax ROTA (Rs.22.9Cr FY29 PBT; 3.78% in Upside). Across 20,000 Monte Carlo trials, median ROTA is 1.30% and only 2.2% of trials clear 4%.",
      "Because the 125% consumer-credit risk weight still applies to NBFC own-book unsecured loans, a fully on-book Rs.3,000Cr portfolio requires Rs.562.5Cr of capital at 15% Middle Layer CRAR; 30% co-lending cuts on-book AUM to Rs.2,280Cr and minimum capital to Rs.427.5Cr, saving Rs.135Cr of equity.",
    ],
    keyNumbers: [
      { value: "Rs.40k / 12m", label: "recommended ATS & tenor (-59% daily loan load, 5.62% opex)" },
      { value: "Rs.5,817Cr", label: "3-year plateau disbursal to reach Rs.3,000Cr AUM" },
      { value: "Rs.135Cr", label: "regulatory equity saved via 30% co-lending (15% CRAR)" },
    ],
    charts: [
      {
        title: "FY29 ROTA bridge: from case spread (5.13%) to reported post-tax ROTA (1.31%, modelled)",
        description: "Three structural adjustments separate the case's internal pre-tax spread at 8% CoF from RBI-basis post-tax return on own-book assets.",
        unit: "% ROTA",
        variant: "waterfall",
        callout: { value: "2.2%", label: "of 20,000 Monte Carlo trials clear 4% post-tax ROTA (median 1.30%)" },
        bars: [
          { label: "Case-basis pre-tax spread (at 8% CoF)", value: 5.13, display: "5.13%", note: "23.15% yield - 8% CoF - 5.62% opex - 4.40% credit cost" },
          { label: "After market A-band CoF (10.0%, -2.00 pts)", value: 3.13, display: "3.13%", note: "Unrated/A-band NBFC borrowing reality vs AAA" },
          { label: "Pre-tax ROTA on own-book assets (-1.38 pts)", value: 1.75, display: "1.75%", note: "30% co-lending mix net of Rs.12.4Cr fee income" },
          { label: "Post-tax ROTA after 25% tax (-0.44 pts)", value: 1.31, display: "1.31%", note: "Rs.22.9Cr Base PBT (Upside reaches 3.78% post-tax)" },
        ],
      },
      {
        title: "FY29 operating cost (% of average AUM) across ticket size and tenor (modelled)",
        description: "Calibrated on Rs.408 origination cost/loan, Rs.20/loan-month servicing, and Rs.45Cr Middle Layer fixed platform cost.",
        unit: "% of AUM",
        variant: "bars",
        callout: { value: "3,212/day", label: "FY29 daily originations at Rs.40k/12m vs 7,888/day at Rs.20k/9m (-59%)" },
        bars: [
          { label: "Today baseline (Rs.20k ATS / 9m tenor)", value: 9.4, display: "9.40%", note: "7,888 loans/day · well above 5-7% Board ceiling" },
          { label: "Scenario A (Rs.25k ATS / 12m tenor)", value: 7.42, display: "7.42%", note: "5,139 loans/day · still breaches 7.0% ceiling" },
          { label: "Recommended (Rs.40k ATS / 12m tenor)", value: 5.62, display: "5.62%", note: "3,212 loans/day · comfortably inside 5-7% band" },
        ],
      },
      {
        title: "10% cancellation & foreclosure sensitivity: replacement disbursal required (modelled)",
        description: "Decomposing 10% leakage into 6% origination RTO/cooling-off and 4% mid-life foreclosure saves Rs.167Cr of replacement origination.",
        unit: "Rs. Cr",
        variant: "ladder",
        callout: { value: "Rs.209Cr", label: "AUM spread between origination-only and mid-life-only leakage" },
        bars: [
          { label: "All 10% cancel at origination (Rs.2,700Cr AUM)", value: 555, display: "+Rs.555Cr (+9.53%)", note: "Rs.300Cr AUM shortfall if 100% exit at day 1" },
          { label: "Recommended: 6% origination + 4% mid-life (Rs.2,784Cr AUM)", value: 388, display: "+Rs.388Cr (+6.67%)", note: "Rs.216.3Cr shortfall anchored on prepaid e-commerce RTO" },
          { label: "All 10% foreclose at mid-life (Rs.2,909Cr AUM)", value: 168, display: "+Rs.168Cr (+2.90%)", note: "Rs.90.8Cr shortfall as ~45% principal already collected" },
        ],
      },
    ],
  },
  {
    slug: "grad-3-galderma",
    name: "GRAD 3.0 by Galderma",
    short: "GRAD 3.0",
    sponsor: "Galderma",
    brandKey: "galderma",
    chips: ["Portfolio pricing", "Dermatology GTM"],
    result: "National Semi-Finalist",
    scale: "1 of 247 teams from 26,805 participants",
    year: "2026",
    challenge: "How should Galderma build a winning sunscreen portfolio for India's 25 to 35 year old consumers over the next 3 to 5 years?",
    context:
      "Indian consumers aged 25 to 35 face two structural barriers in premium photoprotection: scepticism over whether SPF claims are genuine, and a punitive cost-per-application gap. At ~Rs.26 per correctly dosed application, Cetaphil Sun costs nearly 2x to 3x D2C and pharma rivals (~Rs.9 for Minimalist and ~Rs.13 for La Shield), driving severe under-dosing (~0.4 g/day observed vs ~2.4 g/day recommended).",
    approach: [
      "Reframed category pricing from sticker price per tube to rupees per correctly dosed application.",
      "Tested price-cliff sensitivity across Rs.450 and Rs.650 price points alongside verified vs generic clinical claims.",
      "Designed a 5-SKU portfolio holding protection flat at SPF 50+ PA++++ across formats, including Biluma Sun Tinted with iron oxides for visible-light protection.",
      "Structured an evidence-gated 5-year rollout starting with a Phase 0 pilot before any new manufacturing commitment.",
    ],
    proposed: [
      "Own verified trust through published, batch-traceable certification.",
      "Close the value ladder with pack sizes, not price cuts, priced per correctly dosed application.",
      "Turn the clinic advantage into a photoprotection treatment protocol.",
      "An evidence-gated five-year plan that starts with a small pilot before any new manufacturing commitment.",
    ],
    findings: [
      "Cetaphil Sun costs ~Rs.26 per correctly dosed application against ~Rs.9 (Minimalist) and ~Rs.13 (La Shield); introducing a 100 g daily pump at Rs.999 brings unit cost down to ~Rs.12 per application without discounting brand equity.",
      "Stated purchase intent holds at 73% at Rs.450 and 61% at Rs.650 before breaking sharply above that threshold.",
      "Published, batch-traceable BIS in-vivo certification lifts purchase intent to 3.36 out of 5 compared with 2.82 for generic SPF claims.",
      "Observed sunscreen usage averages ~0.4 g/day against ~2.4 g/day (1.2 g twice daily) recommended, a 6x dosing gap that a calibrated pump dispenser directly addresses.",
    ],
    keyNumbers: [
      { value: "~Rs.26", label: "cost per application, against ~Rs.9 and ~Rs.13 for rivals" },
      { value: "~Rs.12", label: "per application with a 100 g pump at Rs.999" },
      { value: "5", label: "SKUs in the proposed portfolio" },
    ],
    charts: [
      {
        title: "Cost per correctly dosed sunscreen application",
        description: "A 100 g daily pump at Rs.999 cuts Galderma's cost per application from ~Rs.26 to ~Rs.12, matching pharma peers without cutting per-tube MRP.",
        unit: "Rs./dose",
        variant: "waterfall",
        callout: { value: "6x gap", label: "observed use (~0.4 g/day) vs recommended (~2.4 g/day)" },
        bars: [
          { label: "Current Cetaphil Sun (small pack)", value: 26, display: "~Rs.26", note: "2x-3x higher per dose than rivals" },
          { label: "La Shield benchmark", value: 13, display: "~Rs.13", note: "Dermatologist-prescribed peer" },
          { label: "Minimalist benchmark", value: 9, display: "~Rs.9", note: "Mass D2C benchmark" },
          { label: "Proposed 100 g pump at Rs.999", value: 12, display: "~Rs.12", note: "Closes value gap via pack architecture" },
        ],
      },
      {
        title: "Stated purchase intent across price thresholds and claim proof",
        description: "Purchase intent holds at 73% at Rs.450 and 61% at Rs.650, while batch-traceable verification lifts intent from 2.82 to 3.36 out of 5.",
        unit: "%",
        variant: "bars",
        callout: { value: "3.36 vs 2.82", label: "verified BIS claim vs generic claim (out of 5)" },
        bars: [
          { label: "Purchase intent at Rs.450", value: 73, display: "73%", note: "Entry trial pack corridor" },
          { label: "Purchase intent at Rs.650", value: 61, display: "61%", note: "Core portfolio threshold before cliff" },
        ],
      },
    ],
  },
  {
    slug: "xcelerate-maruti-suzuki-2026",
    name: "Maruti Suzuki XCELerate 2026, B-Track",
    short: "XCELerate 2026",
    sponsor: "Maruti Suzuki",
    brandKey: "maruti-suzuki",
    chips: ["Brand strategy", "Channel architecture"],
    result: "National Semi-Finalist",
    scale: "1 of 143 teams from 6,442 participants",
    year: "2026",
    challenge: "How can Maruti Suzuki rebuild aspiration in its SUV portfolio without giving up its value equity?",
    context:
      "Utility vehicles reached 67% of Indian passenger vehicle wholesales in FY26, while Maruti Suzuki's overall passenger vehicle market share fell to a 13-year low of 39.26% (with derived UV segment share around 24.5%). Even on shared platforms and powertrains, the Toyota badge outsells Maruti 1.2x overall and 3.0x on strong hybrids, proving the gap is brand perception and proof rather than engineering.",
    approach: [
      "Benchmarked Maruti vs Toyota badge performance on shared hardware (Grand Vitara vs Hyryder, Invicto vs Hycross) to isolate the brand-equity discount.",
      "Diagnosed consumer perception across 6 attributes: reliability (4.31/5) and value (4.30/5) vs safety (2.43/5), aspiration (2.50/5), design (2.76/5), and technology (2.80/5).",
      "Designed the 'Proven Confidence' 5-year strategy anchored on published Bharat NCAP 5-star proof, verified hybrid economy, and channel separation between Nexa and Arena.",
      "Reallocated 25% of the existing advertising envelope toward SUV proof content and digital discovery while keeping total ad spend at 1.0-1.3% of net sales.",
    ],
    proposed: [
      "Proven Confidence: a five-year plan that builds the brand on published proof such as safety ratings, verified hybrid economy and service reach.",
      "Re-scope Nexa as the SUV and technology channel while Arena sells smart SUVs on value and safety, with no new sub-brand.",
      "Move a quarter of advertising to SUV proof content and digital discovery, holding total spend steady.",
    ],
    findings: [
      "Utility vehicles command 67% of FY26 passenger vehicle wholesales, pulling Maruti's overall share down to a 13-year low of 39.26% where its derived UV share sits near 24.5%.",
      "On identical shared hardware, the Toyota badge wins 1.2x overall, 3.0x on strong hybrids, and 11.7x on Invicto vs Innova Hycross.",
      "Maruti leads on reliability (4.31/5) and value (4.30/5) but trails on safety (2.43/5) and aspiration (2.50/5), while safety is the #1 SUV purchase driver (34% in Grant Thornton Bharat's national survey; 27% in primary survey).",
      "Re-scoping Nexa as the SUV-and-technology channel and shifting 25% of existing ad spend (~Rs.435Cr proposed reallocation on the FY25 base) avoids the cost of launching a third dealership sub-brand.",
    ],
    keyNumbers: [
      { value: "67%", label: "utility vehicles' share of FY26 passenger vehicle wholesales" },
      { value: "39.26%", label: "Maruti's overall share, a 13-year low" },
      { value: "3.0x", label: "Toyota badge advantage on shared strong hybrids" },
    ],
    charts: [
      {
        title: "FY26 market reality: UV category dominance vs Maruti share",
        description: "As utility vehicles expanded to 67% of passenger vehicle wholesales, Maruti's overall share dipped to 39.26% on a ~24.5% derived UV share.",
        unit: "% share",
        variant: "bars",
        callout: { value: "3.0x", label: "Toyota badge volume edge on shared strong hybrids" },
        bars: [
          { label: "Utility vehicles share of PV wholesales (FY26)", value: 67, display: "67%", note: "Structural shift toward SUVs" },
          { label: "Maruti Suzuki overall PV share (FY26)", value: 39.26, display: "39.26%", note: "13-year low" },
          { label: "Maruti Suzuki derived UV segment share", value: 24.5, display: "~24.5%", note: "Derived from FY26 wholesales" },
        ],
      },
      {
        title: "Brand equity scorecard: reliability & value vs aspiration & safety",
        description: "Primary perception scores (out of 5) show deep trust in reliability and value alongside a sharp deficit in safety and aspiration.",
        unit: "score / 5",
        variant: "ladder",
        callout: { value: "34%", label: "rank safety #1 SUV driver (Grant Thornton Bharat survey)" },
        bars: [
          { label: "Reliability score", value: 4.31, display: "4.31 / 5", note: "Core brand strength" },
          { label: "Value for money score", value: 4.3, display: "4.30 / 5", note: "Core brand strength" },
          { label: "Technology & Design scores", value: 2.78, display: "2.80 & 2.76", note: "Mid-tier perception" },
          { label: "Aspiration & Safety scores", value: 2.46, display: "2.50 & 2.43", note: "Target of 'Proven Confidence' proof plan" },
        ],
      },
    ],
  },
  heroCampusChallenge10,
  theKen2026,
  {
    slug: "market-makers-mochatrade",
    name: "Market Makers by Mochatrade (YC P26)",
    short: "Market Makers",
    sponsor: "Mochatrade (YC P26)",
    brandKey: "mochatrade",
    chips: ["Growth loops", "Waitlist activation"],
    result: "National Semi-Finalist",
    scale: "1 of 40 teams from 2,104 participants",
    year: "2026",
    challenge: "How do you bring a dormant pre-launch waitlist back without spamming it? A simulated case.",
    context:
      "In this simulated pre-launch growth case, 60% of a startup's waitlist had gone dormant and stopped opening launch-reminder emails. Sending more reminder blasts risks unsubscribes and spam flags; the challenge was to engineer a behavioural reactivation loop on high-open channels before launch.",
    approach: [
      "Diagnosed why waitlist sign-ups go dormant: 54% simply forgot after signing up, while email open rates sat at just 28%.",
      "Tested an endowment-framed hook ('your pre-seeded Rs.1,00,000 paper portfolio is live, see your rank') against a standard launch reminder.",
      "Shifted delivery from email (28% open rate) to consented WhatsApp (96% open rate) and Instagram (79% open rate).",
      "Built 'Season Zero': an interactive investor-archetype reveal paired with a 'beat my portfolio' friend referral challenge.",
    ],
    proposed: [
      "Season Zero: a pre-seeded Rs.1,00,000 paper portfolio and an investor-archetype reveal.",
      "Deliver it on Instagram and consented WhatsApp, where people actually open messages.",
      "A friend challenge, \"beat my portfolio\", to turn reactivation into referral.",
    ],
    findings: [
      "54% of dormant sign-ups went quiet simply because they forgot, making a utility-first nudge far more effective than another countdown email.",
      "Message B ('your portfolio is live, see your rank') scored 3.37 out of 5 on activation intent compared with 2.37 for a standard launch reminder.",
      "78% of those who picked a side preferred the endowment-framed message, 74% would tap a friend's 'beat my portfolio' challenge, and 68% wanted a risk-free practice portfolio.",
      "Delivering Season Zero on consented WhatsApp (96% open rate) and Instagram (79% open rate) bypasses the 28% email open bottleneck.",
    ],
    keyNumbers: [
      { value: "3.37 vs 2.37", label: "portfolio-live message against a launch reminder, out of 5" },
      { value: "54%", label: "went quiet because they forgot" },
      { value: "96% vs 28%", label: "WhatsApp opens against email" },
    ],
    charts: [
      {
        title: "Channel open rates: WhatsApp & Instagram vs Email",
        description: "Moving waitlist reactivation to consented WhatsApp and Instagram lifts message reach from 28% on email to 79-96%.",
        unit: "% open rate",
        variant: "bars",
        callout: { value: "3.37 vs 2.37", label: "endowment message score vs launch reminder (out of 5)" },
        bars: [
          { label: "Consented WhatsApp open rate", value: 96, display: "96%", note: "Primary Season Zero delivery rail" },
          { label: "Instagram open rate", value: 79, display: "79%", note: "Archetype card & friend-challenge rail" },
          { label: "Standard email open rate", value: 28, display: "28%", note: "Legacy waitlist reminder channel" },
        ],
      },
      {
        title: "Season Zero behavioural mechanics adoption",
        description: "Endowment framing, peer competition, and risk-free paper trading drive reactivation without spam.",
        unit: "%",
        variant: "ladder",
        callout: { value: "54%", label: "of dormant users went quiet simply because they forgot" },
        bars: [
          { label: "Preferred endowment-framed portfolio message", value: 78, display: "78%", note: "Among respondents picking a side" },
          { label: "Would tap a friend's 'beat my portfolio' challenge", value: 74, display: "74%", note: "Turns reactivation into viral referral" },
          { label: "Want a risk-free Rs.1,00,000 practice portfolio", value: 68, display: "68%", note: "Pre-seeded Season Zero paper account" },
        ],
      },
    ],
  },
];

export function getCompetition(slug: string) {
  return competitions.find((c) => c.slug === slug);
}

export function sourceForCompetition(c: Competition) {
  return `${c.name} (${c.result}, ${c.year})`;
}
