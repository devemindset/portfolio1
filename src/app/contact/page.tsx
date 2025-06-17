

import type { NextPage } from "next";
import Contact from "./components/Contact";
import SiteUserActionComponent from "@/components/SiteUserActionComponent";
import MainHeader from "../dashboard/components/MainHeader";


const Page: NextPage = ({}) => {
  


  
  

  return (
    <>
    <MainHeader />
    <Contact />
    
    <SiteUserActionComponent action="visit" object="contact"/>
    
     </>
  );
};

export default Page;
