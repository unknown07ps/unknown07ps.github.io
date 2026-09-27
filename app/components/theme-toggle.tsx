"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
export function ThemeToggle(){const {theme,setTheme}=useTheme(); return <button aria-label="Toggle color theme" onClick={()=>setTheme(theme==="dark"?"light":"dark")} className="rounded-full border border-white/10 bg-white/[0.04] p-2.5 text-zinc-300 transition hover:bg-white/[0.08] hover:text-white">{theme==="dark"?<Sun size={16}/>:<Moon size={16}/>}</button>}
