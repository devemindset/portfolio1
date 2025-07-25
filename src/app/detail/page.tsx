import type { NextPage } from "next";
import Header from "../../components/template_1/Header";
import Details from "./components/Details";

const detail = {
    imageSrc : "/picture1.png",
    title : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, laborum!",
    detail : `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore similique tenetur maiores? Aut hic blanditiis laborum nesciunt earum nam magni explicabo odit vitae aliquid, voluptatibus eligendi velit magnam at.

        nesciunt earum nam magni explicabo odit vitae aliquid, voluptatibus eligendi velit magnam at.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore similique tenetur maiores? Aut hic blanditiis laborum nesciunt earum nam magni explicabo odit vitae aliquid, voluptatibus eligendi velit magnam at.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos labore similique tenetur maiores? Aut hic blanditiis laborum nesciunt earum nam magni explicabo odit vitae aliquid, voluptatibus eligendi velit magnam at.

        blanditiis laborum nesciunt earum nam magni explicabo odit vitae aliquid, voluptatibus eligendi velit magnam at.

        blanditiis laborum nesciunt earum nam magni explicabo odit vitae aliquid, voluptatibus eligendi velit magnam at.
    `
}
const Page: NextPage = () => {
  return (
    <>
    <Header />
    <main>
                <div className='text-center bg-[var(--background-element)] text-[var(--text-element)] py-10'>
                <h3 className=' font-bold text-6xl py-5'>Service Details</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod dolore totam.</p>
                </div>
                {/* list  */}
                <div>
                            <Details  detail={detail.detail} title={detail.title} imageSrc={detail.imageSrc}  />
              
                </div>
                
    </main>
    </>
  )
}

export default Page