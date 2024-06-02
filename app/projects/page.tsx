"use client";

import Footer from "@/components/Footer";
import RecentProjects from "@/components/RecentProjects";

const project = () => {
  return (
    <main className="relative  bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default project;
