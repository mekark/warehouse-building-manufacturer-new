"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
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
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
          </motion.div>

          <div
            className="
              relative
              z-10
              max-w-[980px]
            "
          >
            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
            </motion.div>

            {/* QUOTE */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
    max-w-[928px]

    font-manrope
    text-[32px]
    font-bold
    leading-[36px]
    tracking-[-1.6px]
    text-black

    sm:text-[44px]
    sm:leading-[48px]
    sm:tracking-[-2px]

    lg:text-[56.2px]
    lg:leading-[57.12px]
    lg:tracking-[-2.72px]
  "
            >
              “Mekark delivered{" "}
              <span className="text-[#ED2024]">ahead of schedule</span>
              <br />
              with complete control over quality and
              <br />
              execution. Their{" "}
              <span className="font-light text-[#8F8F8F]">
                in-house capability
              </span>{" "}
              is a
              <br />
              major advantage.”
            </motion.h2>

            {/* AUTHOR */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
                mt-10
                flex
                items-center
                gap-4
              "
            >
              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: -3,
                }}
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
              </motion.div>

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
            </motion.div>
          </div>

          {/* RIGHT QUOTE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative

              hidden

              overflow-visible

              lg:block
            "
          >
            <motion.div
              whileHover={{
                scale: 1.02,
              }}
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
            </motion.div>
          </motion.div>

          {/* RIGHT FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* LABEL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
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
            </motion.div>

            {/* FAQ ITEMS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="space-y-1"
            >
              {FAQS.map((faq, index) => {
                const isActive = active === index;

                return (
                  <motion.div
                    key={faq.question}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 20,
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    transition={{
                      duration: 0.5,
                    }}
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

                      <motion.div
                        animate={{
                          rotate: isActive ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
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
                      </motion.div>
                    </button>

                    {/* CONTENT */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isActive ? "auto" : 0,
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8">
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
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
