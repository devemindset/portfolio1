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
import { AboutType, BackgroundImageType, ContactType, ProductType, ServiceType, TestimonialType } from "../types";
import { fetchAbout, fetchBackgroundImage, fetchContact, fetchProducts, fetchServices, fetchTestimonials } from "../lib/api";
// import ResumeList from "../components/template_2/ResumeList";



const Page: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [about, setAbout] = useState<AboutType | null>(null);
  const [contact, setContact] = useState<ContactType | null>(null);
  const [services, setServices] = useState<ServiceType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [testimonials, setTestimonials] = useState<TestimonialType[]>([]);
  const [background, setBackground] = useState<BackgroundImageType | null>(null);

  useEffect(() => {
    // Simule le chargement ou attends que le composant soit monté
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {

    if(loading || !about || !contact || services.length === 0 || products.length === 0 || testimonials.length === 0 || !background ) {

    fetchAbout().then(setAbout);
    fetchContact().then(setContact);
    fetchServices().then(setServices);
    fetchProducts().then(setProducts);
    fetchTestimonials().then(setTestimonials);
    fetchBackgroundImage().then(setBackground);
    setLoading(false)
    }

  }, [loading]);

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