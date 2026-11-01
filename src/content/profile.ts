// Built from data/profile.json. Every figure here exists in the data files.

import type { BrandKey } from "@/components/BrandLogo";

export const person = {
  name: "Satyaki Mandal",
  description:
    "PGDM Candidate, XLRI Jamshedpur (Marketing & Strategic Management). Ex-Epsilon Data Scientist on Walmart. Strategy, pricing, market sizing and go-to-market.",
  location: "Jamshedpur, India",
  linkedin: "https://www.linkedin.com/in/satyakimandal/",
  cvPath: "/Satyaki_Mandal_CV.pdf",
};

export type Stat = { value: string; label: string; countTo?: number; prefix?: string; suffix?: string; decimals?: number };

export const stats: Stat[] = [
  { value: "~$4M", label: "media spend reallocated at Epsilon (Walmart account)", countTo: 4, prefix: "~$", suffix: "M" },
  { value: "Rs.9.19Cr", label: "milling-cost optimization in a 2-month internship", countTo: 9.19, prefix: "Rs.", suffix: "Cr", decimals: 2 },
  { value: "$30.5M", label: "annual green premium value modelled for Tata Steel", countTo: 30.5, prefix: "$", suffix: "M", decimals: 1 },
  { value: "22%", label: "marketing ROI lift across 50+ networks (Walmart account)", countTo: 22, suffix: "%" },
];

export type ExperienceTrack = {
  title: string;
  detail: string;
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  scope?: string;
  headlineMetric?: { value: string; label: string };
  chips?: { k: string; v: string }[];
  skills?: string[];
  bullets: string[];
  tracks?: ExperienceTrack[];
};

