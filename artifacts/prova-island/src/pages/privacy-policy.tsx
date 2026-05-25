import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import SiteLayout from "@/components/site-layout";

interface PolicySection {
  heading: string;
  content: (string | { subheading: string; items: string[] })[];
}

const sections: PolicySection[] = [
  {
    heading: "Scope",
    content: [
      "This Privacy Policy applies to:",
      {
        subheading: "",
        items: [
          "The Prova Island mobile game on Google Play.",
          "The official Prova Island website (https://provaisland.com/).",
          "The WebGL build of Prova Island, accessible through standard web browsers.",
        ],
      },
      "It covers data collected directly by us and through integrated third-party services.",
    ],
  },
  {
    heading: "Information We Collect",
    content: [
      {
        subheading: "a. Information You Provide Directly",
        items: [
          "Username, display name, or profile details (if account creation is enabled).",
          "Email address or other contact details when you reach out for support.",
          "Feedback, survey responses, or voluntary submissions.",
        ],
      },
      {
        subheading: "b. Information Collected Automatically",
        items: [
          "Gameplay data (progress, achievements, in-game actions, leaderboard results).",
          "Device information (model, OS version, unique identifiers).",
          "Log and usage data (IP address, crash reports, diagnostics, performance analytics).",
        ],
      },
      {
        subheading: "c. Information from Third Parties",
        items: [
          "Google Play Services – Google Privacy Policy",
          "Google AdMob (Ads) – AdMob Policy",
          "Firebase Analytics & Crashlytics – Firebase Privacy & Security",
          "Unity Analytics / Ads (if enabled) – Unity Privacy Policy",
          "PlayFab (Microsoft Azure) – account services, leaderboards, multiplayer, cloud saves – Microsoft Privacy Statement",
          "Photon (Exit Games) – used for real-time multiplayer networking and connectivity – Photon Privacy Policy",
        ],
      },
    ],
  },
  {
    heading: "How We Use Information",
    content: [
      "We process your data to:",
      {
        subheading: "",
        items: [
          "Provide and operate the game (cloud saves, multiplayer, leaderboards).",
          "Improve stability and fix bugs.",
          "Deliver and measure in-app advertisements.",
          "Support in-app purchases via Google Play Billing.",
          "Send important service updates or push notifications.",
          "Respond to inquiries and support tickets.",
          "Detect fraud, enforce terms of service, and ensure fair play.",
          "Comply with applicable laws.",
        ],
      },
    ],
  },
  {
    heading: "In-App Purchases & Payments",
    content: [
      "All transactions are handled by Google Play Billing. We do not store or process your credit card or banking details. See Google's Terms of Service and Privacy Policy.",
    ],
  },
  {
    heading: "WebGL Version & Browser Data",
    content: [
      "When you play the WebGL build:",
      {
        subheading: "",
        items: [
          "Progress may be saved using browser cookies or storage.",
          "Browsers and hosting platforms may collect diagnostics.",
          "Please review your browser's privacy policies.",
        ],
      },
    ],
  },
  {
    heading: "Push Notifications & Device Permissions",
    content: [
      {
        subheading: "Push Notifications",
        items: ["Used for updates, events, or reminders. You can disable them in device settings."],
      },
      {
        subheading: "Permissions",
        items: ["Internet access, storage (for saves), and similar. These are used strictly for gameplay, not unrelated purposes."],
      },
    ],
  },
  {
    heading: "Advertising & Tracking Choices",
    content: [
      "Ads may be delivered through Google AdMob or similar networks. These may use advertising identifiers. You can opt-out:",
      {
        subheading: "",
        items: [
          "Android: Settings → Google → Ads → Opt out of Ads Personalization.",
          "iOS: Settings → Privacy → Apple Advertising → Limit Ad Tracking.",
        ],
      },
    ],
  },
  {
    heading: "Sharing of Information",
    content: [
      "We do not sell personal data. We may share:",
      {
        subheading: "",
        items: [
          "With service providers (analytics, crash reports, hosting, PlayFab).",
          "With platform operators (Google Play, WebGL hosting).",
          "With legal authorities when required.",
          "As part of business transfers (merger, acquisition, or sale).",
        ],
      },
    ],
  },
  {
    heading: "Links to Other Sites",
    content: [
      "Our game and site may link to external sites (e.g., social media). Their privacy practices are not governed by us.",
    ],
  },
  {
    heading: "Legal Bases for Processing (GDPR)",
    content: [
      "If you are in the EEA/UK, we rely on:",
      {
        subheading: "",
        items: [
          "Consent (e.g., ads, analytics).",
          "Contractual necessity (game services, saves).",
          "Legitimate interests (service improvement, fraud prevention).",
          "Legal obligations (regulatory compliance).",
        ],
      },
    ],
  },
  {
    heading: "Children's Privacy",
    content: [
      "Prova Island is designed to be enjoyed by players of all ages, including children.",
      "We do not knowingly collect personal information from children under 13 (or the minimum age required in your region under applicable laws such as COPPA in the U.S. or GDPR-K in the EU/EEA) without verified parental consent.",
      "Parents and guardians are encouraged to supervise their child's use of the game.",
      "Parents may contact us at info@provaisland.com to review, update, or request deletion of their child's information.",
    ],
  },
  {
    heading: "User Rights",
    content: [
      "Depending on your region, you may:",
      {
        subheading: "",
        items: [
          "Access, correct, or delete your personal data.",
          "Restrict or object to processing.",
          "Request data portability.",
          "Withdraw consent where processing is based on consent.",
          "Opt out of targeted advertising.",
        ],
      },
      "Contact info@provaisland.com to exercise these rights.",
    ],
  },
  {
    heading: "Data Retention",
    content: [
      "We retain data only as long as necessary for:",
      {
        subheading: "",
        items: [
          "Gameplay and account continuity.",
          "Legal compliance.",
          "Security and fraud prevention.",
        ],
      },
      "You may request deletion anytime. PlayFab and our systems will erase or anonymize data within 30 days unless law requires longer retention.",
    ],
  },
  {
    heading: "International Transfers",
    content: [
      "Your data may be processed in Canada, India, the United States, and other regions. Where legally required, we use Standard Contractual Clauses (SCCs) or equivalent safeguards.",
    ],
  },
  {
    heading: "Security",
    content: [
      "We use encryption, access controls, and secure servers to protect data. While no system is fully secure, we work to minimize risks.",
    ],
  },
  {
    heading: "Cookies & Tracking (Website & WebGL)",
    content: [
      "We may use cookies and browser storage to:",
      {
        subheading: "",
        items: [
          "Save game progress.",
          "Analyze performance.",
          "Improve user experience.",
        ],
      },
      "Disabling cookies may affect functionality.",
    ],
  },
  {
    heading: "California Privacy Rights (CCPA)",
    content: [
      "California residents may:",
      {
        subheading: "",
        items: [
          "Know categories of data collected.",
          "Request deletion.",
          "Opt out of 'sale' of personal data (we do not sell).",
          "Exercise rights without discrimination.",
        ],
      },
      "Requests: info@provaisland.com.",
    ],
  },
  {
    heading: "Complaints & Dispute Resolution",
    content: [
      "Unresolved concerns may be raised with your local Data Protection Authority (EEA/UK) or consumer protection authority.",
    ],
  },
  {
    heading: "Future Features",
    content: [
      "If new features (multiplayer, accounts, accessories store) are added, we may update practices. Changes will be reflected in this Policy.",
    ],
  },
  {
    heading: "Google Play Data Safety Alignments",
    content: [
      "The information in this Privacy Policy is consistent with the disclosures you will see in the Google Play Data Safety section for Prova Island.",
    ],
  },
  {
    heading: "Privacy Highlights",
    content: [
      "We want this policy to be understandable to everyone:",
      {
        subheading: "",
        items: [
          "We collect only the data needed to run the game, save progress, and improve features.",
          "We don't sell your personal data.",
          "Ads shown in the game (if any) are age-appropriate and follow Google Play's Families Ads Policy.",
          "Parents can contact us to manage or delete their child's data.",
          "You can opt out of personalized ads and request data deletion at any time.",
        ],
      },
    ],
  },
  {
    heading: "Changes to This Privacy Policy",
    content: [
      "We may revise this Policy periodically. Updates will be posted in-app and on our website with the 'last updated' date.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <SiteLayout>
      <div className="relative">
        {/* Subtle tropical background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative z-10 container mx-auto px-4 md:px-6 py-12 md:py-20 max-w-4xl">
          {/* Back to Home */}
          <div className="mb-10">
            <Link href="/" data-testid="link-back-to-home">
              <Button
                variant="ghost"
                className="gap-2 font-bold text-primary hover:bg-primary/10 rounded-2xl px-4 h-11"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Page header */}
          <div className="mb-12">
            <h1
              className="text-4xl md:text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-4"
              data-testid="heading-privacy-policy"
            >
              Privacy Policy
            </h1>
            <p className="text-muted-foreground font-semibold text-lg">
              Last updated: 25 September 2025
            </p>
          </div>

          {/* Intro */}
          <div className="bg-white rounded-3xl shadow-sm border-2 border-primary/10 p-6 md:p-8 mb-8">
            <p className="text-foreground leading-relaxed text-base md:text-lg">
              Constructivist Creations Ltd. ("we," "our," or "us") respects your privacy and is committed to protecting your
              personal information. This Privacy Policy explains how we collect, use, share, and safeguard your information
              when you play the Prova Island mobile game, access the WebGL version, or visit our official website at{" "}
              <a
                href="https://provaisland.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                https://provaisland.com/
              </a>
              . By using Prova Island, you agree to this Privacy Policy. If you do not agree, please discontinue use.
            </p>
          </div>

          {/* Sections */}
          <div className="flex flex-col gap-6">
            {sections.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl shadow-sm border-2 border-primary/10 p-6 md:p-8"
                data-testid={`section-${section.heading.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <h2 className="text-xl md:text-2xl font-black text-foreground mb-4 pb-3 border-b-2 border-primary/10">
                  {section.heading}
                </h2>
                <div className="flex flex-col gap-3">
                  {section.content.map((block, bIdx) => {
                    if (typeof block === "string") {
                      if (block.includes("info@provaisland.com")) {
                        const parts = block.split("info@provaisland.com");
                        return (
                          <p key={bIdx} className="text-muted-foreground leading-relaxed text-base">
                            {parts[0]}
                            <a
                              href="mailto:info@provaisland.com"
                              className="text-primary font-bold hover:underline"
                              data-testid={`link-email-${bIdx}`}
                            >
                              info@provaisland.com
                            </a>
                            {parts[1]}
                          </p>
                        );
                      }
                      return (
                        <p key={bIdx} className="text-muted-foreground leading-relaxed text-base">
                          {block}
                        </p>
                      );
                    }
                    return (
                      <div key={bIdx} className="mt-1">
                        {block.subheading && (
                          <p className="font-bold text-foreground mb-2">{block.subheading}</p>
                        )}
                        <ul className="flex flex-col gap-2 pl-2">
                          {block.items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-3 text-muted-foreground text-base leading-relaxed">
                              <span className="mt-2 w-2 h-2 rounded-full bg-primary/50 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Us */}
          <div className="mt-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl border-2 border-primary/20 p-6 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-foreground mb-3">Contact Us</h2>
            <p className="text-muted-foreground text-base md:text-lg mb-2">
              Constructivist Creations Ltd.
            </p>
            <a
              href="mailto:info@provaisland.com"
              className="text-primary font-bold text-lg hover:underline"
              data-testid="link-contact-email"
            >
              info@provaisland.com
            </a>
          </div>

          {/* Back to Home (bottom) */}
          <div className="mt-12 flex justify-center">
            <Link href="/" data-testid="link-back-to-home-bottom">
              <Button className="gap-2 font-bold px-8 h-12 rounded-2xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-b-4 active:border-b-0 active:translate-y-1">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
