import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
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
    </>
  )
}

export default Page
