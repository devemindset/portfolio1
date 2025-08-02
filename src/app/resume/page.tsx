import type { NextPage } from "next";
import Header from "../../components/template_3/Header";
import Footer from "../../components/template_3/Footer";
import ResumeList from "../../components/template_3/ResumeList";



const Page: NextPage = () => {
    
  return (
    <>
    <Header />
    <ResumeList />
    <Footer />
    </>
  )
}

export default Page