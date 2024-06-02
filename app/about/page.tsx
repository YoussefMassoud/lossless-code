"use client";

import Footer from "@/components/Footer";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";

const About = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-center gap-12">
          <h1 className="mt-40 text-3xl font-bold text-blue-500 text-center">
            About Us
          </h1>

          <section className="content-wrapper  page more-page-active z-10 -mt-10 lg:mt-0 ">
            <div className="more-page flex flex-col row-gap-10 p-5 md:p-10">
              <div className="more-page__device-select"></div>
              <div className="more-page__terms-wrapper">
                <br />
                <div className="text-2xl text-[#88DFCF]">
                  <ul className="list-decimal pl-8">
                    <li className="mb-2">
                      <TextGenerateEffect
                        words="At [Company Name],"
                        className="text-start text-[25px] "
                      />
                      <p className="text-gray-400 text-sm">
                        we specialize in crafting cutting-edge web applications
                        empowered by Web 3.0 tools. Our mission is to
                        revolutionize the digital landscape by seamlessly
                        integrating modern interfaces with unparalleled
                        performance and sleek design aesthetics.
                      </p>
                    </li>

                    <li>
                      <TextGenerateEffect
                        words="Our Approach"
                        className="text-start text-[25px] "
                      />
                      <p className="text-gray-400 text-sm">
                        We pride ourselves on our commitment to innovation,
                        employing the latest advancements in technology to
                        deliver transformative solutions for our clients. With a
                        focus on user-centric design principles, we strive to
                        create immersive experiences that elevate user
                        engagement and satisfaction.
                      </p>
                    </li>
                    <li className="mb-2">
                      <TextGenerateEffect
                        words="Why Choose Us?"
                        className="text-start text-[25px] "
                      />
                      <p className="text-gray-400 text-sm">
                        - **Expertise**: Our team consists of seasoned
                        professionals with extensive experience in web
                        development and a deep understanding of Web 3.0
                        technologies. - **Performance**: We prioritize
                        performance optimization to ensure lightning-fast load
                        times and smooth functionality, providing users with a
                        seamless browsing experience. - **Design Excellence**:
                        From concept to execution, we adhere to the highest
                        standards of design excellence, crafting visually
                        stunning interfaces that captivate and inspire.
                      </p>
                    </li>
                    <li>
                      <TextGenerateEffect
                        words="Our Services"
                        className="text-start text-[25px] "
                      />{" "}
                      <p className="text-gray-400 text-sm">
                        - **Web Application Development**: Leveraging the power
                        of Web 3.0 tools, we design and develop custom web
                        applications tailored to meet the unique needs and
                        objectives of each client. - **UI/UX Design**: Our
                        dedicated team of designers specializes in creating
                        intuitive and visually compelling user interfaces,
                        enhancing usability and driving user engagement.
                        -**Performance Optimization**: We employ rigorous
                        performance optimization techniques to ensure optimal
                        speed, responsiveness, and reliability across all our
                        web applications.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
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
