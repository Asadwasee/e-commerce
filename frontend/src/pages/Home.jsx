import { useEffect, useState } from "react";
import Background from "../component/Background";
import Hero from "../component/Hero";
import Product from "./Product";
import OurPolicy from "../component/OurPolicy";
import NewLetterBox from "../component/NewLetterBox";
import Footer from "../component/Footer";



function Home() {
  let heroData=[
{text1: "30% OFF Limited Offer", text2: "Style that"},
  { text1: "Dress to Impress", text2: "Style That Turns Heads" },
  { text1: "Confidence in Every Stitch", text2: "Feel the Fashion" },
  { text1: "New Arrivals. New You.", text2: "Step into Style" }
]

  let [heroCount, setHeroCount] = useState(0);

  useEffect(()=>{
    let interval = setInterval(() => {
      setHeroCount(prevCount => (prevCount ===3 ? 0 : prevCount + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="overflow-x-hidden relative top-[70px]">
      <div className="w-full h-screen bg-black flex flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-[40%] h-[50vh] md:h-full flex items-center justify-center">
          <Hero heroCount={heroCount} setHeroCount={setHeroCount} heroData={heroData[heroCount]} />
        </div>
        <div className="w-full md:w-[60%] h-[50vh] md:h-full flex items-center justify-center">
          <Background heroCount={heroCount} />
        </div>
      </div>
      <Product />
      <OurPolicy />
      <NewLetterBox />
      <Footer />
    </div>
  )
}

export default Home