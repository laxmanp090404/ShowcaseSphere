import ArrowUprightIcon from '@/assets/icons/arrow-up-right.svg'
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    {
      title:"LinkedIn",
      href:"https://www.linkedin.com/in/laxman-panjalingam-4a5163260/",
    },
    {
      title:"Github",
      href:"https://github.com/laxmanp090404",
    },
    {
      title:"Resume",
      href:"https://docs.google.com/document/d/1TXKhhE71LXnxxNrAtruepUJk6A4xVBZJPa_ISA7GZig/edit?usp=sharing",
    },
    {
      title:"LeetCode",
      href:"https://leetcode.com/laxmanpanjalingam2004/",
    },
  ]
  return <footer className='relative  overflow-x-clip'>
    {/* <div className='absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10'></div> */}
  <div
        className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 -z-10"
        style={{
          maskImage:
            "radial-gradient(50% 50% at bottom center, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(50% 50% at bottom center, black, transparent)",
        }}
      ></div>
    <div className="container">
      <div className='border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8'>
        <div className='text-white/40'>&copy; {currentYear}. All Rights Reserved.</div>
        <nav className='flex flex-col md:flex-row items-center gap-8'>
          {footerLinks.map((link)=>(
          <a href={link.href} className='inline-flex items-center  gap-1.5 ' key={link.title} target="_blank" rel="noopener noreferrer"><span className='font-semibold'>{link.title}</span>
          <ArrowUprightIcon className="size-4"/>
          </a>
          ))}
        </nav>
      </div>
    </div>
  </footer>;
};
