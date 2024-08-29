import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Header/>
      <HeroSection/>
    </div>
  );
}
