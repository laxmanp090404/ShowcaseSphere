"use client"
import Link from "next/link"
import { useState } from "react"

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
const Navbar = () => {
    const [open,setOpen] = useState(false)
    return (
        <header className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            {/* Logo */}
            <section className="">
                <Link className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center" href={"/"}>
                    <span className="text-white mr-1">laxman</span>
                    <span className="w-12 h-8 bg-white flex items-center justify-center rounded">.dev</span>
                </Link>
            </section>
            {/* Responsive menu */}
            <nav>
                {/* menu button */}
                <button className="w-10 h-8 flex flex-col justify-between  z-50 relative ">
                    
                        <div className="bg-white w-10 h-1 rounded"></div>
                        <div className="bg-white w-10 h-1 rounded"></div>
                        <div className="bg-white w-10 h-1 rounded"></div>
            
                </button>
                {/* button list */}
                <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
            {
                links.map((link)=>(
                    <Link key={link.title} href={link.url}>{link.title}</Link>
                ))
            }
                </div>
            </nav>
        </header>
    )
}

export default Navbar