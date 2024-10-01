/* eslint-disable @next/next/no-img-element */
"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { useEffect, useState } from "react";
import Link from "next/link";

const RecentProjects = () => {
  const [projectList, setProjectList] = useState(projects);

  useEffect(() => {
    // This is to simulate fetching data on the client side.
    // Ensure your data fetching mechanism is consistent between server and client
    setProjectList(projects);
  }, []);

  const getButtonColor = (status: string) => {
    if (status === "Active") {
      return "bg-[#17C964] text-[#020E07] py-2 px-3 rounded-xl text-sm";
    } else if (status === "Demo") {
      return "bg-[#9353D3] font-semibold text-[#FAF7FD] py-2 px-3 rounded-xl text-sm";
    } else if (status === "In Process") {
      return "bg-[#FFA500] text-white py-2 px-3 rounded-xl text-sm"; // Customize the color as needed
    }
  };

  return (
    <div className="py-36">
      <h1 className="heading text-white">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <ul className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projectList.map((item) => (
          <li key={item.id}>
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer title={item.title} href={item.link}>
                <Link
                  href={item.link}
                  target="_blank"
                  className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10"
                >
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <img src="/bg.png" alt="bgimg" />
                  </div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute h-full w-full bottom-0"
                  />
                </Link>
                <h1 className="flex justify-between font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                  {item.title}{" "}
                  <button
                    className={`py-2 px-3 rounded-xl text-sm ${getButtonColor(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </button>
                </h1>
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img src={icon} alt={`icon-${index}`} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentProjects;
