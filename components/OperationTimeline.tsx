"use client";

const STEPS = [
  {
    number: "01",
    title: "Feasibility Analysis",
    description: "Requirement assessment & site evaluation",
  },
  {
    number: "02",
    title: "Custom Design",
    description: "Tailored warehouse layout for your operations",
  },
  {
    number: "03",
    title: "PEB Fabrication",
    description: "100% in-house manufacturing, controlled quality",
  },
  {
    number: "04",
    title: "Civil Execution",
    description: "Foundations, flooring & structural work",
  },
  {
    number: "05",
    title: "Quality Validation",
    description: "Inspection, installation & compliance checks",
  },
  {
    number: "06",
    title: "120-Day Delivery",
    description: "Operational handover, ready to run",
  },
];

export default function OperationTimeline() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F5F5F5]
      "
    >
      <div
        className="
          mx-auto
          max-w-[1440px]

          px-5
          py-16

          sm:px-8
          sm:py-20

          lg:px-16
          lg:py-24
        "
      >
        {/* HEADING */}
        <div className="text-center">
          <h2
            className="
              font-manrope
              text-[42px]
              font-bold
              leading-[44px]
              tracking-[-2px]
              text-black

              sm:text-[58px]
              sm:leading-[58px]

              lg:text-[72px]
              lg:leading-[74px]
            "
          >
            From Idea to Operation
          </h2>

          <p
            className="
              mt-2

              font-manrope
              text-[28px]
              font-bold
              leading-none
              text-[#C4161C]

              sm:text-[40px]

              lg:text-[48px]
            "
          >
            Fully Managed
          </p>
        </div>

        {/* DESKTOP TIMELINE */}
        <div
          className="
            relative
            mt-24

            hidden

            lg:block
          "
        >
          {/* LINE */}
          <div
            className="
              absolute
              left-0
              right-0
              top-[52px]
              h-[2px]
              bg-[#E79A9C]
            "
          />

          {/* MOVING ACTIVE LINE */}
          <div
            className="
    absolute
    left-0
    right-0
    top-[44px]
    z-20
    overflow-hidden
  "
          >
            <div
              className="
      timeline-glow

      h-[14px]
      w-[50px]

      rounded-full

      bg-[#ED2024]

      blur-[12px]
    "
            />
          </div>

          {/* STEPS */}
          <div
            className="
              grid
              grid-cols-6
              gap-4
            "
          >
            {STEPS.map((step) => (
              <div
                key={step.number}
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                {/* CIRCLE */}
                <div
                  className="
                    relative
                    z-10

                    flex
                    h-[108px]
                    w-[108px]
                    items-center
                    justify-center

                    rounded-full
                    border-[3px]
                    border-[#D9D9D9]

                    bg-[#F5F5F5]
                  "
                >
                  <span
                    className="
    text-center

    font-manrope
    text-[22px]
    font-extrabold
    leading-[100%]
    tracking-[0px]
    text-[#8F8F8F]
  "
                  >
                    {step.number}
                  </span>
                </div>

                {/* TITLE */}
                <h3
                  className="
                    mt-8

                    font-manrope
                    text-[18px]
                    font-bold
                    leading-[26px]
                    text-[#111111]
                  "
                >
                  {step.title}
                </h3>

                {/* DESC */}
                <p
                  className="
                    mt-3
                    max-w-[220px]

                    font-manrope
                    text-[14px]
                    font-normal
                    leading-[24px]
                    text-[#8C8C8C]
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE TIMELINE */}
        <div
          className="
            mt-14

            flex
            flex-col
            gap-8

            lg:hidden
          "
        >
          {STEPS.map((step, index) => (
            <div
              key={step.number}
              className="
                relative
                flex
                gap-5
              "
            >
              {/* LEFT */}
              <div
                className="
                  relative
                  flex
                  flex-col
                  items-center
                "
              >
                {/* LINE */}
                {index !== STEPS.length - 1 && (
                  <div
                    className="
                      absolute
                      top-[72px]
                      h-full
                      w-[2px]
                      bg-[#E79A9C]
                    "
                  />
                )}

                {/* CIRCLE */}
                <div
                  className="
                    relative
                    z-10

                    flex
                    h-[72px]
                    w-[72px]
                    items-center
                    justify-center

                    rounded-full
                    border-2
                    border-[#D9D9D9]

                    bg-white
                  "
                >
                  <span
                    className="
                      font-manrope
                      text-[24px]
                      font-bold
                      text-[#8F8F8F]
                    "
                  >
                    {step.number}
                  </span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="pt-3">
                <h3
                  className="
                    font-manrope
                    text-[20px]
                    font-bold
                    leading-[28px]
                    text-black
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[280px]

                    font-manrope
                    text-[15px]
                    font-normal
                    leading-[24px]
                    text-[#8C8C8C]
                  "
                >
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM TEXT */}
        <div
          className="
            mt-20
            text-center

            lg:mt-28
          "
        >
          <p
            className="
              font-manrope
              text-[28px]
              font-semibold
              leading-[40px]
              text-[#8F8F8F]

              sm:text-[36px]

              lg:text-[52px]
              lg:leading-[64px]
            "
          >
            No follow-ups. No uncertainty.{" "}
            <span className="text-black">Just results.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
