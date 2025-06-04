import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import FinalCTASection from "@/components/FinalCTASection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <>
    <Header />
    <HeroSection />
    <ProblemSolutionSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <FeaturesSection />
    < PricingSection />
    <FAQSection />
    <FinalCTASection />
    </>
  )
}

export default Page
