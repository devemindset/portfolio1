import { Folder } from 'lucide-react';
import type { FC } from 'react';
import Service from './Service';


const serviceList = [
    {
        icon : <Folder size={45} className='text-[var(--text-span)]'/>,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <Folder size={45} className='text-[var(--text-span)]'/>,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <Folder size={45} className='text-[var(--text-span)]'/>,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <Folder size={45} className='text-[var(--text-span)]'/>,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <Folder size={45} className='text-[var(--text-span)]'/>,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <Folder size={45} className='text-[var(--text-span)]'/>,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <Folder size={45} className='text-[var(--text-span)]'/>,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
    {
        icon : <Folder size={45} className='text-[var(--text-span)]'/>,
        title : "Lorem ipsum",
        description : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, doloremque.",
        path : "/",
    },
]

const ServiceList: FC = () => {
        return (
            <section className='my-20'>
                <div className=' text-center'>
                    <h2 className='font-bold text-6xl py-5'>Services</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                {/* lists  */}
                <div className='mt-20 grid grid-cols-3 gap-5 px-20 mx-auto'>
                    {serviceList.map((service,index) => (
                        <Service key={index} icon={service.icon} title={service.title} description={service.description} path={service.path} />
                    ))
                    }
                </div>
            </section>
        );
}
export default ServiceList;