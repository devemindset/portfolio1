"use client";
import FAQSection from "@/components/FAQSection";
import FeaturesSection from "@/components/FeaturesSection";
import FinalCTASection from "@/components/FinalCTASection";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingComponent from "@/components/PricingComponent";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { useAuthState } from "@/context/AuthContext";
import type {  NextPage } from "next";
import { useEffect } from "react";


const Page: NextPage = () => {
  const {userAction} = useAuthState();
       
      useEffect(() => {
            userAction("visit","home")
          },[])

  return (
    <>
    <Header />
    <HeroSection />
    <ProblemSolutionSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <FeaturesSection />
    <div className="flex items-center justify-center py-5 bg-white " id="pricing">
    <PricingComponent />

    </div>
    <FAQSection />
    
    <FinalCTASection />
    </>
  )
}



export default Page
