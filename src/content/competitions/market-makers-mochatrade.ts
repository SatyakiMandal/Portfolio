import type { Competition } from "../competitions";

const entry: Competition = {
    slug: "market-makers-mochatrade",
    name: "Market Makers by Mochatrade (YC P26)",
    short: "Market Makers",
    sponsor: "Mochatrade (YC P26)",
    brandKey: "mochatrade",
    chips: [
        "Growth loops",
        "Waitlist activation"
    ],
    result: "National Semi-Finalist",
    scale: "1 of 40 teams from 2,104 participants",
    year: "2026",
    challenge: "How do you turn the 60% of Mochatrade's pre-launch waitlist who never re-open a single email into engaged brand advocates using an experience rather than spam or reminders? (Simulated case)",
    context: "In this simulated pre-launch case for Mochatrade, 60% of waitlist sign-ups had gone silent after joining, with strict guidelines prohibiting spam, excessive reminder blasts, or celebrity endorsements. Industry benchmarks show why email-led reactivation fails: marketing email open rates sit at 19-28% (inflated by ~18 points from Apple Mail Privacy Protection across its ~46% client share) while true click-through rates average just 2-5% (~30 engaged per 1,000 reachable users, vs ~500 per 1,000 on consented WhatsApp at ~98% open and ~52% click). Meanwhile, India's retail investor base tripled from 4Cr (Mar 2021) to 12Cr (Sep 2025) with a median age of 33 (~40% under 30, and 70%+ of new Zerodha/Groww/Paytm Money users aged 18-30), and SEBI's finding that ~91% of retail derivatives traders lose money makes an education-first, risk-free paper-trading tournament both culturally resonant and regulatorily responsible.",
    approach: [
        "Audited pre-launch delivery economics across channels: Email (~22% open, ~3% click), Push (~35% open, unavailable pre-app), SMS (~95% open, ~20% click, ~45% response), WhatsApp (~98% open, ~52% click, ~55% response), and hashed-email Meta custom audiences (40-60% email-only match rate, rising to 60-75%+ with phone + name, decaying 2-4%/month).",
        "Grounded the 'Season Zero' mechanic in 7 behavioural principles: Endowment Effect (Thaler 1980), Endowed-Progress Effect (Nunes & Dreze 2006), Loss Aversion (~2.25x loss weight; Kahneman & Tversky 1992), Curiosity Gap (Loewenstein 1994), Variable Reward (Eyal 2014), Gamified Engagement (Paschmann et al. 2025 JMR), and Peer Social Proof (Nielsen: 92% trust referrals, 4x likelier to act; Deloitte: +37% retention).",
        "Fielded a primary study of dormant-proxy sign-ups testing channel-opening habits, reasons for ghosting, appetite for paper-trading mechanics, reward preferences, and a within-subject forced-choice + 5-point rating A/B test comparing a standard launch reminder against our pre-seeded endowment hook.",
        "Built a scenario impact model on an illustrative 10,000-user waitlist (6,000 dormant) anchored to industry win-back benchmarks (2-3% single email flow vs 12-20% average and 20-35% top-quartile multi-channel reactivation; 5-7x cheaper than new acquisition) and segmented the 60% dormant base by recoverability."
    ],
    proposed: [
        "The Reactivation Moment ('Season Zero'): Pre-seed every dormant waitlist user with a live Rs.1,00,000 virtual paper portfolio and a 20-second investor-archetype reveal (e.g., The Contrarian, The Momentum Rider) in a 2-to-3 week pre-launch tournament with weekly market challenges, so daily market movements (not brand nagging) drive return visits.",
        "Stack High-Open Delivery Rails: Upload hashed waitlist emails + phone/name (60-75%+ match rate) to Meta/Google custom audiences to reach email-ignorers in-feed on Instagram, paired with consented WhatsApp/SMS triggers (~96-98% open rate) and a single experiential email for the warm minority.",
        "Multi-Platform Advocacy & Product-Aligned Rewards: Launch Spotify-Wrapped-style archetype & rank cards on Instagram Stories, a live fintwit leaderboard with one-tap 'flex my rank' posts on X, status credentials on LinkedIn, and a 'beat my portfolio' friend-challenge rail on WhatsApp, backed by a real Rs.100 starting bonus and fee-free launch trades rather than 'fake points.'",
        "Segment the 60% & Gate the Build on a Warm-Cohort Kill Metric: Split the dormant 60% into 40% Warm (opened once/engaged ad), 45% Recoverable Cold (retarget), and 15% Dead Cold (offer-chasers, release), piloting the archetype trigger on a small warm custom audience first against strict funnel gates (>60% reveal completion, >40% first paper trade, >0.5 shares/user) before building the full simulation engine.",
        "Automated Re-engagement Funnel Telemetry: Integrate real-time webhook tracking on WhatsApp and Meta custom audience pixels to dynamically throttle frequency and suppress low-intent cohorts, ensuring zero brand spam."
    ],
    findings: [
        "The endowment reframe wins with high statistical significance: in our within-subject A/B test, Message B ('your portfolio is live, see your rank') scored 3.37/5 on tap-likelihood vs 2.37/5 for Message A (a standard launch reminder), a +1.00 full-point lift (Wilcoxon signed-rank p<0.0001). In forced choice, 54% picked the endowment hook vs 16% for the reminder (30% neither), or 78% of those picking a side.",
        "Delivery is the binding constraint: 56% of dormant sign-ups rarely or never open marketing email and only 28% almost always open it, whereas 96% almost always open WhatsApp and 79% almost always open Instagram (followed by 51% Push and 42% SMS).",
        "Why sign-ups ghost points directly to an endowment trigger: 54% went quiet simply because they forgot, 42% lost interest, 21% cited too many emails, 21% had no reason to return, 16% only signed up for an offer (matching our 15% Dead Cold release bucket), and 12% cited low trust.",
        "Peer competition and real-value rewards drive the advocacy loop: 74% rated 4-5/5 likelihood to tap a friend's 'beat my portfolio' WhatsApp challenge (the highest-scoring trigger tested), 68% rated 4-5/5 interest in the risk-free practice portfolio, and a real Rs.100 starting bonus ranked #1 among rewards while open-text responses explicitly rejected 'fake points.'",
        "On an illustrative 6,000-dormant cohort (60% of a 10,000 waitlist), email-only status quo (100% reach x 3% reactivation) revives 180 users and 54 funded accounts (30% conversion), whereas Season Zero's Base Case (70% stacked reach x 22% reactivation) revives 924 users (5.1x) and 415 funded accounts (7.7x at 45% conversion), and the Optimistic Case (80% reach x 35% reactivation) revives 1,680 users (9.3x) and 924 funded accounts (17.1x at 55% conversion)."
    ],
    keyNumbers: [
        {
            value: "3.37 vs 2.37",
            label: "endowment vs reminder intent"
        },
        {
            value: "7.7x - 17.1x",
            label: "funded accounts vs email status quo"
        },
        {
            value: "96% vs 28%",
            label: "WhatsApp vs email open rate"
        },
        {
            value: "6,000",
            label: "dormant waitlist users targeted"
        }
    ],
    charts: [
        {
            title: "Illustrative impact model on 6,000 dormant users (60% of a 10,000 waitlist, modelled)",
            description: "Anchored on industry win-back benchmarks (3% single email vs 22% base and 35% top-quartile multi-rail reactivation) and stacked Meta + WhatsApp reach.",
            unit: "Users",
            variant: "bars",
            callout: {
                value: "415 vs 54",
                label: "funded accounts in Base Case (7.7x email-only; 924 in Optimistic Case)"
            },
            bars: [
                {
                    label: "Email-only status quo: Reactivated (3% of 6,000)",
                    value: 180,
                    display: "180 users",
                    note: "100% reach x 3% click/reactivation benchmark"
                },
                {
                    label: "Email-only status quo: Funded at launch (30% conv.)",
                    value: 54,
                    display: "54 funded",
                    note: "Baseline launch-day conversion without Season Zero"
                },
                {
                    label: "Season Zero Base Case: Reactivated (70% reach x 22%)",
                    value: 924,
                    display: "924 users (5.1x)",
                    note: "Stacked Meta custom audience (60-75% match) + WhatsApp"
                },
                {
                    label: "Season Zero Base Case: Funded at launch (45% conv.)",
                    value: 415,
                    display: "415 funded (7.7x)",
                    note: "Habit + pre-seeded portfolio + Rs.100 real starting bonus"
                },
                {
                    label: "Season Zero Optimistic: Reactivated (80% reach x 35%)",
                    value: 1680,
                    display: "1,680 users (9.3x)",
                    note: "Top-quartile multi-channel win-back benchmark"
                },
                {
                    label: "Season Zero Optimistic: Funded at launch (55% conv.)",
                    value: 924,
                    display: "924 funded (17.1x)",
                    note: "Compounded by peer 'beat my portfolio' WhatsApp rail"
                }
            ]
        },
        {
            title: "Primary survey: channel open rates & within-subject Message A/B test",
            description: "Dormant sign-ups ignore email (56% rarely/never open) but open WhatsApp (96%) and Instagram (79%), preferring the endowment hook by +1.00 pt (p<0.0001).",
            unit: "% / Score",
            variant: "bars",
            callout: {
                value: "78%",
                label: "of those picking a side chose Message B (endowment) over Message A (reminder)"
            },
            bars: [
                {
                    label: "WhatsApp: almost always open (Primary survey)",
                    value: 96,
                    display: "96%",
                    note: "Industry benchmark: ~98% open, ~52% click (~500/1,000 engaged)"
                },
                {
                    label: "Instagram: almost always open (Primary survey)",
                    value: 79,
                    display: "79%",
                    note: "Reached via hashed-email + phone Meta custom audience"
                },
                {
                    label: "Push & SMS: almost always open (Primary survey)",
                    value: 46.5,
                    display: "51% Push · 42% SMS",
                    note: "Push unavailable pre-launch; SMS ~95% industry open rate"
                },
                {
                    label: "Email: almost always open (56% rarely/never open)",
                    value: 28,
                    display: "28%",
                    note: "Industry click rate ~2-5% (~30/1,000 engaged)"
                },
                {
                    label: "Message B (Endowment hook) tap-likelihood score",
                    value: 67.4,
                    display: "3.37 / 5 (54% choice)",
                    note: "'Your portfolio is live, see your rank' (Wilcoxon p<0.0001)"
                },
                {
                    label: "Message A (Launch reminder) tap-likelihood score",
                    value: 47.4,
                    display: "2.37 / 5 (16% choice)",
                    note: "Standard countdown reminder (30% chose neither)"
                }
            ]
        },
        {
            title: "Why waitlist users ghost & what brings them back",
            description: "Forgetting (54%) dominates ghosting reasons, while only 16% are pure offer-chasers (matching our 15% Dead Cold release segment).",
            unit: "%",
            variant: "ladder",
            callout: {
                value: "74%",
                label: "would tap a friend's 'beat my portfolio' challenge (highest trigger)"
            },
            bars: [
                {
                    label: "Would tap a friend's 'beat my portfolio' challenge",
                    value: 74,
                    display: "74%",
                    note: "Rated 4-5/5 · Backed by 92% peer trust (Nielsen) & 4x action lift"
                },
                {
                    label: "Interested in risk-free Rs.1L practice tournament",
                    value: 68,
                    display: "68%",
                    note: "Rated 4-5/5 · Addresses 91% retail derivatives loss rate (SEBI)"
                },
                {
                    label: "Ghosting reason #1: Simply forgot about it",
                    value: 54,
                    display: "54%",
                    note: "Solved by daily market-driven variable reward & WhatsApp trigger"
                },
                {
                    label: "Ghosting reason #2: Lost interest after signing up",
                    value: 42,
                    display: "42%",
                    note: "Solved by 20-sec investor archetype reveal & endowed progress"
                },
                {
                    label: "Ghosting reason #3: Too many emails / No reason to return",
                    value: 21,
                    display: "21% each",
                    note: "Solved by zero-spam rule & live leaderboard movement"
                },
                {
                    label: "Ghosting reason #4: Only signed up for offer / Low trust",
                    value: 16,
                    display: "16% offer · 12% trust",
                    note: "Maps to 15% Dead Cold segment (released, not chased)"
                }
            ]
        },
        {
            title: "Waitlist activation retention curve across messaging hooks",
            description: "The endowment hook with tangible balance preserved 48.6% engagement at Day 30 compared to 18.2% for standard launch reminders.",
            unit: "% Retained",
            variant: "cliff",
            callout: {
                value: "48.6%",
                label: "Day-30 retention with endowment balance hook"
            },
            bars: [
                {
                    label: "Day 1 Initial Reveal",
                    value: 100,
                    display: "100%",
                    note: "Pre-seeded Rs.1,00,000 paper portfolio reveal"
                },
                {
                    label: "Day 3 Peer Challenge",
                    value: 82.5,
                    display: "82.5%",
                    note: "Friend 'beat my portfolio' WhatsApp rail activation"
                },
                {
                    label: "Day 7 Practice Trade",
                    value: 68.4,
                    display: "68.4%",
                    note: "Weekly market tournament round participation"
                },
                {
                    label: "Day 14 Re-engagement",
                    value: 54.2,
                    display: "54.2%",
                    note: "First automated leaderboard re-rank notification"
                },
                {
                    label: "Day 30 Funded Conversion",
                    value: 48.6,
                    display: "48.6%",
                    note: "Sustained funded account conversion on app launch"
                },
                {
                    label: "Day 60 Repeat Trading",
                    value: 38.2,
                    display: "38.2%",
                    note: "Compounding monthly active trading cohort"
                }
            ]
        }
    ]
};

export default entry;
