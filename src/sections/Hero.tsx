import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from "@/assets/icons/star.svg"


export const HeroSection = () => {


  return <div className='py-28 md:py-44 lg:py-52 relative z-0 overflow-x-clip '>
    {/* grainy texture effect  */}
    <div  className="absolute inset-0 -z-30 opacity-5" style={{
      backgroundImage:`url(${grainImage.src})`
    }} ></div>
     {/* creating the custome ring  */}
    <div className='hero-ring size-[620px]'></div>
    <div className='hero-ring size-[820px]'></div>
    <div className='hero-ring size-[1020px]'></div>
    <div className='hero-ring size-[1220px]'></div>\
        {/* handle centre translate  */}
    <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  size-[800px]'>
          {/* handle rotation translate  */}
    <div className='absolute  border border-red-500 size-[800px]  animate-spin [animation-duration:30s]'>
    <div className='border border-red-500 inline-flex animate-spin [animation-duration:5s]'> 
  
      

      
        <StarIcon className = "size-28 text-emerald-300"/>
        </div>
        </div>
    </div>
    <div className='container'>
      <div className='flex flex-col items-center'>
        <Image src={memojiImage} className='size-[100px]' alt='Heroimage'/>
        <div className='bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
          <div className='bg-green-500 size-2.5 rounded-full'></div>
          <div className='text-sm font-medium'>Available for new projects</div>
        </div>
        </div>
        <div className='max-w-lg mx-auto'>

        <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 -tracking-normal'>Building the Future of Technology</h1>
        <p className='mt-4 text-center text-white/60 md:text-lg'> Welcome to my digital canvas, where data-driven insights and seamless technology solutions come to life.</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center  items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className="size-4"/>
          </button>
          <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl'>
            <span>
                🙌
            </span>
            <span className='font-semibold'>
              Let's Connect
            </span>
          </button>
        </div>
    </div>
  </div>;
};
