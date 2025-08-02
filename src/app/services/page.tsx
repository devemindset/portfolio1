import type { NextPage } from "next";
import Header from "../../components/template_3/Header";
import Footer from "../../components/template_3/Footer";
import ServiceList from "../../components/template_3/ServiceList";


const Page: NextPage = () => {
    
  return (
    <>
    <Header />
    <ServiceList />
    <Footer />
    </>
  )
}

export default Page