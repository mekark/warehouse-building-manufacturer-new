"use client";

export default function FacilitySection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-black
      "
    >
      {/* Background */}
      <div
        className="
          absolute
          inset-0
          z-0
        "
      >
        <img
          src="/Images/bgq (1).png"
          alt="Warehouse Facility"
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-black/55
          "
        />

        {/* Blur */}
        <div
          className="
            absolute
            inset-0
            backdrop-blur-[2px]
          "
        />
      </div>

      {/* Main Content */}
      <div
        className="
    relative
    z-10
    mx-auto

    flex
    min-h-[500px]
    max-w-[1440px]
    flex-col
    justify-center

    px-6
    py-20

    sm:px-10

    lg:min-h-[620px]
    lg:px-16
  "
      >
        <div
          className="
            grid
            items-center
            gap-12

            lg:grid-cols-2
          "
        >
          {/* LEFT */}
          <div
            className="
              max-w-[700px]
            "
          >
            {/* Heading */}
            <div>
              <h2
                className="
                  font-manrope
                  text-[42px]
                  font-extrabold
                  leading-[55.2px]
                  tracking-[-3px]
                  text-white

                  sm:text-[60px]
                "
              >
                Where speed and quality
              </h2>

              <h3
                className="
                  font-manrope
                  text-[42px]
                  font-extralight
                  leading-[55.2px]
                  tracking-[-3px]
                  text-[#BFBFBF]

                  sm:text-[60px]
                "
              >
                are engineered.
              </h3>
            </div>

            {/* Description + Stats */}
            <div
              className="
                mt-10

                flex
                flex-col
                gap-10

                lg:flex-row
                lg:items-start
              "
            >
              {/* Description */}
              <div
                className="
                  max-w-[340px]
                "
              >
                <p
                  className="
                    font-manrope
                    text-[15px]
                    font-light
                    leading-[21px]
                    tracking-[0%]
                    text-[#E5E5E5]
                  "
                >
                  Our 6 lakh sq.ft facility ensures faster delivery of{" "}
                  <span className="font-semibold text-white">
                    pre-engineered warehouse buildings
                  </span>{" "}
                  with uncompromised quality — 40,000 tons of annual production
                  capacity, entirely under one roof.
                </p>
              </div>

              {/* Stats */}
              <div>
                {/* Red Line */}
                <div
                  className="
                    mb-5
                    h-[2px]
                    w-[230px]
                    bg-[#ED2024]
                  "
                />

                {/* Number */}
                <h4
                  className="
                    font-manrope
                    text-[90px]
                    font-extrabold
                    leading-none
                    text-white

                    sm:text-[120px]
                  "
                >
                  6L
                </h4>

                {/* Label */}
                <p
                  className="
                    mt-2

                    font-manrope
                    text-[18px]
                    font-semibold
                    uppercase
                    tracking-[8px]
                    text-[#C8C8C8]
                  "
                >
                  SQ.FT FACILITY
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT PNG */}
          <div
            className="
    absolute
    right-0
    bottom-0
    z-20

    hidden

    lg:block
  "
          >
            <img
              src="/Images/Men.png"
              alt="Worker"
              className="
      h-auto
      w-auto

      max-w-[430px]
      xl:max-w-[500px]

      object-contain
      object-bottom
    "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
