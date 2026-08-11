import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Hsini Fitness",
    default: "Hsini Fitness - Premium Training & Conditioning Facility",
  },
  description: "Hsini Fitness is a world-class training facility offering Strength & Conditioning, CrossFit, Yoga, and Indoor Cycling. Engineered by Mohamed Hsini.",
  keywords: ["Hsini Fitness", "Gym", "Fitness Center", "CrossFit", "Yoga Studio", "Mohamed Hsini", "Personal Training", "Workout", "Health Club"],
  authors: [{ name: "Mohamed Hsini", url: "https://github.com/hsinidev" }],
  creator: "Mohamed Hsini",
  publisher: "Hsini Fitness",
  metadataBase: new URL("https://fitness.hsini.dev"),
  openGraph: {
    title: "Hsini Fitness - Premium Training Facility",
    description: "A premium training facility for those dedicated to improving their health, strength, and lifestyle.",
    url: "https://fitness.hsini.dev",
    siteName: "Hsini Fitness",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hsini Fitness - Premium Training Facility",
    description: "A premium training facility for those dedicated to improving their health, strength, and lifestyle.",
    creator: "@hsinidev",
  },
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
