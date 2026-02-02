import { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

export const HeroOrbit = ({ children, size, rotation , shouldOrbit = false,shouldSpin = false,spinDuration,orbitDuration }: PropsWithChildren<{ size: number, rotation: number ,shouldOrbit?:boolean,shouldSpin?:boolean,spinDuration?:string,orbitDuration?:string }>) => {
  return (
    <div
      className="absolute left-0 right-0 top-0 bottom-0 mx-auto"
      style={{ 
        height: `${size}px`,
        width: `${size}px`,  // Making it an oval by adjusting width
        transform: `rotate(${rotation}deg)`,  // Rotation for orbit
        // border:"2px solid red",
        position: "absolute",
        zIndex: -1,  // Ensure it is behind the content
      }}
    >
      <div className={twMerge(shouldOrbit === true && 'animate-spin')} style={{
        animationDuration:orbitDuration
      }}>

      {/* StarIcon placed based on flex and alignment */}
      <div
        className="flex justify-end items-start"
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
        >
          <div className={twMerge(shouldSpin === true && "animate-spin")} style={{
            animationDuration:spinDuration
          }}>
        <div className='inline-flex' style={{ transform: `rotate(-${rotation}deg)` }}>
          {children}
        </div>
      </div>
      </div>
        </div>
    </div>
  );
};
