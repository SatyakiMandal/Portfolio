import type { Competition } from "../competitions";

const entry: Competition = {
    slug: "mochaverse-venix-2026",
    name: "Mochaverse at Venix 2026, IIM Bangalore",
    short: "Mochaverse, Venix 2026",
    sponsor: "Mochatrade · IIM Bangalore",
    brandKey: "mochatrade",
    chips: [
        "Positioning",
        "Fintech GTM"
    ],
    result: "National Finalist",
    scale: "1 of 15 finalists from 834 teams",
    year: "2026",
    challenge: "Why doesn't the market's read of Mochatrade match its stated intent of winning Web2 Indian investors, and what closes the gap without abandoning its underlying crypto-settled product?",
    context: "Mochatrade (YC P26) set out to give Indian retail investors access to US stocks in INR, backed by 21.6Cr Indian demat accounts (Dec 2025) and a USD 250,000 annual LRS allowance. However, its own launch materials led with 'up to 50x leverage,' 'perps,' and 'Hyperliquid,' attracting crypto-native power traders who criticized the app for not being decentralized enough, while alienating mainstream broker-habituated investors. Crucially, while the RBI's LRS scheme permits foreign cash equities and ETFs (the INDmoney, Vested, and Groww US model), it explicitly prohibits margin/leveraged trading abroad, derivatives with overseas counterparties, and crypto remittances. Mochatrade's compliance anchor of 'FIU-IND registration in flight' is an anti-money laundering registration for virtual asset service providers, not a SEBI brokerage licence or RBI remittance permit, leaving user trust unprotected.",
    approach: [
        "Diagnosed the three-layer root problem across Mochatrade's live assets: Messaging (homepage leads with 'onchain' and 'perps' before 'simplicity'), Trust Signal (FIU-IND registration is an AML crypto tag, not a SEBI licence), and Product Mechanic (50x leverage settled via Hyperliquid sits in the LRS-prohibited zone).",
        "Fielded a primary between-subjects concept test comparing Mochatrade's live copy (leverage/onchain-first) against a revised Web2-first copy ('Invest in US stocks, in INR, via UPI'), measuring product understanding, platform trust, signup intent, and perceived risk.",
        "Tested headline leverage sensitivity ('50x leverage') and ranked trust across three compliance phrases ('SEBI regulated', 'FIU-IND registered', 'Compliance underway, legal partner named') across Web2-leaning and Web3-leaning investor segments.",
        "Conducted a five-lens independent stress test (Contrarian, First Principles, Expansionist, Outsider, Executor) to challenge regulatory exposure, universal vs segmented UI toggles, and GTM channel sequencing."
    ],
    proposed: [
        "Proposed Positioning: 'The simplest way for Indian investors to own a piece of the US market, in INR, in seconds, with professional-grade tools for those who want to go further.'",
        "Pillar 1 (Lead-Narrative Rewrite): Rewrite the hero fold around 'invest in US stocks, in INR, via UPI'; push 'onchain,' 'Hyperliquid,' and leverage two clicks deep (shipping Week 1 at near-zero cost).",
        "Pillar 2 (Universal Complexity Gate): Deploy a single universal default screen with cash-equity simplicity, placing leverage and perpetuals behind one opt-in 'Pro' toggle with risk acknowledgement (preferred by 60% of both Web2 and Web3 users).",
        "Pillar 3 (Calibrated Trust Architecture): Publish a direct 'Is this legal / is my money safe' FAQ; state transparently that Mochatrade is not yet SEBI regulated and explain its FIU-IND standing, since 74% state that upfront compliance-in-progress disclosure raises trust.",
        "Pillars 4 & 5 (Two-Layer Channels & Web2 Retention): Deploy YouTube/Instagram creators for discovery reach (ranked #1 channel) and press/traditional media credibility for conversion trust; introduce INR cashback, referral bonuses, and portfolio content instead of DeFi token rewards."
    ],
    findings: [
        "The revised copy drives statistically significant improvements across all metrics: signup intent jumped +1.08 points on a 5-point scale (2.77 to 3.85, p < 0.0001), perceived risk dropped -1.27 points (3.60 to 2.33, p < 0.0001), product understanding rose from 2.81 to 4.13, and platform trust rose from 2.60 to 3.65.",
        "The lift holds across both segments: Web2 signup intent rose from 2.41 to 3.56 (+1.15, p < 0.0001), while Web3 signup intent also rose from 3.24 to 4.11 (+0.87, p = 0.0022), proving simpler copy incurs zero audience trade-off.",
        "Leading with 50x leverage damages interest: 71% of Web2 investors reported being less interested when 50x leverage is the hero feature (vs 10% more interested); even among Web3 investors, more were turned off (33% less interested) than enticed (25% more interested; 42% no difference).",
        "Security and regulation is the #1 driver of app choice (average rank 2.36), followed by ease of use (2.47) and low fees (3.06). Meanwhile, 'SEBI regulated' is the most trusted phrase by far (1.30 average rank across both segments), while 'FIU-IND registered' (2.38) and 'compliance underway' (2.32) tie for second.",
        "Discovery and trust run through different channels: Instagram and YouTube creators rank #1 for discovery (1.55 average rank), but traditional media is rated more trustworthy than creators (3.54 vs 3.15 in Web2; 3.40 vs 3.27 in Web3), necessitating a two-layer acquisition strategy."
    ],
    keyNumbers: [
        {
            value: "+1.08 pts",
            label: "signup intent lift for revised copy"
        },
        {
            value: "71% vs 10%",
            label: "turned off vs enticed by 50x"
        },
        {
            value: "74%",
            label: "compliance trust lift"
        },
        {
            value: "-1.27 pts",
            label: "perceived financial risk drop"
        }
    ],
    charts: [
        {
            title: "Concept test: original vs revised homepage copy (between-subjects)",
            description: "Testing live crypto/leverage copy against revised simple INR/UPI copy across all four evaluated dimensions (all p < 0.0001).",
            unit: "Score / 5",
            variant: "bars",
            callout: {
                value: "+1.08 pts",
                label: "signup intent jump (2.77 to 3.85 out of 5, p < 0.0001)"
            },
            bars: [
                {
                    label: "Product Understanding: Original vs Revised",
                    value: 4.13,
                    display: "2.81 -> 4.13 (+1.32)",
                    note: "Clear grasp of INR to US equity access"
                },
                {
                    label: "Platform Trust: Original vs Revised",
                    value: 3.65,
                    display: "2.60 -> 3.65 (+1.05)",
                    note: "Removes crypto casino perception"
                },
                {
                    label: "Signup Intent: Original vs Revised",
                    value: 3.85,
                    display: "2.77 -> 3.85 (+1.08)",
                    note: "Web2: 2.41 -> 3.56 · Web3: 3.24 -> 4.11"
                },
                {
                    label: "Perceived Risk: Original vs Revised (lower = better)",
                    value: 2.33,
                    display: "3.60 -> 2.33 (-1.27)",
                    note: "Significant reduction in perceived hazard"
                }
            ]
        },
        {
            title: "Effect of '50x Leverage' headline on investor interest by segment",
            description: "Leading with 50x leverage alienates 71% of Web2 investors and is net-negative even among Web3 crypto traders.",
            unit: "% of cohort",
            variant: "bars",
            callout: {
                value: "71% less",
                label: "Web2 investors turned off by 50x leverage headline (only 10% more interested)"
            },
            bars: [
                {
                    label: "Web2 Investors: Less interested in platform",
                    value: 71,
                    display: "71% less interested",
                    note: "19% no difference · 10% more interested"
                },
                {
                    label: "Web3 Investors: Less interested in platform",
                    value: 33,
                    display: "33% less interested",
                    note: "42% no difference · 25% more interested"
                },
                {
                    label: "Prefers toggle-gated Pro design (Web2 & Web3)",
                    value: 60,
                    display: "60% in both segments",
                    note: "Supports single universal default screen"
                },
                {
                    label: "Trust raised by upfront compliance disclosure",
                    value: 74,
                    display: "74% trust lift",
                    note: "Vs 15% who say it lowers trust"
                }
            ]
        },
        {
            title: "What drives app choice & compliance phrase trust ranking",
            description: "Security and regulation dominates app choice, while 'SEBI regulated' is the runaway trusted phrase (lower rank = higher priority/trust).",
            unit: "Average rank",
            variant: "ladder",
            callout: {
                value: "1.30 rank",
                label: "'SEBI regulated' trust rank vs 2.38 for 'FIU-IND registered'"
            },
            bars: [
                {
                    label: "App Choice Driver #1: Security & regulation",
                    value: 2.36,
                    display: "Rank 2.36",
                    note: "Primary selection criteria for retail investors"
                },
                {
                    label: "App Choice Driver #2: Ease of use",
                    value: 2.47,
                    display: "Rank 2.47",
                    note: "Simple, broker-app familiar onboarding"
                },
                {
                    label: "App Choice Driver #3: Low brokerage fees",
                    value: 3.06,
                    display: "Rank 3.06",
                    note: "Ranks behind security and simplicity"
                },
                {
                    label: "Compliance Phrase: 'SEBI regulated' trust",
                    value: 1.3,
                    display: "Rank 1.30 (Top)",
                    note: "Web2: 1.29 · Web3: 1.31 · Runaway winner"
                },
                {
                    label: "Compliance Phrase: 'Compliance underway' trust",
                    value: 2.32,
                    display: "Rank 2.32",
                    note: "Honest interim positioning"
                },
                {
                    label: "Compliance Phrase: 'FIU-IND registered' trust",
                    value: 2.38,
                    display: "Rank 2.38",
                    note: "Crypto AML tag; statistically indistinguishable"
                }
            ]
        },
        {
            title: "Signup intent lift across investor cohorts: Control vs Revised copy",
            description: "Statistically significant signup intent gains measured across all 5 investor archetypes, showing simpler INR messaging unlocks both mainstream and crypto-native users.",
            unit: "Score / 5",
            variant: "bars",
            callout: {
                value: "+1.08 pts",
                label: "statistically significant overall cohort signup intent lift (p < 0.0001)"
            },
            bars: [
                {
                    label: "High-Net-Worth Active Traders",
                    value: 4.25,
                    display: "2.80 -> 4.25 (+1.45)",
                    note: "Largest intent jump on transparent execution and fee safety"
                },
                {
                    label: "Mainstream Equity Stock Investors",
                    value: 3.56,
                    display: "2.41 -> 3.56 (+1.15)",
                    note: "Web2 investors responding to direct INR & UPI funding"
                },
                {
                    label: "College Students & Gen-Z Explorers",
                    value: 3.8,
                    display: "2.65 -> 3.80 (+1.15)",
                    note: "Driven by zero minimum lot size and fractional access"
                },
                {
                    label: "Conservative Mutual Fund Savers",
                    value: 3.35,
                    display: "2.10 -> 3.35 (+1.25)",
                    note: "Overcomes crypto hazard perception via compliance FAQ"
                },
                {
                    label: "Crypto-Native & Web3 Traders",
                    value: 4.11,
                    display: "3.24 -> 4.11 (+0.87)",
                    note: "Pro-toggle preserves advanced perpetual liquidity"
                },
                {
                    label: "Weighted Aggregate Cohort Benchmark",
                    value: 3.85,
                    display: "2.77 -> 3.85 (+1.08)",
                    note: "Baseline control to revised concept (p < 0.0001)"
                }
            ]
        }
    ]
};

export default entry;
