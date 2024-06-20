/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Yasser Abdalla",
    designation: "Software Engineer",
    image: "/yasser.jpg",
  },
];
const people2 = [
  {
    id: 1,
    name: "Yousef Amir",
    designation: "Software Engineer",
    image: "/amir.jpg",
  },
];

const About = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-center gap-12">
          <h1 className="mt-40 text-3xl font-bold text-blue-500 text-center">
            About Us
          </h1>

          <section className="content-wrapper  page more-page-active z-10 -mt-10 lg:mt-0 ">
            <div className="more-page flex flex-col row-gap-10 p-5 md:p-10">
              <div className="flex lg:flex-row flex-col gap-3 w-full">
                <div className="flex flex-col gap-4">
                  <div className="flex">
                    <AnimatedTooltip items={people} />
                    <AnimatedTooltip items={people2} />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h1 className="text-blue-500 text-2xl font-medium">
                      Founders of Lossless Code
                    </h1>
                    <h1 className="font-light text-gray-300 ml-2">
                      We are passionate software engineers and the founders of
                      Lossless Code, a dynamic startup dedicated to
                      revolutionizing the way software is developed and
                      deployed. With a strong focus on JavaScript and its
                      associated technologies, we aim to deliver high-quality,
                      scalable solutions that push the boundaries of what's
                      possible in web development.
                    </h1>
                    <li className="font-thin ml-4 ">
                      <span className="font-medium">
                        Expertise in JavaScript:
                      </span>{" "}
                      We leverage the power of JavaScript to build robust and
                      efficient web applications. Our expertise spans across
                      various frameworks and libraries, ensuring that we can
                      tackle any challenge in the software development
                      lifecycle.
                    </li>
                    <li className="font-thin ml-4 ">
                      <span className="font-medium">Innovative Solutions:</span>{" "}
                      At Lossless Code, we are committed to creating innovative
                      solutions that address real-world problems. Our projects
                      are designed to enhance user experiences, streamline
                      processes, and deliver exceptional performance.
                    </li>
                    <li className="font-thin ml-4 ">
                      <span className="font-medium">Dedicated Team:</span> As
                      software engineers, we bring a wealth of experience and a
                      deep understanding of the latest industry trends. Our team
                      is dedicated to continuous learning and improvement,
                      ensuring that we stay ahead of the curve in the
                      ever-evolving tech landscape.
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <TextGenerateEffect
              words=" Get in Touch Ready to take your web presence to the next level?
                    Contact us today to learn more about how we can help you achieve your
                    digital goals."
              className="text-start text-[25px] "
            />
          </section>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default About;
