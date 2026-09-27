import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const leetCodeCard = "https://leetcard.jacoblin.cool/Sagar_Prajapati1374?theme=dark&ext=heatmap";
const leetCodeProfile = "https://leetcode.com/Sagar_Prajapati1374/";
const gfgProfile = "https://www.geeksforgeeks.org/user/sagarprajahozi/";

export function DsaJourney() {
  return <section id="dsa" aria-labelledby="dsa-title" className="border-t border-white/5 py-24 sm:py-32">
    <Reveal>
      <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <div className="mb-3 font-mono text-[10px] tracking-[.18em] text-violet-300">PROBLEM SOLVING</div>
          <h2 id="dsa-title" className="text-4xl font-semibold tracking-[-.055em] text-white sm:text-6xl">Data Structures and Algorithms</h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-zinc-500">A snapshot of my practice and progress across LeetCode and GeeksforGeeks.</p>
      </div>
    </Reveal>

    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Reveal>
        <a href={leetCodeProfile} target="_blank" rel="noreferrer" aria-label="Open Sagar's LeetCode profile" className="group block h-full overflow-hidden rounded-2xl border border-white/10 bg-[#0b0c10] p-3 transition-colors hover:border-white/20 sm:p-4">
          <div className="relative aspect-[500/320] w-full overflow-hidden rounded-xl">
            <Image src={leetCodeCard} alt="LeetCode profile statistics and submission heatmap for Sagar Prajapati" fill unoptimized sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
          </div>
          <span className="mt-3 flex items-center justify-end gap-1.5 text-xs text-zinc-500 transition group-hover:text-zinc-200">LeetCode profile <ArrowUpRight size={13}/></span>
        </a>
      </Reveal>

      <Reveal delay={.06}>
        <article className="h-full rounded-2xl border border-emerald-400/35 bg-[#0a0f0a] p-5 sm:p-6">
          <a href={gfgProfile} target="_blank" rel="noreferrer" aria-label="Open sagarprajahozi's GeeksforGeeks profile" className="group flex items-start justify-between gap-3">
            <div><h3 className="text-xl font-semibold tracking-tight text-lime-300">sagarprajahozi</h3><p className="mt-1 text-xs text-emerald-100/75">GeeksforGeeks profile</p></div>
            <ArrowUpRight size={18} className="mt-1 text-emerald-200/70 transition group-hover:text-white"/>
          </a>

          <div className="relative mt-6 aspect-[1170/330] w-full overflow-hidden rounded-lg border border-white/10 bg-black/20">
            <Image src="/images/provided-progress-heatmap.png" alt="Provided activity heatmap showing 354 submissions in 2025" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
          </div>

          <div className="mt-7 grid grid-cols-3 gap-2">
            {[["309", "Problems Solved"], ["1159", "Coding Score"], ["3", "Institute Rank"]].map(([value, label]) => <div key={label} className="flex min-h-[74px] flex-col items-center justify-center rounded-xl border border-lime-400/70 bg-black/20 px-2 py-2 text-center">
              <span className="text-2xl font-bold leading-none text-emerald-300 sm:text-3xl">{value}</span><span className="mt-2 text-[10px] leading-tight text-emerald-100/80 sm:text-xs">{label}</span>
            </div>)}
          </div>
          <a href={gfgProfile} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs text-emerald-100/70 transition hover:text-white">View GeeksforGeeks profile <ArrowUpRight size={13}/></a>
        </article>
      </Reveal>
    </div>
  </section>;
}
