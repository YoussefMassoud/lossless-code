"use client";

import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <div className="z-10" /> 
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
