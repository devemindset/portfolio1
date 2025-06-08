import { InSimple } from "@/types";

type PlatformIcon = {
  name: string;
  iconUrl: string;
};

export const platforms: PlatformIcon[] = [
  { name: "WhatsApp", iconUrl: "https://cdn.simpleicons.org/whatsapp" },
  { name: "Telegram", iconUrl: "https://cdn.simpleicons.org/telegram" },
  // { name: "Messenger", iconUrl: "https://cdn.simpleicons.org/facebookmessenger" },
  { name: "SMS", iconUrl: "https://cdn.simpleicons.org/signal" }, // Remplaçant générique
  { name: "Signal", iconUrl: "https://cdn.simpleicons.org/signal" },
  { name: "iMessage", iconUrl: "https://cdn.simpleicons.org/apple" },
  { name: "Discord", iconUrl: "https://cdn.simpleicons.org/discord" },

  { name: "Facebook", iconUrl: "https://cdn.simpleicons.org/facebook" },
  { name: "Instagram", iconUrl: "https://cdn.simpleicons.org/instagram" },
  { name: "Twitter", iconUrl: "https://cdn.simpleicons.org/x" },
  // { name: "LinkedIn", iconUrl: "https://cdn.simpleicons.org/linkedin" },
  { name: "TikTok", iconUrl: "https://cdn.simpleicons.org/tiktok" },
  { name: "Threads", iconUrl: "https://cdn.simpleicons.org/threads" },
  { name: "Reddit", iconUrl: "https://cdn.simpleicons.org/reddit" },

  { name: "Gmail", iconUrl: "https://cdn.simpleicons.org/gmail" },
  // { name: "Outlook", iconUrl: "https://cdn.simpleicons.org/microsoftoutlook" },
  // { name: "Yahoo Mail", iconUrl: "https://cdn.simpleicons.org/yahoo" },
  { name: "Apple Mail", iconUrl: "https://cdn.simpleicons.org/apple" },
  { name: "ProtonMail", iconUrl: "https://cdn.simpleicons.org/protonmail" },

  { name: "Slack", iconUrl: "https://cdn.simpleicons.org/slack" },
  // { name: "Microsoft Teams", iconUrl: "https://cdn.simpleicons.org/microsoftteams" },
  { name: "Notion", iconUrl: "https://cdn.simpleicons.org/notion" },
  { name: "Google Docs", iconUrl: "https://cdn.simpleicons.org/googledocs" },
  { name: "Trello", iconUrl: "https://cdn.simpleicons.org/trello" },
  { name: "Asana", iconUrl: "https://cdn.simpleicons.org/asana" },

  { name: "GitHub", iconUrl: "https://cdn.simpleicons.org/github" },
  { name: "GitLab", iconUrl: "https://cdn.simpleicons.org/gitlab" },
  { name: "Stack Overflow", iconUrl: "https://cdn.simpleicons.org/stackoverflow" },
  { name: "Dev.to", iconUrl: "https://cdn.simpleicons.org/devdotto" },
  { name: "IndieHackers", iconUrl: "https://cdn.simpleicons.org/indiehackers" },

  // { name: "Custom", iconUrl: "https://cdn.simpleicons.org/code" } // Icône générique
];


export const howItWorksSimple : InSimple[] = [
  {
    title: "1. Create a validation link",
    description:
      "Write down your idea, proposal or decision. Give it a title, add context, then click “Generate Link”.",
  },
  {
    title: "2. Share it in one click",
    description:
      "Send the link to your team, users or stakeholders. No login required for them to respond.",
  },
  {
    title: "3. Get clear feedback",
    description:
      "See who approves, who rejects, and why. Every response is tracked and centralized.",
  },
];
export const whyUseValidFlow : InSimple[] = [
  {
    title: "⚡ Fast ",
    description:
      "Generate a validation link in seconds. Save time on every decision.",
  },
  {
    title: "🔒 Frictionless",
    description:
      "No accounts. Just one click to validate, for anyone you share it with.",
  },
  {
    title: "📊 Transparent",
    description:
      "Track every response. Know exactly who said what, and when",
  },
];
export const realUseCase : InSimple[] = [
  {
    title: " Startups",
    description:
      "Test your product ideas or feature requests with real users, before you start building.",
  },
  {
    title: "Teams",
    description:
      "Make fast, clear decisions as a team: features, designs, priorities, and more.",
  },
  {
    title: " Freelancers / Creators",
    description:
      "Share drafts, concepts, or proposals with clients and get clear, timestamped feedback.",
  },
];