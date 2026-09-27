"use client";

import { useMemo, useState, type CSSProperties } from "react";
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
const achievementThemes: Record<string, { accent: string; tint: string; glow: string; border: string }> = {
  Academics: { accent: "#ffd166", tint: "rgba(255,190,60,.16)", glow: "rgba(255,190,60,.48)", border: "rgba(255,209,102,.5)" },
  DSA: { accent: "#6ee7a2", tint: "rgba(34,197,94,.15)", glow: "rgba(34,197,94,.48)", border: "rgba(110,231,162,.48)" },
  Research: { accent: "#7dd3fc", tint: "rgba(14,165,233,.16)", glow: "rgba(56,189,248,.48)", border: "rgba(125,211,252,.5)" },
  Career: { accent: "#c4b5fd", tint: "rgba(139,92,246,.18)", glow: "rgba(167,139,250,.5)", border: "rgba(196,181,253,.5)" },
  Certifications: { accent: "#f9a8d4", tint: "rgba(236,72,153,.16)", glow: "rgba(244,114,182,.48)", border: "rgba(249,168,212,.5)" },
  Programs: { accent: "#fdba74", tint: "rgba(249,115,22,.16)", glow: "rgba(251,146,60,.48)", border: "rgba(253,186,116,.5)" },
};

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
          const theme = achievementThemes[item.category];
          const cardStyle = { "--achievement-glow": theme.glow, backgroundColor: "#101014", borderColor: theme.border, backgroundImage: `radial-gradient(ellipse at 100% 0%, ${theme.glow}, transparent 64%),linear-gradient(145deg,${theme.tint},rgba(255,255,255,.018) 68%),url('/images/achievement-clipart.svg')`, backgroundRepeat: "no-repeat,no-repeat,no-repeat", backgroundPosition: "center,center,right -20px bottom -24px", backgroundSize: "cover,cover,160px auto" } as CSSProperties;
          return <motion.article key={item.title} tabIndex={0} layout initial={{ y: 24, scale: .96, borderRadius: 30 }} animate={{ y: 0, scale: 1, borderRadius: 16 }} whileHover={{ y: -7, scale: 1.025, rotateX: 2, rotateY: -2, borderRadius: 22, transition: { duration: .22, delay: 0 } }} whileFocus={{ y: -5, scale: 1.015, borderRadius: 22, transition: { duration: .22, delay: 0 } }} whileTap={{ scale: .985, transition: { duration: .12, delay: 0 } }} exit={{ y: -10, scale: .97 }} transition={{ duration: .62, delay: i * .035, ease: [.22, 1, .36, 1] }} style={{ ...cardStyle, transformPerspective: 900 }} className="achievement-card group relative min-h-48 overflow-hidden rounded-2xl border p-5">
            <div className="achievement-card-content relative z-10 flex h-full flex-col">
              <div className="mb-7 flex items-center justify-between"><span style={{ color: theme.accent }} className="font-mono text-[10px] tracking-[.12em] transition-[text-shadow,color] duration-200 group-hover:text-white">{item.label}</span><span style={{ color: theme.accent, borderColor: theme.border, backgroundColor: theme.tint }} className="grid h-9 w-9 place-items-center rounded-xl border transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-active:scale-95"><Icon size={16}/></span></div>
              <h3 className="text-base font-semibold leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,.9)] transition-[text-shadow] duration-200 group-hover:[text-shadow:0_0_10px_var(--achievement-glow)]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-200 [text-shadow:0_1px_4px_rgba(0,0,0,.95)] transition-[text-shadow,color] duration-200 group-hover:text-white group-hover:[text-shadow:0_0_8px_var(--achievement-glow)]">{item.detail}</p>
            </div>
          </motion.article>;
        })}
      </AnimatePresence>
    </motion.div>
    <div className="mt-5 flex items-center gap-2 text-xs text-zinc-600"><BookOpen size={13}/>A few milestones from my academic, research and engineering journey.</div>
  </div>;
}


