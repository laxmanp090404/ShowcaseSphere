import { PropsWithChildren } from 'react'

export const HeroOrbit = ({ children, size, rotation }: PropsWithChildren<{ size: number, rotation: number }>) => {
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
      {/* StarIcon placed based on flex and alignment */}
      <div
        className="flex justify-end items-start"
        style={{
          height: `${size}px`,
          width: `${size}px`,
        }}
      >
        <div className='inline-flex' style={{ transform: `rotate(-${rotation}deg)` }}>
          {children}
        </div>
      </div>
    </div>
  );
};
