import type { Project } from "../projects";

const entry: Project = {
    slug: "arthdex",
    brandKey: "arthdex",
    title: "Arthdex",
    tag: "Finance & Analytics",
    year: "2026",
    question: "How can an integrated quantitative research platform bridge listed factor screening, 4-model volatility ensembles, and unlisted governance discounts across 2,800+ Indian securities?",
    cardNumber: {
        value: "6 Engines",
        label: "quantitative research & valuation suites"
    },
    chips: [
        "Quantitative finance",
        "Platform architecture"
    ],
    filters: [
        "Finance",
        "Product and data"
    ],
    keyNumbers: [
        {
            value: "2,592 + 270",
            label: "listed and unlisted securities covered"
        },
        {
            value: "4-Model",
            label: "volatility ensemble (GARCH, HAR-RV, EWMA, Parkinson)"
        },
        {
            value: "95%",
            label: "conformal prediction interval coverage"
        },
        {
            value: "49 Routes",
            label: "pre-rendered SSG financial terminal pages"
        }
    ],
    context: "Developed with our team as a comprehensive institutional-grade quantitative financial research and advisory platform for Indian capital markets. Rather than treating listed and unlisted markets in isolation, Arthdex bridges the gap: unifying high-frequency market watch data across 14 indices, listed company financial statements with composite z-score peer rankings, multi-horizon return forecasts bounded by 95% conformal intervals, a 4-model volatility ensemble, an unlisted space intelligence hub tracking private governance red flags and secondary discounts, and a primary market IPO pipeline tracking grey market premiums (GMP). Built with Next.js 15, TypeScript, and pure SVG/CSS charts across 49 static routes without external chart dependencies.",
    approach: [
        "Engineered Phase 1 & 2 market watch and company terminal: integrated real-time marquee tickers across 14 indices (including MSEI SX40), 5 macro indicators, factor screeners (High Beta, Low Vol, Alpha), universal ⌘K search, 8-horizon price charts, 8 quarters of derived financials, and peer relative valuation matrices with composite z-scores.",
        "Formulated Phase 3 quantitative & risk engine: paired multi-horizon return forecasts (1D, 5D, 21D) with 95% conformal prediction intervals, built a 4-model volatility ensemble (GARCH, HAR-RV, EWMA, Parkinson) reconciling to consensus weights, calibrated Merton distance to default with solvency barriers, and evaluated 4 VaR models (Parametric, Historical, Monte Carlo, Expected Shortfall) alongside Kyle's λ, VPIN microstructure gauges, and additive Shapley attribution.",
        "Constructed Phase 4 unlisted space valuation & governance hub: established non-linear governance severity tracking (Red Flag ≥6, Watchlist ≥2, Clean), 3Y CAGR, OCF/FCF reconciliations, order-book-to-revenue multiples, and systematic valuation discounts against listed peer medians.",
        "Deployed Phase 5 & 6 IPO intelligence and macro sensitivity: tracked Mainboard & SME pipeline stages, live grey market premiums (GMP) with trend signaling ('Firming' vs 'Cooling'), subscription category multiples, multi-benchmark regressions (β, α, R²) across 6 indices, and client-side threshold alert engines."
    ],
    findings: [
        "The 4-model econometric volatility ensemble eliminated single-model estimation distortions, providing a reconciled consensus anchor (35.7% vs 58.4% raw spike) across volatile asset regimes.",
        "Multi-horizon return forecasts backed by 95% conformal intervals achieved mathematically guaranteed finite-sample coverage across 1-day, 5-day, and 21-day holding periods, preventing overconfident directional bets.",
        "The unlisted intelligence hub revealed that secondary private market transactions trade at a median -24.9% EV/EBITDA discount against listed peers, driven by liquidity haircuts and governance severity differentials.",
        "The full-stack terminal pre-renders 49 static routes via Next.js 15 SSG with deterministic data consistency: zero external heavy charting libraries, sub-millisecond client theme swaps, and strict type safety."
    ],
    charts: [
        {
            title: "Multi-horizon return forecasts & 95% conformal prediction intervals",
            description: "Expected return trajectories across 1D, 5D, and 21D horizons, bounded by finite-sample 95% conformal prediction intervals to eliminate directional overconfidence.",
            unit: "% return",
            variant: "cliff",
            callout: {
                value: "95% Coverage",
                label: "finite-sample conformal coverage guarantee"
            },
            bars: [
                {
                    label: "1-Day Forecast Point",
                    value: 0.42,
                    display: "+0.42%",
                    note: "Conformal 95% bounds: [-1.18%, +2.02%]"
                },
                {
                    label: "5-Day Forecast Point",
                    value: 1.85,
                    display: "+1.85%",
                    note: "Conformal 95% bounds: [-2.40%, +6.10%]"
                },
                {
                    label: "21-Day Forecast Point",
                    value: 5.34,
                    display: "+5.34%",
                    note: "Conformal 95% bounds: [-3.85%, +14.53%]"
                },
                {
                    label: "Ensemble Consensus Mean",
                    value: 3.62,
                    display: "+3.62%",
                    note: "Additive Shapley factor-weighted trajectory"
                }
            ]
        },
        {
            title: "4-Model volatility forecasting ensemble & consensus calibration",
            description: "Annualized asset volatility forecasts across four econometric specifications, weighted to establish an equilibrium consensus baseline free from single-model bias.",
            unit: "% Vol",
            variant: "ladder",
            callout: {
                value: "35.7% Consensus",
                label: "weighted ensemble volatility anchor"
            },
            bars: [
                {
                    label: "Raw Historical Spike",
                    value: 58.4,
                    display: "58.4%",
                    note: "Unfiltered sample variance distorted by liquidity gaps"
                },
                {
                    label: "EWMA Model (RiskMetrics λ=0.94)",
                    value: 41.2,
                    display: "41.2%",
                    note: "25% weight: reacts rapidly to volatility clustering"
                },
                {
                    label: "Parkinson High-Low Extreme-Value",
                    value: 36.8,
                    display: "36.8%",
                    note: "20% weight: utilizes intraday price extremes"
                },
                {
                    label: "GARCH(1,1) Conditional Volatility",
                    value: 34.5,
                    display: "34.5%",
                    note: "35% weight: mean-reverting structural persistence"
                },
                {
                    label: "HAR-RV Realized High-Frequency",
                    value: 31.2,
                    display: "31.2%",
                    note: "20% weight: high-frequency heterogeneous autoregression"
                },
                {
                    label: "Reconciled Ensemble Consensus",
                    value: 35.7,
                    display: "35.7%",
                    note: "100% normalized weight: stable pricing anchor"
                }
            ]
        },
        {
            title: "Unlisted space valuation discount vs listed peer median",
            description: "Systematic EV/EBITDA discount breakdown applied by the unlisted valuation hub to private secondary deals relative to liquid listed comparables.",
            unit: "x Multiple",
            variant: "waterfall",
            callout: {
                value: "-24.9% Discount",
                label: "unlisted private multiple haircut vs listed median"
            },
            bars: [
                {
                    label: "Listed Peer Median EV/EBITDA",
                    value: 39.7,
                    display: "39.7x",
                    note: "Liquid Defence & Aerospace peer median (BEL, BDL, HAL)"
                },
                {
                    label: "Governance & Disclosure Haircut",
                    value: -4.8,
                    display: "-4.8x",
                    note: "Non-linear penalty for secondary reporting opacity"
                },
                {
                    label: "Discount for Lack of Marketability (DLOM)",
                    value: -5.1,
                    display: "-5.1x",
                    note: "Illiquidity haircut, transfer restrictions, lock-in"
                },
                {
                    label: "Unlisted Implied Transaction Multiple",
                    value: 29.8,
                    display: "29.8x",
                    note: "Arthdex unlisted secondary valuation anchor"
                }
            ]
        },
        {
            title: "Tail-risk suite: 1-Day 99% VaR models vs Merton solvency barrier",
            description: "Comparative tail-loss distributions evaluated under identical 99% 1-day criteria, anchored against Merton structural distance to default.",
            unit: "% Loss",
            variant: "ladder",
            callout: {
                value: "7.85% CVaR / ES",
                label: "expected shortfall in worst 1% tail"
            },
            bars: [
                {
                    label: "Parametric Gaussian VaR (99%)",
                    value: 4.82,
                    display: "4.82%",
                    note: "Closed-form standard normal assumption"
                },
                {
                    label: "Monte Carlo VaR (10k paths)",
                    value: 5.64,
                    display: "5.64%",
                    note: "Stochastic jump-diffusion simulation"
                },
                {
                    label: "Historical Simulation VaR (3Y daily)",
                    value: 6.18,
                    display: "6.18%",
                    note: "Empirical non-parametric historical return distribution"
                },
                {
                    label: "Expected Shortfall (ES / CVaR 99%)",
                    value: 7.85,
                    display: "7.85%",
                    note: "Mean tail loss beyond VaR threshold (coherent risk)"
                },
                {
                    label: "Merton Distance to Default",
                    value: 4.2,
                    display: "4.20σ",
                    note: "Structural solvency barrier distance (default prob <0.01%)"
                }
            ]
        }
    ],
    credit: "Arthdex Quantitative Financial Advisory & Research Platform (Indian Listed & Unlisted Markets)."
};

export default entry;
