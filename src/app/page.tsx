import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TabSystem from "@/components/TabSystem";
import InvestmentForm from "@/components/CardTransfer";
import OverviewSection from "@/components/OverviewSection";
import HighlightsSection from "@/components/HighlightSection";
import AssetsSection from "@/components/Assets";
import Repayment from "@/components/RepaymentSection";
import Underwriterr from "@/components/Underwrtiers";
import PoolActivity from "@/components/PoolActivity";
import StructureSection from "@/components/TrancheDetails";

export default function Home() {
  return (
    <main className="bg-[#F8F8F8] pb-20">
      <Navbar />
      <HeroSection />
      <div className="flex gap-8 px-11">
        <div className="flex-1 flex flex-col gap-8.5">
          <TabSystem />
          <OverviewSection />
          <HighlightsSection />
          <Repayment />
          <AssetsSection />
          <StructureSection />
          <Underwriterr />
          <PoolActivity />
        </div>
        <InvestmentForm />
      </div>
    </main>
  );
}
