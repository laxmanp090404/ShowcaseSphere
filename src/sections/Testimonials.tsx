import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import Card from "./Card";

const testimonials = [
  {
    name: "Mastan Sayyad",
    position: "Program Manager @ GirlScript Foundation",
    text: "Laxman was phenomenal in his opensource contribution in our Gssoc'24 extd. His contribution is reflected in his badges and . We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Bhavy Zala",
    position: "Handler @ Hacktoberfest",
    text: "Laxman's contribution was worth mentioning. His expertise in product development , bug handling and feature suggestion has exceeded our expectations.",
    avatar: memojiAvatar2,
  },
  {
    name: "Salim Rana",
    position: "Program manager @ Octanet Services",
    text: "During the internship period, Laxman has demonstrated exceptional dedication, enthusiasm and a strong willingness to learn.",
    avatar: memojiAvatar3,
  },
  {
    name: "Caroline Dudley",
    position: "Managing director @ Accenture North America",
    text:"Laxman Panjalingam demonstrated exceptional skills in project understanding, data analysis, and visualization during his tenure. I highly recommend him for his strong work ethic and commitment to delivering high-quality results.",
    avatar: memojiAvatar4,
  },
 
];

export const TestimonialsSection = () => {
  return <div className="py-16 lg:py-24">
    <div className="container">

    <SectionHeader eyebrow="Happy Clients" title="What Clients Say about Me" description="Don't just take my word for it. See what my clients have to say about my work."/>
    <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex gap-8 flex-none">
        {testimonials.map((testimonial)=>(
          <Card key={testimonial.name} className="max-w-xs md:p-8 p-6 md:max-w-md">
                <div className="flex gap-4 items-center">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <Image src={testimonial.avatar} alt={testimonial.name} className="max-h-full"/>
                  </div>
                  <div>
                    <div className="font-semibold">
                        {testimonial.name}
                    </div>
                    <div className="text-sm text-white/40">
                        {testimonial.position}
                    </div>
                  </div>
                </div>
                  <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>
            </Card> 
))}
</div>
</div>
    </div>
  </div>;
};
