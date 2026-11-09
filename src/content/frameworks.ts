import type { StrategicFrameworkData } from "@/components/case/StrategicFramework";

export const projectFrameworks: Record<string, StrategicFrameworkData> = {
  "tata-steel": {
    title: "Green Premium Willingness-to-Pay Segmentation & CBAM Trade Defense",
    takeaway: "Decarbonization investments become margin-accretive when enterprise pricing shifts from a generic cost-plus markup to a segmented willingness-to-pay model that bridges import tariff avoidance.",
    thoughtProcess: "Decarbonizing heavy industrial assets involves a classic capital budgeting trap: green hydrogen DRI capex imposes a ~$30.5/t production cost penalty that cannot be recovered through broad cost-plus pricing in commoditized markets. We framed the problem not as an environmental compliance burden, but as a border tariff arbitrage and supply chain security asset. By isolating the European Carbon Border Adjustment Mechanism (CBAM) default benchmark penalties (EUR 11/t avoided) and customer brand vulnerability in high-margin end markets (automotive OEM vs construction), we decomposed demand into differentiated willingness-to-pay elasticity tiers. This allows an industrial producer to pre-sell premium green tranches on long-term off-take contracts before committing major capital.",
    pipeline: [
      {
        phase: "Phase 01: Audit",
        name: "Abatement Cost Decomposition",
        detail: "Audit blast furnace vs DRI emission intensity across sites and calculate site-level Marginal Abatement Cost (Rs.2,201/t) to rank decarbonization capex options.",
        decisionGate: "Hurdle: Abatement cost must fall below projected EU carbon allowance price of EUR 85/t.",
      },
      {
        phase: "Phase 02: Model",
        name: "Tariff Exposure & CBAM Modeling",
        detail: "Simulate export revenue at risk across 27 EU member states under escalating CBAM phase-in rules, quantifying the net penalty per metric ton of steel shipped.",
        decisionGate: "Hurdle: Tariff liability must exceed incremental green production cost to justify localized green DRI conversion.",
      },
      {
        phase: "Phase 03: Segment",
        name: "Willingness-to-Pay Tiering",
        detail: "Execute conjoint and expert buyer interviews across automotive, consumer durables, and infrastructure to define maximum green price premium tolerance.",
        decisionGate: "Hurdle: Automotive tier-1 buyers must demonstrate minimum $35/t premium tolerance backed by scope-3 reduction targets.",
      },
      {
        phase: "Phase 04: Synthesize",
        name: "Off-Take Contracting & Hedging",
        detail: "Structure bilateral supply agreements indexed to carbon certificates, locking in volume guarantees and green premiums prior to final investment decision.",
        decisionGate: "Hurdle: 60% of planned green line capacity secured under minimum 3-year commercial commitments.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Uniform Cost-Plus Surcharge vs. Segmented Willingness-to-Pay (WTP) Arbitrage",
        chosen: {
          name: "Tiered Willingness-to-Pay Indexing ($45 / $35 / $25 per ton)",
          detail: "Segmented buyers into 3 tiers based on their scope-3 vulnerability and avoided European CBAM penalties (EUR 11/t avoided), offset by $1.136M in carbon credit revenue.",
        },
        rejected: {
          name: "Blanket Cost-Plus Mark-Up (~$30.5/t flat penalty)",
          detail: "Passing the entire green hydrogen DRI production cost penalty uniformly across all commercial contracts.",
        },
        rationale: "Commodity infrastructure steel buyers reject blanket green premiums due to razor-thin construction margins. In contrast, automotive OEMs with scope-3 mandates and EU export exposure absorb up to $45/t. Segmenting demand protects baseline volume while capturing premium economic rent.",
        hurdleOrMetric: "Automotive tier-1 WTP hurdle ≥ $35/t",
      },
    ],
principles: [
      {
        name: "Tiered Willingness-to-Pay ($45 / $35 / $25)",
        detail: "Segment commercial clients by end-market regulatory vulnerability rather than purchase volume.",
      },
      {
        name: "Marginal Abatement Cost (MAC) Optimization (Rs.2,201/t)",
        detail: "Rank technological interventions strictly by lifecycle capital efficiency per ton of carbon abated.",
      },
      {
        name: "CBAM Border Tariff Arbitrage (EUR 11/t Avoided)",
        detail: "Price decarbonized outputs directly against destination import penalties avoided by multinational buyers.",
      },
    ],
    application: "Applies to any B2B commodity or manufacturing transition facing regulatory compliance cost cliffs (carbon taxes, ESG mandates, trade tariffs). By indexing pricing to customer-specific tariff exposure, industrial producers transform mandatory capex into competitive pricing power.",
  },

  "tata-consumer-products": {
    title: "Unbranded-to-Branded Value Migration & Asset-Light ROCE Optimization",
    takeaway: "In massive commodity pools where 98%+ of consumption is unbranded, consumer platforms capture superior economic rent by prioritizing branded trust and quick-commerce velocity on negative working capital.",
    thoughtProcess: "Consumer staples in emerging markets frequently feature vast unorganized categories (pulses, spices, staple grains) dominated by loose, unbranded local retail with razor-thin margins. A traditional FMCG expansion relying on heavy manufacturing asset ownership destroys return on capital employed (ROCE). We deduced that the core consumer value driver in staple food is hygiene, adulteration-free consistency, and kitchen shelf life, not proprietary factory processing. Therefore, Tata Sampann can capture branded category leadership by outsourcing physical packaging to accredited regional co-packers while concentrating enterprise capital on strict quality testing, national brand trust, and automated distribution replenishment.",
    pipeline: [
      {
        phase: "Phase 01: Audit",
        name: "Category White-Space Sizing",
        detail: "Decompose national household staple spend into branded penetration rates, evaluating price realization spreads between unorganized loose goods and packaged staples.",
        decisionGate: "Hurdle: Category unbranded share must exceed 90% with minimum 15% branded gross margin headroom.",
      },
      {
        phase: "Phase 02: Structure",
        name: "Asset-Light Co-Packing Network",
        detail: "Design quality-controlled third-party sourcing and milling networks operating on strict SLA compliance, minimizing capital expenditure on fixed plant machinery.",
        decisionGate: "Hurdle: Fixed asset turnover must exceed 8.0x with working capital cash conversion under 15 days.",
      },
      {
        phase: "Phase 03: Channel",
        name: "Quick-Commerce Replenishment Routing",
        detail: "Integrate ERP demand forecasting directly with dark store inventory networks (Blinkit, Zepto, Instamart) to drive instant fulfillment velocity.",
        decisionGate: "Hurdle: Modern trade & quick-commerce sell-through must deliver >2x traditional kirana inventory turns.",
      },
      {
        phase: "Phase 04: Scale",
        name: "Margin-Accretive Value Added Mix",
        detail: "Transition customer base from raw staples into value-added ready-to-cook mixes, protein powders, and functional spice blends commanding 35%+ gross margins.",
        decisionGate: "Hurdle: Blended core ROCE must sustain above 24.0% across the 3-year rolling horizon.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Capital-Heavy Owned Factory Manufacturing vs. Asset-Light Regional Co-Packing Architecture",
        chosen: {
          name: "Asset-Light Accredited Co-Packing & Quick-Commerce Velocity",
          detail: "Outsourced commodity milling and packaging to accredited regional co-packers under strict central QA, directing capital into brand trust, e-commerce, and negative 2-day working capital.",
        },
        rejected: {
          name: "Heavy Greenfield Sourcing & Milling Plants",
          detail: "Deploying enterprise capex into owned physical real estate and commodity milling machinery across target states.",
        },
        rationale: "Staple processing operates on thin gross margins. Owning fixed milling assets ties up capital and dilutes consolidated ROCE (group was dragging at 7.9%). The asset-light model delivered 24.5% core ROCE (3.1x group average), defending a premium 38x EV/EBITDA valuation multiple.",
        hurdleOrMetric: "Core ROCE ≥ 24.0% & cash conversion < 15 days",
      },
    ],
principles: [
      {
        name: "Ansoff Category Prioritization Matrix",
        detail: "Select market penetration vectors where unbranded conversion cost is lowest and purchase frequency highest.",
      },
      {
        name: "Asset-Light Co-Packing Architecture (24.5% Core ROCE)",
        detail: "Deploy working capital into brand equity and distribution velocity rather than owned factory concrete.",
      },
      {
        name: "Modern Trade & E-Commerce Velocity Surge",
        detail: "Leverage high-frequency digital channels to achieve negative working capital cycles on high-volume staples.",
      },
    ],
    application: "Applies to consumer staples, food, and agricultural businesses seeking to scale into unorganized categories. Shows how asset-light sourcing and branded trust command premium valuation multiples (38x EV/EBITDA) without heavy fixed-asset bloat.",
  },

  "campus-activewear": {
    title: "Brand Identity Expectation Gap Diagnostics & Margin-Accretive Pricing Corridors",
    takeaway: "When aided awareness (93%) outstrips purchase intent (5%), price cuts destroy margins; brands must isolate the identity expectation gap (0.76 pts) and establish an aspirational sub-brand corridor (MOSA Rs.1,500-3,999).",
    thoughtProcess: "When footwear revenue growth decelerates from 21% to 11% following post-pandemic channel restocking, executive teams typically default to tactical discounting or aggressive distribution push. Our quantitative diagnostic revealed that Campus had achieved extraordinary aided brand awareness (93%), but suffered an acute conversion bottleneck: consumers viewed the master brand strictly as school/utility footwear rather than an aspirational lifestyle choice. Across 10 surveyed brand imagery attributes, Campus trailed market leaders by 0.76 points on trendiness and performance credibility. Slashing prices would accelerate brand dilution; the strategic imperative was creating an independent aspirational sub-brand corridor (MOSA) to capture the Rs.1,500-3,999 sweet spot.",
    pipeline: [
      {
        phase: "Phase 01: Diagnose",
        name: "Growth Decomposition & DCF Calibration",
        detail: "Deconstruct historical revenue drivers into volume vs price realization effects and stress-test terminal growth assumptions under 11% vs 21% expansion scenarios.",
        decisionGate: "Hurdle: Isolate whether top-line slowdown is macro-cyclical or structural brand equity ceiling.",
      },
      {
        phase: "Phase 02: Measure",
        name: "Expectation Gap Perception Mapping",
        detail: "Field primary consumer surveys to quantify semantic differential scores across 10 brand dimensions, comparing perceived brand reality against target tier aspirations.",
        decisionGate: "Hurdle: Statistical gap > 0.50 points across trend/performance dimensions confirms brand architecture constraint.",
      },
      {
        phase: "Phase 03: Architecture",
        name: "Flanker Sub-Brand Engineering",
        detail: "Define the MOSA sub-brand identity, price bands (Rs.1,500-3,999), and dedicated distribution footprint to insulate premium products from mass utility perception.",
        decisionGate: "Hurdle: Gross margin on flanker SKU portfolio must exceed master brand baseline by minimum 450 bps.",
      },
      {
        phase: "Phase 04: Model",
        name: "Valuation Sensitivity Re-Rating",
        detail: "Integrate premiumization volume targets into a 5-year integrated financial model, calibrating terminal EV/EBITDA multiples against industry peers.",
        decisionGate: "Hurdle: Equity value recovery demonstrated with minimum 15% margin of safety against market cap.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Short-Term Volume Discounting vs. Aspirational Sub-Brand Corridor Engineering",
        chosen: {
          name: "Independent Flanker Sub-Brand Corridor (MOSA Rs.1,500–3,999)",
          detail: "Launched an aspirational lifestyle sub-brand with distinct retail placement and trend positioning to bridge the 0.76-point perception gap.",
        },
        rejected: {
          name: "Master Brand Price Slashing & Tactical Discount Standees",
          detail: "Running promotional markdown campaigns in modern trade stores to defend quarterly volume targets.",
        },
        rationale: "Aided awareness was exceptionally high (93%), but buy-intent was only 5% with a 5.6-pt cool gap vs. Nike. The root cause was an imagery gap, not a price barrier. Further discounting would accelerate brand decay into commoditized utility footwear and permanently destroy gross margin.",
        hurdleOrMetric: "Flanker gross margin premium ≥ +450 bps",
      },
    ],
principles: [
      {
        name: "Expectation Gap Quantification (Perceived vs Desired)",
        detail: "Measure the exact mathematical delta between consumer brand perception and target category purchase criteria.",
      },
      {
        name: "Growth Decomposition (Volume vs Price Effect)",
        detail: "Separate macroeconomic footwear demand cycles from internal pricing power erosion before altering strategy.",
      },
      {
        name: "Sub-Brand Flanker Architecture",
        detail: "Launch distinct premium sub-brands rather than attempting to stretch a mass-market utility mark into luxury price bands.",
      },
    ],
    application: "Applies to mass-market brands trapped in value-for-money commoditization that need to transition upmarket without alienating their core volume customer base.",
  },

  "hul-red-label": {
    title: "Van Westendorp Price Sensitivity Boundaries & Experiential Sampling Playbooks",
    takeaway: "New format innovation requires uncovering unconscious sensory barriers (55.3% artificial taste objection) and anchoring single-serve packaging at the exact econometric revenue-maximizing point (OPP Rs.20).",
    thoughtProcess: "Introducing soluble tea extracts into India's deeply entrenched boiling and brewing rituals encounters visceral sensory resistance. While consumers state strong interest in quick preparation (30 seconds vs 8 minutes), trial conversion collapses when they encounter perceived artificial flavors or chemical aftertastes. At MAXI Fair 2026, we developed an econometric and behavioral research protocol: first, a gamified sensory intercept to blind-test instant soluble tea against traditional cooked chai; second, an econometric Van Westendorp Price Sensitivity Meter to establish definitive consumer price boundaries. The econometric intersection demonstrated that pricing above Rs.20 triggered steep value skepticism, while single-serve sachet formats eliminated initial purchase friction.",
    pipeline: [
      {
        phase: "Phase 01: Intercept",
        name: "Gamified Sensory Blind Testing",
        detail: "Field blind taste trials comparing soluble tea extract prototypes against freshly brewed milk tea, logging taste, aroma, and mouthfeel ratings.",
        decisionGate: "Hurdle: Prototype must achieve parity (>45% preference) on blind sensory evaluation before market testing.",
      },
      {
        phase: "Phase 02: Model",
        name: "Van Westendorp PSM Boundaries",
        detail: "Map cumulative frequency distributions across 4 price questions (Too Cheap, Cheap, Expensive, Too Expensive) to pinpoint PMC, IPP, OPP, and PME.",
        decisionGate: "Hurdle: Optimal Price Point (OPP) must align with standard Indian retail coin currency denominations (Rs.10 or Rs.20).",
      },
      {
        phase: "Phase 03: Channel",
        name: "High-Traffic Vending Intercepts",
        detail: "Design experiential trial activations in corporate tech parks, transit hubs, and modern trade stores to bypass boiling ritual bias.",
        decisionGate: "Hurdle: Immediate post-sampling purchase conversion rate must exceed 25% at sampling kiosks.",
      },
      {
        phase: "Phase 04: Package",
        name: "Format & Sachet Architecture",
        detail: "Package trial units into moisture-resistant single-serve stick packs and 10-sachet trial boxes engineered for impulse modern trade checkout placement.",
        decisionGate: "Hurdle: Unit economics must deliver minimum 38% gross contribution margin at Rs.20 target price point.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Speed / Convenience Positioning vs. Authentic Heritage & Econometric Sachet Pricing",
        chosen: {
          name: "Authentic Heritage Anchor & Econometric OPP (Rs.20 Sachet)",
          detail: "Positioned on trusted blend ingredients, single-serve impulse formats, and high-frequency transit/workplace vending channels (56.1%).",
        },
        rejected: {
          name: "Portability & Instant-Preparation Pitch ('Chai in 30 Seconds')",
          detail: "Competing directly on rapid preparation time using multi-serve glass jars at standard retail benchmarks (>Rs.380/kg).",
        },
        rationale: "Sensory intercept trials showed 77.8% rejected artificial flavor perceptions and 57% dismissed 'portability', but 96% demanded trusted ingredients. Competing on speed commoditizes tea; anchoring in authentic heritage and a Rs.20 single-serve trial eliminated consumer risk.",
        hurdleOrMetric: "Gross contribution margin ≥ 38% at Rs.20 OPP",
      },
    ],
principles: [
      {
        name: "Van Westendorp PSM Threshold Modeling (PMC / IPP / OPP / PME)",
        detail: "Derive price ceilings and floors econometrically from consumer psychological resistance curves.",
      },
      {
        name: "Sensory Taste-Test Gamified Intercepts",
        detail: "Use blind comparisons to disconfirm preconceived consumer biases against novel product formulations.",
      },
      {
        name: "Transit & Workplace Vending Sampling Kiosks",
        detail: "Place sampling directly at points of acute consumer time poverty where convenience value is highest.",
      },
    ],
    application: "Applies to new product introductions (NPI) in food, beverage, and personal care where stated consumer interest fails to translate into repeat purchase due to perceived taste or efficacy penalties.",
  },

  "xlri-alumni-policy": {
    title: "Self-Sustaining Endowment Spending Rules & 15-Role Governance Scorecards",
    takeaway: "Institutional endowments achieve generational solvency by establishing predictable student admission levies (~Rs.30k), enforcing a 4-5% trailing 3-year spending cap, and scoring operational roles 50% on long-term outcomes.",
    thoughtProcess: "Higher education alumni associations and university endowments frequently swing between operating deficits and sporadic reliance on erratic capital gifts. Without a structural policy framework, annual operations are vulnerable to economic downturns and donor fatigue. We approached the XLRI alumni policy as an institutional asset-liability management challenge: establish non-discretionary capital inflows tied to core university admissions, enforce a disciplined spending ceiling modeled on global endowment best practices (the Yale/Harvard 4-5% smoothing rule), and eliminate ambiguity by codifying a 15-role governance architecture evaluated on balanced quantitative scorecards.",
    pipeline: [
      {
        phase: "Phase 01: Audit",
        name: "Historical Inflow & Deficit Analysis",
        detail: "Audit past decade alumni event budgets, reunion revenues, and chapter expenses to identify structural cost volatility and funding deficits.",
        decisionGate: "Hurdle: Quantify baseline annual fixed overhead requirement to size required statutory endowment corpus.",
      },
      {
        phase: "Phase 02: Structure",
        name: "Capital Levy & Spending Cap Rules",
        detail: "Draft statutory policy indexing annual endowment inflows to student admissions (~Rs.30,000 per student, generating Rs.1.20-1.35 Cr annually) and institute 4-5% spending caps.",
        decisionGate: "Hurdle: Spending formula must preserve real corpus purchasing power after 6% long-term inflation.",
      },
      {
        phase: "Phase 03: Governance",
        name: "15-Role Balanced Scorecard Design",
        detail: "Draft formal responsibility charters across all 15 executive committee roles, weighting performance 25% delivery, 25% compliance, and 50% strategic outcomes.",
        decisionGate: "Hurdle: 100% of executive committee positions covered by auditable objective metric scorecards.",
      },
      {
        phase: "Phase 04: Ratify",
        name: "Board Ratification & Compliance Architecture",
        detail: "Present legal articles of association and governance statutes to governing board and alumni trust for formal institutional adoption.",
        decisionGate: "Hurdle: Unanimous board approval of multi-year operational and investment management bylaws.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Ad-Hoc Discretionary Fundraising vs. Formulaic 4–5% Trailing Spending Rule & Statutory Pools",
        chosen: {
          name: "Mandatory Student Inflow Levies & Yale-Model 4–5% Smoothing Cap",
          detail: "Institutionalized predictable admission inflows (~Rs.30k/student), 4 segregated statutory pools, and a 15-role governance scorecard weighted 50% on long-term outcomes.",
        },
        rejected: {
          name: "Unrestricted Discretionary Annual Budget Draws",
          detail: "Relying on sporadic alumni reunion appeals and unbudgeted drawdowns during operating deficits.",
        },
        rationale: "Sporadic donation drives suffer from donor fatigue and cyclical deficits. A structured endowment rule protects intergenerational corpus solvency and corrected a 97.5% true cash inflow distortion (Rs.50Cr allocation vs. Rs.1.2–1.35Cr net inflow).",
        hurdleOrMetric: "Contingency reserve capped at 10–15%",
      },
    ],
principles: [
      {
        name: "Predictable Capital Inflow Indexing (Rs.1.20-1.35 Cr)",
        detail: "Tie endowment additions to recurring institutional activities rather than relying on unpredictable donor campaigns.",
      },
      {
        name: "Endowment Payout Smoothing (4-5% Ceiling)",
        detail: "Protect capital base across economic cycles by enforcing trailing 3-year moving average spending ceilings.",
      },
      {
        name: "15-Role Governance Scorecard (Delivery / Compliance / Outcomes)",
        detail: "Eliminate operational drift by linking committee evaluations directly to long-term institutional metrics.",
      },
    ],
    application: "Applies to university endowments, philanthropic foundations, and corporate trusts seeking to eliminate erratic annual deficits and establish disciplined, multi-horizon capital preservation.",
  },

  "1001-stories": {
    title: "Friction-Induced Behavioral Habit Disruption & Early-Lapse Vulnerability Windows",
    takeaway: "Habitual consumer behaviors (smartphone overuse) can be compressed (-40%) by introducing sensory friction (greyscale display); intervention survival models reveal that 73.5% of lapses cluster within the first 72 hours.",
    thoughtProcess: "Compulsive digital consumption is sustained by variable-ratio dopamine rewards engineered into vibrant application interfaces. Pure willpower interventions fail because they require continuous cognitive restraint against ambient environmental cues. Drawing on behavioral economics and nudge theory, we hypothesized that introducing perceptual friction (converting mobile displays to greyscale) would attenuate the brain's reward salience without disabling functional utility. Tracking participants over a controlled longitudinal intervention period, we fitted Kaplan-Meier survival curves and Cox proportional hazard models, proving that user relapse is acutely front-loaded: surviving the initial 72-hour friction cliff cements long-term habit change.",
    pipeline: [
      {
        phase: "Phase 01: Baseline",
        name: "Addiction Scale & Usage Instrumentation",
        detail: "Administer standardized Smartphone Addiction Scale (SAS) diagnostics and instrument device screen-time trackers to establish pre-intervention baselines.",
        decisionGate: "Hurdle: Baseline daily screen time must exceed 4.5 hours with high SAS behavioral dependency score.",
      },
      {
        phase: "Phase 02: Intervene",
        name: "Sensory Friction Deployment",
        detail: "Enforce greyscale screen transformation across participant cohort, stripping visual color contrast while preserving core notification channels.",
        decisionGate: "Hurdle: Protocol compliance verified via daily screenshot and automated device state logging.",
      },
      {
        phase: "Phase 03: Model",
        name: "Survival & Hazard Rate Fitting",
        detail: "Record daily compliance, time-to-first-relapse, and self-reported craving spikes, fitting parametric survival curves to locate critical dropout hazard zones.",
        decisionGate: "Hurdle: Identify empirical inflection point where hazard rate peaks (identified at 72 hours).",
      },
      {
        phase: "Phase 04: Scaffold",
        name: "Longitudinal Habit Stabilization",
        detail: "Introduce secondary behavioral commitments (app limits, night modes) once participants pass the 72-hour cliff, securing sustained 40% usage reduction.",
        decisionGate: "Hurdle: Post-intervention SAS score must demonstrate statistically significant reduction (p < 0.001).",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Behavioral App-Blocking Quotas vs. Neuro-Aesthetic Friction (Greyscale Rendering)",
        chosen: {
          name: "Systemic Greyscale Display & High-Risk Temporal Interventions",
          detail: "Stripped visual dopamine triggers system-wide, focusing behavioural prompts specifically on late-night pickups and weekend failure cliffs.",
        },
        rejected: {
          name: "Daily Minute Limits & App Lockdown Notifications",
          detail: "Relying on conventional timer limits that lock users out after arbitrary daily durations.",
        },
        rationale: "Minute quotas create psychological reactance, triggering user frustration, notification bypasses, and anxiety-fueled bingeing. Greyscale neutralizes the unconscious visual reward mechanism at the neuro-aesthetic level, cutting screen time 40% with 0% study dropouts.",
        hurdleOrMetric: "0% participant dropout rate over 4-week trial",
      },
    ],
principles: [
      {
        name: "Sensory Friction Choice Architecture",
        detail: "Disrupt automatic habitual consumption by removing ambient visual dopamine triggers rather than relying on willpower.",
      },
      {
        name: "Hazard & Survival Lapse Clustering (72-Hour Cliff)",
        detail: "Focus high-intensity behavioral support and reminders precisely during the initial high-hazard window.",
      },
      {
        name: "Smartphone Addiction Scale (SAS) Verification",
        detail: "Validate psychological outcomes with peer-reviewed psychometric instruments alongside telemetry data.",
      },
    ],
    application: "Applies to product managers and behavioral designers building retention loops, digital well-being features, or compliance protocols where identifying high-risk drop-off windows is essential to preventing customer churn.",
  },

  "ajooni-biotech": {
    title: "Economic Value Added (EVA) Destruction Decomposition & Capital Restructuring",
    takeaway: "When a company's WACC (24.47%) exceeds its ROIC (4.18%), growth destroys shareholder wealth; corporate finance turnaround requires unbundling raw material cost exposure (84.7%) and rebalancing the debt mix.",
    thoughtProcess: "In corporate turnaround analysis, executive teams often celebrate top-line revenue expansion while destroying enterprise equity value. Ajooni Biotech presented a stark financial paradox: rapid revenue growth masked a catastrophic economic spread of -20.29 percentage points (ROIC 4.18% vs WACC 24.47%). By deconstructing the income statement and cost of capital, we demonstrated that 84.7% of total revenue was consumed by volatile commodity inputs (cattle feed raw materials) without pass-through protection. Combined with an over-reliance on punishing high-cost equity (Ke 24.47%) and zero institutional debt optimization, every incremental dollar of revenue reduced economic book value. Turnaround required a two-pronged restructuring: raw material hedging/pass-through contracts and disciplined low-cost debt injection.",
    pipeline: [
      {
        phase: "Phase 01: Deconstruct",
        name: "ROIC-WACC Economic Spread Audit",
        detail: "Calculate operating invested capital, NOPAT, and weighted average cost of capital from audited financial statements, establishing baseline EVA destruction.",
        decisionGate: "Hurdle: Reconcile true cash return against equity cost to confirm structural value destruction.",
      },
      {
        phase: "Phase 02: Isolate",
        name: "Operating Cost Factor Sensitivity",
        detail: "Run DuPont deconstruction and cost-of-goods breakdown to locate operating leverage bottlenecks (isolated at 84.7% raw material cost ratio).",
        decisionGate: "Hurdle: Confirm that operating margin compression accounts for >70% of ROIC underperformance.",
      },
      {
        phase: "Phase 03: Hedge",
        name: "Input Cost Pass-Through Architecture",
        detail: "Design client supply contracts with index-linked raw material price adjustment clauses and backward integration to agricultural cooperatives.",
        decisionGate: "Hurdle: Operating margin variance must decline by >50% under 20% agricultural commodity price swings.",
      },
      {
        phase: "Phase 04: Optimize",
        name: "Capital Structure Recapitalization",
        detail: "Model optimal debt-to-equity sizing (introducing 5-7% low-cost institutional term debt) to reduce blended WACC toward 14.0% while shielding interest coverage.",
        decisionGate: "Hurdle: Projected interest coverage ratio must remain comfortably above 3.5x under conservative EBITDA stress scenarios.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Continued Equity Dilution vs. Structured Low-Cost Project Debt & ROIC Hurdles",
        chosen: {
          name: "Modelled Rs.8–10Cr Project Debt (5–7% Leverage) & 25%+ Hurdle Rate",
          detail: "Optimized capital structure to lower a 24.47% WACC, enforce strict capital expenditure hurdle rates, and cut debtor days from 68 to <50.",
        },
        rejected: {
          name: "100% Equity Financing with Loose Working Capital Terms",
          detail: "Continuing to fund capex via dilutive equity issuances without contractual debt discipline.",
        },
        rationale: "Unstructured equity financing in a high-cost capital regime destroyed Rs.23.5Cr in EVA over 5 years (32% of market cap). Injecting modest debt discipline lowers WACC, halts value erosion, and unlocks Rs.2.5–4.0 per share in intrinsic equity value.",
        hurdleOrMetric: "Project ROIC > WACC by minimum 500 bps",
      },
    ],
principles: [
      {
        name: "ROIC-WACC Economic Spread Analysis (-20.29 pp)",
        detail: "Never evaluate top-line growth in isolation from the true weighted cost of invested corporate capital.",
      },
      {
        name: "Raw Material Volatility Pass-Through Contracts",
        detail: "Protect operating margins from commodity inflation by indexing customer pricing to transparent input indices.",
      },
      {
        name: "Optimal Low-Cost Debt Injection (5-7% Sizing)",
        detail: "Lower excessive equity-weighted capital costs through prudent, asset-backed institutional leverage.",
      },
    ],
    application: "Applies to private equity turnarounds, corporate restructuring, and CFO advisory across capital-intensive manufacturing businesses suffering from margin compression and unhedged commodity input costs.",
  },

  "arthdex": {
    title: "Multi-Model Econometric Volatility Ensembles & Conformal Risk Bounds",
    takeaway: "Institutional portfolio risk models achieve 95% finite-sample coverage by reconciling disparate volatility estimators (GARCH, HAR-RV, EWMA, Parkinson) into a 35.7% consensus and applying unlisted liquidity haircuts (-24.9%).",
    thoughtProcess: "Valuing private equity assets and volatile public equities using single-model volatility assumptions (such as trailing standard deviation) introduces dangerous model risk during regime shifts. Different econometric models capture distinct market dynamics: GARCH captures volatility clustering, HAR-RV leverages high-frequency realized variance, EWMA tracks rapid short-term shocks, and Parkinson utilizes extreme price ranges. By synthesizing these four methodologies into an econometric consensus ensemble (yielding a 35.7% consensus volatility), and wrapping them in distribution-free conformal prediction intervals, we achieve guaranteed 95% finite-sample coverage without making unrealistic Gaussian normality assumptions.",
    pipeline: [
      {
        phase: "Phase 01: Ingest",
        name: "Multi-Asset High-Frequency Ingestion",
        detail: "Ingest daily OHLC and intraday tick data across 2,592 NSE/BSE listed companies and public benchmark indices.",
        decisionGate: "Hurdle: Complete data hygiene audit, correcting for stock splits, dividends, and illiquid trading halts.",
      },
      {
        phase: "Phase 02: Estimate",
        name: "4-Model Volatility Calibration",
        detail: "Calibrate GARCH(1,1), HAR-RV, EWMA (lambda=0.94), and Parkinson estimators simultaneously, generating rolling volatility term structures.",
        decisionGate: "Hurdle: Root Mean Squared Error (RMSE) against realized 30-day volatility minimized across rolling windows.",
      },
      {
        phase: "Phase 03: Bound",
        name: "Conformal Prediction Risk Bounds",
        detail: "Compute non-conformity scores on historical calibration sets to generate exact 90% and 95% prediction intervals with finite-sample validity.",
        decisionGate: "Hurdle: Out-of-sample empirical coverage must match target 95.0% within +/- 0.5% tolerance.",
      },
      {
        phase: "Phase 04: Adjust",
        name: "Unlisted Liquidity & Governance Haircuts",
        detail: "Apply econometric illiquidity discounts (-24.9%) and corporate governance risk adjustments when valuing unlisted private holdings.",
        decisionGate: "Hurdle: Fair valuation bounds signed off by independent valuation auditor for institutional fund accounting.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Unadjusted Quantitative Model Outputs vs. Governed Risk Consensus & Illiquidity Discounting",
        chosen: {
          name: "5-Pillar Consensus Valuation with Mandatory 25% Illiquidity Haircut",
          detail: "Engineered multi-model consensus (VaR, Expected Shortfall, DCF) with automated 25% unlisted illiquidity haircuts and 4-gate production validation.",
        },
        rejected: {
          name: "Standard Black-Scholes Volatility Calculations for Private Assets",
          detail: "Applying unadjusted public market options pricing and single-model quantitative valuations directly to unlisted SMEs.",
        },
        rationale: "Diagnosed a 57% volatility mispricing (126% down to 54.84%) caused by weekly-daily data mismatches. Enforcing automated illiquidity discounts and consensus bounds shields institutional portfolios against hidden illiquidity risks and audit restatements.",
        hurdleOrMetric: "4-gate production validation hurdle before deployment",
      },
    ],
principles: [
      {
        name: "4-Model Econometric Volatility Ensemble",
        detail: "Mitigate model specification bias by combining autoregressive, realized, and range-based volatility estimators.",
      },
      {
        name: "95% Finite-Sample Conformal Prediction Bands",
        detail: "Replace fragile Gaussian assumptions with rigorous, distribution-free statistical risk guarantees.",
      },
      {
        name: "Unlisted Liquidity & Governance Haircut Framework",
        detail: "Discount public multiple benchmarks to reflect private company illiquidity, minority status, and governance opacity.",
      },
    ],
    application: "Applies to quantitative asset management, family offices, and valuation advisory firms pricing illiquid private assets against public market benchmarks under extreme volatility regimes.",
  },
};

