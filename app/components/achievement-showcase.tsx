"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, BriefcaseBusiness, Code2, FlaskConical, GraduationCap, Medal, Palette, Presentation, ShieldCheck, Sparkles, Trophy } from "lucide-react";

const achievements = [
  { category: "Academics", label: "ACADEMICS · 01", title: "Student of the Year — DYPIU", detail: "2023–24 · University Rank 2 · 9.71 CGPA.", icon: GraduationCap, featured: true },
  { category: "Academics", label: "ACADEMICS · 02", title: "Student of the Year — New Model English High School", detail: "2019–20 · School Rank 1 · 91.20% in SSC.", icon: Trophy, featured: true },
  { category: "DSA", label: "DSA · 03", title: "GeeksforGeeks Institutional Rank 3", detail: "540+ DSA problems solved in C++.", icon: Code2, featured: true },
  { category: "Research", label: "RESEARCH · 04", title: "IEEE INSECT 2026 Author — StegIntel", detail: "Conference paper published through IEEE INSECT 2026.", icon: FlaskConical, featured: true },
  { category: "Career", label: "RECRUITMENT · 05", title: "4 Pre-Placement Offers (PPOs)", detail: "Secured four PPOs during the final year of B.Tech.", icon: BriefcaseBusiness, featured: true },
  { category: "Career", label: "AMAZON · 06", title: "Amazon SDE-1 — Advanced to Online Assessment", detail: "Advanced to the Online Assessment stage through off-campus recruitment.", icon: ShieldCheck, featured: true },
  { category: "Certifications", label: "CERTIFICATION", title: "IEEE INSECT 2026 Certificate", detail: "Research publication / conference credential.", icon: Medal },
  { category: "Certifications", label: "CERTIFICATION", title: "CheckRed Digital Defence (CDD)", detail: "Digital defence certification from CheckRed Security.", icon: ShieldCheck },
  { category: "Programs", label: "WORKSHOPS", title: "AWS Cloud Workshop", detail: "Hands-on cloud learning experience.", icon: Presentation },
  { category: "Programs", label: "DESIGN", title: "Google UI/UX Design", detail: "UI/UX design certification / learning credential.", icon: Palette },
];

const filters = ["All", "Academics", "Research", "Career", "DSA", "Certifications", "Programs"];

export function AchievementShowcase() {
  const [active, setActive] = useState("All");
  const visible = useMemo(() => active === "All" ? achievements : achievements.filter((item) => item.category === active), [active]);

  return <div className="mt-10">
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter achievements by category">
        {filters.map((filter) => <button key={filter} type="button" onClick={() => setActive(filter)} aria-pressed={active === filter} className={`rounded-full border px-3 py-2 text-xs transition-colors ${active === filter ? "border-violet-300/50 bg-violet-300/10 text-violet-100" : "border-white/10 bg-white/[.02] text-zinc-500 hover:border-white/20 hover:text-zinc-200"}`}>{filter}{filter === "All" && <span className="ml-2 font-mono text-[10px] text-violet-300">10</span>}</button>)}
      </div>
      <div className="flex items-center gap-2 font-mono text-[10px] tracking-[.12em] text-zinc-600" aria-live="polite"><Sparkles size={13} className="text-violet-300"/>{visible.length} MILESTONES</div>
    </div>
    <motion.div layout className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {visible.map((item, i) => {
          const Icon = item.icon;
          return <motion.article key={item.title} layout initial={{ opacity: 0, y: 14, scale: .98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -8, scale: .98 }} transition={{ duration: .22, delay: i * .025 }} style={{ backgroundImage: `${item.featured ? "linear-gradient(145deg,rgba(167,139,250,.08),rgba(255,255,255,.02) 60%,transparent)," : ""}url('/images/achievement-clipart.svg')`, backgroundRepeat: item.featured ? "no-repeat,no-repeat" : "no-repeat", backgroundPosition: item.featured ? "center,right -20px bottom -24px" : "right -20px bottom -24px", backgroundSize: item.featured ? "cover,160px auto" : "160px auto" }} className={`group relative min-h-48 overflow-hidden rounded-2xl border p-5 ${item.featured ? "border-violet-300/15" : "border-white/10"}`}>
            <div className="relative flex h-full flex-col">
              <div className="mb-7 flex items-center justify-between"><span className="font-mono text-[10px] tracking-[.12em] text-violet-200 transition-[text-shadow,color] duration-200 group-hover:text-white group-hover:[text-shadow:0_0_12px_rgba(196,181,253,.85)] group-active:text-white group-active:[text-shadow:0_0_12px_rgba(196,181,253,.85)]">{item.label}</span><span className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-black/20 text-zinc-400"><Icon size={16}/></span></div>
              <h3 className="text-base font-semibold leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,.9)] transition-[text-shadow] duration-200 group-hover:[text-shadow:0_0_8px_rgba(196,181,253,.65),0_0_20px_rgba(167,139,250,.45)] group-active:[text-shadow:0_0_8px_rgba(196,181,253,.65),0_0_20px_rgba(167,139,250,.45)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-300 [text-shadow:0_1px_4px_rgba(0,0,0,.95)] transition-[text-shadow,color] duration-200 group-hover:text-violet-50 group-hover:[text-shadow:0_0_8px_rgba(196,181,253,.55),0_0_18px_rgba(167,139,250,.36)] group-active:text-violet-50 group-active:[text-shadow:0_0_8px_rgba(196,181,253,.55),0_0_18px_rgba(167,139,250,.36)]">{item.detail}</p>
            </div>
          </motion.article>;
        })}
      </AnimatePresence>
    </motion.div>
    <div className="mt-5 flex items-center gap-2 text-xs text-zinc-600"><BookOpen size={13}/>A few milestones from my academic, research and engineering journey.</div>
  </div>;
}
