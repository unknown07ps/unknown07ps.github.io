"use client";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "@/app/data/portfolio";
import { ProjectCard } from "./project-card";
const filters=[['all','All'],['systems','Systems'],['ai','AI / RAG'],['devops','DevOps'],['vision','Vision']] as const;
export function ProjectGrid(){const [filter,setFilter]=useState<string>('all'); const visible=projects.filter(p=>filter==='all'||p.tags.includes(filter)); return <><div className="mb-8 flex flex-wrap gap-2">{filters.map(([id,label])=><button key={id} onClick={()=>setFilter(id)} className={`rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider transition ${filter===id?'border-violet-400/40 bg-violet-400/10 text-violet-200':'border-white/10 bg-white/[.025] text-zinc-500 hover:text-zinc-200'}`}>{label}</button>)}</div><div className="grid grid-cols-1 gap-4 md:grid-cols-2"><AnimatePresence mode="popLayout">{visible.map((p,i)=><ProjectCard key={p.title} project={p} index={i}/>)}</AnimatePresence></div></>}
