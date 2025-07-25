import type { FC } from 'react';

interface InfoProps {
    icon : React.ReactNode;
    title : string;
    description : string;
}

const Info: FC<InfoProps> = ({ icon,title,description }) => {
        return (
            <div className="flex gap-5">
                <div className='text-2xl border border-[var(--text-span)] rounded-full p-2 sm:p-4 gap-2'>
                    {icon}
                </div>
                <div>
                  <h3 className='font-bold '>{title}</h3>
                  <p className='text-sm text-[var(--text-element-small-black)]'>{description}</p>
                </div>
              </div>
        );
}
export default Info;