import type { FC } from 'react';
import Info from './Info';

const siteInfo = [
    {
        icon : <i className="bi bi-geo-alt flex-shrink-0" />,
        title : "Address",
        description : "A108 Adam Street, New York, NY 535022",
    },
    {
        title : "Call",
        description : "+1 5589 55488 55",
        icon : <i className="bi bi-telephone flex-shrink-0" />
    },
    {
        title : "Email",
        description : "info@example.com",
        icon : <i className="bi bi-envelope flex-shrink-0" />
    }
]

const Contact: FC = () => {
        return (
            <section className='mt-20 flex flex-col items-center bg-[var(--background-element-3)]'>
                <div className=' text-center'>
                    <h2 className='text-center py-5 my-5  text-3xl sm:py-10 font-bold sm:text-4xl md:text-6xl'>Contact</h2>
                    <p className='text-sm sm:text-2xl  px-5 text-[var(--text-element-small-black)] '>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 my-10 gap-5 bg-[var(--background-element-3)]  p-10 rounded-2xl shadow-2xl'>
                    {siteInfo.map((info,index) => (
                        <Info key={ index} title={info.title} description={info.description} icon={info.icon} />
                    ))

                    }
                </div>
            </section>
        );
}
export default Contact;