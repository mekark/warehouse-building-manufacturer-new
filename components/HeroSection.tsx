"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

const stats = [
  {
    value: "2M+",
    label: "SQ.FT DELIVERED",
  },
  {
    value: "6,00,000",
    label: "SQ.FT IN-HOUSE\nMANUFACTURING\nFACILITY",
  },
  {
    value: "40,000 t",
    label: "ANNUAL PRODUCTION",
  },
  {
    value: "120 d",
    label: "FAST-TRACK MODEL",
  },
];
const FORM_ENDPOINT = "/api/enquiry-form";

const THANK_YOU_URL = "https://www.mekark.com/thank-you";
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  location: string;
  sqft: string;
  projectDetails: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const INITIAL_FORM_VALUES: FormValues = {
  name: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  location: "",
  sqft: "",
  projectDetails: "",
};
export default function HeroSection() {
  const [formValues, setFormValues] = useState<FormValues>(INITIAL_FORM_VALUES);

  const [formErrors, setFormErrors] = useState<FormErrors>({});

  const [statusMessage, setStatusMessage] = useState<{
    tone: "success" | "error";
    text: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const errors: FormErrors = {};

    const phoneDigits = formValues.phoneNumber.replace(/\D/g, "");

    if (!formValues.name.trim()) {
      errors.name = "This field is required.";
    }

    if (!formValues.email.trim()) {
      errors.email = "This field is required.";
    } else if (!EMAIL_REGEX.test(formValues.email)) {
      errors.email = "Enter valid email.";
    }

    if (!formValues.phoneNumber.trim()) {
      errors.phoneNumber = "This field is required.";
    } else if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      errors.phoneNumber = "Enter valid phone number.";
    }

    if (!formValues.companyName.trim()) {
      errors.companyName = "This field is required.";
    }

    if (!formValues.location.trim()) {
      errors.location = "This field is required.";
    }

    if (!formValues.sqft.trim()) {
      errors.sqft = "This field is required.";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      setStatusMessage({
        tone: "error",
        text: "Please correct the highlighted fields.",
      });

      return;
    }

    try {
      setIsSubmitting(true);

      setStatusMessage(null);

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formValues.name.trim(),
          email: formValues.email.trim(),
          phone: formValues.phoneNumber.trim(),
          company: formValues.companyName.trim(),
          location: formValues.location.trim(),
          sqft: formValues.sqft.trim(),
          projectDetails: formValues.projectDetails.trim(),
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(payload?.message || "Unable to submit form.");
      }

      setFormValues(INITIAL_FORM_VALUES);

      window.location.assign(THANK_YOU_URL);
    } catch (error) {
      setStatusMessage({
        tone: "error",
        text: error instanceof Error ? error.message : "Something went wrong.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (error?: string) => `
    h-[42px]
    w-full
    rounded-[8px]
    border
    ${error ? "border-[#C4161C] bg-[#FFF5F5]" : "border-[#DADADA] bg-white"}
    px-3
    text-[12px]
    text-black
    outline-none
    transition-all
    focus:border-[#ED2024]
  `;
  return (
    <section className="relative overflow-hidden bg-[#F5F5F5]">
      {" "}
      {/* NAVBAR */}
      <header
        className="
    fixed
    top-0
    left-0
    z-50

    flex
    h-[64px]
    w-full
    items-center
    justify-between

    bg-[#F5F5F5]/95
    backdrop-blur-md

    px-4

    sm:h-[68px]
    sm:px-6

    lg:px-[140px]
  "
      >
        {/* LOGO */}
        <div
          className="
      flex
      items-center
      justify-center

      h-[38px]
      w-[88px]

      bg-[#ED2024]

      sm:h-[44px]
      sm:w-[98px]
    "
        >
          <img
            src="/Images/icon.png"
            alt="Mekark Logo"
            className="
        h-[18px]
        w-auto
        object-contain

        sm:h-[22px]
      "
          />
        </div>

        {/* BUTTON */}
        <button
          className="
      inline-flex
      items-center
      justify-center
      gap-1.5

      rounded-[8px]
      bg-[#ED2024]

      px-4
      py-2.5

      text-[12px]
      font-semibold
      text-white

      shadow-[0px_10px_24px_rgba(237,32,36,0.22)]

      transition-all
      duration-300

      hover:bg-[#cf1a20]

      sm:gap-2
      sm:rounded-[10px]
      sm:px-6
      sm:py-3
      sm:text-[15px]
    "
        >
          <span className="text-[12px] sm:text-[14px]">⚡</span>

          <span className="whitespace-nowrap">Get Free Quote</span>
        </button>
      </header> 
      <div className="w-full">
        <div
          className="
            relative
            overflow-hidden

            grid
            grid-cols-1

lg:grid-cols-[58%_42%]
lg:min-h-[750px]
          "
        >
          {/* RIGHT IMAGE */}
          <div
            className="
              absolute
              top-0
              right-0

              hidden

              h-full
              w-[43%]

              overflow-hidden

              lg:block
            "
          >
            <Image
              src="/Images/Warehouse Interior.png"
              alt="Warehouse Interior"
              fill
              priority
              className="object-cover object-[center_top]"
            />

            <div className="absolute inset-0 bg-black/35" />
          </div>

          {/* LEFT SECTION */}
          <div
            className="
              relative
              z-20

              flex
              justify-end

              bg-[#F5F5F5]

              px-5
              py-12

              sm:px-8

              lg:pl-[120px]
              lg:pr-[70px]
              lg:py-[72px]
            "
          >
            {/* ANGLED SHAPE */}
            <div
              className="
    absolute
    top-0
    -right-[24px]
    z-10

    hidden
    h-full
    w-[52px]

    bg-[#F5F5F5]

    lg:block
  "
              style={{
                clipPath: "polygon(0 0, 100% 0, 52% 100%, 0% 100%)",
              }}
            />

            {/* CONTENT */}
            <div
              className="
                relative
                z-20

                w-full
                max-w-[760px]

                flex
                flex-col
                justify-start
                  pt-[0px]

              "
            >
              {/* HEADING */}
              <div>
                <h1
                  className="
                    text-[44px]
                    font-bold
                    leading-[95%]
                    tracking-[-2px]
                    text-black

                    sm:text-[58px]

                    lg:text-[86px]
                  "
                >
                  Go Operational in
                </h1>

                <div className="mt-3 flex flex-wrap items-end gap-4">
                  <span
                    className="
                      relative

                      text-[58px]
                      font-bold
                      leading-[90%]
                      tracking-[-2px]
                      text-[#ED2024]

                      sm:text-[78px]

                      lg:text-[96px]
                    "
                  >
                    120 Days
                  </span>

                  <span
                    className="
                      mb-3
                      text-[24px]
                      font-light
                      leading-[100%]
                      text-[#5E5E5E]

                      sm:text-[30px]

                      lg:text-[42px]
                    "
                  >
                    not 9-12 months.
                  </span>
                </div>
              </div>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-8
                  max-w-[720px]

                  text-[18px]
                  font-normal
                  leading-[1.7]
                  text-[#5F5F5F]
                "
              >
                We design, manufacture and deliver high-performance{" "}
                <span className="font-semibold text-black">
                  PEB warehouse buildings
                </span>{" "}
                with complete in-house control — eliminating delays, cost
                overruns, and vendor dependency.
              </p>

              {/* SMALL TEXT */}
              <p
                className="
                  mt-7

                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[5px]
                  text-[#1F1F1F]
                "
              >
                BUILT FOR DECISION-MAKERS WHO CAN’T AFFORD SLOW EXECUTION.
              </p>

              {/* BUTTON */}
              <div className="mt-10">
                <button
                  className="
                    inline-flex
                    items-center
                    justify-center

                    min-w-[300px]

                    rounded-[10px]
                    bg-[#ED2024]

                    px-8
                    py-4

                    text-[15px]
                    font-semibold
                    text-white

                    shadow-[0px_12px_30px_rgba(237,32,36,0.28)]

                    transition-all
                    duration-300

                    hover:scale-[1.02]
                    hover:bg-[#cf1a20]
                  "
                >
                  Get Your Warehouse Plan & Timeline →
                </button>
              </div>

              {/* STATS */}
              {/* DIVIDER */}
              <div
                className="
    mt-14

    h-[1px]

    w-full
    max-w-[620px]

    bg-[#DADADA]
  "
              />

              {/* STATS */}
              <div
                className="
    mt-6

    grid
    grid-cols-2

    gap-x-3
    gap-y-8

    sm:grid-cols-4

    lg:max-w-[720px]
  "
              >
                {stats.map((item, index) => (
                  <div key={index}>
                    {/* VALUE */}
                    <h3
                      className="
  flex
  items-start

  font-[800]
  font-manrope

  leading-[100%]
  tracking-[-1px]
  text-black

  text-[28px]

  lg:text-[34px]
"
                    >
                      {item.value.includes("+") ? (
                        <>
                          {item.value.replace("+", "")}
                          <span className="text-[#ED2024]">+</span>
                        </>
                      ) : item.value.includes("t") ? (
                        <>
                          {item.value.replace("t", "")}
                          <span className="text-[#ED2024]">t</span>
                        </>
                      ) : item.value.includes("d") ? (
                        <>
                          {item.value.replace("d", "")}
                          <span className="text-[#ED2024]">d</span>
                        </>
                      ) : (
                        item.value
                      )}
                    </h3>

                    {/* LABEL */}
                    <p
                      className="
                        mt-3
                        whitespace-pre-line

                        text-[10px]
                        font-semibold
                        uppercase

                        leading-[120%]
                        tracking-[0.8px]

                        text-[#8A8A8A]

                        lg:text-[11px]
                      "
                    >
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div
            className="
  relative
  z-20

  flex
  items-start
  justify-center

  min-h-[750px]

lg:pt-[92px]

  px-5
  py-12

  lg:justify-start
  lg:pl-[70px]
  lg:pr-[80px]
  lg:px-0
  lg:py-0
"
          >
            {/* MOBILE IMAGE */}
            <div className="absolute inset-0 lg:hidden">
              <Image
                src="/Images/Warehouse Interior.png"
                alt="Warehouse Interior"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* FORM CARD */}
            <div
              className="
                relative
                z-20

                w-full

lg:w-[500px]
lg:h-[565px]

                rounded-[22px]

                border
                border-[#E2E2E2]

                bg-[rgba(226,226,226,0.9)]

                px-[34px]
                pt-[31px]
                pb-[31px]

                shadow-[0px_18px_60px_rgba(0,0,0,0.06)]

                backdrop-blur-md
              "
            >
              {/* TITLE */}
              <h2
                className="
                  text-[16px]
                  font-bold
                  text-[#111111]
                "
              >
                Request Your Project Blueprint
              </h2>

              <p
                className="
                  mt-2
                  text-[11px]
                  text-[#7A7A7A]
                "
              >
                Get a custom layout, cost range & 120-day timeline
              </p>

              {/* FORM */}
              <form
                className="mt-5 space-y-[10px]"
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {/* NAME */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter Your Name"
                      value={formValues.name}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.name)}
                    />

                    {formErrors.name && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      value={formValues.email}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.email)}
                    />

                    {formErrors.email && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {/* PHONE */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phoneNumber"
                      placeholder="Enter Your Number"
                      value={formValues.phoneNumber}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.phoneNumber)}
                    />

                    {formErrors.phoneNumber && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* COMPANY */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Company Name
                    </label>

                    <input
                      type="text"
                      name="companyName"
                      placeholder="Enter Your company"
                      value={formValues.companyName}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.companyName)}
                    />

                    {formErrors.companyName && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.companyName}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  {/* LOCATION */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Location
                    </label>

                    <input
                      type="text"
                      name="location"
                      placeholder="Enter Your location"
                      value={formValues.location}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.location)}
                    />

                    {formErrors.location && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.location}
                      </p>
                    )}
                  </div>

                  {/* SQFT */}
                  <div>
                    <label className="mb-1 block text-[10px] font-medium text-[#444]">
                      Square Feet
                    </label>

                    <select
                      name="sqft"
                      value={formValues.sqft}
                      onChange={handleInputChange}
                      className={inputClass(formErrors.sqft)}
                    >
                      <option value="">Choose Your (Sq.Ft.)</option>
                      <option value="1000-5000">1000 - 5000</option>
                      <option value="5000-10000">5000 - 10000</option>
                      <option value="10000-50000">10000 - 50000</option>
                      <option value="50000+">50000+</option>
                    </select>

                    {formErrors.sqft && (
                      <p className="mt-1 text-[11px] text-[#C4161C]">
                        {formErrors.sqft}
                      </p>
                    )}
                  </div>
                </div>

                {/* PROJECT DETAILS */}
                <div>
                  <label className="mb-1 block text-[10px] font-medium text-[#444]">
                    Project Details
                  </label>

                  <textarea
                    name="projectDetails"
                    rows={4}
                    placeholder="Enter Project Details"
                    value={formValues.projectDetails}
                    onChange={handleInputChange}
                    className="
        w-full
        rounded-[8px]
        border
        border-[#DADADA]
        bg-white
        px-3
        py-3
        text-[12px]
        text-black
        outline-none
        transition-all
        focus:border-[#ED2024]
      "
                  />
                </div>

                {/* STATUS */}
                {statusMessage && (
                  <div
                    className={`
        rounded-[8px]
        border
        px-3
        py-2
        text-[11px]
        font-medium
        ${
          statusMessage.tone === "success"
            ? "border-green-200 bg-green-50 text-green-700"
            : "border-red-200 bg-red-50 text-red-700"
        }
      `}
                  >
                    {statusMessage.text}
                  </div>
                )}

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
      mt-3
      h-[48px]
      w-full
      rounded-[8px]
      bg-[#ED2024]
      text-[12px]
      font-semibold
      text-white
      shadow-[0px_12px_30px_rgba(237,32,36,0.18)]
      transition-all
      duration-300
      hover:bg-[#cf1a20]
      disabled:cursor-not-allowed
      disabled:opacity-70
    "
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Request Your Project Blueprint →"}
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* DECISION MAKER TRIGGERS */}
        <div
          className="
    relative
    overflow-hidden

    flex
    flex-col
    justify-center

    h-[124px]
    w-full

    bg-[#ED2024]
  "
        >
          {/* TOP SMALL LABEL */}
          <div
            className="
      absolute
      top-[18px]
      left-1/2
      z-20
      -translate-x-1/2
    "
          >
            <p
              className="
        whitespace-nowrap

        font-manrope
        text-[14px]
        font-bold

        leading-[20px]
        tracking-[1px]

        text-[#9F0F14]
      "
            >
              If Your Warehouse Is Delayed, Your Revenue Is Too
            </p>
          </div>

          {/* MOVING CAROUSEL */}
          <div
            className="
      relative
      mt-[6px]

      overflow-hidden
      whitespace-nowrap
    "
          >
            <div
              className="
        flex
        w-max
        items-center

        animate-[marquee_28s_linear_infinite]
      "
            >
              {[
                "DELAYED OPERATIONS = LOST REVENUE",
                "INEFFICIENT LAYOUTS = HIGHER LOGISTICS COST",
                "VENDOR DEPENDENCY = EXECUTION RISK",
                "POOR PLANNING = FUTURE EXPANSION LIMITS",

                "DELAYED OPERATIONS = LOST REVENUE",
                "INEFFICIENT LAYOUTS = HIGHER LOGISTICS COST",
                "VENDOR DEPENDENCY = EXECUTION RISK",
                "POOR PLANNING = FUTURE EXPANSION LIMITS",
              ].map((item, index) => (
                <div
                  key={index}
                  className="
            flex
            items-center
          "
                >
                  {/* TEXT */}
                  <span
                    className="
              px-10

              whitespace-nowrap

              font-manrope
              text-[24px]
              font-[800]
              uppercase

              leading-[32px]
              tracking-[4px]

              text-white
            "
                  >
                    {item}
                  </span>

                  {/* SLASH */}
                  <span
                    className="
              px-6

              text-[48px]
              font-light
              leading-none

              text-white/80
            "
                  >
                    /
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM LABEL */}
          <div
            className="
      absolute
      bottom-[16px]
      left-1/2
      z-20
      -translate-x-1/2
    "
          >
            <p
              className="
        whitespace-nowrap

        font-manrope
        text-[14px]
        font-bold

        leading-[20px]
        tracking-[1px]

        text-[#9F0F14]
      "
            >
              Mekark eliminates all four — with a single turnkey execution model
            </p>
          </div>
        </div>
        {/* TRUSTED BRANDS SECTION */}
        <section
          className="
    w-full
    bg-[#F5F5F5]

    px-5
    py-[48px]

    sm:px-8
    sm:py-[60px]

    lg:px-[120px]
    lg:py-[80px]
  "
        >
          <div
            className="
      mx-auto
      flex
      max-w-[1440px]
      flex-col
      items-center
      justify-between
      gap-10

      lg:flex-row
      lg:items-start
      lg:gap-16
    "
          >
            {/* LEFT CONTENT */}
            <div
              className="
        w-full
        max-w-[420px]

        text-center

        lg:text-left
      "
            >
              <h2
                className="
          font-manrope
          text-[28px]
          font-semibold
          leading-[38px]
          tracking-[0.01em]
          text-black

          sm:text-[34px]
          sm:leading-[46px]

          lg:text-[38px]
          lg:leading-[52px]
        "
              >
                Trusted by businesses
                <br />
                that run on timelines,
                <br />
                <span className="font-normal text-[#5E5E66]">
                  not promises.
                </span>
              </h2>
            </div>

            {/* RIGHT LOGOS */}
            <div
              className="
        grid
        w-full
        grid-cols-2
        items-center
        justify-items-center
        gap-x-6
        gap-y-8

        sm:grid-cols-3

        lg:flex
        lg:w-auto
        lg:flex-nowrap
        lg:gap-14
      "
            >
              <img
                src="Images/agile.webp"
                alt="Anna University"
                className="
          h-[70px]
          w-auto
          object-contain

          sm:h-[85px]

          lg:h-[110px]
        "
              />

              <img
                src="Images/bosch.webp"
                alt="SRM"
                className="
          h-[45px]
          w-auto
          object-contain

          sm:h-[55px]

          lg:h-[70px]
        "
              />

              <img
                src="Images/tata.webp"
                alt="QMed"
                className="
          h-[70px]
          w-auto
          object-contain

          sm:h-[85px]

          lg:h-[110px]
        "
              />

              <img
                src="Images/reliance.webp"
                alt="Velammal"
                className="
          h-[70px]
          w-auto
          object-contain

          sm:h-[85px]

          lg:h-[110px]
        "
              />

              <img
                src="Images/tvs.webp"
                alt="KRM"
                className="
          h-[70px]
          w-auto
          object-contain

          sm:h-[85px]

          lg:h-[110px]
        "
              />
            </div>
          </div>

          {/* BOTTOM TEXT */}
          <div
            className="
      mt-[40px]

      flex
      justify-center

      lg:mt-[54px]
      lg:justify-end
    "
          >
            <p
              className="
        max-w-[900px]

        text-center

        font-manrope
        text-[15px]
        font-normal
        leading-[26px]

        text-[#5E5E66]

        sm:text-[18px]

        lg:text-[24px]
        lg:leading-[36px]
        lg:text-right
      "
            >
              Chosen by companies that need reliable warehouse construction in
              Chennai and across India.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
