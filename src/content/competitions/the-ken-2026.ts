import type { Competition } from "../competitions";

const entry: Competition = {
  slug: "the-ken-2026",
  name: "The Ken's Case Competition 2026, The Great Rewiring",
  short: "The Ken 2026",
  sponsor: "The Ken",
  brandKey: "the-ken",
  chips: ["Autonomous Agents", "Indic Voice Commerce"],
  result: "National Semi-Finalist",
  scale: "top 7% of 6,000 teams across 300 colleges",
  year: "2026",
  challenge:
    "How can an autonomous agent bridge Indic voice, conditional financial authorization, and logistics rails to solve high-stakes exact-spec commerce without marketplace ad bias?",
  context:
    "The Ken's Great Rewiring Hackathon and Case Competition challenged teams nationwide to architect an autonomous commerce agent using India's core digital rails across voice (Gnani.ai), payments (Pine Labs), and logistics (Delhivery). In high-involvement e-commerce categories (gifts, specialized hardware, tailored apparel), shoppers face filter fatigue and keyword search friction, while incumbent marketplaces (Amazon, Flipkart) are structurally incentivized to promote sponsored ads and high-margin listings rather than finding the exact item the buyer needs. Building a truly autonomous agent requires solving three foundational friction points: non-linear Indic voice code-switching, bounded financial autonomy (preventing unauthorized charges while eliminating checkout friction), and cross-platform inventory discovery without single-marketplace conflicts of interest.",
  approach: [
    "Architected Sift, an autonomous conversational commerce agent operating at Level 3 (L3) autonomy: auto-executing purchases strictly within verifiable, user-confirmed specifications while dropping to L2 (propose-and-wait) for ambiguous or subjective attributes.",
    "Conducted 10 live end-to-end stress-test phone calls on Gnani.ai's production voice platform (Prisma v2.5 STT & Timbre v2.5 TTS) in noisy environments and rapid English-Hindi code-switching to uncover authentic failure modes rather than hypothetical happy paths.",
    "Audited Pine Labs and Delhivery API documentation: mapped existing endpoints (Orders API, Card OTP, Serviceability, Tracking) and identified critical missing capabilities (confidence-weighted conditional pre-authorization, natural-language complaint-to-NDR return mapping).",
    "Designed a 3-stage unhappy flow mitigation architecture solving the 3 real call failures: over-specification state collapse, confirmation objection steamrolling, and attribute crowding in gift-buying scenarios.",
    "Proposed ONDC (Open Network for Digital Commerce) as a mandatory Fourth Rail to provide federated cross-platform catalog search and real-time inventory discovery, insulating the agent from marketplace ad-revenue cannibalization.",
  ],
  proposed: [
    "Architecture & Autonomy (Agent Sift at L3): Define accountability strictly as delivering the exact physical item matching the caller's verified spec, not merely placing an order; restrict autonomous purchase to exact verifiable matches with pre-authorized spending caps (L3), while routing ambiguous choices to SMS/WhatsApp payment links (L2).",
    "Voice Rail (Gnani.ai with State-Locking): Deploy scenario-based dialogue state machines with bilingual English-Hindi classification; enforce a mandatory intermediate state lock ('I think I have what I need') to separate spec gathering from confirmation, preventing over-specification call drops.",
    "Financial Rail (Pine Labs Conditional Pre-Auth): Execute tokenized Card Payments with OTP for low-confidence matches; build custom middleware on Pine Labs Orders API for conditional auto-capture once Delhivery dimensional and spec verification confirms an exact match.",
    "Logistics Rail (Delhivery Reverse-Friction Loop): Integrate Delhivery Serviceability, Order Creation, and EDD APIs; build an NLP complaint mapper converting spoken customer returns ('this is the wrong size') into automated NDR reverse-pickup waybills.",
    "Fourth Rail (ONDC Open Inventory Indexing): Connect buyer-side queries to ONDC's decentralized network protocol, bypassing single-marketplace walled gardens and sponsored-product algorithms that misalign incumbent search engines.",
  ],
  findings: [
    "Field testing reveals real voice failure modes: 10 live test calls demonstrated that caller code-switching and front-loaded specifications broke unconstrained dialogue models; forcing an intermediate confirmation lock and decoupling budget/brand as independent anchors reduced catastrophic dropouts to 0%.",
    "Incumbents face an ad-monetization paradox: Flipkart and Amazon possess logistics and payment stacks but derive billions from sponsored product placements and search ads; building a lean, truthful exact-spec agent is structurally opposed to their core marketplace ad business.",
    "Conditional autonomy maximizes delegation tolerance: users reject autonomous buying for subjective items but readily delegate exact-spec commodity re-orders and verifiable dimension matches under an L3 cap, boosting conversion by eliminating payment-page abandonment.",
    "Cross-platform federated search requires ONDC: without an open protocol like ONDC, a buyer agent is captive to single-marketplace inventory and search bias, confirming that an open network rail is foundational to consumer agent trust.",
  ],
  keyNumbers: [
    {
      value: "top 7%",
      label: "of 6,000 national teams across 300+ colleges",
    },
    {
      value: "10 Calls",
      label: "live stress-tested on Gnani voice sandbox",
    },
    {
      value: "Level 3",
      label: "bounded conditional autonomy limit",
    },
    {
      value: "3 Rails + ONDC",
      label: "voice, payments, logistics, and open catalog",
    },
  ],
  charts: [
    {
      title: "Sift Agent Failure Modes Identified in Live Voice Testing (10 Calls)",
      description:
        "Empirical breakdown of voicebot breakdown points across live telephone testing on Gnani's platform, resolved through prompt architectural locks.",
      unit: "% of failure incidents",
      variant: "donut",
      callout: {
        value: "0% Dropouts",
        label: "achieved post-mitigation across re-verified call loops",
      },
      bars: [
        {
          label: "Over-Specification Rush",
          value: 40,
          display: "40%",
          note: "Caller front-loaded all specs in turn 1; bot closed without confirmation",
        },
        {
          label: "Objection Steamrolling",
          value: 30,
          display: "30%",
          note: "Closing momentum overrode caller's mid-sentence correction",
        },
        {
          label: "Attribute Crowding (Gifts)",
          value: 20,
          display: "20%",
          note: "Long category checklists crowded out brand & budget anchors",
        },
        {
          label: "Platform Silence Timeout",
          value: 10,
          display: "10%",
          note: "Global silence timeout fired without scenario-level recovery",
        },
      ],
    },
    {
      title: "Consumer Delegation Tolerance by Autonomy Level (L1 to L4)",
      description:
        "Mapping user willingness to delegate e-commerce purchasing without manual human checkout across autonomy tiers.",
      unit: "% delegation comfort",
      variant: "bars",
      callout: {
        value: "72% Comfort",
        label: "achieved at L3 bounded autonomy vs 14% cliff at L4",
      },
      bars: [
        {
          label: "L1: Passive Search Assistant",
          value: 94,
          display: "94%",
          note: "Provides links and specs; 100% human checkout and payment",
        },
        {
          label: "L2: Propose & Wait",
          value: 88,
          display: "88%",
          note: "Prepares cart; sends payment link to user's phone for explicit approval",
        },
        {
          label: "L3: Bounded Auto-Purchase (Sift)",
          value: 72,
          display: "72%",
          note: "Auto-buys ONLY within exact verified spec and pre-set spending cap",
        },
        {
          label: "L4: Unbounded Autonomous",
          value: 14,
          display: "14%",
          note: "Delegation cliff: severe consumer anxiety over subjective mismatches",
        },
      ],
    },
  ],
};

export default entry;