export const experience: Experience[] = [
  {
    company: "Epsilon",
    role: "Associate Data Scientist (Walmart account)",
    dates: "Aug 2023 - Jun 2025",
    scope: "Walmart Account · Media, Marketing & Loyalty Analytics · 120M+ Monthly Impressions",
    headlineMetric: {
      value: "22%",
      label: "ROI lift from 6 dashboards across 50+ networks",
    },
    chips: [
      { k: "Media Reallocated", v: "~$4M" },
      { k: "Super Bowl Revenue", v: "$5M+" },
      { k: "Monthly Impressions", v: "120M+" },
      { k: "LAL Conversion Lift", v: "15-18%" },
    ],
    skills: [
      "PySpark",
      "Databricks",
      "SQL",
      "Tableau",
      "Look-Alike Modeling",
      "Customer Segmentation",
      "JIRA",
    ],
    bullets: [
      "Propelled 2024 conversion ~14% on a ~$18M budget across 2 Super Bowl campaigns earning $5M+ revenue",
      "Amplified ROI 22% & beat Amazon/Target CTR by 15% via 6 dashboards spanning 50+ networks & 7 genres",
      "Powered a ~$4M media spend reallocation, helping recover ~3.5pp category share & avoid a $1.2M loss",
      "Spearheaded segmentation isolating 5 high-value segments worth 18% of revenue, lifting baskets 7%",
      "Streamlined $12M+ media plans for 20% faster decisions, enabling KPI self-serve for 20+ stakeholders",
      "Optimized ~12% of ad spend & improved reallocation accuracy 35% across 120M+ monthly impressions",
      "Safeguarded >99.5% reporting accuracy while saving 200+ hours & avoiding 100+ rework hours a year",
      "Unified 3 teams via bi-weekly Walmart demos, reducing data issues 60% & lifting sync efficiency 25%",
    ],
    tracks: [
      {
        title: "Media Viewership & Tableau Analytics",
        detail: "Analyzed 120M+ monthly impressions across TV and OTT; built 6 real-time dashboards across 50+ networks and 7 genres, lifting ROI 22% and beating Amazon/Target CTR by 15%.",
      },
      {
        title: "Super Bowl Campaign Optimization",
        detail: "Optimized high-impact ad slots and viewership retention on ~$18M budget, delivering ~14% higher conversion and $5M+ cumulative revenue uplift across 2024 and 2025 campaigns.",
      },
      {
        title: "Look-Alike (LAL) Machine Learning",
        detail: "Engineered 50+ behavioral and demographic features via PySpark on Databricks across 200M+ users, lifting campaign conversion 15-18% and cutting CPA ~11% during A/B testing.",
      },
      {
        title: "Customer Segmentation & Basket Lift",
        detail: "Identified 5 high-value customer segments driving 18% of revenue, unlocking a 7% lift in average basket size during peak Q3-Q4 holiday campaigns.",
      },
      {
        title: "Databricks Pipeline Automation",
        detail: "Automated 8 recurring reporting pipelines with PySpark and SQL, cutting manual effort by ~40%, weekly turnaround time by 70%, and vendor feed latency from 24h to <6h.",
      },
      {
        title: "Root-Cause Analysis & Capital Allocation",
        detail: "Conducted RCA for Q4 2024 campaigns, enabling reallocation of ~$4M media spend into live sports, recovering ~3.5pp category share and preventing $1.2M overspend.",
      },
    ],
  },
  {
    company: "Shree Gajanan Industries (rice mill, Nizamabad)",
    role: "Supply Chain Intern (SIP, Grade A+)",
    dates: "Apr 2026 - May 2026",
    scope: "Supply Chain & Operations · Rs.260Cr Processing Facility · 555 Inbound Vehicles",
    headlineMetric: {
      value: "37.5%",
      label: "higher milling throughput, 80 to 110 quintals an hour",
    },
    chips: [
      { k: "Cost Optimized", v: "Rs.9.19Cr" },
      { k: "Margin Gain", v: "Rs.2.3Cr/yr" },
      { k: "Audit Variance", v: "0.00 qtl" },
      { k: "C-Suite Adoption", v: "100%" },
    ],
    skills: [
      "SQL (AVCO / Window Functions)",
      "Zoho Analytics",
      "Zoho Creator",
      "Supply Chain Operations",
      "Bühler SCADA",
      "BOM Maintenance",
    ],
    bullets: [
      "Engineered a Rs.9.19Cr cost reduction via byproduct offsets on 87,448 quintals at a Rs.260Cr firm",
      "Maximized margins by Rs.2.3Cr a year, closing a Rs.63K gap in Rs.9L daily procurement via repricing",
      "Captured Rs.7.17L in freight fees & prevented overpayment on 3,078 quintals across 15 varieties",
      "Enhanced revenue ~Rs.20K a day by lifting paddy-to-rice yield from 49% to 51% with shift-wise tracking",
      "Revamped production planning via SQL data cleanup, fixing 120+ weekly failures, with spillovers down 75%",
      "Streamlined manual reporting to free 90 hours a week via 5+ dashboards & a Rs.25.5L+ daily P&L system",
    ],
    tracks: [
      {
        title: "Byproduct Cost-Offset Optimization",
        detail: "Engineered dynamic byproduct recovery accounting across Bran, Broken, Husk, and Param, capturing Rs.9.19Cr in cost offsets across 87,448 quintals of recovered material.",
      },
      {
        title: "Moisture Adjusted-Weight Pricing",
        detail: "Formulated multi-factor moisture deduction algorithm in Zoho ERP, closing an untracked 7% cost gap and recovering Rs.2.3Cr annualized margin across 35+ lots.",
      },
      {
        title: "Zero-Variance Dual-Master Audit",
        detail: "Reconciled 74,962 quintals of inbound paddy across 555 vehicle lifecycles with final gate-outs, achieving an exact 0.00 quintal shrinkage variance.",
      },
      {
        title: "Throughput Velocity & Shift Takt Times",
        detail: "Standardized operational takt times across 3 shifts, boosting milling throughput velocity by 37.5% (+30 quintals/hr, from 80 to 110 quintals/hr).",
      },
      {
        title: "Production Spillover Containment",
        detail: "Refined SQL aggregate queries to isolate true milling operations, eliminating root cause of 120+ weekly delay points and cutting daily plan spillovers by 75%.",
      },
      {
        title: "Executive BI & Digital Maintenance BOM",
        detail: "Deployed 5+ Zoho Analytics dashboards with 100% C-suite adoption (saving 90 hrs/wk), and catalogued 15,000 spares across 375 machines into a QR maintenance app.",
      },
    ],
  },
];

