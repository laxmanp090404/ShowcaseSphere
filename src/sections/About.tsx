import Image from "next/image";
import Card from "./Card";
import SectionHeader from "./SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import JavaScriptIcon from "@/assets/icons/square-js.svg"
import ReactIcon from "@/assets/icons/react.svg"
import CssIcon from "@/assets/icons/css3.svg"
import HtmlIcon from "@/assets/icons/html5.svg"
import TechIcon from "@/components/TechIcon";
import MapImage from "@/assets/images/location.png"
import SmileEmoji from "@/assets/images/memoji-smile.png"
import { title } from "process";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";
export const AboutSection = () => {

  const toolBox = [
   
    {
      title: "ReactJs",
      iconType:ReactIcon,
    },
    {
      title: "Tailwindcss",
      iconType:JavaScriptIcon,
    },
    {
      title: "MongoDB",
      iconType:JavaScriptIcon,
    },
    {
      title: "NodeJs",
      iconType:JavaScriptIcon,
    },
    {
      title: "ExpressJs",
      iconType:JavaScriptIcon,
    },
    {
      title: "JavaScript",
      iconType:JavaScriptIcon,
    },
    {
      title: "HTML5",
      iconType:HtmlIcon,
    },
    
    {
      title: "CSS3",
      iconType:CssIcon,
    },
  ]

  const hobbies = [
    {
      title:"Drawing",
      emoji:"🧑‍🎨",
      left:"5%",
      top:"5%",
    }
    ,
    
    {
      title:"Reading",
      emoji:"📚",
      left:"50%",
      top:"5%",
    }
    ,
    {
      title:"Anime",
      emoji:"🎥",
      left:"35%",
      top:"40%",
    }
    ,
    {
      title:"Fitness",
      emoji:"🏋️‍♂️",
      left:"10%",
      top:"35%",
    }
    ,{
      title:"Socialising",
      emoji:"🤝",
      left:"70%",
      top:"45%",
    },
    {
      title:"Music",
      emoji:"🎵",
      left:"5%",
      top:"65%",
    },
    {
      title:"Outings",
      emoji:"🌄",
      left:"45%",
      top:"70%",
    }
  ]
  return (
  <div className="py-20 lg:py-28">
    <div className="container">
    <SectionHeader eyebrow="About Me" title="A Glimpse into my World" description="Learn more about who I am.what I do , and what inspires me"/>
    <div className="cardcontainer mt-20 flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">

      <Card className = "h-[320px] md:col-span-2 lg:col-span-1">
        <CardHeader title ="My Reads" description="Explore the books shaping my perspective." />
        
        <div className="w-40 mx-auto mt-2 md:mt-0">
          <Image src={bookImage} alt="Book Cover" />
        </div>
      </Card>
      <Card className="h-[320px] md:col-span-3 lg:col-span-2">
        <CardHeader title="My Dev Arsenal" description="Explore the tools and technologies I use to build my products." 
        className=""/>
        
        <ToolBoxItems items={toolBox} className = ""/>
        <ToolBoxItems items={toolBox} className = "mt-6" itemsWrapperClassName = "-translate-x-1/2"/>
      </Card>
        </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
        <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
          <CardHeader title={"Beyond the code"} description={"How Do I Kill(USE) My Time"}
          className="px-6 py-6" />
          <div id="hobbiesparent" className="relative flex-1" >
            {
              hobbies.map((hobby)=>(
                <div key={hobby.title} className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                style={{
                  left:hobby.left,
                  top:hobby.top,
                }}>
                    <span className="font-medium text-gray-950 ">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </div>
              ))
            }
          </div>
        </Card>
        <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={MapImage} alt="Map"
            className="h-full w-full object-cover object-left-top"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400
            after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
            <Image src={SmileEmoji} alt="Person" className="size-20" />
            </div>
        </Card>
      </div>
    </div>
  </div>
  </div>
    )
};
