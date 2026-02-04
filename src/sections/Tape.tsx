import StarIcon from "@/assets/icons/star.svg"
import { Fragment } from "react";

export const TapeSection = () => {
  const skills = [
    "Innovative",
    "Collaborative",
    "Efficient",
    "User-Centric",
    "Data-Driven",
    "Detail-Oriented",
    "Interactive",
    "Performant",
    "Results-Oriented"
  ];

  return <div className="py-16 lg:py-24 overflow-x-clip ">
    {/* gradientstrip */}
    <div className="gradientstrip  bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
      <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

        <div className="wordcont flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
          {[... new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {
                skills.map((skill) => (


                  <div key={skill} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{skill}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>

                ))
              }
            </Fragment>
          ))}

        </div>
      </div>
    </div>
  </div>;
};
