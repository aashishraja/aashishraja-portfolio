import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeHero from "./components/HomeHero";


export default function Home() {
  return (
    <div className="h-[100vh] bg-secondary flex">
      <div className="flex flex-1 flex-col">
        <Navbar/>
        <HomeHero/>

      </div>
    </div>
  );
}
