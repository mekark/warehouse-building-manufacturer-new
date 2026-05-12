"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const FAQS = [
  {
    question:
      "Why choose Mekark as a warehouse building contractor in Chennai?",
    answer:
      "We offer complete control — from design to delivery — ensuring faster execution and zero dependency on third-party vendors. Our in-house 6 lakh sq.ft facility is the backbone of this model.",
  },
  {
    question: "Do you provide turnkey warehouse construction?",
    answer:
      "Yes. We handle design, engineering, fabrication, civil execution, and project delivery under one integrated execution model.",
  },
  {
    question: "What is PEB warehouse construction?",
    answer:
      "PEB stands for Pre-Engineered Building — a faster and more efficient construction approach for industrial and warehouse projects.",
  },
  {
    question: "How fast can you complete a warehouse project?",
    answer:
      "Most warehouse projects are delivered within a 120-day fast-track execution timeline depending on project scale.",
  },
  {
    question: "Do you operate across Tamil Nadu and India?",
    answer:
      "Yes. We execute warehouse and industrial infrastructure projects across Tamil Nadu and multiple locations across India.",
  },
  {
    question: "Can you customize warehouse design for our operations?",
    answer:
      "Absolutely. Our layouts are tailored for logistics flow, storage systems, automation requirements, and operational efficiency.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      className="
        overflow-hidden
        bg-[#F5F5F5]
      "
    >
      {/* TESTIMONIAL */}
      <div
        className="
          relative
          border-b
          border-[#E4E4E4]
        "
      >
        <div
          className="
            mx-auto
            max-w-[1440px]

            px-5
            py-16

            sm:px-8

            lg:px-16
            lg:py-24
          "
        >
          {/* QUOTE MARK */}
          <div
            className="
              absolute
              left-0
              top-0

              font-manrope
              text-[180px]
              font-extrabold
              leading-none
              text-[#F0DCDC]

              lg:text-[240px]
            "
          >
            “
          </div>

          <div
            className="
              relative
              z-10
              max-w-[980px]
            "
          >
            {/* LABEL */}
            <div
              className="
                mb-5
                flex
                items-center
                gap-2
              "
            >
              <div
                className="
                  h-[2px]
                  w-[26px]
                  bg-[#ED2024]
                "
              />

              <span
                className="
                  font-manrope
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-[#ED2024]
                "
              >
                What Business Leaders Say
              </span>
            </div>

            {/* QUOTE */}
            <h2
              className="
                font-manrope
                text-[34px]
                font-extrabold
                leading-[38px]
                tracking-[-1px]
                text-black

                sm:text-[48px]
                sm:leading-[52px]

                lg:text-[64px]
                lg:leading-[66px]
              "
            >
              “Mekark delivered{" "}
              <span className="text-[#ED2024]">ahead of schedule</span>
              <br />
              with complete control over quality and execution. Their{" "}
              <span className="font-light text-[#8F8F8F]">
                in-house capability
              </span>{" "}
              is a major advantage.”
            </h2>

            {/* AUTHOR */}
            <div
              className="
                mt-10
                flex
                items-center
                gap-4
              "
            >
              <div
                className="
                  flex
                  h-[56px]
                  w-[56px]
                  items-center
                  justify-center

                  rounded-sm
                  bg-[#ED2024]

                  font-manrope
                  text-[18px]
                  font-bold
                  text-white
                "
              >
                OH
              </div>

              <div>
                <p
                  className="
                    font-manrope
                    text-[16px]
                    font-bold
                    text-black
                  "
                >
                  Operations Head
                </p>

                <p
                  className="
                    mt-1

                    font-manrope
                    text-[14px]
                    font-normal
                    text-[#8B8B8B]
                  "
                >
                  Logistics Company
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT QUOTE */}
          <div
            className="
              absolute
              bottom-0
              right-10

              hidden

              font-manrope
              text-[180px]
              font-extrabold
              leading-none
              text-[#F0DCDC]

              lg:block
            "
          >
            ”
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div
        className="
          relative
          mx-auto
          max-w-[1440px]

          px-5
          py-16

          sm:px-8

          lg:px-16
          lg:py-24
        "
      >
        <div
          className="
            grid
            gap-14

            lg:grid-cols-[520px_1fr]
            lg:gap-20
          "
        >
          {/* LEFT IMAGE */}
          <div
            className="
    relative

    hidden

    overflow-visible

    lg:block
  "
          >
            <div
              className="
      absolute
      left-[-520px]
      top-[-140px]

      h-[980px]
      w-[1180px]

      xl:left-[-460px]
      xl:w-[1240px]
    "
            >
              <img
                src="/Images/FAQ 1.png"
                alt="FAQ Illustration"
                className="
        h-full
        w-full
        object-contain
        object-left-top
      "
              />
            </div>
          </div>

          {/* RIGHT FAQ */}
          <div>
            {/* LABEL */}
            <div
              className="
                mb-6
                flex
                items-center
                gap-2
              "
            >
              <div
                className="
                  h-[2px]
                  w-[26px]
                  bg-[#ED2024]
                "
              />

              <span
                className="
                  font-manrope
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[3px]
                  text-[#ED2024]
                "
              >
                FAQ
              </span>
            </div>

            {/* FAQ ITEMS */}
            <div className="space-y-1">
              {FAQS.map((faq, index) => {
                const isActive = active === index;

                return (
                  <div
                    key={faq.question}
                    className="
                      border-b
                      border-[#E3E3E3]
                    "
                  >
                    {/* BUTTON */}
                    <button
                      onClick={() => setActive(isActive ? -1 : index)}
                      className="
                        flex
                        w-full
                        items-center
                        justify-between
                        gap-5

                        py-7
                        text-left
                      "
                    >
                      <span
                        className={`
                          font-manrope
                          text-[18px]
                          leading-[30px]

                          ${
                            isActive
                              ? "font-bold text-[#ED2024]"
                              : "font-semibold text-black"
                          }
                        `}
                      >
                        {faq.question}
                      </span>

                      <div
                        className={`
                          flex
                          h-[34px]
                          w-[34px]
                          shrink-0
                          items-center
                          justify-center

                          rounded-full

                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "bg-[#ED2024] text-white"
                              : "bg-[#EFEFEF] text-[#8F8F8F]"
                          }
                        `}
                      >
                        {isActive ? (
                          <X className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </div>
                    </button>

                    {/* CONTENT */}
                    <div
                      className={`
                        overflow-hidden
                        transition-all
                        duration-500

                        ${
                          isActive
                            ? "max-h-[300px] pb-8 opacity-100"
                            : "max-h-0 opacity-0"
                        }
                      `}
                    >
                      <p
                        className="
                          max-w-[720px]

                          font-manrope
                          text-[16px]
                          font-normal
                          leading-[30px]
                          text-[#707070]
                        "
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
