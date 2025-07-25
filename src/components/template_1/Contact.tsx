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
                    <h2 className='font-bold text-6xl py-5'>Contact</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className='grid grid-cols-3 my-10 gap-5 bg-[var(--background-element-3)]  p-10 rounded-2xl shadow-2xl'>
                    {siteInfo.map((info,index) => (
                        <Info key={ index} title={info.title} description={info.description} icon={info.icon} />
                    ))

                    }
                </div>
            </section>
        );
}
export default Contact;