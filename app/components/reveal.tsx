"use client";
import { motion } from "framer-motion";
export function Reveal({children,delay=0,className=""}:{children:React.ReactNode;delay?:number;className?:string}){return <motion.div className={className} initial={{y:24}} whileInView={{y:0}} viewport={{once:true,amount:.12}} transition={{duration:.68,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}


