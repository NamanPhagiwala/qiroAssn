// src/components/HighlightsSection.tsx
import Image from "next/image";

const highlights = [
  {
    icon: "/secure-data-icon.svg",
    title: "Secure & Collateralized",
    desc: "The pool is overcollateralized with real-world assets, ensuring risk protection. Assets include commercial real estate, SME loans, and structured finance products.",
  },
  {
    icon: "/file-protect-icon.svg",
    title: "Investor Protection",
    desc: "20-25% first-loss capital ensures investors are protected from defaults. Senior tranche structure prioritizes investor repayments.",
  },
  {
    icon: "/global-icon.svg",
    title: "Global & Diversified",
    desc: "Borrowers span 15+ countries across multiple sectors. Industries include supply chain financing, renewable energy, and fintech lending.",
  },
  {
    icon: "/transparency-icon.svg",
    title: "Transparent & Monitored",
    desc: "Investors receive quarterly financial reports and real-time loan tracking. Data rooms provide access to borrower financials and risk metrics.",
  },
];

const HighlightsSection = () => (
  <section className="w-full flex flex-col gap-6.5 mt-10" id="highlights">
    <h2 className="text-[#090A0B] text-[22px] font-semibold mb-2">
      Highlights
    </h2>
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        {highlights.slice(0, 2).map((item) => (
          <div
            key={item.title}
            className="bg-white border border-[#F1F1F1] rounded-[24px] flex-1 px-9 py-8 flex flex-col gap-6"
          >
            <div className="w-11 h-11 flex items-center justify-center">
              <Image src={item.icon} alt={item.title} width={44} height={44} />
            </div>
            <div>
              <h3 className="text-[#3C3756] text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-[#746F87] text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        {highlights.slice(2, 4).map((item) => (
          <div
            key={item.title}
            className="bg-white border border-[#F1F1F1] rounded-[24px] flex-1 px-9 py-8 flex flex-col gap-6"
          >
            <div className="w-11 h-11 flex items-center justify-center">
              <Image src={item.icon} alt={item.title} width={44} height={44} />
            </div>
            <div>
              <h3 className="text-[#3C3756] text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-[#746F87] text-base">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
