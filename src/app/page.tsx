"use client"
import type { NextPage } from "next";
import Header from "../components/template_1/Header";
import Hero from "../components/template_1/Hero";
import About from "../components/template_1/About";
import ServiceList from "../components/template_1/ServiceList";
import TestimonialList from "../components/template_1/TestimonialList";
import ProductList from "../components/template_1/ProductList";
import Contact from "../components/template_1/Contact";
import ContactForm from "../components/template_1/ContactForm";
import Footer from "../components/template_1/Footer";
import { useEffect, useState } from "react";
import BackgroundLoader from "../components/BackgroundLoader";
// import ResumeList from "../components/template_2/ResumeList";



const Page: NextPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule le chargement ou attends que le composant soit monté
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <BackgroundLoader />

  return (
    <>
    <Header />
    <Hero />
    <About />
    {/* <ResumeList /> */}
    <ServiceList />
    <TestimonialList />
    <ProductList />
    <Contact />
    <ContactForm />

    <Footer />
    
    </>
  )
}

export default Page