export type Recognition = { result: string; event: string; scale: string; slug?: string };

export const featuredRecognition: Recognition = {
  result: "National 1st Runner-Up",
  event: "TENET 2026, sponsored by Zerodha",
  scale: "452 registrations",
  slug: "tenet-2026",
};

export const recognition: Recognition[] = [
  { result: "National Finalist", event: "Mochaverse at Venix 2026, IIM Bangalore", scale: "1 of 15 finalists from 834 teams", slug: "mochaverse-venix-2026" },
  { result: "National Semi-Finalist", event: "Hero Campus Challenge Season 10", scale: "1 of 60 teams from 206,673 participants", slug: "hero-campus-challenge-10" },
  { result: "National Semi-Finalist", event: "TVS Credit E.P.I.C 8.0", scale: "1 of 319 teams from 36,900 participants", slug: "tvs-credit-epic-8" },
  { result: "National Semi-Finalist", event: "GRAD 3.0 by Galderma", scale: "1 of 247 teams from 26,805 participants", slug: "grad-3-galderma" },
  { result: "National Semi-Finalist", event: "Maruti Suzuki XCELerate 2026 B-Track", scale: "1 of 143 teams from 6,442 participants", slug: "xcelerate-maruti-suzuki-2026" },
  { result: "National Semi-Finalist", event: "The Ken's Case Competition 2026, The Great Rewiring", scale: "top 7% of 6,000 teams across 300 colleges", slug: "the-ken-2026" },
  { result: "National Semi-Finalist", event: "Market Makers by Mochatrade (YC P26)", scale: "1 of 40 teams from 2,104 participants", slug: "market-makers-mochatrade" },
  { result: "National Finalist", event: "IIC B-Plan Pitch Competition 2025, NIT Durgapur", scale: "627 teams" },
  { result: "National Finalist", event: "Ophzeus 5.0, Sierra'23, IIM Sirmaur", scale: "493 teams (2023)" },
];

export type Publication = {
  title: string;
  kind: string;
  bullets: string[];
  metric?: { value: string; label: string };
  link?: string;
  badge?: BrandKey;
  footer?: { left: string; right: string };
};

