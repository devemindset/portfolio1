
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import FinalCTASection from "@/components/FinalCTASection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import HowItWorksSimple from "@/components/HowItWorksSimple";
import PricingComponent from "@/components/PricingComponent";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import SiteUserActionComponent from "@/components/SiteUserActionComponent";


import TestimonialsSection from "@/components/TestimonialsSection";
import VideoDemoSection from "@/components/VideoDemoSection";
import WhyValidationMatters from "@/components/WhyValidationMatters";
import { howItWorksSimple, realUseCase, whyUseValidFlow } from "@/constant";

import type {  NextPage } from "next";


const Page: NextPage = () => {
 
  return (
    <>
    <Header />
    <HeroSection />
    <ProblemSolutionSection />
    <HowItWorksSection />
    <VideoDemoSection />
    <TestimonialsSection />
    <FeaturesSection />
    <div className="flex items-center justify-center py-5 bg-white " id="pricing">
    <PricingComponent />

    </div>
    <FAQSection />
    <WhyValidationMatters />
    <FinalCTASection />
    <HowItWorksSimple InSimples={howItWorksSimple} title="How it works. in 3 simple steps"/>
    <HowItWorksSimple InSimples={whyUseValidFlow} title="Why use Validation Flow?"/>
    <HowItWorksSimple InSimples={realUseCase} title="Real Use Cases
"/>
    <FinalCTASection />
    <SiteUserActionComponent action="visit" object="home"/>
    </>
    
  )
}



export default Page
