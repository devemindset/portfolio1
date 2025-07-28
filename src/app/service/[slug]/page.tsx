import type { NextPage } from "next";
import Details from "./components/Details";
import type { Metadata } from "next";
import Header from "./components/Header";
import ServiceList from "../../../components/template_1/ServiceList";
import Contact from "../../../components/template_1/Contact";
import ContactForm from "../../../components/template_1/ContactForm";
import Footer from "../../../components/template_1/Footer";
import { fetchContact, fetchServiceBySlug, fetchServices, fetchSocialNetworks } from "../../../lib/api";

interface Props {
  params: {
    slug : string;
  }
}

export async function generateMetadata({ params} : Props): Promise<Metadata> {
  const service = await fetchServiceBySlug(params.slug)

  if(!service){
    return {
      title: "Service Not Found",
    }
  }
  return {
    title : service.service_name,
    description : service.description.slice(0,160),
    openGraph : {
      title: service.service_name,
      description : service.description.slice(0,160),
      type : 'article',
    },
  }
}
const Page: NextPage = async ( {params } : Props) => {
  const service = await fetchServiceBySlug(params.slug);
  const services = await fetchServices();
  const contact = await fetchContact();
  const social = await fetchSocialNetworks();
  return (
    <>
    <Header />
    <main className="min-h-screen">
                <div className='text-center bg-[var(--background-element)] text-[var(--text-element)] py-20'>
                <h3 className=' font-bold text-2xl sm:text-4xl  py-5'>Service Details</h3>
                <p className="text-sm sm:text-xl px-5">{service.description}</p>
                </div>
                {/* list  */}
                <div>
                            <Details  detail={service.content} title={service.service_name} imageSrc={service.image}  />
              
                </div>
    <ServiceList services={services} />
    <Contact contact={contact} />
    <ContactForm />            
    </main>
    
    <Footer social={social}/>
    </>
  )
}

export default Page