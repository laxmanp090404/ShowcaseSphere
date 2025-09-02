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
      emoji:"🧑‍🎨"
    }
    ,
    {
      title:"Reading",
      emoji:"📚"
    }
    ,
    {
      title:"Fitness",
      emoji:"🏋️‍♂️"
    }
    ,
    {
      title:"Anime",
      emoji:"🎥"
    }
    ,{
      title:"Socialising",
      emoji:"🤝"
    },
    {
      title:"Music",
      emoji:"🎵"
    },
    {
      title:"Outings",
      emoji:"🌄"
    }
  ]
  return (
  <div className="py-20 ">
    <div className="container">
    <SectionHeader eyebrow="About Me" title="A Glimpse into my World" description="Learn more about who I am.what I do , and what inspires me"/>
    <div className="cardcontainer mt-20">
      <Card className = "h-[320px]">
        <CardHeader title ="My Reads" description="Explore the books shaping my perspective." />
        
        <div className="w-40 mx-auto mt-8">
          <Image src={bookImage} alt="Book Cover" />
        </div>
      </Card>
      <Card>
        <CardHeader title="My Dev Arsenal" description="Explore the tools and technologies I use to build my products."/>
        
        <div>
          {toolBox.map((item)=>(
            <div key={item.title}>
              <TechIcon component={item.iconType}/>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </Card>
      <Card>
        <CardHeader title={"Beyond the code"} description={"How Do I Kill(USE) My Time"} />
       
        <div>
          {
            hobbies.map((hobby)=>(
              <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
            ))
          }
        </div>
      </Card>
      <Card>
          <Image src={MapImage} alt="Map" />
          <Image src={SmileEmoji} alt="Person" />
      </Card>
    </div>
  </div>
  </div>
    )
};
