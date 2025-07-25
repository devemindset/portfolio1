import type { FC } from 'react';
import Service from './Service';
import OkIcon from '../ui/OkIcon';


const serviceList = [
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <OkIcon className='w-8 h-8 text-[var(--text-span)]' />,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
]

const ServiceList: FC = () => {
        return (
            <section className='my-5 sm:my-20'>
                <div className=' text-center'>
                    <h2 className='text-center py-5 my-5  text-3xl sm:py-10 font-bold sm:text-4xl md:text-6xl'>Services</h2>
                    <p className='text-xl px-5 text-[var(--text-element-small-black)]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                {/* lists  */}
                <div className='mt-20 grid grid-cols-1  md:grid-cols-2  2xl:grid-cols-4 gap-5  sm:px-20  justify-items-center'>
                    {serviceList.map((service,index) => (
                        <Service key={index} icon={service.icon} title={service.title} description={service.description} path={service.path} />
                    ))
                    }
                </div>
            </section>
        );
}
export default ServiceList;