export const research: Publication[] = [
  {
    title: "Lyrics Generation Using LSTM and RNN",
    kind: "Springer ICBCC 2022 · Published Paper",
    metric: { value: "400+", label: "accesses & 2 citations · Springer LNEE" },
    badge: "springer",
    link: "https://doi.org/10.1007/978-981-99-1051-9_24",
    bullets: [
      "Co-authored peer-reviewed paper in Springer LNEE (Vol 1021, DOI: 10.1007/978-981-99-1051-9_24)",
      "Architected a 4-layer Bidirectional CuDNNLSTM on 40,000+ lyrics, yielding a 15x GPU speedup and <0.06 loss",
      "Uncovered that dropout regularization induces poetic repetition in 66.7% of outputs, with >80% peer acceptability",
    ],
    footer: { left: "Springer LNEE Vol 1021", right: "15x GPU Speedup · <0.06 Loss" },
  },
  {
    title: "Lung Cancer Histopathology AI",
    kind: "BioMedical AI · Summer Research Internship 2022",
    metric: { value: "99.97%", label: "test accuracy (0.9997 F1) · 15K biopsy images" },
    badge: "vit",
    bullets: [
      "Benchmarked 18 CNN architectures on 15,000 histopathological biopsy images across 3 tumor classes",
      "Constructed a stacked ensemble of top 5 CNNs with L1-regularized Logistic Regression, achieving 99.97% test accuracy and F1 = 0.9997",
      "Engineered custom 4-layer Conv2D model with GSC filtering, achieving 97.73% accuracy in separating malignant subtypes",
    ],
    footer: { left: "Ensemble: Top 5 CNNs + L1 Meta-Learner", right: "Adenocarcinoma vs Squamous Cell" },
  },
  {
    title: "Skin Cancer Detection from Dermoscopic Images",
    kind: "BioMedical AI · B.Tech Capstone Thesis 2023",
    metric: { value: "95.37%", label: "AUC-ROC (88.48% accuracy, 0.875 F1)" },
    badge: "vit",
    bullets: [
      "Preprocessed ISIC 2017 dataset using Dull Razor artifact removal, FastNLMeans denoising, and Chan-Vese contour segmentation",
      "Reduced 23 clinical ABCD features to 9 consensus markers via Extra Trees and RFECV with a custom Feature RNN (84.87% AUC-ROC)",
      "Engineered stacked ensemble of top 6 CNNs with KNN meta-learner reaching 95.37% AUC-ROC and 88.48% test accuracy",
      "Developed multimodal hybrid model fusing CNN visual representations with lesion morphology, achieving 86.36% test accuracy",
    ],
    footer: { left: "ISIC 2017 · Dull Razor & Chan-Vese", right: "Top 6 CNNs + KNN Meta-Learner" },
  },
  {
    title: "Rice-Mill Supply Chain Teaching Case",
    kind: "Operational Case Study · In Peer Review",
    metric: { value: "Rs.2.3Cr", label: "annual margin recovery · 54,805 quintals" },
    badge: "xlri",
    bullets: [
      "Authored a 142-page operational teaching case in peer review detailing supply chain yield optimization and procurement governance",
      "Modelled Rs.2.3Cr annual margin recovery via adjusted-weight moisture pricing, 0.00 quintal variance on 74,962 quintals, and 37.5% throughput lift",
      "Documented shift-based takt times, 120+ delay root cause elimination cutting spillovers by 75%, and a 15,000-spare QR maintenance BOM",
    ],
    footer: { left: "In Peer Review · Operational Audit", right: "+37.5% Throughput Velocity" },
  },
];

export type Role = { role: string; org: string; year: string; figure: string; figureLabel: string; bullets: string[] };

export const leadership: Role[] = [
  {
    role: "Sr. Executive",
    org: "piXL, official photography committee, XLRI",
    year: "2026",
    figure: "80+",
    figureLabel: "events covered",
    bullets: [
      "Selected from 400+ candidates as 1 of 10 Senior Executives of piXL, mentoring 10 junior executives",
      "Boosted online engagement by 30% & 50K+ impressions via 100+ assets on 2 pages with 4K+ followers",
      "Spearheaded coverage of 80+ events in 200+ hrs, incl. Ensemble Valhalla & Maxi Fair (25K+ footfall)",
    ],
  },
  {
    role: "Alumni Relations",
    org: "Alcom, XLRI",
    year: "2026",
    figure: "Rs.6L+",
    figureLabel: "sponsorships from 6 brands",
    bullets: [
      "Secured Rs.6L+ in sponsorships from 6 brands, incl. Nestle & Diageo, plus Rs.6L+ in registrations",
      "Organized Hyderabad Alumni Meet in an 8-member team, liaising with 20+ members across 6 verticals",
      "Orchestrated on-ground logistics for 200+ alumni via ~1000 inventory items & manpower deployment",
    ],
  },
  {
    role: "Jr. Executive",
    org: "Ensemble Valhalla core team, XLRI",
    year: "2025",
    figure: "30K+",
    figureLabel: "festival footfall",
    bullets: [
      "Directed media partners for 30K+ footfall across 30+ events over a 3-day fest at Ensemble-Valhalla",
      "Coordinated Rs.10L+ in prizes across 22 fest events, with participants from 1200+ colleges at XLRI",
      "Led 450+ digital, motion & print creatives with 5+ vendors & 3 government officials for the fest",
    ],
  },
  {
    role: "Organizing team",
    org: "Disha 2026 (Samarthya), XLRI",
    year: "2026",
    figure: "550+",
    figureLabel: "attendees",
    bullets: [
      "Oversaw onboarding of 50+ partner schools & 180+ volunteers for Disha 2026 as 1 of 10 organizers",
      "Coordinated vendors & speakers for 550+ attendees at Disha 2026, Jamshedpur's largest career fair",
    ],
  },
  {
    role: "Event marketing",
    org: "Nexora's networking event, XLRI",
    year: "2026",
    figure: "22.8K+",
    figureLabel: "Instagram views",
    bullets: [
      "Boosted 22.8K+ Instagram views & 650+ interactions from scratch within 1.5 months in creatives & PR",
      "Led Nexora's LinkedIn PR strategy to 16K+ impressions & 350+ reactions across 3 audience groups",
      "Drove 66.9% click rate, 500+ ticket visits & 1K+ scans, mobilizing 600+ participants & 50+ students",
    ],
  },
  {
    role: "Company Coordinator",
    org: "SIP 2026, Team Controls, XLRI",
    year: "2026",
    figure: "190+",
    figureLabel: "students supported",
    bullets: [
      "Selected as 1 of 30 Company Coordinators from 400+ & trained 10+ hrs for Team Controls' Day 0 hiring",
      "Supported Team Controls' offline SIP 2026 process for 190+ live students as Company Coordinator",
    ],
  },
  {
    role: "Volunteer teacher",
    org: "SIGMA-oikos BMLP, XLRI",
    year: "2026",
    figure: "~25",
    figureLabel: "children taught maths",
    bullets: ["Empowered ~25 underprivileged children via maths in SIGMA-oikos' BMLP, selected from 400+ students"],
  },
];

