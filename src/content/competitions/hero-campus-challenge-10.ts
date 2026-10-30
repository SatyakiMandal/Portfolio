import type { Competition } from "../competitions";

const entry: Competition = {
    slug: "hero-campus-challenge-10",
    name: "Hero Campus Challenge Season 10",
    short: "Hero Campus Challenge 10",
    sponsor: "Hero MotoCorp (VIDA)",
    brandKey: "hero",
    chips: [
        "EV business models",
        "Recurring revenue"
    ],
    result: "National Semi-Finalist",
    scale: "1 of 60 teams from 206,673 participants",
    year: "2026",
    challenge: "How can Hero MotoCorp's EV brand (VIDA) invert the ~75% post-warranty service revenue cliff caused by powertrain electrification into a sustainable, high-margin recurring revenue engine?",
    context: "India's 2-wheeler market reached 20.2 million registrations with electric 2Ws hitting 1.28 million retail sales (6.3% market share, 56% of all EVs). However, electrification breaks the traditional dealer economic engine: an ICE two-wheeler (Splendor) has ~2,000 moving powertrain parts generating Rs.12,000-20,000 in 5-year routine maintenance, contributing 30-40% of dealer gross profits. In contrast, an EV (Hero VIDA V2) has <20 moving parts and zero engine maintenance, causing a ~75% collapse in 5-year routine service labour (Rs.3,000-5,000) and cutting dealer service gross profit to 10-15%, with a 40% post-warranty retention cliff as independent garages siphon 60% of repair traffic. Combined with policy headwinds (sunset of FAME-II to PM E-DRIVE localization subsidies), Hero VIDA required an asset-light, recurring ecosystem model.",
    approach: [
        "Audited powertrain complexity: benchmarked ICE maintenance cadences (oil, filters, spark plugs, clutch overhauls) against electric drivetrains (<20 moving parts) to quantify the ~75% 5-year routine maintenance revenue collapse.",
        "Engineered a five-pillar recurring revenue architecture spanning B2B parts distribution, Battery-as-a-Service (BaaS) swapping, tiered digital subscriptions, telematics-driven insurtech, and circular battery lifecycle value extraction.",
        "Modelled monthly unit economics and utilization sensitivity for modular battery-swapping stations across commercial power tariffs, rent, labor, and state CAPEX subsidies (25% up to Rs.10 Lakhs in Kerala, MP, and AP).",
        "Costed the cloud and telematics infrastructure stack ($0.72 or ~Rs.60/month per vehicle) to establish gross margins (~71%) for tiered software monetization (VIDA Pro at Rs.2,499/year).",
        "Synthesized lifetime vehicle monetization, comparing the legacy ICE model (Rs.15,000-25,000) against the integrated VIDA platform model (Rs.40,000-47,000) to prove dealer viability and revenue expansion."
    ],
    proposed: [
        "Pillar I (Parts-as-a-Product & B2B Hub): Launch the VIDA PRO B2B portal for independent local mechanics to order genuine parts, repair manuals, and exploded diagrams; pivot dealerships into regional fulfillment wholesalers capturing 18-22% wholesale / 25-45% retail margins across 100% of the local repair market (mitigating the 40% post-warranty retention leak).",
        "Pillar II (Battery-as-a-Service & Swap Network): Decouple the 3.94 kWh battery (~Rs.58,000 replacement cost) from the vehicle invoice, lowering upfront EV cost from ~Rs.1,18,000 to ~Rs.60,000 (achieving ICE price parity with Splendor); deploy modular swap stations (Rs.10-15L CAPEX, <2 min swap) with Rs.40-50 pay-per-swap pricing (~Rs.1.0/km), earning Rs.40,000-55,000 net monthly profit per station at 100 swaps/day (~30-40% margin) and 17-24% IRR via off-peak grid arbitrage (BESS).",
        "Pillar III (Tiered Digital App Subscriptions): Structure a 3-tier software model: VIDA Core (Free hygiene OTA/SoC), VIDA Connect (Rs.999/year geofencing/anti-theft), and VIDA Pro (Rs.2,499/year AI predictive diagnostics, incognito mode, priority service) with 71% gross margin against Rs.720 annual cloud COGS, projecting Rs.3.2-4.0Cr ARR per 100k connected fleet.",
        "Pillar IV (Insurtech & Telematics Monetization): Leverage DPDPA 2023 compliant telematics (braking intensity, cornering Gs, night riding) to power IRDAI-approved Pay-How-You-Drive (PHYD) insurance renewals with 15-20% safe-rider discounts, capturing a 15% brokerage commission (~Rs.850/vehicle/year) while bypassing external aggregators.",
        "Pillar V (Circular Economy Engine & BWMR 2022): Repurpose retired batteries exiting traction life at 70-80% State of Health into residential/commercial Second-Life BESS backup systems (Rs.67,000-1,07,700 gross profit per 3.0 kWh unit) and monetize Extended Producer Responsibility (EPR) credit trading (Rs.20-50/kg = Rs.480-1,200/pack) with 95% critical mineral recovery (Li, Ni, Co)."
    ],
    findings: [
        "Electrification breaks the ICE service engine: routine maintenance revenue collapses ~75% from Rs.12,000-20,000 (ICE) to Rs.3,000-5,000 (EV), compressing dealer service gross profit contribution from 30-40% down to 10-15% while 60% of post-warranty repair traffic leaks to unorganized local garages.",
        "Decoupling battery capital achieves ICE parity: removing the ~40% battery cost barrier drops vehicle upfront invoice from ~Rs.1,18,000 to ~Rs.60,000, while sachetized financing with remote BMS charge-locking yields >99% repayment rates and 15-18% recurring energy IRR.",
        "Battery swapping stations generate an immediate service-loss hedge: a modular station (Rs.10-15L CAPEX ex-land) breaks even at 60 swaps/day, earns Rs.20,000-30,000/month profit at 80 swaps/day, and clears Rs.40,000-55,000/month net profit at 100 swaps/day (18-24 month payback), providing dealers with a recurring monthly cash cushion.",
        "Digital software delivers software-grade unit economics: against an annual AWS IoT/Timestream infrastructure COGS of Rs.720/vehicle ($0.72/month), VIDA Pro pricing of Rs.2,499/year yields a ~71% gross margin and converts 18-22% of trial users into paid subscribers.",
        "The integrated platform model expands 5-year lifetime value by ~1.7x to 2.5x: while a traditional ICE two-wheeler generates Rs.15,000-25,000 in total 5-year ecosystem revenue (routine maintenance + spares), the VIDA platform model captures Rs.40,000-47,000 per vehicle across maintenance (Rs.3k-5k), software subscriptions (Rs.12.5k), insurance commissions (Rs.4.25k), and energy/BaaS fees (Rs.20k-25k)."
    ],
    keyNumbers: [
        {
            value: "~75%",
            label: "service routine labor collapse"
        },
        {
            value: "Rs.40k - 47k",
            label: "5-year VIDA ecosystem revenue"
        },
        {
            value: "~Rs.60,000",
            label: "hardware-only EV entry price"
        },
        {
            value: "1.7x - 2.5x",
            label: "lifetime revenue expansion"
        }
    ],
    charts: [
        {
            title: "Hero VIDA 5-year platform ecosystem revenue distribution (Rs.43.2k total LTV)",
            description: "Recurring energy fees and high-margin software subscriptions replace collapsed workshop maintenance labour to expand 5-year vehicle LTV.",
            unit: "Rs. Lifetime Value",
            variant: "donut",
            callout: {
                value: "Rs.43,245",
                label: "total 5-year ecosystem revenue per connected VIDA vehicle"
            },
            bars: [
                {
                    label: "BaaS & Energy Fees (Rs.1.0/km)",
                    value: 22500,
                    display: "Rs.22,500",
                    note: "52.0% of LTV · Recurring energy yield shared with dealer"
                },
                {
                    label: "Tiered Software (VIDA Pro)",
                    value: 12495,
                    display: "Rs.12,495",
                    note: "28.9% of LTV · 71% gross margin on predictive diagnostics"
                },
                {
                    label: "Insurtech Commissions (PHYD)",
                    value: 4250,
                    display: "Rs.4,250",
                    note: "9.8% of LTV · 15% brokerage on telematics renewals"
                },
                {
                    label: "Routine Workshop Maintenance",
                    value: 4000,
                    display: "Rs.4,000",
                    note: "9.3% of LTV · Baseline electric powertrain inspection"
                }
            ]
        },
        {
            title: "Modular battery swapping station monthly unit economics (at 100 swaps/day)",
            description: "Operating model for a 100-swap/day franchisee station (Rs.10-15L CAPEX, <2 min swap time, 18-24 month payback).",
            unit: "Rs. / month",
            variant: "waterfall",
            callout: {
                value: "Rs.47,500/mo",
                label: "average net monthly profit (~35% operating margin) offsetting dealer service decline"
            },
            bars: [
                {
                    label: "Gross Monthly Revenue (100 swaps/day x Rs.45 x 30 days)",
                    value: 135000,
                    display: "Rs.1,35,000",
                    note: "Priced at Rs.40-50 per swap (~Rs.1.0/km)"
                },
                {
                    label: "OPEX: Commercial electricity charging tariff",
                    value: -50000,
                    display: "-Rs.50,000",
                    note: "Includes thermal management & charging losses"
                },
                {
                    label: "OPEX: Rent, labor & maintenance overhead",
                    value: -37500,
                    display: "-Rs.37,500",
                    note: "Franchisee dealer workshop space allocation"
                },
                {
                    label: "Net Monthly Operating Profit",
                    value: 47500,
                    display: "Rs.40,000 - 55,000",
                    note: "~30-40% operating margin · 18-24 mo payback"
                }
            ]
        },
        {
            title: "Swapping station utilization sensitivity: daily throughput vs monthly profit",
            description: "Sensitivity analysis demonstrating break-even at 60 swaps/day and significant margin expansion at 100+ swaps/day.",
            unit: "Rs. profit / month",
            variant: "ladder",
            callout: {
                value: "60 Swaps/Day",
                label: "station break-even threshold (supported by gig-worker fleet contracts)"
            },
            bars: [
                {
                    label: "40 Swaps / Day (Sub-critical volume)",
                    value: -15000,
                    display: "-Rs.15,000 (Loss)",
                    note: "Under-utilized fixed electricity & rent overhead"
                },
                {
                    label: "60 Swaps / Day (Break-even threshold)",
                    value: 0,
                    display: "Rs.0 (Break-even)",
                    note: "Covers baseline station OPEX"
                },
                {
                    label: "80 Swaps / Day (Moderate throughput)",
                    value: 25000,
                    display: "Rs.20,000 - 30,000",
                    note: "Viable secondary income for suburban dealers"
                },
                {
                    label: "100 Swaps / Day (Benchmark urban throughput)",
                    value: 47500,
                    display: "Rs.40,000 - 55,000",
                    note: "Target operating model · High gig fleet density"
                }
            ]
        },
        {
            title: "5-Year per-vehicle ecosystem revenue: Traditional ICE vs Hero VIDA V2",
            description: "Comparing 5-year lifetime value per vehicle shows that recurring energy fees and software subscriptions expand total ecosystem value by ~1.7x.",
            unit: "Rs. / vehicle",
            variant: "bars",
            callout: {
                value: "~1.7x LTV",
                label: "total 5-year ecosystem value expansion per vehicle"
            },
            bars: [
                {
                    label: "Traditional ICE: Routine Service",
                    value: 16000,
                    display: "Rs.16,000",
                    note: "ICE routine service across 5 years (Rs.12k - 20k range)"
                },
                {
                    label: "Hero VIDA: Routine Service (~75% drop)",
                    value: 4000,
                    display: "Rs.4,000",
                    note: "EV routine maintenance (Rs.3k - 5k range)"
                },
                {
                    label: "Hero VIDA: Software Subscriptions",
                    value: 12495,
                    display: "Rs.12,495",
                    note: "5 years of VIDA Pro subscription at Rs.2,499/year"
                },
                {
                    label: "Hero VIDA: Insurance Commissions",
                    value: 4250,
                    display: "Rs.4,250",
                    note: "5 years of PHYD renewals at 15% commission"
                },
                {
                    label: "Hero VIDA: Energy & BaaS Fees",
                    value: 22500,
                    display: "Rs.22,500",
                    note: "BaaS recurring energy yield at ~Rs.1.0/km"
                }
            ]
        }
    ]
};

export default entry;
