
import RequestHeader from "@/components/RequestHeader";
import SiteUserActionComponent from "@/components/SiteUserActionComponent";

import type { NextPage } from "next";
import Contact from "./components/Contact";


const Page: NextPage = ({}) => {
  


  
  

  return (
    <>
    <RequestHeader />
    <Contact />
    
    <SiteUserActionComponent action="visit" object="contact"/>
    
     </>
  );
};

export default Page;
