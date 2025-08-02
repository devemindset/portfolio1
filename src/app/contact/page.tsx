import type { NextPage } from "next";
import Header from "../../components/template_3/Header";
import Footer from "../../components/template_3/Footer";
import Contact from "../../components/template_3/Contact";
import ContactForm from "../../components/template_3/ContactForm";


const Page: NextPage = () => {
    
    
  return (
    <>
    <Header />
    <Contact />
    <ContactForm />
    <Footer />
    </>
  )
}

export default Page