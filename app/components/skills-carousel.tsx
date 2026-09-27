"use client";

import { useState } from "react";
import { skills } from "@/app/data/portfolio";

const marks: Record<string, { slug: string; color: string; mark: string; group: string }> = {
  Python:{slug:"python",color:"3776AB",mark:"Py",group:"LANGUAGES"}, "C++":{slug:"cplusplus",color:"00599C",mark:"C++",group:"LANGUAGES"}, C:{slug:"c",color:"A8B9CC",mark:"C",group:"LANGUAGES"}, Go:{slug:"go",color:"00ADD8",mark:"Go",group:"LANGUAGES"}, JavaScript:{slug:"javascript",color:"F7DF1E",mark:"JS",group:"LANGUAGES"}, Bash:{slug:"gnubash",color:"4EAA25",mark:"sh",group:"LANGUAGES"},
  PyTorch:{slug:"pytorch",color:"EE4C2C",mark:"PT",group:"AI / ML"}, TensorFlow:{slug:"tensorflow",color:"FF6F00",mark:"TF",group:"AI / ML"}, OpenCV:{slug:"opencv",color:"5C3EE8",mark:"CV",group:"AI / ML"}, YOLOv8:{slug:"ultralytics",color:"111F68",mark:"Y8",group:"AI / ML"},
  LangChain:{slug:"langchain",color:"1C3C3C",mark:"LC",group:"AI / LLM"}, LangGraph:{slug:"langgraph",color:"1C3C3C",mark:"LG",group:"AI / LLM"}, FAISS:{slug:"/images/skills/faiss.svg",color:"0668E1",mark:"FA",group:"AI / LLM"}, ChromaDB:{slug:"/images/skills/chromadb.svg",color:"FF6446",mark:"Ch",group:"AI / LLM"}, Ollama:{slug:"ollama",color:"FFFFFF",mark:"Ol",group:"AI / LLM"},
  FastAPI:{slug:"fastapi",color:"009688",mark:"FA",group:"BACKEND"}, "Node.js":{slug:"nodedotjs",color:"5FA04E",mark:"Node",group:"BACKEND"}, Redis:{slug:"redis",color:"FF4438",mark:"R",group:"DATA"}, PostgreSQL:{slug:"postgresql",color:"4169E1",mark:"PG",group:"DATA"}, MongoDB:{slug:"mongodb",color:"47A248",mark:"M",group:"DATA"},
  Docker:{slug:"docker",color:"2496ED",mark:"D",group:"INFRASTRUCTURE"}, Kubernetes:{slug:"kubernetes",color:"326CE5",mark:"K8s",group:"INFRASTRUCTURE"}, Linux:{slug:"linux",color:"FCC624",mark:"Lx",group:"INFRASTRUCTURE"}, "GitHub Actions":{slug:"githubactions",color:"2088FF",mark:"GA",group:"INFRASTRUCTURE"}, Prometheus:{slug:"prometheus",color:"E6522C",mark:"P",group:"OBSERVABILITY"}, Grafana:{slug:"grafana",color:"F46800",mark:"G",group:"OBSERVABILITY"},
};

function SkillCard({ name }: { name: string }) {
  const [failed, setFailed] = useState(false);
  const skill = marks[name];
  return <div className="group/skill flex w-[200px] min-h-[82px] shrink-0 items-center gap-4 rounded-xl border border-white/10 bg-white/[.035] p-4 transition-colors hover:border-violet-300/30 hover:bg-violet-300/[.06]">
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-white/10 bg-black/25 p-2">
      {failed ? <span className="font-mono text-[10px] font-bold text-violet-200">{skill.mark}</span> : <img src={skill.slug.startsWith("/") ? skill.slug : `https://cdn.simpleicons.org/${skill.slug}/${skill.color}`} alt="" loading="lazy" referrerPolicy="no-referrer" onError={() => setFailed(true)} className="h-full w-full object-contain"/>}
    </span>
    <span className="min-w-0"><span className="block truncate text-[13px] font-semibold text-zinc-200">{name}</span><span className="mt-1 block font-mono text-[9px] tracking-[.1em] text-zinc-600">{skill.group}</span></span>
  </div>;
}

export function SkillsCarousel() {
  const [paused, setPaused] = useState(false);
  return <div className="mt-10">
    <div className="mb-4 flex items-center justify-between gap-4"><div className="font-mono text-[10px] tracking-[.15em] text-zinc-500">SKILLS TOOLKIT <span className="ml-2 text-violet-300">{skills.length}</span></div><button type="button" aria-pressed={paused} aria-label={paused ? "Resume skills carousel" : "Pause skills carousel"} onClick={() => setPaused(!paused)} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] tracking-[.08em] text-zinc-400 transition hover:border-violet-300/30 hover:text-white">{paused ? "PLAY" : "PAUSE"}</button></div>
    <div className="skills-window overflow-hidden" aria-label="Skills carousel">
      <div className={`skills-track ${paused ? "is-paused" : ""}`}>
        {[0, 1].map((copy) => <div key={copy} className="skills-group" aria-hidden={copy === 1}>
          {skills.map((name) => <SkillCard key={`${copy}-${name}`} name={name}/>)}</div>)}
      </div>
    </div>
  </div>;
}
