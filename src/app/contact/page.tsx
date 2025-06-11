

import SiteUserActionComponent from "@/components/SiteUserActionComponent";

import type { NextPage } from "next";
import Contact from "./components/Contact";


const Page: NextPage = ({}) => {
  


  
  

  return (
    <>
   
    <Contact />
    
    <SiteUserActionComponent action="visit" object="contact"/>
    
     </>
  );
};

export default Page;
