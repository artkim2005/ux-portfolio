import type { CaseStudy } from "../types";

export const caseStudies: CaseStudy[] = [
  {
    id: "spotify",
    title: "Spotify Redesign",
    subtitle: "A fresh take on Spotify's mobile design",
    tags: ["Mobile", "iOS", "Fintech", "User Research"],
    heroColor: "from-violet-600 to-indigo-600",
    coverLink: "/src/assets/spotify_thumb.png",
    overview:
      "Spotify’s mobile UI/UX has been critiqued by users for being hard to navigate and messy in general. The goal of this case study is to understand the specific challenges users face when interacting with Spotify’s UI and propose solutions to those problems.",
    role: "Lead UX Designer",
    duration: "1 month",
    team: "1 UX Designer, 2 Engineers, 1 PM",
    problem:
      "Before proceeding with the redesign, I asked a few Spotify users what their experience was like using the app. Using their responses, I was able to create an affinity map highlighting common issues grouped into four categories: Navigation / Layout, UI Elements, Technical Issues, and Algorithm.",
    process: [
      {
        phase: "01",
        title: "Discovery & Research",
        description:
          "Understanding why users churned before we could design a fix.",
        details: [
          "18 user interviews with 18–26 year olds across income brackets",
          "Exit survey analysis of 2,400 churned users",
          "Competitive teardown of 7 finance apps",
          "Session recording review (FullStory) — identified 3 rage-click hotspots",
        ],
      },
      {
        phase: "02",
        title: "Synthesis & Definition",
        description: "Turning raw data into a focused problem statement.",
        details: [
          "Affinity mapping across 200+ interview quotes",
          "Created 3 primary personas based on financial behaviours, not demographics",
          "Jobs-to-be-done framework to reframe feature prioritisation",
          '"I feel judged by my spending data" emerged as the core emotional barrier',
        ],
      },
      {
        phase: "03",
        title: "Ideation & Prototyping",
        description: "Moving from insight to testable concepts quickly.",
        details: [
          "Design sprint (4 days) with cross-functional team",
          "3 competing onboarding flows prototyped in Figma",
          'Introduced "spending personality" quiz to reduce perceived judgment',
          "Replaced pie charts with conversational summaries for key moments",
        ],
      },
      {
        phase: "04",
        title: "Testing & Iteration",
        description:
          "Validating assumptions with real users under realistic conditions.",
        details: [
          "Moderated usability tests — 12 participants across 2 rounds",
          "A/B test: personality-first vs. bank-connect-first onboarding (n=1,200)",
          'Iterated navigation after 8/12 users couldn\'t find "Goals" feature',
          "Accessibility audit — improved contrast ratios across all data vis components",
        ],
      },
    ],
    outcomes: [
      {
        metric: "Onboarding Completion",
        value: "+41%",
        description:
          "From 38% to 79% after the redesigned onboarding flow shipped",
      },
      {
        metric: "DAU/MAU Ratio",
        value: "12% → 31%",
        description:
          "Users returned more often due to daily nudges and goal tracking",
      },
      {
        metric: "Support Tickets",
        value: "−55%",
        description:
          "Simpler language and clearer empty states cut confusion-driven tickets",
      },
    ],
    learnings:
      "The biggest insight wasn't a UI fix — it was recognising that the emotional tone of the product was the real blocker. Users felt watched and judged. Shifting the voice from \"Here's what you spent\" to \"Here's how you're doing\" changed retention more than any single feature.",
  },
  {
    id: "travel",
    title: "Travel App",
    subtitle: "A fresh take on Spotify's mobile design",
    tags: ["Mobile", "iOS", "Fintech", "User Research"],
    heroColor: "from-violet-600 to-indigo-600",
    coverLink: "/src/assets/spotify_thumb.png",
    overview:
      "Spotify’s mobile UI/UX has been critiqued by users for being hard to navigate and messy in general. The goal of this case study is to understand the specific challenges users face when interacting with Spotify’s UI and propose solutions to those problems.",
    role: "Lead UX Designer",
    duration: "1 month",
    team: "1 UX Designer, 2 Engineers, 1 PM",
    problem:
      "Before proceeding with the redesign, I asked a few Spotify users what their experience was like using the app. Using their responses, I was able to create an affinity map highlighting common issues grouped into four categories: Navigation / Layout, UI Elements, Technical Issues, and Algorithm.",
    process: [
      {
        phase: "01",
        title: "Discovery & Research",
        description:
          "Understanding why users churned before we could design a fix.",
        details: [
          "18 user interviews with 18–26 year olds across income brackets",
          "Exit survey analysis of 2,400 churned users",
          "Competitive teardown of 7 finance apps",
          "Session recording review (FullStory) — identified 3 rage-click hotspots",
        ],
      },
      {
        phase: "02",
        title: "Synthesis & Definition",
        description: "Turning raw data into a focused problem statement.",
        details: [
          "Affinity mapping across 200+ interview quotes",
          "Created 3 primary personas based on financial behaviours, not demographics",
          "Jobs-to-be-done framework to reframe feature prioritisation",
          '"I feel judged by my spending data" emerged as the core emotional barrier',
        ],
      },
      {
        phase: "03",
        title: "Ideation & Prototyping",
        description: "Moving from insight to testable concepts quickly.",
        details: [
          "Design sprint (4 days) with cross-functional team",
          "3 competing onboarding flows prototyped in Figma",
          'Introduced "spending personality" quiz to reduce perceived judgment',
          "Replaced pie charts with conversational summaries for key moments",
        ],
      },
      {
        phase: "04",
        title: "Testing & Iteration",
        description:
          "Validating assumptions with real users under realistic conditions.",
        details: [
          "Moderated usability tests — 12 participants across 2 rounds",
          "A/B test: personality-first vs. bank-connect-first onboarding (n=1,200)",
          'Iterated navigation after 8/12 users couldn\'t find "Goals" feature',
          "Accessibility audit — improved contrast ratios across all data vis components",
        ],
      },
    ],
    outcomes: [
      {
        metric: "Onboarding Completion",
        value: "+41%",
        description:
          "From 38% to 79% after the redesigned onboarding flow shipped",
      },
      {
        metric: "DAU/MAU Ratio",
        value: "12% → 31%",
        description:
          "Users returned more often due to daily nudges and goal tracking",
      },
      {
        metric: "Support Tickets",
        value: "−55%",
        description:
          "Simpler language and clearer empty states cut confusion-driven tickets",
      },
    ],
    learnings:
      "The biggest insight wasn't a UI fix — it was recognising that the emotional tone of the product was the real blocker. Users felt watched and judged. Shifting the voice from \"Here's what you spent\" to \"Here's how you're doing\" changed retention more than any single feature.",
  },
];
