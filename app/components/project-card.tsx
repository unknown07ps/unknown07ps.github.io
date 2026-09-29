"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/app/data/portfolio";
export function ProjectCard({project,index}:{project:Project;index:number}){
 const [slide,setSlide]=useState(0); const [preview,setPreview]=useState<{src:string;alt:string}|null>(null); const previewTimer=useRef<ReturnType<typeof setTimeout>|null>(null); const multiple=project.images.length>1;
 useEffect(()=>()=>{if(previewTimer.current)clearTimeout(previewTimer.current)},[]);
 const schedulePreview=(src:string,alt:string)=>{if(previewTimer.current)clearTimeout(previewTimer.current);previewTimer.current=setTimeout(()=>setPreview({src,alt}),550)};
 const clearPreview=()=>{if(previewTimer.current)clearTimeout(previewTimer.current);previewTimer.current=null;setPreview(null)};
 return <><motion.div layout className={(index===0?"md:col-span-2 ":"")+"group"}>
 <motion.div initial={{y:28,scale:.96,borderRadius:30}} whileInView={{y:0,scale:1,borderRadius:16}} viewport={{once:true,amount:.12}} transition={{duration:.68,delay:index*.035,ease:[.22,1,.36,1]}} className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[.055] to-white/[.015] p-5 transition duration-300 group-hover:-translate-y-1 group-hover:border-violet-400/30 group-hover:shadow-[0_25px_80px_-45px_rgba(139,92,246,.65)]">
  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent opacity-0 transition group-hover:opacity-100"/>
  <div className="flex items-center justify-between gap-3"><span className="font-mono text-[10px] uppercase tracking-[.15em] text-zinc-600">{project.num}</span><Badge>{project.tag}</Badge></div>
  <div className="mt-5 flex items-start justify-between gap-4"><h3 className="text-2xl font-semibold tracking-[-.04em] text-white">{project.title}</h3><a aria-label={`Open ${project.title} repository`} href={project.repo} target="_blank" rel="noreferrer" className="shrink-0 rounded-full border border-white/10 p-2 text-zinc-500 transition hover:border-violet-400/40 hover:text-violet-300"><ArrowUpRight size={16}/></a></div>
  <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-400">{project.desc}</p>
  {project.arch&&<div className="mt-5 overflow-x-auto rounded-xl border border-violet-300/10 bg-black/20 px-3 py-2.5 font-mono text-[10px] text-violet-200/70">{project.arch}</div>}
  <div className="relative mt-5 overflow-hidden rounded-xl border border-white/10 bg-black/30">
   <div className="relative aspect-[16/8.5] w-full overflow-hidden">{project.images.map((src,i)=><a key={src} href={src} target="_blank" rel="noreferrer" onMouseEnter={()=>schedulePreview(src,project.alts[i])} onMouseLeave={clearPreview} onFocus={()=>setPreview({src,alt:project.alts[i]})} onBlur={clearPreview} className={`group/preview absolute inset-0 cursor-zoom-in transition-opacity duration-300 ${i===slide?'opacity-100':'pointer-events-none opacity-0'}`}><Image src={src} alt={project.alts[i]} fill sizes="(max-width:768px) 100vw, 70vw" className={`transition-transform duration-500 ease-out group-hover/preview:scale-110 ${project.title.startsWith("URL Shortener")?"object-contain object-center":"object-cover object-left-top"}`} priority={index<2}/></a>)}</div>
   {multiple&&<><button aria-label="Previous image" onClick={()=>setSlide((slide-1+project.images.length)%project.images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/65 p-2 text-white backdrop-blur hover:bg-black/85"><ChevronLeft size={16}/></button><button aria-label="Next image" onClick={()=>setSlide((slide+1)%project.images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/65 p-2 text-white backdrop-blur hover:bg-black/85"><ChevronRight size={16}/></button><div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full border border-white/10 bg-black/60 px-2 py-1.5 backdrop-blur">{project.images.map((_,i)=><button key={i} aria-label={`Show image ${i+1}`} onClick={()=>setSlide(i)} className={`h-1.5 w-1.5 rounded-full transition ${i===slide?'scale-125 bg-white':'bg-white/30'}`}/>)}</div></>}
  </div>
  <div className="mt-4 font-mono text-[10px] leading-6 tracking-wide text-zinc-500">{project.stack}</div>
  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3"><a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 transition hover:text-violet-300">View repository <ExternalLink size={13}/></a><Link href={`/case-study/${project.caseStudy}`} className="case-study-trigger">Read case study <ArrowRight size={14}/></Link></div>
 </motion.div></motion.div>{preview&&typeof document!=="undefined"&&createPortal(<div aria-hidden="true" className="pointer-events-none fixed left-1/2 top-1/2 z-[100] flex h-[min(56vh,560px)] w-[min(58vw,880px)] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/20 bg-[#09090c]/95 p-3 opacity-100 shadow-[0_28px_100px_rgba(0,0,0,.8)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 max-md:h-[min(44vh,420px)] max-md:w-[90vw] max-md:rounded-xl max-md:p-2"><div className="relative h-full w-full overflow-hidden rounded-lg"><Image src={preview.src} alt={preview.alt} fill unoptimized sizes="(max-width:768px) 90vw, 58vw" className="object-contain"/></div></div>,document.body)}</>;
}




