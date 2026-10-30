import type { Competition } from "../competitions";

const entry: Competition = {
    slug: "tvs-credit-epic-8",
    name: "TVS Credit E.P.I.C 8.0, Finance Track",
    short: "TVS Credit E.P.I.C 8.0",
    sponsor: "TVS Credit",
    brandKey: "tvs",
    chips: [
        "NBFC unit economics",
        "Cohort modelling"
    ],
    result: "National Semi-Finalist",
    scale: "1 of 319 teams from 36,900 participants",
    year: "2026",
    challenge: "How should a digital checkout-finance NBFC scale AUM 30x from Rs.100Cr to Rs.3,000Cr by March 2029 across ticket size, tenor, yield, opex and credit cost?",
    context: "The case brief asks how XYZ NBFC (opening AUM Rs.100Cr, FY27 disbursal Rs.400Cr, average ticket size Rs.20,000, 9-month tenor, 25% yield, 8% cost of funds, 10% opex, 6% credit cost, 1% ROTA) can reach Rs.3,000Cr AUM by March 2029 while holding opex at 5-7%, credit cost at 3-4%, and ROTA above 4%. We built an independent monthly cohort reducing-balance amortisation engine, a bottom-up unit-cost model calibrated to FY27 disclosures, a merchant-subvention yield decay curve (net of 18% GST), and a 20,000-trial Monte Carlo simulation benchmarked against 7 Indian consumer lenders.",
    approach: [
        "Solved monthly cohort reducing-balance amortisation schedules across 6-to-24 month tenors, comparing an exponential ramp against a steady-state logistic plateau ramp.",
        "Calibrated a bottom-up operating-cost engine from FY27 inputs: Rs.408 per loan originated, Rs.20 per active loan-month servicing, and Rs.45Cr FY29 Middle Layer fixed platform cost.",
        "Decomposed the 10% loan cancellation/foreclosure shock by cohort timing into 6% origination-stage e-commerce return-to-origin (RTO) and 1-day cooling-off exits vs 4% mid-life foreclosures.",
        "Built the pre-tax to post-tax ROTA bridge on own-book assets, ran 20,000 Monte Carlo draws across 6 drivers, and structured a 30% co-lending capital plan under RBI's 2025 Directions."
    ],
    proposed: [
        "Shift average ticket size from Rs.20,000 to Rs.40,000 by weighting checkout originations toward smartphones and large appliances, cutting FY29 daily originations 59% (7,888/day to 3,212/day) and bringing opex to 5.62% of average AUM.",
        "Extend average tenor from 9 to 12 months on a logistic plateau path (cumulative 3-year disbursal Rs.5,817Cr: FY28 Rs.728Cr, FY29 Rs.4,689Cr), exiting March 2029 at a sustainable Rs.509Cr/month steady state.",
        "Accept a 23.15% portfolio yield (as 12-month tenor dilutes upfront brand subvention net of 18% GST) and re-set the Board's return target to 1.5-2.5% post-tax ROTA (with 4% deferred to FY32 conditional on a AA rating).",
        "Fund 30% of originations through co-lending (retaining 20% under RBI's 2025 Co-Lending Directions) to save Rs.135Cr of regulatory equity, and budget Rs.388Cr (+6.67%) of replacement disbursal for the 6% origination + 4% mid-life cancellation split.",
        "Automated Early-Warning Credit Risk Telemetry: Deploy 30-day first payment default (FPD) triggers and merchant-level return monitoring to dynamically modulate subvention rates, isolating the loan book from unhedged adverse selection."
    ],
    findings: [
        "Ticket size is the true operating-cost lever: at Rs.25,000 and 12m, FY29 opex lands at 7.42% (outside the Board's 5-7% ceiling). Moving ATS to Rs.40,000 at 12m cuts daily originations 59% from 7,888 to 3,212 loans/day and brings FY29 opex to 5.62% of average AUM while staying below the RBI's Rs.50,000 risk threshold.",
        "Ramp geometry matters as much as tenor: an exponential ramp hits Rs.3,000Cr as a momentary spike originating Rs.667Cr/month (Rs.8,007Cr annualised) with a 2.79-month book age, whereas a logistic plateau path exits at Rs.509Cr/month flat with a 3.26-month book age.",
        "When a loan leaves matters as much as whether it leaves: 10% cancelling at origination causes a Rs.300Cr AUM shortfall (needing Rs.555Cr / +9.53% top-up disbursal), whereas 10% foreclosing mid-life costs Rs.90.8Cr (Rs.168Cr top-up). Our 6% origination RTO + 4% mid-life split produces a Rs.216.3Cr shortfall requiring Rs.388Cr (+6.67%) replacement disbursal.",
        "On the case's internal pre-tax spread at 8% cost of funds, the plan clears 5.13%. Adjusting for market A-band cost of funds of 10.0% (-2.00 pts), own-book co-lending accounting (-1.38 pts), and 25% corporate tax (-0.44 pts) yields 1.31% post-tax ROTA (Rs.22.9Cr FY29 PBT; 3.78% in Upside). Across 20,000 Monte Carlo trials, median ROTA is 1.30% and only 2.2% of trials clear 4%.",
        "Because the 125% consumer-credit risk weight still applies to NBFC own-book unsecured loans, a fully on-book Rs.3,000Cr portfolio requires Rs.562.5Cr of capital at 15% Middle Layer CRAR; 30% co-lending cuts on-book AUM to Rs.2,280Cr and minimum capital to Rs.427.5Cr, saving Rs.135Cr of equity."
    ],
    keyNumbers: [
        {
            value: "Rs.40k / 12m",
            label: "recommended ATS and tenor"
        },
        {
            value: "5.62%",
            label: "operating cost ratio"
        },
        {
            value: "Rs.5,817Cr",
            label: "cumulative plateau disbursal"
        },
        {
            value: "Rs.135Cr",
            label: "regulatory equity saved"
        }
    ],
    charts: [
        {
            title: "FY29 ROTA bridge: from case spread (5.13%) to reported post-tax ROTA (1.31%, modelled)",
            description: "Three structural adjustments separate the case's internal pre-tax spread at 8% CoF from RBI-basis post-tax return on own-book assets.",
            unit: "% ROTA",
            variant: "waterfall",
            callout: {
                value: "2.2%",
                label: "of 20,000 Monte Carlo trials clear 4% post-tax ROTA (median 1.30%)"
            },
            bars: [
                {
                    label: "Case-basis pre-tax spread (at 8% CoF)",
                    value: 5.13,
                    display: "5.13%",
                    note: "23.15% yield - 8% CoF - 5.62% opex - 4.40% credit cost"
                },
                {
                    label: "After market A-band CoF (10.0%, -2.00 pts)",
                    value: 3.13,
                    display: "3.13%",
                    note: "Unrated/A-band NBFC borrowing reality vs AAA"
                },
                {
                    label: "Pre-tax ROTA on own-book assets (-1.38 pts)",
                    value: 1.75,
                    display: "1.75%",
                    note: "30% co-lending mix net of Rs.12.4Cr fee income"
                },
                {
                    label: "Post-tax ROTA after 25% tax (-0.44 pts)",
                    value: 1.31,
                    display: "1.31%",
                    note: "Rs.22.9Cr Base PBT (Upside reaches 3.78% post-tax)"
                }
            ]
        },
        {
            title: "FY29 operating cost (% of average AUM) across ticket size and tenor (modelled)",
            description: "Calibrated on Rs.408 origination cost/loan, Rs.20/loan-month servicing, and Rs.45Cr Middle Layer fixed platform cost.",
            unit: "% of AUM",
            variant: "bars",
            callout: {
                value: "3,212/day",
                label: "FY29 daily originations at Rs.40k/12m vs 7,888/day at Rs.20k/9m (-59%)"
            },
            bars: [
                {
                    label: "Today baseline (Rs.20k ATS / 9m tenor)",
                    value: 9.4,
                    display: "9.40%",
                    note: "7,888 loans/day · well above 5-7% Board ceiling"
                },
                {
                    label: "Intermediate option (Rs.25k ATS / 12m tenor)",
                    value: 7.42,
                    display: "7.42%",
                    note: "5,139 loans/day · still breaches 7.0% ceiling"
                },
                {
                    label: "Recommended (Rs.40k ATS / 12m tenor)",
                    value: 5.62,
                    display: "5.62%",
                    note: "3,212 loans/day · comfortably inside 5-7% band"
                },
                {
                    label: "High-Ticket Anchor (Rs.60k ATS / 18m tenor)",
                    value: 4.38,
                    display: "4.38%",
                    note: "1,850 loans/day · Premium consumer durable financing"
                }
            ]
        },
        {
            title: "10% cancellation & foreclosure sensitivity: replacement disbursal required (modelled)",
            description: "Decomposing 10% leakage into 6% origination RTO/cooling-off and 4% mid-life foreclosure saves Rs.167Cr of replacement origination.",
            unit: "Rs. Cr",
            variant: "ladder",
            callout: {
                value: "Rs.209Cr",
                label: "AUM spread between origination-only and mid-life-only leakage"
            },
            bars: [
                {
                    label: "All 10% cancel at origination (Rs.2,700Cr AUM)",
                    value: 555,
                    display: "+Rs.555Cr (+9.53%)",
                    note: "Rs.300Cr AUM shortfall if 100% exit at day 1"
                },
                {
                    label: "Recommended: 6% origination + 4% mid-life (Rs.2,784Cr AUM)",
                    value: 388,
                    display: "+Rs.388Cr (+6.67%)",
                    note: "Rs.216.3Cr shortfall anchored on prepaid e-commerce RTO"
                },
                {
                    label: "All 10% foreclose at mid-life (Rs.2,909Cr AUM)",
                    value: 168,
                    display: "+Rs.168Cr (+2.90%)",
                    note: "Rs.90.8Cr shortfall as ~45% principal already collected"
                },
                {
                    label: "Severe macro stress test: 15% combined leakage",
                    value: 685,
                    display: "+Rs.685Cr (+11.78%)",
                    note: "Rs.380Cr shortfall under systemic retail stress"
                }
            ]
        },
        {
            title: "Indian consumer-lender operating cost benchmarking (realised vs modelled)",
            description: "Comparing realised operating cost ratios across comparable Indian retail books shows XYZ's 5.62% opex is achievable only through ticket-size expansion.",
            unit: "% opex",
            variant: "bars",
            callout: {
                value: "5.62%",
                label: "XYZ NBFC modelled base case opex at Rs.40k ticket size"
            },
            bars: [
                {
                    label: "Bajaj Finance (FY25 Consolidated)",
                    value: 4.0,
                    display: "4.00%",
                    note: "Diversified AAA-funded book with Rs.4.16L Cr AUM"
                },
                {
                    label: "HDB Financial Services (FY25)",
                    value: 4.7,
                    display: "4.70%",
                    note: "Three-quarters secured loan portfolio"
                },
                {
                    label: "XYZ NBFC FY29 Base Case (Modelled)",
                    value: 5.62,
                    display: "5.62%",
                    note: "Digital checkout finance with Rs.40k average ticket size"
                },
                {
                    label: "TVS Credit Services (FY25)",
                    value: 8.4,
                    display: "8.40%",
                    note: "Seasoned consumer durable and vehicle book"
                },
                {
                    label: "KreditBee (FY25)",
                    value: 9.6,
                    display: "9.60%",
                    note: "High-yield digital personal loan platform"
                },
                {
                    label: "Home Credit India (FY24)",
                    value: 14.84,
                    display: "14.84%",
                    note: "Point-of-sale small-ticket consumer durable lender"
                }
            ]
        }
    ]
};

export default entry;
