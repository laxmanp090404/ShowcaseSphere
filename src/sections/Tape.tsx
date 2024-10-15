import StarIcon from "@/assets/icons/star.svg"

export const TapeSection = () => {
  const skills = [
    "Innovative",
    "Scalable",
    "Responsive",
    "Collaborative",
    "Efficient",
    "User-Centric",
    "Data-Driven",
    "Agile",
    "Secure",
    "Detail-Oriented",
    "Search Optimized",
    "Interactive",
    "Performant",
    "Results-Oriented"
  ];
  
  return <div className="py-16 ">
    {/* gradientstrip */}
    <div className="gradientstrip  bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip">
    <div className="flex">

    <div className="wordcont flex flex-none gap-4 py-3">
    {
      skills.map((skill) => ( 
        
        
        <div key={skill} className="inline-flex gap-4 items-center">
          <span className="text-gray-900 uppercase font-extrabold text-sm">{skill}</span>
          <StarIcon className ="size-6 text-gray-900"/>
        </div>
        
      ))
    }
    </div>
    </div>
    </div>
  </div>;
};
