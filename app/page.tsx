"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      <main className="h-[calc(100vh-6rem)] w-full flex flex-col justify-between lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
        {/* Image container */}
        <section className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero1.png"
            alt="heroimage"
            fill
            className="object-contain"
            
          />
        </section>
        {/* Text container */}
        <section className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <p className="text-4xl md:text-6xl font-bold">
            Transforming Data into Insights, Building the Future of Technology
          </p>
          {/* description */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where data-driven insights and seamless technology solutions come to life.
          </p>
          {/* buttons */}
          <div className="buttons w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
            <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
          </div>
        </section>
      </main>
    </motion.div>
  );
}
