"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

const projects = [
  {
    id: "01",
    title: "Manufacturing Hub",
    location: "Chennai • Heavy-Duty PEB",
    image: "/Images/1.png",
  },
  {
    id: "02",
    title: "Auto Components Storage",
    location: "Sriperumbudur • Wide-Span",
    image: "/Images/2.png",
  },
  {
    id: "03",
    title: "E-commerce Fulfilment",
    location: "Coimbatore • 150,000 Sq.Ft",
    image: "/Images/3.png",
  },
  {
    id: "04",
    title: "Industrial Warehouse",
    location: "Hosur • Logistics Zone",
    image: "/Images/4.png",
  },
];

export default function CompletedProjects() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const amount = window.innerWidth < 768 ? 320 : 420;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="
        overflow-hidden
        bg-black
        py-[70px]

        md:py-[90px]
        lg:py-[110px]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1600px]
          px-5

          sm:px-8
          lg:px-16
        "
      >
        {/* Top Section */}
        <div
          className="
            mb-12

            flex
            flex-col
            gap-8

            lg:mb-16
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* Left */}
          <div>
            <div
              className="
                mb-5
                flex
                items-center
                gap-3
              "
            >
              <div
                className="
                  h-[2px]
                  w-[22px]
                  bg-[#FF1E1E]
                "
              />

              <span
                className="
                  font-manrope
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[4px]
                  text-[#FF1E1E]
                "
              >
                Completed Projects
              </span>
            </div>

            <h2
              className="
                font-manrope
                text-[42px]
                font-bold
                leading-[1.05]
                tracking-[-2px]
                text-white

                md:text-[62px]
                lg:text-[78px]
              "
            >
              Built for performance.
            </h2>

            <h3
              className="
                mt-1

                font-manrope
                text-[38px]
                font-light
                leading-[1.05]
                tracking-[-2px]
                text-[#FF1E1E]

                md:text-[56px]
                lg:text-[72px]
              "
            >
              Proven on ground.
            </h3>
          </div>

          {/* Arrows */}
          <div
            className="
              hidden
              items-center
              gap-3

              lg:flex
            "
          >
            <button
              onClick={() => scroll("left")}
              className="
                flex
                h-[64px]
                w-[64px]
                items-center
                justify-center

                border
                border-white/20

                transition-all
                duration-300

                hover:border-[#FF1E1E]
                hover:bg-[#FF1E1E]
              "
            >
              <ArrowLeft size={22} className="text-white" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="
                flex
                h-[64px]
                w-[64px]
                items-center
                justify-center

                border
                border-white/20

                transition-all
                duration-300

                hover:border-[#FF1E1E]
                hover:bg-[#FF1E1E]
              "
            >
              <ArrowRight size={22} className="text-white" />
            </button>
          </div>
        </div>

        {/* Projects Slider */}

        <div
          ref={scrollRef}
          className="
  flex
  gap-5
  overflow-x-auto
  scroll-smooth

  scrollbar-hide
  [-ms-overflow-style:none]
  [scrollbar-width:none]

  [&::-webkit-scrollbar]:hidden
"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                relative
                min-w-[300px]
                flex-shrink-0

                md:min-w-[380px]
                lg:min-w-[420px]
              "
            >
              {/* Image */}
              <div
                className="
                  relative
                  overflow-hidden
                  bg-[#111]
                "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    h-[460px]
                    w-full
                    object-cover

                    transition-transform
                    duration-700

                    group-hover:scale-105

                    md:h-[560px]
                    lg:h-[680px]
                  "
                />

                {/* Overlay */}
                <div
                  className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black
                    via-black/20
                    to-transparent
                  "
                />

                {/* Live Project */}

                {/* <div
                  className="
                    absolute
                    left-5
                    top-5

                    flex
                    items-center
                    gap-2

                    bg-white
                    px-4
                    py-2
                  "
                >
                  <div
                    className="
                      h-[6px]
                      w-[6px]
                      rounded-full
                      bg-[#FF1E1E]
                    "
                  />

                  <span
                    className="
                      font-manrope
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[3px]
                      text-black
                    "
                  >
                    Live Project
                  </span>
                </div> */}

                {/* Bottom Content */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-full
                    p-6

                    md:p-8
                  "
                >
                  <p
                    className="
                      mb-3

                      font-manrope
                      text-[12px]
                      font-semibold
                      uppercase
                      tracking-[3px]
                      text-[#FF1E1E]
                    "
                  >
                    / {project.id}
                  </p>

                  <h3
                    className="
                      font-manrope
                      text-[28px]
                      font-bold
                      leading-[1.1]
                      text-white

                      md:text-[34px]
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-2

                      font-manrope
                      text-[14px]
                      font-normal
                      text-white/60

                      md:text-[16px]
                    "
                  >
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Arrows */}
        <div
          className="
            mt-10
            flex
            items-center
            justify-center
            gap-3

            lg:hidden
          "
        >
          <button
            onClick={() => scroll("left")}
            className="
              flex
              h-[54px]
              w-[54px]
              items-center
              justify-center

              border
              border-white/20

              transition-all
              duration-300

              hover:border-[#FF1E1E]
              hover:bg-[#FF1E1E]
            "
          >
            <ArrowLeft size={20} className="text-white" />
          </button>

          <button
            onClick={() => scroll("right")}
            className="
              flex
              h-[54px]
              w-[54px]
              items-center
              justify-center

              border
              border-white/20

              transition-all
              duration-300

              hover:border-[#FF1E1E]
              hover:bg-[#FF1E1E]
            "
          >
            <ArrowRight size={20} className="text-white" />
          </button>
        </div>
      </div>
      <section
        className="
    relative
    overflow-hidden
    bg-black
    py-[70px]

    md:py-[90px]
    lg:py-[110px]
  "
      >
        {/* Red Glow */}
        <div
          className="
      absolute
      left-[-200px]
      top-[-120px]

      h-[500px]
      w-[500px]

      rounded-full
      bg-[#FF1E1E]/20
      blur-[140px]
    "
        />

        <div
          className="
      relative
      z-10
      mx-auto
      flex
      max-w-[1440px]
      flex-col
      items-start
      justify-between
      gap-10

      px-5

      sm:px-8

      lg:flex-row
      lg:items-center
      lg:px-16
    "
        >
          {/* Left Content */}
          <div className="max-w-[820px]">
            <h2
              className="
          font-manrope
          text-[38px]
          font-bold
          leading-[1.08]
          tracking-[0px]
          text-white

          md:text-[50px]
          md:leading-[48px]
        "
            >
              Every month of delay ={" "}
              <span className="text-[#FF1E1E]">lost revenue</span>
              <br />
              <span className="text-[#FF1E1E]">& higher costs.</span>
            </h2>

            <p
              className="
          mt-8
          max-w-[760px]

          font-manrope
          text-[18px]
          font-light
          leading-[28px]
          tracking-[0%]
          text-white/70
        "
            >
              Lock your execution timeline with a trusted warehouse building
              contractor in Chennai.
            </p>
          </div>

          {/* CTA Button */}
          <Link href="#enquiry-form">
            <button
              className="
      flex
      h-[76px]
      items-center
      justify-center

      rounded-[14px]
      bg-white

      px-8

      font-manrope
      text-[20px]
      font-bold
      text-[#D51919]

      transition-all
      duration-300

      hover:scale-[1.03]
      hover:bg-[#FF1E1E]
      hover:text-white

      md:min-w-[440px]
    "
            >
              Get Cost & Timeline Blueprint
              <span className="ml-4 text-[28px]">→</span>
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
}
