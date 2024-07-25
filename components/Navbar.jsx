"use client"
import Image from "next/image"
import Link from "next/link"
import path from "path"
import { useState } from "react"
import Navlink from "./Navlink"
const links = [
    {
        url:"/",title:"Home"
    },
    {
        url:"/about",title:"About"
    },
    {
        url:"/portfolio",title:"Portfolio"
    },
    {
        url:"/contact",title:"Contact"
    },
]

const sociallinks = [{
    path:"/github.png",
    url:"https://github.com/laxmanp090404"
},{
    path:"/linkedin.png",
    url:"https://www.linkedin.com/in/laxman-panjalingam-4a5163260"
},{
    path:"/leetcode.png",
    url:"https://leetcode.com/laxmanpanjalingam2004"
},{
    path:"/codeforces.png",
    url:"https://codeforces.com/profile/laxmanpanjalingam2004"
},{
    path:"/instagram.png",
    url:"https://tailwindcss.com/docs/responsive-design"
}]
const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <header className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            {/* non mobile menu */}
            <nav className="mediumscreenmenu hidden md:flex gap-4 w-1/3">
              {
                links.map((link)=>(
                   <Navlink key={link.title} link={link}/>
                ))
              }
            </nav>

            {/* Logo */}
            <section className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                <Link className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center" href={"/"}>
                    <span className="text-white mr-1">laxman</span>
                    <span className="w-12 h-8 bg-white flex items-center justify-center rounded">.dev</span>
                </Link>
            </section>

            {/* Socials */}
            <section className=" hidden md:flex gap-4 items-center w-1/3">
                {
                    sociallinks.map((link)=>(
                        <Link href={link.url} key={link.path}>
                            <Image src={link.path} width={24} height={24}/>
                        </Link>
                    ))
                }

            </section>
            {/* Responsive menu */}
            <nav className="md:hidden">
                {/* menu button */}
                <button onClick={()=>setOpen(!open)} className="w-10 h-8 flex flex-col justify-between  z-50 relative ">
                    
                        <div className="bg-white w-10 h-1 rounded"></div>
                        <div className="bg-white w-10 h-1 rounded"></div>
                        <div className="bg-white w-10 h-1 rounded"></div>
            
                </button>
                {/* menu list */}
                {
                    open && (
                        <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
                        {
                            links.map((link)=>(
                                <Link key={link.title} href={link.url}>{link.title}</Link>
                            ))
                        }
                            </div>
                    )
                }
               
            </nav>
        </header>
    )
}

export default Navbar