"use client"

//since we can use animatepresence only in
// a client component we cant use layout
//this is because if layout is declared as client 
//then it cant use server props like metadata 
//so this is our new layout
import { AnimatePresence, delay } from "framer-motion"
import Navbar from "@/components/Navbar"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

const Transitionprovider = ({children}) => {
    const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
    <div key={pathname} className="w-screen min-h-screen bg-gradient-to-b from-blue-100 to-red-100 ">
        <motion.div className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
        animate={{height:"0vh"}}
        exit={{height:"120vh"}}
        transition={{duration:0.5,ease:"easeOut"}}>
        </motion.div>
         <motion.div className="fixed top-0 bottom-0 left-0 right-0 m-auto text-8xl text-white  z-50 cursor-default w-fit h-fit"
         exit={{opacity:0}}
         initial={{opacity:1}}
         animate={{opacity:0}}
         transition={{duration:0.8,ease:"easeOut"}}>
            {pathname==="/"?"Home":pathname.charAt(1).toUpperCase()+pathname.substring(2)}
         </motion.div>
        <motion.div className="h-screen w-screen fixed bg-black rounded-t-[100px] z-40 bottom-0"
        initial={{height:"120vh"}}
        animate={{height:"0vh",transition:{delay:0.5}}}
        >
        </motion.div>

        <div className="h-24">
        <Navbar/>
        </div>
        <div className=" min-h-[calc(100vh-6rem)]">
        {children}
        </div>
        
        </div>
        
    </AnimatePresence>
  )
}

export default Transitionprovider