export const competitionFrameworks: Record<string, StrategicFrameworkData> = {
  "tenet-2026": {
    title: "Two-Product Merchant Banking Distribution & Wholesale Technical Underwriting",
    takeaway: "Retail discount brokerages capture high-margin investment banking fees by monetizing proprietary retail distribution appetite (Pre-DRHP Scoring) while partnering for institutional syndicate shortfall underwriting.",
    thoughtProcess: "Fintech brokerages like Zerodha dominate retail trade execution but have historically left high-margin investment banking fees to traditional merchant banks. Attempting to compete directly on balance-sheet underwriting would expose the fintech to catastrophic capital risk. We developed an institutional syndication framework: Zerodha capitalizes on its massive retail distribution power by deploying an algorithmic Pre-DRHP Retail Sentiment Engine that predicts retail subscription multiples before public filing. To eliminate balance-sheet underwriting risk, Zerodha executes a 'Build-Partner-Borrow' model, partnering with wholesale institutional syndicates for backstop shortfall underwriting while capturing pure advisory and distribution spread.",
    pipeline: [
      {
        phase: "Phase 01: Mine",
        name: "Retail Sentiment Scoring Engine",
        detail: "Analyze user watchlist additions, search volume, and portfolio cash allocations across 10M+ accounts to forecast retail IPO oversubscription rates.",
        decisionGate: "Hurdle: Model must achieve >85% directional accuracy on past 24 IPO retail subscription categories.",
      },
      {
        phase: "Phase 02: Screen",
        name: "Issuer Suitability & Pre-DRHP Pipeline",
        detail: "Filter mid-market IPO candidate companies through governance, profitability, and clean audit metrics to protect retail brand credibility.",
        decisionGate: "Hurdle: Issuer must demonstrate positive operating cash flow and minimum 15% 3-year revenue CAGR.",
      },
      {
        phase: "Phase 03: Syndicate",
        name: "Wholesale Underwriting Consortium",
        detail: "Structure institutional consortium agreements where Tier-1 wholesale banks provide balance-sheet underwriting backstops against retail shortfalls.",
        decisionGate: "Hurdle: 100% of minimum regulatory underwriting commitment hedged with institutional co-managers.",
      },
      {
        phase: "Phase 04: Execute",
        name: "Frictionless UPI Mandate Execution",
        detail: "Launch seamless in-app pre-apply workflows with 1-click UPI block mandates, maximizing retail application completion rates.",
        decisionGate: "Hurdle: Retail application drop-off between intent and UPI authorization must stay below 8.0%.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Heavy Advisory-Led Merchant Banking vs. Tech-First Retail Syndication Engine",
        chosen: {
          name: "Digital Deal Room & Automated Retail Syndication",
          detail: "Capitalized on Zerodha's 10M+ investor distribution to automate book-building for SME IPOs and fractional corporate debt issuances.",
        },
        rejected: {
          name: "Traditional High-Touch Investment Banking Advisory Desks",
          detail: "Staffing expensive advisory teams and competing head-to-head with legacy institutional merchant banks.",
        },
        rationale: "Legacy merchant banking suffers from high fixed employee costs and slow deal lifecycles. A technology-native distribution platform monetizes Zerodha's unparalleled retail depth with near-zero marginal cost per transaction.",
        hurdleOrMetric: "Near-zero marginal cost on retail book-building",
      },
    ],
principles: [
      {
        name: "Pre-DRHP Retail Sentiment Scoring",
        detail: "Monetize proprietary user telemetry to price and de-risk IPO allocations before public regulatory filings.",
      },
      {
        name: "Build-Partner-Borrow Consortium Roadmap",
        detail: "Capture advisory fees through distribution power while offloading capital underwriting risk to wholesale partners.",
      },
      {
        name: "Wholesale Technical Shortfall Underwriting",
        detail: "Insulate fintech equity from market volatility through pre-arranged institutional underwriting backstops.",
      },
    ],
    application: "Applies to tech platforms and wealth-tech firms expanding into capital markets advisory without taking on full regulatory balance-sheet underwriting risk.",
  },

  "mochaverse-venix-2026": {
    title: "Between-Subjects Experimental Trust Scoring & Compliance Transparency Playbooks",
    takeaway: "In speculative financial categories (crypto derivatives), mainstream customer acquisition jumps (+1.08 intent lift) when brands lead with compliance transparency rather than high-leverage product features (71% turned off by 50x leverage).",
    thoughtProcess: "Fintech founders frequently suffer from 'power-user bias', highlighting extreme product features (such as 50x leverage, perpetual futures, decentralized orderbooks) that thrill crypto-native traders but terrify mass-market retail investors. For Mochatrade (YC P26), attempting to scale in India under strict RBI Liberalized Remittance Scheme (LRS) constraints made this positioning lethal: 71% of mainstream investors reported being actively alienated by 50x leverage claims. We deployed a randomized between-subjects experiment comparing live feature-heavy copy against a compliance-anchored Web2 copy ('Invest in US stocks, in INR, via UPI'). The empirical results were decisive: leading with regulatory safety, institutional custody, and zero forex hassle drove a statistically significant +1.08 point intent lift (p < 0.0001) while cutting perceived risk by -1.27 points.",
    pipeline: [
      {
        phase: "Phase 01: Audit",
        name: "Regulatory & Compliance Boundary Mapping",
        detail: "Map RBI LRS guidelines, FEMA provisions, and FIU-IND compliance rules to identify permissible retail structures vs prohibited margin activities.",
        decisionGate: "Hurdle: Absolute alignment with RBI regulations prohibiting overseas leveraged derivatives for retail residents.",
      },
      {
        phase: "Phase 02: Test",
        name: "Between-Subjects Randomized Experiment",
        detail: "Randomize mainstream and crypto-experienced investors into control (live 50x leverage copy) vs treatment (clean US equity/UPI copy) conditions.",
        decisionGate: "Hurdle: Achieve statistical power > 0.85 with two-tailed t-test significance threshold set at p < 0.01.",
      },
      {
        phase: "Phase 03: Filter",
        name: "Resistance & Driver Factor Analysis",
        detail: "Quantify primary friction drivers across Web2 vs Web3 segments, isolating regulatory trust and security as the #1 determinant of platform choice.",
        decisionGate: "Hurdle: Confirm that compliance-first copy does not cause statistically significant churn among existing crypto power users.",
      },
      {
        phase: "Phase 04: Reposition",
        name: "Compliance-First GTM Playbook",
        detail: "Re-architect the acquisition funnel: hero positioning leads with SEBI/RBI compliance and UPI deposits; advanced features gated behind verified user tiers.",
        decisionGate: "Hurdle: Fielded GTM materials achieve >70% comprehension and trust ratings across all pilot cohorts.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Direct Cross-Border Retail Brokerage vs. Localized Feeder Custody Architecture",
        chosen: {
          name: "Regulatory-Compliant Localized Feeder Trust Architecture",
          detail: "Structured domestic feeder vehicles with institutional custodial clearing, shielding retail investors from FEMA/LRS tax friction.",
        },
        rejected: {
          name: "Direct Cross-Border Brokerage Onboarding",
          detail: "Requiring retail users to open individual overseas broker accounts and navigate complex tax withholdings.",
        },
        rationale: "Direct overseas onboarding suffers from 80%+ drop-off due to LRS compliance, foreign tax withholding forms, and manual bank wiring. A localized feeder model eliminates user friction and drives 3x higher activation conversion.",
        hurdleOrMetric: "FEMA/LRS compliance automation for 100% of lots",
      },
    ],
principles: [
      {
        name: "Between-Subjects Randomized Concept Testing",
        detail: "Never rely on stated focus group opinions; test live conversion intent through randomized control trials.",
      },
      {
        name: "Regulatory Transparency Signal Hierarchy",
        detail: "Lead with institutional custody and domestic regulatory compliance to unlock risk-averse mainstream market segments.",
      },
      {
        name: "Mainstream Feature Resistance Filtering",
        detail: "Gate niche power-user features (high leverage) behind user-qualification tiers to prevent mainstream customer alienation.",
      },
    ],
    application: "Applies to fintech and consumer finance apps launching innovative or complex products that must bridge the chasm from early adopters to risk-averse mainstream users.",
  },

  "tvs-credit-epic-8": {
    title: "Bottom-Up Consumer Durable Unit Economics & 30% Co-Lending Capital Optimization",
    takeaway: "Scaling retail loan portfolios (Rs.5,817 Cr) to high ROTA requires managing ticket-size brand subventions (Rs.40k / 12m), controlling mid-life cancellation shortfalls (Rs.216 Cr), and leveraging co-lending to save regulatory equity (Rs.135 Cr).",
    thoughtProcess: "Consumer durable financing in semi-urban India is characterized by severe competitive pressure, razor-thin net interest margins, and strict capital adequacy requirements. In the TVS Credit national case, simple top-line AUM expansion was inadequate; financial success depended on granular unit-level modeling. We deconstructed the loan portfolio down to individual ticket sizes (Rs.40,000 baseline across 12-month tenures), factoring in OEM manufacturer subventions, merchant discount rates, and operational acquisition costs. Crucially, our dynamic model unmasked a hidden cancellation shortfall cliff (Rs.216 Cr) that occurs when borrowers pre-close loans early. To solve capital constraints, we introduced a 30% bank co-lending partnership structure that slashed regulatory capital requirements by Rs.135 Cr while expanding portfolio ROTA.",
    pipeline: [
      {
        phase: "Phase 01: Deconstruct",
        name: "Granular Unit Economics Architecture",
        detail: "Model complete cash flows for typical Rs.40k / 12-month loan: fee income, processing costs, collection overhead, credit loss provisions, and cost of funds.",
        decisionGate: "Hurdle: Positive net interest margin achieved after accounting for fully loaded customer acquisition costs.",
      },
      {
        phase: "Phase 02: Schedule",
        name: "Logistic S-Curve AUM Trajectory",
        detail: "Fit mathematical S-curve models to project realistic geographical branch expansion, scaling portfolio from Rs.1,200 Cr to Rs.5,817 Cr without delinquency spikes.",
        decisionGate: "Hurdle: Projected 90+ DPD credit delinquency must remain capped under 1.85% across all regional cohorts.",
      },
      {
        phase: "Phase 03: Structure",
        name: "30% Bank Co-Lending Syndication",
        detail: "Structure RBI-compliant co-lending framework with public sector banks, transferring 30% of risk-weighted assets while retaining full origination fee spread.",
        decisionGate: "Hurdle: Capital Adequacy Ratio (CAR) must exceed 18.0% while releasing minimum Rs.120 Cr Tier-1 capital.",
      },
      {
        phase: "Phase 04: Simulate",
        name: "20,000-Trial Monte Carlo Sensitivity",
        detail: "Stress-test multi-year ROTA and earnings under 20,000 joint permutations of interest rate spikes, subvention cuts, and cancellation surges.",
        decisionGate: "Hurdle: 99% Value at Risk (VaR) demonstrates zero breach of regulatory minimum liquidity or capital standards.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Aggressive Subprime Volume Expansion vs. Merchant-Embedded Dynamic Risk Tranches",
        chosen: {
          name: "Merchant-Embedded Alternative Data Underwriting & Dynamic Tranches",
          detail: "Integrated Point-of-Sale underwriting utilizing merchant transaction history to isolate near-prime consumers, capping unsecured exposure via dynamic risk tranches.",
        },
        rejected: {
          name: "High-Yield Unsecured Subprime Lending Blitz",
          detail: "Relaxing underwriting thresholds to rapidly inflate quarterly loan origination volume and AUM.",
        },
        rationale: "Subprime expansion inflates short-term top-line yield but triggers devastating credit loss provisions during macro downturns. Merchant checkout integration captures high-velocity, high-retention prime/near-prime borrowers with 30% lower credit loss provisions.",
        hurdleOrMetric: "Gross NPA tolerance capped at < 2.5%",
      },
    ],
principles: [
      {
        name: "Logistic S-Curve AUM Plateau Scheduling",
        detail: "Model portfolio growth using empirical logistic curves that capture natural market saturation and operational capacity limits.",
      },
      {
        name: "ROTA Deconstruction & Tax-Shield Bridges",
        detail: "Deconstruct Return on Total Assets into leverage, asset turnover, and operating margin components to isolate margin drivers.",
      },
      {
        name: "20,000-Trial Monte Carlo Sensitivity Bounds",
        detail: "Stress-test multi-year capital solvency across correlated macroeconomic shocks rather than relying on static base cases.",
      },
    ],
    application: "Applies to retail lending, fintech NBFCs, and banking executives designing asset origination engines that balance growth velocity with regulatory capital preservation.",
  },

  "grad-3-galderma": {
    title: "Dermatological Price-Per-Application Benchmark Ladders & Verified Clinical Claim Uplift",
    takeaway: "Premium skincare brands penetrate price-sensitive corridors by reframing pack costs into daily cost-per-application benchmarks (Rs.12/application) and proving clinical efficacy with front-of-pack verified in-vivo claims (+1.07 intent lift).",
    thoughtProcess: "Dermatological skincare products face acute price resistance when entering developing or Tier-2 markets. While high sticker prices (e.g. Rs.650 per bottle) provoke immediate sticker shock against mass commercial alternatives (Rs.150-250), the product's actual usage economics are highly concentrated: a single pack delivers 60 distinct daily applications, amounting to just Rs.10.83 per day. In the Galderma case, we reframed the pricing narrative from absolute purchase cost to a daily 'investment in skin barrier health' benchmark. Concurrently, our clinical research revealed that Indian consumers are overwhelmed by marketing jargon; displaying verified, quantitative in-vivo clinical trial claims directly on the front-of-pack drove a massive +1.07 point purchase intent lift.",
    pipeline: [
      {
        phase: "Phase 01: Audit",
        name: "Category Pricing & Barrier Diagnostics",
        detail: "Audit premium dermatological skincare shelf placement, measuring price per milliliter against mass commercial competitor lines.",
        decisionGate: "Hurdle: Isolate price resistance thresholds where consumer purchase intent drops below 20%.",
      },
      {
        phase: "Phase 02: Reframe",
        name: "Cost-Per-Application Metric Engineering",
        detail: "Calculate precise dosage metrics (0.5ml per application) and convert absolute shelf pack pricing into daily usage benchmark comparisons.",
        decisionGate: "Hurdle: Daily cost must fall below daily coffee/commute benchmark threshold (<Rs.15/day).",
      },
      {
        phase: "Phase 03: Test",
        name: "Verified Clinical Claim Uplift Testing",
        detail: "Evaluate purchase conversion across 5 packaging claim variations: standard claims, organic/natural buzzwords, and verified in-vivo clinical metrics.",
        decisionGate: "Hurdle: Verified clinical metrics ('proven 48-hr barrier recovery') must drive statistically significant lift over generic claims.",
      },
      {
        phase: "Phase 04: Size",
        name: "Sub-Rs.4 Crore Phased Pilot Sizing",
        detail: "Design phased omnichannel pilot rollout across top-5 metro pharmacy chains and quick-commerce dark stores, capped at Rs.3.85 Cr total budget.",
        decisionGate: "Hurdle: Pilot payback period must verify under 9 months with customer repeat purchase rate >35%.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Mass Beauty Suncare Saturation vs. Dermatologist-Dispensed Clinical Corridors",
        chosen: {
          name: "Clinical Photoprotection Corridor for Post-Procedure & Barrier Repair",
          detail: "Positioned advanced photoprotection formulations through medical aesthetic clinics and dermatology channels, commanding a 2.5x price premium over FMCG brands.",
        },
        rejected: {
          name: "Mass Cosmetic Beauty Sunscreen with FMCG Distribution",
          detail: "Competing in mass e-commerce on cosmetic textures, synthetic fragrances, and lifestyle beach branding.",
        },
        rationale: "Mass suncare is hyper-competitive with collapsing customer loyalty and high performance-marketing customer acquisition costs (CAC). Clinical doctor-advocated channels yield 65%+ repeat prescription rates and high customer lifetime value (LTV).",
        hurdleOrMetric: "Prescription repurchase rate ≥ 65%",
      },
    ],
principles: [
      {
        name: "Price-Per-Application Metric Reframing",
        detail: "Overcome high sticker price resistance by breaking expenditure down into daily micro-usage investment comparisons.",
      },
      {
        name: "Verified Clinical Claims Sensory Lift",
        detail: "Replace vague marketing superlatives with rigorous, quantitative in-vivo dermatological study proof points.",
      },
      {
        name: "Sub-Rs.4 Crore Phased Pilot Sizing",
        detail: "De-risk national GTM launches through tightly controlled regional pilots with explicit unit-economic payback gates.",
      },
    ],
    application: "Applies to premium beauty, personal care, and wellness brands seeking to defend pricing power against mass-market disruptors without diluting brand prestige.",
  },

  "xcelerate-maruti-suzuki-2026": {
    title: "Alliance Platform Strategy & Subsegment Aspiration Natural Experiments",
    takeaway: "Automotive manufacturers leverage cross-badged alliance sales data (Toyota 11.7x MPV lead) to isolate perception deficits (-1.87 safety gap) and reallocate marketing budgets (Rs.435 Cr) toward tangible digital proof points.",
    thoughtProcess: "When automotive manufacturers form global technology alliances (such as the Toyota-Suzuki partnership), cross-badged shared platforms provide a rare natural experiment. The Maruti Suzuki Invicto and Toyota Innova Hycross share identical chassis engineering, hybrid powertrains, and manufacturing assembly lines; yet the Toyota vehicle outsold its Maruti twin by 11.7x in the premium Rs.25-30 Lakh segment. This divergence proved that the sales shortfall was 0% physical engineering and 100% brand perception. Primary consumer research showed Maruti trailed Toyota by -1.87 points on perceived safety and -1.45 points on luxury prestige. The solution was not discounting, but reallocating marketing spend (Rs.435 Cr) away from mass broadcast television into targeted high-touch digital showrooms and experiential test drives.",
    pipeline: [
      {
        phase: "Phase 01: Audit",
        name: "Cross-Badge Natural Experiment Diagnostics",
        detail: "Analyze sales velocity, waiting periods, and residual values of mechanically identical cross-badged alliance models to isolate pure brand equity premium.",
        decisionGate: "Hurdle: Establish identical vehicle specs to prove that sales delta is driven purely by perception rather than product attributes.",
      },
      {
        phase: "Phase 02: Quantify",
        name: "Perception Deficit Gap Mapping",
        detail: "Survey premium MPV buyers across safety, prestige, after-sales service, and resale expectations, quantifying net perception differentials.",
        decisionGate: "Hurdle: Isolate the primary purchase hurdle (identified as safety reassurance and executive chauffeur prestige).",
      },
      {
        phase: "Phase 03: Reallocate",
        name: "Zero-Based Marketing Budget Optimization",
        detail: "Re-engineer Rs.435 Cr marketing spend, slashing low-conversion mass TV advertising by 60% and redirecting funds to VIP airport lounges and personalized concierge drives.",
        decisionGate: "Hurdle: Customer test-drive to booking conversion must improve by >40% in pilot metro territories.",
      },
      {
        phase: "Phase 04: Re-Rate",
        name: "Dealership Service Stratification",
        detail: "Establish dedicated NEXA Black executive lounge bays and priority service lanes to deliver tangible premium ownership parity.",
        decisionGate: "Hurdle: Dealership Customer Satisfaction Index (CSI) in premium tier matches or exceeds benchmark competitor levels.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Defensive Entry-Hatchback Discounting vs. Premium Hybrid SUV Portfolio Re-Rating",
        chosen: {
          name: "Strong Hybrid Tech Packaging in the Rs.12–18L SUV Segment",
          detail: "Pivoted marketing and dealer capital into fuel-efficient strong hybrid SUV variants, capturing upwardly mobile buyers seeking premium tech without pure-EV charging anxiety.",
        },
        rejected: {
          name: "Aggressive Price Cuts on Commoditized Small Cars",
          detail: "Protecting overall unit volume market share by deep discounting margin-eroded entry hatchbacks.",
        },
        rationale: "India's profit pool has structurally shifted away from entry hatchbacks toward Rs.10L+ SUVs. Spending promotional budget on entry cars is fighting a structural secular decline; hybrid SUVs protect dealer profitability and corporate EBITDA margins.",
        hurdleOrMetric: "Average Selling Price (ASP) uplift ≥ +18%",
      },
    ],
principles: [
      {
        name: "Cross-Badge Natural Experiment Diagnostics",
        detail: "Use shared-platform alliance products to rigorously isolate pure brand perception premiums from mechanical product reality.",
      },
      {
        name: "Customer Attribute Priority Gap Mapping",
        detail: "Identify which specific psychological attributes (safety, luxury, status) drive purchase rejection in premium categories.",
      },
      {
        name: "Zero-Based Digital Proof Budget Reallocation",
        detail: "Redirect broadcast marketing capital into tangible, experiential proof points that directly disconfirm brand biases.",
      },
    ],
    application: "Applies to legacy market leaders in automotive and durable consumer goods experiencing market share erosion in premiumizing subsegments.",
  },

  "market-makers-mochatrade": {
    title: "Endowment Effect Messaging & Peer Frictionless Challenge Loops",
    takeaway: "Fintech onboarding ghosting is predominantly caused by simple procrastination (54%), which is cut dramatically through psychological endowment framing ('your portfolio is live', +1.00 lift) delivered via high-affinity channels (WhatsApp 96%).",
    thoughtProcess: "Fintech user acquisition funnels suffer from a notorious drop-off between app download and first deposit. In analyzing Mochatrade's funnel telemetry, we discovered that 54% of registered users who never completed funding were not held back by regulatory fear or complex KYC friction, but by simple procrastination and lack of urgency. Drawing on behavioral psychology (the Endowment Effect), we tested whether framing the user's account as already active ('your portfolio allocation is waiting') would stimulate psychological ownership and loss aversion. Delivering this messaging through India's highest-affinity communication channel (WhatsApp with 96% open rates) rather than ignored email alerts produced a dramatic +1.00 intent lift and slashed onboarding ghosting.",
    pipeline: [
      {
        phase: "Phase 01: Telemetry",
        name: "Funnel Drop-Off Attribution",
        detail: "Instrument event analytics across user onboarding steps (download, phone OTP, KYC, funding) to identify exact drop-off coordinates.",
        decisionGate: "Hurdle: Pinpoint funnel step responsible for >50% of total cohort drop-off (isolated at post-registration funding).",
      },
      {
        phase: "Phase 02: Experiment",
        name: "Behavioral Endowment Frame Testing",
        detail: "Test standard reminder copy against endowment framing ('Your demo portfolio has earned Rs.1,420; claim your account') across randomized user cohorts.",
        decisionGate: "Hurdle: Endowment message frame must demonstrate statistically significant lift in deposit initiation rates.",
      },
      {
        phase: "Phase 03: Route",
        name: "High-Affinity Channel Routing",
        detail: "Reroute automated nudge sequences from email/SMS to interactive WhatsApp API with 1-click UPI deep links.",
        decisionGate: "Hurdle: Message read rate must exceed 85% with link click-through rate >25%.",
      },
      {
        phase: "Phase 04: Gamify",
        name: "Risk-Free Peer Challenge Tournaments",
        detail: "Embed zero-risk simulated trading tournaments where users compete on mock capital, building platform muscle memory before depositing real funds.",
        decisionGate: "Hurdle: >40% of simulated tournament participants convert to real-money funded demat accounts within 30 days.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Generic Promotional Blast Emails vs. Segmented Liquidity-Incentive Reactivation",
        chosen: {
          name: "Cohort-Specific Fee Rebates & Priority Liquidity Pool Allotments",
          detail: "Isolated high-propensity dormant traders by historical order volume, offering time-decaying maker-fee rebates and exclusive market maker privileges.",
        },
        rejected: {
          name: "Blanket Promotional Push Notifications & Generic Fee Discounts",
          detail: "Blasting the entire dormant waitlist with uniform marketing emails and generic sign-up promos.",
        },
        rationale: "Mass notification blasts trigger instant unsubscriptions and brand fatigue. In financial markets, 80% of liquidity is driven by the top 10% of active traders; targeted maker incentives activate genuine market makers who sustain real order book depth.",
        hurdleOrMetric: "Waitlist reactivation ROI ≥ 4.0x vs generic blast",
      },
    ],
principles: [
      {
        name: "Behavioral Endowment Frame A/B Testing",
        detail: "Activate consumer loss aversion by framing accounts and portfolios as already belonging to the user.",
      },
      {
        name: "High-Affinity Channel Routing (WhatsApp/Instagram)",
        detail: "Communicate with users through the platforms where their daily attention and interaction frequencies are highest.",
      },
      {
        name: "Risk-Free Gamified Practice Tournaments",
        detail: "Build user platform competence and muscle memory on simulated capital before asking for financial commitment.",
      },
    ],
    application: "Applies to SaaS and digital consumer onboarding where friction between initial signup and first active session causes steep cohort drop-off.",
  },

  "hero-campus-challenge-10": {
    title: "Hardware-to-Ecosystem Platform Transition & Lifecycle Value Expansion",
    takeaway: "Electric mobility transitions collapse traditional ICE routine service revenue (-75%); OEMs must transition from vehicle hardware sellers to integrated ecosystem providers, expanding 5-year vehicle LTV by 1.7x (Rs.40k-47k).",
    thoughtProcess: "Electrification poses an existential financial threat to legacy motorcycle manufacturers: internal combustion engine (ICE) two-wheelers generate lucrative recurring aftermarket revenues (oil changes, filters, clutch repairs) across their operating lives, whereas electric vehicles have 90% fewer moving parts, reducing routine workshop service revenue by ~75%. To preserve long-term enterprise profitability, Hero MotoCorp must evolve from a one-off vehicle hardware seller into a recurring mobility ecosystem provider. In Season 10, we engineered a tri-part ecosystem model: Battery-as-a-Service (BaaS) swapping subscriptions, tiered digital telematics subscriptions (VIDA Pro), and second-life battery energy storage system (BESS) repurposing, expanding 5-year vehicle customer lifetime value by 1.7x.",
    pipeline: [
      {
        phase: "Phase 01: Model",
        name: "Aftermarket Revenue Erosion Sizing",
        detail: "Model 5-year workshop service and parts revenue trajectories comparing standard 125cc ICE motorcycles against equivalent electric two-wheelers.",
        decisionGate: "Hurdle: Quantify lifecycle aftermarket cash flow deficit to size required new digital service revenues.",
      },
      {
        phase: "Phase 02: Architecture",
        name: "Battery-as-a-Service (BaaS) Network",
        detail: "Design shared battery swapping station network economics, decoupling upfront battery cost from vehicle chassis price to achieve retail sticker parity with ICE.",
        decisionGate: "Hurdle: BaaS subscription margin must achieve breakeven within 18 months per battery asset.",
      },
      {
        phase: "Phase 03: Monetize",
        name: "VIDA Pro Digital Telematics Tiering",
        detail: "Develop recurring monthly connected vehicle software tiers (anti-theft tracking, smart navigation, predictive range, over-the-air performance boosts).",
        decisionGate: "Hurdle: Minimum 30% subscription attach rate at vehicle purchase point.",
      },
      {
        phase: "Phase 04: Circular",
        name: "Second-Life BESS Value Recovery",
        detail: "Structure industrial repurposing pipeline where degraded EV batteries (70-80% capacity) are repurposed for residential solar storage and grid balancing.",
        decisionGate: "Hurdle: Extract additional Rs.8,000-12,000 residual value per retired pack, offsetting initial manufacturing cost.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "High-Spec Lifestyle EV War vs. Total Cost of Ownership (TCO) & Modular Battery Swapping",
        chosen: {
          name: "Modular Commuter Platform with Battery-as-a-Service (BaaS)",
          detail: "Engineered a swappable battery ecosystem tailored for commercial gig fleets and Tier 2/3 daily commuters, decoupling battery cost from vehicle sale price.",
        },
        rejected: {
          name: "High-Performance Premium Lifestyle EV Scooter",
          detail: "Chasing luxury connectivity specs and high top speeds to compete with niche premium urban brands.",
        },
        rationale: "Mass two-wheeler mobility in India is won on per-kilometer operating economics. Battery leasing cuts upfront acquisition price by ~40%, bringing initial purchase price to ICE parity while locking in recurring subscription revenues.",
        hurdleOrMetric: "Total Cost of Ownership parity with ICE within 18 months",
      },
    ],
principles: [
      {
        name: "Battery-as-a-Service (BaaS) Network Economics",
        detail: "Lower upfront customer purchase price while creating a recurring, utility-like energy subscription revenue stream.",
      },
      {
        name: "Tiered Digital Software Subscriptions (VIDA Pro)",
        detail: "Monetize connected vehicle data and software enhancements through high-margin recurring SaaS subscriptions.",
      },
      {
        name: "Second-Life BESS Circular Economy Repurposing",
        detail: "Recapture battery salvage value by repurposing automotive packs into stationary commercial energy storage systems.",
      },
    ],
    application: "Applies to OEMs, connected hardware companies, and industrial manufacturers whose recurring aftermarket service revenues are disrupted by electrification or digital transformation.",
  },
  "the-ken-2026": {
    title: "Three-Rail Agentic Architecture with Bounded L3 Autonomy & ONDC Fourth Rail",
    takeaway: "Autonomous conversational commerce requires bounded Level 3 autonomy: executing purchases strictly on verified specification matches while routing edge cases to human-in-the-loop links, insulated from marketplace search bias via ONDC open catalog indexing.",
    thoughtProcess: "Commercial search engines like Amazon and Flipkart monetize sponsored product placements and ad impressions, creating an inherent conflict of interest that makes them incapable of serving as unbiased buyer agents. We architected Sift, an autonomous e-commerce agent operating across three specialized rails: Gnani.ai for non-linear bilingual voice parsing, Pine Labs for conditional pre-authorized payment settlement, and Delhivery for reverse-friction logistics verification. By establishing a strict Level 3 autonomy ceiling, Sift eliminates checkout friction for verifiable exact-match items while gracefully dropping to Level 2 (payment link confirmation) for ambiguous attributes. Furthermore, by designating ONDC as a neutral fourth rail, the agent accesses open federated inventory without captive marketplace walled gardens.",
    pipeline: [
      {
        phase: "Phase 01: Ingest & Lock",
        name: "Indic Conversational Voice Parsing (Gnani.ai)",
        detail: "Process bilingual English-Hindi voice streams through Prisma v2.5 STT and Timbre v2.5 TTS; enforce a locked intermediate state ('I think I have what I need') separating specification extraction from explicit confirmation.",
        decisionGate: "Hurdle: Zero conversational dropouts during multi-turn attribute over-specification or caller interruptions.",
      },
      {
        phase: "Phase 02: Index & Match",
        name: "ONDC Federated Inventory Discovery",
        detail: "Query open network catalogs across distributed seller nodes, matching verifiable physical dimensions, brands, and price corridors without single-marketplace ad placement bias.",
        decisionGate: "Hurdle: Must return verified SKU availability with strict dimensional match against user requirements.",
      },
      {
        phase: "Phase 03: Authorize & Settle",
        name: "Conditional Autonomy Execution (Pine Labs)",
        detail: "Evaluate specification match confidence: if exact and verified, execute L3 autonomous checkout under pre-authorized spending cap; if ambiguous, issue L2 Pine Labs Payment Link to user's WhatsApp/SMS.",
        decisionGate: "Hurdle: Absolute ceiling at Level 3 autonomy; never execute arbitrary open-ended checkout without exact spec match.",
      },
      {
        phase: "Phase 04: Fulfill & Verify",
        name: "Precision Reverse-Friction Logistics (Delhivery)",
        detail: "Trigger Delhivery order creation and real-time EDD tracking; deploy NLP complaint mapper converting spoken customer returns into automated NDR reverse-pickup waybills.",
        decisionGate: "Hurdle: Seamless closed-loop return initiation without requiring manual app-based support ticket filing.",
      },
    ],
        tradeoffs: [
      {
        dilemma: "Programmatic Keyword Ad Real Estate vs. High-Trust Editorial Contextual Commerce",
        chosen: {
          name: "Curated Intent-Fulfillment Engine with Transactional API Integrations",
          detail: "Monetized trusted long-form editorial authority by embedding deep contextual purchase triggers and curated member discovery directly into high-intent reading flows.",
        },
        rejected: {
          name: "Standard Programmatic Display Ads & Sponsored Clickbait Links",
          detail: "Maximizing ad impressions through intrusive banner networks, pagination, and third-party ad exchanges.",
        },
        rationale: "Programmatic display yields declining CPMs, repels premium subscribers, and is disrupted by AI summaries. Curation-led contextual commerce preserves reader trust while extracting high-intent affiliate and transactional margins.",
        hurdleOrMetric: "Zero display ad dilution of subscriber trust",
      },
    ],
principles: [
      {
        name: "Bounded Level 3 Autonomy Boundary",
        detail: "Autonomous execution must be strictly constrained to verifiable, objective specification matches; subjective judgment calls must immediately drop to Level 2 human approval.",
      },
      {
        name: "Separation of Catalog Rail from Agent Incentives",
        detail: "A buyer agent must remain structurally independent from marketplace advertising revenue; utilizing open network rails (ONDC) prevents ad-driven search corruption.",
      },
      {
        name: "Empirical Unhappy-Flow Architecture",
        detail: "Conversational agents must be stress-tested against real telephony failure modes (code-switching, interruption, over-specification) rather than idealized happy paths.",
      },
    ],
    application: "Applies to conversational AI agents, autonomous procurement engines, Indic voice interfaces, and next-generation decentralized commerce platforms operating across open digital protocols.",
  },
};
