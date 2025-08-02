import type { NextPage } from "next";
import Header from "../../components/template_3/Header";
import Footer from "../../components/template_3/Footer";
import ProductList from "../../components/template_3/ProductList";


const Page: NextPage = () => {
    
  return (
    <>
    <Header />
    <ProductList />
    <Footer />
    </>
  )
}

export default Page