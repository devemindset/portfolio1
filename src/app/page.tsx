"use client"

import type { NextPage } from "next"
import {  useEffect, useState } from "react"

import Header from "../components/template_4/Header"
import Hero from "../components/template_4/Hero"
import Footer from "../components/template_4/Footer"
import BackgroundLoader from "../components/BackgroundLoader"
import About from "../components/template_4/About"
import ServiceList from "../components/template_4/ServiceList"
import TestimonialList from "../components/template_4/TestimonialList"
import ProductList from "../components/template_4/ProductList"
import Contact from "../components/template_4/Contact"
import ContactForm from "../components/template_4/ContactForm"

// import {
//   AboutType,
//   BackgroundImageType,
//   ContactType,
//   ProductType,
//   ServiceType,
//   SocialNetworkType,
//   TestimonialType,
// } from "../types"

// import {
//   fetchAbout,
//   fetchBackgroundImage,
//   fetchContact,
//   fetchProducts,
//   fetchServices,
//   fetchSocialNetworks,
//   fetchTestimonials,
// } from "../lib/api"

const Page: NextPage = () => {
  const [loading, setLoading] = useState(true)

  // const [about, setAbout] = useState<AboutType | null>(null)
  // const [contact, setContact] = useState<ContactType | null>(null)
  // const [services, setServices] = useState<ServiceType[]>([])
  // const [products, setProducts] = useState<ProductType[]>([])
  // const [testimonials, setTestimonials] = useState<TestimonialType[]>([])
  // const [background, setBackground] = useState<BackgroundImageType | null>(null)
  // const [social,setSocial] = useState<SocialNetworkType[]>([])

  // Chargement des données
  // useEffect(() => {
  //   const fetchAll = async () => {
  //     try {
  //       const [
  //         aboutData,
  //         contactData,
  //         serviceData,
  //         productData,
  //         testimonialData,
  //         backgroundData,
  //         socialData,
  //       ] = await Promise.all([
  //         fetchAbout(),
  //         fetchContact(),
  //         fetchServices(),
  //         fetchProducts(),
  //         fetchTestimonials(),
  //         fetchBackgroundImage(),
  //         fetchSocialNetworks(),
  //       ])

  //       setAbout(aboutData)
  //       setContact(contactData)
  //       setServices(serviceData)
  //       setProducts(productData)
  //       setTestimonials(testimonialData)
  //       setBackground(backgroundData)
  //       setSocial(socialData)
  //     } catch (error) {
  //       console.error("Error loading data:", error)
  //     } finally {
  //       setLoading(false)
  //     }
  //   }

  //   fetchAll()
  // }, [])

  // if (loading || !about || !contact || !background) {
  //   return <BackgroundLoader />
  // }
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
      <Hero  />
      <About  />
      <ServiceList  />
      <TestimonialList  />
      <ProductList  />
      <Contact  />
      <ContactForm />
      <Footer  />
      {/* <Header />
      <Hero background={background} social={social} />
      <About about={about} />
      <ServiceList services={services} />
      <TestimonialList testimonials={testimonials} />
      <ProductList products={products} />
      <Contact contact={contact} />
      <ContactForm />
      <Footer social={social} /> */}
    </>
  )
}

export default Page
