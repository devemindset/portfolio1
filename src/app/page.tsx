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

const Page: NextPage = () => {
  return (
    <>
    <Header />
    <Hero />
    <About />
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