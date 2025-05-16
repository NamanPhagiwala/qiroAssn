import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[352px] mb-10">
      <div className="absolute inset-[.1]">
        <Image
          src="/hero-banner.png"
          alt="Boston Downtown Financial District"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#303030] via-black/2 to-[#B0B0B0]/25" />
      </div>

      <div className="relative h-full px-11 py-10 flex justify-between">
        <div className="flex flex-col gap-3">
          <Link
            href="/open-deals"
            className="flex items-center gap-2.5 text-white hover:opacity-80 transition-opacity"
          >
            <Image
              src="/back.svg"
              alt="back-btn"
              width={20}
              height={20}
              className=""
            />
          </Link>

          <div className="flex flex-col gap-4">
            <h1 className="text-white text-xl font-medium">Featured Loan</h1>

            <div className="flex items-center gap-2.5">
              <h2 className="text-white text-2xl font-semibold">
                Fintech Agency LLC
              </h2>
              <button className="px-4 underline py-2.5 text-white flex items-center">
                <span className="">Contract</span>
                <Image
                  src="/hyperlink-arrow.svg"
                  alt="hyperlink-btn"
                  width={22}
                  height={22}
                  className=""
                />
              </button>
            </div>

            <p className="text-white text-sm max-w-[560px]">
              Helo Finance specialises in offering liquidity services tailored
              for Small and Medium Businesses (SMBs) with an annual revenue
              threshold of at least $50 million.
            </p>
          </div>

          <div className="flex w-full gap-3">
            <div className="w-full">
              <div className="bg-white/10 rounded-[18px] py-3 px-4.5 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3.5">
                    <span className="text-white text-sm font-normal">
                      Estimated APY
                    </span>
                  </div>
                  <span className="text-white text-[28px] font-medium">
                    14%
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="bg-white/10 rounded-[18px] py-3 px-4.5 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3.5">
                    <span className="text-white text-sm">
                      Minimum Investment
                    </span>
                  </div>
                  <span className="text-white text-[28px] font-medium">
                    $100K
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="bg-white/10 rounded-[18px] py-3 px-4.5 flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center text-sm gap-3.5">
                    <span className="text-white">Total Value Locked</span>
                  </div>
                  <span className="text-white text-[28px] font-medium">
                    $5M
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-self-end self-end gap-4">
          <div className="flex gap-3">
            <button className="py-2.5 px-3 bg-white/70 rounded-full flex items-center gap-2">
              <Image
                src="/web-icon.svg"
                alt="web-icon"
                width={16}
                height={16}
                className=""
              />
              <span className="text-[#121212] text-xs font-medium">
                Website
              </span>
            </button>
            <button className="py-2.5 px-3 bg-white/70 rounded-full flex items-center gap-2">
              <Image
                src="/linkedin-icon.svg"
                alt="linkedin-icon"
                width={16}
                height={16}
                className=""
              />
              <span className="text-[#121212] text-xs font-medium">
                Linkedin
              </span>
            </button>
            <button className="py-2.5 px-3 bg-white/70 rounded-full flex items-center gap-2">
              <Image
                src="/x-icon.svg"
                alt="x-icon"
                width={16}
                height={16}
                className=""
              />
              <span className="text-[#121212] text-xs font-medium">
                Twitter
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
