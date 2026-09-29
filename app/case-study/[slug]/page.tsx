import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import caseStudies from "@/public/data/case-studies.json";

const sectionList = [
  ["01 — THE PROBLEM", "problem"],
  ["02 — THE APPROACH", "approach"],
  ["04 — ENGINEERING DECISIONS", "decisions"],
  ["05 — IMPLEMENTATION", "implementation"],
  ["06 — CHALLENGES", "challenges"],
  ["07 — RESULTS", "results"],
  ["08 — WHAT I LEARNED", "learned"],
] as const;

type Slug = keyof typeof caseStudies;

export function generateStaticParams() {
  return Object.keys(caseStudies).map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!Object.hasOwn(caseStudies, slug)) notFound();
  const study = caseStudies[slug as Slug];

  return <main className="case-page container-main">
    <nav className="case-page-nav" aria-label="Case study navigation"><Link href="/#work"><ArrowLeft size={15}/> Back to projects</Link><span>PROJECT CASE STUDY</span></nav>
    <header className="case-page-header"><p className="case-page-kicker">ENGINEERING CASE STUDY</p><h1>{study.title}</h1><p>{study.subtitle}</p></header>
    <section className="case-page-architecture" aria-labelledby="architecture-heading"><h2 id="architecture-heading">03 — ARCHITECTURE</h2><div className="case-page-flow">{study.architecture.map((node, index) => <div className="case-page-flow-item" key={node}><span>{node}</span>{index < study.architecture.length - 1 && <ArrowRight aria-hidden="true" size={17}/>}</div>)}</div></section>
    <div className="case-page-sections">{sectionList.map(([label, key]) => <section className="case-page-section" key={key}><h2>{label}</h2><p>{study[key]}</p></section>)}</div>
    <footer className="case-page-links"><h2>09 — LINKS</h2><a href={study.links.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14}/></a>{study.links.demo ? <a href={study.links.demo} target="_blank" rel="noreferrer">Demo <ExternalLink size={14}/></a> : <span>Demo not published</span>}{study.links.paper ? <a href={study.links.paper} target="_blank" rel="noreferrer">Paper <ExternalLink size={14}/></a> : <span>Paper not linked</span>}</footer>
  </main>;
}
