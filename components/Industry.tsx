"use client";

import {
  Truck,
  ShoppingCart,
  Factory,
  Snowflake,
  Car,
  Package,
} from "lucide-react";

const industries = [
  {
    icon: Truck,
    title: "Logistics & 3PL",
    description:
      "High-movement warehouses designed for cross-docking, fleet flow, and zero bottlenecks — keeping supply chains continuously active.",
    glow: true,
  },
  {
    icon: Package,
    title: "E-Commerce & Retail",
    description:
      "Engineered for rapid picking, sorting, and dispatch — supporting high-volume order cycles and peak demand scalability.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial",
    description:
      "Heavy-duty structures built to handle machinery, raw materials, and uninterrupted production flow.",
  },
  {
    icon: ShoppingCart,
    title: "FMCG & Consumer Goods",
    description:
      "Designed for high turnover environments — enabling faster movement, dense storage, and efficient distribution.",
  },
  {
    icon: Snowflake,
    title: "Cold Storage & Food",
    description:
      "Insulation-ready PEB construction for temperature control, hygiene compliance, and operational stability.",
  },
  {
    icon: Car,
    title: "Automotive & Engineering",
    description:
      "Large-span steel structures for bulky components, equipment storage, and integrated operations.",
  },
];

export default function Industry() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-black
        py-[110px]
      "
    >
      {/* Background Blur */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(255,0,0,0.18),transparent_45%)]
          opacity-80
        "
      />

      {/* Top Blur Strip */}
      <div
        className="
          absolute
          top-0
          left-0
          h-[180px]
          w-full
          bg-gradient-to-b
          from-white/10
          to-transparent
          blur-2xl
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1440px]
          px-6

          lg:px-16
        "
      >
        {/* Heading */}
        <div
          className="
            mb-[70px]
            text-center
          "
        >
          <h2
            className="
              font-manrope
              text-[52px]
              font-extrabold
              leading-[1.05]
              tracking-[-2px]
              text-white

              lg:text-[72px]
            "
          >
            Industry <span className="text-[#FF1E1E]">We Expertise</span>
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[1100px]

              font-manrope
              text-[18px]
              font-normal
              leading-[32px]
              text-white/80

              lg:text-[20px]
            "
          >
            As a leading warehouse construction company in Chennai, Mekark
            delivers fully integrated warehouse construction services.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            grid
            gap-8

            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <div
                key={index}
                className={`
                  relative
                  overflow-hidden
                  rounded-[20px]
                  border-b-2
                  border-black
                  bg-[#1A1A1A]
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#FF1E1E]

                  ${industry.glow ? "shadow-[0_0_80px_rgba(255,0,0,0.18)]" : ""}
                `}
              >
                {/* Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-[#FF1E1E]/10
                    via-transparent
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-500
                    hover:opacity-100
                  "
                />

                {/* Icon */}
                <div
                  className="
                    mb-7
                    flex
                    h-[72px]
                    w-[72px]
                    items-center
                    justify-center
                    rounded-[18px]
                    bg-[#FF1E1E]
                    shadow-[0_0_40px_rgba(255,0,0,0.35)]
                  "
                >
                  <Icon size={34} className="text-white" strokeWidth={2.3} />
                </div>

                {/* Title */}
                <h3
                  className="
    mb-4

    font-manrope
    text-[17px]
    font-bold
    leading-[22.1px]
    tracking-[0%]
    text-white
  "
                >
                  {industry.title}
                </h3>

                {/* Description */}
                <p
                  className="
    font-manrope
    text-[13.5px]
    font-normal
    leading-[20px]
    tracking-[0%]
    text-white/65
  "
                >
                  {industry.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
