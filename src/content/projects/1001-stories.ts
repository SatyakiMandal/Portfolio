import type { Project } from "../projects";

const entry: Project = {
  slug: "1001-stories",
  brandKey: "1001-stories",
  title: "1001 Stories",
  tag: "Live Project",
  year: "2025",
  question:
    "Does turning a smartphone display to greyscale sustainably reduce screen time and attention lapses, and why do users override it?",
  cardNumber: { value: "40%", label: "drop in weekly screen time" },
  chips: ["Behaviour design", "Digital wellbeing"],
  filters: ["Research", "Product and data"],
  keyNumbers: [
    { value: "40%", label: "drop in weekly screen time (426m to 256m)" },
    { value: "73.5%", label: "lapses in first 72 hours vs 42.9% uniform" },
    { value: "69.2%", label: "weekend lapses vs 28.6% uniform" },
    { value: "14 pts", label: "drop in Smartphone Addiction Scale (SAS)" },
  ],
  context:
    "Conducted with our team as a four-week randomised controlled behavioural study to evaluate whether display desaturation reduces smartphone dependence. While greyscale creates immediate visual friction, prior studies treated it as a passive cure without examining where, when, and why users override the friction. We tracked daily usage across greyscale and control cohorts paired with in-depth qualitative interviews to isolate relapse mechanics and situational triggers.",
  approach: [
    "Deployed a four-week randomised trial comparing an intervention cohort (full-system greyscale) against a parallel control group, tracking objective daily screen time and pickup frequency.",
    "Administered the Smartphone Addiction Scale (SAS-SV) across baseline and exit checkpoints to measure changes in perceived compulsion and withdrawal symptoms.",
    "Constructed time-to-lapse survival logs, tracking the exact latency and day-of-week timing when participants overrode display colour filters.",
    "Conducted qualitative joint-display interviews to categorize app-specific relapse environments (short-form video, evening unwinding, social validation).",
  ],
  findings: [
    "Weekly recreational screen time dropped by approximately 40% in the greyscale intervention cohort (from 426 minutes down to 256 minutes), against a negligible 16-minute change in the control group.",
    "Lapse friction is heavily front-loaded: 73.5% of first overrides occurred within the first 72 hours of intervention, compared to an expected 42.9% under a uniform hazard rate.",
    "Weekend relapse vulnerability spikes: 69.2% of lapses occurred on Saturdays and Sundays (against a 28.6% uniform weekend baseline), reflecting unstructured leisure time.",
    "Video apps accounted for roughly 70% of overrides, with short-form video representing the dominant category; qualitative interviews revealed anxiety and avoidance rather than boredom drove peak 8 to 10 hour sessions.",
  ],
  charts: [
    {
      title: "Weekly screen time reduction: intervention vs control",
      description: "Weekly recreational screen time fell from 426 to 256 minutes under greyscale, while the parallel control group remained essentially unchanged.",
      unit: "Minutes",
      variant: "ladder",
      callout: { value: "40% Drop", label: "170-minute weekly drop vs 16 minutes in control" },
      bars: [
        { label: "Intervention Baseline", value: 426, display: "426m", note: "Starting weekly recreational screen time" },
        { label: "Intervention Week 4 Exit", value: 256, display: "256m", note: "Post-intervention screen time under greyscale" },
        { label: "Intervention Net Reduction", value: -170, display: "-170m", note: "Statistically significant screen-time decline" },
        { label: "Control Group Net Change", value: -16, display: "-16m", note: "Natural variation in untreated control group" },
      ],
    },
    {
      title: "Timing of display filter lapses: front-loaded friction",
      description: "Overrides concentrate heavily in the first 72 hours and over weekends, demonstrating that friction decay follows an acute early hazard curve.",
      unit: "% share",
      variant: "cliff",
      callout: { value: "73.5% in 72h", label: "lapses in first 3 days vs 42.9% uniform baseline" },
      bars: [
        { label: "Observed Lapses: Days 1-3", value: 73.5, display: "73.5%", note: "Acute habit friction barrier in the first 72 hours" },
        { label: "Uniform Expected: Days 1-3", value: 42.9, display: "42.9%", note: "Theoretical uniform distribution across first 3 days" },
        { label: "Observed Weekend Lapses", value: 69.2, display: "69.2%", note: "Overwhelming concentration during unstructured weekends" },
        { label: "Uniform Expected Weekend", value: 28.6, display: "28.6%", note: "Two out of seven days uniform distribution baseline" },
      ],
    },
    {
      title: "Primary app category triggering display override",
      description: "Video content drives seven out of ten lapses, with short-form visual feeds creating the highest resistance to desaturated displays.",
      unit: "% share",
      variant: "donut",
      callout: { value: "70.0% Video", label: "short-form feeds and video drive seven in ten overrides" },
      bars: [
        { label: "Short-form Video Feeds", value: 46.7, display: "46.7%", note: "Instagram Reels, YouTube Shorts, algorithmic visual feeds" },
        { label: "Long-form Streaming & Media", value: 23.3, display: "23.3%", note: "YouTube long-form, streaming entertainment" },
        { label: "Messaging & Social Chats", value: 16.7, display: "16.7%", note: "WhatsApp, photo sharing, interpersonal communication" },
        { label: "Gaming, Shopping & Utility", value: 13.3, display: "13.3%", note: "Visual commerce and casual mobile gaming" },
      ],
    },
    {
      title: "Smartphone Addiction Scale (SAS) reduction by subscale",
      description: "Perceived smartphone dependence dropped by 14 points on the SAS instrument, showing consistent decreases across all functional impairment subscales.",
      unit: "Points",
      variant: "ladder",
      callout: { value: "14 pt Drop", label: "total SAS reduction vs 2 pts in control group" },
      bars: [
        { label: "Daily Life Disturbance", value: 3.8, display: "3.8 pts", note: "Fewer academic and workflow disruptions" },
        { label: "Positive Anticipation", value: 3.6, display: "3.6 pts", note: "Lower obsessive craving to check notifications" },
        { label: "Cyberspace Orientation", value: 3.4, display: "3.4 pts", note: "Reduced digital substitution for real-world activity" },
        { label: "Withdrawal & Tolerance", value: 3.2, display: "3.2 pts", note: "Reduced anxiety when separated from smartphone" },
      ],
    },
  ],
  credit: "With our team. Behavioural field experiment and qualitative research study.",
};

export default entry;
