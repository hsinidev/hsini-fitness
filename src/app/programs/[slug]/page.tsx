import { notFound } from "next/navigation";
import ProgramClient from "./ProgramClient";

export function generateStaticParams() {
  return [
    { slug: "gym" },
    { slug: "crossfit" },
    { slug: "yoga" },
    { slug: "bodycombat" },
    { slug: "bodybike" }
  ];
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug.toLowerCase();
  
  const validSlugs = ["gym", "crossfit", "yoga", "bodycombat", "bodybike"];
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return <ProgramClient slug={slug} />;
}
