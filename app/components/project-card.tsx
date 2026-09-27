"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Project } from "@/app/data/portfolio";
export function ProjectCard({project,index}:{project:Project;index:number}){
 const [slide,setSlide]=useState(0); const multiple=project.images.length>1;
 return <motion.div layout initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.45,delay:index*.035}} className={(index===0?"md:col-span-2 ":"")+"group"}>
 <Card className="relative h-full overflow-hidden border-white/10 bg-gradient-to-br from-white/[.055] to-white/[.015] p-5 sm:p-6 transition duration-300 group-hover:-translate-y-1 group-hover:border-violet-400/30 group-hover:shadow-[0_25px_80px_-45px_rgba(139,92,246,.65)]">
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent opacity-0 transition group-hover:opacity-100"/>
  <div className="flex items-center justify-between gap-3"><span className="font-mono text-[10px] uppercase tracking-[.15em] text-zinc-600">{project.num}</span><Badge>{project.tag}</Badge></div>
  <div className="mt-5 flex items-start justify-between gap-4"><h3 className="text-2xl font-semibold tracking-[-.04em] text-white">{project.title}</h3><a aria-label={`Open ${project.title} repository`} href={project.repo} target="_blank" rel="noreferrer" className="shrink-0 rounded-full border border-white/10 p-2 text-zinc-500 transition hover:border-violet-400/40 hover:text-violet-300"><ArrowUpRight size={16}/></a></div>
  <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">{project.desc}</p>
  {project.arch&&<div className="mt-5 overflow-x-auto rounded-xl border border-violet-300/10 bg-black/20 px-3 py-2.5 font-mono text-[10px] text-violet-200/70">{project.arch}</div>}
  <div className="relative mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/30">
   <div className="relative aspect-[16/8.5] w-full overflow-hidden">{project.images.map((src,i)=><a key={src} href={src} target="_blank" rel="noreferrer" className={`absolute inset-0 transition-opacity duration-300 ${i===slide?'opacity-100':'pointer-events-none opacity-0'}`}><Image src={src} alt={project.alts[i]} fill sizes="(max-width:768px) 100vw, 70vw" className="object-cover object-left-top" priority={index<2}/></a>)}</div>
   {multiple&&<><button aria-label="Previous image" onClick={()=>setSlide((slide-1+project.images.length)%project.images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/65 p-2 text-white backdrop-blur hover:bg-black/85"><ChevronLeft size={16}/></button><button aria-label="Next image" onClick={()=>setSlide((slide+1)%project.images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/65 p-2 text-white backdrop-blur hover:bg-black/85"><ChevronRight size={16}/></button><div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full border border-white/10 bg-black/60 px-2 py-1.5 backdrop-blur">{project.images.map((_,i)=><button key={i} aria-label={`Show image ${i+1}`} onClick={()=>setSlide(i)} className={`h-1.5 w-1.5 rounded-full transition ${i===slide?'scale-125 bg-white':'bg-white/30'}`}/>)}</div></>}
  </div>
  <div className="mt-4 font-mono text-[10px] leading-6 tracking-wide text-zinc-500">{project.stack}</div>
  <a href={project.repo} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 transition hover:text-violet-300">View repository <ExternalLink size={13}/></a>
 </Card></motion.div>
}
