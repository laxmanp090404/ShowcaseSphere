"use client"
import { motion, useScroll } from "framer-motion"
import Brain from "@/components/Brain"
import { useRef } from "react"

const About = () => {
  const continerRef = useRef();
  const {scrollYProgress} = useScroll({container:continerRef})
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0vh" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex" ref={continerRef}>
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-2/3 xl:w-1/2">
          {/* biography  */}
          <section className="flex flex-col  justify-center gap-12">
            <h1 className="font-bold text-2xl">Biography</h1>
            {/* biography description */}
            <p className="text-lg">
              hello
            </p>
            {/* Biography quote */}
            <span className="italic">
              da thambi
            </span>
            {/* biography sign svg*/}
            <div className="self-end">
              <svg width="185" height="77" viewBox="0 0 359 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M90 41C90.8849 73.076 94 105.13 94 137.222C94 145.925 93.2819 153.963 89.4445 161.944C86.5189 168.03 83.5981 174.024 77 176.556C65.0439 181.143 48.628 174.436 39.3333 167C32.5435 161.568 27.8901 153.509 23.8333 146C17.0191 133.386 11.2467 120.046 7.38889 106.222C3.71506 93.0576 -0.460113 76.7076 2.88889 63C7.944 42.3093 26.8385 23.2518 42.5 9.61112C52.5308 0.874602 69.843 0.655206 81.8889 3.66667C90.2037 5.74537 97.7707 10.0534 105.778 13C115.657 16.6356 126.104 19.3425 135.222 24.7778C148.37 32.6149 156.506 47.7072 163 61.0556C171.18 77.8697 170.487 89.9549 164.222 107.889C159.408 121.67 155.132 139.053 143.111 148.444C135.79 154.164 128.71 158.983 119 156.556C106.955 153.544 97.1768 142.177 88.7778 133.778C78.8232 123.823 75.9947 107.281 74.2222 93.8889C72.3438 79.6963 71 65.328 71 51C71 49.6539 70.3202 46.1359 72.2222 46C76.8984 45.666 80.4062 46.9891 83.9445 50.0556C94.1472 58.8979 94.4454 74.1222 94 86.4445C93.505 100.138 88.3073 113.214 84.5556 126.111C82.4686 133.285 79.1352 140.8 77.9445 147.944C77.8252 148.66 75.7898 150 75 150C73.65 150 72.4431 145.663 72 144.444C70.2177 139.543 70.7582 133.531 71 128.333C71.1162 125.836 73.1224 117.112 75.2222 115.222C78.6806 112.11 92.6821 126.256 96 128.389C103.58 133.262 106.053 129.663 111.778 123.222C116.435 117.982 118.271 111.231 121.222 105C122.205 102.926 120.063 95.9499 117.222 98.2222C112.736 101.811 108.587 111.698 113.444 116.556C117.006 120.118 119.477 113.321 121 110.444C121.533 109.438 122.958 106.104 123.944 105.611C124.856 105.156 124 107.648 124 108.667C124 112.068 124.371 115.129 125.556 118.333C129.032 127.741 132 103.498 132 100C132 96.3867 132.719 107.839 134.556 108.889C140.17 112.097 135.877 76.4755 139 103.111C141.769 126.725 144 150.234 144 174C144 179.555 135.858 171.34 135.056 169.333C133.449 165.317 132.008 152.424 134.556 148.056C143.35 132.98 162.536 117.278 155 96.5556C152.028 88.3814 155.749 106.35 157 109C158.045 111.214 157.796 114.098 159.5 110.5C160.901 107.542 160.667 104.927 161.667 101.889C163.253 97.0687 166 92.3948 166 87.2222C166 83.6296 166 94.4074 166 98C166 115.426 166 132.852 166 150.278C166 154.673 167.394 162.02 165.778 166.222C165.503 166.938 162.245 170.889 161.5 170.889C160.02 170.889 161.923 139.782 162 136C162.072 132.477 162.273 129.435 164.556 126.5C168.159 121.866 175.919 123.146 178.5 118.5C180.272 115.311 180.799 112.618 181 109C181.226 104.937 184.323 103.039 186.222 100C187.491 97.9702 195.727 101 193.333 101C188.226 101 187 104.246 187 109.5C187 113.707 191.595 116.539 194.222 112C195.405 109.956 197.513 107.93 197.944 105.556C198.619 101.843 198 105.14 198 107.444C198 109.755 196.593 117.113 200.556 117C204.143 116.897 207.479 108.523 207.944 105.5C208.062 104.739 207.388 100.521 209 101.222C214.506 103.616 219.351 106.409 222.556 111.444C223.531 112.977 225.586 112.853 224.833 115.111C223.755 118.345 219.154 121.237 216 122.222C211.841 123.522 210 125.929 210 119.556C210 117.717 209.892 115.837 210 114C210.134 111.714 212.601 115.745 213.5 115.944C216.075 116.517 215.991 113.465 216.667 111.889C219.231 105.905 222.818 100.457 225.5 94.5556C225.972 93.5169 226.915 93.0028 227.389 92.0556C227.789 91.256 225.601 92.3184 224.778 92.6667C220.983 94.2721 216.686 96.8914 214.889 100.778C210.002 111.344 221.662 111.813 228.056 107.611C229.204 106.856 230.677 105.65 231.444 104.444C231.999 103.573 231.242 101.118 232.222 101.444C234.785 102.299 234 112.021 234 114.222C234 116.86 236 108.952 236 107.444C236 101.416 236.016 102.028 238.5 106.5C241.498 111.897 236.659 97.383 239.444 96.2222C241.983 95.1646 246.667 96.0496 249.222 96.2222C258.534 96.8514 266.263 99.0289 274.222 104.056C282.598 109.346 290.721 116 301.111 116C306.8 116 307.863 110.933 312.556 109.056C317.221 107.189 321.038 105.082 326.222 105C336.475 104.837 346.746 105 357 105" stroke="#090909" stroke-width="3" stroke-linecap="round" />
              </svg>


            </div>
            {/* biography scroll svg*/}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </section>
          {/* Skills  */}
          <section className="flex flex-col  justify-center gap-12">
            {/* skill title */}
            <h1 className="font-bold text-2xl">Skills</h1>
            {/* skills list      */}
            <div className="flex flex-wrap gap-4 justify-start">
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                ShadCn
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Bootstrap
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDb
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Redux
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Spring Boot
              </div>

              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaFx
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML5
              </div><div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                css3
              </div>

            </div>
            {/* skill scroll svg  */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </section>
          {/* Experience section  */}
          <section className="flex flex-col  justify-center gap-12 pb-48">
            {/* Experience heading */}
            <h1 className="font-bold text-2xl">Experience</h1>
            {/* experiencelist  */}
            <div className="experiencelist">
            {/* Experience list 1  */}
            <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>    
           
              {/* EXPERIENCE LIST ITEM 2*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>
              {/* Experinece list 3*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>    
              
              {/* EXPERIENCE LIST ITEM 4*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>
              </div>
          </section>
        </div>
        {/* svg container  */}
        <div className="hidden lg:block w-1/3 xl:w-1/2">
        <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </motion.div>
  )
}

export default About