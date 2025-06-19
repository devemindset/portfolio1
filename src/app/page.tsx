

import FeaturesSection from "@/components/landing/FeaturesSection";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import ProblemSolutionSection from "@/components/landing/ProblemSolutionSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import type {  NextPage } from "next";
import PricingComponent from "./pricing/components/PricingComponent";
import FAQSection from "@/components/landing/FAQSection";


// const steps = [
//   {
//     title: "1. Create your freelance validation link",
//     icon: <Link2 className="w-8 h-8 text-blue-600" />,
//     text: "Describe your offer, service or proposal in a few lines.",
//   },
//   {
//     title: "2. Share it with potential clients",
//     icon: <Share2 className="w-8 h-8 text-blue-600" />,
//     text: "Send it via email, LinkedIn, Slack or any platform you use.",
//   },
//   {
//     title: "3. Collect clear feedback",
//     icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
//     text: "Know who is interested, who isn't — and why.",
//   },
// ];




const Page: NextPage = () => {
 
  return (
    <>
    <Header />
    <HeroSection />
    <ProblemSolutionSection />
    <HowItWorksSection />
    {/* <VideoDemoSection /> */}
    <TestimonialsSection />
    <FeaturesSection />
    <div className="flex items-center justify-center py-5 bg-white " id="pricing">
    <PricingComponent />

    </div>
    <FAQSection />
    {/* <WhyValidationMatters /> */}
    {/* <FinalCTASection /> */}
    {/* <HowItWorksSimple InSimples={howItWorksSimple} title="How it works. in 3 simple steps"/> */}
    {/* <HowItWorksSimple InSimples={whyUseValidFlow} title="Why use Validation Flow?"/> */}
    {/* <HowItWorksSimple InSimples={realUseCase} title="Real Use Cases */}

    {/* <FinalCTASection /> */}
   </>
  )
}



export default Page
