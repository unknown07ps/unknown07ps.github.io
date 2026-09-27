import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
export function Button({ className, variant="primary", asChild=false, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary"|"secondary"|"ghost"; asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn("inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/70 disabled:pointer-events-none disabled:opacity-50", variant === "primary" && "bg-white text-zinc-950 hover:-translate-y-0.5 hover:bg-zinc-100", variant === "secondary" && "border border-white/10 bg-white/[0.04] text-zinc-100 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]", variant === "ghost" && "text-zinc-400 hover:bg-white/[0.05] hover:text-white", className)} {...props} />;
}
