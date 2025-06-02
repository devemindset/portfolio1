import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import type { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <>
    <HeroSection />
    <ProblemSolutionSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <FeaturesSection />
    < PricingSection />
    </>
  )
}

export default Page