export const earlierCreativeWork: { title: string; detail: string }[] = [
  { title: "Creative Director, Atverts (2020)", detail: "Promoted in 3 months, 25% higher engagement via 100+ designs; 15+ video ads, output up ~20%; brand visuals for 300+ participant contests." },
  { title: "Graphics Design Head, Erudite (2020)", detail: "Co-founded as 1 of 5 core members, led a 5-member team for 30+ posts and 5+ videos, tripled post reach in the launch quarter, 12 weekly magazines for 500+ readers." },
  { title: "Chief Marketing Head, ResourceX, VIT Chennai (2022)", detail: "Founded VIT's first HR club to 500+ followers in one semester; marketing for 5+ workshops engaging 3000+ students; CryptoHunt with 300+ entries." },
  { title: "Head of Design, PALS, VIT Chennai (2021)", detail: "Selected from 30+ applicants; directed design and branding for INNOWAH 2021 (500+ students); creative delivery 30% faster via templates; social engagement up 40%." },
  { title: "Head of Design, Trekking Club, VIT Chennai (2021)", detail: "Branding for a 200+ member community; designed for 8+ treks drawing 50-80 participants each; social following up 35%; mentored 3 junior designers." },
  { title: "Commissioned design (2022)", detail: "DA Car Zone walk-ins up 20%; SD Developers enquiries up 30% via 5+ billboard campaigns." },
];

export type Education = { school: string; degree: string; years: string; chips: string[] };

// Class XII and X marks are not published (owner rule).
export const education: Education[] = [
  { school: "XLRI Jamshedpur", degree: "PGDM-BM, Marketing & Strategic Management", years: "2025 - 2027", chips: ["XAT 2025: 99.87 percentile", "CGPA 4.805/8"] },
  { school: "VIT Chennai", degree: "B.Tech, Computer Science and Engineering", years: "2023", chips: ["CGPA 8.71/10"] },
  { school: "Delhi Public School Ruby Park, Kolkata", degree: "CBSE Class XII", years: "2019", chips: [] },
  { school: "St. Patrick's Higher Secondary School, Asansol", degree: "ICSE Class X", years: "2017", chips: [] },
];

export const about: string[] = [
  "I spent two years at Epsilon as a data scientist on the Walmart account, where media plans, segments and dashboards had to earn their place in revenue. That work taught me to start from the number a decision depends on.",
  "At XLRI I study Marketing and Strategic Management and apply the same habit to pricing, market sizing and go-to-market problems, from green steel premiums to sachet price points. I am looking for strategy consulting roles.",
];
