
import Image from "next/image";
import CheckIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import wastewiseImage from '@/assets/images/wastewise2.png'
import bookstoreImage from '@/assets/images/bookstore.png'
import estatemanagementImage from '@/assets/images/estatemanagement.png'
import SectionHeader from "./SectionHeader";
import Card from "./Card";
const portfolioProjects = [
  {
    company: "ESTATEEASE",
    year: "2024",
    title: "Estate Booking Application",
    results: [
      { title: "Realtime chatting with the renter" },
      { title: "Advanced Filtering Options" },
      { title: "Integrated Realtime Map for Better UX" },
    ],
    link: "https://github.com/laxmanp090404/Estateease",
    image: estatemanagementImage,
  },
  {
    company: "WASTEWISE",
    year: "2024",
    title: "Facility Management System",
    results: [
      { title: "Booking garbage stations with admin controls" },
      { title: "Real-time notifications regarding garbage collection" },
      { title: "Leaflet integration for location display" },
    ],
    link: "https://github.com/laxmanp090404/WasteWise_Advanced",
    image: wastewiseImage,
  },
  {
    company: "BOOKHAVEN",
    year: "2024",
    title: "Ecommerce Bookstore Application",
    results: [
      { title: "Secure authentication with JWT and Cookies" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://book-store-rust-eight.vercel.app",
    image: bookstoreImage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:pb-24">
      <div className="container">
        <SectionHeader eyebrow=" Testimony of My Skills" title=" Featured Projects" description=" See how I transformed Ideas into engaging digital experiences"/>
        <div className="proj-container flex flex-col mt-10 md:mt-20 gap-20">
          {
          portfolioProjects.map((proj) => (
            
            <Card
              key={proj.title}
              className="p-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
               
               <div className="largescreen lg:grid lg:grid-cols-2 lg:gap-16">
<div className="col1 lg:pb-16">

                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text ">
                <span>{proj.company}</span>
                <span>&bull;</span>
                <span>{proj.year}</span>
         
              </div>
              <h3 className="font-serif  text-2xl md:mt-5 md:text-4xl mt-2">{proj.title}</h3>
              <hr  className="border-t-2 border-white/5 mt-4"/>
             
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                
                {proj.results.map((res) => (
                  <li key={res.title} className="flex gap-2 text-sm md:text-base text-white/50 ">
                    <CheckIcon className="size-5 md:size-6 text-emerald-300" /> 
                    <span>{res.title}</span>
                    </li>

))}
              </ul>
              <a href={proj.link}>
                
                <button className="bg-white text-gray-950 h-12 w-full md:w-auto md:px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"><span>Visit Live Site</span><ArrowUpRightIcon className="size-4"/></button>
              </a>
</div>
<div className="col2 relative">

              <Image src={proj.image} alt={proj.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-t-xl"/>
</div>
            </div>
          </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
